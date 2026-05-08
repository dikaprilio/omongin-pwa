"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { createClient } from "@/utils/supabase/client"
import { useRole } from "@/hooks/useRole"
import { useSubscription } from "@/hooks/useSubscription"
import { cn } from "@/lib/utils"
import {
    BookOpen,
    Mic,
    Eye,
    Briefcase,
    Zap,
    Menu,
    X,
    LogOut,
    Lock,
    ChevronRight,
    Calendar
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItemDef {
    id: string
    href: string
    label: string
    icon: React.ElementType
    requiresSubscription: boolean
}

const MAIN_NAV_ITEMS: NavItemDef[] = [
    { id: "curriculum", href: "/curriculum", label: "Learn", icon: BookOpen, requiresSubscription: false },
    { id: "speaking-test", href: "/speaking-test", label: "Speaking", icon: Mic, requiresSubscription: false },
    { id: "reading-test", href: "/reading-test", label: "Reading", icon: Eye, requiresSubscription: false },
    { id: "interview-sim", href: "/interview-sim", label: "Interview", icon: Briefcase, requiresSubscription: false },


]

const PRACTICE_ITEMS = [
    { href: "/speaking-practice", label: "Speaking Practice" },
    { href: "/impromptu", label: "Impromptu" },
]

export default function StudentNavbar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()
    const { isAdmin, isTeacher, loading: roleLoading } = useRole()
    const { isSubscribed, isLoading: subLoading, allowedModules } = useSubscription()
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState<any>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()
    }, [supabase])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    const isPrivileged = isAdmin || isTeacher
    const isLoading = roleLoading || subLoading

    const isLocked = (item: NavItemDef) => {
        if (isLoading) return false
        if (!item.requiresSubscription) return false
        if (isPrivileged) return false
        // Curriculum hub is always accessible
        if (item.id === "curriculum") return false
        // All premium features check against allowed modules
        return !isSubscribed || !allowedModules.includes(item.id)
    }

    const handleNavClick = (e: React.MouseEvent, item: NavItemDef) => {
        if (isLocked(item)) {
            e.preventDefault()
            router.push("/curriculum?lock=true")
        }
    }

    const isActive = (href: string) => {
        if (href === "/curriculum") {
            return pathname === "/curriculum" || pathname.startsWith("/curriculum/")
        }
        return pathname === href || pathname.startsWith(href + "/")
    }

    if (!mounted) return null

    return (
        <>
            {/* --- DESKTOP TOP NAV --- */}
            <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-16 items-center justify-between px-6 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
                {/* Logo */}
                <Link href="/curriculum" className="flex items-center gap-2 group">
                    <Image
                        src="/ecc-logo.png"
                        alt="ECC"
                        width={32}
                        height={32}
                        className="rounded-lg"
                    />
                    <span className="font-bold text-slate-800">English Chill Course</span>
                </Link>

                {/* Center Nav */}
                <nav className="flex items-center gap-1">
                    {MAIN_NAV_ITEMS.map((item) => {
                        const active = isActive(item.href)
                        const locked = isLocked(item)
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item)}
                                className={cn(
                                    "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    active
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                                    locked && "opacity-60"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                                {locked && (
                                    <Lock className="h-3 w-3 text-amber-500" />
                                )}
                            </Link>
                        )
                    })}

                    {/* Practice Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all outline-none",
                                    PRACTICE_ITEMS.some(p => isActive(p.href))
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                )}
                            >
                                <Zap className="h-4 w-4" />
                                <span>Practice</span>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-48">
                            {PRACTICE_ITEMS.map((item) => (
                                <DropdownMenuItem key={item.href} asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "cursor-pointer",
                                            isActive(item.href) && "bg-slate-50 text-blue-600 font-medium"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Right: User Dropdown */}
                <div className="flex items-center gap-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-xs font-bold">
                                    {user?.user_metadata?.full_name?.[0] || "U"}
                                </div>
                                <span className="text-sm font-medium text-slate-700 max-w-[100px] truncate">
                                    {user?.user_metadata?.full_name?.split(" ")[0] || "Student"}
                                </span>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem disabled className="opacity-100 cursor-default">
                                <div className="flex flex-col">
                                    <span className="font-medium text-slate-900">{user?.user_metadata?.full_name || "Student"}</span>
                                    <span className="text-xs text-slate-500">{user?.email}</span>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/daftar-sesi" className="cursor-pointer">
                                    Daftar Sesi
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            {/* --- MOBILE BOTTOM NAV --- (hidden - using MobileBottomNav component instead) */}
            <div className="hidden md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 safe-area-inset-bottom">
                <div className="flex items-center justify-around px-2 py-1">
                    {/* Learn */}
                    <MobileNavLink href="/curriculum" active={isActive("/curriculum")} icon={BookOpen}>
                        Learn
                    </MobileNavLink>

                    {/* Speaking */}
                    <MobileNavLink
                        href="/speaking-test"
                        active={isActive("/speaking-test")}
                        icon={Mic}
                        locked={isLocked(MAIN_NAV_ITEMS[1])}
                        onLockedClick={() => router.push("/curriculum?lock=true")}
                    >
                        Speaking
                    </MobileNavLink>

                    {/* Reading */}
                    <MobileNavLink
                        href="/reading-test"
                        active={isActive("/reading-test")}
                        icon={Eye}
                        locked={isLocked(MAIN_NAV_ITEMS[2])}
                        onLockedClick={() => router.push("/curriculum?lock=true")}
                    >
                        Reading
                    </MobileNavLink>

                    {/* More */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={cn(
                            "flex flex-col items-center justify-center py-2 px-3 rounded-lg gap-0.5 min-w-[60px]",
                            isMobileMenuOpen ? "text-blue-600" : "text-slate-400"
                        )}
                    >
                        <Menu className="h-5 w-5" />
                        <span className="text-[10px] font-medium">More</span>
                    </button>
                </div>
            </div>

            {/* --- MOBILE DRAWER --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60]">
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl animate-in slide-in-from-left duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-100">
                            <div className="flex items-center gap-2">
                                <Image src="/ecc-logo.png" alt="ECC" width={32} height={32} className="rounded-lg" />
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
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-semibold">
                                    {user?.user_metadata?.full_name?.[0] || "U"}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800">{user?.user_metadata?.full_name || "Student"}</p>
                                    <p className="text-xs text-slate-500">{user?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="p-3 space-y-1">
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                                Menu
                            </p>

                            {MAIN_NAV_ITEMS.map((item) => {
                                const active = isActive(item.href)
                                const locked = isLocked(item)
                                return (
                                    <DrawerLink
                                        key={item.href}
                                        href={item.href}
                                        active={active}
                                        locked={locked}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        onLockedClick={() => {
                                            setIsMobileMenuOpen(false)
                                            router.push("/curriculum?lock=true")
                                        }}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        {item.label}
                                    </DrawerLink>
                                )
                            })}

                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2 mt-4">
                                Practice
                            </p>
                            {PRACTICE_ITEMS.map((item) => (
                                <DrawerLink
                                    key={item.href}
                                    href={item.href}
                                    active={isActive(item.href)}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Zap className="h-5 w-5" />
                                    {item.label}
                                </DrawerLink>
                            ))}

                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2 mt-4">
                                Other
                            </p>
                            <DrawerLink
                                href="/daftar-sesi"
                                active={isActive("/daftar-sesi")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Calendar className="h-5 w-5" />
                                Daftar Sesi
                            </DrawerLink>
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

function MobileNavLink({
    href,
    active,
    icon: Icon,
    children,
    locked,
    onLockedClick,
}: {
    href: string
    active: boolean
    icon: React.ElementType
    children: React.ReactNode
    locked?: boolean
    onLockedClick?: () => void
}) {
    if (locked) {
        return (
            <button
                onClick={onLockedClick}
                className="flex flex-col items-center justify-center py-2 px-3 rounded-lg gap-0.5 min-w-[60px] text-slate-400"
            >
                <div className="relative">
                    <Icon className="h-5 w-5" />
                    <div className="absolute -top-1 -right-1">
                        <Lock className="h-2.5 w-2.5 text-amber-500" />
                    </div>
                </div>
                <span className="text-[10px] font-medium">{children}</span>
            </button>
        )
    }

    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg gap-0.5 min-w-[60px]",
                active ? "text-blue-600 bg-blue-50/50" : "text-slate-400"
            )}
        >
            <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{children}</span>
        </Link>
    )
}

function DrawerLink({
    href,
    active,
    locked,
    onClick,
    onLockedClick,
    children,
}: {
    href: string
    active: boolean
    locked?: boolean
    onClick?: () => void
    onLockedClick?: () => void
    children: React.ReactNode
}) {
    if (locked) {
        return (
            <button
                onClick={onLockedClick}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:bg-slate-50 w-full"
            >
                {children}
                <Lock className="h-3.5 w-3.5 text-amber-500 ml-auto" />
            </button>
        )
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                active ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-600 hover:bg-slate-50"
            )}
        >
            {children}
            {active && <ChevronRight className="h-4 w-4 ml-auto" />}
        </Link>
    )
}


