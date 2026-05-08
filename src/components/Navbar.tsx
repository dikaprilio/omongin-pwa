"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { LogOut, Home, Users, Package, UserCircle } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)

        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
        }
        getUser()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/login")
        router.refresh()
    }

    const getInitials = (name: string) => {
        if (!name) return 'U'
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    }

    if (!mounted) return null

    return (
        <>
            {/* --- 1. TOP HEADER (Desktop) --- */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none hidden md:flex">
                <nav
                    className={`
                        pointer-events-auto flex items-center justify-between
                        transition-all duration-500 ease-in-out border
                        ${isScrolled
                            ? 'w-[95%] md:w-[85%] max-w-6xl py-3 px-6 rounded-full shadow-xl bg-white/80 backdrop-blur-md border-white/20'
                            : 'w-full max-w-7xl py-4 px-4 bg-transparent border-transparent'
                        }
                    `}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                        <div
                            className={`
                                w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden
                                ${isScrolled
                                    ? 'bg-brand-600 text-white shadow-md'
                                    : 'bg-brand-600 text-white shadow-md'
                                }
                            `}
                        >
                            <span className="font-bold text-lg">TC</span>
                        </div>

                        <span className={`
                            text-xl font-bold tracking-tight transition-colors duration-500
                            ${isScrolled
                                ? 'text-slate-800'
                                : 'text-slate-800'
                            }
                        `}>
                            Teacher's<span className="text-brand-600">Companion</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex relative items-center justify-center">
                        <div className={`
                                    absolute inset-0 rounded-full transition-opacity duration-500 ease-in-out
                                    bg-white/50 backdrop-blur-sm border border-white/10
                                    ${isScrolled ? 'opacity-0' : 'opacity-100'}
                                `}></div>

                        <div className="relative z-10 flex items-center gap-1 px-2 py-1.5">
                            <NavLink href="/" active={pathname === '/'} isScrolled={isScrolled}>Dashboard</NavLink>
                            <NavLink href="/students" active={pathname.startsWith('/students')} isScrolled={isScrolled}>Students</NavLink>
                            <NavLink href="/packages" active={pathname.startsWith('/packages')} isScrolled={isScrolled}>Packages</NavLink>
                        </div>
                    </div>

                    {/* Actions: Auth Status */}
                    <div className="flex items-center gap-3">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <div className={`
                                    hidden md:flex items-center gap-3 px-2 py-1.5 pr-4 rounded-full transition-all duration-300 border group
                                    ${isScrolled
                                        ? 'bg-slate-100 border-slate-200 hover:bg-slate-200'
                                        : 'bg-white/50 border-white/20 backdrop-blur-md hover:bg-white/80'
                                    }
                                `}>
                                    <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-md group-hover:scale-110 transition-transform overflow-hidden">
                                        {getInitials(user.user_metadata?.full_name || user.email)}
                                    </div>
                                    <span className={`text-sm font-semibold max-w-[100px] truncate ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>
                                        {user.user_metadata?.full_name?.split(' ')[0] || 'User'}
                                    </span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </nav>
            </div>

            {/* --- 2. MOBILE BOTTOM NAVBAR --- */}
            <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/10 flex items-center gap-1 p-2 w-full max-w-sm justify-between">

                    <MobileLink href="/" active={pathname === '/'} icon={Home}>Home</MobileLink>
                    <MobileLink href="/students" active={pathname.startsWith('/students')} icon={Users}>Students</MobileLink>
                    <MobileLink href="/packages" active={pathname.startsWith('/packages')} icon={Package}>Packages</MobileLink>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className={`
                                flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300
                                text-red-500 hover:text-red-600
                            `}
                        >
                            <LogOut className="h-5 w-5 mb-0.5" />
                            <span className="text-[10px] font-medium">Logout</span>
                        </button>
                    ) : (
                        <MobileLink
                            href="/login"
                            active={pathname.startsWith('/login')}
                            icon={UserCircle}
                            isProfile={true}
                        >
                            Login
                        </MobileLink>
                    )}

                </nav>
            </div>
        </>
    )
}

function NavLink({ href, children, active, isScrolled }: { href: string, children: React.ReactNode, active: boolean, isScrolled: boolean }) {
    let classes = "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 "
    if (active) {
        classes += "bg-brand-600 text-white shadow-md shadow-brand-500/20"
    } else {
        if (isScrolled) {
            classes += "text-slate-600 hover:bg-slate-100 hover:text-brand-600"
        } else {
            classes += "text-slate-700 hover:bg-white/50 hover:text-brand-700"
        }
    }
    return <Link href={href} className={classes}>{children}</Link>
}

function MobileLink({ href, icon: Icon, children, active, isProfile, customClass }: any) {
    return (
        <Link
            href={href}
            className={`
                flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-300
                ${active
                    ? 'text-brand-600 bg-brand-50'
                    : 'text-slate-500 hover:text-brand-600'
                }
                ${isProfile ? 'bg-slate-100 ml-1' : ''}
                ${customClass || ''}
            `}
        >
            <Icon className={`h-5 w-5 mb-0.5 ${isProfile && !active ? 'text-slate-700' : ''}`} />
            <span className="text-[10px] font-medium">{children}</span>
        </Link>
    )
}
