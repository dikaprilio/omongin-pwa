"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Mic, Square, Play, RotateCcw, Sparkles, Zap,
    Volume2, CheckCircle2, XCircle, AlertCircle,
    ChevronRight, Share2, Calendar, Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { StudentLayout } from '@/components/layouts/StudentLayout';
import { getTodaySentence, DailySentence } from './data/dailySentences';

// --- Types ---
interface RecordingState {
    status: 'idle' | 'recording' | 'processing' | 'done';
    audioBlob: Blob | null;
    audioUrl: string | null;
    transcript: string;
    score: number;
    feedback: FeedbackItem[];
    duration: number;
    timingFeedback?: string;
    wordsPerMinute?: number;
    // Azure pronunciation scores
    accuracyScore?: number;
    fluencyScore?: number;
    words?: WordScore[];
}

interface FeedbackItem {
    type: 'success' | 'warning' | 'error';
    message: string;
}

interface WordScore {
    word: string;
    accuracyScore: number;
    errorType: string;
}

// --- Main Page ---
export default function SpeakingTestPage() {
    const [sentence, setSentence] = useState<DailySentence | null>(null);
    const [state, setState] = useState<RecordingState>({
        status: 'idle',
        audioBlob: null,
        audioUrl: null,
        transcript: '',
        score: 0,
        feedback: [],
        duration: 0,
        timingFeedback: undefined,
        wordsPerMinute: undefined,
        accuracyScore: undefined,
        fluencyScore: undefined,
        words: undefined,
    });
    const [showTips, setShowTips] = useState(false);
    // Real-time processing progress from SSE
    const [progressLog, setProgressLog] = useState<{ step: number; message: string; detail: string; done: boolean }[]>([]);
    const [partialResult, setPartialResult] = useState<{ accuracyScore?: number; fluencyScore?: number; words?: { word: string; score: number }[] } | null>(null);
    const [hasAttempted, setHasAttempted] = useState(false);

    // Security: Recording limits
    const MAX_RECORDING_SECONDS = 45;
    const MAX_DAILY_ATTEMPTS = 3;
    const [dailyAttempts, setDailyAttempts] = useState(0);
    const [recordingCountdown, setRecordingCountdown] = useState(MAX_RECORDING_SECONDS);
    const [isOnCooldown, setIsOnCooldown] = useState(false);
    const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const startTimeRef = useRef<number>(0);

    // Load today's sentence and attempt count
    useEffect(() => {
        setSentence(getTodaySentence());

        // Load daily attempts
        const today = new Date().toDateString();
        const savedAttempts = localStorage.getItem('speakDaily-attempts');
        if (savedAttempts) {
            const { date, count } = JSON.parse(savedAttempts);
            if (date === today) {
                setDailyAttempts(count);
            }
        }

        // Check if already attempted today (load last result)
        const lastAttempt = localStorage.getItem('speakDaily-lastAttempt');
        if (lastAttempt === today) {
            const savedState = localStorage.getItem('speakDaily-lastResult');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                setState(s => ({ ...s, ...parsed, status: 'done' }));
                setHasAttempted(true);
            }
        }
    }, []);

    // Auto-stop recording at 45 seconds
    useEffect(() => {
        if (state.status === 'recording') {
            setRecordingCountdown(MAX_RECORDING_SECONDS);
            recordingTimerRef.current = setInterval(() => {
                setRecordingCountdown(prev => {
                    if (prev <= 1) {
                        stopRecording();
                        return MAX_RECORDING_SECONDS;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (recordingTimerRef.current) {
                clearInterval(recordingTimerRef.current);
                recordingTimerRef.current = null;
            }
            setRecordingCountdown(MAX_RECORDING_SECONDS);
        }
        return () => {
            if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
        };
    }, [state.status]);

    // Cleanup audio URL on unmount
    useEffect(() => {
        return () => {
            if (state.audioUrl) URL.revokeObjectURL(state.audioUrl);
        };
    }, [state.audioUrl]);

    // --- Start Recording ---
    const startRecording = async () => {
        // Check daily limit
        if (dailyAttempts >= MAX_DAILY_ATTEMPTS) {
            alert(`Kamu sudah mencapai batas ${MAX_DAILY_ATTEMPTS} percobaan hari ini. Coba lagi besok!`);
            return;
        }

        // Check cooldown
        if (isOnCooldown) {
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: 16000,
                    channelCount: 1,
                }
            });

            // Use audio/webm with opus codec
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : 'audio/webm';

            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType });
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = async () => {
                const webmBlob = new Blob(audioChunksRef.current, { type: mimeType });
                const audioUrl = URL.createObjectURL(webmBlob);
                const duration = (Date.now() - startTimeRef.current) / 1000;

                // Increment daily attempts
                const newAttempts = dailyAttempts + 1;
                setDailyAttempts(newAttempts);
                localStorage.setItem('speakDaily-attempts', JSON.stringify({
                    date: new Date().toDateString(),
                    count: newAttempts
                }));

                // Start cooldown
                setIsOnCooldown(true);
                setTimeout(() => setIsOnCooldown(false), 5000);

                setState(s => ({ ...s, audioBlob: webmBlob, audioUrl, duration, status: 'processing' }));
                stream.getTracks().forEach(track => track.stop());

                // Convert WebM to WAV for Azure compatibility
                try {
                    const wavBlob = await convertToWav(webmBlob);
                    await processWithGroq(wavBlob, duration);
                } catch (conversionError) {
                    console.error('Audio conversion failed:', conversionError);
                    // Fallback: try with original WebM
                    await processWithGroq(webmBlob, duration);
                }
            };

            startTimeRef.current = Date.now();
            mediaRecorderRef.current.start();
            setState(s => ({ ...s, status: 'recording', transcript: '' }));

        } catch (err) {
            console.error('Microphone access denied:', err);
            alert('Please allow microphone access to use this feature.');
        }
    };

    // Convert WebM audio to WAV format for Azure Speech
    const convertToWav = async (webmBlob: Blob): Promise<Blob> => {
        const audioContext = new AudioContext({ sampleRate: 16000 });
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // Convert to 16-bit PCM WAV
        const numberOfChannels = 1;
        const sampleRate = 16000;
        const bitsPerSample = 16;

        // Resample if needed
        const offlineContext = new OfflineAudioContext(numberOfChannels, audioBuffer.duration * sampleRate, sampleRate);
        const source = offlineContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(offlineContext.destination);
        source.start();
        const resampledBuffer = await offlineContext.startRendering();

        // Get audio data
        const channelData = resampledBuffer.getChannelData(0);
        const wavBuffer = encodeWav(channelData, sampleRate, bitsPerSample);

        return new Blob([wavBuffer], { type: 'audio/wav' });
    };

    // Encode PCM data to WAV format
    const encodeWav = (samples: Float32Array, sampleRate: number, bitsPerSample: number): ArrayBuffer => {
        const buffer = new ArrayBuffer(44 + samples.length * 2);
        const view = new DataView(buffer);

        // WAV header
        const writeString = (offset: number, str: string) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, 36 + samples.length * 2, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true); // Subchunk1Size
        view.setUint16(20, 1, true); // AudioFormat (PCM)
        view.setUint16(22, 1, true); // NumChannels
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * 2, true); // ByteRate
        view.setUint16(32, 2, true); // BlockAlign
        view.setUint16(34, bitsPerSample, true);
        writeString(36, 'data');
        view.setUint32(40, samples.length * 2, true);

        // Write audio data
        let offset = 44;
        for (let i = 0; i < samples.length; i++) {
            const s = Math.max(-1, Math.min(1, samples[i]));
            view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            offset += 2;
        }

        return buffer;
    };

    // --- Stop Recording ---
    const stopRecording = () => {
        if (mediaRecorderRef.current && state.status === 'recording') {
            mediaRecorderRef.current.stop();
        }
    };

    // --- Process with Azure + SSE Stream ---
    const processWithGroq = async (audioBlob: Blob, duration: number) => {
        if (!sentence) return;

        // Reset progress state
        setProgressLog([]);
        setPartialResult(null);

        try {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'recording.wav');
            formData.append('expectedText', sentence.text);
            formData.append('tips', sentence.tips.join('\n'));

            // Use SSE stream
            const response = await fetch('/api/transcribe', {
                method: 'POST',
                body: formData,
            });

            if (!response.body) {
                throw new Error('No response body');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const jsonStr = line.slice(6);
                        try {
                            const event = JSON.parse(jsonStr);

                            if (event.type === 'progress') {
                                setProgressLog(prev => {
                                    // Mark previous step as done
                                    const updated = prev.map(p => ({ ...p, done: true }));
                                    // Add new step
                                    return [...updated, {
                                        step: event.data.step,
                                        message: event.data.message,
                                        detail: event.data.detail || '',
                                        done: false
                                    }];
                                });
                            } else if (event.type === 'partial') {
                                setPartialResult(event.data);
                            } else if (event.type === 'complete') {
                                const data = event.data;

                                // Mark all steps as done
                                setProgressLog(prev => prev.map(p => ({ ...p, done: true })));

                                // Save to localStorage
                                const today = new Date().toDateString();
                                localStorage.setItem('speakDaily-lastAttempt', today);
                                localStorage.setItem('speakDaily-lastResult', JSON.stringify({
                                    transcript: data.text,
                                    score: data.score,
                                    feedback: data.feedback,
                                    duration,
                                }));

                                setHasAttempted(true);
                                setState(s => ({
                                    ...s,
                                    transcript: data.text,
                                    status: 'done',
                                    score: data.score,
                                    feedback: data.feedback,
                                    timingFeedback: data.timingFeedback,
                                    accuracyScore: data.accuracyScore,
                                    fluencyScore: data.fluencyScore,
                                    words: data.words,
                                }));
                            } else if (event.type === 'error') {
                                throw new Error(event.data.message);
                            }
                        } catch (parseError) {
                            console.error('Parse error:', parseError);
                        }
                    }
                }
            }
        } catch (error) {
            console.error('API error:', error);
            setState(s => ({
                ...s,
                status: 'done',
                score: 0,
                feedback: [{
                    type: 'error',
                    message: error instanceof Error ? error.message : 'Gagal menganalisis rekaman. Coba lagi ya!'
                }],
            }));
        }
    };

    // --- Reset ---
    const resetRecording = () => {
        if (state.audioUrl) URL.revokeObjectURL(state.audioUrl);
        setState({
            status: 'idle',
            audioBlob: null,
            audioUrl: null,
            transcript: '',
            score: 0,
            feedback: [],
            duration: 0,
        });
    };

    // --- Play Audio ---
    const playAudio = () => {
        if (state.audioUrl) {
            const audio = new Audio(state.audioUrl);
            audio.play();
        }
    };

    if (!sentence) return null;

    return (
        <StudentLayout>
        <div className="min-h-screen font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">

            {/* Main Recording Section - Fits 100vh */}
            <main className="min-h-[100dvh] pt-24 flex flex-col justify-center items-center px-4 pb-8">
                <div className="max-w-3xl w-full">

                    {/* Header - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-4 md:mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-400 text-white rounded-full text-xs font-bold mb-2 shadow-lg">
                            <Calendar className="w-3 h-3" />
                            Daily Challenge
                        </div>
                        <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight mb-1">
                            SpeakDaily <Sparkles className="inline-block w-5 h-5 md:w-7 md:h-7 text-yellow-400 fill-current" />
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base">Practice your pronunciation. One sentence per day.</p>
                    </motion.div>

                    {/* Sentence Card - Compact */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-6 shadow-lg mb-4"
                    >
                        {/* Tape Effect */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-yellow-200/90 rotate-[2deg] z-10 shadow-sm"
                            style={{ clipPath: 'polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)' }}>
                        </div>

                        {/* Difficulty Badge */}
                        <div className="absolute top-4 right-4">
                            <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold uppercase",
                                sentence.difficulty === 'easy' && "bg-green-100 text-green-700",
                                sentence.difficulty === 'medium' && "bg-yellow-100 text-yellow-700",
                                sentence.difficulty === 'hard' && "bg-red-100 text-red-700",
                            )}>
                                {sentence.difficulty}
                            </span>
                        </div>

                        {/* Sentence */}
                        <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed text-center mt-4 mb-6">
                            "{sentence.text}"
                        </p>

                        {/* Focus Areas */}
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {sentence.focusAreas.map((area, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                                    {area}
                                </span>
                            ))}
                        </div>

                        {/* Tips Toggle */}
                        <button
                            onClick={() => setShowTips(!showTips)}
                            className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors py-2"
                        >
                            <Lightbulb className="w-4 h-4" />
                            {showTips ? 'Hide Tips' : 'Show Pronunciation Tips'}
                            <ChevronRight className={cn("w-4 h-4 transition-transform", showTips && "rotate-90")} />
                        </button>

                        {/* Tips */}
                        <AnimatePresence>
                            {showTips && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <ul className="mt-4 space-y-2 text-sm text-gray-600 bg-gray-50 rounded-xl p-4">
                                        {sentence.tips.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Recording Controls - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-6 shadow-lg"
                    >
                        <div className="flex flex-col items-center">

                            {/* Status Text */}
                            {state.status === 'idle' && (
                                <div className="text-center mb-4">
                                    <p className="text-sm text-gray-500 font-medium">
                                        Press the button and read the sentence aloud
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {MAX_DAILY_ATTEMPTS - dailyAttempts} percobaan tersisa hari ini
                                    </p>
                                </div>
                            )}
                            {state.status === 'recording' && (
                                <div className="text-center mb-4">
                                    <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <span className="text-2xl font-mono font-bold">{recordingCountdown}s</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">Recording... Press again to stop</p>
                                </div>
                            )}
                            {state.status === 'processing' && (
                                <div className="text-left mb-4 w-full max-w-sm">
                                    <div className="space-y-2">
                                        {progressLog.map((log, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={cn(
                                                    "flex items-center gap-2 text-sm p-2 rounded-lg",
                                                    log.done ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-600"
                                                )}
                                            >
                                                {log.done ? (
                                                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                                ) : (
                                                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                                                )}
                                                <span className="font-medium">{log.message}</span>
                                                {log.detail && (
                                                    <span className="text-xs opacity-70">({log.detail})</span>
                                                )}
                                            </motion.div>
                                        ))}
                                        {progressLog.length === 0 && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                                                <span>Starting...</span>
                                            </div>
                                        )}
                                    </div>
                                    {/* Show partial results if available */}
                                    {partialResult && partialResult.words && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-3 p-2 bg-gray-50 rounded-lg"
                                        >
                                            <p className="text-xs text-gray-500 mb-1">Words detected:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {partialResult.words.map((w, i) => (
                                                    <span
                                                        key={i}
                                                        className={cn(
                                                            "text-xs px-2 py-0.5 rounded",
                                                            w.score >= 80 ? "bg-green-100 text-green-700" :
                                                                w.score >= 60 ? "bg-yellow-100 text-yellow-700" :
                                                                    "bg-red-100 text-red-700"
                                                        )}
                                                    >
                                                        {w.word}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                            {state.status === 'done' && (
                                <p className="text-sm text-green-600 mb-4 font-medium">
                                    ✓ Done! See your results below
                                </p>
                            )}

                            {/* Record Button */}
                            {state.status !== 'done' && (
                                <button
                                    onClick={state.status === 'recording' ? stopRecording : startRecording}
                                    disabled={state.status === 'processing'}
                                    className={cn(
                                        "w-24 h-24 rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 shadow-xl",
                                        state.status === 'recording'
                                            ? "bg-red-500 hover:bg-red-600 animate-pulse"
                                            : "bg-blue-600 hover:bg-blue-700",
                                        state.status === 'processing' && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {state.status === 'recording' ? (
                                        <Square className="w-10 h-10 text-white fill-current" />
                                    ) : state.status === 'processing' ? (
                                        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <Mic className="w-10 h-10 text-white" />
                                    )}
                                </button>
                            )}

                            {/* Playback & Retry (After Recording) */}
                            {state.status === 'done' && (
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={playAudio}
                                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700 transition-colors"
                                    >
                                        <Volume2 className="w-5 h-5" /> Play Recording
                                    </button>
                                    <button
                                        onClick={resetRecording}
                                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors"
                                    >
                                        <RotateCcw className="w-5 h-5" /> Try Again
                                    </button>
                                </div>
                            )}

                            {/* Live Transcript */}
                            {(state.status === 'recording' || state.status === 'processing') && state.transcript && (
                                <div className="mt-6 w-full p-4 bg-gray-50 rounded-xl text-gray-600 text-sm">
                                    <span className="font-bold text-gray-700">You said: </span>
                                    {state.transcript}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Results */}
                    <AnimatePresence>
                        {state.status === 'done' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg"
                            >
                                {/* Score */}
                                <div className="text-center mb-6">
                                    <div className={cn(
                                        "inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl font-black mb-3",
                                        state.score >= 80 && "bg-green-100 text-green-600",
                                        state.score >= 50 && state.score < 80 && "bg-yellow-100 text-yellow-600",
                                        state.score < 50 && "bg-red-100 text-red-600",
                                    )}>
                                        {state.score}%
                                    </div>
                                    <p className="text-gray-500 font-medium">
                                        {state.score >= 80 && "Excellent! 🎉"}
                                        {state.score >= 50 && state.score < 80 && "Good effort! 👍"}
                                        {state.score < 50 && "Keep practicing! 💪"}
                                    </p>
                                </div>

                                {/* Feedback */}
                                <div className="space-y-3 mb-6">
                                    {state.feedback.map((item, i) => (
                                        <div key={i} className={cn(
                                            "flex items-start gap-3 p-4 rounded-xl",
                                            item.type === 'success' && "bg-green-50 text-green-700",
                                            item.type === 'warning' && "bg-yellow-50 text-yellow-700",
                                            item.type === 'error' && "bg-red-50 text-red-700",
                                        )}>
                                            {item.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                                            {item.type === 'warning' && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                                            {item.type === 'error' && <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                                            <span className="text-sm font-medium">{item.message}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Azure Pronunciation Stats */}
                                {(state.accuracyScore !== undefined || state.fluencyScore !== undefined) && (
                                    <div className="flex items-center justify-center gap-4 p-4 bg-blue-50 rounded-xl mb-6">
                                        <div className="text-center px-4">
                                            <p className={cn(
                                                "text-2xl font-black",
                                                (state.accuracyScore || 0) >= 80 ? "text-green-600" : (state.accuracyScore || 0) >= 60 ? "text-yellow-600" : "text-red-500"
                                            )}>{state.accuracyScore || 0}</p>
                                            <p className="text-xs text-blue-500 font-medium">Accuracy</p>
                                        </div>
                                        <div className="w-px h-10 bg-blue-200"></div>
                                        <div className="text-center px-4">
                                            <p className={cn(
                                                "text-2xl font-black",
                                                (state.fluencyScore || 0) >= 80 ? "text-green-600" : (state.fluencyScore || 0) >= 60 ? "text-yellow-600" : "text-red-500"
                                            )}>{state.fluencyScore || 0}</p>
                                            <p className="text-xs text-blue-500 font-medium">Fluency</p>
                                        </div>
                                    </div>
                                )}

                                {/* Word-level Pronunciation Scores */}
                                {state.words && state.words.length > 0 && (
                                    <div className="p-4 bg-gray-50 rounded-xl mb-6">
                                        <p className="text-xs text-gray-500 mb-3 font-bold">Word-by-Word Analysis:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {state.words.map((w, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-lg text-sm font-medium relative group cursor-help",
                                                        w.accuracyScore >= 80 && "bg-green-100 text-green-700",
                                                        w.accuracyScore >= 60 && w.accuracyScore < 80 && "bg-yellow-100 text-yellow-700",
                                                        w.accuracyScore < 60 && "bg-red-100 text-red-700",
                                                        w.errorType !== 'None' && "ring-2 ring-red-400"
                                                    )}
                                                    title={`Score: ${w.accuracyScore} | ${w.errorType !== 'None' ? `Error: ${w.errorType}` : 'OK'}`}
                                                >
                                                    {w.word}
                                                    <span className="absolute -top-1 -right-1 text-[10px] bg-white rounded-full px-1 shadow">
                                                        {w.accuracyScore}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-400 mt-3">🟢 80+ | 🟡 60-79 | 🔴 &lt;60</p>
                                    </div>
                                )}

                                {/* Timing Feedback from AI */}
                                {state.timingFeedback && (
                                    <div className="p-4 bg-purple-50 rounded-xl mb-6 border border-purple-100">
                                        <p className="text-sm text-purple-700">
                                            <span className="font-bold">🎵 Ritme & Intonasi: </span>
                                            {state.timingFeedback}
                                        </p>
                                    </div>
                                )}

                                {/* What you said */}
                                {state.transcript && (
                                    <div className="p-4 bg-gray-50 rounded-xl mb-6">
                                        <p className="text-sm text-gray-500 mb-1 font-bold">What we heard:</p>
                                        <p className="text-gray-700">"{state.transcript}"</p>
                                    </div>
                                )}

                                {/* Share */}
                                <button
                                    onClick={() => {
                                        const text = `I scored ${state.score}% on today's SpeakDaily challenge! 🎤 Try it: englishchillcourse.site/speaking-test`;
                                        if (navigator.share) {
                                            navigator.share({ text });
                                        } else {
                                            navigator.clipboard.writeText(text);
                                            alert('Copied to clipboard!');
                                        }
                                    }}
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-gray-700 transition-colors"
                                >
                                    <Share2 className="w-5 h-5" /> Share Your Score
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </main>

        </div>
        </StudentLayout>
    );
}


