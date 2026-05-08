"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap, Trophy, Lock, Play, CheckCircle } from 'lucide-react';
import { RSVPReader } from '@/components/reading/RSVPReader';
import { SentenceBuilder } from '@/components/reading/SentenceBuilder';
import { getDailyDrills, getDailyStatus, submitDrillResult, type ReadingDrill } from '@/actions/reading';
import { StudentLayout } from '@/components/layouts/StudentLayout';
import confetti from 'canvas-confetti';

export default function DailyGamePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [drills, setDrills] = useState<ReadingDrill[]>([]);
    const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
    const [gamePhase, setGamePhase] = useState<'intro' | 'rsvp' | 'builder' | 'completed' | 'locked'>('intro');
    const [wpm, setWpm] = useState(300);

    // Initial Data Fetch
    useEffect(() => {
        async function loadData() {
            try {
                const [status, dailyDrills] = await Promise.all([
                    getDailyStatus(),
                    getDailyDrills()
                ]);

                setDrills(dailyDrills);

                if (status.locked || status.count >= 3) {
                    setGamePhase('locked');
                } else {
                    setCurrentDrillIndex(status.count);
                    // If they are in the middle of the day (e.g. 1/3 done), we start at index 1.
                }
            } catch (error) {
                console.error("Failed to load daily game:", error);
                // Optionally handle error UI
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const currentDrill = drills[currentDrillIndex];

    const handleRSVPComplete = () => {
        // Automatically move to builder after RSVP finishes (non-replayable)
        setGamePhase('builder');
    };

    const handleBuilderSuccess = async () => {
        // Submit logic - success
        try {
            await submitDrillResult(currentDrill.id, wpm, true);
        } catch (err) {
            console.error("Failed to save progress", err);
        }

        if (currentDrillIndex < 2) {
            // Next drill
            setCurrentDrillIndex(prev => prev + 1);
            setGamePhase('intro');
        } else {
            // Finished all today
            setGamePhase('completed');
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    const handleBuilderFail = async () => {
        // Submit logic - failed (still counts as an attempt)
        try {
            await submitDrillResult(currentDrill.id, wpm, false);
        } catch (err) {
            console.error("Failed to save progress", err);
        }

        if (currentDrillIndex < 2) {
            // Next drill
            setCurrentDrillIndex(prev => prev + 1);
            setGamePhase('intro');
        } else {
            // Finished all today
            setGamePhase('completed');
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <StudentLayout>
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

            <main className="pt-24 pb-16 min-h-[90vh] flex flex-col items-center justify-center px-4">

                <div className="w-full max-w-4xl mx-auto mb-8 flex items-center justify-between">
                    <Link href="/reading-test" className="text-gray-500 hover:text-blue-600 flex items-center gap-2 font-bold transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Hub
                    </Link>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="font-bold text-gray-700">Daily Streak: Coming Soon</span>
                    </div>
                </div>

                <AnimatePresence mode="wait">

                    {/* LOCKED STATE */}
                    {gamePhase === 'locked' && (
                        <motion.div
                            key="locked"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-12 h-12 text-green-500" />
                            </div>
                            <h1 className="text-3xl font-black text-gray-900 mb-4">You're Done For Today!</h1>
                            <p className="text-gray-500 text-lg mb-8">
                                Good job completing your 3 daily drills. Consistency is key! Come back tomorrow for new challenges.
                            </p>
                            <Link href="/reading-test" className="block w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
                                Back to Hub
                            </Link>
                        </motion.div>
                    )}

                    {/* COMPLETED STATE */}
                    {gamePhase === 'completed' && (
                        <motion.div
                            key="completed"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-xl border-2 border-green-100"
                        >
                            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Trophy className="w-12 h-12 text-yellow-500 fill-current" />
                            </div>
                            <h1 className="text-3xl font-black text-gray-900 mb-4">Daily Goal Smashed!</h1>
                            <p className="text-gray-500 text-lg mb-8">
                                You've completed all 3 drills. Your reading speed and comprehension are improving!
                            </p>
                            <button
                                onClick={() => router.push('/reading-test')}
                                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                            >
                                Continue Learning
                            </button>
                        </motion.div>
                    )}

                    {/* INTRO STATE (Start of each drill) */}
                    {gamePhase === 'intro' && currentDrill && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full max-w-2xl text-center"
                        >
                            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-bold text-sm rounded-full mb-6">
                                DRILL {currentDrillIndex + 1} OF 3
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                                Ready for Round {currentDrillIndex + 1}?
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
                                Focus on the center. The sentences will get harder as you go.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto mb-10">
                                <label className="block text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Set Your Target Speed</label>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <span className="text-5xl font-black text-blue-600">{wpm}</span>
                                    <span className="text-sm font-bold text-gray-400 mt-4">WPM</span>
                                </div>
                                <input
                                    type="range"
                                    min={100}
                                    max={800}
                                    step={50}
                                    value={wpm}
                                    onChange={(e) => setWpm(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                            </div>

                            <button
                                onClick={() => setGamePhase('rsvp')}
                                className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-blue-300"
                            >
                                <Play className="w-6 h-6 fill-current" />
                                Start Drill
                            </button>
                        </motion.div>
                    )}

                    {/* RSVP PHASE */}
                    {gamePhase === 'rsvp' && currentDrill && (
                        <RSVPReader
                            text={currentDrill.content}
                            defaultWpm={wpm}
                            autoPlay={true}
                            nonReplayable={true}
                            drillMode={true}
                            onComplete={handleRSVPComplete}
                        />
                    )}

                    {/* BUILDER PHASE */}
                    {gamePhase === 'builder' && currentDrill && (
                        <motion.div
                            key="builder"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full"
                        >
                            <SentenceBuilder
                                originalText={currentDrill.content}
                                onSuccess={handleBuilderSuccess}
                                onFail={handleBuilderFail}
                                maxRetries={1}
                            />
                        </motion.div>
                    )}

                </AnimatePresence>
            </main>
        </div>
        </StudentLayout>
    );
}
