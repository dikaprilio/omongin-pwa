"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudentRecord } from "../hooks/useAssessmentStore";

interface StudentResultProps {
    student: StudentRecord;
    onNextStudent: () => void;
    onViewGrid: () => void;
}

export default function StudentResult({ student, onNextStudent, onViewGrid }: StudentResultProps) {
    const avgScore =
        student.scores.length > 0
            ? Math.round(student.scores.reduce((a, b) => a + b, 0) / student.scores.length)
            : 0;

    const allWords = student.words.flat();
    const weakWords = allWords
        .filter((w) => w.accuracyScore < 60)
        .map((w) => w.word)
        .filter((v, i, a) => a.indexOf(v) === i)
        .slice(0, 5);

    return (
        <div className="min-h-[100dvh] bg-gradient-to-b from-blue-50 to-white flex flex-col px-4">
            {/* Header */}
            <div className="pt-6 pb-4 text-center">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Absen {student.absen}
                </p>
                <h2 className="text-xl font-black text-gray-900 mt-1">Selesai! 🎉</h2>
            </div>

            {/* Score Circle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center mb-6"
            >
                <div
                    className={cn(
                        "inline-flex items-center justify-center w-28 h-28 rounded-full text-5xl font-black mb-2 shadow-lg",
                        avgScore >= 80 && "bg-green-100 text-green-600 shadow-green-200",
                        avgScore >= 50 && avgScore < 80 && "bg-yellow-100 text-yellow-600 shadow-yellow-200",
                        avgScore < 50 && "bg-red-100 text-red-600 shadow-red-200"
                    )}
                >
                    {avgScore}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                    {avgScore >= 80 && "Excellent! 🌟"}
                    {avgScore >= 50 && avgScore < 80 && "Good job! 👍"}
                    {avgScore < 50 && "Keep practicing! 💪"}
                </p>
            </motion.div>

            {/* Per-question scores */}
            <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto w-full mb-4">
                {student.scores.map((score, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-white border-2 border-gray-100 rounded-xl p-3 text-center"
                    >
                        <p className="text-xs text-gray-400 font-medium mb-1">Q{i + 1}</p>
                        <p
                            className={cn(
                                "text-xl font-bold",
                                score >= 80 && "text-green-600",
                                score >= 50 && score < 80 && "text-yellow-600",
                                score < 50 && "text-red-500"
                            )}
                        >
                            {score}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Accuracy & Fluency averages */}
            {student.accuracyScores.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-3 mb-4"
                >
                    <div className="text-center px-4 py-2 bg-blue-50 rounded-xl">
                        <p className="text-lg font-bold text-blue-600">
                            {Math.round(
                                student.accuracyScores.reduce((a, b) => a + b, 0) / student.accuracyScores.length
                            )}
                        </p>
                        <p className="text-[10px] text-blue-400 font-medium">Avg Accuracy</p>
                    </div>
                    <div className="text-center px-4 py-2 bg-purple-50 rounded-xl">
                        <p className="text-lg font-bold text-purple-600">
                            {Math.round(
                                student.fluencyScores.reduce((a, b) => a + b, 0) / student.fluencyScores.length
                            )}
                        </p>
                        <p className="text-[10px] text-purple-400 font-medium">Avg Fluency</p>
                    </div>
                </motion.div>
            )}

            {/* Weak words */}
            {weakWords.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white border-2 border-red-100 rounded-xl p-4 max-w-sm mx-auto w-full mb-4"
                >
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                        Perlu latihan:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {weakWords.map((word) => (
                            <span
                                key={word}
                                className="px-2 py-1 bg-red-50 text-red-600 rounded-lg text-xs font-medium"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Actions */}
            <div className="pb-6 pt-2 space-y-2 max-w-sm mx-auto w-full">
                <button
                    onClick={onNextStudent}
                    className="w-full flex items-center justify-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-lg active:scale-95"
                >
                    <Users className="w-5 h-5" />
                    Siswa Berikutnya
                    <ArrowRight className="w-5 h-5" />
                </button>
                <button
                    onClick={onViewGrid}
                    className="w-full flex items-center justify-center gap-2 h-12 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl font-semibold transition-colors active:scale-95"
                >
                    Lihat Daftar Absen
                </button>
            </div>
        </div>
    );
}
