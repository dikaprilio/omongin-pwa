'use client'

import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Loader2, Plus, RefreshCw, Search, Command, Menu, X } from 'lucide-react'
import { toast } from 'sonner'
import { useRole } from '@/hooks/useRole'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

import { listCalendarEvents } from '@/app/(dashboard)/calendar/actions'
import { rescheduleSession } from '@/app/schedule/actions'
import { rescheduleJadwalAction } from '@/app/(dashboard)/scheduler/actions'
import { useMobile } from '@/hooks/useMobile'

import { SessionDetailModal } from '@/components/SessionDetailModal'
import { ScheduleModal } from '@/components/ScheduleModal'
import { CommandPalette } from '@/components/CommandPalette'

// ============================================
// TYPES & CONSTANTS
// ============================================

interface CalendarEvent {
    id: string
    summary: string
    start: { dateTime?: string; date?: string }
    end: { dateTime?: string; date?: string }
    teacherName?: string
    status?: string
    isExternal?: boolean
    isAppSession?: boolean
    isJadwalSheet?: boolean
    isOptimistic?: boolean
}

export interface CalendarTeacher {
    id: string;
    full_name: string;
    shortName: string;
}

// Available tutor color palettes
const TUTOR_COLOR_PALETTES = [
    { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500', grad: 'from-blue-500 to-blue-600' },
    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500', grad: 'from-emerald-500 to-emerald-600' },
    { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', dot: 'bg-violet-500', grad: 'from-violet-500 to-violet-600' },
    { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', dot: 'bg-pink-500', grad: 'from-pink-500 to-pink-600' },
    { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', grad: 'from-amber-500 to-amber-600' },
    { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', dot: 'bg-cyan-500', grad: 'from-cyan-500 to-cyan-600' },
    { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500', grad: 'from-rose-500 to-rose-600' },
    { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500', grad: 'from-indigo-500 to-indigo-600' },
    { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', dot: 'bg-orange-500', grad: 'from-orange-500 to-orange-600' },
    { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', dot: 'bg-teal-500', grad: 'from-teal-500 to-teal-600' },
]

const PACKAGES = [
    'Speaking Adults',
    'Speaking Kids',
    'Basic Adults',
    'Basic Kids',
    'Presentation',
    'Interview'
] as const

const PACKAGE_COLORS: Record<string, { bg: string; text: string; border: string; dot: string; grad: string }> = {
    'Speaking Adults': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', dot: 'bg-indigo-500', grad: 'from-indigo-500 to-indigo-600' },
    'Speaking Kids': { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', dot: 'bg-sky-500', grad: 'from-sky-500 to-sky-600' },
    'Basic Adults': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500', grad: 'from-emerald-500 to-emerald-600' },
    'Basic Kids': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', dot: 'bg-rose-500', grad: 'from-rose-500 to-rose-600' },
    'Presentation': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', grad: 'from-amber-500 to-amber-600' },
    'Interview': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', dot: 'bg-violet-500', grad: 'from-violet-500 to-violet-600' },
}

const DEFAULT_COLORS = { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', dot: 'bg-slate-500', grad: 'from-slate-500 to-slate-600' }

const CALENDAR_START_HOUR = 8
const CALENDAR_END_HOUR = 23
function useHourHeight() { const isMobile = useMobile(); return isMobile ? 192 : 128; }
const HEADER_HEIGHT = 72
const DAY_LABELS = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getTutorColors(teacherName?: string | null, index?: number) {
    if (!teacherName) return DEFAULT_COLORS
    // Deterministic color assignment based on name length or index if provided
    const colorIndex = index !== undefined ? index : (teacherName.length % TUTOR_COLOR_PALETTES.length)
    return TUTOR_COLOR_PALETTES[colorIndex % TUTOR_COLOR_PALETTES.length]
}

function getPackageColors(packageName?: string | null) {
    if (!packageName) return DEFAULT_COLORS
    for (const pkg of PACKAGES) {
        if (packageName.toLowerCase().includes(pkg.toLowerCase())) {
            return PACKAGE_COLORS[pkg]
        }
    }
    return DEFAULT_COLORS
}

function getShortName(teacherName?: string | null) {
    if (!teacherName) return null
    let shortName = teacherName.split(' ')[0]
    if ((shortName === 'M.' || shortName === 'M') && teacherName.split(' ').length > 1) {
        shortName = teacherName.split(' ')[1]
    }
    const lowerName = teacherName.toLowerCase()
    if (lowerName.includes('zen') || lowerName.includes('arifin')) shortName = 'Zen'
    else if (lowerName.includes('sadaad')) shortName = 'Sadaad'
    else if (lowerName.includes('cyril')) shortName = 'Cyril'
    else if (lowerName.includes('sasna')) shortName = 'Sasna'
    else if (lowerName.includes('nafiis')) shortName = 'Nafiis'
    else if (lowerName.includes('zia')) shortName = 'Zia'
    else if (lowerName.includes('nayla')) shortName = 'Nayla'
    return shortName
}

function getWeekStart(date: Date): Date {
    const d = new Date(date)
    const day = d.getDay()
    const diff = day === 0 ? -6 : 1 - day
    d.setDate(d.getDate() + diff)
    d.setHours(0, 0, 0, 0)
    return d
}

function getWeekDays(weekStart: Date): Date[] {
    return Array.from({ length: 7 }, (_, i) => {
        const d = new Date(weekStart)
        d.setDate(d.getDate() + i)
        return d
    })
}

function isSameDay(a: Date, b: Date) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function toDateStr(d: Date) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatWeekLabel(weekDays: Date[]): string {
    if (!weekDays || weekDays.length === 0) return ''
    const first = weekDays[0]
    const last = weekDays[weekDays.length - 1]
    const sameMonth = first.getMonth() === last.getMonth()
    const monthOpts: Intl.DateTimeFormatOptions = { month: 'long' }
    if (sameMonth) {
        return `${first.getDate()} – ${last.getDate()} ${first.toLocaleString('id-ID', { ...monthOpts, year: 'numeric' })}`
    }
    return `${first.getDate()} ${first.toLocaleString('id-ID', monthOpts)} – ${last.getDate()} ${last.toLocaleString('id-ID', { ...monthOpts, year: 'numeric' })}`
}

// Get event time in minutes from start of day
function getEventStartMinutes(event: CalendarEvent): number {
    const eventDate = new Date(event.start.dateTime || event.start.date || '')
    return eventDate.getHours() * 60 + eventDate.getMinutes()
}

function getEventEndMinutes(event: CalendarEvent): number {
    const eventDate = new Date(event.end.dateTime || event.end.date || '')
    return eventDate.getHours() * 60 + eventDate.getMinutes()
}

// Calculate overlapping event positions for side-by-side display
interface EventPosition {
    event: CalendarEvent
    column: number
    totalColumns: number
}

function calculateEventPositions(events: CalendarEvent[]): EventPosition[] {
    if (events.length === 0) return []

    const positions: EventPosition[] = []

    // Group events strictly by their starting hour
    const eventsByHour: Record<number, CalendarEvent[]> = {}

    for (const event of events) {
        const hour = new Date(event.start.dateTime || event.start.date || '').getHours()
        if (!eventsByHour[hour]) eventsByHour[hour] = []
        eventsByHour[hour].push(event)
    }

    // Sort within each hour block and assign positions
    for (const hourStr in eventsByHour) {
        const hourEvents = eventsByHour[hourStr]
        // Sort chronologically within the hour
        hourEvents.sort((a, b) => getEventStartMinutes(a) - getEventStartMinutes(b))

        for (let i = 0; i < hourEvents.length; i++) {
            positions.push({
                event: hourEvents[i],
                column: i, // repurpose as vertical index constraint
                totalColumns: hourEvents.length // total events sharing this hour
            })
        }
    }

    return positions
}

// ============================================
// SUB-COMPONENTS
// ============================================

interface PositionedEventCardProps {
    event: CalendarEvent
    canModify: boolean
    onClick: (event: CalendarEvent) => void
    isDragging: boolean
    currentTime: Date
    column?: number
    totalColumns?: number
    teacherIndex?: number // Pass teacher index for consistent coloring
}

const EventCard = memo(function EventCard({
    event,
    canModify,
    onClick,
    isDragging,
    currentTime,
    column,
    totalColumns,
    teacherIndex
}: PositionedEventCardProps) {
    const HOUR_HEIGHT = useHourHeight();
    const isMobile = useMobile();
    const isCompacted = totalColumns !== undefined && totalColumns >= 2;
    const isMicro = totalColumns !== undefined && totalColumns >= 3;
    const isCompleted = event.status === 'completed'
    const isRescheduled = event.status === 'Rescheduled'
    const isExternal = event.isExternal
    const isOptimistic = (event as any).isOptimistic === true
    const eventDate = new Date(event.start.dateTime || event.start.date || '')
    const isOverdue = !isCompleted && !isExternal && eventDate < currentTime
    const tutorColors = getTutorColors(event.teacherName, teacherIndex)
    const shortName = getShortName(event.teacherName)

    const parts = (event.summary || '').split(' - ')
    const studentName = parts[0] || 'Siswa'
    const pkgName = parts.slice(1).join(' - ')
    const packageColors = getPackageColors(pkgName)
    const colors = packageColors || tutorColors

    const hour = eventDate.getHours()
    const minute = eventDate.getMinutes()
    const timeStr = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`

    if (hour < CALENDAR_START_HOUR || hour > CALENDAR_END_HOUR) return null

    return (
        <motion.div
            layoutId={event.id}
            onClick={(e) => {
                if (!isOptimistic) {
                    e.stopPropagation();
                    onClick(event)
                }
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isDragging ? 0.3 : isOptimistic ? 0.7 : 1, scale: 1 }}
            whileHover={{ scale: canModify && !isExternal && !isOptimistic ? 1.05 : 1, zIndex: 40, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
            className={cn(
                "w-full h-full rounded-xl transition-all duration-200 overflow-hidden flex flex-col border shadow-sm cursor-pointer relative",
                isCompacted ? "p-1 ring-1 ring-white/50" : "p-2",
                isCompleted && "bg-slate-50 border-slate-200/60 opacity-60",
                isRescheduled && "bg-amber-50/90 border-amber-200",
                isOverdue && !isRescheduled && "bg-red-50/90 border-red-100",
                isExternal && "bg-sky-50/90 border-sky-100",
                isOptimistic && "bg-indigo-50/50 border-indigo-200 border-dashed",
                !isCompleted && !isOverdue && !isExternal && !isOptimistic && !isRescheduled && `${colors.bg} ${colors.border}`,
                canModify && !isExternal && !isOptimistic && "hover:shadow-lg",
                isDragging && "opacity-30"
            )}
        >
            {/* Left Accent Bar */}
            {!isCompleted && !isExternal && !isOptimistic && !isRescheduled && (
                <div className={cn("absolute left-0 top-0 bottom-0 bg-gradient-to-b shadow-sm", colors.grad, isCompacted ? "w-1" : "w-1")} />
            )}
            {isRescheduled && (
                <div className={cn("absolute left-0 top-0 bottom-0 bg-amber-400 shadow-sm", isCompacted ? "w-1" : "w-1")} />
            )}
            {isOptimistic && (
                <div className={cn("absolute left-0 top-0 bottom-0 bg-indigo-300 animate-pulse", isCompacted ? "w-1" : "w-1")} />
            )}

            <div className={cn(
                "flex-1 flex flex-col min-w-0 bg-white/40 rounded-r-lg overflow-hidden pr-1.5",
                !isCompleted && !isExternal && !isRescheduled && (isCompacted ? "pl-[3px]" : "pl-2"),
                isRescheduled && (isCompacted ? "pl-[3px]" : "pl-2")
            )}>
                {/* Top Row: Time & Tutor */}
                <div className="flex items-start justify-between gap-1 mb-0.5 min-w-0 flex-shrink-0">
                    <span className={cn(
                        "text-[10px] font-bold tabular-nums tracking-tight whitespace-nowrap",
                        isCompleted ? "text-slate-400" : isRescheduled ? "text-amber-600" : isOverdue ? "text-red-500" : isOptimistic ? "text-indigo-500" : colors.text
                    )}>
                        {timeStr}
                        {isOptimistic && <span className="ml-1 opacity-50">•</span>}
                        {isRescheduled && <span className="ml-1 text-[8px] bg-amber-200 text-amber-700 px-1 rounded">RES</span>}
                    </span>
                    {shortName && !isExternal && (
                        <span className={cn(
                            "inline-flex items-center gap-1 text-[9px] font-bold whitespace-nowrap flex-shrink-0",
                            isCompleted ? "text-slate-300" : isOptimistic ? "text-indigo-500" : colors.text
                        )}>
                            <span className={cn("w-1 h-1 rounded-full flex-shrink-0", isCompleted ? "bg-slate-200" : isOptimistic ? "bg-indigo-300" : colors.dot)} />
                            <span>{shortName}</span>
                        </span>
                    )}
                </div>

                {/* Student Name */}
                <span className={cn(
                    "text-[11px] font-semibold leading-tight flex-shrink",
                    isMicro ? "block truncate" : "break-words line-clamp-2",
                    isCompleted ? "text-slate-400" : isOverdue ? "text-red-900" : isOptimistic ? "text-indigo-700/70" : "text-slate-900"
                )} title={studentName}>
                    {studentName}
                </span>

                {/* Package / Tutor label (mobile shows tutor, desktop shows package) */}
                <div className={cn(
                    "flex flex-wrap items-center mt-auto overflow-hidden",
                    "gap-1"
                )}>
                    {!isMicro && isMobile && shortName && !isExternal && (
                        <span className={cn("text-[9px] font-bold leading-tight", isCompleted ? "text-slate-300" : colors.text)}>
                            {shortName}
                        </span>
                    )}
                    {!isMicro && !isMobile && pkgName && (
                        <span className={cn("text-[9px] font-medium break-words line-clamp-1 leading-tight", isCompleted ? "text-slate-300" : isOptimistic ? "text-indigo-400" : "text-slate-500")} title={pkgName}>
                            {pkgName}
                        </span>
                    )}
                </div>

                {isExternal && (
                    <span className="text-[9px] text-sky-600 mt-1 font-medium">📅 Google</span>
                )}
                {isOptimistic && (
                    <span className="text-[8px] text-indigo-400 mt-0.5 font-medium">Menyimpan...</span>
                )}
            </div>
        </motion.div>
    )
})

// Extended props for positioned events
interface PositionedDraggableEventCardProps extends PositionedEventCardProps {
    column: number
    totalColumns: number
    onDragStart: (event: CalendarEvent) => void
}

// Wrapper component for HTML5 draggable
function DraggableEventCard(props: PositionedDraggableEventCardProps) {
    const HOUR_HEIGHT = useHourHeight();
    const { event, canModify, onDragStart, onClick, isDragging, currentTime, column, totalColumns } = props
    const isExternal = event.isExternal
    const isOptimistic = event.isOptimistic || event.id.startsWith('optimistic-')

    const handleDragStart = (e: React.DragEvent) => {
        if (canModify && !isExternal && !isOptimistic) {
            onDragStart(event)
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('text/plain', event.id)
        }
    }

    const handleDragEnd = () => {
        document.body.style.cursor = ''
    }

    const eventDate = new Date(event.start.dateTime || event.start.date || '')
    const hour = eventDate.getHours()
    const minute = eventDate.getMinutes()

    if (hour < CALENDAR_START_HOUR || hour > CALENDAR_END_HOUR) return null

    const canDrag = canModify && !isExternal && !isOptimistic

    // Vertical Packing Logic Constraint
    const baseHourTop = (hour - CALENDAR_START_HOUR) * HOUR_HEIGHT

    let height = 64 // readable default max height
    let top = baseHourTop + (minute / 60) * HOUR_HEIGHT + 2

    // Stack multiple events vertically if they share the identical visual hour
    if (totalColumns > 1) {
        const spacePerCard = (HOUR_HEIGHT - 8) / totalColumns
        height = Math.min(64, spacePerCard)
        top = baseHourTop + 4 + column * (height + 2)
    }

    return (
        <div
            draggable={canDrag}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className={cn(
                "absolute",
                canDrag && "cursor-grab active:cursor-grabbing",
                isOptimistic && "cursor-not-allowed"
            )}
            style={{
                top: `${top}px`,
                height: `${height}px`,
                left: `2px`,
                width: `calc(100% - 4px)`,
                zIndex: isDragging ? 50 : 20,
            }}
        >
            <EventCard
                event={event}
                canModify={canModify}
                onClick={onClick}
                isDragging={isDragging}
                currentTime={currentTime}
                column={column}
                totalColumns={totalColumns}
                teacherIndex={props.teacherIndex}
            />
        </div>
    )
}

interface HourSidebarProps {
    currentHour: number
    currentMinute: number
}

const HourSidebar = memo(function HourSidebar({ currentHour, currentMinute }: HourSidebarProps) {
    const HOUR_HEIGHT = useHourHeight();
    return (
        <div
            className="w-14 flex-shrink-0 border-r border-slate-300 bg-slate-50 sticky left-0 z-30"
            style={{ paddingTop: `${HEADER_HEIGHT}px` }}
        >
            {Array.from({ length: CALENDAR_END_HOUR - CALENDAR_START_HOUR + 1 }).map((_, i) => {
                const hour = i + CALENDAR_START_HOUR
                const isCurrentHour = hour === currentHour

                return (
                    <div
                        key={i}
                        className="relative flex items-start justify-end pr-2"
                        style={{ height: `${HOUR_HEIGHT}px` }}
                    >
                        {/* Hour Line extending from sidebar */}
                        <div className={cn(
                            "absolute left-0 right-0 top-0 border-t",
                            isCurrentHour ? "border-indigo-300" : "border-slate-200"
                        )} />

                        {/* Hour Label - aligned with card */}
                        <span
                            className={cn(
                                "text-[12px] font-bold tabular-nums tracking-tight transition-colors bg-slate-50 px-0.5",
                                isCurrentHour ? "text-indigo-600" : "text-slate-500"
                            )}
                            style={{ marginTop: '2px' }}
                        >
                            {hour.toString().padStart(2, '0')}:00
                        </span>

                        {/* Current Time Indicator on Sidebar */}
                        {isCurrentHour && (
                            <div className="absolute right-0 top-0 w-2 h-full flex items-start justify-center -mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
})

interface CurrentTimeIndicatorProps {
    currentTime: Date
}

const CurrentTimeIndicator = memo(function CurrentTimeIndicator({ currentTime }: CurrentTimeIndicatorProps) {
    const HOUR_HEIGHT = useHourHeight();
    const h = currentTime.getHours()
    const m = currentTime.getMinutes()

    if (h < CALENDAR_START_HOUR || h > CALENDAR_END_HOUR) return null

    const top = (h - CALENDAR_START_HOUR) * HOUR_HEIGHT + (m / 60) * HOUR_HEIGHT + HEADER_HEIGHT

    return (
        <div
            className="absolute left-0 right-0 z-50 pointer-events-none flex items-center"
            style={{ top: `${top}px` }}
        >
            {/* Time Badge */}
            <div className="w-16 flex justify-end pr-2">
                <div className="bg-red-500 text-[10px] text-white font-black px-2 py-0.5 rounded-md shadow-lg shadow-red-500/30 border border-white/20 animate-pulse">
                    {h.toString().padStart(2, '0')}:{m.toString().padStart(2, '0')}
                </div>
            </div>

            {/* Line */}
            <div className="flex-1 relative">
                <div className="h-[2px] bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 shadow-lg" />
            </div>
        </div>
    )
})

interface DayColumnProps {
    day: Date
    index: number
    events: CalendarEvent[]
    today: Date
    canModify: boolean
    draggingEvent: CalendarEvent | null
    dragOverDate: string | null
    dragOverHour: number | null
    onDragStart: (event: CalendarEvent) => void
    onDrop: (e: React.DragEvent, date: Date) => void
    onDragOver: (e: React.DragEvent, dateStr: string) => void
    onEventClick: (event: CalendarEvent) => void
    onDayClick: (day: Date) => void
    currentTime: Date
    teachers: CalendarTeacher[]
}

const DayColumn = memo(function DayColumn({
    day,
    index,
    events,
    today,
    canModify,
    draggingEvent,
    dragOverDate,
    dragOverHour,
    onDragStart,
    onDrop,
    onDragOver,
    onEventClick,
    onDayClick,
    currentTime,
    teachers
}: DayColumnProps) {
    const HOUR_HEIGHT = useHourHeight();
    const dateStr = toDateStr(day)
    const isToday = isSameDay(day, today)
    const isPast = day < today && !isToday
    const isDragOver = dateStr === dragOverDate

    // Filter and sort events for this day
    const dayEvents = useMemo(() => {
        return events.filter(e => {
            const eventDate = new Date(e.start.dateTime || e.start.date || '')
            return toDateStr(eventDate) === dateStr
        }).sort((a, b) =>
            new Date(a.start.dateTime || a.start.date || '').getTime() -
            new Date(b.start.dateTime || b.start.date || '').getTime()
        )
    }, [events, dateStr])

    // Calculate positions for overlapping events
    const eventPositions = useMemo(() => {
        return calculateEventPositions(dayEvents)
    }, [dayEvents])

    return (
        <div
            className={cn(
                "relative transition-colors border-r border-slate-200/50 last:border-r-0",
                "min-w-0", // Ensure no minimum width on mobile so 7 cols can shrink
                isDragOver ? "bg-indigo-50/50" : isPast ? "bg-slate-50/50" : "bg-white"
            )}
            style={{ height: `${(CALENDAR_END_HOUR - CALENDAR_START_HOUR + 1) * HOUR_HEIGHT + HEADER_HEIGHT}px` }}
            onDragOver={canModify ? (e) => onDragOver(e, dateStr) : undefined}
            onDragLeave={() => { }}
            onDrop={canModify ? (e) => onDrop(e, day) : undefined}
        >
            {/* Day Header */}
            <div
                onClick={() => canModify && onDayClick(day)}
                className={cn(
                    "sticky top-0 z-40 w-full p-3 text-center border-b transition-all flex flex-col items-center justify-center",
                    isToday
                        ? "bg-gradient-to-b from-indigo-50/80 to-indigo-50/40 border-indigo-200"
                        : "bg-white/95 border-slate-200 hover:bg-slate-50/80",
                    canModify && "cursor-pointer"
                )}
                style={{ height: `${HEADER_HEIGHT}px` }}
            >
                <div className={cn(
                    "text-[10px] font-black uppercase tracking-wider mb-1",
                    isToday ? "text-indigo-600" : isPast ? "text-slate-300" : "text-slate-400"
                )}>
                    {DAY_LABELS[index]}
                </div>
                <div className={cn(
                    "text-lg font-black inline-flex items-center justify-center transition-all w-8 h-8 rounded-lg",
                    isToday
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                        : isPast ? "text-slate-300" : "text-slate-800 hover:bg-slate-100"
                )}>
                    {day.getDate()}
                </div>
            </div>

            {/* Hour Grid Lines */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ top: `${HEADER_HEIGHT}px` }}>
                {Array.from({ length: CALENDAR_END_HOUR - CALENDAR_START_HOUR + 1 }).map((_, idx) => {
                    const h = idx + CALENDAR_START_HOUR
                    const isHovered = isDragOver && dragOverHour === h
                    const isCurrentHour = h === currentTime.getHours() && isToday

                    return (
                        <div
                            key={idx}
                            className={cn(
                                "border-t transition-colors duration-150 relative",
                                isHovered ? "border-indigo-300 bg-indigo-50/30" :
                                    isCurrentHour ? "border-red-300 bg-red-50/10" : "border-slate-200"
                            )}
                            style={{ height: `${HOUR_HEIGHT}px` }}
                        >
                            {/* Half-hour dotted line */}
                            <div
                                className="absolute left-0 right-0 border-b border-dashed border-slate-200/60"
                                style={{ top: `${HOUR_HEIGHT / 2}px` }}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Events Overlay Structure */}
            <div
                className={cn(
                    "absolute inset-x-0 bottom-0 overflow-x-auto overflow-y-hidden z-20",
                    "scrollbar-thin scrollbar-thumb-slate-200/50 hover:scrollbar-thumb-slate-300 scrollbar-track-transparent"
                )}
                style={{ top: `${HEADER_HEIGHT}px` }}
            >
                <div
                    className="relative h-full"
                    style={{
                        // If there are more than 3 columns, enforce a minimum pixel width so they don't squish into unreadable strips
                        minWidth: eventPositions.some(p => p.totalColumns > 3) ? '280px' : '100%'
                    }}
                >
                    {eventPositions.map(({ event, column, totalColumns }) => {
                        let teacherIndex: number | undefined = undefined;
                        if (event.teacherName) {
                            const t = teachers.find(x => x.full_name === event.teacherName || event.teacherName?.toLowerCase().includes(x.shortName.toLowerCase()));
                            teacherIndex = t ? teachers.findIndex(x => x.id === t.id) : undefined;
                        }
                        return (
                            <DraggableEventCard
                                key={event.id}
                                event={event}
                                canModify={canModify}
                                onDragStart={onDragStart}
                                onClick={onEventClick}
                                isDragging={draggingEvent?.id === event.id}
                                currentTime={currentTime}
                                column={column}
                                totalColumns={totalColumns}
                                teacherIndex={teacherIndex !== -1 ? teacherIndex : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
})

interface SidebarSearchProps {
    onOpenCommand: () => void
}

const SidebarSearch = memo(function SidebarSearch({ onOpenCommand }: SidebarSearchProps) {
    return (
        <button
            onClick={onOpenCommand}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200/60 text-sm text-slate-500 hover:border-indigo-300 hover:shadow-sm hover:bg-indigo-50/30 transition-all group"
        >
            <Search className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
            <span className="flex-1 text-left text-slate-400 group-hover:text-slate-600">Cari...</span>
            <kbd className="text-[10px] bg-slate-100 group-hover:bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 flex items-center gap-0.5">
                <Command className="h-2.5 w-2.5" />K
            </kbd>
        </button>
    )
})

interface TutorFilterProps {
    selectedTutor: string
    onSelect: (tutor: string) => void
    eventCounts: Record<string, number>
    totalEvents: number
    teachers: CalendarTeacher[]
}

const TutorFilter = memo(function TutorFilter({ selectedTutor, onSelect, eventCounts, totalEvents, teachers }: TutorFilterProps) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1">
                Filter Tutor
            </label>
            <div className="flex flex-col gap-1">
                <FilterButton
                    isSelected={selectedTutor === 'all'}
                    onClick={() => onSelect('all')}
                    label="Semua Tutor"
                    count={totalEvents}
                    variant="default"
                />
                {teachers.map((teacher, index) => {
                    const colors = TUTOR_COLOR_PALETTES[index % TUTOR_COLOR_PALETTES.length]
                    const count = eventCounts[teacher.full_name] || eventCounts[teacher.shortName] || 0
                    const isSelected = selectedTutor === teacher.full_name || selectedTutor === teacher.shortName

                    return (
                        <FilterButton
                            key={teacher.id}
                            isSelected={isSelected}
                            onClick={() => onSelect(teacher.full_name)}
                            label={teacher.shortName}
                            count={count}
                            variant="color"
                            colors={colors}
                            dotColor={colors.dot}
                        />
                    )
                })}
            </div>
        </div>
    )
})

interface FilterButtonProps {
    isSelected: boolean
    onClick: () => void
    label: string
    count: number
    variant: 'default' | 'color'
    colors?: { bg: string; text: string; border: string }
    dotColor?: string
}

const FilterButton = memo(function FilterButton({
    isSelected,
    onClick,
    label,
    count,
    variant,
    colors,
    dotColor
}: FilterButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all border",
                variant === 'default' && isSelected && "bg-slate-900 text-white border-slate-900 shadow-md",
                variant === 'default' && !isSelected && "bg-white text-slate-500 border-slate-200 hover:border-slate-300",
                variant === 'color' && isSelected && colors && `${colors.bg} ${colors.text} ${colors.border} shadow-sm ring-1 ring-offset-1 ring-current`,
                variant === 'color' && !isSelected && "bg-white text-slate-400 border-slate-200 hover:bg-slate-50"
            )}
        >
            {dotColor && <span className={cn("w-2 h-2 rounded-full", dotColor)} />}
            <span className="flex-1 text-left">{label}</span>
            {count > 0 && <span className="opacity-60 text-[10px]">{count}</span>}
        </button>
    )
})

interface PackageFilterProps {
    selectedPackage: string
    onSelect: (pkg: string) => void
}

const PackageFilter = memo(function PackageFilter({ selectedPackage, onSelect }: PackageFilterProps) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-1">
                Filter Paket
            </label>
            <div className="flex flex-col gap-1">
                <FilterButton
                    isSelected={selectedPackage === 'all'}
                    onClick={() => onSelect('all')}
                    label="Semua Paket"
                    count={0}
                    variant="default"
                />
                {PACKAGES.map(pkg => {
                    const colors = PACKAGE_COLORS[pkg]
                    const isSelected = selectedPackage === pkg

                    return (
                        <FilterButton
                            key={pkg}
                            isSelected={isSelected}
                            onClick={() => onSelect(pkg)}
                            label={pkg}
                            count={0}
                            variant="color"
                            colors={colors}
                            dotColor={colors.dot}
                        />
                    )
                })}
            </div>
        </div>
    )
})

// ============================================
// MAIN COMPONENT
// ============================================

interface CalendarViewProps {
    initialEvents?: CalendarEvent[]
    teachers?: CalendarTeacher[]
}

export function CalendarView({ initialEvents = [], teachers = [] }: CalendarViewProps) {
    const HOUR_HEIGHT = useHourHeight();
    const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()))
    const [events, setEvents] = useState<CalendarEvent[]>(initialEvents)
    const [isLoading, setIsLoading] = useState(initialEvents.length === 0)
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
    const [selectedTutor, setSelectedTutor] = useState<string>('all')
    const [selectedPackage, setSelectedPackage] = useState<string>('all')
    const { isAdmin } = useRole()
    const canModify = isAdmin

    const [draggingEvent, setDraggingEvent] = useState<CalendarEvent | null>(null)
    const [dragOverDate, setDragOverDate] = useState<string | null>(null)
    const [dragOverHour, setDragOverHour] = useState<number | null>(null)
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
    const [selectedDateForSchedule, setSelectedDateForSchedule] = useState<Date | undefined>(undefined)
    const [isCommandOpen, setIsCommandOpen] = useState(false)
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

    const isFirstMount = useRef(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [now, setNow] = useState(new Date())

    // Update current time every minute
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000)
        return () => clearInterval(timer)
    }, [])

    // Auto-scroll to current time on load
    useEffect(() => {
        if (!isLoading && scrollContainerRef.current) {
            const currentHour = new Date().getHours()
            const scrollHour = Math.max(CALENDAR_START_HOUR, Math.min(CALENDAR_END_HOUR, currentHour - 1))
            const scrollTop = (scrollHour - CALENDAR_START_HOUR) * HOUR_HEIGHT
            scrollContainerRef.current.scrollTop = scrollTop
        }
    }, [isLoading])

    const today = useMemo(() => {
        const d = new Date()
        d.setHours(0, 0, 0, 0)
        return d
    }, [])

    const isMobile = useMobile()

    const weekDays = useMemo(() => {
        return getWeekDays(weekStart)
    }, [weekStart])

    const weekLabel = useMemo(() => formatWeekLabel(weekDays), [weekDays])

    const fetchEvents = useCallback(async () => {
        setIsLoading(true)
        try {
            const data = await listCalendarEvents(weekStart.toISOString())
            setEvents(data.items || [])
        } catch (error) {
            console.error('Failed to fetch events:', error)
        } finally {
            setIsLoading(false)
        }
    }, [weekStart])

    useEffect(() => {
        if (isFirstMount.current && initialEvents.length > 0) {
            isFirstMount.current = false
            return
        }
        fetchEvents()
    }, [fetchEvents])

    useEffect(() => {
        const handler = () => fetchEvents()
        window.addEventListener('session-created', handler)
        return () => window.removeEventListener('session-created', handler)
    }, [fetchEvents])

    // Handle optimistic events from ScheduleModal
    useEffect(() => {
        const handler = (e: CustomEvent<{ events: CalendarEvent[] }>) => {
            const optimisticEvents = e.detail?.events || []
            if (optimisticEvents.length > 0) {
                setEvents(prev => {
                    // Merge optimistic events with existing, avoiding duplicates
                    const existingIds = new Set(prev.map(ev => ev.id))
                    const newEvents = optimisticEvents.filter(ev => !existingIds.has(ev.id))
                    return [...prev, ...newEvents].sort((a, b) => {
                        const dateA = new Date(a.start.dateTime || a.start.date || '').getTime()
                        const dateB = new Date(b.start.dateTime || b.start.date || '').getTime()
                        return dateA - dateB
                    })
                })
            }
        }
        window.addEventListener('sessions-optimistic', handler as EventListener)
        return () => window.removeEventListener('sessions-optimistic', handler as EventListener)
    }, [])

    // Handle confirmed events from server (replace optimistic with real data)
    useEffect(() => {
        const handler = (e: CustomEvent<{ created: { date: string; time: string; studentName: string; tutor: string; package: string; status: string; notes: string; rowIndex: number }[] }>) => {
            const created = e.detail?.created || []
            if (created.length > 0) {
                setEvents(prev => {
                    // Convert created schedules to calendar events
                    // Parse times as WIB (UTC+7)
                    const newEvents: CalendarEvent[] = created.map(s => {
                        const timeParts = s.time.match(/^(\d{1,2}):(\d{2})/)
                        const hours = timeParts ? parseInt(timeParts[1]) : 9
                        const minutes = timeParts ? parseInt(timeParts[2]) : 0
                        const startDate = new Date(`${s.date}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00+07:00`)
                        const endDate = new Date(startDate.getTime() + 60 * 60000)

                        return {
                            id: `jadwal-${s.rowIndex}`,
                            summary: `${s.studentName}${s.package ? ' - ' + s.package : ''}`,
                            start: { dateTime: startDate.toISOString() },
                            end: { dateTime: endDate.toISOString() },
                            status: s.status === 'Done' ? 'completed' : 'scheduled',
                            isAppSession: true,
                            isJadwalSheet: true,
                            teacherName: s.tutor || undefined,
                        }
                    })

                    // Remove optimistic events (those with isOptimistic flag or temp IDs)
                    const withoutOptimistic = prev.filter(ev =>
                        !(ev as any).isOptimistic && !ev.id.startsWith('optimistic-')
                    )

                    // Add new real events, avoiding duplicates by rowIndex
                    const existingRowIndices = new Set(
                        withoutOptimistic
                            .filter(ev => ev.id.startsWith('jadwal-'))
                            .map(ev => parseInt(ev.id.replace('jadwal-', '')))
                    )
                    const filteredNew = newEvents.filter(ev => {
                        const rowIdx = parseInt(ev.id.replace('jadwal-', ''))
                        return !existingRowIndices.has(rowIdx)
                    })

                    return [...withoutOptimistic, ...filteredNew].sort((a, b) => {
                        const dateA = new Date(a.start.dateTime || a.start.date || '').getTime()
                        const dateB = new Date(b.start.dateTime || b.start.date || '').getTime()
                        return dateA - dateB
                    })
                })
            }
        }
        window.addEventListener('sessions-confirmed', handler as EventListener)
        return () => window.removeEventListener('sessions-confirmed', handler as EventListener)
    }, [])

    // Clear optimistic events on error
    useEffect(() => {
        const handler = () => {
            setEvents(prev => prev.filter(ev => !(ev as any).isOptimistic && !ev.id.startsWith('optimistic-')))
        }
        window.addEventListener('sessions-clear-optimistic', handler)
        return () => window.removeEventListener('sessions-clear-optimistic', handler)
    }, [])

    // Keyboard shortcut for command palette (only when not already focused on input)
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

    const prevWeek = useCallback(() => {
        setWeekStart(d => { const nd = new Date(d); nd.setDate(nd.getDate() - 7); return nd })
    }, [])

    const nextWeek = useCallback(() => {
        setWeekStart(d => { const nd = new Date(d); nd.setDate(nd.getDate() + 7); return nd })
    }, [])

    const goToday = useCallback(() => setWeekStart(getWeekStart(new Date())), [])

    // Memoize teacher lookups: O(1) map for teacher identities
    const tutorLookupMaps = useMemo(() => {
        const byFullName = new Map<string, CalendarTeacher>()
        const lowercaseShortNames = new Map<string, CalendarTeacher>()

        for (const t of teachers) {
            byFullName.set(t.full_name, t)
            lowercaseShortNames.set(t.shortName.toLowerCase(), t)
        }

        return { byFullName, lowercaseShortNames }
    }, [teachers])

    // Find a teacher optimally
    const resolveTeacherFast = useCallback((teacherName: string | undefined) => {
        if (!teacherName) return undefined
        if (tutorLookupMaps.byFullName.has(teacherName)) return tutorLookupMaps.byFullName.get(teacherName)

        // Fallback shortname scan
        const lowerName = teacherName.toLowerCase()
        for (const [shortName, teacher] of tutorLookupMaps.lowercaseShortNames.entries()) {
            if (lowerName.includes(shortName)) return teacher
        }
        return undefined
    }, [tutorLookupMaps])

    // Filter events
    const filteredEvents = useMemo(() => {
        return events.filter(e => {
            const matchesTutor = selectedTutor === 'all' || (
                e.teacherName && (() => {
                    const tutorObj = resolveTeacherFast(selectedTutor)
                    if (!tutorObj) return e.teacherName === selectedTutor

                    const eventTutor = resolveTeacherFast(e.teacherName)
                    return eventTutor?.id === tutorObj.id
                })()
            )
            const matchesPackage = selectedPackage === 'all' || (
                e.summary && e.summary.toLowerCase().includes(selectedPackage.toLowerCase())
            )
            return matchesTutor && matchesPackage
        })
    }, [events, selectedTutor, selectedPackage, resolveTeacherFast])

    const tutorEventCounts = useMemo(() => {
        const counts: Record<string, number> = {}
        for (const t of teachers) counts[t.full_name] = 0

        for (const e of events) {
            const tutor = resolveTeacherFast(e.teacherName)
            if (tutor && counts[tutor.full_name] !== undefined) {
                counts[tutor.full_name]++
            }
        }

        return counts
    }, [events, teachers, resolveTeacherFast])

    const nonExternalEventsCount = useMemo(() =>
        events.filter(e => !e.isExternal).length,
        [events]
    )

    // Drag handlers
    const handleDragStart = useCallback((event: CalendarEvent) => {
        if (!canModify || event.isExternal) { return }
        setDraggingEvent(event)
    }, [canModify])

    const handleDrop = useCallback(async (e: React.DragEvent, targetDate: Date) => {
        e.preventDefault()
        setDragOverDate(null)

        if (!canModify || !draggingEvent || draggingEvent.isExternal) {
            setDraggingEvent(null);
            return
        }

        const rect = e.currentTarget.getBoundingClientRect()
        const y = e.clientY - rect.top - HEADER_HEIGHT
        let droppedHour = Math.floor((y + 30) / HOUR_HEIGHT) + CALENDAR_START_HOUR
        let droppedMinute = 0

        if (droppedMinute === 60) {
            droppedMinute = 0
            droppedHour += 1
        }

        droppedHour = Math.max(CALENDAR_START_HOUR, Math.min(CALENDAR_END_HOUR, droppedHour))

        const newDT = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), droppedHour, droppedMinute)
        const updated = {
            ...draggingEvent,
            start: { dateTime: newDT.toISOString() },
            end: { dateTime: new Date(newDT.getTime() + 3600000).toISOString() }
        }

        setEvents(prev => prev.map(e => e.id === draggingEvent.id ? updated : e))
        setDraggingEvent(null)

        try {
            const isJadwal = typeof draggingEvent.id === 'string' && draggingEvent.id.startsWith('jadwal-')
            if (isJadwal) {
                const rowIndex = parseInt(draggingEvent.id.replace('jadwal-', ''))
                const dateStr = toDateStr(targetDate)
                const timeStr = `${String(droppedHour).padStart(2, '0')}:${String(droppedMinute).padStart(2, '0')}`
                await rescheduleJadwalAction(rowIndex, dateStr, timeStr)
            } else {
                await rescheduleSession(draggingEvent.id, newDT.toISOString())
            }
            toast.success('Sesi berhasil dipindahkan!')
        } catch (err) {
            console.error('Failed to reschedule:', err)
            toast.error('Gagal memindahkan sesi')
            fetchEvents()
        }
    }, [canModify, draggingEvent, fetchEvents])

    const handleDragOver = useCallback((e: React.DragEvent, dateStr: string) => {
        e.preventDefault()
        setDragOverDate(dateStr)
        const rect = e.currentTarget.getBoundingClientRect()
        const gridY = e.clientY - rect.top - HEADER_HEIGHT
        const h = Math.floor((gridY + 30) / HOUR_HEIGHT) + CALENDAR_START_HOUR
        setDragOverHour(h)
    }, [])

    const handleDayClick = useCallback((day: Date) => {
        if (canModify) {
            setSelectedDateForSchedule(day)
            setIsScheduleModalOpen(true)
        }
    }, [canModify])

    const handleEventClick = useCallback((event: CalendarEvent) => {
        setSelectedEvent(event)
    }, [])

    const handleDeleteSession = useCallback((id: string) => {
        setEvents(prev => prev.filter(e => e.id !== id))
        setSelectedEvent(null)
    }, [])

    const handleUpdateSession = useCallback((s: CalendarEvent) => {
        setEvents(prev => prev.map(e => e.id === s.id ? s : e))
        setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col md:flex-row h-[calc(100vh-56px)] md:gap-4 md:px-4 overflow-hidden bg-slate-50/50 md:bg-transparent">
            {/* Sidebar Overlay (Mobile) */}
            <AnimatePresence>
                {isMobileSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-[100] bg-slate-900/20 backdrop-blur-sm"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={cn(
                "flex-shrink-0 flex flex-col gap-5 py-6 md:py-4 overflow-y-auto scrollbar-hide",
                "fixed md:static inset-y-0 left-0 z-[110] bg-white md:bg-transparent w-[280px] md:w-44 px-5 md:px-0 transition-transform duration-300 shadow-2xl md:shadow-none border-r md:border-r-0 border-slate-200",
                isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            )}>
                <div className="flex items-center justify-between md:hidden pb-2 mb-2 border-b border-slate-100">
                    <h1 className="text-xl font-black text-slate-900 tracking-tight">Filter Jadwal</h1>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileSidebarOpen(false)} className="h-8 w-8 text-slate-400 hover:bg-slate-100 rounded-full">
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Header */}
                <div className="hidden md:block">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight">Jadwal</h1>
                    <h2 className="text-lg font-bold text-slate-400">Mengajar</h2>
                    <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-wider bg-slate-100/80 px-2 py-1 rounded-lg inline-block">
                        {nonExternalEventsCount} sesi minggu ini
                    </p>
                </div>

                {/* Search - Moved from Global Header */}
                <SidebarSearch onOpenCommand={() => setIsCommandOpen(true)} />

                {/* Tutor Filter */}
                <TutorFilter
                    selectedTutor={selectedTutor}
                    onSelect={setSelectedTutor}
                    eventCounts={tutorEventCounts}
                    totalEvents={nonExternalEventsCount}
                    teachers={teachers}
                />

                {/* Package Filter */}
                <PackageFilter
                    selectedPackage={selectedPackage}
                    onSelect={setSelectedPackage}
                />
            </aside>

            {/* Main Calendar */}
            <main
                className="flex-1 flex flex-col h-full bg-white md:rounded-2xl border-x md:border border-slate-200/60 shadow-sm overflow-hidden relative"
                style={{ zoom: isMobile ? 1 : 0.8 }}
            >
                {/* Header */}
                <header className="flex flex-col sm:flex-row shadow-sm sm:shadow-none sm:items-center sm:justify-between px-3 md:px-6 py-3 border-b border-slate-200/60 bg-white/95 backdrop-blur-sm sticky top-0 z-50 gap-3">
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden h-9 w-9 text-slate-500 -ml-1 border border-slate-200 bg-white"
                            onClick={() => setIsMobileSidebarOpen(true)}
                        >
                            <Menu className="h-4 w-4" />
                        </Button>
                        <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight flex-1 md:flex-none line-clamp-1">{weekLabel}</h2>
                    </div>

                    <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end gap-2 shrink-0 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
                        <div className="flex items-center bg-slate-100/60 rounded-xl p-0.5 border border-slate-200/50 shrink-0">
                            <Button variant="ghost" size="sm" onClick={prevWeek} className="h-8 w-8 p-0 hover:bg-white rounded-lg">
                                <ChevronLeft className="h-4 w-4 text-slate-500" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={goToday} className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 h-8 hover:bg-white text-slate-600">
                                Hari Ini
                            </Button>
                            <Button variant="ghost" size="sm" onClick={nextWeek} className="h-8 w-8 p-0 hover:bg-white rounded-lg">
                                <ChevronRight className="h-4 w-4 text-slate-500" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={fetchEvents}
                                className="h-9 w-9 text-slate-400 hover:text-indigo-600 bg-white border border-slate-200/60 rounded-xl shadow-sm flex-shrink-0"
                            >
                                <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
                            </Button>

                            {canModify && (
                                <Button
                                    onClick={() => { setSelectedDateForSchedule(undefined); setIsScheduleModalOpen(true) }}
                                    className="h-9 px-3 sm:px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.2)] text-xs font-bold gap-1 transition-all active:scale-95 flex-shrink-0 whitespace-nowrap"
                                >
                                    <Plus className="h-4 w-4" strokeWidth={3} />
                                    <span className="hidden sm:inline">Jadwal Baru</span>
                                    <span className="sm:hidden">Baru</span>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Mobile Quick Tutor Filter */}
                <div className="md:hidden flex items-center gap-2 px-3 py-2 overflow-x-auto [&::-webkit-scrollbar]:h-0 border-b border-slate-200/60 bg-slate-50/50 relative">
                    <FilterButton
                        isSelected={selectedTutor === 'all'}
                        onClick={() => setSelectedTutor('all')}
                        label="Semua"
                        count={0}
                        variant="default"
                    />
                    {teachers.map((tutor, idx) => {
                        const colors = getTutorColors(tutor.full_name, idx)
                        return (
                            <FilterButton
                                key={tutor.id}
                                isSelected={selectedTutor === tutor.full_name}
                                onClick={() => setSelectedTutor(tutor.full_name)}
                                label={tutor.shortName}
                                count={0}
                                variant="color"
                                colors={colors}
                                dotColor={colors.dot}
                            />
                        )
                    })}
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 overflow-hidden relative">
                    <AnimatePresence>
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/90 backdrop-blur-sm z-[100]"
                            >
                                <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sinkronisasi...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div
                        ref={scrollContainerRef}
                        className="h-full flex flex-col overflow-auto relative scroll-smooth bg-slate-50/30 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-indigo-400/80 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-content hover:[&::-webkit-scrollbar-thumb]:bg-indigo-500/80 rounded-b-2xl"
                    >
                        <div className="flex relative">
                            {/* Current Time Indicator */}
                            <CurrentTimeIndicator currentTime={now} />

                            {/* Hours Sidebar (Hidden on mobile for cleaner look) */}
                            <div className="hidden md:block">
                                <HourSidebar currentHour={now.getHours()} currentMinute={now.getMinutes()} />
                            </div>

                            {/* Days Grid - 7 Columns squeezed to viewport on mobile, fixed width scroll on desktop */}
                            <div className="grid grid-cols-7 flex-1 min-w-full md:min-w-[1000px]">
                                {weekDays.map((day, i) => (
                                    <DayColumn
                                        key={toDateStr(day)}
                                        day={day}
                                        index={i}
                                        events={filteredEvents}
                                        today={today}
                                        canModify={canModify}
                                        draggingEvent={draggingEvent}
                                        dragOverDate={dragOverDate}
                                        dragOverHour={dragOverHour}
                                        onDragStart={handleDragStart}
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onEventClick={handleEventClick}
                                        onDayClick={handleDayClick}
                                        currentTime={now}
                                        teachers={teachers}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modals */}
            <AnimatePresence>
                {selectedEvent && (
                    <SessionDetailModal
                        session={selectedEvent}
                        isOpen={!!selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                        onUpdate={canModify ? handleUpdateSession : undefined}
                        onDelete={canModify ? handleDeleteSession : undefined}
                        initialMode="view"
                    />
                )}
            </AnimatePresence>

            {canModify && (
                <ScheduleModal
                    isOpen={isScheduleModalOpen}
                    onClose={() => setIsScheduleModalOpen(false)}
                    preselectedDate={selectedDateForSchedule}
                    teachers={teachers}
                />
            )}

            {/* Command Palette - Now triggered from sidebar */}
            <CommandPalette
                isOpen={isCommandOpen}
                onClose={() => setIsCommandOpen(false)}
                isAdmin={isAdmin}
            />
        </div>
    )
}
