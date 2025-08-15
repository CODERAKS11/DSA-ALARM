"use client"

import type { AlarmSound } from "@/hooks/useAlarmStore";

const soundFiles: Record<AlarmSound, string> = {
    classic: '/sounds/classic.mp3',
    digital: '/sounds/digital.mp3',
    gentle: '/sounds/gentle.mp3',
    none: '',
};

let currentAudio: HTMLAudioElement | null = null;

export function playSound(sound: AlarmSound) {
    if (typeof window === 'undefined' || sound === 'none') {
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    const audio = new Audio(soundFiles[sound]);
    audio.play().catch(error => {
        console.error("Failed to play audio:", error);
    });
    currentAudio = audio;
}

export function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}
