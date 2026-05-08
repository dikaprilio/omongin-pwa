"use client"

import { useState, useEffect } from "react"
import { Search, Command } from "lucide-react"
import { CommandPalette } from "@/components/CommandPalette"
import { useRole } from "@/hooks/useRole"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function GlobalHeader() {
    const [isCommandOpen, setIsCommandOpen] = useState(false)
    const { isAdmin } = useRole()
    const pathname = usePathname()
    const isCalendarPage = pathname === '/calendar'

    // Global keyboard shortcut for command palette
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsCommandOpen(true)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Don't show search in header on calendar page (it's in the sidebar there)
    if (isCalendarPage) {
        return (
            <CommandPalette
                isOpen={isCommandOpen}
                onClose={() => setIsCommandOpen(false)}
                isAdmin={isAdmin}
            />
        )
    }

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden md:flex sticky top-0 z-30 h-14 items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
                <div className="flex-1" />

                {/* Search Trigger - Center */}
                <button
                    onClick={() => setIsCommandOpen(true)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-100/80 hover:bg-slate-100 border border-slate-200/50 text-sm text-slate-500 transition-colors min-w-[280px]"
                >
                    <Search className="h-4 w-4" />
                    <span className="flex-1 text-left">Search...</span>
                    <kbd className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 flex items-center gap-0.5">
                        <Command className="h-2.5 w-2.5" />K
                    </kbd>
                </button>

                <div className="flex-1" />
            </header>

            {/* Mobile Header - Only search */}
            <header className="md:hidden sticky top-0 z-30 px-4 py-2 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
                <button
                    onClick={() => setIsCommandOpen(true)}
                    className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl bg-slate-100/80 border border-slate-200/50 text-sm text-slate-500"
                >
                    <Search className="h-4 w-4" />
                    <span className="flex-1 text-left">Search...</span>
                </button>
            </header>

            {/* Command Palette */}
            <CommandPalette
                isOpen={isCommandOpen}
                onClose={() => setIsCommandOpen(false)}
                isAdmin={isAdmin}
            />
        </>
    )
}
