"use client";

import { motion } from "framer-motion";
import { Check, X, RotateCcw, Download, Trophy, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { StudentRecord } from "../hooks/useAssessmentStore";

interface AttendanceGridProps {
    students: StudentRecord[];
    currentAbsen: number | null;
    onSelectAbsen: (absen: number) => void;
    onContinue: () => void;
    onReset: () => void;
    onExport: () => void;
    isResetting?: boolean;
}

export default function AttendanceGrid({
    students,
    currentAbsen,
    onSelectAbsen,
    onContinue,
    onReset,
    onExport,
    isResetting,
}: AttendanceGridProps) {
    const doneCount = students.filter((s) => s.status === "done").length;
    const absentCount = students.filter((s) => s.status === "absent").length;
    const pendingCount = students.filter((s) => s.status === "pending").length;

    const lastActive = students.find((s) => s.status === "done" || s.status === "absent")
        ? students.reduce((latest, s) => {
              if (!s.completedAt) return latest;
              return !latest?.completedAt || new Date(s.completedAt) > new Date(latest.completedAt)
                  ? s
                  : latest;
          }, null as StudentRecord | null)?.absen ?? 1
        : 1;

    return (
        <div className="min-h-[100dvh] bg-gradient-to-b from-blue-50 to-white flex flex-col">
            {/* Header */}
            <div className="px-4 pt-6 pb-4 text-center">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                    ECC x SDN Jagakarsa 03
                </h1>
                <p className="text-sm text-gray-500 mt-1">AI Speaking Assessment</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-xs font-medium">
                    <span className="flex items-center gap-1 text-green-600">
                        <Check className="w-3.5 h-3.5" /> {doneCount}
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                        <X className="w-3.5 h-3.5" /> {absentCount}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                        <span className="w-3.5 h-3.5 rounded-full border border-gray-300 flex items-center justify-center text-[8px]">
                            {pendingCount}
                        </span>
                    </span>
                </div>
            </div>

            {/* Grid */}
            <div className="flex-1 px-4 pb-4">
                <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
                    {students.map((student, idx) => {
                        const isCurrent = currentAbsen === student.absen;
                        const isDone = student.status === "done";
                        const isAbsent = student.status === "absent";

                        return (
                            <motion.button
                                key={student.absen}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.01 }}
                                onClick={() => onSelectAbsen(student.absen)}
                                className={cn(
                                    "relative aspect-square rounded-xl flex items-center justify-center text-lg font-bold transition-all active:scale-90",
                                    isDone &&
                                        "bg-green-100 text-green-700 border-2 border-green-300 shadow-sm",
                                    isAbsent &&
                                        "bg-red-50 text-red-400 border-2 border-red-200 line-through opacity-60",
                                    isCurrent &&
                                        !isDone &&
                                        !isAbsent &&
                                        "bg-blue-500 text-white border-2 border-blue-600 shadow-lg ring-2 ring-blue-200 animate-pulse",
                                    !isDone &&
                                        !isAbsent &&
                                        !isCurrent &&
                                        "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                )}
                            >
                                {student.absen}
                                {isDone && (
                                    <Check className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 text-green-600" />
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Actions */}
            <div className="px-4 pb-6 pt-2 space-y-2 max-w-md mx-auto w-full">
                {pendingCount > 0 && (
                    <button
                        onClick={onContinue}
                        className="w-full flex items-center justify-center gap-2 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-colors shadow-lg active:scale-95"
                    >
                        <Play className="w-5 h-5" />
                        {doneCount === 0 && absentCount === 0
                            ? "Mulai Assessment"
                            : "Lanjutkan"}
                    </button>
                )}

                <div className="flex gap-2">
                    <button
                        onClick={onExport}
                        className="flex-1 flex items-center justify-center gap-2 h-12 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl font-semibold transition-colors active:scale-95"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                    <button
                        onClick={onReset}
                        disabled={isResetting}
                        className="flex-1 flex items-center justify-center gap-2 h-12 bg-white border-2 border-red-200 hover:border-red-300 text-red-600 rounded-xl font-semibold transition-colors active:scale-95 disabled:opacity-50"
                    >
                        <RotateCcw className={cn("w-4 h-4", isResetting && "animate-spin")} />
                        {isResetting ? "Resetting..." : "Hard Reset"}
                    </button>
                </div>

                <a
                    href="/sd-jagakarsa/ranking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 h-12 bg-amber-50 border-2 border-amber-200 hover:border-amber-300 text-amber-700 rounded-xl font-semibold transition-colors active:scale-95"
                >
                    <Trophy className="w-4 h-4" />
                    Lihat Ranking
                </a>
            </div>
        </div>
    );
}
