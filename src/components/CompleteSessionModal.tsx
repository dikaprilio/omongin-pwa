'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { completeSession } from '@/app/schedule/actions'
import { Loader2, CheckCircle, Calendar as CalendarIcon } from 'lucide-react'
import { DateTimePicker } from '@/components/DateTimePicker'

interface CompleteSessionModalProps {
    isOpen: boolean
    onClose: () => void
    session: any
}

export function CompleteSessionModal({ isOpen, onClose, session }: CompleteSessionModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [nextDate, setNextDate] = useState<Date | undefined>(undefined)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(e.currentTarget)
        if (nextDate) {
            formData.set('nextDate', nextDate.toISOString())
        }

        try {
            await completeSession(formData)
            onClose()
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!session) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Complete Session
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="sessionId" value={session.id} />

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Feedback / Notes</label>
                        <Textarea
                            name="feedback"
                            placeholder="How did the session go? What to improve?"
                            className="min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Material Link (Optional)</label>
                        <Input
                            name="materialLink"
                            placeholder="https://docs.google.com/..."
                        />
                    </div>

                    <div className="pt-4 border-t">
                        <label className="text-sm font-medium flex items-center gap-2 mb-2">
                            <CalendarIcon className="h-4 w-4 text-primary" />
                            Schedule Next Session?
                        </label>
                        <div className="border rounded-md p-1">
                            <DateTimePicker date={nextDate} setDate={(d) => setNextDate(d)} />
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-1">
                            Leave empty if you don't want to schedule the next one yet.
                        </p>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Complete & Save'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
