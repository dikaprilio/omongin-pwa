"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface RSVPReaderProps {
    text: string;
    defaultWpm?: number;
    className?: string;
    autoStart?: boolean;
}

export const RSVPReader: React.FC<RSVPReaderProps> = ({
    text,
    defaultWpm = 300,
    className,
    autoStart = false
}) => {
    const [words, setWords] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoStart);
    const [wpm, setWpm] = useState(defaultWpm);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Basic splitting - can be improved for punctuation handling
        const splitWords = text.split(/\s+/).filter(w => w.length > 0);
        setWords(splitWords);
        setCurrentIndex(0);
    }, [text]);

    const intervalMs = 60000 / wpm;

    const stop = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsPlaying(false);
    }, []);

    const play = useCallback(() => {
        if (currentIndex >= words.length - 1) {
            setCurrentIndex(0);
        }
        setIsPlaying(true);
    }, [currentIndex, words.length]);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => {
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
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPlaying, intervalMs, words.length, stop]);

    // ORP Logic (Optimal Recognition Point)
    const currentWord = words[currentIndex] || "";
    const length = currentWord.length;
    // Simple heuristic: middle-ish character. 
    // For lengths 1-3, use index 0 or 1.
    // For longer, use 35-40% point.
    const orpIndex = length <= 1 ? 0 :
        length >= 2 && length <= 5 ? 1 :
            Math.floor(length * 0.35);

    const leftPart = currentWord.slice(0, orpIndex);
    const centerChar = currentWord[orpIndex];
    const rightPart = currentWord.slice(orpIndex + 1);

    return (
        <div className={cn("flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-8 rounded-3xl bg-black/90 border border-slate-800 shadow-2xl backdrop-blur-xl", className)}>

            {/* Reader Display */}
            <div className="relative w-full h-48 flex items-center justify-center overflow-hidden mb-8 select-none">

                {/* Guides */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-800/50 -translate-x-1/2"></div>
                <div className="absolute top-4 bottom-4 left-1/2 w-[2px] h-4 bg-slate-700/50 -translate-x-1/2 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 w-[2px] h-4 bg-slate-700/50 -translate-x-1/2 rounded-full"></div>

                {/* Word */}
                <div className="flex items-baseline text-6xl md:text-8xl font-mono tracking-wide leading-none text-slate-100">
                    {/* We align the ORP character continuously to the center. 
               We can do this by using a fixed width container for left/right or flex logic. 
               The simplest robust way is to translate the word so the ORP is at the center. */}
                    <div className="flex items-center justify-center">
                        <span className="text-right w-[1ch] opacity-60 font-medium">{leftPart}</span>
                        <span className="text-red-500 font-bold mx-[1px] transform scale-105">{centerChar}</span>
                        <span className="text-left w-[1ch] opacity-60 font-medium">{rightPart}</span>
                    </div>
                </div>

                {/* Alignment Fix: 
            The above flex approach with 1ch width is tricky because words vary. 
            Better approach: 
            Text-align right for left part, left for right part.
         */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="flex items-baseline">
                        <span className="text-right opacity-80" style={{ width: '50vw' }}>{leftPart}</span>
                        <span className="text-red-500 font-bold mx-[2px] z-10">{centerChar}</span>
                        <span className="text-left opacity-80" style={{ width: '50vw' }}>{rightPart}</span>
                    </div>
                </div>

            </div>

            {/* Controls */}
            <div className="w-full space-y-6">

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-indigo-500 h-full transition-all duration-100 ease-linear"
                        style={{ width: `${((currentIndex + 1) / Math.max(words.length, 1)) * 100}%` }}
                    ></div>
                </div>

                <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
                        <span>{currentIndex + 1} / {words.length}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-12 h-12 border-slate-700 bg-transparent hover:bg-slate-800 text-slate-200"
                            onClick={() => {
                                setCurrentIndex(0);
                                setIsPlaying(false);
                            }}
                        >
                            <RotateCcw className="w-5 h-5" />
                        </Button>

                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full w-16 h-16 bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
                            onClick={() => setIsPlaying(!isPlaying)}
                        >
                            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-1" />}
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 min-w-[140px]">
                        <div className="text-right">
                            <div className="text-2xl font-bold text-slate-200">{wpm}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">WPM</div>
                        </div>
                        {/* Simple WPM stepper or settings trigger? Let's use slider in a popover or just play buttons for now. 
                    Actually, let's just put simple +/- buttons or a slider below. */}
                    </div>
                </div>

                <div className="flex items-center justify-center p-4 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                    <span className="text-xs text-slate-500 mr-4 font-bold">SPEED</span>
                    <Slider
                        value={[wpm]}
                        onValueChange={(vals: number[]) => setWpm(vals[0])}
                        min={100}
                        max={1000}
                        step={50}
                        className="w-full max-w-md"
                    />
                </div>

            </div>
        </div>
    );
};
