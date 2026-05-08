"use client"

import StudentNavbar from "@/components/StudentNavbar"
import MobileBottomNav from "@/components/mobile/MobileBottomNav"

export function StudentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-white">
            <StudentNavbar />
            <MobileBottomNav />
            {/* pt-16 for desktop header, pb-20 for mobile bottom nav */}
            <main className="pt-0 md:pt-16 pb-20 md:pb-0">
                {children}
            </main>
        </div>
    )
}
