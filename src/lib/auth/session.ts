'use server'

import { createAdminClient, createClient } from '@/utils/supabase/server'
import { isStudent } from './roles'
import { revalidatePath } from 'next/cache'

const MAX_SESSIONS = 2

/**
 * Enforces strict session limit per user.
 * Should be called after successful login.
 */
export async function enforceSessionLimit() {
    try {
        // 0. Only enforce for Students
        const isStudentUser = await isStudent()
        if (!isStudentUser) {
            return { success: true, skipped: true }
        }

        // 1. Get Current User
        const supabase = await createClient()
        const { data: { user }, error: userError } = await supabase.auth.getUser()

        if (userError || !user) {
            console.error('Session enforcement failed: No user found')
            return { error: 'No authenticated user' }
        }

        // 2. Admin Client to List/Delete Sessions
        const adminSupabase = await createAdminClient()

        // Query auth.sessions table directly via Admin Client
        // Note: 'auth' schema access requires service_role key
        const { data: sessions, error: sessionsError } = await adminSupabase
            .from('sessions')
            .select('id, created_at, user_id')
            .eq('user_id', user.id)
            .order('created_at', { ascending: true })
        // We need to specify schema 'auth' usually, but supabase-js client might default to 'public'
        // We'll try explicitly using the schema if supported, or rely on the table being exposed
        // If direct table access fails, we might need an RPC, but let's try this standard admin pattern first.

        // *Correction*: Supabase JS client defaults to 'public'. To access 'auth', we need:
        // .from('sessions', { schema: 'auth' }) is not standard in typed client unless generated.
        // However, we can try to query it. If this fails, we will need to create a Postgres Function.

        // BETTER APPROACH: Safe "List Sessions" via RPC or just rely on the fact that 
        // we might need to create a DB function `get_user_sessions` in the migration plan.

        // For now, let's assume we can query if we cast or use raw properly.
        // Or simpler: We can't easily list sessions without DB access.

        // ALTERNATIVE: Since we can't easily list *other* sessions from client without a specific RPC,
        // we will write this code assuming we will add an RPC function `get_active_sessions`.

        // Waiting for RPC...

        // FALLBACK: Use `auth.admin.listUserSessions` if it exists in this version?
        // It does not exist in v2 standard.

        // OK, we must use an RPC.
        // Let's draft the SQL for the RPC in the comments and call it.

        /*
        -- REQUIRED SQL MIGRATION:
        create or replace function get_user_sessions(uid uuid)
        returns table (id uuid, created_at timestamptz)
        security definer
        as $$
          select id, created_at from auth.sessions where user_id = uid order by created_at asc;
        $$ language sql;
        
        create or replace function delete_session(session_id uuid)
        returns void
        security definer
        as $$
          delete from auth.sessions where id = session_id;
        $$ language sql;
        */

        const { data: activeSessions, error: rpcError } = await adminSupabase
            .rpc('get_active_sessions', { uid: user.id })

        if (rpcError) {
            console.error('Failed to list sessions:', rpcError)
            // If RPC fails (not exists), we can't enforce.
            return { error: 'Session tracking unavailable' }
        }

        if (!activeSessions || activeSessions.length <= MAX_SESSIONS) {
            return { success: true, count: activeSessions?.length }
        }

        // 3. Delete Excess Sessions (Oldest First)
        // activeSessions is ordered ASC (Oldest -> Newest)
        // We want to keep the last MAX_SESSIONS
        const sessionsToDelete = activeSessions.slice(0, activeSessions.length - MAX_SESSIONS)

        for (const session of sessionsToDelete) {
            // Delete via RPC 'delete_session' (needs to be created)
            const { error: delError } = await adminSupabase.rpc('delete_session', { session_id: session.id })

            if (delError) {
                console.error(`Failed to delete session ${session.id}:`, delError)
            }
        }

        return { success: true, deleted: sessionsToDelete.length }

    } catch (error) {
        console.error('Enforce session limit error:', error)
        return { error: 'Internal error' }
    }
}
