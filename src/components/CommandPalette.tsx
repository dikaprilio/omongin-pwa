"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    Package,
    BookOpen,
    Calendar,
    UsersRound,
    Plus,
    Search,
    ArrowRight,
    Command,
    Sparkles,
    FileSpreadsheet,
    Star
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface CommandPaletteProps {
    isOpen: boolean
    onClose: () => void
    isAdmin: boolean
    triggerRef?: React.RefObject<HTMLButtonElement>
}

interface CommandItem {
    id: string
    label: string
    description?: string
    icon: any
    action: () => void
    category: 'page' | 'action'
}

export function CommandPalette({ isOpen, onClose, isAdmin, triggerRef }: CommandPaletteProps) {
    const router = useRouter()
    const [search, setSearch] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    // Define all commands
    const commands: CommandItem[] = [
        // Pages
        { id: 'dashboard', label: 'Dashboard', description: 'Go to dashboard', icon: LayoutDashboard, category: 'page', action: () => router.push('/dashboard') },
        { id: 'calendar', label: 'Calendar', description: 'View calendar', icon: Calendar, category: 'page', action: () => router.push('/calendar') },
        { id: 'students', label: 'Students', description: 'Manage students', icon: Users, category: 'page', action: () => router.push('/students') },
        { id: 'materials', label: 'Materials', description: 'Teaching materials', icon: BookOpen, category: 'page', action: () => router.push('/materials') },
        { id: 'packages', label: 'Packages', description: 'Session packages', icon: Package, category: 'page', action: () => router.push('/packages') },
        { id: 'reviews', label: 'Reviews', description: 'Student reviews', icon: Star, category: 'page', action: () => router.push('/reviews') },
        ...(isAdmin ? [
            { id: 'teachers', label: 'Teachers', description: 'Manage teachers', icon: UsersRound, category: 'page' as const, action: () => router.push('/teachers') },
            { id: 'orders', label: 'Orders', description: 'View orders', icon: FileSpreadsheet, category: 'page' as const, action: () => router.push('/orders') },
        ] : []),

        // Actions
        { id: 'add-student', label: 'Add Student', description: 'Create a new student', icon: Plus, category: 'action', action: () => { router.push('/students'); } },
        { id: 'schedule-session', label: 'Schedule Session', description: 'Schedule a new session', icon: Calendar, category: 'action', action: () => { router.push('/calendar'); } },
        { id: 'add-package', label: 'Add Package', description: 'Create a new package', icon: Plus, category: 'action', action: () => { router.push('/packages'); } },
    ]

    // Filter commands based on search
    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description?.toLowerCase().includes(search.toLowerCase())
    )

    // Group by category
    const pages = filteredCommands.filter(c => c.category === 'page')
    const actions = filteredCommands.filter(c => c.category === 'action')

    // Reset selection when search changes
    useEffect(() => {
        setSelectedIndex(0)
    }, [search])

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50)
        }
    }, [isOpen])

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1))
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(prev => Math.max(prev - 1, 0))
                break
            case 'Enter':
                e.preventDefault()
                if (filteredCommands[selectedIndex]) {
                    filteredCommands[selectedIndex].action()
                    onClose()
                    setSearch("")
                }
                break
            case 'Escape':
                e.preventDefault()
                onClose()
                setSearch("")
                break
        }
    }, [isOpen, filteredCommands, selectedIndex, onClose])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    // Reset when closing
    useEffect(() => {
        if (!isOpen) {
            setSearch("")
            setSelectedIndex(0)
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px]"
                        onClick={onClose}
                    />

                    {/* Dropdown Panel - Expands from search bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            mass: 0.8
                        }}
                        style={{ transformOrigin: 'top' }}
                        className="fixed left-1/2 -translate-x-1/2 top-2 md:top-3 z-[100] w-[calc(100%-1rem)] md:w-full max-w-xl"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
                            {/* Search Input */}
                            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
                                <Search className="h-5 w-5 text-primary flex-shrink-0" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search pages and actions..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                                />
                                <motion.kbd
                                    whileHover={{ scale: 1.05 }}
                                    className="text-[10px] bg-white px-2 py-1 rounded-md border border-slate-200 text-slate-400 cursor-pointer"
                                    onClick={onClose}
                                >
                                    ESC
                                </motion.kbd>
                            </div>

                            {/* Results */}
                            <motion.div
                                className="max-h-[60vh] overflow-y-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.05 }}
                            >
                                {filteredCommands.length === 0 ? (
                                    <div className="py-10 text-center">
                                        <Sparkles className="h-8 w-8 mx-auto text-slate-200 mb-3" />
                                        <p className="text-sm text-slate-400">No results for "{search}"</p>
                                    </div>
                                ) : (
                                    <div className="p-2">
                                        {/* Pages Section */}
                                        {pages.length > 0 && (
                                            <div className="mb-2">
                                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1.5">
                                                    Pages
                                                </p>
                                                <div className="space-y-0.5">
                                                    {pages.map((cmd, idx) => {
                                                        const globalIndex = filteredCommands.indexOf(cmd)
                                                        return (
                                                            <CommandRow
                                                                key={cmd.id}
                                                                item={cmd}
                                                                isSelected={selectedIndex === globalIndex}
                                                                onClick={() => {
                                                                    cmd.action()
                                                                    onClose()
                                                                    setSearch("")
                                                                }}
                                                                index={idx}
                                                            />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Actions Section */}
                                        {actions.length > 0 && (
                                            <div>
                                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1.5">
                                                    Actions
                                                </p>
                                                <div className="space-y-0.5">
                                                    {actions.map((cmd, idx) => {
                                                        const globalIndex = filteredCommands.indexOf(cmd)
                                                        return (
                                                            <CommandRow
                                                                key={cmd.id}
                                                                item={cmd}
                                                                isSelected={selectedIndex === globalIndex}
                                                                onClick={() => {
                                                                    cmd.action()
                                                                    onClose()
                                                                    setSearch("")
                                                                }}
                                                                index={pages.length + idx}
                                                            />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-100 bg-slate-50/80 text-[10px] text-slate-400">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <kbd className="bg-white px-1.5 py-0.5 rounded border border-slate-200">↑↓</kbd>
                                        Navigate
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="bg-white px-1.5 py-0.5 rounded border border-slate-200">↵</kbd>
                                        Open
                                    </span>
                                </div>
                                <span className="flex items-center gap-1 text-primary font-medium">
                                    <Command className="h-3 w-3" />K
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

function CommandRow({
    item,
    isSelected,
    onClick,
    index
}: {
    item: CommandItem
    isSelected: boolean
    onClick: () => void
    index: number
}) {
    const Icon = item.icon

    return (
        <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.02, duration: 0.2 }}
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left transition-all duration-150",
                isSelected
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "hover:bg-slate-50 text-slate-700"
            )}
        >
            <div className={cn(
                "h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                isSelected ? "bg-white/20" : "bg-slate-100"
            )}>
                <Icon className={cn("h-4 w-4", isSelected ? "text-white" : "text-slate-500")} />
            </div>
            <div className="flex-1 min-w-0">
                <p className={cn("text-sm font-medium", isSelected ? "text-white" : "text-slate-800")}>
                    {item.label}
                </p>
                {item.description && (
                    <p className={cn("text-xs truncate", isSelected ? "text-white/70" : "text-slate-400")}>
                        {item.description}
                    </p>
                )}
            </div>
            <ArrowRight className={cn(
                "h-4 w-4 flex-shrink-0 transition-transform",
                isSelected ? "text-white/70 translate-x-0" : "text-slate-300 -translate-x-1 opacity-0 group-hover:opacity-100"
            )} />
        </motion.button>
    )
}
