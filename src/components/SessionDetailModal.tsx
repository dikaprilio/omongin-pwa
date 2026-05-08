'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Trash2, AlertCircle, Loader2, GraduationCap } from 'lucide-react'
import { SmartDateTimePicker } from './SmartDateTimePicker'
import { deleteSession, rescheduleSession } from '@/app/schedule/actions'
import { toast } from 'sonner'
import { ConfirmModal } from './ConfirmModal'
import confetti from 'canvas-confetti'

interface SessionDetailModalProps {
    session: any
    isOpen: boolean
    onClose: () => void
    initialMode?: 'view' | 'reschedule' | 'complete'
    onDelete?: (id: string) => void
    onUpdate?: (session: any) => void
}

export function SessionDetailModal({ session, isOpen, onClose, initialMode = 'view', onDelete, onUpdate }: SessionDetailModalProps) {
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState(false)
    const [isRescheduling, setIsRescheduling] = useState(false)
    const [isCompleting, setIsCompleting] = useState(false)
    const [newDate, setNewDate] = useState<Date | undefined>(undefined)
    const [isSaving, setIsSaving] = useState(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

    // Completion state
    const [feedback, setFeedback] = useState('')
    const [materialLink, setMaterialLink] = useState('')

    // Effect to set initial mode when opening
    useEffect(() => {
        if (isOpen && session) {
            if (initialMode === 'reschedule') {
                setIsRescheduling(true)
                setIsCompleting(false)
                const start = new Date(session.start.dateTime || session.start.date)
                setNewDate(start)
            } else if (initialMode === 'complete') {
                setIsCompleting(true)
                setIsRescheduling(false)
            } else {
                setIsRescheduling(false)
                setIsCompleting(false)
            }
        }
    }, [isOpen, initialMode, session])

    if (!session) return null

    const handleDeleteClick = () => {
        setShowDeleteConfirm(true)
    }

    const handleConfirmDelete = async () => {
        setIsDeleting(true)

        // Optimistic update: Close modal and update UI immediately
        setShowDeleteConfirm(false)
        onClose()
        if (onDelete) onDelete(session.id)

        try {
            await deleteSession(session.id)
            toast.success('Session deleted successfully')
            router.refresh()
        } catch (error) {
            console.error('Failed to delete session:', error)
            toast.error('Failed to delete session')
            // Note: If failed, the item is already gone from UI. 
            // A page refresh would bring it back.
        } finally {
            setIsDeleting(false)
        }
    }

    const handleReschedule = async () => {
        if (!newDate) return

        setIsSaving(true)
        try {
            await rescheduleSession(session.id, newDate.toISOString())
            toast.success('Session rescheduled successfully')

            // Optimistic update object (simplified)
            const updatedSession = {
                ...session,
                start: { dateTime: newDate.toISOString() },
                end: { dateTime: new Date(newDate.getTime() + (session.duration || 60) * 60000).toISOString() }
            }
            if (onUpdate) onUpdate(updatedSession)
            router.refresh()

            setIsRescheduling(false)
            onClose()
        } catch (error) {
            console.error('Failed to reschedule session:', error)
            toast.error('Failed to reschedule session')
        } finally {
            setIsSaving(false)
        }
    }

    const handleComplete = async () => {
        setIsSaving(true)
        try {
            const formData = new FormData()
            formData.append('sessionId', session.id)
            formData.append('feedback', feedback)
            formData.append('materialLink', materialLink)

            const { completeSession } = await import('@/app/schedule/actions')
            await completeSession(formData)

            // Celebrate with confetti! 🎉
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })

            toast.success('Session completed successfully! 🎉')

            const updatedSession = { ...session, status: 'completed' }
            if (onUpdate) onUpdate(updatedSession)
            router.refresh()

            setIsCompleting(false)
            onClose()
        } catch (error) {
            console.error('Failed to complete session:', error)
            toast.error('Failed to complete session')
        } finally {
            setIsSaving(false)
        }
    }

    const startTime = new Date(session.start.dateTime || session.start.date)
    const endTime = new Date(session.end.dateTime || session.end.date)

    const resetState = () => {
        setIsRescheduling(false)
        setIsCompleting(false)
        setNewDate(undefined)
        setFeedback('')
        setMaterialLink('')
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            if (!open) {
                resetState()
                onClose()
            }
        }}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {isRescheduling ? 'Reschedule Session' :
                            isCompleting ? 'Complete Session' : 'Session Details'}
                    </DialogTitle>
                    <DialogDescription>
                        {isRescheduling ? 'Pick a new date and time for this session.' :
                            isCompleting ? 'Add feedback and materials for the student.' : 'View and manage this scheduled session.'}
                    </DialogDescription>
                </DialogHeader>

                {!isRescheduling && !isCompleting ? (
                    <div className="space-y-4 py-4">
                        <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <Calendar className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-medium text-sm">Date & Time</h4>
                                <p className="text-sm text-muted-foreground">
                                    {startTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {startTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false })} - {endTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false })}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                                <h4 className="font-medium text-sm">Description</h4>
                                <p className="text-sm text-muted-foreground">
                                    {session.summary}
                                </p>
                                {session.description && (
                                    <p className="text-xs text-muted-foreground mt-1 italic">
                                        {session.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Teacher Info */}
                        {session.teacherName && !session.isExternal && (
                            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                                <GraduationCap className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                    <h4 className="font-medium text-sm text-blue-800">Teacher</h4>
                                    <p className="text-sm text-blue-700 font-medium">
                                        {session.teacherName}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                ) : isRescheduling ? (
                    <div className="py-4">
                        <SmartDateTimePicker date={newDate} setDate={(d) => setNewDate(d)} />
                    </div>
                ) : (
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Feedback / Notes</label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="How did the session go?"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Material Link (Optional)</label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="https://..."
                                value={materialLink}
                                onChange={(e) => setMaterialLink(e.target.value)}
                            />
                        </div>
                    </div>
                )}

                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                    {!onDelete && !onUpdate ? (
                        /* Read-only mode (teacher) — just Close */
                        <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
                            Tutup
                        </Button>
                    ) : !isRescheduling && !isCompleting ? (
                        <>
                            <Button variant="destructive" onClick={handleDeleteClick} disabled={isDeleting} className="w-full sm:w-auto">
                                {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4 mr-2" />}
                                Delete
                            </Button>
                            <div className="flex-1 hidden sm:block"></div>
                            <Button variant="outline" onClick={() => {
                                setNewDate(startTime)
                                setIsRescheduling(true)
                            }} className="w-full sm:w-auto">
                                Reschedule
                            </Button>
                            <Button onClick={() => setIsCompleting(true)} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                                Complete
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline" onClick={resetState} className="w-full sm:w-auto">
                                Cancel
                            </Button>
                            {isRescheduling ? (
                                <Button onClick={handleReschedule} disabled={!newDate || isSaving} className="w-full sm:w-auto">
                                    {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Confirm Reschedule'}
                                </Button>
                            ) : (
                                <Button onClick={handleComplete} disabled={isSaving} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                                    {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Confirm Completion'}
                                </Button>
                            )}
                        </>
                    )}
                </DialogFooter>
            </DialogContent>

            <ConfirmModal
                isOpen={showDeleteConfirm}
                onClose={() => setShowDeleteConfirm(false)}
                onConfirm={handleConfirmDelete}
                title="Delete Session?"
                description="Are you sure you want to delete this session? This action cannot be undone."
                confirmText="Delete"
                variant="destructive"
                isLoading={isDeleting}
            />
        </Dialog>
    )
}
