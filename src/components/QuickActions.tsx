'use client'
// Force TS re-check

import Link from "next/link"
import { Users, Package, Calendar, FileText, Sparkles } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { AddStudentModal } from "./AddStudentModal"
import { CreatePackageModal } from "./CreatePackageModal"

interface QuickActionsProps {
    packages: any[]
}

export function QuickActions({ packages }: QuickActionsProps) {
    const actions = [
        {
            label: "Add Student",
            icon: Users,
            modal: AddStudentModal,
            modalProps: { packages },
            color: "text-blue-600",
            bg: "bg-blue-100",
            border: "border-blue-100"
        },
        {
            label: "New Package",
            icon: Package,
            modal: CreatePackageModal,
            modalProps: {},
            color: "text-amber-600",
            bg: "bg-amber-100",
            border: "border-amber-100"
        },
        {
            label: "Calendar",
            icon: Calendar,
            href: "/calendar",
            color: "text-purple-600",
            bg: "bg-purple-100",
            border: "border-purple-100"
        },
        {
            label: "Materials",
            icon: FileText,
            href: "/materials",
            color: "text-emerald-600",
            bg: "bg-emerald-100",
            border: "border-emerald-100"
        }
    ]

    return (
        <div className="space-y-3 md:space-y-4">
            <h2 className="text-base md:text-lg font-bold text-slate-800 flex items-center gap-2 px-1">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                Quick Actions
            </h2>

            {/* Mobile: Horizontal scroll, Desktop: 2x2 Grid */}
            <div className="md:hidden flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                {actions.map((action) => {
                    const CardContent = (
                        <GlassCard
                            hoverEffect
                            className={`p-3 flex flex-col items-center justify-center gap-2 text-center min-w-[100px] h-[100px] ${action.border}/50 transition-all active:scale-95 cursor-pointer snap-start`}
                        >
                            <div className={`h-10 w-10 rounded-xl ${action.bg} flex items-center justify-center ${action.color} shadow-sm`}>
                                <action.icon className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-slate-700 text-xs whitespace-nowrap">{action.label}</span>
                        </GlassCard>
                    )

                    if (action.label === "Add Student") {
                        return (
                            <AddStudentModal key={action.label} packages={packages}>
                                {CardContent}
                            </AddStudentModal>
                        )
                    }

                    if (action.label === "New Package") {
                        return (
                            <CreatePackageModal key={action.label}>
                                {CardContent}
                            </CreatePackageModal>
                        )
                    }

                    return (
                        <Link key={action.label} href={action.href!} className="contents">
                            {CardContent}
                        </Link>
                    )
                })}
            </div>

            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid grid-cols-2 gap-4">
                {actions.map((action) => {
                    const CardContent = (
                        <GlassCard hoverEffect className={`p-4 flex flex-col items-center justify-center gap-3 text-center aspect-square ${action.border}/50 transition-all active:scale-95 cursor-pointer w-full`}>
                            <div className={`h-12 w-12 rounded-2xl ${action.bg} flex items-center justify-center ${action.color} shadow-sm`}>
                                <action.icon className="h-6 w-6" />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">{action.label}</span>
                        </GlassCard>
                    )

                    if (action.label === "Add Student") {
                        return (
                            <AddStudentModal key={action.label} packages={packages}>
                                {CardContent}
                            </AddStudentModal>
                        )
                    }

                    if (action.label === "New Package") {
                        return (
                            <CreatePackageModal key={action.label}>
                                {CardContent}
                            </CreatePackageModal>
                        )
                    }

                    return (
                        <Link key={action.label} href={action.href!} className="contents">
                            {CardContent}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
