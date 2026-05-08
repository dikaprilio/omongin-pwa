"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, X, Keyboard, Settings2, Type } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
interface RSVPSettings {
    wpm: number;
    fontSize: 'sm' | 'md' | 'lg';
}

export interface RSVPReaderProps {
    text: string;
    defaultWpm?: number;
    defaultFontSize?: 'sm' | 'md' | 'lg';
    onComplete?: () => void;
    autoPlay?: boolean;
    nonReplayable?: boolean;
    showSetup?: boolean;
    onExit?: () => void;
    drillMode?: boolean; // Hides replay, WPM controls, exit button
    className?: string;
}

const WPM_PRESETS = [
    { label: 'Beginner', value: 200, color: 'bg-green-500' },
    { label: 'Intermediate', value: 350, color: 'bg-blue-500' },
    { label: 'Advanced', value: 500, color: 'bg-orange-500' },
    { label: 'Pro', value: 700, color: 'bg-red-500' },
];

const FONT_SIZES = {
    sm: { label: 'Small', class: 'text-4xl md:text-5xl' },
    md: { label: 'Medium', class: 'text-5xl md:text-7xl' },
    lg: { label: 'Large', class: 'text-6xl md:text-8xl' },
};

export const RSVPReader: React.FC<RSVPReaderProps> = ({
    text,
    defaultWpm = 350,
    defaultFontSize = 'md',
    onComplete,
    autoPlay = false,
    nonReplayable = false,
    showSetup = false,
    drillMode = false,
    onExit,
    className,
}) => {
    const [settings, setSettings] = useState<RSVPSettings>({ wpm: defaultWpm, fontSize: defaultFontSize });
    const [isReading, setIsReading] = useState(!showSetup);
    const [customWpm, setCustomWpm] = useState(false);

    // Reading State
    const [words, setWords] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [hasCompleted, setHasCompleted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Parse text into words
    useEffect(() => {
        const splitWords = text.split(/\s+/).filter(w => w.length > 0);
        setWords(splitWords);
        setCurrentIndex(0);
        setHasCompleted(false);
        if (autoPlay && !showSetup) setIsPlaying(true);
    }, [text, autoPlay, showSetup]);

    const intervalMs = 60000 / settings.wpm;

    // --- Playback Logic ---
    const stop = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsPlaying(false);
    }, []);

    const handleCompletion = useCallback(() => {
        stop();
        setHasCompleted(true);
        if (onComplete) onComplete();
    }, [stop, onComplete]);

    const togglePlay = useCallback(() => {
        if (hasCompleted && nonReplayable) return;
        if (isPlaying) {
            stop();
        } else {
            if (currentIndex >= words.length - 1) setCurrentIndex(0);
            setIsPlaying(true);
        }
    }, [isPlaying, stop, currentIndex, words.length, hasCompleted, nonReplayable]);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev >= words.length - 1) {
                        handleCompletion();
                        return prev;
                    }
                    return prev + 1;
                });
            }, intervalMs);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isPlaying, intervalMs, words.length, handleCompletion]);

    // --- Keyboard Shortcuts (only in non-drill mode) ---
    useEffect(() => {
        if (!isReading) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                togglePlay();
            } else if (!drillMode && e.code === 'ArrowLeft') {
                setSettings(s => ({ ...s, wpm: Math.max(100, s.wpm - 50) }));
            } else if (!drillMode && e.code === 'ArrowRight') {
                setSettings(s => ({ ...s, wpm: Math.min(1000, s.wpm + 50) }));
            } else if (!drillMode && e.code === 'Escape' && onExit) {
                exitReading();
            } else if (e.key.toLowerCase() === 'f') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => { });
                } else {
                    document.exitFullscreen();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isReading, togglePlay, onExit, drillMode]);

    // --- Actions ---
    const startReading = () => {
        if (words.length === 0) return;
        setCurrentIndex(0);
        setIsPlaying(autoPlay);
        setIsReading(true);
    };

    const exitReading = () => {
        stop();
        if (onExit) onExit();
        else setIsReading(false);
    };

    const setWpm = (wpm: number) => {
        setSettings(s => ({ ...s, wpm }));
        setCustomWpm(false);
    };

    // --- ORP Logic ---
    const currentWord = words[currentIndex] || "";
    const length = currentWord.length;
    const orpIndex = length <= 1 ? 0 : length >= 2 && length <= 5 ? 1 : Math.floor(length * 0.35);
    const leftPart = currentWord.slice(0, orpIndex);
    const centerChar = currentWord[orpIndex];
    const rightPart = currentWord.slice(orpIndex + 1);
    const progress = ((currentIndex + 1) / Math.max(words.length, 1)) * 100;

    // --- Render Setup Mode ---
    if (showSetup && !isReading) {
        return (
            <div className={cn("p-6 bg-white rounded-2xl shadow-lg border border-gray-100", className)}>
                {/* WPM Presets */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-3">Reading Speed</label>
                    <div className="flex flex-wrap gap-2">
                        {WPM_PRESETS.map(preset => (
                            <button
                                key={preset.value}
                                onClick={() => setWpm(preset.value)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg font-bold text-xs transition-all border-2",
                                    settings.wpm === preset.value && !customWpm
                                        ? `${preset.color} text-white border-transparent shadow-md`
                                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                )}
                            >
                                {preset.label} ({preset.value})
                            </button>
                        ))}
                        <button
                            onClick={() => setCustomWpm(true)}
                            className={cn(
                                "px-3 py-1.5 rounded-lg font-bold text-xs transition-all border-2",
                                customWpm
                                    ? "bg-gray-800 text-white border-transparent"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                            )}
                        >
                            <Settings2 className="w-3 h-3 inline mr-1" /> Custom
                        </button>
                    </div>

                    {/* Custom WPM Slider */}
                    <AnimatePresence>
                        {customWpm && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="range"
                                        min={100}
                                        max={1000}
                                        step={25}
                                        value={settings.wpm}
                                        onChange={(e) => setSettings(s => ({ ...s, wpm: Number(e.target.value) }))}
                                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <span className="text-xl font-black text-blue-600 w-16 text-right">{settings.wpm}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Font Size */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                        <Type className="w-4 h-4 inline mr-1" /> Font Size
                    </label>
                    <div className="flex gap-2">
                        {(Object.keys(FONT_SIZES) as Array<keyof typeof FONT_SIZES>).map(size => (
                            <button
                                key={size}
                                onClick={() => setSettings(s => ({ ...s, fontSize: size }))}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg font-bold text-xs transition-all border-2",
                                    settings.fontSize === size
                                        ? "bg-gray-800 text-white border-transparent"
                                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                )}
                            >
                                {FONT_SIZES[size].label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Start Button */}
                <button
                    onClick={startReading}
                    disabled={words.length === 0}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    <Play className="w-5 h-5 fill-current" /> Start Reading
                </button>
            </div>
        );
    }

    // --- Render Reading Mode (Fullscreen Overlay) ---
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 z-50 bg-white flex flex-col", className)}
        >
            {/* Exit Button - hidden in drill mode */}
            {onExit && !drillMode && (
                <button
                    onClick={exitReading}
                    className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>
            )}

            {/* Word Display - ORP Centered */}
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="relative flex items-center justify-center">
                    {/* Center guide line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2"></div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rotate-45"></div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rotate-45"></div>

                    {/* Word display */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.03 }}
                        className={cn(
                            "font-mono tracking-wide leading-none flex items-baseline",
                            FONT_SIZES[settings.fontSize].class
                        )}
                    >
                        <span
                            className="text-gray-600 text-right inline-block"
                            style={{ width: '45vw', maxWidth: '400px' }}
                        >
                            {leftPart}
                        </span>
                        <span className="text-blue-600 font-black mx-[2px] relative">
                            {centerChar}
                        </span>
                        <span
                            className="text-gray-600 text-left inline-block"
                            style={{ width: '45vw', maxWidth: '400px' }}
                        >
                            {rightPart}
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-6">
                    <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                <div className="max-w-xl mx-auto flex items-center justify-between gap-4">
                    {/* Word Count */}
                    <div className="text-sm font-mono text-gray-500">
                        {currentIndex + 1} / {words.length}
                    </div>

                    {/* Playback Controls - minimal in drill mode */}
                    <div className="flex items-center gap-4">
                        {/* Replay button - hidden in drill mode */}
                        {!drillMode && !(nonReplayable && hasCompleted) && (
                            <button
                                onClick={() => { setCurrentIndex(0); setIsPlaying(false); setHasCompleted(false); }}
                                className="p-3 rounded-xl bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
                                disabled={isPlaying}
                            >
                                <RotateCcw className="w-5 h-5" />
                            </button>
                        )}

                        <button
                            onClick={togglePlay}
                            disabled={nonReplayable && hasCompleted}
                            className="p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current translate-x-0.5" />}
                        </button>
                    </div>

                    {/* WPM Display - show only value in drill mode, with controls in non-drill */}
                    {drillMode ? (
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black text-blue-600">{settings.wpm}</span>
                            <span className="text-xs text-gray-400">WPM</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setSettings(s => ({ ...s, wpm: Math.max(100, s.wpm - 50) }))}
                                className="w-8 h-8 rounded-lg bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-600 font-bold text-lg"
                            >
                                -
                            </button>
                            <span className="text-xl font-black text-blue-600 w-16 text-center">{settings.wpm}</span>
                            <button
                                onClick={() => setSettings(s => ({ ...s, wpm: Math.min(1000, s.wpm + 50) }))}
                                className="w-8 h-8 rounded-lg bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-600 font-bold text-lg"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>

                {/* Keyboard Shortcuts Hint - hidden in drill mode */}
                {!drillMode && (
                    <div className="mt-4 text-center">
                        <Keyboard className="w-4 h-4 inline mr-2 text-gray-400" />
                        <span className="text-xs text-gray-400">
                            <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-mono mx-1">Space</kbd> Play/Pause ·
                            <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-mono mx-1">←/→</kbd> Speed ·
                            <kbd className="px-1.5 py-0.5 bg-white border rounded text-[10px] font-mono mx-1">F</kbd> Fullscreen
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
