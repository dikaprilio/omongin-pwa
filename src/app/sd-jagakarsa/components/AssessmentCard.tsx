"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Square, SkipForward, Loader2, CheckCircle2, AlertCircle, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { convertWebMToWav } from "@/lib/audio-utils";
import { AssessmentQuestion } from "../data/questions";
import { FeedbackItem, WordScore } from "../hooks/useAssessmentStore";

interface AssessmentCardProps {
    absen: number;
    question: AssessmentQuestion;
    questionIndex: number;
    totalQuestions: number;
    onComplete: (result: {
        score: number;
        accuracyScore: number;
        fluencyScore: number;
        words: WordScore[];
        feedback: FeedbackItem[];
    }) => void;
    onSkip: () => void;
    onBack?: () => void;
}

export default function AssessmentCard({
    absen,
    question,
    questionIndex,
    totalQuestions,
    onComplete,
    onSkip,
    onBack,
}: AssessmentCardProps) {
    const [status, setStatus] = useState<"idle" | "recording" | "processing" | "result">("idle");
    const [result, setResult] = useState<any>(null);
    const [progressLog, setProgressLog] = useState<
        { step: number; message: string; detail: string; done: boolean }[]
    >([]);
    const [recordingSeconds, setRecordingSeconds] = useState(0);
    const [skipConfirm, setSkipConfirm] = useState(false);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);

    // Countdown timer while recording
    useEffect(() => {
        if (status === "recording") {
            setRecordingSeconds(0);
            timerRef.current = setInterval(() => {
                setRecordingSeconds((s) => {
                    if (s >= 29) {
                        stopRecording();
                        return s;
                    }
                    return s + 1;
                });
            }, 1000);
        } else {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [status]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: { sampleRate: 16000, channelCount: 1 },
            });

            const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
                ? "audio/webm;codecs=opus"
                : "audio/webm";

            const recorder = new MediaRecorder(stream, { mimeType });
            mediaRecorderRef.current = recorder;
            chunksRef.current = [];
            startTimeRef.current = Date.now();

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            recorder.onstop = async () => {
                stream.getTracks().forEach((t) => t.stop());
                const webmBlob = new Blob(chunksRef.current, { type: mimeType });
                setStatus("processing");
                await processAudio(webmBlob);
            };

            recorder.start();
            setStatus("recording");

            if (navigator.vibrate) navigator.vibrate(50);
        } catch {
            alert("Tidak bisa akses mikrofon. Pastikan izin sudah diberikan.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
            if (navigator.vibrate) navigator.vibrate(50);
        }
    };

    const processAudio = async (webmBlob: Blob) => {
        try {
            setProgressLog([]);
            const wavBlob = await convertWebMToWav(webmBlob);

            const formData = new FormData();
            formData.append("audio", wavBlob, "recording.wav");
            formData.append("expectedText", question.text);
            formData.append("tips", question.tips);

            const response = await fetch("/api/transcribe", {
                method: "POST",
                body: formData,
            });

            if (!response.body) throw new Error("No response body");

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            let finalData: any = null;

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        try {
                            const event = JSON.parse(line.slice(6));
                            if (event.type === "progress") {
                                setProgressLog((prev) => [
                                    ...prev.map((p) => ({ ...p, done: true })),
                                    { step: event.data.step, message: event.data.message, detail: event.data.detail || "", done: false },
                                ]);
                            } else if (event.type === "complete") {
                                finalData = event.data;
                                setProgressLog((prev) => prev.map((p) => ({ ...p, done: true })));
                            } else if (event.type === "error") {
                                throw new Error(event.data.message);
                            }
                        } catch {
                            // ignore parse errors
                        }
                    }
                }
            }

            if (finalData) {
                setResult(finalData);
                setStatus("result");
                onComplete({
                    score: finalData.score || 0,
                    accuracyScore: finalData.accuracyScore || 0,
                    fluencyScore: finalData.fluencyScore || 0,
                    words: finalData.words || [],
                    feedback: finalData.feedback || [],
                });
            } else {
                throw new Error("No result received");
            }
        } catch (err) {
            console.error(err);
            setResult({
                score: 0,
                accuracyScore: 0,
                fluencyScore: 0,
                words: [],
                feedback: [{ type: "error" as const, message: "Gagal menganalisis. Coba lagi." }],
            });
            setStatus("result");
            onComplete({
                score: 0,
                accuracyScore: 0,
                fluencyScore: 0,
                words: [],
                feedback: [{ type: "error" as const, message: "Gagal menganalisis. Coba lagi." }],
            });
        }
    };

    const handleSkip = () => {
        if (!skipConfirm) {
            setSkipConfirm(true);
            setTimeout(() => setSkipConfirm(false), 2000);
        } else {
            onSkip();
        }
    };

    return (
        <div className="min-h-[100dvh] bg-gradient-to-b from-blue-50 to-white flex flex-col px-4">
            {/* Header */}
            <div className="pt-6 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {onBack && (
                        <button
                            onClick={onBack}
                            className="p-2 -ml-2 rounded-xl hover:bg-gray-100 transition-colors active:scale-95"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-500" />
                        </button>
                    )}
                    <div>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                            Absen {absen}
                        </p>
                        <h2 className="text-lg font-black text-gray-900">
                            Soal {questionIndex + 1} / {totalQuestions}
                        </h2>
                    </div>
                </div>
                <button
                    onClick={handleSkip}
                    className={cn(
                        "px-4 py-2 rounded-xl text-sm font-semibold transition-colors active:scale-95",
                        skipConfirm
                            ? "bg-red-500 text-white"
                            : "bg-white border-2 border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-500"
                    )}
                >
                    <SkipForward className="w-4 h-4 inline mr-1" />
                    {skipConfirm ? "Yakin?" : "Skip"}
                </button>
            </div>

            {/* Question Card */}
            <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-5 shadow-lg mb-4"
            >
                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center">
                    &ldquo;{question.text}&rdquo;
                </p>
                <p className="text-sm text-gray-400 text-center mt-3">
                    {question.indonesian}
                </p>
            </motion.div>

            {/* Main Action Area */}
            <div className="flex-1 flex flex-col items-center justify-center min-h-[280px]">
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <button
                                onClick={startRecording}
                                className="w-24 h-24 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-transform active:scale-95 hover:scale-105"
                            >
                                <Mic className="w-10 h-10" />
                            </button>
                            <p className="text-sm text-gray-500 font-medium">
                                Tekan tombol dan baca kalimat di atas
                            </p>
                        </motion.div>
                    )}

                    {status === "recording" && (
                        <motion.div
                            key="recording"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <button
                                onClick={stopRecording}
                                className="w-24 h-24 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-xl animate-pulse ring-4 ring-red-200 transition-transform active:scale-95"
                            >
                                <Square className="w-10 h-10 fill-current" />
                            </button>
                            <div className="text-center">
                                <p className="text-2xl font-mono font-bold text-red-500">
                                    {recordingSeconds}s
                                </p>
                                <p className="text-xs text-gray-500">Rekaman berlangsung...</p>
                            </div>
                        </motion.div>
                    )}

                    {status === "processing" && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full max-w-sm"
                        >
                            <div className="space-y-2">
                                {progressLog.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={cn(
                                            "flex items-center gap-2 text-sm p-2.5 rounded-lg",
                                            log.done
                                                ? "bg-green-50 text-green-700"
                                                : "bg-blue-50 text-blue-600"
                                        )}
                                    >
                                        {log.done ? (
                                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                        ) : (
                                            <Loader2 className="w-4 h-4 flex-shrink-0 animate-spin" />
                                        )}
                                        <span className="font-medium">{log.message}</span>
                                        {log.detail && (
                                            <span className="text-xs opacity-70">({log.detail})</span>
                                        )}
                                    </motion.div>
                                ))}
                                {progressLog.length === 0 && (
                                    <div className="flex items-center gap-2 text-sm text-gray-500 p-2.5">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Memulai...</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {status === "result" && result && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-sm space-y-4"
                        >
                            {/* Score Circle */}
                            <div className="text-center">
                                <div
                                    className={cn(
                                        "inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl font-black mb-2",
                                        result.score >= 80 && "bg-green-100 text-green-600",
                                        result.score >= 50 && result.score < 80 && "bg-yellow-100 text-yellow-600",
                                        result.score < 50 && "bg-red-100 text-red-600"
                                    )}
                                >
                                    {result.score}
                                </div>
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                    Score
                                </p>
                            </div>

                            {/* Accuracy & Fluency */}
                            <div className="flex items-center justify-center gap-3">
                                <div className="text-center px-3 py-2 bg-blue-50 rounded-xl min-w-[80px]">
                                    <p className="text-lg font-bold text-blue-600">{result.accuracyScore || 0}</p>
                                    <p className="text-[10px] text-blue-400 font-medium">Accuracy</p>
                                </div>
                                <div className="text-center px-3 py-2 bg-purple-50 rounded-xl min-w-[80px]">
                                    <p className="text-lg font-bold text-purple-600">{result.fluencyScore || 0}</p>
                                    <p className="text-[10px] text-purple-400 font-medium">Fluency</p>
                                </div>
                            </div>

                            {/* Words */}
                            {result.words && result.words.length > 0 && (
                                <div className="flex flex-wrap justify-center gap-1.5 p-3 bg-gray-50 rounded-xl">
                                    {result.words.map((w: any, i: number) => (
                                        <span
                                            key={i}
                                            className={cn(
                                                "px-2 py-0.5 rounded text-xs font-medium",
                                                w.accuracyScore >= 80 && "bg-green-100 text-green-700",
                                                w.accuracyScore >= 60 && w.accuracyScore < 80 && "bg-yellow-100 text-yellow-700",
                                                w.accuracyScore < 60 && "bg-red-100 text-red-700"
                                            )}
                                        >
                                            {w.word}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Feedback */}
                            {result.feedback && result.feedback.length > 0 && (
                                <div className="space-y-2">
                                    {result.feedback.map((f: FeedbackItem, i: number) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "flex items-start gap-2 p-2.5 rounded-xl text-sm",
                                                f.type === "success" && "bg-green-50 text-green-700",
                                                f.type === "warning" && "bg-yellow-50 text-yellow-700",
                                                f.type === "error" && "bg-red-50 text-red-700"
                                            )}
                                        >
                                            {f.type === "success" && <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                                            {f.type === "warning" && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                                            {f.type === "error" && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                                            <span className="font-medium">{f.message}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className="text-center text-xs text-gray-400">
                                Lanjut soal berikutnya...
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
