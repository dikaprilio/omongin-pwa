'use client'

import { Users, Package, Calendar } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedCounter } from "@/components/AnimatedCounter"

interface StatsOverviewProps {
    studentCount: number
    packageCount: number
    sessionCount: number
}

export function StatsOverview({ studentCount, packageCount, sessionCount }: StatsOverviewProps) {
    const stats = [
        {
            label: "Total Students",
            value: studentCount,
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-100",
            gradient: "from-blue-50/80 to-white/50",
            border: "border-blue-100/50",
            delay: 0
        },
        {
            label: "Active Packages",
            value: packageCount,
            icon: Package,
            color: "text-amber-600",
            bg: "bg-amber-100",
            gradient: "from-amber-50/80 to-white/50",
            border: "border-amber-100/50",
            delay: 150
        },
        {
            label: "Upcoming Sessions",
            value: sessionCount,
            icon: Calendar,
            color: "text-purple-600",
            bg: "bg-purple-100",
            gradient: "from-purple-50/80 to-white/50",
            border: "border-purple-100/50",
            delay: 300
        }
    ]

    return (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {stats.map((stat) => (
                <GlassCard key={stat.label} hoverEffect className={`p-5 sm:p-6 flex flex-col justify-between h-full bg-gradient-to-br ${stat.gradient} ${stat.border}`}>
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                            <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-slate-900">
                                <AnimatedCounter value={stat.value} delay={stat.delay} duration={800} />
                            </h3>
                        </div>
                        <div className={`p-2 sm:p-3 rounded-xl ${stat.bg} ${stat.color} shadow-sm`}>
                            <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                    </div>
                </GlassCard>
            ))}
        </div>
    )
}

