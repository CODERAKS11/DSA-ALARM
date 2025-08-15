
"use client"

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { analyzeImage } from '@/ai/flows/analyze-image';
import { useAlarmStore } from '@/hooks/useAlarmStore';
import { useDsaProgress } from '@/hooks/useDsaProgress';
import { useStreakStore } from '@/hooks/useStreakStore';
import type { Question } from '@/lib/dsa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Camera, Video, Zap, ExternalLink, Rocket } from 'lucide-react';
import Image from 'next/image';
import { Label } from '../ui/label';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import Link from 'next/link';
import { useNotificationStore } from '@/hooks/useNotificationStore';
import { playSound } from '@/lib/audio';

const TIME_LIMIT_SECONDS = 15 * 60; // 15 minutes

export function QuestionSolver({ question }: { question: Question }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const { getAlarmById, nextQuestion, removeAlarm } = useAlarmStore();
    const { recordCompletion } = useStreakStore();
    const { notificationPermission } = useNotificationStore();

    const [alarmId, setAlarmId] = useState<string | null>(null);
    useEffect(() => {
        setAlarmId(searchParams.get('alarmId'));
    }, [searchParams]);

    const alarm = alarmId ? getAlarmById(alarmId) : null;
    const { completeQuestion } = useDsaProgress();

    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [analysisFailed, setAnalysisFailed] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const timerDeadlineKey = `dsa-timer-deadline-${question.id}-${alarmId || 'solo'}`;
    const [isClient, setIsClient] = useState(false);

    // Webcam state
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        let localTimerId: NodeJS.Timeout;

        const handleTimeout = () => {
            toast({ variant: "destructive", title: "Time's up!", description: "Please try solving the question again." });
            playSound(alarm?.sound || 'classic');
            if (notificationPermission === 'granted') {
                new Notification('DSA Alarm: Time\'s Up!', {
                    body: `Time to solve "${question.title}" ran out. Try again!`,
                    icon: '/icon.png',
                });
            }
            const newDeadline = Date.now() + TIME_LIMIT_SECONDS * 1000;
            localStorage.setItem(timerDeadlineKey, newDeadline.toString());
            setTimeLeft(TIME_LIMIT_SECONDS);
        };
        
        const setupTimer = () => {
            const savedDeadline = localStorage.getItem(timerDeadlineKey);
            const now = Date.now();
            
            let deadline: number;
            if (savedDeadline) {
                deadline = parseInt(savedDeadline, 10);
                const remaining = Math.round((deadline - now) / 1000);
                if (remaining > 0) {
                    setTimeLeft(remaining);
                } else {
                    deadline = now + TIME_LIMIT_SECONDS * 1000;
                    localStorage.setItem(timerDeadlineKey, deadline.toString());
                    setTimeLeft(TIME_LIMIT_SECONDS);
                }
            } else {
                deadline = now + TIME_LIMIT_SECONDS * 1000;
                localStorage.setItem(timerDeadlineKey, deadline.toString());
                setTimeLeft(TIME_LIMIT_SECONDS);
            }
    
            localTimerId = setInterval(() => {
                const currentDeadline = parseInt(localStorage.getItem(timerDeadlineKey)!, 10);
                const newRemaining = Math.round((currentDeadline - Date.now()) / 1000);
                if (newRemaining <= 0) {
                    clearInterval(localTimerId);
                    handleTimeout();
                    setupTimer();
                } else {
                    setTimeLeft(newRemaining);
                }
            }, 1000);
        }

        setupTimer();

        return () => clearInterval(localTimerId);
    }, [question.id, alarmId, isClient, notificationPermission, question.title, alarm?.sound, timerDeadlineKey, toast]);

    useEffect(() => {
        const getCameraPermission = async () => {
          if (!isCameraOpen) return;
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setHasCameraPermission(true);
    
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (error) {
            console.error('Error accessing camera:', error);
            setHasCameraPermission(false);
            toast({
              variant: 'destructive',
              title: 'Camera Access Denied',
              description: 'Please enable camera permissions in your browser settings.',
            });
          }
        };
    
        getCameraPermission();
    
        return () => {
          if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
          }
        }
      }, [isCameraOpen, toast]);

    const handleSuccess = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(timerDeadlineKey);
        }
        completeQuestion(question.id);
        recordCompletion();

        if (alarm) {
            const nextIndex = alarm.currentQuestionIndex + 1;
            if (nextIndex < alarm.questionIds.length) {
                nextQuestion(alarm.id);
                const nextQuestionId = alarm.questionIds[nextIndex];
                router.push(`/question/${nextQuestionId}?alarmId=${alarm.id}`);
            } else {
                toast({ title: "All questions solved!", description: "You've completed your daily DSA workout! Alarm removed." });
                removeAlarm(alarm.id);
                router.push('/');
            }
        } else {
            toast({ title: "Question Solved!", description: "Great job! Your progress and streak have been updated." });
            router.push('/');
        }
    };

    const analyzePhoto = async (photoDataUri: string) => {
        setUploadedImage(photoDataUri);
        setIsAnalyzing(true);
        setAnalysisFailed(false);
        setIsCameraOpen(false);
        try {
            const result = await analyzeImage({
                photoDataUri,
                questionDescription: `Title: ${question.title}. Description: ${question.description}`,
            });

            if (result.isLegitimate) {
                toast({ title: "Verification Successful!", description: "Great job!" });
                handleSuccess();
            } else {
                toast({ variant: "destructive", title: "Verification Failed", description: result.reason });
                setAnalysisFailed(true);
            }
        } catch (error) {
            console.error(error);
            toast({ variant: "destructive", title: "Analysis Error", description: "Could not analyze the image. Please try again." });
            setAnalysisFailed(true);
        } finally {
            setIsAnalyzing(false);
        }
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const photoDataUri = e.target?.result as string;
                analyzePhoto(photoDataUri);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCapture = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                const dataUri = canvas.toDataURL('image/jpeg');
                analyzePhoto(dataUri);
            }
        }
    }

    const triggerFileSelect = () => fileInputRef.current?.click();
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const progressPercentage = (timeLeft / TIME_LIMIT_SECONDS) * 100;
    
    const currentQuestionNumber = alarm ? alarm.currentQuestionIndex + 1 : 1;
    const totalQuestions = alarm ? alarm.questionIds.length : 1;

    return (
        <div className="max-w-4xl mx-auto">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-3xl mb-2">{question.title}</CardTitle>
                            <CardDescription className="text-base font-code">{question.description}</CardDescription>
                        </div>
                        <div className="text-right ml-4 flex-shrink-0">
                             {isClient && alarm && (
                                <p className="text-lg font-semibold text-primary">{`${currentQuestionNumber} / ${totalQuestions}`}</p>
                            )}
                             {isClient && alarm && (
                                <p className="text-sm text-muted-foreground">Questions</p>
                            )}
                        </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {question.link && (
                            <Button asChild variant="link" className="px-0">
                                <Link href={question.link} target="_blank" rel="noopener noreferrer">
                                    View Question on takeuforward <ExternalLink className="ml-2" />
                                </Link>
                            </Button>
                        )}
                         {question.practiceLink && (
                            <Button asChild variant="link" className="px-0">
                                <Link href={question.practiceLink} target="_blank" rel="noopener noreferrer">
                                    Practice on LeetCode <Rocket className="ml-2" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <Label className="text-lg">Time Remaining</Label>
                            <span className="text-2xl font-bold font-mono text-primary">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                        </div>
                        <Progress value={progressPercentage} />
                    </div>

                    {uploadedImage && (
                        <div className="flex justify-center">
                           <Image src={uploadedImage} alt="Uploaded solution" width={400} height={300} className="rounded-md object-contain border" data-ai-hint="code screenshot" />
                        </div>
                    )}
                    
                    {isAnalyzing && (
                        <div className="flex flex-col items-center justify-center gap-4 p-8">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            <p className="text-lg text-muted-foreground">Analyzing your solution...</p>
                        </div>
                    )}

                    {(!isAnalyzing || analysisFailed) && (
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" onClick={triggerFileSelect} disabled={isAnalyzing} className="flex-1 max-w-sm py-8 text-xl">
                                <Camera className="mr-2 h-6 w-6" />
                                Upload Photo
                            </Button>

                            <Dialog open={isCameraOpen} onOpenChange={setIsCameraOpen}>
                                <DialogTrigger asChild>
                                    <Button size="lg" variant="secondary" className="flex-1 max-w-sm py-8 text-xl">
                                        <Video className="mr-2 h-6 w-6" />
                                        Use Webcam
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                        <DialogTitle>Verify with Webcam</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <video ref={videoRef} className="w-full aspect-video rounded-md bg-muted" autoPlay muted playsInline />
                                        {hasCameraPermission === false && (
                                            <Alert variant="destructive">
                                                <AlertTitle>Camera Access Required</AlertTitle>
                                                <AlertDescription>
                                                    Please allow camera access in your browser to use this feature.
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={handleCapture} disabled={hasCameraPermission !== true}>
                                            <Zap className="mr-2 h-4 w-4" />
                                            Capture & Verify
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
