import { Skeleton } from "@/components/ui/skeleton"

export function CardGridSkeleton() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48 bg-slate-100" />
                    <Skeleton className="h-4 w-64 bg-slate-100" />
                </div>
                <Skeleton className="h-10 w-32 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="p-6 rounded-3xl border border-slate-100 bg-white space-y-4">
                        <div className="flex justify-between items-start">
                            <Skeleton className="h-12 w-12 rounded-2xl bg-slate-100" />
                            <Skeleton className="h-8 w-8 rounded-lg bg-slate-100" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-32 bg-slate-100" />
                            <Skeleton className="h-4 w-full bg-slate-100" />
                        </div>
                        <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                            <Skeleton className="h-4 w-20 bg-slate-100" />
                            <Skeleton className="h-4 w-16 bg-slate-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
