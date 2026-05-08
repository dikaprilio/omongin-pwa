'use client'

import { useSidebar } from "@/context/SidebarContext"
import { cn } from "@/lib/utils"

export function MainContent({ children }: { children: React.ReactNode }) {
    const { sidebarWidth } = useSidebar()

    return (
        <div
            className={cn(
                "pb-20 md:pb-0 min-h-screen transition-all duration-200 overflow-x-hidden",
                // Apply padding only on md and up - mobile has no sidebar
                "pl-0 md:pl-[var(--sidebar-width)]"
            )}
            style={{ '--sidebar-width': `${sidebarWidth}px` } as React.CSSProperties}
        >
            {children}
        </div>
    )
}

