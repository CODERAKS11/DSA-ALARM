"use client"

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export type AlarmSound = 'classic' | 'digital' | 'gentle' | 'none';

export interface Alarm {
    id: string;
    alarmDateTime: number; // Store as UTC timestamp
    questionIds: string[];
    isActive: boolean;
    currentQuestionIndex: number;
    snoozeUntil: number | null;
    sound: AlarmSound;
}

const initialAlarmState: Omit<Alarm, 'id' | 'alarmDateTime' | 'questionIds'> = {
    isActive: false,
    currentQuestionIndex: 0,
    snoozeUntil: null,
    sound: 'classic',
};


interface AlarmStore {
    alarms: Alarm[];
    addOrUpdateAlarm: (alarmDetails: { id?: string; dateTime: number; questions: string[], sound: AlarmSound }) => void;
    removeAlarm: (id: string) => void;
    getAlarmById: (id: string) => Alarm | undefined;
    activateAlarm: (id: string) => void;
    startAlarm: (id: string) => void;
    snoozeAlarm: (id: string) => void;
    nextQuestion: (id: string) => void;
    resetAlarm: (id: string) => void;
}

export const useAlarmStore = create<AlarmStore>()(
    persist(
        (set, get) => ({
            alarms: [],
            addOrUpdateAlarm: ({ id, dateTime, questions, sound }) => set(state => {
                const existingIndex = state.alarms.findIndex(a => a.id === id);
                if (existingIndex > -1) {
                    // Update existing alarm
                    const updatedAlarms = [...state.alarms];
                    updatedAlarms[existingIndex] = {
                        ...updatedAlarms[existingIndex],
                        alarmDateTime: dateTime,
                        questionIds: questions,
                        sound: sound,
                        isActive: false, // Reset state on update
                        snoozeUntil: null,
                    };
                    return { alarms: updatedAlarms };
                } else {
                    // Add new alarm
                    const newAlarm: Alarm = {
                        id: uuidv4(),
                        alarmDateTime: dateTime,
                        questionIds: questions,
                        sound: sound,
                        ...initialAlarmState,
                    };
                    return { alarms: [...state.alarms, newAlarm] };
                }
            }),
            removeAlarm: (id) => set(state => ({
                alarms: state.alarms.filter(a => a.id !== id)
            })),
            getAlarmById: (id) => get().alarms.find(a => a.id === id),
            activateAlarm: (id) => set(state => {
                const alarms = state.alarms.map(alarm =>
                    alarm.id === id ? { ...alarm, isActive: true, snoozeUntil: null } : alarm
                );
                return { alarms };
            }),
            startAlarm: (id) => set(state => {
                 const alarms = state.alarms.map(alarm =>
                    alarm.id === id ? { ...alarm, isActive: true, currentQuestionIndex: 0, snoozeUntil: null } : alarm
                );
                return { alarms };
            }),
            snoozeAlarm: (id) => set(state => {
                const alarms = state.alarms.map(alarm =>
                    alarm.id === id ? { ...alarm, isActive: false, snoozeUntil: Date.now() + 2 * 60 * 1000 } : alarm
                );
                return { alarms };
            }),
            nextQuestion: (id) => set(state => {
                const alarms = state.alarms.map(alarm =>
                    alarm.id === id ? { ...alarm, currentQuestionIndex: alarm.currentQuestionIndex + 1 } : alarm
                );
                return { alarms };
            }),
            resetAlarm: (id) => set(state => {
                const alarms = state.alarms.map(alarm =>
                    alarm.id === id ? { ...alarm, ...initialAlarmState } : alarm
                );
                return { alarms };
            }),
        }),
        {
            name: 'dsa-alarms-store',
        }
    )
);
