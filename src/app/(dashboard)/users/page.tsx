import { CreateUserModal } from '@/components/CreateUserModal'
import { UserManagementTable } from '@/components/UserManagementTable'
import { getSystemUsers, getPackages } from './actions'
import { requireAdmin } from '@/lib/auth/roles'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'

export default async function UsersPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect('/login')

    // Protect route
    try {
        await requireAdmin()
    } catch (e) {
        redirect('/')
    }

    const [users, packages] = await Promise.all([
        getSystemUsers(),
        getPackages()
    ])

    return (
        <div className="space-y-6 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Team & Roles</h1>
                    <p className="text-slate-500 mt-1">Manage system access, teachers, and administrators.</p>
                </div>
                <div>
                    <CreateUserModal />
                </div>
            </div>

            <UserManagementTable initialUsers={users} packages={packages} />
        </div>
    )
}
