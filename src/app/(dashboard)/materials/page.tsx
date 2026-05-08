import { MaterialView } from '@/components/materials/MaterialView'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Materials | English Chill Course',
    description: 'Course materials and resources',
}

export default function MaterialsPage() {
    return (
        <div className="h-full bg-slate-50/50 rounded-3xl p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Materials</h1>
                <p className="text-slate-500 mt-2">Manage and organize your course resources.</p>
            </div>

            <div className="h-[calc(100vh-200px)]">
                <MaterialView />
            </div>
        </div>
    )
}
