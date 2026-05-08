/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mic, Square, RotateCcw, Sparkles, AlertCircle,
    CheckCircle2, Type, SkipForward
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { StudentLayout } from '@/components/layouts/StudentLayout';

import { useSpeechPractice } from './hooks/useSpeechPractice';

export default function ClientPage() {
    // --- State ---
    const [inputText, setInputText] = useState('');
    const wordListRef = useRef<HTMLDivElement>(null);

    const {
        viewState,
        words,
        activeWordIndex,
        isListening,
        transcript,
        recognitionSupported,
        actions: {
            setupPractice,
            toggleListening,
            skipWord,
            resetPractice,
            tryAgain
        }
    } = useSpeechPractice();

    const startPractice = useCallback(() => {
        if (!inputText.trim()) return;
        setupPractice(inputText);
    }, [inputText, setupPractice]);

    // Handle scroll to active word
    useEffect(() => {
        if (viewState === 'practicing' && wordListRef.current) {
            const activeEl = wordListRef.current.querySelector('[data-active="true"]');
            if (activeEl) {
                activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [activeWordIndex, viewState]);

    // --- Render ---
    return (
        <StudentLayout>
        <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 bg-gray-50 flex flex-col">

            <main className="flex-1 pt-24 flex flex-col items-center px-4 pb-12 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xs font-bold mb-3 shadow-md">
                        <Type className="w-3 h-3" />
                        Custom Practice
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">
                        Speaking Practice
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
                        Paste any text you want to practice. Our AI will highlight each word as you speak it correctly.
                    </p>
                </motion.div>

                {!recognitionSupported && (
                    <div className="w-full bg-red-50 text-red-700 p-4 rounded-xl mb-6 flex items-start gap-3 border border-red-100">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold">Browser Not Supported</p>
                            <p className="text-sm mt-1">Your browser does not support the Web Speech API required for this feature. Please try using Google Chrome, Microsoft Edge, or Safari.</p>
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {/* --- SETUP VIEW --- */}
                    {viewState === 'setup' && (
                        <motion.div
                            key="setup"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100"
                        >
                            <label className="block text-sm font-bold text-gray-700 mb-2">
                                What do you want to practice saying?
                            </label>
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Paste a paragraph, a difficult sentence, or an interview answer here..."
                                className="w-full h-48 p-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none text-gray-800 text-lg leading-relaxed mb-6"
                            />

                            <div className="flex justify-end border-t pt-4">
                                <button
                                    onClick={startPractice}
                                    disabled={!inputText.trim() || !recognitionSupported}
                                    className={cn(
                                        "flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all",
                                        (!inputText.trim() || !recognitionSupported) ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
                                    )}
                                >
                                    <Sparkles className="w-5 h-5" />
                                    Start Practicing
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* --- PRACTICING VIEW --- */}
                    {viewState === 'practicing' && (
                        <motion.div
                            key="practicing"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full flex flex-col h-[60vh] max-h-[600px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                        >
                            {/* Header Progress */}
                            <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-500">
                                    Progress: <span className="text-blue-600">{activeWordIndex}</span> / {words.length} words
                                </div>
                                <div className="w-full max-w-[150px] bg-gray-200 h-2 rounded-full overflow-hidden ml-4">
                                    <div
                                        className="h-full bg-blue-600 transition-all duration-300"
                                        style={{ width: `${(activeWordIndex / words.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Text Area */}
                            <div
                                ref={wordListRef}
                                className="flex-1 p-6 md:p-10 overflow-y-auto"
                            >
                                <div className="flex flex-wrap gap-x-2 gap-y-4 text-2xl md:text-4xl font-medium leading-loose md:leading-loose">
                                    {words.map((word, index) => {
                                        const isActive = index === activeWordIndex;
                                        const isPast = index < activeWordIndex;
                                        const isFuture = index > activeWordIndex;

                                        return (
                                            <span
                                                key={index}
                                                data-active={isActive}
                                                className={cn(
                                                    "transition-all duration-300 rounded px-1",
                                                    isPast && "text-gray-400 font-normal",
                                                    isActive && "text-blue-600 font-bold bg-blue-50 ring-4 ring-blue-50 scale-110 relative z-10 mx-2",
                                                    isFuture && "text-gray-800"
                                                )}
                                            >
                                                {word}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Bottom Controls */}
                            <div className="bg-gray-50 p-6 border-t flex flex-col items-center">

                                <div className="text-sm text-gray-500 mb-4 h-6 text-center italic">
                                    {isListening ? (
                                        transcript ? `"${transcript}"` : "Listening..."
                                    ) : "Click the microphone to start checking"}
                                </div>

                                <div className="flex items-center gap-4 w-full justify-center relative">
                                    <button
                                        onClick={resetPractice}
                                        className="absolute left-0 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                                    >
                                        Exit
                                    </button>

                                    <button
                                        onClick={toggleListening}
                                        className={cn(
                                            "w-20 h-20 rounded-full flex items-center justify-center transition-all transform shadow-lg",
                                            isListening
                                                ? "bg-red-500 hover:bg-red-600 animate-pulse scale-105"
                                                : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                                        )}
                                    >
                                        {isListening ? (
                                            <Square className="w-8 h-8 text-white fill-current" />
                                        ) : (
                                            <Mic className="w-8 h-8 text-white" />
                                        )}
                                    </button>

                                    <button
                                        onClick={skipWord}
                                        className="absolute right-0 flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                                        title="Skip this word"
                                    >
                                        Skip <SkipForward className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* --- DONE VIEW --- */}
                    {viewState === 'done' && (
                        <motion.div
                            key="done"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-xl text-center border border-gray-100"
                        >
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-12 h-12 text-green-600" />
                            </div>

                            <h2 className="text-3xl font-black text-gray-900 mb-2">Great Job!</h2>
                            <p className="text-gray-500 mb-8">You successfully pronounced all {words.length} words correctly.</p>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={tryAgain}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-colors"
                                >
                                    <RotateCcw className="w-5 h-5" /> Practice Again
                                </button>
                                <button
                                    onClick={resetPractice}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-colors"
                                >
                                    New Text
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </main>
        </div>
        </StudentLayout>
    );
}
