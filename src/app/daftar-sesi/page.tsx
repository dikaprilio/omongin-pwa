import { Suspense } from 'react'
import { StudentLayout } from '@/components/layouts/StudentLayout'
import DaftarSesiForm from './DaftarSesiForm'

export default function DaftarSesiPage() {
    return (
        <StudentLayout>
            <Suspense>
                <DaftarSesiForm />
            </Suspense>
        </StudentLayout>
    )
}
