"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, RotateCcw, Volume2, VolumeX, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { StudentLayout } from "@/components/layouts/StudentLayout";

const PROMPTS = [
    "The word 'later'",
    "Confidence vs arrogance",
    "Awkward silences",
    "Reinventing yourself",
    "Sincerity",
    "Overdelivering",
    "The comfort zone",
    "Second chances",
    "The power of pause",
    "Unsolicited advice",
    "Digital detox",
    "The art of listening",
    "Constructive criticism",
    "Embracing uncertainty",
    "The last minute",
    "Small talk",
    "Imperfect action",
    "The fear of missing out",
    "Authenticity",
    "The beauty of boredom",
    "Vulnerability",
    "The sunk cost fallacy",
    "Beginner's mind",
    "The imposter syndrome",
    "Slow living",
    "The power of no",
    "Micro-habits",
    "Constructive disagreement",
    "The gift of feedback",
    "Intentional discomfort",
    "The myth of multitasking",
    "Deep work",
    "The fear of judgment",
    "Radical honesty",
    "The value of silence",
    "Learning from failure",
    "The comfort of routine",
    "Calculated risks",
    "The power of yet",
    "Digital footprints",
    "The art of delegation",
    "Self-competition",
    "The paradox of choice",
    "Gratitude practice",
    "The halo effect",
    "Managing expectations",
    "The power of storytelling",
    "Intellectual humility",
    "The courage to be disliked",
    "Temporary setbacks",
];

// Responsive item height
const ITEM_HEIGHT = 72;
const VISIBLE_ITEMS = 7;
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const CENTER_LINE = CONTAINER_HEIGHT / 2;

