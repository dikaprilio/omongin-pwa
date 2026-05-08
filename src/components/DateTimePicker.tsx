'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

interface DateTimePickerProps {
    date: Date | undefined
    setDate: (date: Date) => void
    className?: string
}

export function DateTimePicker({ date, setDate, className }: DateTimePickerProps) {
    // Convert Date to string format required by datetime-local input (YYYY-MM-DDTHH:mm)
    const formatDate = (d: Date | undefined) => {
        if (!d) return ''
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const hours = String(d.getHours()).padStart(2, '0')
        const minutes = String(d.getMinutes()).padStart(2, '0')
        return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value) {
            setDate(new Date(value))
        }
    }

    return (
        <div className={cn('relative', className)}>
            <Input
                type="datetime-local"
                value={formatDate(date)}
                onChange={handleChange}
                className="w-full"
            />
        </div>
    )
}
