"use client"

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { startOfDay, isSameDay, subDays } from 'date-fns';

interface StreakState {
    streak: number;
    lastCompletedDate: number | null;
    recordCompletion: () => void;
    checkStreak: () => void;
}

export const useStreakStore = create<StreakState>()(
    persist(
        (set, get) => ({
            streak: 0,
            lastCompletedDate: null,
            recordCompletion: () => set(state => {
                const today = startOfDay(new Date()).getTime();
                const lastDay = state.lastCompletedDate ? startOfDay(new Date(state.lastCompletedDate)).getTime() : null;

                if (lastDay && isSameDay(today, lastDay)) {
                    // Already completed today, do nothing
                    return {};
                }
                
                const yesterday = startOfDay(subDays(new Date(), 1)).getTime();
                
                if (lastDay && isSameDay(lastDay, yesterday)) {
                    // Completed yesterday, increment streak
                    return { streak: state.streak + 1, lastCompletedDate: today };
                } else {
                    // Didn't complete yesterday, reset streak to 1
                    return { streak: 1, lastCompletedDate: today };
                }
            }),
            checkStreak: () => {
                const { lastCompletedDate } = get();
                if (!lastCompletedDate) return;

                const today = startOfDay(new Date());
                const lastDay = startOfDay(new Date(lastCompletedDate));
                const yesterday = startOfDay(subDays(today, 1));
                
                // If the last completion was not today or yesterday, streak is broken
                if (!isSameDay(lastDay, today) && !isSameDay(lastDay, yesterday)) {
                    set({ streak: 0 });
                }
            }
        }),
        {
            name: 'dsa-streak-store',
            onRehydrateStorage: () => (state) => {
                // This function is called when the store is rehydrated from localStorage
                if (state) {
                    state.checkStreak();
                }
            }
        }
    )
);

// Call checkStreak on initial load for client-side usage
if (typeof window !== 'undefined') {
    useStreakStore.getState().checkStreak();
}
