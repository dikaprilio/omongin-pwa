'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface CalendarProps {
    mode?: 'single' | 'multiple'
    date?: Date | undefined
    dates?: Date[]
    setDate?: (date: Date) => void
    setDates?: (dates: Date[]) => void
    onDayClick?: (date: Date) => void
    className?: string
}

export function Calendar({ mode = 'single', date, dates, setDate, setDates, onDayClick, className }: CalendarProps) {
    const [currentMonth, setCurrentMonth] = React.useState(date || (dates && dates.length > 0 ? dates[0] : new Date()))

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)

        if (onDayClick) {
            // Preserve time from the current context if possible
            const baseDate = (dates && dates.length > 0) ? dates[0] : (date || new Date())
            newDate.setHours(baseDate.getHours())
            newDate.setMinutes(baseDate.getMinutes())
            onDayClick(newDate)
            return
        }

        if (mode === 'multiple' && setDates && dates) {
            // Toggle date
            const exists = dates.find(d =>
                d.getDate() === newDate.getDate() &&
                d.getMonth() === newDate.getMonth() &&
                d.getFullYear() === newDate.getFullYear()
            )

            if (exists) {
                setDates(dates.filter(d => d !== exists))
            } else {
                // Preserve time from first selected date or current time
                const baseDate = dates.length > 0 ? dates[0] : new Date()
                newDate.setHours(baseDate.getHours())
                newDate.setMinutes(baseDate.getMinutes())
                setDates([...dates, newDate].sort((a, b) => a.getTime() - b.getTime()))
            }
        } else if (setDate) {
            // Preserve time if exists
            if (date) {
                newDate.setHours(date.getHours())
                newDate.setMinutes(date.getMinutes())
            } else {
                const now = new Date()
                newDate.setHours(now.getHours())
                newDate.setMinutes(now.getMinutes())
            }
            setDate(newDate)
        }
    }

    const renderDays = () => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        const days = daysInMonth(year, month)
        const firstDay = firstDayOfMonth(year, month)

        const daysArray = []

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            daysArray.push(<div key={`empty-${i}`} className="h-9 w-9" />)
        }

        // Days
        for (let i = 1; i <= days; i++) {
            let isSelected = false
            if (mode === 'multiple' && dates) {
                isSelected = dates.some(d =>
                    d.getDate() === i &&
                    d.getMonth() === month &&
                    d.getFullYear() === year
                )
            } else if (date) {
                isSelected = date.getDate() === i &&
                    date.getMonth() === month &&
                    date.getFullYear() === year
            }

            const isToday =
                new Date().getDate() === i &&
                new Date().getMonth() === month &&
                new Date().getFullYear() === year

            daysArray.push(
                <Button
                    key={i}
                    variant={isSelected ? "default" : "ghost"}
                    size="icon"
                    type="button"
                    className={cn(
                        "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                        isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                        !isSelected && isToday && "text-accent-foreground bg-accent/50 border border-accent",
                    )}
                    onClick={(e) => {
                        e.preventDefault()
                        handleDateClick(i)
                    }}
                >
                    {i}
                </Button>
            )
        }

        return daysArray
    }

    return (
        <div className={cn("p-3", className)}>
            <div className="flex items-center justify-between space-x-4 pb-4">
                <div className="text-sm font-medium">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center space-x-1">
                    <Button variant="outline" size="icon" type="button" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100" onClick={handlePrevMonth}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" type="button" className="h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100" onClick={handleNextMonth}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground mb-2">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {renderDays()}
            </div>
        </div>
    )
}
