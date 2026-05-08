'use client'

import { useState, useEffect } from "react"

import { Sparkles, Calendar, ArrowRight, Clock } from "lucide-react"
import { ScheduleButton } from "@/components/ScheduleButton"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"

interface DashboardHeaderProps {
    user: any
    nextSession: any
    sessionCount: number
}

export function DashboardHeader({ user, nextSession, sessionCount }: DashboardHeaderProps) {
    const hour = new Date().getHours()
    const [greeting, setGreeting] = useState("")

    const fullName = user.user_metadata?.full_name || ''
    const firstName = fullName.split(' ')[0] || 'Teacher'

    useEffect(() => {
        let currentGreeting = "Good Morning"
        if (hour >= 12 && hour < 17) currentGreeting = "Good Afternoon"
        if (hour >= 17) currentGreeting = "Good Evening"
        if (fullName === "Maghfira Aulia Ramadhanti") {
            const bucinGreetings = [
                "Jujurly, kamu definisi cantik paripurna no debat ",
                "ga bahaya ta? Cantikmu bikin diabetes stadium 4 ",
                "pinjem dulu seratus, buat beli truk cintaku padamu ",
                "aih cantiknya pacar ak ",
                "semangat cenk ",
                "lopyu cenk "
            ]
            const randomIndex = Math.floor(Math.random() * bucinGreetings.length)
            currentGreeting = bucinGreetings[randomIndex]
        }
        setGreeting(currentGreeting)
    }, [hour, fullName])

    return (
        <div className="space-y-4 md:space-y-0 md:grid md:gap-6 md:grid-cols-3">
            {/* Hero Greeting */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 md:p-8 text-white shadow-premium flex flex-col justify-between">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-48 md:h-64 w-48 md:w-64 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-48 md:h-64 w-48 md:w-64 rounded-full bg-white/10 blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-indigo-100 mb-1.5 md:mb-2">
                        <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider">ECC Dashboard</span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
                        {greeting}, {firstName}!
                    </h1>
                    <p className="text-indigo-100 max-w-md text-sm md:text-lg leading-relaxed">
                        You have <span className="font-bold text-white">{sessionCount} sessions</span> coming up.
                        {sessionCount > 0 ? " Ready to inspire!" : " Enjoy your break!"}
                    </p>
                </div>

                <div className="relative z-10 mt-4 md:mt-6 flex flex-wrap gap-2 md:gap-3">
                    <ScheduleButton />
                    <Link href="/students" className="px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all font-medium text-sm text-center whitespace-nowrap">
                        Students
                    </Link>
                </div>
            </div>


            {/* Next Up Card */}
            <GlassCard className="relative overflow-hidden flex flex-col justify-between p-4 md:p-6 border-indigo-100/50 bg-gradient-to-br from-white to-indigo-50/50">
                <div className="absolute top-0 right-0 p-3 md:p-4 opacity-10">
                    <Clock className="h-16 md:h-24 w-16 md:w-24 text-indigo-600" />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md">
                            Next Up
                        </span>
                        {nextSession && (
                            <span className="text-[10px] md:text-xs font-medium text-slate-400">
                                {new Date(nextSession.start.dateTime || nextSession.start.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        )}
                    </div>

                    {nextSession ? (
                        <div className="space-y-2 md:space-y-3">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 line-clamp-1">
                                    {nextSession.summary.split(' - ')[0]}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-500 line-clamp-1">
                                    {nextSession.summary.split(' - ')[1] || 'Session'}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 bg-white/50 p-2 rounded-lg border border-indigo-100/50">
                                <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-indigo-500" />
                                <span>
                                    {new Date(nextSession.start.dateTime || nextSession.start.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    {' - '}
                                    {new Date(nextSession.end.dateTime || nextSession.end.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-4 md:py-6">
                            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-2 md:mb-3">
                                <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                            </div>
                            <p className="text-slate-500 font-medium text-sm">No sessions</p>
                            <p className="text-[10px] md:text-xs text-slate-400">Enjoy your free time!</p>
                        </div>
                    )}
                </div>

                {nextSession && (
                    <Link href="/calendar" className="mt-3 md:mt-4 flex items-center justify-center w-full py-2 md:py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-xs md:text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                        View Details <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                    </Link>
                )}
            </GlassCard>
        </div>
    )
}
