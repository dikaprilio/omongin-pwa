import React, { useState, useEffect, useCallback } from 'react';
import {
    placementQuestions,
    PlacementQuestion
} from '@/data/placement-questions';
import {
    CATState,
    initialCATState,
    selectNextQuestion,
    updateAbilityEstimate
} from '@/lib/cat-engine';
import MCQQuestion from '@/components/placement-test/MCQQuestion';
import PronunciationQuestion from '@/components/placement-test/PronunciationQuestion';
import TestResults from '@/components/placement-test/TestResults';
import CATDebugOverlay from '@/components/placement-test/CATDebugOverlay';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlacementTestContainer() {
    const [catState, setCatState] = useState<CATState>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('placement-cat-state');
            if (saved) return JSON.parse(saved);
        }
        return initialCATState;
    });
    const [currentQuestion, setCurrentQuestion] = useState<PlacementQuestion | null>(null);
    const [isThinking, setIsThinking] = useState(false);
    const [testPhase, setTestPhase] = useState<'mcq' | 'argument' | 'pronunciation' | 'complete'>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('placement-test-phase');
            if (saved) return saved as any;
        }
        return 'mcq';
    });

    // Configuration for test structure
    const MAX_MCQ_QUESTIONS = 25;
    const MAX_PRONUNCIATION_QUESTIONS = 5;

    // Computed progress
    const totalSteps = MAX_MCQ_QUESTIONS + MAX_PRONUNCIATION_QUESTIONS;
    const currentStep = catState.history.length + 1;
    const progress = Math.min(100, (catState.history.length / totalSteps) * 100);

    // Save state on change
    useEffect(() => {
        localStorage.setItem('placement-cat-state', JSON.stringify(catState));
    }, [catState]);

    useEffect(() => {
        localStorage.setItem('placement-test-phase', testPhase);
    }, [testPhase]);

    // Initialize first question
    useEffect(() => {
        if (!currentQuestion && testPhase !== 'complete') {
            loadNextQuestion();
        }
    }, []);

    const loadNextQuestion = useCallback((overrideState?: CATState) => {
        const stateToUse = overrideState || catState;
        setIsThinking(true);

        // Simulate thinking for effect
        setTimeout(() => {
            const getCount = (type: string) => stateToUse.history.filter(h => {
                const q = placementQuestions.find(q => q.id === h.questionId);
                return q?.type === type;
            }).length;

            const counts = {
                mcq: getCount('mcq'),
                pronunciation: getCount('pronunciation'),
            };

            // 1. Identify which categories are still available
            const availableTypes: string[] = [];
            // Prioritize MCQ first, then Pronunciation? Or mix? 
            // Usually placement tests do Section 1 (Reading/Grammar) -> Section 2 (Speaking)
            // Let's enforce phase order: MCQ first, then Pronunciation.

            if (counts.mcq < MAX_MCQ_QUESTIONS) {
                availableTypes.push('mcq');
            } else if (counts.pronunciation < MAX_PRONUNCIATION_QUESTIONS) {
                availableTypes.push('pronunciation');
            }

            if (availableTypes.length === 0) {
                setTestPhase('complete');
                setCurrentQuestion(null);
                setIsThinking(false);
                return;
            }

            // 2. Adaptive Selection
            const targetDifficulty = stateToUse.currentDifficultyIndex + 1;
            const currentType = availableTypes[0]; // Strict order

            // Find all questions in available types that haven't been answered
            const pool = placementQuestions.filter(q =>
                q.type === currentType &&
                !stateToUse.answeredQuestions.includes(q.id)
            );

            if (pool.length === 0) {
                // Should not happen with huge bank, but if it does, move to next phase or finish
                if (currentType === 'mcq' && counts.pronunciation < MAX_PRONUNCIATION_QUESTIONS) {
                    // Skip to pronunciation
                    // Recursive call effectively
                    // For now just handle simple case: if pool empty, try next type or finish
                }

                // If we ran out of MCQs but haven't hit limit, we might have to stop or switch
                // Let's just finish if we can't find a question for the current phase
                setTestPhase('complete');
                setCurrentQuestion(null);
                setIsThinking(false);
                return;
            }

            // Group by difficulty distance
            const sortedPool = [...pool].sort((a, b) => {
                const distA = Math.abs(a.difficulty - targetDifficulty);
                const distB = Math.abs(b.difficulty - targetDifficulty);
                return distA - distB;
            });

            const minDistance = Math.abs(sortedPool[0].difficulty - targetDifficulty);
            const candidates = sortedPool.filter(q => Math.abs(q.difficulty - targetDifficulty) === minDistance);

            // Pick a random candidate
            const selectedQ = candidates[Math.floor(Math.random() * candidates.length)];

            const phaseMap: Record<string, 'mcq' | 'pronunciation'> = {
                mcq: 'mcq',
                pronunciation: 'pronunciation'
            };

            setTestPhase(phaseMap[selectedQ.type]);
            setCurrentQuestion(selectedQ);
            setIsThinking(false);

        }, 800);
    }, [catState]);

    const handleAnswer = (isCorrect: boolean, score: number = 0) => {
        if (!currentQuestion) return;

        // Update CAT state
        // Dynamic thresholds: make it harder for advanced, easier for beginners
        let threshold = 60;
        if (currentQuestion.difficulty >= 4) threshold = 80;
        else if (currentQuestion.difficulty === 3) threshold = 70;

        const effectiveIsCorrect = currentQuestion.type === 'mcq' ? isCorrect : score >= threshold;

        const newState = updateAbilityEstimate(
            catState,
            currentQuestion.difficulty,
            effectiveIsCorrect
        );

        // Add to history with specific metadata
        newState.history = [
            ...catState.history,
            {
                questionId: currentQuestion.id,
                isCorrect: effectiveIsCorrect,
                difficulty: currentQuestion.difficulty,
                userResponse: { score }
            }
        ];

        // Mark as answered
        newState.answeredQuestions = [...catState.answeredQuestions, currentQuestion.id];

        setCatState(newState);
        loadNextQuestion(newState);
    };

    const handleRetest = () => {
        // Clear persistence
        localStorage.removeItem('placement-cat-state');
        localStorage.removeItem('placement-test-phase');
        localStorage.removeItem('placement-auth'); // Optional: keep auth or clear it? Keeping auth seems friendlier.

        setCatState(initialCATState);
        setTestPhase('mcq');
        setCurrentQuestion(null);
        // Effect will trigger loadNextQuestion since state was reset
    };

    if (testPhase === 'complete') {
        return (
            <>
                <TestResults
                    abilityEstimate={catState.abilityEstimate}
                    history={catState.history}
                    onRetest={handleRetest}
                />
                <CATDebugOverlay
                    catState={catState}
                    currentQuestion={null}
                    isThinking={false}
                />
            </>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            {/* Header / Progress */}
            <div className="mb-10 space-y-4">
                <div className="flex justify-between items-end text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                        Question {Math.min(currentStep, totalSteps)} of {totalSteps}
                    </span>
                    <span className="uppercase tracking-widest text-xs">
                        {testPhase === 'mcq' ? 'Grammar & Vocabulary' :
                            testPhase === 'argument' ? 'Critical Reasoning' :
                                'Speaking & Pronunciation'}
                    </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Question Area */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {isThinking || !currentQuestion ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-20 gap-4"
                        >
                            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                            <p className="text-muted-foreground animate-pulse">Adapting difficulty...</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentQuestion.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {currentQuestion.type === 'mcq' && (
                                <MCQQuestion
                                    question={currentQuestion}
                                    onAnswer={(isCorrect) => handleAnswer(isCorrect)}
                                />
                            )}
                            {currentQuestion.type === 'pronunciation' && (
                                <PronunciationQuestion
                                    question={currentQuestion}
                                    onAnswer={(isCorrect, score) => handleAnswer(isCorrect, score)}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Development-only CAT Debug Overlay */}
            <CATDebugOverlay
                catState={catState}
                currentQuestion={currentQuestion}
                isThinking={isThinking}
            />
        </div>
    );
}
