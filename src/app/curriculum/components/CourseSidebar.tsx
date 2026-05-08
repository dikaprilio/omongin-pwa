'use client';

import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Circle, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { Phase, MeetingMeta } from '../data/types';

interface CourseSidebarProps {
    curriculum: Phase[];
    activeMeetingId: number | null;
    onSelectMeeting: (meeting: MeetingMeta) => void;
}

export default function CourseSidebar({
    curriculum,
    activeMeetingId,
    onSelectMeeting,
}: CourseSidebarProps) {
    const [expandedPhases, setExpandedPhases] = useState<number[]>([1]); // Phase 1 expanded by default

    const togglePhase = (phaseId: number) => {
        setExpandedPhases((prev) =>
            prev.includes(phaseId)
                ? prev.filter((id) => id !== phaseId)
                : [...prev, phaseId]
        );
    };

    // MeetingMeta doesn't have slides - content availability is determined by the loader
    const hasMeetingContent = (meeting: MeetingMeta) => {
        // For now, return true for meetings that have content (IDs 1-7 have content)
        return meeting.id <= 7;
    };

    return (
        <aside className="w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600">
                <h2 className="text-lg font-bold text-white">Course Map</h2>
                <p className="text-blue-100 text-sm">Adults • 30 Meetings</p>
            </div>

            {/* Scrollable Content */}
            <nav className="flex-1 overflow-y-auto p-3 space-y-2">
                {curriculum.map((phase) => (
                    <div key={phase.id} className="rounded-xl overflow-hidden border border-gray-100">
                        {/* Phase Header */}
                        <button
                            onClick={() => togglePhase(phase.id)}
                            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                        >
                            <div className="flex-1">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                                    Phase {phase.id}
                                </span>
                                <h3 className="text-sm font-medium text-gray-900 mt-0.5">
                                    {phase.title.replace(`Phase ${phase.id}: `, '')}
                                </h3>
                            </div>
                            <motion.div
                                animate={{ rotate: expandedPhases.includes(phase.id) ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            </motion.div>
                        </button>

                        {/* Meeting List */}
                        <motion.div
                            initial={false}
                            animate={{
                                height: expandedPhases.includes(phase.id) ? 'auto' : 0,
                                opacity: expandedPhases.includes(phase.id) ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <ul className="py-1">
                                {phase.meetings.map((meeting) => {
                                    const isActive = activeMeetingId === meeting.id;
                                    const hasContent = hasMeetingContent(meeting);

                                    return (
                                        <li key={meeting.id}>
                                            <button
                                                onClick={() => onSelectMeeting(meeting)}
                                                disabled={!hasContent}
                                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all ${isActive
                                                    ? 'bg-blue-50 border-l-4 border-blue-600'
                                                    : hasContent
                                                        ? 'hover:bg-gray-50 border-l-4 border-transparent'
                                                        : 'opacity-50 cursor-not-allowed border-l-4 border-transparent'
                                                    }`}
                                            >
                                                {/* Status Icon */}
                                                {isActive ? (
                                                    <PlayCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                                ) : hasContent ? (
                                                    <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                                                ) : (
                                                    <Circle className="w-5 h-5 text-gray-200 flex-shrink-0" />
                                                )}

                                                {/* Meeting Info */}
                                                <div className="flex-1 min-w-0">
                                                    <p
                                                        className={`text-sm font-medium truncate ${isActive ? 'text-blue-700' : 'text-gray-700'
                                                            }`}
                                                    >
                                                        {meeting.id}. {meeting.title}
                                                    </p>
                                                    {hasContent && (
                                                        <p className="text-xs text-green-600 font-medium mt-0.5">
                                                            ✓ Content Ready
                                                        </p>
                                                    )}
                                                </div>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
