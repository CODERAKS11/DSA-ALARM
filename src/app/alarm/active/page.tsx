"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAlarmStore } from '@/hooks/useAlarmStore';
import { AlarmClock, Play, History, ExternalLink, Rocket } from 'lucide-react';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { getQuestionById } from '@/lib/dsa';

// Moved searchParams usage inside this subcomponent
function ActiveAlarmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getAlarmById, startAlarm, snoozeAlarm } = useAlarmStore();
  const [alarmId, setAlarmId] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get('alarmId');
    if (id) {
      setAlarmId(id);
    } else {
      router.push('/');
    }
  }, [searchParams, router]);

  const alarm = alarmId ? getAlarmById(alarmId) : null;
  const firstQuestionId = alarm?.questionIds[0];
  const firstQuestion = firstQuestionId ? getQuestionById(firstQuestionId) : null;

  const handleStart = () => {
    if (!alarm || !firstQuestionId) return;
    startAlarm(alarm.id);
    router.push(`/question/${firstQuestionId}?alarmId=${alarm.id}`);
  };

  const handleSnooze = () => {
    if (!alarmId) return;
    snoozeAlarm(alarmId);
    router.push('/');
  };

  if (!alarm || !firstQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
        <p>Loading alarm...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="text-center">
        <AlarmClock className="mx-auto h-24 w-24 text-primary animate-pulse" />
        <h1 className="mt-8 text-5xl font-headline font-bold text-foreground">DSA Alarm!</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Time to solve: <span className="font-bold text-foreground">{firstQuestion.title}</span>
        </p>
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Button size="lg" className="flex-1 text-lg py-8" onClick={handleStart}>
          <Play className="mr-2 h-6 w-6" />
          Start
        </Button>
        {firstQuestion.link && (
          <Button asChild size="lg" variant="outline" className="flex-1 text-lg py-8">
            <Link href={firstQuestion.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-6 w-6" />
              Article
            </Link>
          </Button>
        )}
        {firstQuestion.practiceLink && (
          <Button asChild size="lg" variant="secondary" className="flex-1 text-lg py-8">
            <Link href={firstQuestion.practiceLink} target="_blank" rel="noopener noreferrer">
              <Rocket className="mr-2 h-6 w-6" />
              Practice
            </Link>
          </Button>
        )}
      </div>
      <div className="mt-4 w-full max-w-sm">
        <Button size="lg" variant="secondary" className="w-full text-lg py-8" onClick={handleSnooze}>
          <History className="mr-2 h-6 w-6" />
          2 Minutes Later
        </Button>
      </div>
    </div>
  );
}

export default function ActiveAlarmPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading alarm page...</div>}>
      <ActiveAlarmContent />
    </Suspense>
  );
}
