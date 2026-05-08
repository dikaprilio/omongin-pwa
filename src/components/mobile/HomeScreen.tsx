"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Bell,
    Flame,
    ChevronRight,
    Mic,
    Users,
    BookOpen,
    MessageSquare,
    Bot,
    Star,
    Target,
    Zap,
    Trophy,
    Clock,
    Award,
    Crown,
    Sun,
    Moon,
    CloudSun,
    Video,
    Headphones,
    Play,
    BookMarked,
} from "lucide-react";
import { cn } from "@/lib/utils";

const gamification = {
    streak: 12,
    xp: 2450,
    level: 8,
    weeklyGoal: { current: 4, target: 5 },
    streakCalendar: [
        { day: "Sen", completed: true },
        { day: "Sel", completed: true },
        { day: "Rab", completed: true },
        { day: "Kam", completed: true },
        { day: "Jum", completed: true },
        { day: "Sab", completed: true },
        { day: "Min", completed: false, today: true },
    ],
};

const recentActivity = {
    lastSession: "2 jam yang lalu",
    currentCourse: {
        id: "career-prep",
        title: "Career Prep: Interview",
        phase: "Phase 2: Tech, Product & Data",
        progress: 66,
        completedLessons: 12,
        totalLessons: 18,
        currentLesson: "Mastering the STAR Method",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        timeRemaining: "5 menit",
    },
};

const upcomingSessions = [
    {
        id: 1,
        tutor: { name: "David M.", avatar: "https://i.pravatar.cc/150?img=11", rating: 4.9 },
        time: "19:00",
        date: "Hari Ini",
        countdown: "2j 15m",
        duration: "60 min",
        topic: "Interview Practice - STAR Method",
        focus: "Grammar & Pronunciation",
        prepItems: ["Headset", "Notebook", "Resume"],
        status: "upcoming",
    },
    {
        id: 2,
        tutor: { name: "Sarah L.", avatar: "https://i.pravatar.cc/150?img=5", rating: 4.8 },
        time: "10:00",
        date: "Besok",
        topic: "Presentation Skills",
        focus: "Business English",
        prepItems: ["Laptop", "Water"],
    },
];

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: "Good Morning", icon: Sun };
    if (hour < 17) return { text: "Good Afternoon", icon: CloudSun };
    return { text: "Good Evening", icon: Moon };
};

