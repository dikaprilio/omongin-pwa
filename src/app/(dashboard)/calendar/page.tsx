import { CalendarView } from "@/components/CalendarView"
import { listCalendarEvents } from "./actions"
import { fetchTeachersAction } from "@/app/(dashboard)/scheduler/actions"

export const dynamic = 'force-dynamic'

export default async function CalendarPage() {
    // Prefetch events for the current week
    const now = new Date()
    const day = now.getDay()
    const diff = day === 0 ? -6 : 1 - day
    const weekStart = new Date(now)
    weekStart.setDate(now.getDate() + diff)
    weekStart.setHours(0, 0, 0, 0)

    // Fetch events and teachers in parallel
    const [eventsResult, teachers] = await Promise.all([
        listCalendarEvents(weekStart.toISOString()),
        fetchTeachersAction()
    ])
    const initialEvents = eventsResult?.items || []

    return (
        <div className="animate-in fade-in duration-500">
            <CalendarView initialEvents={initialEvents} teachers={teachers || []} />
        </div>
    )
}
