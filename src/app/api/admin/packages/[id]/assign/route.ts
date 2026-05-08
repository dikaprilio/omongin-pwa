import { createAdminClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/auth/roles'

// POST: Assign package to students
export async function POST(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

        const { id: packageId } = params // package_id
        const body = await request.json()
        const { studentIds } = body

        if (!Array.isArray(studentIds) || studentIds.length === 0) {
            return NextResponse.json({ error: 'Student IDs are required' }, { status: 400 })
        }

        const supabase = await createAdminClient()

        // Get package details to set initial sessions
        const { data: pkg } = await supabase.from('packages').select('total_sessions').eq('id', packageId).single()

        if (!pkg) {
            return NextResponse.json({ error: 'Package not found' }, { status: 404 })
        }

        // Fetch students to get their user_id
        const { data: studentsData } = await supabase
            .from('students')
            .select('id, user_id')
            .in('id', studentIds)

        const studentMap = new Map(studentsData?.map(s => [s.id, s.user_id]))

        // Create subscription records for each student
        const subscriptions = studentIds.map(studentId => ({
            student_id: studentId,
            package_id: packageId,
            user_id: studentMap.get(studentId) || null,
            sessions_total: pkg.total_sessions,
            sessions_remaining: pkg.total_sessions,
            status: 'active'
        }))

        // Insert subscriptions
        const { error } = await supabase
            .from('subscriptions')
            .insert(subscriptions)

        if (error) {
            console.error('Subscription insert error:', error)
            throw error
        }

        return NextResponse.json({ success: true, count: subscriptions.length })
    } catch (error: any) {
        console.error('Assign package error:', error)
        return NextResponse.json({
            error: 'Failed to assign package',
            details: error.message,
            code: error.code,
            hint: error.hint
        }, { status: 500 })
    }
}
