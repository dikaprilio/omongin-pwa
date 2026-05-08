'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ScheduleModal } from '@/components/ScheduleModal'
import { CalendarPlus } from 'lucide-react'

export function ScheduleButton({ className }: { className?: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button
                size="lg"
                className={`w-full sm:w-auto justify-between sm:justify-center group bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 border-none shadow-lg shadow-indigo-900/20 transition-all duration-300 transform hover:-translate-y-0.5 ${className}`}
                onClick={() => setIsModalOpen(true)}
            >
                <span className="flex items-center gap-2">
                    <CalendarPlus className="h-5 w-5" />
                    <span className="font-bold text-base">Schedule Session</span>
                </span>
                <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </Button>

            <ScheduleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
