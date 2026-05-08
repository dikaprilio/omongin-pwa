"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    User,
    Settings,
    Bell,
    Shield,
    HelpCircle,
    ChevronRight,
    LogOut,
    Flame,
    Trophy,
    Star,
    Crown,
    Award,
    BookOpen,
} from "lucide-react";
import { StudentLayout } from "@/components/layouts/StudentLayout";

const userProfile = {
    name: "Dika Aprilio",
    email: "dika@example.com",
    avatar: "D",
    level: 8,
    xp: 2450,
    streak: 12,
    totalLessons: 24,
    completedLessons: 18,
    subscription: {
        plan: "Premium",
        expiresAt: "30 Juni 2026",
        sessionsRemaining: 12,
    },
};

const menuItems = [
    { icon: User, label: "Edit Profil", href: "#" },
    { icon: Bell, label: "Notifikasi", href: "#" },
    { icon: Shield, label: "Privasi & Keamanan", href: "#" },
    { icon: Settings, label: "Pengaturan", href: "#" },
    { icon: HelpCircle, label: "Bantuan & FAQ", href: "#" },
];

const stats = [
    { icon: Flame, label: "Streak", value: "12 hari", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Trophy, label: "Level", value: "Level 8", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Star, label: "XP", value: "2,450", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: BookOpen, label: "Lessons", value: "18/24", color: "text-emerald-500", bg: "bg-emerald-50" },
];

export default function ProfilePage() {
    const router = useRouter();

    return (
        <StudentLayout>
            <div className="min-h-screen bg-slate-50 pb-24">
                {/* Header */}
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 px-5 pt-12 pb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-xl font-bold text-white">Profil</h1>
                        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Settings size={18} className="text-white" />
                        </button>
                    </div>

                    {/* Profile Card */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 font-bold text-2xl">
                                {userProfile.avatar}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center border-2 border-white">
                                <Crown size={12} className="text-white" fill="currentColor" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">{userProfile.name}</h2>
                            <p className="text-sm text-white/70">{userProfile.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium text-white">
                                    {userProfile.subscription.plan}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="px-5 -mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
                                    <stat.icon size={20} className={stat.color} />
                                </div>
                                <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                                <p className="text-xs text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscription Card */}
                <div className="px-5 mt-6">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-5 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-3">
                                <Award size={20} className="text-amber-300" />
                                <span className="text-sm font-medium text-white/80">Langganan Aktif</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{userProfile.subscription.plan}</h3>
                            <p className="text-sm text-white/70 mb-4">
                                Berlaku sampai {userProfile.subscription.expiresAt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-2xl font-bold">{userProfile.subscription.sessionsRemaining}</p>
                                    <p className="text-xs text-white/70">Sesi Tersisa</p>
                                </div>
                                <button className="px-4 py-2 bg-white text-violet-600 rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors">
                                    Perpanjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu */}
                <div className="px-5 mt-6">
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Menu</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        {menuItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-4 px-4 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                    <item.icon size={20} className="text-slate-600" />
                                </div>
                                <span className="flex-1 font-medium text-slate-800">{item.label}</span>
                                <ChevronRight size={18} className="text-slate-400" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Logout */}
                <div className="px-5 mt-6">
                    <button
                        onClick={() => router.push("/")}
                        className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-red-500 font-medium hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        Keluar
                    </button>
                </div>

                {/* Version */}
                <p className="text-center text-xs text-slate-400 mt-6 pb-4">
                    Omongin v1.0.0
                </p>
            </div>
        </StudentLayout>
    );
}
