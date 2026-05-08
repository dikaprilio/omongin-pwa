'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronRight, ChevronLeft, Menu } from 'lucide-react';
import { useState } from 'react';
import { QuizQuestion } from '../data/types';

interface QuizModuleProps {
    questions: QuizQuestion[];
    meetingTitle: string;
}

export default function QuizModule({ questions, meetingTitle }: QuizModuleProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set());
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const question = questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctIndex;

    const handleSelectAnswer = (index: number) => {
        if (showResult) return;
        setSelectedAnswer(index);
        setShowResult(true);
        if (index === question.correctIndex) {
            setScore(score + 1);
        }
        setCompletedQuestions(prev => new Set(prev).add(currentQuestion));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            setIsComplete(true);
        }
    };

    const handleJumpToQuestion = (index: number) => {
        setCurrentQuestion(index);
        setSelectedAnswer(null);
        setShowResult(false);
        if (completedQuestions.has(index)) {
            // Logic to show result if already completed? 
            // For now, let's keep it simple: restart state for that question or just show as incomplete 
            // actually if it's completed we might want to store the answer. 
            // But for this simple implementation, let's just reset the detailed view
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setIsComplete(false);
        setCompletedQuestions(new Set());
    };

    // Completion Screen
    if (isComplete) {
        const percentage = Math.round((score / questions.length) * 100);
        const isPassing = percentage >= 75;

        return (
            <div className="h-[100vh] w-full flex items-center justify-center bg-slate-50 p-6">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full text-center border border-slate-100"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-8 ${isPassing ? 'bg-emerald-100' : 'bg-amber-100'
                            }`}
                    >
                        <Trophy
                            className={`w-12 h-12 ${isPassing ? 'text-emerald-600' : 'text-amber-600'}`}
                        />
                    </motion.div>

                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        {isPassing ? 'Excellent Work! 🎉' : 'Keep Practicing! 💪'}
                    </h2>

                    <div className="my-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <span
                            className={`text-6xl font-black ${isPassing ? 'text-emerald-600' : 'text-amber-600'
                                }`}
                        >
                            {percentage}%
                        </span>
                        <p className="text-slate-500 mt-2 font-medium">
                            You got {score} out of {questions.length} correct
                        </p>
                    </div>

                    <button
                        onClick={handleRestart}
                        className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Try Again
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex h-full w-full overflow-hidden bg-slate-50 relative">
            {/* COLLAPSIBLE SIDEBAR NAVIGATION */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 320, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="h-full bg-white border-r border-slate-200 flex flex-col shrink-0 z-20 shadow-2xl absolute md:relative overflow-hidden"
                    >
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 leading-tight">Map</h2>
                                <p className="text-slate-500 text-sm mt-1">Select Question</p>
                            </div>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {questions.map((_, index) => {
                                const isActive = currentQuestion === index;
                                const isDone = completedQuestions.has(index);
                                return (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            handleJumpToQuestion(index);
                                            // On mobile, close sidebar after selection
                                            if (window.innerWidth < 768) setIsSidebarOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-all ${isActive
                                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm'
                                            : 'hover:bg-slate-50 text-slate-600 border border-transparent'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${isActive ? 'bg-indigo-600 text-white border-indigo-600' :
                                            isDone ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                                'bg-slate-100 text-slate-500 border-slate-200'
                                            }`}>
                                            {isDone ? <CheckCircle className="w-3 h-3" /> : index + 1}
                                        </div>
                                        <span>Question {index + 1}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative transition-all duration-300">
                {/* Compact Header for Navigation (Hide redundant title on mobile) */}
                <div className="px-4 py-3 md:px-8 md:py-4 bg-white border-b border-slate-200 flex justify-between items-center z-10 shadow-sm">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className={`p-2 rounded-lg transition-colors ${isSidebarOpen ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-100 text-slate-600'}`}
                            title="Toggle Question Map"
                        >
                            <Menu className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                        <div className="min-w-0">
                            <h2 className="font-bold text-slate-900 text-sm md:text-lg hidden sm:block truncate">{meetingTitle}</h2>
                            <p className="text-[10px] md:text-sm text-slate-500 font-medium">Question {currentQuestion + 1} of {questions.length}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                        <div className="text-right hidden xs:block">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">Score: {score}</span>
                        </div>
                        <div className="w-20 md:w-32 h-1.5 md:h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-indigo-500 transition-all duration-500"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-32 flex flex-col items-center bg-slate-50/50">
                    <div className="w-full max-w-7xl my-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="w-full"
                            >
                                {/* Tag/Category (Using Type 1, 2 etc inferred from title or generic) */}
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                        Multiple Choice
                                    </span>
                                </div>

                                {/* Question Text */}
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight">
                                    {question.question}
                                </h3>

                                {/* Options Grid */}
                                <div className="grid gap-2">
                                    {question.options.map((option, index) => {
                                        let optionStyle = 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md';
                                        let icon = null;

                                        if (showResult) {
                                            if (index === question.correctIndex) {
                                                optionStyle = 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500';
                                                icon = <CheckCircle className="w-4 h-4 text-emerald-600" />;
                                            } else if (index === selectedAnswer && !isCorrect) {
                                                optionStyle = 'bg-red-50 border-red-500 ring-1 ring-red-500';
                                                icon = <XCircle className="w-4 h-4 text-red-600" />;
                                            } else {
                                                optionStyle = 'bg-slate-50 border-slate-200 opacity-60';
                                            }
                                        } else if (selectedAnswer === index) {
                                            optionStyle = 'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500';
                                        }

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleSelectAnswer(index)}
                                                disabled={showResult}
                                                className={`group relative w-full flex items-center p-2.5 md:p-3 rounded-lg border text-left transition-all duration-200 ${optionStyle}`}
                                            >
                                                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 transition-colors ${showResult && index === question.correctIndex ? 'bg-emerald-200 text-emerald-800' :
                                                    showResult && index === selectedAnswer && !isCorrect ? 'bg-red-200 text-red-800' :
                                                        'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                                                    }`}>
                                                    {String.fromCharCode(65 + index)}
                                                </div>
                                                <span className={`flex-1 font-medium text-sm md:text-base ${showResult && index === question.correctIndex ? 'text-emerald-900' : 'text-slate-700'}`}>
                                                    {option}
                                                </span>
                                                {icon}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Constant Height Container for Explanation to prevent shift */}
                                <div className="mt-3 min-h-[80px]">
                                    <AnimatePresence>
                                        {showResult && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="bg-blue-50/50 border border-blue-100 p-4 rounded-lg flex gap-3"
                                            >
                                                <div className="bg-blue-100 p-1.5 rounded-full h-fit shrink-0">
                                                    <Trophy className="w-4 h-4 text-blue-600" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-blue-900 mb-0.5 text-sm">Explanation</p>
                                                    <p className="text-blue-800/80 leading-relaxed text-sm">{question.explanation}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Fixed Bottom Bar for Next Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-slate-200 flex justify-end z-30">
                    <button
                        onClick={handleNext}
                        disabled={!showResult}
                        className="px-8 py-3 bg-slate-900 text-white text-lg rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                        <span>{currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
                        <CheckCircle className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
