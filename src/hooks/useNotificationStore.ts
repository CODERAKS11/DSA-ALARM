"use client"

import { useState, useEffect, useCallback } from 'react';
import useLocalStorage from './use-local-storage';

export function useNotificationStore() {
    const [notificationPermission, setNotificationPermission] = useLocalStorage<NotificationPermission>('notification-permission', 'default');
    
    useEffect(() => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            setNotificationPermission(Notification.permission);
        }
    }, []);

    const requestNotificationPermission = useCallback(async () => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            if (Notification.permission === 'granted') {
                return;
            }
            const permission = await Notification.requestPermission();
            setNotificationPermission(permission);
        }
    }, [setNotificationPermission]);

    return { notificationPermission, requestNotificationPermission };
}
