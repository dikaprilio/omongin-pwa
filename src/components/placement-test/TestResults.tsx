'use client';

import React from 'react';
import { getRecommendedLevel } from '@/lib/cat-engine';
import { placementQuestions, PlacementQuestion } from '@/data/placement-questions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, RefreshCw, CheckCircle, XCircle, ArrowRight, BookOpen, MessageSquare, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HistoryItem {
    questionId: string;
    isCorrect: boolean;
    difficulty: number;
    userResponse?: any;
}

interface TestResultsProps {
    abilityEstimate: number;
    history: HistoryItem[];
    onRetest: () => void;
}

// Get question details by ID
function getQuestionById(id: string): PlacementQuestion | undefined {
    return placementQuestions.find(q => q.id === id);
}

// Category display config
const CATEGORY_CONFIG = {
    grammar: { label: 'Grammar', icon: BookOpen, color: 'text-blue-600' },
    vocabulary: { label: 'Vocabulary', icon: BookOpen, color: 'text-purple-600' },
    critical_thinking: { label: 'Critical Thinking', icon: MessageSquare, color: 'text-amber-600' },
    speaking: { label: 'Pronunciation', icon: Mic, color: 'text-green-600' },
    reading: { label: 'Reading', icon: BookOpen, color: 'text-cyan-600' },
};

