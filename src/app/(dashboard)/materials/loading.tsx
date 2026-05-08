import { CardGridSkeleton } from "@/components/skeletons/CardGridSkeleton"

export default function MaterialsLoading() {
    return (
        <div className="h-full bg-slate-50/50 rounded-3xl p-6">
            <div className="mb-8">
                <div className="h-8 w-48 bg-slate-200 rounded-lg animate-pulse mb-2" />
                <div className="h-4 w-64 bg-slate-200 rounded-lg animate-pulse" />
            </div>
            <CardGridSkeleton />
        </div>
    )
}
