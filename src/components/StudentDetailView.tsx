'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, BookOpen, User, Video, Phone, Briefcase, MoreVertical, CheckCircle, FileText, Sparkles, GraduationCap } from 'lucide-react'
import { ScheduleModal } from '@/components/ScheduleModal'
import { CompleteSessionModal } from '@/components/CompleteSessionModal'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from '@/lib/utils'

interface StudentDetailViewProps {
    student: any
    sessions: any[]
    subscription?: any
    teacher?: { id: string; full_name: string; avatar_url?: string } | null
    autoSchedule?: boolean
}

export function StudentDetailView({ student, sessions, subscription, teacher, autoSchedule = false }: StudentDetailViewProps) {
    const [isScheduleOpen, setIsScheduleOpen] = useState(autoSchedule)
    const [selectedSession, setSelectedSession] = useState<any>(null)
    const [viewNoteSession, setViewNoteSession] = useState<any>(null)

    const upcomingSessions = sessions.filter(s => s.status === 'scheduled' || s.status === 'active')
    const pastSessions = sessions.filter(s => s.status === 'completed')

    // Use real subscription data or fallback to defaults
    const sessionsRemaining = subscription?.sessions_remaining ?? 0
    const sessionsTotal = subscription?.sessions_total ?? 0
    const progressPercentage = sessionsTotal > 0 ? (sessionsRemaining / sessionsTotal) * 100 : 0

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Profile Section */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/10 shadow-premium p-5 md:p-8">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-primary" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-center">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 w-full md:w-auto text-center sm:text-left">
                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary text-3xl md:text-4xl font-bold border-2 border-white ring-1 ring-primary/10 shrink-0">
                            {student.full_name.charAt(0)}
                        </div>
                        <div className="w-full">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{student.full_name}</h1>
                            <p className="text-base md:text-lg text-muted-foreground font-medium">{student.nickname}</p>
                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-4 mt-3 text-xs md:text-sm text-muted-foreground">
                                {student.zoom_link ? (
                                    <a href={student.zoom_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 shadow-sm hover:bg-primary/20 transition-colors text-primary">
                                        <Video className="h-3 w-3 md:h-3.5 md:w-3.5" /> Zoom Link
                                    </a>
                                ) : (
                                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/50 border border-primary/5 shadow-sm text-muted-foreground">
                                        <Video className="h-3 w-3 md:h-3.5 md:w-3.5" /> No Zoom Link
                                    </span>
                                )}
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/50 border border-primary/5 shadow-sm">
                                    <Phone className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" /> {student.phone || 'No phone'}
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/50 border border-primary/5 shadow-sm">
                                    <Briefcase className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" /> {student.job || 'No job'}
                                </div>
                                {teacher && (
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 shadow-sm">
                                        <GraduationCap className="h-3 w-3 md:h-3.5 md:w-3.5 text-blue-600" />
                                        <span className="text-blue-700 font-medium">{teacher.full_name}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-3 md:gap-4 w-full md:min-w-[240px] md:w-auto">
                        <Button onClick={() => setIsScheduleOpen(true)} size="lg" className="w-full shadow-lg shadow-primary/20 text-sm md:text-base">
                            <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                            Schedule Session
                        </Button>

                        <div className="p-3 md:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-primary/10 shadow-sm">
                            <div className="flex justify-between mb-2 items-end">
                                <span className="text-xs md:text-sm font-medium text-muted-foreground">Package Status</span>
                                <div className="text-right">
                                    <span className="text-xl md:text-2xl font-bold text-primary">{sessionsRemaining}</span>
                                    <span className="text-xs md:text-sm text-muted-foreground">/{sessionsTotal} left</span>
                                </div>
                            </div>
                            <div className="w-full bg-primary/10 rounded-full h-2 md:h-2.5 overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${progressPercentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Upcoming Sessions */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Upcoming Sessions
                        </h2>
                    </div>

                    {upcomingSessions.length === 0 ? (
                        <Card className="bg-muted/30 border-dashed border-2 shadow-none">
                            <CardContent className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <Calendar className="h-8 w-8 opacity-20" />
                                </div>
                                <p className="text-lg font-medium">No upcoming sessions</p>
                                <p className="text-sm mb-6">Get started by scheduling a new session.</p>
                                <Button variant="outline" onClick={() => setIsScheduleOpen(true)}>
                                    Schedule Now
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {upcomingSessions.map(session => (
                                <div key={session.id} className="group relative bg-card rounded-2xl p-0 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-border/50 overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
                                    <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                        {/* Date Badge */}
                                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/5 rounded-xl text-primary border border-primary/10 shrink-0">
                                            <span className="text-xs font-bold uppercase tracking-wider">{new Date(session.start_time).toLocaleString('default', { month: 'short' })}</span>
                                            <span className="text-2xl font-bold leading-none">{new Date(session.start_time).getDate()}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-lg text-foreground">
                                                    {new Date(session.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </h3>
                                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    {session.duration || 60} min
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground text-sm truncate">
                                                {session.notes || 'No specific topic set'}
                                            </p>
                                        </div>

                                        {/* Action */}
                                        <Button
                                            onClick={() => setSelectedSession(session)}
                                            className="shrink-0 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
                                        >
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Complete
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="pt-8">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                            <BookOpen className="h-5 w-5 text-muted-foreground" />
                            History
                        </h2>
                        <div className="space-y-3">
                            {pastSessions.length === 0 ? (
                                <p className="text-muted-foreground italic text-sm">No past sessions yet.</p>
                            ) : (
                                pastSessions.map(session => (
                                    <div key={session.id} className="group flex items-center justify-between p-4 bg-card hover:bg-muted/30 rounded-xl border border-border/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                                <CheckCircle className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-foreground">
                                                    {new Date(session.start_time).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                </div>
                                                <div className="text-sm text-muted-foreground line-clamp-1">
                                                    {session.notes || 'Session Completed'}
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setViewNoteSession(session)}
                                            className="text-muted-foreground hover:text-primary"
                                        >
                                            <FileText className="h-4 w-4 mr-2" />
                                            View Notes
                                        </Button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar Info */}
                <div className="space-y-6">
                    <Card className="shadow-premium border-none">
                        <CardHeader className="pb-3 border-b border-border/50">
                            <CardTitle className="text-base font-bold flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" />
                                Student Info
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-5 pt-5">
                            <div>
                                <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Schedule Preference</label>
                                <div className="mt-1.5 p-3 bg-muted/30 rounded-lg text-sm font-medium">
                                    {student.schedule_preference || 'Not specified'}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Learning Goals</label>
                                <div className="mt-1.5 p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground italic">
                                    No goals added yet.
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <ScheduleModal
                isOpen={isScheduleOpen}
                onClose={() => setIsScheduleOpen(false)}
                preselectedStudentId={student.id}
            />

            <CompleteSessionModal
                isOpen={!!selectedSession}
                onClose={() => setSelectedSession(null)}
                session={selectedSession}
            />

            {/* View Notes Modal */}
            <Dialog open={!!viewNoteSession} onOpenChange={(open) => !open && setViewNoteSession(null)}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Session Notes</DialogTitle>
                        <DialogDescription>
                            {viewNoteSession && new Date(viewNoteSession.start_time).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <h4 className="text-sm font-medium text-muted-foreground">Topic / Notes</h4>
                            <div className="p-3 bg-muted/30 rounded-lg text-sm">
                                {viewNoteSession?.notes || 'No notes recorded.'}
                            </div>
                        </div>
                        {viewNoteSession?.feedback && (
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-muted-foreground">Feedback</h4>
                                <div className="p-3 bg-green-50 text-green-900 rounded-lg text-sm">
                                    {viewNoteSession.feedback}
                                </div>
                            </div>
                        )}
                        {viewNoteSession?.material_link && (
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-muted-foreground">Materials</h4>
                                <a
                                    href={viewNoteSession.material_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:underline break-all"
                                >
                                    {viewNoteSession.material_link}
                                </a>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
