import { redirect } from 'next/navigation'
import { isAdmin } from '@/lib/auth/roles'
import { getTeachers } from '@/lib/auth/roles'
import { getAllStudentsForAdmin } from '@/app/(dashboard)/students/actions'
import { TeachersManagement } from '@/components/admin/TeachersManagement'

export default async function AdminTeachersPage() {
    // Protect this page - admin only
    const admin = await isAdmin()
    if (!admin) {
        redirect('/dashboard')
    }

    // Fetch data
    const [teachers, students] = await Promise.all([
        getTeachers(),
        getAllStudentsForAdmin()
    ])

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Teacher Management</h1>
                <p className="text-muted-foreground">
                    Manage teachers and assign students to them.
                </p>
            </div>

            <TeachersManagement
                initialTeachers={teachers}
                initialStudents={students}
            />
        </div>
    )
}
