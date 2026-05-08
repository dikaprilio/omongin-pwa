'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Zap, ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';
import { interviewPhases, getIdsByCurriculum } from '../data';

// Organic shape variants for buttons/badges
const organicShapes = [
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "40% 60% 60% 40% / 60% 30% 70% 40%",
    "50% 50% 20% 80% / 25% 80% 20% 75%",
    "70% 30% 30% 70% / 60% 40% 60% 40%",
];

export default function InterviewPage() {
    const availableMeetingIds = getIdsByCurriculum('interview');

    // Build global index map for routing
    let globalIdx = 0;
    const meetingIndexMap = new Map<number, number>();
    interviewPhases.forEach(phase => {
        phase.meetings.forEach(m => {
            meetingIndexMap.set(m.id, globalIdx);
            globalIdx++;
        });
    });

    return (
        <div className="min-h-screen bg-white" style={{
            backgroundImage: 'radial-gradient(#f3e8ff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <Link href="/curriculum" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="font-bold text-gray-900">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wider">
                            Career Prep
                        </div>
                        <span className="text-sm font-bold text-gray-400">Interview & CV</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Hero */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4 transform -rotate-1">
                        Career <span className="text-purple-600 relative inline-block">
                            Ready
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                        Dari <span className="bg-red-100 text-red-700 font-bold px-1 transform -rotate-2 inline-block mx-1">Nervous</span>
                        jadi <span className="bg-purple-100 text-purple-700 font-bold px-1 transform rotate-1 inline-block mx-1">Confident</span>.
                        Ayo raih karir impianmu!
                    </p>
                </div>

                {/* Phase-grouped sessions */}
                {interviewPhases.map((phase) => {
                    const phaseTitle = phase.title.replace(/^Phase \d+:\s*/, '');

                    return (
                        <div key={phase.id} className="mb-12">
                            {/* Phase Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center text-sm font-black">
                                    {phase.id}
                                </div>
                                <div>
                                    <h2 className="text-lg font-black text-gray-900">{phaseTitle}</h2>
                                    <p className="text-xs text-gray-500 line-clamp-1">{phase.goal}</p>
                                </div>
                                <div className="flex-1 h-px bg-gray-200 ml-2" />
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {phase.meetings.map((meeting) => {
                                    const idx = meetingIndexMap.get(meeting.id) ?? 0;
                                    const isAvailable = availableMeetingIds.includes(meeting.id);
                                    const shapeIndex = idx % organicShapes.length;

                                    return (
                                        <motion.div
                                            key={meeting.id}
                                            whileHover={{ y: -4, scale: 1.01 }}
                                            className={`group relative bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${isAvailable
                                                ? 'border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100'
                                                : 'border-gray-100 opacity-70 grayscale-[0.5]'
                                                }`}
                                        >
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div
                                                            className={`w-12 h-12 flex items-center justify-center text-lg font-bold shadow-sm transition-transform group-hover:rotate-12 ${isAvailable ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-400'
                                                                }`}
                                                            style={{ borderRadius: organicShapes[shapeIndex] }}
                                                        >
                                                            {idx + 1}
                                                        </div>
                                                        <div className="space-y-0.5">
                                                            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">Topic</span>
                                                            <h3 className={`font-bold text-lg leading-tight ${isAvailable ? 'text-gray-900' : 'text-gray-500'}`}>
                                                                {meeting.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Skill Focus */}
                                                <div className="mb-6 bg-gray-50 rounded-2xl p-3 border border-gray-100">
                                                    <div className="flex items-start gap-2 text-sm">
                                                        <Zap className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                                        <div>
                                                            <span className="font-bold text-gray-700 block mb-0.5">Skill Focus:</span>
                                                            <span className="text-gray-600 block leading-relaxed line-clamp-2">
                                                                {meeting.skill}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {meeting.fix && (
                                                        <div className="mt-2 text-xs text-gray-500 border-t border-gray-200 pt-2 flex items-center gap-1.5 line-clamp-1">
                                                            <Sparkles className="w-3 h-3 text-purple-500 shrink-0" />
                                                            <span className="italic">{meeting.fix}</span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Action */}
                                                {isAvailable ? (
                                                    <div>
                                                        <Link
                                                            href={`/curriculum/interview/${idx + 1}`}
                                                            className="flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 text-white rounded-xl font-bold text-sm hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-200 transition-all w-full"
                                                        >
                                                            <PlayCircle className="w-4 h-4" />
                                                            Materi
                                                        </Link>
                                                    </div>
                                                ) : (
                                                    <div className="w-full py-3 bg-gray-50 rounded-xl text-center text-sm font-bold text-gray-400 border border-gray-100 border-dashed flex items-center justify-center gap-1.5">
                                                        <Lock className="w-3.5 h-3.5" />
                                                        Locked
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}

function Sparkles({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    );
}
