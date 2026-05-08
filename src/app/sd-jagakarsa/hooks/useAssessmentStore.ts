"use client";

import { useState, useEffect, useCallback } from "react";

export interface WordScore {
    word: string;
    accuracyScore: number;
    errorType: string;
}

export interface FeedbackItem {
    type: "success" | "warning" | "error";
    message: string;
}

export interface StudentRecord {
    absen: number;
    status: "pending" | "done" | "absent";
    scores: number[];
    accuracyScores: number[];
    fluencyScores: number[];
    words: WordScore[][];
    feedback: FeedbackItem[][];
    completedAt?: string;
}

interface AssessmentState {
    currentAbsen: number | null;
    students: StudentRecord[];
}

const STORAGE_KEY = "ecc-sd-jagakarsa";
const TOTAL_STUDENTS = 35;

function getToday(): string {
    return new Date().toISOString().split("T")[0];
}

function createInitialStudents(): StudentRecord[] {
    return Array.from({ length: TOTAL_STUDENTS }, (_, i) => ({
        absen: i + 1,
        status: "pending" as const,
        scores: [],
        accuracyScores: [],
        fluencyScores: [],
        words: [],
        feedback: [],
    }));
}

function loadState(): AssessmentState {
    if (typeof window === "undefined") {
        return { currentAbsen: null, students: createInitialStudents() };
    }
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.date === getToday() && parsed.students?.length === TOTAL_STUDENTS) {
                return {
                    currentAbsen: parsed.currentAbsen ?? null,
                    students: parsed.students,
                };
            }
        }
    } catch {
        // ignore
    }
    return { currentAbsen: null, students: createInitialStudents() };
}

function saveState(state: AssessmentState) {
    if (typeof window === "undefined") return;
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
            version: 1,
            date: getToday(),
            currentAbsen: state.currentAbsen,
            students: state.students,
        })
    );
}

export function useAssessmentStore() {
    const [state, setState] = useState<AssessmentState>(loadState);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (isHydrated) {
            saveState(state);
        }
    }, [state, isHydrated]);

    const setCurrentAbsen = useCallback((absen: number | null) => {
        setState((s) => ({ ...s, currentAbsen: absen }));
    }, []);

    const markAbsent = useCallback((absen: number) => {
        setState((s) => ({
            ...s,
            students: s.students.map((st) =>
                st.absen === absen
                    ? { ...st, status: "absent" as const, completedAt: new Date().toISOString() }
                    : st
            ),
        }));
    }, []);

    const saveStudentResult = useCallback(
        (
            absen: number,
            scores: number[],
            accuracyScores: number[],
            fluencyScores: number[],
            words: WordScore[][],
            feedback: FeedbackItem[][]
        ) => {
            setState((s) => ({
                ...s,
                students: s.students.map((st) =>
                    st.absen === absen
                        ? {
                              ...st,
                              status: "done" as const,
                              scores,
                              accuracyScores,
                              fluencyScores,
                              words,
                              feedback,
                              completedAt: new Date().toISOString(),
                          }
                        : st
                ),
            }));
        },
        []
    );

    const resetAll = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem(STORAGE_KEY);
        }
        setState({ currentAbsen: null, students: createInitialStudents() });
    }, []);

    const getNextPendingAbsen = useCallback(
        (fromAbsen: number): number | null => {
            const students = state.students;
            for (let i = fromAbsen; i <= TOTAL_STUDENTS; i++) {
                if (students[i - 1].status === "pending") return i;
            }
            for (let i = 1; i < fromAbsen; i++) {
                if (students[i - 1].status === "pending") return i;
            }
            return null;
        },
        [state.students]
    );

    const exportCSV = useCallback(() => {
        const header = "Absen,Status,Q1,Q2,Q3,Rata-rata\n";
        const rows = state.students
            .map((s) => {
                const avg =
                    s.scores.length > 0
                        ? Math.round(s.scores.reduce((a, b) => a + b, 0) / s.scores.length)
                        : "";
                return `${s.absen},${s.status},${s.scores[0] ?? ""},${s.scores[1] ?? ""},${s.scores[2] ?? ""},${avg}`;
            })
            .join("\n");
        const csv = header + rows;
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `sd-jagakarsa-${getToday()}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [state.students]);

    return {
        state,
        isHydrated,
        setCurrentAbsen,
        markAbsent,
        saveStudentResult,
        resetAll,
        getNextPendingAbsen,
        exportCSV,
    };
}
