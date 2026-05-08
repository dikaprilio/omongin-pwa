'use client';

import React, { useState } from 'react';
import { CATState, getRecommendedLevel } from '@/lib/cat-engine';
import { PlacementQuestion } from '@/data/placement-questions';
import { ChevronDown, ChevronUp, Bug, TrendingUp, Target, Brain, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CATDebugOverlayProps {
    catState: CATState;
    currentQuestion: PlacementQuestion | null;
    isThinking: boolean;
}

// Only render in development
const isDevelopment = process.env.NODE_ENV === 'development';

export default function CATDebugOverlay({
    catState,
    currentQuestion,
    isThinking
}: CATDebugOverlayProps) {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeTab, setActiveTab] = useState<'state' | 'history' | 'graph'>('state');

    // Don't render in production
    if (!isDevelopment) return null;

    const recommendedLevel = getRecommendedLevel(catState.abilityEstimate);

    // Calculate statistics
    const totalAnswered = catState.history.length;
    const totalCorrect = catState.history.filter(h => h.isCorrect).length;
    const accuracy = totalAnswered > 0 ? (totalCorrect / totalAnswered * 100).toFixed(1) : '0.0';

    // Category breakdown
    const mcqHistory = catState.history.filter(h => h.questionId.startsWith('mcq'));
    const pronunciationHistory = catState.history.filter(h => h.questionId.startsWith('pron'));

    const mcqCorrect = mcqHistory.filter(h => h.isCorrect).length;
    const pronCorrect = pronunciationHistory.filter(h => h.isCorrect).length;

    // Calculate K-factor (same formula as cat-engine)
    const kFactor = Math.max(0.5, 1.5 / Math.sqrt(totalAnswered + 1));

    // Difficulty level labels
    const difficultyLabels = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard'];
    const difficultyColors = ['text-green-400', 'text-lime-400', 'text-yellow-400', 'text-orange-400', 'text-red-400'];

    return (
        <div className="fixed bottom-4 right-4 z-[9999] font-mono text-xs">
            <div
                className={cn(
                    "bg-black/90 backdrop-blur-md border border-purple-500/50 rounded-lg shadow-2xl",
                    "transition-all duration-300",
                    isExpanded ? "w-80" : "w-auto"
                )}
            >
                {/* Header */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between gap-2 px-3 py-2 hover:bg-purple-500/20 rounded-t-lg transition-colors"
                >
                    <div className="flex items-center gap-2 text-purple-400">
                        <Bug className="w-4 h-4" />
                        <span className="font-bold">CAT Debug</span>
                        {isThinking && (
                            <span className="animate-pulse text-yellow-400">⟳ Adapting...</span>
                        )}
                    </div>
                    {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-purple-400" />
                    ) : (
                        <ChevronUp className="w-4 h-4 text-purple-400" />
                    )}
                </button>

                {isExpanded && (
                    <div className="px-3 pb-3 space-y-3">
                        {/* Tab Navigation */}
                        <div className="flex gap-1 border-b border-gray-700 pb-2">
                            {[
                                { id: 'state', icon: Brain, label: 'State' },
                                { id: 'history', icon: BarChart3, label: 'History' },
                                { id: 'graph', icon: TrendingUp, label: 'Graph' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={cn(
                                        "flex items-center gap-1 px-2 py-1 rounded text-[10px] transition-colors",
                                        activeTab === tab.id
                                            ? "bg-purple-500/30 text-purple-300"
                                            : "text-gray-500 hover:text-gray-300"
                                    )}
                                >
                                    <tab.icon className="w-3 h-3" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* State Tab */}
                        {activeTab === 'state' && (
                            <div className="space-y-2">
                                {/* Current Question */}
                                <div className="bg-gray-800/50 rounded p-2 space-y-1">
                                    <div className="text-gray-500 uppercase tracking-wider text-[10px]">Current Question</div>
                                    {currentQuestion ? (
                                        <>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">ID:</span>
                                                <span className="text-cyan-400">{currentQuestion.id}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Type:</span>
                                                <span className="text-blue-400">{currentQuestion.type.toUpperCase()}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-400">Difficulty:</span>
                                                <span className={difficultyColors[currentQuestion.difficulty - 1]}>
                                                    {currentQuestion.difficulty}/5 ({difficultyLabels[currentQuestion.difficulty - 1]})
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <span className="text-gray-500 italic">None selected</span>
                                    )}
                                </div>

                                {/* CAT State */}
                                <div className="bg-gray-800/50 rounded p-2 space-y-1">
                                    <div className="text-gray-500 uppercase tracking-wider text-[10px]">CAT Engine State</div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Ability θ:</span>
                                        <span className={cn(
                                            "font-bold",
                                            catState.abilityEstimate > 0 ? "text-green-400" :
                                                catState.abilityEstimate < 0 ? "text-red-400" : "text-yellow-400"
                                        )}>
                                            {catState.abilityEstimate.toFixed(3)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">CEFR Level:</span>
                                        <span className="text-purple-400">{recommendedLevel.cefr} ({recommendedLevel.level})</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Target Diff:</span>
                                        <span className={difficultyColors[catState.currentDifficultyIndex]}>
                                            {catState.currentDifficultyIndex + 1}/5
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Std Error:</span>
                                        <span className="text-blue-400">{catState.standardError.toFixed(3)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">K-Factor:</span>
                                        <span className="text-orange-400">{kFactor.toFixed(3)}</span>
                                    </div>
                                </div>

                                {/* Score Summary */}
                                <div className="bg-gray-800/50 rounded p-2 space-y-1">
                                    <div className="text-gray-500 uppercase tracking-wider text-[10px]">Score Summary</div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Total:</span>
                                        <span className="text-white">{totalCorrect}/{totalAnswered} ({accuracy}%)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">MCQ:</span>
                                        <span className="text-blue-400">{mcqCorrect}/{mcqHistory.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Pronunciation:</span>
                                        <span className="text-green-400">{pronCorrect}/{pronunciationHistory.length}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* History Tab */}
                        {activeTab === 'history' && (
                            <div className="space-y-1 max-h-60 overflow-y-auto">
                                <div className="text-gray-500 uppercase tracking-wider text-[10px]">Answer History</div>
                                {catState.history.length === 0 ? (
                                    <p className="text-gray-500 italic text-center py-4">No answers yet</p>
                                ) : (
                                    <div className="space-y-1">
                                        {catState.history.map((h, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "flex items-center justify-between px-2 py-1 rounded text-[10px]",
                                                    h.isCorrect ? "bg-green-900/30" : "bg-red-900/30"
                                                )}
                                            >
                                                <span className="text-gray-400">#{i + 1}</span>
                                                <span className="text-cyan-400 truncate max-w-[120px]">{h.questionId}</span>
                                                <span className={difficultyColors[h.difficulty - 1]}>
                                                    D{h.difficulty}
                                                </span>
                                                <span className={h.isCorrect ? "text-green-400" : "text-red-400"}>
                                                    {h.isCorrect ? '✓' : '✗'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Graph Tab */}
                        {activeTab === 'graph' && (
                            <div className="space-y-2">
                                <div className="text-gray-500 uppercase tracking-wider text-[10px]">Difficulty Trajectory</div>

                                {/* Visual Graph */}
                                <div className="bg-gray-800/50 rounded p-2">
                                    <div className="relative h-24">
                                        {/* Y-axis labels */}
                                        <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-between text-[8px] text-gray-500">
                                            <span>5</span>
                                            <span>3</span>
                                            <span>1</span>
                                        </div>

                                        {/* Graph area */}
                                        <div className="ml-7 h-full relative border-l border-b border-gray-600">
                                            {/* Grid lines */}
                                            <div className="absolute inset-0 flex flex-col justify-between">
                                                {[0, 1, 2, 3, 4].map(i => (
                                                    <div key={i} className="border-t border-gray-700/50" />
                                                ))}
                                            </div>

                                            {/* Data points */}
                                            <div className="absolute inset-0 flex items-end">
                                                {catState.history.map((h, i) => {
                                                    const yPos = ((h.difficulty - 1) / 4) * 100;
                                                    const xPos = (i / Math.max(catState.history.length - 1, 1)) * 100;
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="absolute w-2 h-2 -ml-1 rounded-full transition-all"
                                                            style={{
                                                                left: `${xPos}%`,
                                                                bottom: `${yPos}%`,
                                                                backgroundColor: h.isCorrect ? '#4ade80' : '#f87171'
                                                            }}
                                                            title={`Q${i + 1}: D${h.difficulty} (${h.isCorrect ? 'Correct' : 'Wrong'})`}
                                                        />
                                                    );
                                                })}
                                            </div>

                                            {/* Current target line */}
                                            <div
                                                className="absolute left-0 right-0 border-t-2 border-dashed border-purple-500/50"
                                                style={{
                                                    bottom: `${(catState.currentDifficultyIndex / 4) * 100}%`
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between text-[8px] text-gray-500 mt-1 ml-7">
                                        <span>Start</span>
                                        <span>← Questions →</span>
                                        <span>Now</span>
                                    </div>
                                </div>

                                {/* Legend */}
                                <div className="flex gap-3 justify-center text-[10px]">
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="text-gray-400">Correct</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <span className="text-gray-400">Wrong</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-4 h-0.5 border-t-2 border-dashed border-purple-500" />
                                        <span className="text-gray-400">Target</span>
                                    </div>
                                </div>

                                {/* Ability Estimate Meter */}
                                <div className="bg-gray-800/50 rounded p-2 space-y-1">
                                    <div className="text-gray-500 uppercase tracking-wider text-[10px]">Ability Estimate θ</div>
                                    <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                                        {/* Range indicators */}
                                        <div className="absolute inset-0 flex">
                                            <div className="flex-1 bg-red-900/30" />
                                            <div className="flex-1 bg-orange-900/30" />
                                            <div className="flex-1 bg-yellow-900/30" />
                                            <div className="flex-1 bg-lime-900/30" />
                                            <div className="flex-1 bg-green-900/30" />
                                        </div>

                                        {/* Current position marker */}
                                        <div
                                            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300"
                                            style={{
                                                left: `${((catState.abilityEstimate + 3) / 6) * 100}%`
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[8px] text-gray-500">
                                        <span>-3 (A1)</span>
                                        <span>0 (B1)</span>
                                        <span>+3 (C1)</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
