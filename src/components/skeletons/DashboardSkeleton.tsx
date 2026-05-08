'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export function DashboardSkeleton() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                // Slow down as we approach 90%, never hit 100% (that happens on actual load)
                if (prev >= 90) return prev
                const increment = Math.max(1, (90 - prev) / 10)
                return Math.min(prev + increment, 90)
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 animate-in fade-in duration-300">
            {/* Logo/Icon */}
            <div className="relative">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/30 animate-pulse">
                    ✨
                </div>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Loader2 className="h-4 w-4 text-indigo-600 animate-spin" />
                </div>
            </div>

            {/* Text */}
            <div className="text-center space-y-1">
                <h3 className="text-lg font-semibold text-slate-700">Loading your dashboard</h3>
                <p className="text-sm text-slate-500">Getting everything ready...</p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 max-w-full">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-xs text-slate-400 text-center mt-2">{Math.round(progress)}%</p>
            </div>
        </div>
    )
}