export default function ImpromptuPage() {
    const router = useRouter();
    const [currentPrompt, setCurrentPrompt] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [hasSpun, setHasSpun] = useState(false);
    const [reelItems, setReelItems] = useState<string[]>([]);
    const [reelY, setReelY] = useState(0);

    const audioContextRef = useRef<AudioContext | null>(null);
    const spinIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastTickRef = useRef<number>(0);

    // Initialize reel
    useEffect(() => {
        const items = [];
        for (let i = 0; i < VISIBLE_ITEMS + 6; i++) {
            items.push(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
        }
        setReelItems(items);
    }, []);

    const initAudio = useCallback(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        }
    }, []);

    const playTick = useCallback((intensity: number) => {
        if (!soundEnabled || !audioContextRef.current) return;
        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 200 + intensity * 400;
        osc.type = "square";
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.02);
    }, [soundEnabled]);

    const playLand = useCallback(() => {
        if (!soundEnabled || !audioContextRef.current) return;
        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(180, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.2);
        osc.type = "sine";
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
    }, [soundEnabled]);

    const getItemY = (index: number) => {
        return -(index * ITEM_HEIGHT) + CENTER_LINE - (ITEM_HEIGHT / 2);
    };

    const spin = useCallback(() => {
        if (isSpinning) return;

        initAudio();
        setIsSpinning(true);
        setHasSpun(true);

        const finalPrompt = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
        
        const strip: string[] = [];
        for (let i = 0; i < 3; i++) strip.push(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
        for (let i = 0; i < 30; i++) strip.push(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
        strip.push(finalPrompt);
        for (let i = 0; i < 3; i++) strip.push(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
        
        setReelItems(strip);

        const winnerIndex = 33;
        const finalY = getItemY(winnerIndex);
        const RAFTargetIndex = winnerIndex + 1;
        const RAFTargetY = getItemY(RAFTargetIndex);

        const duration = 2800;
        const startTime = Date.now();
        let lastY = 0;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            let scrollProgress;
            if (progress < 0.08) {
                const p = progress / 0.08;
                scrollProgress = p * p * 0.08;
            } else {
                scrollProgress = 0.08 + (progress - 0.08) * (0.92 / 0.92);
            }
            
            const currentY = scrollProgress * RAFTargetY;
            setReelY(currentY);
            
            const velocity = Math.abs(currentY - lastY);
            lastY = currentY;
            
            const now = Date.now();
            if (now - lastTickRef.current > 40) {
                playTick(progress < 0.08 ? progress / 0.08 : 0.8);
                lastTickRef.current = now;
            }
            
            const currentIndex = Math.round((-currentY + CENTER_LINE - ITEM_HEIGHT / 2) / ITEM_HEIGHT);
            if (currentIndex >= 0 && currentIndex < strip.length) {
                setCurrentPrompt(strip[currentIndex]);
            }
            
            if (progress < 1) {
                spinIntervalRef.current = setTimeout(animate, 16);
            } else {
                setReelY(finalY);
                setCurrentPrompt(finalPrompt);
                setIsSpinning(false);
                playLand();
            }
        };
        
        animate();
    }, [isSpinning, initAudio, playTick, playLand]);

    useEffect(() => {
        return () => {
            if (spinIntervalRef.current) clearTimeout(spinIntervalRef.current);
        };
    }, []);

    const resetAll = useCallback(() => {
        setHasSpun(false);
        setCurrentPrompt("");
        setReelY(0);
        const items = [];
        for (let i = 0; i < VISIBLE_ITEMS + 6; i++) {
            items.push(PROMPTS[Math.floor(Math.random() * PROMPTS.length)]);
        }
        setReelItems(items);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.code === "Space" && !isSpinning) {
                e.preventDefault();
                spin();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isSpinning, spin]);

    const startTimer = () => {
        router.push(`/impromptu/timer?prompt=${encodeURIComponent(currentPrompt)}`);
    };

    const getItemProps = (index: number) => {
        const itemCenter = index * ITEM_HEIGHT + ITEM_HEIGHT / 2;
        const currentScroll = -reelY;
        const distance = (itemCenter - currentScroll - CENTER_LINE) / ITEM_HEIGHT;
        const absDist = Math.abs(distance);

        return {
            opacity: Math.max(0.03, 1 - absDist * 0.25),
            scale: Math.max(0.85, 1 - absDist * 0.05),
            blur: absDist > 0.4 ? (absDist - 0.4) * 2 : 0,
            isCenter: absDist < 0.5,
        };
    };

    return (
        <StudentLayout>
        <div className="h-screen bg-white flex flex-col overflow-hidden">

            {/* Sound toggle - positioned fixed */}
            <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="fixed top-24 right-4 sm:right-6 z-50 p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white/80 backdrop-blur rounded-full"
            >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Main - centered content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 pt-20">
                
                {/* Reel Container */}
                <div className="relative w-full max-w-lg mx-auto">
                    <div 
                        className="relative overflow-hidden"
                        style={{
                            height: `${CONTAINER_HEIGHT}px`,
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
                        }}
                    >
                        {/* Blue arrow indicator at center */}
                        <div 
                            className="absolute left-2 sm:left-4 z-10 pointer-events-none"
                            style={{ top: `${CENTER_LINE}px`, transform: 'translateY(-50%)' }}
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>

                        {/* Reel with spring animation */}
                        <motion.div
                            className="absolute left-0 right-0 flex flex-col items-center will-change-transform"
                            animate={{ y: reelY }}
                            transition={!isSpinning && hasSpun ? {
                                type: "spring",
                                stiffness: 150,
                                damping: 10,
                                mass: 0.8,
                            } : { duration: 0 }}
                        >
                            {reelItems.map((item, i) => {
                                const props = getItemProps(i);
                                return (
                                    <div
                                        key={`${i}-${item}`}
                                        className="flex items-center justify-center w-full shrink-0 px-8 sm:px-12"
                                        style={{
                                            height: `${ITEM_HEIGHT}px`,
                                            opacity: props.opacity,
                                            transform: `scale(${props.scale})`,
                                            filter: props.blur > 0 ? `blur(${props.blur}px)` : "none",
                                        }}
                                    >
                                        <span className={cn(
                                            "text-xl sm:text-2xl md:text-3xl font-serif text-center leading-tight",
                                            props.isCenter ? "text-gray-900" : "text-gray-400"
                                        )}>
                                            {item}
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Result */}
                <AnimatePresence>
                    {hasSpun && !isSpinning && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mt-2"
                        >
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Speak about</p>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-900 px-4">
                                {currentPrompt}
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!hasSpun && (
                    <p className="mt-4 text-gray-400 text-sm">Press spacebar to spin</p>
                )}

                {/* Controls */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={spin}
                        disabled={isSpinning}
                        className={cn(
                            "flex items-center gap-2 px-8 py-3 rounded-full font-medium text-base transition-all",
                            isSpinning
                                ? "bg-blue-100 text-blue-300 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200"
                        )}
                    >
                        <Play className="w-4 h-4" />
                        {isSpinning ? "Spinning..." : hasSpun ? "Spin Again" : "Spin!"}
                    </button>

                    <AnimatePresence>
                        {hasSpun && !isSpinning && (
                            <>
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    onClick={startTimer}
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-medium text-base transition-all"
                                >
                                    <Clock className="w-4 h-4" />
                                    Start Timer
                                </motion.button>
                                
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={resetAll}
                                    className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </motion.button>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-3 px-4 sm:px-6 border-t border-gray-100">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-gray-400">
                    <p>Impromptu speaking practice</p>
                    <div className="flex gap-4">
                        <span className="hidden sm:inline">Press spacebar to spin</span>
                    </div>
                </div>
            </footer>
        </div>
        </StudentLayout>
    );
}
