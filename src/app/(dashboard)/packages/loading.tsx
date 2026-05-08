import { CardGridSkeleton } from "@/components/skeletons/CardGridSkeleton"

export default function PackagesLoading() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <div className="h-8 w-48 bg-slate-100 rounded-lg animate-pulse mb-2" />
                    <div className="h-4 w-32 bg-slate-100 rounded-lg animate-pulse" />
                </div>
            </div>
            <CardGridSkeleton />
        </div>
    )
}
