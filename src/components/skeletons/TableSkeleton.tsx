import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton() {
    return (
        <div className="space-y-4 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48 bg-slate-100" />
                    <Skeleton className="h-4 w-64 bg-slate-100" />
                </div>
                <div className="flex gap-2">
                    <Skeleton className="h-10 w-32 bg-slate-100" />
                    <Skeleton className="h-10 w-32 bg-slate-100" />
                </div>
            </div>

            <div className="rounded-xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50/50 p-4 border-b border-slate-100 flex gap-4">
                    <Skeleton className="h-4 w-1/4 bg-slate-200" />
                    <Skeleton className="h-4 w-1/4 bg-slate-200" />
                    <Skeleton className="h-4 w-1/4 bg-slate-200" />
                    <Skeleton className="h-4 w-1/4 bg-slate-200" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-4 border-b border-slate-100 flex gap-4 items-center">
                        <div className="w-1/4 flex items-center gap-3">
                            <Skeleton className="h-8 w-8 rounded-full bg-slate-100" />
                            <div className="space-y-1">
                                <Skeleton className="h-4 w-24 bg-slate-100" />
                                <Skeleton className="h-3 w-16 bg-slate-100" />
                            </div>
                        </div>
                        <div className="w-1/4">
                            <Skeleton className="h-4 w-32 bg-slate-100" />
                        </div>
                        <div className="w-1/4">
                            <Skeleton className="h-4 w-24 bg-slate-100" />
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <Skeleton className="h-8 w-8 rounded-lg bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
