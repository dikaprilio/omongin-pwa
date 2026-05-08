'use client';

import { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, XCircle, Trophy, RotateCcw, Target, Zap, Brain } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuizByGlobalId, type TopicQuiz, type BankQuestion } from '../../../data/bank-soal';
import { findMeetingById } from '../../../data';

interface QuizClientPageProps {
    topicId: number;
}

type QuestionStatus = 'unanswered' | 'correct' | 'incorrect';

export default function QuizClientPage({ topicId }: QuizClientPageProps) {
    const [quiz, setQuiz] = useState<TopicQuiz | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [showResults, setShowResults] = useState(false);

    // Get meeting info for title
    const meetingInfo = useMemo(() => findMeetingById(topicId), [topicId]);

    useEffect(() => {
        async function loadQuiz() {
            setIsLoading(true);
            const data = await getQuizByGlobalId(topicId);
            if (data) {
                setQuiz(data);
                setAnswers(new Array(data.questions.length).fill(null));
            }
            setIsLoading(false);
        }
        loadQuiz();
    }, [topicId]);

    const currentQuestion = quiz?.questions[currentIndex];
    const totalQuestions = quiz?.questions.length || 0;
    const answeredCount = answers.filter(a => a !== null).length;
    const correctCount = answers.filter((a, i) =>
        a !== null && quiz?.questions[i]?.correctIndex === a
    ).length;

    // Question status for navigation dots
    const getQuestionStatus = (index: number): QuestionStatus => {
        if (answers[index] === null) return 'unanswered';
        return quiz?.questions[index]?.correctIndex === answers[index] ? 'correct' : 'incorrect';
    };

    const handleAnswer = (optionIndex: number) => {
        if (selectedAnswer !== null) return; // Already answered

        setSelectedAnswer(optionIndex);
        setShowExplanation(true);

        // Save answer
        const newAnswers = [...answers];
        newAnswers[currentIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(answers[currentIndex + 1]);
            setShowExplanation(answers[currentIndex + 1] !== null);
        } else {
            setShowResults(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedAnswer(answers[currentIndex - 1]);
            setShowExplanation(answers[currentIndex - 1] !== null);
        }
    };

    const handleJumpTo = (index: number) => {
        setCurrentIndex(index);
        setSelectedAnswer(answers[index]);
        setShowExplanation(answers[index] !== null);
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswers(new Array(totalQuestions).fill(null));
        setShowResults(false);
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return 'bg-emerald-100 text-emerald-700';
            case 'medium': return 'bg-amber-100 text-amber-700';
            case 'hard': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getDifficultyIcon = (difficulty: string) => {
        switch (difficulty) {
            case 'easy': return <Zap className="w-3 h-3" />;
            case 'medium': return <Target className="w-3 h-3" />;
            case 'hard': return <Brain className="w-3 h-3" />;
            default: return null;
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-gray-500 mt-3 text-sm">Loading soal...</p>
                </div>
            </div>
        );
    }

    if (!quiz || quiz.questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-sm mx-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <XCircle className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">Soal Belum Tersedia</h2>
                    <p className="text-gray-500 text-sm mb-6">Bank soal untuk topic ini sedang dalam pengembangan.</p>
                    <Link
                        href="/curriculum/adult-speak"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Kembali
                    </Link>
                </div>
            </div>
        );
    }

    // Results Screen
    if (showResults) {
        const percentage = Math.round((correctCount / totalQuestions) * 100);
        const grade = percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : percentage >= 40 ? 'C' : 'D';

        return (
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
                <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-4">
                        <Link
                            href="/curriculum/adult-speak"
                            className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-base sm:text-lg font-bold text-gray-900">Hasil Quiz</h1>
                            <p className="text-xs sm:text-sm text-gray-500">{meetingInfo?.meeting.title}</p>
                        </div>
                    </div>
                </header>

                <main className="max-w-lg mx-auto px-4 py-8 sm:py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center"
                    >
                        {/* Trophy */}
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${percentage >= 80 ? 'bg-gradient-to-br from-amber-400 to-amber-500' :
                            percentage >= 60 ? 'bg-gradient-to-br from-indigo-400 to-indigo-500' :
                                'bg-gradient-to-br from-gray-400 to-gray-500'
                            }`}>
                            <Trophy className="w-10 h-10 text-white" />
                        </div>

                        {/* Score */}
                        <div className="mb-6">
                            <div className="text-5xl font-bold text-gray-900 mb-1">{percentage}%</div>
                            <div className="text-gray-500">Skor Anda</div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-emerald-50 rounded-xl p-3">
                                <div className="text-2xl font-bold text-emerald-600">{correctCount}</div>
                                <div className="text-xs text-emerald-700">Benar</div>
                            </div>
                            <div className="bg-red-50 rounded-xl p-3">
                                <div className="text-2xl font-bold text-red-600">{totalQuestions - correctCount}</div>
                                <div className="text-xs text-red-700">Salah</div>
                            </div>
                            <div className="bg-indigo-50 rounded-xl p-3">
                                <div className="text-2xl font-bold text-indigo-600">{grade}</div>
                                <div className="text-xs text-indigo-700">Grade</div>
                            </div>
                        </div>

                        {/* Message */}
                        <p className="text-gray-600 text-sm mb-8">
                            {percentage >= 80 ? "Excellent! Kamu sudah menguasai materi ini dengan baik." :
                                percentage >= 60 ? "Good job! Masih ada beberapa area yang perlu diperbaiki." :
                                    "Keep practicing! Review materi dan coba lagi."}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleRestart}
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Coba Lagi
                            </button>
                            <Link
                                href="/curriculum/adult-speak"
                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
                            >
                                Pilih Topic Lain
                            </Link>
                        </div>
                    </motion.div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <Link
                                href="/curriculum/adult-speak"
                                className="p-2 -ml-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div>
                                <h1 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1">
                                    {meetingInfo?.meeting.title || `Topic ${topicId}`}
                                </h1>
                                <p className="text-xs text-gray-500">
                                    Soal {currentIndex + 1} dari {totalQuestions}
                                </p>
                            </div>
                        </div>

                        {/* Progress indicator */}
                        <div className="flex items-center gap-2">
                            <div className="text-xs font-medium text-gray-500">
                                {correctCount}/{answeredCount} benar
                            </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-indigo-600"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
            </header>

            {/* Question Content */}
            <main className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-6 sm:py-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex flex-col"
                    >
                        {/* Difficulty Badge */}
                        <div className="mb-4">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full ${getDifficultyColor(currentQuestion!.difficulty)}`}>
                                {getDifficultyIcon(currentQuestion!.difficulty)}
                                {currentQuestion!.difficulty.charAt(0).toUpperCase() + currentQuestion!.difficulty.slice(1)}
                            </span>
                        </div>

                        {/* Question */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-4">
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed">
                                {currentQuestion!.question}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="space-y-3 mb-4">
                            {currentQuestion!.options.map((option, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect = index === currentQuestion!.correctIndex;
                                const showCorrectness = showExplanation;

                                let optionStyle = 'bg-white border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50';
                                if (showCorrectness) {
                                    if (isCorrect) {
                                        optionStyle = 'bg-emerald-50 border-emerald-300';
                                    } else if (isSelected && !isCorrect) {
                                        optionStyle = 'bg-red-50 border-red-300';
                                    } else {
                                        optionStyle = 'bg-gray-50 border-gray-200 opacity-60';
                                    }
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        disabled={showExplanation}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionStyle} ${!showExplanation ? 'cursor-pointer' : 'cursor-default'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${showCorrectness && isCorrect
                                                ? 'bg-emerald-500 text-white'
                                                : showCorrectness && isSelected && !isCorrect
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {showCorrectness && isCorrect ? (
                                                    <CheckCircle2 className="w-4 h-4" />
                                                ) : showCorrectness && isSelected && !isCorrect ? (
                                                    <XCircle className="w-4 h-4" />
                                                ) : (
                                                    String.fromCharCode(65 + index)
                                                )}
                                            </div>
                                            <span className={`text-sm sm:text-base ${showCorrectness && isCorrect ? 'text-emerald-900 font-medium' :
                                                showCorrectness && isSelected && !isCorrect ? 'text-red-900' :
                                                    'text-gray-700'
                                                }`}>
                                                {option}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation */}
                        <AnimatePresence>
                            {showExplanation && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 mb-4"
                                >
                                    <h4 className="text-xs font-semibold text-indigo-800 uppercase tracking-wide mb-2">
                                        Penjelasan
                                    </h4>
                                    <p className="text-sm text-indigo-900 leading-relaxed">
                                        {currentQuestion!.explanation}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Navigation Footer */}
            <footer className="sticky bottom-0 bg-white border-t border-gray-100 shrink-0">
                <div className="max-w-2xl mx-auto px-4 py-4">
                    {/* Question Dots */}
                    <div className="flex justify-center gap-1.5 mb-4 flex-wrap max-h-16 overflow-auto scrollbar-hide px-2">
                        {quiz.questions.map((_, index) => {
                            const status = getQuestionStatus(index);
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleJumpTo(index)}
                                    className={`w-7 h-7 rounded-full text-xs font-medium transition-all ${currentIndex === index
                                        ? 'bg-indigo-600 text-white ring-2 ring-indigo-200 ring-offset-1'
                                        : status === 'correct'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : status === 'incorrect'
                                                ? 'bg-red-100 text-red-700'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                    </div>

                    {/* Nav Buttons */}
                    <div className="flex items-center justify-between gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-colors ${currentIndex === 0
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            <ChevronLeft className="w-4 h-4" />
                            <span className="hidden sm:inline">Sebelumnya</span>
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={!showExplanation}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-colors ${!showExplanation
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                }`}
                        >
                            <span>{currentIndex === totalQuestions - 1 ? 'Lihat Hasil' : 'Selanjutnya'}</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
