import { createClient, createAdminClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { DashboardSessions } from "@/components/DashboardSessions"
import { DashboardHeader } from "@/components/DashboardHeader"
import { AdminSubscriptions } from "@/components/admin/AdminSubscriptions"
import { AdminPackages } from "@/components/admin/AdminPackages"
import AdminPlacementPassword from "@/components/admin/AdminPlacementPassword"
import { QuickActions } from "@/components/QuickActions"
import { StatsOverview } from "@/components/StatsOverview"
import { Sparkles, ArrowRight } from "lucide-react"
import { listCalendarEvents } from "@/app/(dashboard)/calendar/actions"
import { isAdmin } from "@/lib/auth/roles"

export default async function Dashboard() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        return redirect("/login")
    }

    const admin = await isAdmin()


    // Fetch stats
    const { count: studentCount } = await supabase.from('students').select('*', { count: 'exact', head: true })
    const { count: packageCount } = await supabase.from('packages').select('*', { count: 'exact', head: true })

    // Fetch packages for QuickActions
    const { data: packages } = await supabase.from('packages').select('*').order('name')

    // Fetch all events using the shared action (ensures consistency with /calendar)
    // We pass the current time to get future events (including GCal)
    const { items: allEvents } = await listCalendarEvents(new Date().toISOString())

    // Filter for upcoming (future only)
    const upcomingSessions = allEvents.filter((session: any) => {
        return session.status !== 'cancelled'
    }).slice(0, 5)

    // 2. Fetch from Supabase (Scheduled & Completed) for History/Needs Notes
    // We fetch this separately because listCalendarEvents with timeMin=now only returns future events.
    // We need past events for "Needs Notes" and "History".
    // Admins see all sessions, teachers only see their own
    const queryClient = admin ? await createAdminClient() : supabase

    let sessionsQuery = queryClient
        .from('sessions')
        .select(`
        id,
        start_time,
        end_time,
        notes,
        status,
        students (full_name, email),
        packages (name)
      `)
        .order('start_time', { ascending: false })
        .limit(20)

    // Teachers only see their own sessions
    if (!admin) {
        sessionsQuery = sessionsQuery.eq('user_id', user.id)
    }

    const { data: dbSessions } = await sessionsQuery

    let needsNotesSessions: any[] = []
    let completedSessions: any[] = []

    if (dbSessions) {
        const now = new Date()

        dbSessions.forEach((session: any) => {
            const start = new Date(session.start_time)
            const student = Array.isArray(session.students) ? session.students[0] : session.students
            const pkg = Array.isArray(session.packages) ? session.packages[0] : session.packages

            const formattedSession = {
                id: session.id,
                source: 'app',
                status: session.status,
                summary: `${pkg?.name || 'Session'} - ${student?.full_name || 'Student'}`,
                description: session.notes,
                start: { dateTime: session.start_time },
                end: { dateTime: session.end_time }
            }

            if (session.status === 'completed') {
                completedSessions.push(formattedSession)
            } else if (session.status === 'scheduled') {
                if (start < now) {
                    needsNotesSessions.push(formattedSession)
                }
            }
        })
    }

    const nextSession = upcomingSessions.length > 0 ? upcomingSessions[0] : null

    return (
        <div className="space-y-8 animate-in fade-in duration-700 pb-10 w-full overflow-hidden max-w-7xl mx-auto">

            {/* 1. Header & Hero */}
            <DashboardHeader
                user={user}
                nextSession={nextSession}
                sessionCount={upcomingSessions.length}
            />

            {/* 2. Stats Grid */}
            <StatsOverview
                studentCount={studentCount || 0}
                packageCount={packageCount || 0}
                sessionCount={upcomingSessions.length}
            />

            {/* 3. Main Content Grid */}
            <div className="grid gap-8 lg:grid-cols-12 w-full">

                {/* Left Column: Schedule & Tasks (8 cols) */}
                <div className="lg:col-span-8 space-y-8 min-w-0">

                    {/* Needs Attention Section */}
                    {needsNotesSessions.length > 0 && (
                        <div className="bg-amber-50/80 backdrop-blur-sm border border-amber-200/60 rounded-3xl p-6 overflow-hidden shadow-sm relative group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="h-24 w-24 text-amber-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-amber-800 flex items-center gap-2">
                                        <div className="p-2 bg-amber-100/50 rounded-xl">
                                            <Sparkles className="h-5 w-5 text-amber-600" />
                                        </div>
                                        Needs Attention
                                    </h2>
                                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                                        {needsNotesSessions.length} Pending
                                    </span>
                                </div>
                                <DashboardSessions sessions={needsNotesSessions} type="needs_notes" />
                            </div>
                        </div>
                    )}

                    {/* Admin Management Sections */}
                    {admin && (
                        <div className="space-y-8">
                            {/* Recent Registrations could go here if we fetch them */}
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        Subscription Requests
                                    </h2>
                                    <AdminSubscriptions />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        Packages
                                    </h2>
                                    <AdminPackages />
                                </div>
                            </div>
                            {/* Placement Test Password */}
                            <AdminPlacementPassword />
                        </div>
                    )}

                    {/* Upcoming Schedule */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-xl font-bold text-slate-800">Upcoming Schedule</h2>
                            <Link href="/calendar" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-1.5 rounded-full transition-all flex items-center gap-1 group">
                                View Calendar
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                        <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/60 p-1 shadow-sm">
                            <DashboardSessions sessions={upcomingSessions} type="upcoming" />
                        </div>
                    </div>

                    {/* Recent History */}
                    {completedSessions.length > 0 && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-slate-800 px-1">Recent History</h2>
                            <div className="bg-slate-50/50 rounded-3xl p-1">
                                <DashboardSessions sessions={completedSessions} type="completed" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Sidebar (4 cols) */}
                <div className="lg:col-span-4 space-y-8">

                    {/* Quick Actions */}
                    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm sticky top-6">
                        <QuickActions packages={packages || []} />
                    </div>

                    {/* Pro Tip */}
                    <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-center space-y-4 text-white shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>

                        <div className="relative z-10">
                            <h3 className="font-bold text-lg opacity-90">Daily Inspiration</h3>
                            <p className="text-sm text-indigo-100 italic leading-relaxed">
                                "Education is the most powerful weapon which you can use to change the world."
                            </p>
                            <p className="text-xs text-indigo-200 mt-2 font-medium">— Nelson Mandela</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

