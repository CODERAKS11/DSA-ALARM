"use client";

import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SetAlarmSheet } from "@/components/dsa/SetAlarmSheet";
import dsaQuestions, { type Category, type Question, allQuestions } from "@/lib/dsa";
import { useDsaProgress } from "@/hooks/useDsaProgress";
import { useNotificationStore } from "@/hooks/useNotificationStore";
import { useAlarmStore, type Alarm } from "@/hooks/useAlarmStore";
import { useStreakStore } from "@/hooks/useStreakStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlarmPlus, Bell, Trash2, Edit, Flame, CheckCircle2, ExternalLink, Rocket, BrainCircuit } from "lucide-react";
import { format } from 'date-fns';
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";

export function Dashboard() {
  const [isAlarmSheetOpen, setIsAlarmSheetOpen] = useState(false);
  const [editingAlarm, setEditingAlarm] = useState<Alarm | null>(null);
  const { progress, toggleQuestion } = useDsaProgress();
  const { notificationPermission, requestNotificationPermission } = useNotificationStore();
  const { alarms, removeAlarm } = useAlarmStore();
  const { streak } = useStreakStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleOpenAlarmSheet = (alarm: Alarm | null = null) => {
    setEditingAlarm(alarm);
    setIsAlarmSheetOpen(true);
  };

  const totalCompleted = isClient ? Object.values(progress).filter(p => p).length : 0;
  const totalQuestions = allQuestions.length;
  const overallProgress = totalQuestions > 0 ? (totalCompleted / totalQuestions) * 100 : 0;
  

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-4 gap-2 flex-wrap">
          <h1 className="text-3xl font-headline font-bold">Striver's A2Z DSA Course Progress</h1>
          <div className="flex gap-2">
          {isClient && notificationPermission !== 'granted' && (
              <Button onClick={requestNotificationPermission} variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Bell className="mr-2 h-4 w-4" />
              Enable Notifications
              </Button>
          )}
          <Button onClick={() => handleOpenAlarmSheet()} className="bg-primary hover:bg-primary/90">
              <AlarmPlus className="mr-2 h-4 w-4" />
              Set New Alarm
          </Button>
          </div>
      </div>
      
      <Card className="mb-8 bg-card/50 border-border/50">
        <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-bold">{isClient ? `${totalCompleted} / ${totalQuestions}` : '...'}</span>
            </div>
            <Progress value={isClient ? overallProgress : 0} />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Accordion type="multiple" className="w-full space-y-4">
                {dsaQuestions.map((category) => {
                  const completedInCategory = isClient ? category.lectures.flatMap(l => l.questions).filter(q => progress[q.id]).length : 0;
                  const totalInCategory = category.lectures.flatMap(l => l.questions).length;

                  return (
                    <AccordionItem value={category.name} key={category.name} className="border border-border/50 rounded-lg bg-card/50">
                        <AccordionTrigger className="p-4 hover:no-underline">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-xl font-headline font-semibold">{category.name}</span>
                            <span className="text-sm text-muted-foreground">{isClient ? `${completedInCategory} / ${totalInCategory}` : '...'}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-0">
                          {category.lectures.map(lecture => (
                            <div key={lecture.name}>
                              <h3 className="font-semibold bg-muted/50 p-3 border-b border-t border-border/50">{lecture.name}</h3>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[80px]">Status</TableHead>
                                    <TableHead>Problem</TableHead>
                                    <TableHead className="text-right">Links</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {lecture.questions.map((question: Question) => (
                                    <TableRow key={question.id}>
                                      <TableCell className="text-center">
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          onClick={() => toggleQuestion(question.id)}
                                          disabled={!isClient}
                                        >
                                          <CheckCircle2 className={cn("h-6 w-6", isClient && progress[question.id] ? "text-primary" : "text-muted-foreground/50")} />
                                        </Button>
                                      </TableCell>
                                      <TableCell>
                                        <p className="font-medium">{question.title}</p>
                                      </TableCell>
                                      <TableCell className="text-right space-x-2">
                                        {question.link && (
                                          <Button asChild variant="outline" size="sm" disabled={question.link === '#'}>
                                            <Link href={question.link} target="_blank" rel="noopener noreferrer">
                                              <ExternalLink className="mr-2 h-4 w-4" /> Read
                                            </Link>
                                          </Button>
                                        )}
                                        {question.practiceLink && (
                                           <Button asChild variant="secondary" size="sm">
                                            <Link href={question.practiceLink} target="_blank" rel="noopener noreferrer">
                                              <Rocket className="mr-2 h-4 w-4" /> Practice
                                            </Link>
                                          </Button>
                                        )}
                                        <Button asChild size="sm">
                                          <Link href={`/question/${question.id}`}>
                                             <BrainCircuit className="mr-2 h-4 w-4" /> Solve
                                          </Link>
                                        </Button>
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          ))}
                        </AccordionContent>
                    </AccordionItem>
                  )
                })}
            </Accordion>
        </div>
        <div className="space-y-8">
            {isClient && (
                 <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-2">
                           <Flame className="text-primary" /> Daily Streak
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-6xl font-bold">{streak}</p>
                        <p className="text-muted-foreground">{streak === 1 ? 'day' : 'days'}</p>
                    </CardContent>
                </Card>
            )}

            {isClient && alarms.length > 0 && (
                <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                            <AlarmPlus />
                            Your Alarms
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {alarms.sort((a,b) => a.alarmDateTime - b.alarmDateTime).map(alarm => (
                            <div key={alarm.id} className="flex justify-between items-center p-3 rounded-lg border border-border/50 bg-background/50">
                                <div>
                                    <p className="font-semibold text-lg">{format(new Date(alarm.alarmDateTime), 'PPP p')}</p>
                                    <p className="text-sm text-muted-foreground">{alarm.questionIds.length} questions</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" onClick={() => handleOpenAlarmSheet(alarm)}>
                                        <Edit className="h-4 w-4"/>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => removeAlarm(alarm.id)}>
                                        <Trash2 className="h-4 w-4"/>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
      <SetAlarmSheet open={isAlarmSheetOpen} onOpenChange={setIsAlarmSheetOpen} existingAlarm={editingAlarm} />
    </div>
  );
}
