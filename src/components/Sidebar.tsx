"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import {
    LayoutDashboard,
    Users,
    Package,
    LogOut,
    BookOpen,
    Calendar,
    Shield,
    UsersRound,
    PinOff,
    Pin,
    Menu,
    X,
    FileSpreadsheet,
    Star
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { useRole } from "@/hooks/useRole"
import { useSidebar, SIDEBAR_EXPANDED, SIDEBAR_COLLAPSED } from "@/context/SidebarContext"

export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { isAdmin, role, loading: roleLoading } = useRole()

    // Get sidebar state from context
    const { isPinned, isCollapsed, setIsPinned, setIsCollapsed, sidebarWidth } = useSidebar()
    const [isHovering, setIsHovering] = useState(false)

    // Load user on mount
    useEffect(() => {
        setMounted(true)
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()
    }, [])

    // Handle sidebar hover
    const handleMouseEnter = useCallback(() => {
        if (!isPinned) {
            setIsHovering(true)
            setIsCollapsed(false)
        }
    }, [isPinned, setIsCollapsed])

    const handleMouseLeave = useCallback(() => {
        if (!isPinned) {
            setIsHovering(false)
            setIsCollapsed(true)
        }
    }, [isPinned, setIsCollapsed])

    // Toggle pin state
    const togglePin = () => {
        const newPinned = !isPinned
        setIsPinned(newPinned)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    // Navigation sections
    // Navigation sections
    const mainNavLinks = [
        // Only show Dashboard to Admins and Teachers
        ...(!role || role !== 'student' ? [{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }] : []),
        { href: "/calendar", label: "Calendar", icon: Calendar },
        // Only show Students list to Admins and Teachers
        ...(!role || role !== 'student' ? [{ href: "/students", label: "Students", icon: Users }] : []),
        // Reviews - visible to Admins and Teachers
        ...(!role || role !== 'student' ? [{ href: "/reviews", label: "Reviews", icon: Star }] : []),
    ]

    const learningNavLinks = [
        { href: "/materials", label: "Materials", icon: BookOpen },
        // Only show Packages management to Admins (and maybe Teachers if allowed, but definitely not Students)
        ...(!role || role !== 'student' ? [{ href: "/packages", label: "Packages", icon: Package }] : []),
    ]

    const managementNavLinks = isAdmin ? [
        { href: "/users", label: "Pengguna", icon: UsersRound },
        { href: "/teachers", label: "Pengajar", icon: Users },
        { href: "/orders", label: "Pesanan", icon: FileSpreadsheet },
    ] : []

    // Mobile bottom nav
    const mobileNavLinks = [
        // Only show Dashboard to Admins and Teachers
        ...(!role || role !== 'student' ? [{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }] : []),
        { href: "/calendar", label: "Calendar", icon: Calendar },
        // Use conditional logic for the 3rd/4th items
        ...(!role || role !== 'student' ? [{ href: "/students", label: "Students", icon: Users }] : []),
        { href: "/materials", label: "Materials", icon: BookOpen },
        ...(!role || role !== 'student' ? [{ href: "/reviews", label: "Reviews", icon: Star }] : []),
    ]

    const isActive = (path: string) => pathname === path

    if (!mounted) return null


    return (
        <>
            {/* --- DESKTOP SIDEBAR --- */}
            <aside
                className="hidden md:flex fixed inset-y-0 left-0 z-40 bg-slate-50 border-r border-slate-200/80 flex-col transition-all duration-200 ease-out"
                style={{ width: sidebarWidth }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Logo Area */}
                <div className="h-14 flex items-center px-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <Image
                            src="/ecc-logo.png"
                            alt="ECC"
                            width={32}
                            height={32}
                            className="flex-shrink-0 rounded-lg"
                        />
                        {!isCollapsed && (
                            <span className="font-bold text-base text-slate-800 whitespace-nowrap">
                                ECC
                            </span>
                        )}
                    </div>
                </div>

                {/* User Profile */}
                <div className="px-3 py-3 border-b border-slate-200/80">
                    {user ? (
                        <div className={cn("flex items-center gap-2.5", isCollapsed && "justify-center")}>
                            <div className={cn(
                                "h-9 w-9 rounded-full text-white flex items-center justify-center font-semibold text-xs flex-shrink-0",
                                isAdmin
                                    ? "bg-gradient-to-br from-amber-500 to-orange-500"
                                    : "bg-gradient-to-br from-blue-500 to-cyan-500"
                            )}>
                                {isAdmin ? <Shield className="h-4 w-4" /> : (user.user_metadata?.full_name?.[0] || 'U')}
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-sm font-medium truncate text-slate-800">
                                            {user.user_metadata?.full_name?.split(' ')[0] || 'User'}
                                        </p>
                                        {!roleLoading && (
                                            <span className={cn(
                                                "text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase flex-shrink-0",
                                                isAdmin ? "bg-amber-100 text-amber-700" :
                                                    (role === 'teacher' ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700")
                                            )}>
                                                {isAdmin ? 'Admin' : (role === 'teacher' ? 'Teacher' : 'Student')}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-slate-400 truncate">
                                        {user.email}
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className={cn("flex items-center gap-2.5", isCollapsed && "justify-center")}>
                            <Skeleton className="h-9 w-9 rounded-full bg-slate-200 flex-shrink-0" />
                            {!isCollapsed && (
                                <div className="flex-1 space-y-1.5">
                                    <Skeleton className="h-3 w-20 bg-slate-200" />
                                    <Skeleton className="h-2.5 w-28 bg-slate-200" />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-4">
                    {/* Main Section */}
                    <div>
                        {!isCollapsed && (
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
                                Main
                            </p>
                        )}
                        <div className="space-y-0.5">
                            {mainNavLinks.map((link) => (
                                <NavItem key={link.href} link={link} isActive={isActive(link.href)} isCollapsed={isCollapsed} />
                            ))}
                        </div>
                    </div>

                    {/* Learning Section */}
                    <div>
                        {!isCollapsed && (
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
                                Learning
                            </p>
                        )}
                        <div className="space-y-0.5">
                            {learningNavLinks.map((link) => (
                                <NavItem key={link.href} link={link} isActive={isActive(link.href)} isCollapsed={isCollapsed} />
                            ))}
                        </div>
                    </div>

                    {/* Management Section (Admin only) */}
                    {managementNavLinks.length > 0 && (
                        <div>
                            {!isCollapsed && (
                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
                                    Management
                                </p>
                            )}
                            <div className="space-y-0.5">
                                {managementNavLinks.map((link) => (
                                    <NavItem key={link.href} link={link} isActive={isActive(link.href)} isCollapsed={isCollapsed} />
                                ))}
                            </div>
                        </div>
                    )}
                </nav>

                {/* Bottom Actions */}
                <div className="p-2 border-t border-slate-200/80 space-y-1">
                    {/* Pin Toggle */}
                    <button
                        onClick={togglePin}
                        className={cn(
                            "flex items-center gap-2.5 w-full px-2.5 py-2 rounded-md text-sm transition-colors",
                            isPinned
                                ? "text-primary bg-primary/5 hover:bg-primary/10"
                                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700",
                            isCollapsed && "justify-center"
                        )}
                        title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
                    >
                        {isPinned ? <Pin className="h-4 w-4 flex-shrink-0" /> : <PinOff className="h-4 w-4 flex-shrink-0" />}
                        {!isCollapsed && <span className="text-xs">{isPinned ? 'Pinned' : 'Pin sidebar'}</span>}
                    </button>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className={cn(
                            "flex items-center gap-2.5 w-full px-2.5 py-2 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors",
                            isCollapsed && "justify-center"
                        )}
                    >
                        <LogOut className="h-4 w-4 flex-shrink-0" />
                        {!isCollapsed && <span className="text-xs">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* --- MOBILE BOTTOM NAVBAR --- */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 safe-area-inset-bottom">
                <div className="flex items-center justify-around px-2 py-1">
                    {mobileNavLinks.map((link) => {
                        const Icon = link.icon
                        const active = isActive(link.href)
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors gap-0.5 min-w-[60px]",
                                    active ? "text-primary" : "text-slate-400"
                                )}
                            >
                                <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
                                <span className="text-[10px] font-medium">{link.label}</span>
                            </Link>
                        )
                    })}

                    {/* More Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="flex flex-col items-center justify-center py-2 px-3 rounded-lg text-slate-400 gap-0.5 min-w-[60px]"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="text-[10px] font-medium">More</span>
                    </button>
                </div>
            </div>

            {/* --- MOBILE DRAWER --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl animate-in slide-in-from-left duration-200">
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/ecc-logo.png"
                                    alt="ECC"
                                    width={32}
                                    height={32}
                                    className="rounded-lg"
                                />
                                <span className="font-bold text-base">ECC</span>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg hover:bg-slate-100"
                            >
                                <X className="h-5 w-5 text-slate-500" />
                            </button>
                        </div>

                        {/* User */}
                        <div className="p-4 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "h-10 w-10 rounded-full text-white flex items-center justify-center font-semibold",
                                    isAdmin ? "bg-gradient-to-br from-amber-500 to-orange-500" : "bg-gradient-to-br from-blue-500 to-cyan-500"
                                )}>
                                    {isAdmin ? <Shield className="h-5 w-5" /> : (user?.user_metadata?.full_name?.[0] || 'U')}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800">{user?.user_metadata?.full_name || 'Teacher'}</p>
                                    <p className="text-xs text-slate-500">{user?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Links */}
                        <div className="p-3 space-y-1">
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                                More Options
                            </p>

                            <Link
                                href="/reviews"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                                    isActive("/reviews") ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                                )}
                            >
                                <Star className="h-5 w-5" />
                                Reviews
                            </Link>

                            <Link
                                href="/packages"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                                    isActive("/packages") ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                                )}
                            >
                                <Package className="h-5 w-5" />
                                Packages
                            </Link>

                            {isAdmin && (
                                <Link
                                    href="/teachers"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                                        isActive("/teachers") ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <UsersRound className="h-5 w-5" />
                                    Teachers
                                </Link>
                            )}
                        </div>

                        {/* Logout */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-100">
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors"
                            >
                                <LogOut className="h-5 w-5" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


// Nav Item Component
function NavItem({
    link,
    isActive,
    isCollapsed
}: {
    link: { href: string; label: string; icon: any }
    isActive: boolean
    isCollapsed: boolean
}) {
    const Icon = link.icon

    return (
        <Link
            href={link.href}
            className={cn(
                "relative flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors",
                isActive
                    ? "bg-primary/5 text-primary font-medium"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                isCollapsed && "justify-center"
            )}
        >
            {/* Active indicator */}
            {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-r-full" />
            )}
            <Icon className={cn("h-[18px] w-[18px] flex-shrink-0", isActive && "text-primary")} />
            {!isCollapsed && <span>{link.label}</span>}
        </Link>
    )
}
