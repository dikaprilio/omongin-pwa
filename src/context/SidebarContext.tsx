'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface SidebarContextType {
    isPinned: boolean
    isCollapsed: boolean
    setIsPinned: (pinned: boolean) => void
    setIsCollapsed: (collapsed: boolean) => void
    sidebarWidth: number
}

const SIDEBAR_EXPANDED = 200
const SIDEBAR_COLLAPSED = 64

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isPinned, setIsPinnedState] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(true)

    // Load pinned state from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('sidebar-pinned')
        if (saved === 'true') {
            setIsPinnedState(true)
            setIsCollapsed(false)
        }
    }, [])

    const setIsPinned = (pinned: boolean) => {
        setIsPinnedState(pinned)
        localStorage.setItem('sidebar-pinned', String(pinned))
        if (pinned) {
            setIsCollapsed(false)
        }
    }

    const sidebarWidth = isCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED

    return (
        <SidebarContext.Provider value={{
            isPinned,
            isCollapsed,
            setIsPinned,
            setIsCollapsed,
            sidebarWidth
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}

export { SIDEBAR_EXPANDED, SIDEBAR_COLLAPSED }
