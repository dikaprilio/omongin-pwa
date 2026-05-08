'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getMeetingData, Meeting, Slide } from '../../data';
import SlideDeck from '../../components/SlideDeck';

export default function InterviewDetailPage() {
    const params = useParams();
    const router = useRouter();
    const localId = Number(params.id);
    const globalId = localId + 180;

    const [meeting, setMeeting] = useState<Meeting | undefined>(undefined);
    const [slides, setSlides] = useState<Slide[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            if (!isNaN(globalId)) {
                setIsLoading(true);
                const data = await getMeetingData(globalId);
                if (data) {
                    setMeeting(data.meeting);
                    setSlides(data.slides);
                }
                setIsLoading(false);
            }
        }
        loadData();
    }, [globalId]);

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
                    <Link href="/curriculum/interview" className="text-sm font-medium text-red-600 hover:underline">
                        Back to Curriculum
                    </Link>
                </div>
            </div>
        );
    }

    const getNavigationBoundaries = (id: number) => {
        const startId = 1;
        const endId = 60;
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
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/curriculum/interview"
                            className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="h-6 w-px bg-gray-200" />
                        <div>
                            <h1 className="text-base font-bold text-gray-900 leading-none">
                                {meeting?.title}
                            </h1>
                            <p className="text-xs text-gray-500 mt-1">
                                Topic {localId} • {meeting?.skill}
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {slides.length > 0 ? (
                    <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
                        <SlideDeck slides={slides} meetingTitle={meeting?.title || ''} />
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Content not available for this topic yet.
                    </div>
                )}
            </main>

            {/* Footer Navigation */}
            <div className="bg-white border-t border-gray-200 py-4 px-6 shrink-0 z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {prevId ? (
                        <Link href={`/curriculum/interview/${prevId}`} className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                            Previous Topic
                        </Link>
                    ) : <div />}

                    <div className="text-xs text-gray-400 font-medium">
                        Progress: {Math.round(((localId) / 60) * 100)}%
                    </div>

                    {nextId ? (
                        <Link href={`/curriculum/interview/${nextId}`} className="flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
                            Next Topic
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
}
