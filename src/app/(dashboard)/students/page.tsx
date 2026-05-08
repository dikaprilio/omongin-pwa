import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { getStudents } from './actions'
import { getPackages } from '@/app/(dashboard)/packages/actions'
import { getTeachers } from '@/lib/auth/roles'
import { isAdmin } from '@/lib/auth/roles'
import { ImportStudentsModal } from '@/components/ImportStudentsModal'
import { AddStudentModal } from '@/components/AddStudentModal'
import { StudentList } from '@/components/StudentList'

export default async function StudentsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const admin = await isAdmin()

    const [students, packages, teachers] = await Promise.all([
        getStudents(),
        getPackages(),
        admin ? getTeachers() : Promise.resolve([])
    ])

    return (
        <div className="space-y-6 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Students</h1>
                    <p className="text-slate-500 mt-1">Manage your student roster and assignments</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <ImportStudentsModal />
                    <AddStudentModal packages={packages} />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Student List - Full Width */}
                <div className="col-span-1">
                    <StudentList
                        initialStudents={students}
                        teachers={teachers}
                        packages={packages}
                        isAdmin={admin}
                    />
                </div>
            </div>
        </div>
    )
}
