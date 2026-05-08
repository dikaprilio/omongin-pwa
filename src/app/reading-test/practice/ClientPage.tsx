"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Play, Pause, RotateCcw, X, Maximize2, Keyboard,
    Zap, BookOpen, ArrowLeft, Sparkles, Settings2, Type
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { StudentLayout } from '@/components/layouts/StudentLayout';

// --- Types ---
interface RSVPSettings {
    wpm: number;
    fontSize: 'sm' | 'md' | 'lg';
}

const DEFAULT_SETTINGS: RSVPSettings = {
    wpm: 350,
    fontSize: 'md',
};

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

const PLACEHOLDER_TEXT = `The quick brown fox jumps over the lazy dog. This is a sample text to test your reading speed. You can replace this with any text you want to practice with. The more you practice, the faster you'll become at reading English!`;

// --- Utility: Load/Save Settings ---
const loadSettings = (): RSVPSettings => {
    if (typeof window === 'undefined') return DEFAULT_SETTINGS;
    try {
        const saved = localStorage.getItem('rsvp-settings');
        return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch { return DEFAULT_SETTINGS; }
};

const saveSettings = (settings: RSVPSettings) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('rsvp-settings', JSON.stringify(settings));
};

// --- Main Page Component ---
export default function RSVPPracticePage() {
    // --- State ---
    const [text, setText] = useState(PLACEHOLDER_TEXT);
    const [settings, setSettings] = useState<RSVPSettings>(DEFAULT_SETTINGS);
    const [isReading, setIsReading] = useState(false);
    const [customWpm, setCustomWpm] = useState(false);

    // Reading State
    const [words, setWords] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Load settings on mount
    useEffect(() => {
        setSettings(loadSettings());
    }, []);

    // Save settings on change
    useEffect(() => {
        saveSettings(settings);
    }, [settings]);

    // Parse text into words
    useEffect(() => {
        const splitWords = text.split(/\s+/).filter(w => w.length > 0);
        setWords(splitWords);
        setCurrentIndex(0);
    }, [text]);

    const intervalMs = 60000 / settings.wpm;

    // --- Playback Logic ---
    const stop = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsPlaying(false);
    }, []);

    const togglePlay = useCallback(() => {
        if (isPlaying) {
            stop();
        } else {
            if (currentIndex >= words.length - 1) setCurrentIndex(0);
            setIsPlaying(true);
        }
    }, [isPlaying, stop, currentIndex, words.length]);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev >= words.length - 1) {
                        stop();
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
    }, [isPlaying, intervalMs, words.length, stop]);

    // --- Keyboard Shortcuts ---
    useEffect(() => {
        if (!isReading) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                togglePlay();
            } else if (e.code === 'ArrowLeft') {
                setSettings(s => ({ ...s, wpm: Math.max(100, s.wpm - 50) }));
            } else if (e.code === 'ArrowRight') {
                setSettings(s => ({ ...s, wpm: Math.min(1000, s.wpm + 50) }));
            } else if (e.code === 'Escape') {
                exitReading();
            } else if (e.key.toLowerCase() === 'f') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                    });
                } else {
                    document.exitFullscreen();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isReading, togglePlay]);

    // --- Actions ---
    const startReading = () => {
        if (words.length === 0) return;
        setCurrentIndex(0);
        setIsPlaying(false);
        setIsReading(true);
    };

    const exitReading = () => {
        stop();
        setIsReading(false);
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

    // --- Render ---
    return (
        <StudentLayout>
        <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100">

            {/* Setup Mode */}
            <AnimatePresence>
                {!isReading && (
                    <motion.main
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="pt-28 pb-16 px-4"
                    >
                        <div className="max-w-3xl mx-auto">
                            {/* Header */}
                            <div className="mb-10">
                                <Link href="/reading-test" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-4">
                                    <ArrowLeft className="w-4 h-4" /> Back to Reading Test
                                </Link>
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
                                    Practice Mode <Sparkles className="inline-block w-8 h-8 text-yellow-400 fill-current" />
                                </h1>
                                <p className="text-gray-500 text-lg">Paste your own text and customize the experience.</p>
                            </div>

                            {/* Text Input */}
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Text</label>
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Paste your text here..."
                                    className="w-full h-48 p-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all resize-none text-gray-800 text-lg leading-relaxed"
                                />
                                <p className="mt-2 text-sm text-gray-400">{words.length} words</p>
                            </div>

                            {/* WPM Presets */}
                            <div className="mb-8">
                                <label className="block text-sm font-bold text-gray-700 mb-3">Reading Speed</label>
                                <div className="flex flex-wrap gap-3">
                                    {WPM_PRESETS.map(preset => (
                                        <button
                                            key={preset.value}
                                            onClick={() => setWpm(preset.value)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl font-bold text-sm transition-all border-2",
                                                settings.wpm === preset.value && !customWpm
                                                    ? `${preset.color} text-white border-transparent shadow-lg`
                                                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                            )}
                                        >
                                            {preset.label} ({preset.value})
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setCustomWpm(true)}
                                        className={cn(
                                            "px-4 py-2 rounded-xl font-bold text-sm transition-all border-2",
                                            customWpm
                                                ? "bg-gray-800 text-white border-transparent"
                                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                                        )}
                                    >
                                        <Settings2 className="w-4 h-4 inline mr-1" /> Custom
                                    </button>
                                </div>

                                {/* Custom WPM Slider */}
                                <AnimatePresence>
                                    {customWpm && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                                        >
                                            <div className="flex items-center gap-4">
                                                <input
                                                    type="range"
                                                    min={100}
                                                    max={1000}
                                                    step={25}
                                                    value={settings.wpm}
                                                    onChange={(e) => setSettings(s => ({ ...s, wpm: Number(e.target.value) }))}
                                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                                />
                                                <span className="text-2xl font-black text-blue-600 w-20 text-right">{settings.wpm}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Font Size */}
                            <div className="mb-10">
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    <Type className="w-4 h-4 inline mr-1" /> Font Size
                                </label>
                                <div className="flex gap-3">
                                    {(Object.keys(FONT_SIZES) as Array<keyof typeof FONT_SIZES>).map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSettings(s => ({ ...s, fontSize: size }))}
                                            className={cn(
                                                "px-4 py-2 rounded-xl font-bold text-sm transition-all border-2",
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
                                className="w-full py-5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-black text-xl rounded-2xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <Maximize2 className="w-6 h-6" /> Start Reading
                            </button>

                            {/* Keyboard Shortcuts Hint */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                <Keyboard className="w-5 h-5 inline mr-2 text-gray-400" />
                                <span className="text-sm text-gray-500">
                                    <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono ml-2">Space</kbd> Play/Pause ·
                                    <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono ml-2">←/→</kbd> Adjust WPM ·
                                    <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono ml-2">F</kbd> Fullscreen ·
                                    <kbd className="px-2 py-1 bg-white border rounded text-xs font-mono ml-2">Esc</kbd> Exit
                                </span>
                            </div>
                        </div>
                    </motion.main>
                )}
            </AnimatePresence>

            {/* Reading Mode (Fullscreen Overlay) */}
            <AnimatePresence>
                {isReading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-white flex flex-col"
                    >
                        {/* Exit Button */}
                        <button
                            onClick={exitReading}
                            className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Word Display - ORP Centered */}
                        <div className="flex-1 flex items-center justify-center px-4">
                            {/* Container with fixed center point */}
                            <div className="relative flex items-center justify-center">
                                {/* Center guide line (visual) */}
                                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2"></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rotate-45"></div>
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rotate-45"></div>

                                {/* Word display with fixed center */}
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
                                    {/* Left part - fixed width, right-aligned */}
                                    <span
                                        className="text-gray-600 text-right inline-block"
                                        style={{ width: '45vw', maxWidth: '400px' }}
                                    >
                                        {leftPart}
                                    </span>

                                    {/* Center char - ORP, always at center */}
                                    <span className="text-blue-600 font-black mx-[2px] relative">
                                        {centerChar}
                                    </span>

                                    {/* Right part - fixed width, left-aligned */}
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

                                {/* Playback Controls */}
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => { setCurrentIndex(0); setIsPlaying(false); }}
                                        className="p-3 rounded-xl bg-white border-2 border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
                                    >
                                        <RotateCcw className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={togglePlay}
                                        className="p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg shadow-blue-200"
                                    >
                                        {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current translate-x-0.5" />}
                                    </button>
                                </div>

                                {/* WPM Display */}
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
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        </StudentLayout>
    );
}
