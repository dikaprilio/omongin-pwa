"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, ArrowLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { StudentLayout } from "@/components/layouts/StudentLayout";

const PRESETS = [30, 60, 90, 120];

// Loading fallback
function TimerSkeleton() {
    return (
        <div className="h-screen bg-white flex flex-col items-center justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gray-100 border-t-gray-300 animate-spin" />
        </div>
    );
}

function TimerContent() {
    const searchParams = useSearchParams();
    const prompt = searchParams.get("prompt") || "Your topic";
    
    const [duration, setDuration] = useState(60);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(t => t - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const toggleTimer = useCallback(() => {
        if (!hasStarted) setHasStarted(true);
        setIsRunning(r => !r);
    }, [hasStarted]);

    const resetTimer = useCallback(() => {
        setIsRunning(false);
        setTimeLeft(duration);
        setHasStarted(false);
    }, [duration]);

    const setPreset = useCallback((seconds: number) => {
        setDuration(seconds);
        setTimeLeft(seconds);
        setIsRunning(false);
        setHasStarted(false);
    }, []);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, "0")}`;
    };

    const progress = timeLeft / duration;

    return (
        <StudentLayout>
        <div className="h-screen bg-white flex flex-col overflow-hidden">

            {/* Back button */}
            <Link 
                href="/impromptu" 
                className="fixed top-24 left-4 sm:left-6 z-50 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-white/80 backdrop-blur px-3 py-2 rounded-full text-sm font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </Link>

            {/* Main */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 pt-20">
                
                {/* Blue arrow indicator */}
                <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>

                {/* Prompt Display */}
                <div className="text-center mb-6 sm:mb-8">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Speak about</p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 max-w-lg mx-auto leading-tight px-4">
                        {prompt}
                    </h1>
                </div>

                {/* Timer Circle */}
                <div className="relative mb-6 sm:mb-8">
                    {/* Outer glow when running */}
                    {isRunning && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-blue-100"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    )}
                    
                    {/* SVG Circle */}
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                        <svg className="w-full h-full -rotate-90">
                            {/* Background track */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                className="text-gray-100"
                            />
                            {/* Progress arc */}
                            <motion.circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="283%"
                                strokeDashoffset={`${283 * (1 - progress)}%`}
                                className={cn(
                                    "transition-all duration-1000 ease-linear",
                                    timeLeft <= 10 ? "text-red-500" : "text-blue-600"
                                )}
                            />
                        </svg>
                        
                        {/* Time Display */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <motion.span 
                                className={cn(
                                    "text-5xl sm:text-6xl font-mono font-medium tabular-nums tracking-tight",
                                    timeLeft <= 10 ? "text-red-500" : "text-gray-800"
                                )}
                                animate={timeLeft <= 10 && timeLeft > 0 ? { scale: [1, 1.05, 1] } : {}}
                                transition={{ duration: 0.5, repeat: timeLeft <= 10 ? Infinity : 0 }}
                            >
                                {formatTime(timeLeft)}
                            </motion.span>
                            <span className="text-sm text-gray-400 mt-1">
                                {isRunning ? "running" : hasStarted ? "paused" : "ready"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-4">
                    {/* Main buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleTimer}
                            disabled={timeLeft === 0}
                            className={cn(
                                "w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg",
                                timeLeft === 0
                                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                                    : isRunning
                                        ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                            )}
                        >
                            {isRunning ? (
                                <Pause className="w-6 h-6 fill-current" />
                            ) : (
                                <Play className="w-6 h-6 ml-1 fill-current" />
                            )}
                        </button>
                        
                        <button
                            onClick={resetTimer}
                            className="w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-all"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Time Presets */}
                    <div className="flex items-center gap-2">
                        {PRESETS.map((seconds) => (
                            <button
                                key={seconds}
                                onClick={() => setPreset(seconds)}
                                disabled={isRunning}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    duration === seconds
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                                    isRunning && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {seconds < 60 ? `${seconds}s` : seconds === 60 ? "1m" : `${seconds / 60}m`}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time's up message */}
                {timeLeft === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-red-500 font-medium text-lg">Time&apos;s up! Great job!</p>
                        <div className="flex gap-3 mt-4 justify-center">
                            <Link 
                                href="/impromptu" 
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Spin Again
                            </Link>
                        </div>
                    </motion.div>
                )}
            </main>

            {/* Footer tip */}
            <footer className="w-full py-3 px-4 text-center border-t border-gray-100">
                <p className="text-xs text-gray-400">
                    Speak confidently about the topic. No right or wrong answers.
                </p>
            </footer>
        </div>
        </StudentLayout>
    );
}

export default function TimerPage() {
    return (
        <Suspense fallback={<TimerSkeleton />}>
            <TimerContent />
        </Suspense>
    );
}