export default function HomeScreen() {
    const router = useRouter();
    const [greeting, setGreeting] = useState(getGreeting());

    useEffect(() => {
        const interval = setInterval(() => setGreeting(getGreeting()), 60000);
        return () => clearInterval(interval);
    }, []);

    const GreetingIcon = greeting.icon;
    const progressPercent = Math.round((gamification.weeklyGoal.current / gamification.weeklyGoal.target) * 100);

    return (
        <div className="pb-28 bg-slate-50 min-h-screen md:min-h-0">
            {/* Blue Gradient Header */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-400 px-5 pt-12 pb-8 rounded-b-[32px]">
                {/* Header Row */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                                D
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-white/80 text-sm">
                                <GreetingIcon size={14} />
                                <span>{greeting.text},</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Dika Aprilio</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full">
                            <Flame size={16} className="text-white" fill="currentColor" />
                            <span className="font-bold text-white text-sm">{gamification.streak}</span>
                        </div>
                        <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Bell size={18} className="text-white" />
                        </button>
                    </div>
                </div>

                {/* Daily Goal Card */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            <Target size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-white/80 text-xs font-medium uppercase">Daily Goal</p>
                            <p className="text-white font-semibold">{gamification.weeklyGoal.current} of {gamification.weeklyGoal.target} lessons</p>
                        </div>
                    </div>
                    <div className="relative w-14 h-14">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                            <circle cx="28" cy="28" r="24" fill="none" stroke="white" strokeWidth="4"
                                strokeDasharray={`${progressPercent * 1.5} 150`} strokeLinecap="round" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">{progressPercent}%</span>
                    </div>
                </div>

                {/* Week Days */}
                <div className="flex justify-between mt-4 px-2">
                    {gamification.streakCalendar.map((day, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                                day.completed ? "bg-white text-blue-600" :
                                day.today ? "bg-white text-blue-600 font-bold" :
                                "bg-white/10 text-white/50"
                            }`}>
                                {day.completed ? (
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : day.today ? (
                                    <span className="text-sm font-bold">M</span>
                                ) : (
                                    day.day[0]
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="px-5 mt-6 space-y-6">
                {/* Continue Learning */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-slate-900 text-lg">Continue Learning</h3>
                        <span className="text-xs text-slate-400">{recentActivity.lastSession}</span>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        {/* Course Image */}
                        <div className="relative h-32 bg-slate-800">
                            <img src={recentActivity.currentCourse.thumbnail} alt="Course" className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <span className="absolute top-3 left-3 bg-white/90 text-slate-800 text-[10px] font-bold px-2 py-1 rounded-full border-0">IN PROGRESS</span>
                            <div className="absolute bottom-3 left-3 text-white">
                                <h4 className="font-bold text-lg">{recentActivity.currentCourse.title}</h4>
                                <p className="text-xs text-white/80">{recentActivity.currentCourse.phase}</p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <BookMarked size={20} className="text-blue-500" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-400 uppercase">Current Lesson</p>
                                    <p className="font-semibold text-slate-800">{recentActivity.currentCourse.currentLesson}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-slate-500">{recentActivity.currentCourse.completedLessons}/{recentActivity.currentCourse.totalLessons} Lessons</span>
                                <span className="text-sm font-bold text-blue-600">{recentActivity.currentCourse.progress}%</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${recentActivity.currentCourse.progress}%` }} />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <Clock size={12} />
                                    <span>{recentActivity.currentCourse.timeRemaining}</span>
                                </div>
                                <button
                                    onClick={() => router.push("/curriculum")}
                                    className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors"
                                >
                                    Continue <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Sessions */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                                <Video size={20} className="text-rose-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Sesi Mendatang</h3>
                                <p className="text-xs text-slate-400">1-on-1 Private Session</p>
                            </div>
                        </div>
                        <Link href="/daftar-sesi" className="text-sm text-blue-600 font-semibold">
                            Lihat Semua
                        </Link>
                    </div>

                    {upcomingSessions.map((session) => (
                        <div key={session.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-3">
                            <div className="p-5">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-2">
                                            <span className="text-2xl font-bold text-slate-900">{session.time}</span>
                                            <div>
                                                <h4 className="font-bold text-slate-900 leading-tight">{session.topic}</h4>
                                            </div>
                                        </div>
                                        <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 text-xs font-bold rounded-full">
                                            {session.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg">
                                            <div className="w-4 h-4 rounded-full bg-white" />
                                        </div>
                                        <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-lg">1-on-1</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-4">
                                    <img src={session.tutor.avatar} alt={session.tutor.name} className="w-8 h-8 rounded-full" />
                                    <span className="text-sm font-semibold text-slate-700">{session.tutor.name}</span>
                                    <span className="text-xs text-amber-500">★ {session.tutor.rating}</span>
                                </div>

                                {session.status === "upcoming" && (
                                    <div className="flex items-center gap-2 mt-4 text-rose-500">
                                        <Clock size={16} />
                                        <span className="text-sm font-semibold">Dimulai dalam {session.countdown}</span>
                                    </div>
                                )}

                                <p className="text-sm text-slate-500 mt-3">Focus: {session.focus}</p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {session.prepItems.map((item, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs rounded-lg flex items-center gap-1.5">
                                            <span>{i === 0 ? "🎧" : i === 1 ? "📓" : "📄"}</span> {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {session.status === "upcoming" && (
                                <div className="px-5 pb-5">
                                    <button className="w-full py-4 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-lg shadow-orange-200">
                                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                                        Join Session
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* Quick Actions */}
                <section>
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Latihan Cepat</h3>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <Link href="/speaking-test" className="relative overflow-hidden rounded-2xl p-4 text-left bg-gradient-to-br from-emerald-400 to-emerald-500 text-white hover:opacity-90 transition-opacity">
                            <span className="absolute top-3 right-3 px-2 py-0.5 bg-white text-slate-800 text-[10px] font-bold rounded-full">Hot</span>
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                                <Mic size={20} className="text-white" />
                            </div>
                            <p className="font-bold text-lg">Speaking</p>
                            <p className="text-xs text-white/80">AI Practice</p>
                        </Link>

                        <Link href="/interview-sim" className="relative overflow-hidden rounded-2xl p-4 text-left bg-gradient-to-br from-violet-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                                <Bot size={20} className="text-white" />
                            </div>
                            <p className="font-bold text-lg">AI Interview</p>
                            <p className="text-xs text-white/80">24/7 Tutor</p>
                        </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {[
                            { icon: MessageSquare, label: "Interview", color: "bg-blue-500", href: "/interview-sim" },
                            { icon: BookOpen, label: "Reading", color: "bg-amber-500", href: "/reading-test" },
                            { icon: Users, label: "Book Sesi", color: "bg-rose-500", href: "/daftar-sesi" },
                            { icon: Star, label: "Placement", color: "bg-cyan-500", href: "/placement-test" },
                        ].map((action, i) => (
                            <Link key={i} href={action.href} className="flex flex-col items-center gap-2">
                                <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform`}>
                                    <action.icon size={24} />
                                </div>
                                <span className="text-xs font-medium text-slate-700">{action.label}</span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Motivational Quote */}
                <p className="text-center text-sm text-slate-400 italic pb-4">
                    &ldquo;Konsistensi adalah kunci mastery. Terus berlatih! 🔥&rdquo;
                </p>
            </div>
        </div>
    );
}
