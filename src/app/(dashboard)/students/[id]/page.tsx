import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { getStudentDetails } from '@/app/(dashboard)/students/actions'
import { StudentDetailView } from '@/components/StudentDetailView'

export default async function StudentPage({
    params,
    searchParams
}: {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { id } = await params
    const { action } = await searchParams
    const shouldAutoSchedule = action === 'schedule'

    try {
        const { student, sessions, subscription, teacher } = await getStudentDetails(id)

        return (
            <StudentDetailView
                student={student}
                sessions={sessions}
                subscription={subscription}
                teacher={teacher}
                autoSchedule={shouldAutoSchedule}
            />
        )

    } catch (error) {
        console.error(error)
        return (
            <div className="flex flex-col items-center justify-center h-[50vh] text-muted-foreground p-4 text-center">
                <p className="text-lg font-semibold mb-2">Student not found or error loading details.</p>
                <p className="text-sm text-red-500 bg-red-50 p-2 rounded border border-red-200">
                    Error: {(error as Error).message}
                </p>
            </div>
        )
    }
}
