"use client"

import useLocalStorage from './use-local-storage';
import { allQuestions } from '@/lib/dsa';

const initialProgress = allQuestions.reduce((acc, question) => {
    acc[question.id] = false;
    return acc;
}, {} as Record<string, boolean>);

export function useDsaProgress() {
    const [progress, setProgress] = useLocalStorage<Record<string, boolean>>('dsa-progress', initialProgress);

    const toggleQuestion = (questionId: string) => {
        setProgress({
            ...progress,
            [questionId]: !progress[questionId],
        });
    };
    
    const completeQuestion = (questionId: string) => {
        setProgress(prev => ({...prev, [questionId]: true}));
    }

    return { progress, toggleQuestion, completeQuestion };
}
