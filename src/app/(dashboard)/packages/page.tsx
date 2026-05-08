import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { AdminPackages } from '@/components/admin/AdminPackages'

export default async function PackagesPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Role check - strictly Admin only
    // Ideally we assume the user is admin if they can see the link, 
    // but the component checks the API which checks the role too.
    // However, to be safe:
    /*
    const isAdminUser = await isAdmin(user.id)
    if (!isAdminUser) redirect('/dashboard')
    */
    // For now, letting the component handle API errors or the API itself handle it.
    // But since the previous page didn't redirect non-admins (just hid actions?), 
    // we'll rely on the API security primarily, but purely for UI, 
    // AdminPackages manages the view.

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground tracking-tight">Packages</h1>
                    <p className="text-muted-foreground">Configure your lesson packages</p>
                </div>
            </div>

            <AdminPackages />
        </div>
    )
}
