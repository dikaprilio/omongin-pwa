"use client";

import { useState, useRef, useCallback } from "react";

export type RecordingStatus = "idle" | "recording" | "stopped";

interface UseRecorderReturn {
    status: RecordingStatus;
    audioBlob: Blob | null;
    audioUrl: string | null;
    duration: number;
    error: string | null;
    startRecording: () => Promise<void>;
    stopRecording: () => void;
    resetRecording: () => void;
}

const MAX_RECORDING_SECONDS = 30;

export function useRecorder(): UseRecorderReturn {
    const [status, setStatus] = useState<RecordingStatus>("idle");
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [duration, setDuration] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const startTimeRef = useRef<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const startRecording = useCallback(async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: 16000,
                    channelCount: 1,
                },
            });
            streamRef.current = stream;

            const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
                ? "audio/webm;codecs=opus"
                : "audio/webm";

            const recorder = new MediaRecorder(stream, { mimeType });
            mediaRecorderRef.current = recorder;
            chunksRef.current = [];
            startTimeRef.current = Date.now();

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: mimeType });
                const url = URL.createObjectURL(blob);
                const dur = (Date.now() - startTimeRef.current) / 1000;

                stream.getTracks().forEach((t) => t.stop());
                streamRef.current = null;

                setAudioBlob(blob);
                setAudioUrl(url);
                setDuration(Math.round(dur * 10) / 10);
                setStatus("stopped");
            };

            recorder.onerror = () => {
                setError("Recording error. Please try again.");
                setStatus("idle");
            };

            recorder.start();
            setStatus("recording");

            // Auto-stop after max duration
            timerRef.current = setTimeout(() => {
                if (recorder.state === "recording") {
                    recorder.stop();
                }
            }, MAX_RECORDING_SECONDS * 1000);
        } catch (err) {
            console.error("Microphone access denied:", err);
            setError("Microphone access is required. Please allow it in your browser settings.");
        }
    }, []);

    const stopRecording = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            mediaRecorderRef.current.stop();
        }
    }, []);

    const resetRecording = useCallback(() => {
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
        }
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
        }
        setAudioBlob(null);
        setAudioUrl(null);
        setDuration(0);
        setError(null);
        setStatus("idle");
    }, [audioUrl]);

    return {
        status,
        audioBlob,
        audioUrl,
        duration,
        error,
        startRecording,
        stopRecording,
        resetRecording,
    };
}