export default function TestResults({ abilityEstimate, history, onRetest }: TestResultsProps) {
    const result = getRecommendedLevel(abilityEstimate);
    const today = new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Calculate General Stats
    const correctCount = history.filter(h => h.isCorrect).length;
    const totalCount = history.length;
    const accuracy = Math.round((correctCount / totalCount) * 100);

    // Calculate Split Accuracies
    const mcqHistory = history.filter(h => getQuestionById(h.questionId)?.type === 'mcq');
    const speakingHistory = history.filter(h => getQuestionById(h.questionId)?.type === 'pronunciation');

    const mcqCorrect = mcqHistory.filter(h => h.isCorrect).length;
    const mcqTotal = mcqHistory.length;
    const mcqAccuracy = mcqTotal > 0 ? Math.round((mcqCorrect / mcqTotal) * 100) : 0;

    const speakingScoreTotal = speakingHistory.reduce((sum, h) => sum + (h.userResponse?.score || 0), 0);
    const speakingTotal = speakingHistory.length;
    const speakingAccuracy = speakingTotal > 0 ? Math.round(speakingScoreTotal / speakingTotal) : 0;

    // Calculate scores by category
    const categoryScores: Record<string, { totalScore: number; count: number }> = {};
    history.forEach(h => {
        const q = getQuestionById(h.questionId);
        if (q) {
            const cat = q.category;
            if (!categoryScores[cat]) {
                categoryScores[cat] = { totalScore: 0, count: 0 };
            }
            categoryScores[cat].count++;

            // Use weighted score if available, otherwise 100/0 based on correctness
            const score = h.userResponse?.score !== undefined
                ? h.userResponse.score
                : (h.isCorrect ? 100 : 0);

            categoryScores[cat].totalScore += score;
        }
    });

    const handlePrint = () => {
        window.print();
    };

    // Enrich history with question data
    const enrichedHistory = history.map(h => ({
        ...h,
        question: getQuestionById(h.questionId)
    }));

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Print-only header */}
            <div className="hidden print:block text-center border-b pb-6 mb-6">
                <h1 className="text-3xl font-bold text-primary">English Chill Course</h1>
                <p className="text-muted-foreground">Placement Test Results</p>
                <p className="text-sm text-muted-foreground mt-2">Test Date: {today}</p>
            </div>

            {/* Screen Header (hide on print) */}
            <div className="text-center space-y-4 print:hidden animate-in fade-in duration-700">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Assessment Complete!</h2>
                <p className="text-muted-foreground text-lg">Here is your recommended starting level.</p>
            </div>

            {/* Main Result Card */}
            <Card className="p-8 md:p-10 border-2 border-primary/10 shadow-xl bg-gradient-to-br from-white to-blue-50/50 print:shadow-none print:border print:bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 text-center md:text-left flex-1">
                        <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-2">
                            Recommended Level
                        </div>
                        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                            {result.level}
                        </h1>
                        <p className="text-muted-foreground leading-relaxed pt-2">
                            {result.description}
                        </p>
                    </div>

                    {/* Stats Visual */}
                    <div className="w-full md:w-72 bg-white rounded-xl border p-6 space-y-5 shadow-sm print:shadow-none">
                        {/* Overall */}
                        <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground font-medium">Overall Accuracy</span>
                                <span className="font-bold">{accuracy}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-slate-800 rounded-full" style={{ width: `${accuracy}%` }} />
                            </div>
                        </div>

                        <div className="pt-2 border-t space-y-4">
                            {/* MCQ Split */}
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Grammar & Vocab</span>
                                    <span className="font-medium">{mcqAccuracy}%</span>
                                </div>
                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${mcqAccuracy}%` }} />
                                </div>
                            </div>

                            {/* Speaking Split */}
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">Speaking</span>
                                    <span className="font-medium">{speakingAccuracy}%</span>
                                </div>
                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${speakingAccuracy}%` }} />
                                </div>
                            </div>
                        </div>

                        <div className="pt-2 border-t flex justify-between text-xs text-muted-foreground">
                            <span>Questions: {totalCount}</span>
                            <span>Ability: {abilityEstimate.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Category Breakdown */}
            <Card className="p-6 print:shadow-none print:border">
                <h3 className="text-lg font-semibold mb-4">Performance by Competency</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(categoryScores).map(([cat, scores]) => {
                        const config = CATEGORY_CONFIG[cat as keyof typeof CATEGORY_CONFIG] || { label: cat, color: 'text-gray-600', icon: BookOpen };
                        const avgScore = Math.round(scores.totalScore / scores.count);

                        return (
                            <div key={cat} className="p-4 bg-muted/30 rounded-xl">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={cn("text-sm font-medium", config.color)}>{config.label}</span>
                                    <span className="text-xs text-muted-foreground">{avgScore}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className={cn(
                                            "h-full rounded-full transition-all duration-1000",
                                            avgScore >= 70 ? "bg-green-500" : avgScore >= 40 ? "bg-yellow-500" : "bg-red-400"
                                        )}
                                        style={{ width: `${avgScore}%` }}
                                    />
                                </div>
                                <div className="mt-1 text-[10px] text-muted-foreground">
                                    Based on {scores.count} question{scores.count > 1 ? 's' : ''}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* Question-by-Question Breakdown */}
            <Card className="p-6 print:shadow-none print:border">
                <h3 className="text-lg font-semibold mb-4">Detailed Question Review</h3>
                <div className="space-y-3">
                    {enrichedHistory.map((item, index) => {
                        const q = item.question;
                        if (!q) return null;

                        const categoryConfig = CATEGORY_CONFIG[q.category as keyof typeof CATEGORY_CONFIG];

                        // Get question text based on type
                        let questionText = '';
                        if (q.type === 'mcq') {
                            questionText = q.question || q.passageTitle || 'Question';
                        } else if (q.type === 'pronunciation') {
                            questionText = `Pronunciation: "${q.sentence}"`;
                        }

                        // Determine score color
                        const score = item.userResponse?.score;
                        const scoreColor = score >= 70 ? "text-green-600" : score >= 40 ? "text-yellow-600" : "text-red-500";

                        return (
                            <div
                                key={item.questionId}
                                className={cn(
                                    "flex items-start gap-4 p-4 rounded-xl border transition-colors",
                                    item.isCorrect ? "bg-green-50/10 border-green-100/50" : "bg-red-50/10 border-red-100/50"
                                )}
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    {item.isCorrect ? (
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-500" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            Q{index + 1}
                                        </span>
                                        {categoryConfig && (
                                            <span className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-white border", categoryConfig.color)}>
                                                {categoryConfig.label}
                                            </span>
                                        )}
                                        <span className="text-[10px] font-bold text-muted-foreground">
                                            LVL {q.difficulty}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground line-clamp-2 print:line-clamp-none">
                                        {questionText}
                                    </p>

                                    {/* Show score for non-binary question types */}
                                    {score !== undefined && q.type !== 'mcq' && (
                                        <p className={cn("text-xs font-bold mt-1", scoreColor)}>
                                            Proficiency Score: {score}%
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Card>

            {/* Action Buttons - Hide on Print */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 print:hidden">
                <Button variant="outline" size="lg" onClick={handlePrint}>
                    <Download className="w-4 h-4 mr-2" />
                    Save Results (PDF)
                </Button>
                <Button size="lg" className="px-8">
                    Start Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>

            <div className="text-center pt-8 print:hidden">
                <button
                    onClick={onRetest}
                    className="text-sm text-muted-foreground hover:text-primary underline transition-colors"
                >
                    Take test again
                </button>
            </div>

            {/* Print Footer */}
            <div className="hidden print:block text-center text-xs text-muted-foreground border-t pt-4 mt-8">
                <p>English Chill Course - Placement Test Report</p>
                <p>Generated on {today}</p>
            </div>

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    .print\\:block {
                        display: block !important;
                    }
                    @page {
                        margin: 1.5cm;
                        size: A4;
                    }
                }
            `}</style>
        </div>
    );
}
