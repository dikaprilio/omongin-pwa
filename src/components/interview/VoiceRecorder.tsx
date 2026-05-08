'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Square, Play, RefreshCw, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const MAX_DURATION_SECONDS = 60 // 1 minute max

interface VoiceRecorderProps {
    onRecordingComplete: (audioBlob: Blob, duration: number) => void
    disabled?: boolean
    className?: string
    maxDuration?: number // Override default max duration
}

export default function VoiceRecorder({
    onRecordingComplete,
    disabled,
    className,
    maxDuration = MAX_DURATION_SECONDS
}: VoiceRecorderProps) {
    const [isRecording, setIsRecording] = useState(false)
    const [duration, setDuration] = useState(0)
    const [reviewMode, setReviewMode] = useState(false)
    const [audioUrl, setAudioUrl] = useState<string | null>(null)
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null)
    const [recordedDuration, setRecordedDuration] = useState(0)

    // Audio playback state
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])
    const startTimeRef = useRef<number>(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const streamRef = useRef<MediaStream | null>(null)

    // Cleanup
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                mediaRecorderRef.current.stop()
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop())
            }
            if (audioUrl) URL.revokeObjectURL(audioUrl)
        }
    }, [audioUrl])

    // Auto-stop at max duration
    useEffect(() => {
        if (isRecording && duration >= maxDuration) {
            stopRecording()
        }
    }, [duration, maxDuration, isRecording])

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: 16000,
                    channelCount: 1,
                }
            })
            streamRef.current = stream

            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : 'audio/webm'

            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType })
            audioChunksRef.current = []

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data)
            }

            mediaRecorderRef.current.onstop = async () => {
                const webmBlob = new Blob(audioChunksRef.current, { type: mimeType })
                const finalDuration = (Date.now() - startTimeRef.current) / 1000
                stream.getTracks().forEach(track => track.stop())

                // Convert to WAV immediately for consistency
                let wavBlob = webmBlob
                try {
                    wavBlob = await convertToWav(webmBlob)
                } catch (e) {
                    console.error("WAV conversion failed, using WebM", e)
                }

                // Set state for review
                const url = URL.createObjectURL(wavBlob)
                setAudioUrl(url)
                setRecordedBlob(wavBlob)
                setRecordedDuration(finalDuration)
                setReviewMode(true)
            }

            startTimeRef.current = Date.now()
            setDuration(0)
            timerRef.current = setInterval(() => {
                const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)
                setDuration(elapsed)
            }, 1000)

            mediaRecorderRef.current.start()
            setIsRecording(true)
            setReviewMode(false)
            setAudioUrl(null)
            setRecordedBlob(null)

        } catch (err) {
            console.error('Microphone access denied:', err)
            alert('Please allow microphone access to use voice recording.')
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop()
        }
        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
        setIsRecording(false)
    }

    const handlePlayPreview = () => {
        if (!audioRef.current && audioUrl) {
            audioRef.current = new Audio(audioUrl)
            audioRef.current.onended = () => setIsPlaying(false)
        }

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
                setIsPlaying(false)
            } else {
                audioRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    const handleSubmit = () => {
        if (recordedBlob) {
            onRecordingComplete(recordedBlob, recordedDuration)
        }
    }

    const handleReset = () => {
        setReviewMode(false)
        setAudioUrl(null)
        setRecordedBlob(null)
        setIsPlaying(false)
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current = null
        }
    }

    // Convert WebM to WAV for Azure compatibility
    const convertToWav = async (webmBlob: Blob): Promise<Blob> => {
        const audioContext = new AudioContext({ sampleRate: 16000 })
        const arrayBuffer = await webmBlob.arrayBuffer()
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

        const samples = audioBuffer.getChannelData(0)
        const wavBuffer = encodeWav(samples, 16000, 16)
        return new Blob([wavBuffer], { type: 'audio/wav' })
    }

    const encodeWav = (samples: Float32Array, sampleRate: number, bitsPerSample: number): ArrayBuffer => {
        const bytesPerSample = bitsPerSample / 8
        const dataLength = samples.length * bytesPerSample
        const buffer = new ArrayBuffer(44 + dataLength)
        const view = new DataView(buffer)

        const writeString = (offset: number, str: string) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i))
            }
        }

        writeString(0, 'RIFF')
        view.setUint32(4, 36 + dataLength, true)
        writeString(8, 'WAVE')
        writeString(12, 'fmt ')
        view.setUint32(16, 16, true)
        view.setUint16(20, 1, true)
        view.setUint16(22, 1, true)
        view.setUint32(24, sampleRate, true)
        view.setUint32(28, sampleRate * bytesPerSample, true)
        view.setUint16(32, bytesPerSample, true)
        view.setUint16(34, bitsPerSample, true)
        writeString(36, 'data')
        view.setUint32(40, dataLength, true)

        let offset = 44
        for (let i = 0; i < samples.length; i++) {
            const sample = Math.max(-1, Math.min(1, samples[i]))
            view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true)
            offset += 2
        }

        return buffer
    }

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const remainingTime = maxDuration - duration
    const progressPercent = (duration / maxDuration) * 100

    if (reviewMode) {
        return (
            <div className={cn('flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-300', className)}>
                <div className="flex items-center gap-4">
                    {/* Play Button */}
                    <button
                        onClick={handlePlayPreview}
                        className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                        {isPlaying ? <Square className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>

                    <div className="text-left">
                        <p className="font-medium text-slate-700">Preview Answer</p>
                        <p className="text-sm text-slate-500">{formatDuration(recordedDuration)}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Re-record
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 shadow-md shadow-green-200 transition-all font-medium"
                    >
                        <Check className="w-4 h-4" />
                        Submit Answer
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={cn('flex flex-col items-center gap-4', className)}>
            {/* Progress Ring */}
            <div className="relative">
                <svg className="w-28 h-28 transform -rotate-90">
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-slate-200"
                    />
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - progressPercent / 100)}`}
                        className={cn(
                            'transition-all duration-300',
                            remainingTime <= 10 ? 'text-red-500' : 'text-blue-500'
                        )}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Recording Button (centered in ring) */}
                <motion.button
                    onClick={isRecording ? stopRecording : startRecording}
                    disabled={disabled}
                    className={cn(
                        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                        'w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300',
                        isRecording
                            ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30'
                            : 'bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                    whileTap={{ scale: 0.95 }}
                    animate={isRecording ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ repeat: isRecording ? Infinity : 0, duration: 1 }}
                >
                    {isRecording ? (
                        <Square className="w-8 h-8 text-white" />
                    ) : (
                        <Mic className="w-8 h-8 text-white" />
                    )}
                </motion.button>
            </div>

            {/* Status Text */}
            <div className="text-center">
                {isRecording ? (
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2 text-red-500">
                            <motion.div
                                className="w-2 h-2 bg-red-500 rounded-full"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            />
                            <span className="font-medium">{formatDuration(duration)}</span>
                        </div>
                        <span className={cn(
                            'text-xs',
                            remainingTime <= 10 ? 'text-red-500 font-medium' : 'text-slate-400'
                        )}>
                            {remainingTime}s remaining
                        </span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-slate-600 text-sm font-medium">Tap to record</span>
                        <span className="text-slate-400 text-xs">Max {maxDuration} seconds</span>
                    </div>
                )}
            </div>
        </div>
    )
}
