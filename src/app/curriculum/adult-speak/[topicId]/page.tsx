'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getMeetingData, Meeting, Slide, QuizQuestion } from '../../data';
import SlideDeck from '../../components/SlideDeck';
import QuizModule from '../../components/QuizModule';
import { motion } from 'framer-motion';

export default function TopicPage() {
    const params = useParams();
    const router = useRouter();
    const topicId = Number(params.topicId);

    const [meeting, setMeeting] = useState<Meeting | undefined>(undefined);
    const [slides, setSlides] = useState<Slide[]>([]);
    const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
    const [activeTab, setActiveTab] = useState<'presentation' | 'quiz'>('presentation');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            if (!isNaN(topicId)) {
                setIsLoading(true);
                const data = await getMeetingData(topicId);
                if (data) {
                    setMeeting(data.meeting);
                    setSlides(data.slides);
                    setQuiz(data.quiz);
                }
                setIsLoading(false);
            }
        }
        loadData();
    }, [topicId]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-500">Loading topic...</div>
            </div>
        );
    }

    if (!meeting) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 bg-red-50 px-6 py-4 rounded-xl border border-red-100 flex flex-col items-center gap-4">
                    <p className="font-medium text-lg text-red-700">Topic not found.</p>
                    <Link href="/curriculum/adult-speak" className="text-sm font-medium text-red-600 hover:underline">
                        Back to Curriculum
                    </Link>
                </div>
            </div>
        );
    }

    // Determine next/prev topic IDs within the same 30-meeting curriculum path
    const getNavigationBoundaries = (id: number) => {
        const pathIndex = Math.floor((id - 1) / 30); // 0 for Adults, 1 for Kids, etc.
        const startId = pathIndex * 30 + 1;
        const endId = (pathIndex + 1) * 30;

        return {
            prevId: id > startId ? id - 1 : null,
            nextId: id < endId ? id + 1 : null
        };
    };

    const { prevId, nextId } = getNavigationBoundaries(topicId);
    return (
        <div className="h-[100dvh] bg-gray-50 flex flex-col overflow-hidden supports-[height:100dvh]:h-[100dvh] supports-[height:100vh]:h-[100vh]">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 shrink-0 z-40 transition-all">
                <div className="max-w-7xl mx-auto px-3 lg:px-4 py-2 lg:py-0 min-h-[64px] flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0">
                    <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start gap-4">
                        <div className="flex items-center gap-4">
                            <Link
                                href="/curriculum/adult-speak"
                                className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="h-6 w-px bg-gray-200" />
                            <div>
                                <h1 className="text-sm lg:text-base font-bold text-gray-900 leading-none truncate max-w-[200px] lg:max-w-none">
                                    {meeting?.title}
                                </h1>
                                <p className="text-[10px] lg:text-xs text-gray-500 mt-0.5 lg:mt-1">
                                    Meeting {meeting?.id} • {meeting?.skill}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex bg-gray-100 rounded-lg p-1 w-full lg:w-auto">
                        <button
                            onClick={() => setActiveTab('presentation')}
                            className={`flex-1 lg:flex-none px-4 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all ${activeTab === 'presentation'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Presentation
                        </button>
                        <button
                            onClick={() => setActiveTab('quiz')}
                            disabled={!meeting?.quiz || meeting?.quiz.length === 0}
                            className={`flex-1 lg:flex-none px-4 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-all ${!meeting?.quiz?.length
                                ? 'opacity-50 cursor-not-allowed'
                                : activeTab === 'quiz'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Practice Quiz
                        </button>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {activeTab === 'presentation' && slides.length > 0 ? (
                    <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
                        <SlideDeck slides={slides} meetingTitle={meeting?.title || ''} />
                    </div>
                ) : activeTab === 'quiz' && quiz.length > 0 ? (
                    <div className="w-full flex-1 overflow-hidden h-full">
                        {/* QuizModule handles its own scrolling and layout */}
                        <QuizModule questions={quiz} meetingTitle={meeting?.title || ''} />
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Content not available for this meeting yet.
                    </div>
                )}
            </main>

            {/* Footer Navigation (Hide on Quiz Tab because Quiz has its own nav controls, or keep it but make sure it doesn't overlap) */}
            {/* Actually, if QuizModule is 100vh internally, this footer will be pushed out or overlap. */}
            {/* Since QuizModule has its own "map" and layout, we might want to hide THIS footer when in Quiz mode to save vertical space and confusion. */}
            {activeTab !== 'quiz' && (
                <div className="bg-white border-t border-gray-200 py-3 lg:py-4 px-3 lg:px-6 shrink-0 z-30">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {prevId ? (
                            <Link href={`/curriculum/adult-speak/${prevId}`} className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                                <ChevronLeft className="w-3 h-3 lg:w-4 lg:h-4" />
                                <span className="hidden lg:inline">Previous Meeting</span>
                                <span className="lg:hidden">Prev</span>
                            </Link>
                        ) : <div />}

                        <div className="text-[10px] lg:text-xs text-gray-400 font-medium text-center">
                            Progress: {Math.round((topicId / 120) * 100)}%
                        </div>

                        {nextId ? (
                            <Link href={`/curriculum/adult-speak/${nextId}`} className="flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                                <span className="hidden lg:inline">Next Meeting</span>
                                <span className="lg:hidden">Next</span>
                                <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            )}
        </div>
    );
}
