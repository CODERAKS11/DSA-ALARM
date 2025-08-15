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
    
    const soundFile = soundFiles[sound];
    if (!soundFile) {
        // Silently exit if there's no sound file defined to avoid errors.
        return;
    }

    const audio = new Audio(soundFile);
    
    // Add an error listener to catch loading problems
    audio.addEventListener('error', () => {
        console.warn(`Could not load sound file: ${soundFile}. Please ensure the file exists in the public/sounds directory.`);
        return;
    });

    // Only play if the source is valid
    audio.addEventListener('canplaythrough', () => {
        audio.play().catch(error => {
            console.error("Failed to play audio:", error);
        });
        currentAudio = audio;
    });
}

export function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}
