"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
    Home,
    BookOpen,
    Zap,
    Calendar,
    User,
    Mic,
    Eye,
    Briefcase,
    MessageSquare,
    X,
} from "lucide-react";

const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/curriculum", icon: BookOpen, label: "Kursus" },
    { path: "fab", icon: null, label: "Latihan", isFab: true },
    { path: "/daftar-sesi", icon: Calendar, label: "Jadwal" },
    { path: "/profil", icon: User, label: "Profil" },
];

const quickActions = [
    { href: "/speaking-test", icon: Mic, label: "Speaking", color: "from-emerald-400 to-emerald-500" },
    { href: "/reading-test", icon: Eye, label: "Reading", color: "from-amber-400 to-amber-500" },
    { href: "/interview-sim", icon: Briefcase, label: "Interview", color: "from-violet-500 to-purple-600" },
    { href: "/impromptu", icon: MessageSquare, label: "Impromptu", color: "from-rose-400 to-rose-500" },
    { href: "/speaking-practice", icon: Mic, label: "Practice", color: "from-cyan-400 to-cyan-500" },
];

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [showQuickActions, setShowQuickActions] = useState(false);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname === path || pathname.startsWith(path + "/");
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
                <div className="bg-white/90 backdrop-blur-xl border-t border-slate-100 px-2 py-2 flex justify-around items-center pb-[max(0.5rem,env(safe-area-inset-bottom))]">
                    {navItems.map((item) => {
                        if (item.isFab) {
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => setShowQuickActions(true)}
                                    className="relative -mt-6 group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30 border-4 border-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300">
                                        <Zap size={24} className="text-white" fill="currentColor" />
                                    </div>
                                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-500 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        }

                        const active = isActive(item.path);
                        const Icon = item.icon!;

                        return (
                            <Link
                                key={item.path + "-" + item.label}
                                href={item.path}
                                className={cn(
                                    "flex flex-col items-center gap-0.5 px-3 py-1 rounded-2xl transition-all duration-300 relative min-w-[60px]",
                                    active ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
                                )}
                            >
                                {active && (
                                    <div className="absolute inset-0 bg-blue-50 rounded-2xl animate-pulse" />
                                )}
                                <div className={cn(
                                    "p-1.5 rounded-xl transition-all duration-300 relative z-10",
                                    active ? "bg-blue-50 scale-110" : "bg-transparent"
                                )}>
                                    <Icon
                                        size={22}
                                        strokeWidth={active ? 2.5 : 2}
                                        className={cn(
                                            "transition-transform duration-300",
                                            active && "drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]"
                                        )}
                                    />
                                </div>
                                <span className={cn(
                                    "text-[10px] font-bold transition-all duration-300 relative z-10",
                                    active ? "font-black scale-105" : "font-medium"
                                )}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Quick Actions Sheet */}
            {showQuickActions && (
                <div className="md:hidden fixed inset-0 z-[60]">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowQuickActions(false)}
                    />
                    <div className="absolute bottom-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-5 animate-in slide-in-from-bottom duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-slate-900 text-lg">Latihan Cepat</h3>
                            <button
                                onClick={() => setShowQuickActions(false)}
                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
                            >
                                <X size={16} className="text-slate-500" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {quickActions.map((action) => (
                                <Link
                                    key={action.href}
                                    href={action.href}
                                    onClick={() => setShowQuickActions(false)}
                                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg",
                                        action.color
                                    )}>
                                        <action.icon size={20} />
                                    </div>
                                    <span className="font-semibold text-sm text-slate-800">{action.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
