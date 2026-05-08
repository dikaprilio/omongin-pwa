'use client'

import Sidebar from "@/components/Sidebar"
import { GlobalHeader } from "@/components/GlobalHeader"
import { SidebarProvider } from "@/context/SidebarContext"
import { MainContent } from "@/components/MainContent"
import { useRole } from "@/hooks/useRole"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { isStudent, loading } = useRole()
    const router = useRouter()
    const pathname = usePathname()
    const isCalendar = pathname === '/calendar'

    useEffect(() => {
        if (!loading && isStudent) {
            router.replace('/curriculum')
        }
    }, [isStudent, loading, router])

    if (loading) {
        return null // Or a loading spinner
    }

    // Optional: avoid flashing dashboard content while redirecting
    if (isStudent) {
        return null
    }

    return (
        <SidebarProvider>
            <div className="min-h-screen bg-slate-50/50 overflow-x-hidden">
                <Sidebar />
                <MainContent>
                    <GlobalHeader />
                    <main className={cn(
                        "overflow-x-hidden",
                        isCalendar
                            ? "p-0 h-[calc(100vh-56px)]" // Full width/height for calendar minus header
                            : "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto"
                    )}>
                        {children}
                    </main>
                </MainContent>
            </div>
        </SidebarProvider>
    )
}
