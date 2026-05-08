'use client'

import * as React from 'react'
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'
import { Input } from '@/components/ui/input'

interface SmartDateTimePickerProps {
    date: Date | undefined
    setDate: (date: Date) => void
    className?: string
}

export function SmartDateTimePicker({ date, setDate, className }: SmartDateTimePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedHour, setSelectedHour] = React.useState(date ? date.getHours() : 9)
    const [selectedMinute, setSelectedMinute] = React.useState(date ? date.getMinutes() : 0)

    // Initialize state when date changes externally
    React.useEffect(() => {
        if (date) {
            setSelectedHour(date.getHours())
            setSelectedMinute(date.getMinutes())
        }
    }, [date])

    const handleTimeUpdate = (newHour: number, newMinute: number) => {
        const d = new Date(date || new Date())
        d.setHours(newHour)
        d.setMinutes(newMinute)
        setDate(d)

        setSelectedHour(newHour)
        setSelectedMinute(newMinute)
    }

    const hours = Array.from({ length: 16 }, (_, i) => i + 8) // 8 AM to 11 PM (23:00)
    const minutes = [0, 15, 30, 45]

    return (
        <div className={cn("grid gap-2", className)}>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant={"outline"}
                        type="button"
                        className={cn(
                            "w-full justify-start text-left font-normal h-14 rounded-xl border-none bg-secondary/50 hover:bg-secondary/70 transition-colors",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-3 h-5 w-5 text-primary" />
                        <div className="flex flex-col items-start">
                            <span className="text-xs text-slate-500">Date & Time</span>
                            <span className="font-semibold text-base text-slate-900">
                                {date ? date.toLocaleString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false }) : 'Pick a date'}
                            </span>
                        </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[95vw] max-w-[400px] max-h-[90vh] p-0 bg-card/95 backdrop-blur-xl border-none shadow-2xl rounded-3xl flex flex-col">
                    <DialogHeader className="p-5 pb-2 flex-shrink-0">
                        <DialogTitle className="text-lg font-bold text-center">Schedule Session</DialogTitle>
                    </DialogHeader>
                    <div className="p-5 pt-2 space-y-5 overflow-y-auto flex-1 scrollbar-hide">
                        {/* Calendar */}
                        <div className="bg-secondary/30 rounded-2xl p-2 flex justify-center">
                            <Calendar
                                date={date}
                                setDate={setDate}
                                className="rounded-md"
                            />
                        </div>

                        {/* Custom Time Picker */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-1">
                                <span className="text-sm font-medium text-muted-foreground">Select Time (24h)</span>
                            </div>

                            {/* Hours Scroll */}
                            <div className="relative">
                                <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide snap-x px-1">
                                    {hours.map((h) => (
                                        <button
                                            key={h}
                                            type="button"
                                            onClick={() => handleTimeUpdate(h, selectedMinute)}
                                            className={cn(
                                                "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-medium transition-all snap-center",
                                                selectedHour === h
                                                    ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/25"
                                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                                            )}
                                        >
                                            {h.toString().padStart(2, '0')}
                                        </button>
                                    ))}
                                </div>
                                <div className="absolute right-0 top-0 bottom-2 w-6 bg-gradient-to-l from-card to-transparent pointer-events-none" />
                            </div>

                            {/* Minutes Grid */}
                            <div className="grid grid-cols-4 gap-2">
                                {minutes.map((m) => (
                                    <button
                                        key={m}
                                        type="button"
                                        onClick={() => handleTimeUpdate(selectedHour, m)}
                                        className={cn(
                                            "py-2 rounded-xl text-sm font-medium transition-all border",
                                            selectedMinute === m
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-transparent bg-secondary/50 text-muted-foreground hover:bg-secondary"
                                        )}
                                    >
                                        {m.toString().padStart(2, '0')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 pb-4">
                            <Button type="button" className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20" onClick={() => setIsOpen(false)}>
                                Confirm Schedule
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
