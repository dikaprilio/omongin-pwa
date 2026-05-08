import React, { useState, useRef } from 'react';
import { PlacementQuestion } from '@/data/placement-questions';
import { Mic, Square, Loader2, Volume2, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface PronunciationQuestionProps {
    question: PlacementQuestion;
    onAnswer: (isCorrect: boolean, score: number) => void;
}

export default function PronunciationQuestion({ question, onAnswer }: PronunciationQuestionProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [recordingError, setRecordingError] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const recordingStartRef = useRef<number>(0);

    const startRecording = async () => {
        try {
            setRecordingError(null);
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: 16000,
                    channelCount: 1
                }
            });

            // Use standard WebM used by browsers
            // Prioritize opus for better compression if available
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : 'audio/webm';

            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType });
            chunksRef.current = [];
            recordingStartRef.current = Date.now();

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunksRef.current.push(e.data);
                }
            };

            mediaRecorderRef.current.onstop = async () => {
                const webmBlob = new Blob(chunksRef.current, { type: mimeType });
                const url = URL.createObjectURL(webmBlob);
                setAudioUrl(url);

                // Stop inputs
                stream.getTracks().forEach(track => track.stop());

                // Process
                await processRecording(webmBlob);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert("Microphone access is required for this question.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            // Check minimum recording duration (1 second)
            const elapsed = Date.now() - recordingStartRef.current;
            if (elapsed < 1000) {
                setRecordingError('Please record for at least 1 second');
                return;
            }

            setRecordingError(null);
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const processRecording = async (webmBlob: Blob) => {
        setIsProcessing(true);

        try {
            // Lazy load audio utility to convert format client-side
            const { convertWebMToWav } = await import('@/lib/audio-utils');
            const wavBlob = await convertWebMToWav(webmBlob);

            // Create FormData for API
            const formData = new FormData();
            const file = new File([wavBlob], "recording.wav", { type: 'audio/wav' });
            formData.append('audio', file);
            formData.append('referenceText', question.sentence || '');

            const res = await fetch('/api/interview/assess-pronunciation', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('API failed');

            const data = await res.json();
            setResult(data);

            const score = data.pronunciationScore || 0;
            const isCorrect = score >= 60;

            setTimeout(() => {
                onAnswer(isCorrect, score);
            }, 4000);

        } catch (err) {
            console.error("Processing failed", err);
            setRecordingError("Pronunciation API failed. Please ensure your microphone is clear and try again.");
            setResult(null);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto space-y-8 text-center">
            <div className="space-y-4">
                <h3 className="text-2xl font-medium leading-relaxed font-serif">
                    &quot;{question.sentence}&quot;
                </h3>

                {question.sentenceIndo && (
                    <div className="inline-flex items-center gap-2 text-muted-foreground bg-muted/30 px-4 py-2 rounded-full text-sm">
                        <HelpCircle className="w-4 h-4" />
                        <span>{question.sentenceIndo}</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col items-center justify-center gap-6 min-h-[200px]">
                {!result && !isProcessing ? (
                    <>
                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl",
                                isRecording
                                    ? "bg-red-500 hover:bg-red-600 animate-pulse ring-4 ring-red-200"
                                    : "bg-primary hover:bg-primary/90 hover:scale-105"
                            )}
                        >
                            {isRecording ? (
                                <Square className="w-10 h-10 text-white fill-current" />
                            ) : (
                                <Mic className="w-10 h-10 text-white" />
                            )}
                        </button>
                        <p className="text-muted-foreground animate-in fade-in">
                            {isRecording ? "Listening... Tap to stop" : "Tap microphone to read aloud"}
                        </p>
                        {recordingError && (
                            <p className="text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg animate-in fade-in">
                                ⚠️ {recordingError}
                            </p>
                        )}
                    </>
                ) : isProcessing ? (
                    <div className="flex flex-col items-center gap-3">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-muted-foreground">Analyzing pronunciation...</p>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4 w-full"
                    >
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-center p-4 bg-card border rounded-xl shadow-sm min-w-[100px]">
                                <div className="text-3xl font-bold text-primary mb-1">{result.pronunciationScore || 0}%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Score</div>
                            </div>
                            {result.fluencyScore !== undefined && (
                                <div className="text-center p-4 bg-card border rounded-xl shadow-sm min-w-[100px]">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">{result.fluencyScore}%</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Fluency</div>
                                </div>
                            )}
                        </div>

                        {/* Word breakdown if available */}
                        {result.words && result.words.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-2 mt-4 p-4 bg-muted/30 rounded-xl">
                                {result.words.map((w: any, i: number) => (
                                    <span
                                        key={i}
                                        className={cn(
                                            "px-2 py-1 rounded text-sm font-medium",
                                            w.accuracyScore >= 80 ? "text-green-700 bg-green-100" :
                                                w.accuracyScore >= 60 ? "text-yellow-700 bg-yellow-100" :
                                                    "text-red-700 bg-red-100"
                                        )}
                                        title={`Accuracy: ${w.accuracyScore}`}
                                    >
                                        {w.word}
                                    </span>
                                ))}
                            </div>
                        )}

                        <p className="text-sm text-muted-foreground">Continuing automatically...</p>
                    </motion.div>
                )}
            </div>

            {question.focusPhonemes && (
                <div className="text-xs text-muted-foreground">
                    Focus sounds: <span className="font-mono bg-muted px-1 rounded">{question.focusPhonemes.join(', ')}</span>
                </div>
            )}
        </div>
    );
}
