import { createAdminClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'
import { isAdmin } from '@/lib/auth/roles'

export async function POST(request: Request) {
    try {
        const isUserAdmin = await isAdmin()
        if (!isUserAdmin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { subscriptionId, paid } = await request.json()

        if (!subscriptionId) {
            return NextResponse.json({ error: 'Subscription ID is required' }, { status: 400 })
        }

        const supabase = await createAdminClient()

        // paid == true -> status = 'active'
        // paid == false -> status = 'cancelled' (or unpaid/inactive)
        const status = paid ? 'active' : 'cancelled'

        const { data, error } = await supabase
            .from('subscriptions')
            .update({ status })
            .eq('id', subscriptionId)
            .select()
            .single()

        if (error) {
            console.error('Error updating subscription:', error)
            return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 })
        }

        return NextResponse.json({ data })
    } catch (error) {
        console.error('Unexpected error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
