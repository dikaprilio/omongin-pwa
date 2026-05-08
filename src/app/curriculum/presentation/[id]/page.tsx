'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getMeetingData, Meeting, Slide, QuizQuestion } from '../../data';
import SlideDeck from '../../components/SlideDeck';
import QuizModule from '../../components/QuizModule';

export default function PresentationTopicPage() {
    const params = useParams();
    const router = useRouter();
    // params.id is the LOCAL ID (1-30)
    // We map it to GLOBAL ID (151-180)
    const localId = Number(params.id);
    const globalId = localId + 150;

    const [meeting, setMeeting] = useState<Meeting | undefined>(undefined);
    const [slides, setSlides] = useState<Slide[]>([]);
    const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
    const [activeTab, setActiveTab] = useState<'presentation' | 'quiz'>('presentation');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            if (!isNaN(globalId)) {
                setIsLoading(true);
                const data = await getMeetingData(globalId);
                if (data) {
                    setMeeting(data.meeting);
                    setSlides(data.slides);
                    setQuiz(data.quiz);
                }
                setIsLoading(false);
            }
        }
        loadData();
    }, [globalId]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-500">Loading lesson...</div>
            </div>
        );
    }

    if (!meeting) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 bg-red-50 px-6 py-4 rounded-xl border border-red-100 flex flex-col items-center gap-4">
                    <p className="font-medium text-lg text-red-700">Topic not found.</p>
                    <Link href="/curriculum/presentation" className="text-sm font-medium text-red-600 hover:underline">
                        Back to Curriculum
                    </Link>
                </div>
            </div>
        );
    }

    // Presentation meetings have Local IDs 1-30
    const getNavigationBoundaries = (id: number) => {
        const startId = 1;
        const endId = 30;

        return {
            prevId: id > startId ? id - 1 : null,
            nextId: id < endId ? id + 1 : null
        };
    };

    const { prevId, nextId } = getNavigationBoundaries(localId);

    return (
        <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 shrink-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-3 md:h-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/curriculum/presentation"
                            className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="h-6 w-px bg-gray-200 hidden xs:block" />
                        <div className="min-w-0">
                            <h1 className="text-sm md:text-base font-bold text-gray-900 leading-tight truncate">
                                {meeting?.title}
                            </h1>
                            <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">
                                Topic {localId} • {meeting?.skill}
                            </p>
                        </div>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex bg-gray-100 rounded-lg p-1 w-full md:w-auto overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab('presentation')}
                            className={`flex-1 md:flex-none px-4 py-1.5 text-xs md:text-sm font-medium rounded-md transition-all whitespace-nowrap ${activeTab === 'presentation'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Presentation
                        </button>
                        <button
                            onClick={() => setActiveTab('quiz')}
                            disabled={!meeting?.quiz || meeting?.quiz.length === 0}
                            className={`flex-1 md:flex-none px-4 py-1.5 text-xs md:text-sm font-medium rounded-md transition-all whitespace-nowrap ${!meeting?.quiz?.length
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
                        <QuizModule questions={quiz} meetingTitle={meeting?.title || ''} />
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Content not available for this meeting yet.
                    </div>
                )}
            </main>

            {/* Footer Navigation */}
            {activeTab !== 'quiz' && (
                <div className="bg-white border-t border-gray-200 py-4 px-6 shrink-0 z-30">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {prevId ? (
                            <Link href={`/curriculum/presentation/${prevId}`} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                                <ChevronLeft className="w-4 h-4" />
                                Topic {prevId}
                            </Link>
                        ) : <div />}

                        <div className="text-xs text-gray-400 font-medium">
                            Progress: {Math.round(((localId) / 30) * 100)}%
                        </div>

                        {nextId ? (
                            <Link href={`/curriculum/presentation/${nextId}`} className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
                                Topic {nextId}
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            )}
        </div>
    );
}
