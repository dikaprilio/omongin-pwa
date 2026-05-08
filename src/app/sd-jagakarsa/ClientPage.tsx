"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAssessmentStore } from "./hooks/useAssessmentStore";
import { questions } from "./data/questions";
import AttendanceGrid from "./components/AttendanceGrid";
import AssessmentCard from "./components/AssessmentCard";
import StudentResult from "./components/StudentResult";

type Screen = "welcome" | "grid" | "assessment" | "result";

export default function ClientPage() {
    const [screen, setScreen] = useState<Screen>("welcome");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionResults, setQuestionResults] = useState<
        {
            score: number;
            accuracyScore: number;
            fluencyScore: number;
            words: any[];
            feedback: any[];
        }[]
    >([]);

    const {
        state,
        isHydrated,
        setCurrentAbsen,
        markAbsent,
        saveStudentResult,
        resetAll,
        getNextPendingAbsen,
        exportCSV,
    } = useAssessmentStore();

    // Auto-advance to next question after result shows
    const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
        };
    }, [autoAdvanceTimer]);

    const handleStart = useCallback(() => {
        const next = getNextPendingAbsen(1);
        if (next) {
            setCurrentAbsen(next);
            setCurrentQuestionIndex(0);
            setQuestionResults([]);
            setScreen("assessment");
        } else {
            setScreen("grid");
        }
    }, [getNextPendingAbsen, setCurrentAbsen]);

    const handleSelectAbsen = useCallback(
        (absen: number) => {
            const student = state.students[absen - 1];
            if (student.status === "done") {
                setCurrentAbsen(absen);
                setScreen("result");
            } else if (student.status === "pending") {
                setCurrentAbsen(absen);
                setCurrentQuestionIndex(0);
                setQuestionResults([]);
                setScreen("assessment");
            }
            // absent: do nothing on tap
        },
        [state.students, setCurrentAbsen]
    );

    const handleContinue = useCallback(() => {
        const from = state.currentAbsen ? state.currentAbsen + 1 : 1;
        const next = getNextPendingAbsen(from);
        if (next) {
            setCurrentAbsen(next);
            setCurrentQuestionIndex(0);
            setQuestionResults([]);
            setScreen("assessment");
        } else {
            setScreen("grid");
        }
    }, [state.currentAbsen, getNextPendingAbsen, setCurrentAbsen]);

    const handleQuestionComplete = useCallback(
        (result: {
            score: number;
            accuracyScore: number;
            fluencyScore: number;
            words: any[];
            feedback: any[];
        }) => {
            const newResults = [...questionResults, result];
            setQuestionResults(newResults);

            if (newResults.length >= questions.length) {
                // All questions done — save and show result
                if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
                const timer = setTimeout(() => {
                    if (state.currentAbsen) {
                        saveStudentResult(
                            state.currentAbsen,
                            newResults.map((r) => r.score),
                            newResults.map((r) => r.accuracyScore),
                            newResults.map((r) => r.fluencyScore),
                            newResults.map((r) => r.words),
                            newResults.map((r) => r.feedback)
                        );
                        // Sync to cloud
                        syncToCloud(state.currentAbsen, newResults);
                    }
                    setScreen("result");
                }, 2500);
                setAutoAdvanceTimer(timer);
            } else {
                // Auto-advance to next question
                if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
                const timer = setTimeout(() => {
                    setCurrentQuestionIndex((i) => i + 1);
                }, 2500);
                setAutoAdvanceTimer(timer);
            }
        },
        [questionResults, state.currentAbsen, saveStudentResult, autoAdvanceTimer]
    );

    const syncToCloud = async (absen: number, results: any[]) => {
        try {
            const today = new Date().toISOString().split("T")[0];
            await fetch("/api/sd-jagakarsa/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event_date: today,
                    absen,
                    status: "done",
                    scores: results.map((r) => Math.round(r.score)),
                    accuracy_scores: results.map((r) => Math.round(r.accuracyScore)),
                    fluency_scores: results.map((r) => Math.round(r.fluencyScore)),
                    words: results.map((r) => r.words),
                    feedback: results.map((r) => r.feedback),
                }),
            });
        } catch (err) {
            console.error("Cloud sync failed:", err);
        }
    };

    const handleSkip = useCallback(() => {
        if (state.currentAbsen) {
            markAbsent(state.currentAbsen);
            // Sync absent to cloud too
            const today = new Date().toISOString().split("T")[0];
            fetch("/api/sd-jagakarsa/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event_date: today,
                    absen: state.currentAbsen,
                    status: "absent",
                    scores: [],
                    accuracy_scores: [],
                    fluency_scores: [],
                    words: [],
                    feedback: [],
                }),
            }).catch(() => {});
            setScreen("grid");
        }
    }, [state.currentAbsen, markAbsent]);

    const handleNextStudent = useCallback(() => {
        const from = state.currentAbsen ? state.currentAbsen + 1 : 1;
        const next = getNextPendingAbsen(from);
        if (next) {
            setCurrentAbsen(next);
            setCurrentQuestionIndex(0);
            setQuestionResults([]);
            setScreen("assessment");
        } else {
            setScreen("grid");
        }
    }, [state.currentAbsen, getNextPendingAbsen, setCurrentAbsen]);

    const handleViewGrid = useCallback(() => {
        setScreen("grid");
    }, []);

    const [isResetting, setIsResetting] = useState(false);

    const handleReset = useCallback(async () => {
        if (!confirm("⚠️ YAKIN mau HARD RESET?\n\nSemua data hari ini akan dihapus PERMANEN di HP dan di Ranking.")) {
            return;
        }
        if (!confirm("KONFIRMASI TERAKHIR: Data benar-benar akan hilang. Lanjutkan?")) {
            return;
        }

        setIsResetting(true);
        try {
            const today = new Date().toISOString().split("T")[0];
            await fetch("/api/sd-jagakarsa/reset", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event_date: today }),
            });
        } catch (err) {
            console.error("Hard reset failed:", err);
        } finally {
            resetAll();
            setIsResetting(false);
            setScreen("welcome");
        }
    }, [resetAll]);

    if (!isHydrated) {
        return (
            <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    const currentStudent = state.currentAbsen
        ? state.students[state.currentAbsen - 1]
        : null;

    return (
        <AnimatePresence mode="wait">
            {screen === "welcome" && (
                <motion.div
                    key="welcome"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-[100dvh] bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6"
                >
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <img
                                src="/ecc-logo.png"
                                alt="ECC Logo"
                                className="w-16 h-16 rounded-2xl shadow-lg object-contain bg-white"
                            />
                            <span className="text-2xl font-black text-gray-400">x</span>
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl font-black">SD</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                            SDN Jagakarsa 03
                        </h1>
                        <p className="text-gray-500 text-lg">AI Speaking Assessment</p>
                        <p className="text-sm text-gray-400 mt-1">
                            Adjectives — Kata Sifat
                        </p>
                    </div>

                    <div className="w-full max-w-xs space-y-3">
                        <button
                            onClick={handleStart}
                            className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl transition-colors shadow-xl active:scale-95"
                        >
                            Mulai Assessment
                        </button>
                        <button
                            onClick={() => setScreen("grid")}
                            className="w-full h-12 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-2xl font-semibold transition-colors active:scale-95"
                        >
                            Lihat Daftar Absen
                        </button>
                    </div>

                    <p className="text-xs text-gray-400 mt-6 text-center">
                        35 siswa &middot; 3 soal &middot; Azure + Gemini AI
                    </p>
                </motion.div>
            )}

            {screen === "grid" && (
                <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <AttendanceGrid
                        students={state.students}
                        currentAbsen={state.currentAbsen}
                        onSelectAbsen={handleSelectAbsen}
                        onContinue={handleContinue}
                        onReset={handleReset}
                        onExport={exportCSV}
                        isResetting={isResetting}
                    />
                </motion.div>
            )}

            {screen === "assessment" && currentStudent && (
                <motion.div
                    key="assessment"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <AssessmentCard
                        key={currentQuestionIndex}
                        absen={currentStudent.absen}
                        question={questions[currentQuestionIndex]}
                        questionIndex={currentQuestionIndex}
                        totalQuestions={questions.length}
                        onComplete={handleQuestionComplete}
                        onSkip={handleSkip}
                        onBack={() => setScreen("grid")}
                    />
                </motion.div>
            )}

            {screen === "result" && currentStudent && (
                <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <StudentResult
                        student={currentStudent}
                        onNextStudent={handleNextStudent}
                        onViewGrid={handleViewGrid}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
