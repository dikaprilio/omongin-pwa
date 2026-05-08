'use client'

import { useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Clock, ArrowRight, CheckCircle, CalendarClock, ExternalLink, AlertCircle } from "lucide-react"
import { SessionDetailModal } from "@/components/SessionDetailModal"
import { Button } from "@/components/ui/button"

interface DashboardSessionsProps {
    sessions: any[]
    type?: 'upcoming' | 'needs_notes' | 'completed'
}

export function DashboardSessions({ sessions, type = 'upcoming' }: DashboardSessionsProps) {
    const [selectedSession, setSelectedSession] = useState<any>(null)
    const [modalMode, setModalMode] = useState<'view' | 'reschedule' | 'complete'>('view')

    const handleOpenModal = (session: any, mode: 'view' | 'reschedule' | 'complete' = 'view') => {
        // If external, only allow view
        if (session.isExternal && mode !== 'view') return

        setSelectedSession(session)
        setModalMode(mode)
    }

    const handleCloseModal = () => {
        setSelectedSession(null)
        setModalMode('view')
    }

    if (sessions.length === 0) {
        if (type === 'needs_notes') return null // Don't show empty needs notes
        if (type === 'completed') return null // Don't show empty completed

        return (
            <GlassCard className="p-8 text-center text-muted-foreground">
                <p>No upcoming sessions.</p>
                <p className="text-sm mt-1">Enjoy your free time!</p>
            </GlassCard>
        )
    }

    return (
        <>
            <div className="space-y-3">
                {sessions.map((event: any, index: number) => {
                    const date = new Date(event.start.dateTime || event.start.date)
                    const isToday = new Date().toDateString() === date.toDateString()
                    const isExternal = event.isExternal

                    let cardStyle = `p-3 sm:p-4 flex flex-row flex-wrap items-center gap-3 sm:gap-4 cursor-pointer group overflow-hidden`

                    if (type === 'needs_notes') {
                        cardStyle += ` border-l-4 border-l-amber-500 bg-amber-50/80`
                    } else if (type === 'completed') {
                        cardStyle += ` opacity-75 grayscale-[0.5]`
                    } else if (index === 0 && type === 'upcoming') {
                        cardStyle += ` border-l-4 border-l-primary shadow-md`
                    }

                    return (
                        <GlassCard
                            key={event.id}
                            hoverEffect
                            className={cardStyle}
                            onClick={() => handleOpenModal(event, 'view')}
                        >
                            {/* Date Badge */}
                            <div className={`flex flex-col items-center justify-center min-w-[3rem] w-12 sm:w-14 h-12 sm:h-14 rounded-xl backdrop-blur-sm shadow-sm flex-shrink-0 ${type === 'needs_notes' ? 'bg-amber-100 text-amber-700' : 'bg-white/80 text-slate-700'}`}>
                                <span className="text-[10px] sm:text-xs font-bold uppercase opacity-60">{date.toLocaleString('default', { month: 'short' })}</span>
                                <span className={`text-lg sm:text-xl font-bold ${isToday && type === 'upcoming' ? 'text-primary' : ''}`}>{date.getDate()}</span>
                            </div>

                            {/* Mobile: Compact info */}
                            <div className="flex-1 min-w-0 max-w-[calc(100%-4rem)] sm:hidden overflow-hidden">
                                <h4 className={`font-semibold truncate text-sm ${type === 'completed' ? 'line-through text-slate-400' : 'text-slate-800'}`}>{event.summary}</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                                    <Clock className="h-3 w-3 flex-shrink-0" />
                                    <span>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    {isExternal && <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 flex-shrink-0">GCal</span>}
                                </div>
                            </div>

                            {/* Desktop: Full info */}
                            <div className="flex-1 min-w-0 hidden sm:block">
                                <div className="flex items-center gap-2">
                                    <h4 className={`font-semibold truncate text-base ${type === 'completed' ? 'line-through text-slate-400' : 'text-slate-800'}`}>{event.summary}</h4>
                                    {isExternal && <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">Google Calendar</span>}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                    {isToday && type === 'upcoming' && (
                                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-medium text-[10px]">
                                            TODAY
                                        </span>
                                    )}
                                    {type === 'needs_notes' && (
                                        <span className="flex items-center gap-1 text-amber-600 font-medium">
                                            <AlertCircle className="h-3 w-3" />
                                            Needs Notes
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Mobile Actions (Row below) */}
                            {type !== 'completed' && !isExternal && (
                                <div className="flex sm:hidden w-full gap-2 mt-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1 h-8 text-xs border-slate-200 text-slate-600"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOpenModal(event, 'reschedule')
                                        }}
                                    >
                                        Reschedule
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="flex-1 h-8 text-xs bg-green-600 hover:bg-green-700 text-white"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOpenModal(event, 'complete')
                                        }}
                                    >
                                        {type === 'needs_notes' ? 'Add Notes' : 'Complete'}
                                    </Button>
                                </div>
                            )}

                            {/* Desktop Actions (Hover) */}
                            <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {isExternal ? (
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 text-slate-400"
                                        title="External Event"
                                        disabled
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                ) : type === 'completed' ? (
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 text-slate-400"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleOpenModal(event, 'view')
                                        }}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="h-8 w-8 text-slate-400 hover:text-primary hover:bg-indigo-50"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleOpenModal(event, 'view')
                                            }}
                                            title="View Details"
                                        >
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="h-8 w-8 text-slate-400 hover:text-green-600 hover:bg-green-50"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleOpenModal(event, 'complete')
                                            }}
                                            title={type === 'needs_notes' ? 'Add Notes & Complete' : 'Complete Session'}
                                        >
                                            <CheckCircle className="h-4 w-4" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </GlassCard>
                    )
                })}
            </div>

            <SessionDetailModal
                session={selectedSession}
                isOpen={!!selectedSession}
                onClose={handleCloseModal}
                initialMode={modalMode}
            />
        </>
    )
}
