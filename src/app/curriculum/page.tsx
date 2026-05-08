'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, Baby, Lock, ArrowRight } from 'lucide-react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSubscription } from '@/hooks/useSubscription';
import { useRole } from '@/hooks/useRole';
import { StudentLayout } from '@/components/layouts/StudentLayout';
import { PaymentModal } from '@/components/PaymentModal';

// Organic shape variants for buttons/badges
const organicShapes = [
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "40% 60% 60% 40% / 60% 30% 70% 40%",
    "50% 50% 20% 80% / 25% 80% 20% 75%",
    "70% 30% 30% 70% / 60% 40% 60% 40%",
];

const courses = [
    {
        id: 'speaking-adults',
        title: 'Speaking Professional',
        subtitle: 'Basic to Advanced',
        description: 'Jago ngomong Inggris buat kerja, travel, dan social life.',
        icon: <Users className="w-8 h-8" />,
        color: 'blue',
        available: true,
        href: '/curriculum/adult-speak',
        tag: 'Paling Laris'
    },
    {
        id: 'speaking-kids',
        title: 'Speaking Kids',
        subtitle: 'For Young Learners',
        description: 'Belajar seru dan interaktif khusus buat si kecil.',
        icon: <Baby className="w-8 h-8" />,
        color: 'pink',
        available: true,
        href: '/curriculum/kids-speak',
    },
    {
        id: 'basic-adults',
        title: 'Basic Grammar',
        subtitle: 'Pondasi Kokoh',
        description: 'Pahami grammar dan vocabulary dari nol banget.',
        icon: <BookOpen className="w-8 h-8" />,
        color: 'green',
        available: true,
        href: '/curriculum/basic-grammar',
    },
    {
        id: 'basic-kids',
        title: 'Basic Kids',
        subtitle: 'Grammar Ceria',
        description: 'Bikin anak paham grammar tanpa pusing.',
        icon: <BookOpen className="w-8 h-8" />,
        color: 'teal',
        available: true,
        href: '/curriculum/basic-kids',
    },
    {
        id: 'interview',
        title: 'Career Prep',
        subtitle: 'Interview & CV',
        description: 'Siap hadapi interview kerja dengan percaya diri.',
        icon: <Briefcase className="w-8 h-8" />,
        color: 'purple',
        available: true,
        href: '/curriculum/interview',
    },
    {
        id: 'presentation',
        title: 'Public Speaking',
        subtitle: 'Presentation Skills',
        description: 'Bawain presentasi yang memukau audience.',
        icon: <Briefcase className="w-8 h-8" />,
        color: 'orange',
        available: true,
        href: '/curriculum/presentation',
    },
];

// Gradient map to avoid Tailwind purging dynamic classes
const gradientMap: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-400 to-blue-600",
    pink: "bg-gradient-to-br from-pink-400 to-pink-600",
    green: "bg-gradient-to-br from-green-400 to-green-600",
    teal: "bg-gradient-to-br from-teal-400 to-teal-600",
    purple: "bg-gradient-to-br from-purple-400 to-purple-600",
    orange: "bg-gradient-to-br from-orange-400 to-orange-600",
};

export default function CurriculumHubPage() {
    const { isSubscribed, isLoading: subLoading, allowedModules } = useSubscription();
    const { isAdmin, isTeacher, loading: roleLoading } = useRole();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const router = useRouter();

    const isLoading = subLoading || roleLoading;

    const handleCourseClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPaymentModal(true);
    };

    return (
        <StudentLayout>
        <div className="min-h-screen bg-white" style={{
            backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}>
            <PaymentModal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
            />

            {/* Hero Section -- padding adjusted since nav is now external */}
            <section className="pt-16 pb-12 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Pilih Jalur <span className="text-blue-600 relative inline-block">
                            Belajarmu
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed font-medium">
                        Pilih kurikulum yang pas buat goal kamu.<br className="hidden md:block" /> Mulai lancar ngomong Inggris hari ini!
                    </p>
                </motion.div>
            </section>

            {/* Courses Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => {
                        // Gating Logic — only speaking-adults is free for demo
                        const isGated = ['speaking-kids', 'basic-adults', 'basic-kids', 'interview', 'presentation'].includes(course.id);
                        const hasModuleAccess = isAdmin || isTeacher || (isSubscribed && allowedModules.includes(course.id));
                        const isLocked = isGated && !hasModuleAccess && !isLoading;

                        const shapeIndex = index % organicShapes.length;

                        return (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className={`group relative bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${course.available
                                    ? 'border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 cursor-pointer'
                                    : 'border-gray-100 opacity-70 grayscale-[0.5] cursor-not-allowed'
                                    }`}
                                onClick={(e) => {
                                    if (!course.available) {
                                        e.preventDefault();
                                        return;
                                    }
                                    if (isLocked) {
                                        handleCourseClick(e);
                                    } else {
                                        router.push(course.href);
                                    }
                                }}
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className={`w-14 h-14 flex items-center justify-center text-white shadow-md transition-transform group-hover:rotate-6 ${gradientMap[course.color] || 'bg-gray-400'}`}
                                            style={{ borderRadius: organicShapes[shapeIndex] }}
                                        >
                                            {course.icon}
                                        </div>
                                        {course.available ? (
                                            <div className="flex flex-col items-end gap-2">
                                                {course.tag && (
                                                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] uppercase font-bold tracking-wider rounded-full">
                                                        {course.tag}
                                                    </span>
                                                )}
                                                {isLocked ? (
                                                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                                                        <Lock className="w-4 h-4" />
                                                    </div>
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wide">
                                                Soon
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {course.title}
                                        </h3>
                                        <p className={`font-semibold text-sm mb-3 ${course.available ? `text-${course.color}-600` : 'text-gray-400'}`}>
                                            {course.subtitle}
                                        </p>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
        </StudentLayout>
    );
}
