'use client';

import { motion } from 'framer-motion';
import { Presentation, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Meeting } from '../data/types';
import SlideDeck from './SlideDeck';
import QuizModule from './QuizModule';

interface MaterialsViewerProps {
    meeting: Meeting;
}

type Tab = 'presentation' | 'quiz';

export default function MaterialsViewer({ meeting }: MaterialsViewerProps) {
    const [activeTab, setActiveTab] = useState<Tab>('presentation');

    const tabs: { id: Tab; label: string; icon: React.ReactNode; disabled: boolean }[] = [
        {
            id: 'presentation',
            label: 'Presentation',
            icon: <Presentation className="w-5 h-5" />,
            disabled: !meeting.slides || meeting.slides.length === 0,
        },
        {
            id: 'quiz',
            label: 'Practice Quiz',
            icon: <HelpCircle className="w-5 h-5" />,
            disabled: !meeting.quiz || meeting.quiz.length === 0,
        },
    ];

    return (
        <div className="flex flex-col h-[100dvh] bg-gray-50 overflow-hidden supports-[height:100dvh]:h-[100dvh] supports-[height:100vh]:h-[100vh]">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 p-3 lg:p-4 shrink-0 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-4">
                    {/* Meeting Info */}
                    <div className="min-w-0 flex items-center justify-between lg:block">
                        <div>
                            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                Meeting {meeting.id}
                            </span>
                            <h1 className="text-lg lg:text-2xl font-bold text-gray-900 mt-0.5 truncate max-w-full lg:max-w-none">
                                {meeting.title}
                            </h1>
                        </div>
                        {/* Mobile specific simple progress/info could go here if needed, keeping it clean for now */}
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex bg-gray-100 rounded-xl p-1 lg:p-1 w-full lg:w-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => !tab.disabled && setActiveTab(tab.id)}
                                disabled={tab.disabled}
                                className={`relative flex-1 lg:flex-none flex items-center justify-center gap-2 lg:gap-2 px-3 lg:px-4 py-2 lg:py-2 rounded-lg text-sm font-medium transition-colors ${tab.disabled
                                    ? 'text-gray-400 cursor-not-allowed'
                                    : activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {activeTab === tab.id && !tab.disabled && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-600 rounded-lg"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 scale-100">{tab.icon}</span>
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden">
                {activeTab === 'presentation' && meeting.slides && (
                    <SlideDeck slides={meeting.slides} meetingTitle={`Meeting ${meeting.id}: ${meeting.title}`} />
                )}
                {activeTab === 'quiz' && meeting.quiz && (
                    <QuizModule questions={meeting.quiz} meetingTitle={`Meeting ${meeting.id}: ${meeting.title}`} />
                )}
            </div>
        </div>
    );
}
