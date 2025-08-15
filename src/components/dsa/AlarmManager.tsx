"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAlarmStore } from '@/hooks/useAlarmStore';
import { useDsaProgress } from '@/hooks/useDsaProgress';
import { allQuestions } from '@/lib/dsa';
import { isToday, startOfTomorrow } from 'date-fns';
import { playSound } from '@/lib/audio';

const activatedAlarms = new Set<string>();
const LAST_AUTO_ALARM_CHECK_KEY = 'last-auto-alarm-check';

const showNotification = (title: string, options: NotificationOptions) => {
  if (
    typeof window !== 'undefined' &&
    'Notification' in window &&
    Notification.permission === 'granted' &&
    'serviceWorker' in navigator &&
    navigator.serviceWorker.ready
  ) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification(title, options);
    });
  }
};


export function AlarmManager() {
  const { alarms, activateAlarm, addOrUpdateAlarm } = useAlarmStore();
  const { progress } = useDsaProgress();
  const router = useRouter();

   useEffect(() => {
    if (typeof window === 'undefined') return;

    const requestNotificationPermission = async () => {
        if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            await Notification.requestPermission();
        }
    };
    requestNotificationPermission();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        (registration) => {
          console.log('Service Worker registration successful with scope: ', registration.scope);
        },
        (err) => {
          console.log('Service Worker registration failed: ', err);
        }
      );
    }

  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkAlarms = () => {
      const now = Date.now();
      
      alarms.forEach(alarm => {
        if (alarm.isActive || activatedAlarms.has(alarm.id)) {
           const alarmTimePassed = now > alarm.alarmDateTime;
           const snoozeTimePassed = alarm.snoozeUntil && now > alarm.snoozeUntil;
           if(snoozeTimePassed) {
                activatedAlarms.delete(alarm.id);
           } else if (alarmTimePassed && !snoozeTimePassed) {
               return;
           }
        }
        
        const hasSnoozeExpired = alarm.snoozeUntil && now >= alarm.snoozeUntil;
        const isInitialAlarmTime = now >= alarm.alarmDateTime && !alarm.snoozeUntil && !activatedAlarms.has(alarm.id);

        if (hasSnoozeExpired || isInitialAlarmTime) {
           if (isInitialAlarmTime) {
             activatedAlarms.add(alarm.id);
           }
           activateAlarm(alarm.id);
           
           showNotification('DSA Alarm!', {
             body: 'Time to solve your daily DSA problems.',
             icon: '/icons/icon-192x192.png',
           });
           
           playSound(alarm.sound);
           router.push(`/alarm/active?alarmId=${alarm.id}`);
        }
      });
    };

    const interval = setInterval(checkAlarms, 1000 * 5); // Check every 5 seconds
    checkAlarms();

    return () => clearInterval(interval);
  }, [alarms, router, activateAlarm]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const autoSetNextDayAlarm = () => {
        const lastCheck = localStorage.getItem(LAST_AUTO_ALARM_CHECK_KEY);
        if (lastCheck && isToday(new Date(parseInt(lastCheck, 10)))) {
            return;
        }

        const tomorrow = startOfTomorrow();
        const hasAlarmForTomorrow = alarms.some(alarm => {
            const alarmDate = new Date(alarm.alarmDateTime);
            return alarmDate >= tomorrow && alarmDate < new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000);
        });

        if (!hasAlarmForTomorrow) {
            const lastCompletedQuestionIndex = allQuestions.findLastIndex(q => progress[q.id]);
            const nextQuestionIndex = lastCompletedQuestionIndex === -1 ? 0 : lastCompletedQuestionIndex + 1;
            
            const nextQuestions = allQuestions.slice(nextQuestionIndex, nextQuestionIndex + 3);

            if (nextQuestions.length > 0) {
                const nextDayAlarmTime = new Date(tomorrow);
                nextDayAlarmTime.setHours(7, 0, 0, 0);

                addOrUpdateAlarm({
                    dateTime: nextDayAlarmTime.getTime(),
                    questions: nextQuestions.map(q => q.id),
                    sound: 'classic'
                });
                
                showNotification('DSA Alarm', {
                    body: `We've automatically set an alarm for you tomorrow at 7 AM. Keep the streak going!`,
                    icon: '/icons/icon-192x192.png',
                });
            }
        }
        
        localStorage.setItem(LAST_AUTO_ALARM_CHECK_KEY, Date.now().toString());
    };
    
    const dailyCheckInterval = setInterval(autoSetNextDayAlarm, 1000 * 60);
    autoSetNextDayAlarm(); 

    return () => clearInterval(dailyCheckInterval);

  }, [alarms, progress, addOrUpdateAlarm]);

  return null;
}
