import { NextRequest, NextResponse } from 'next/server'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'

// Types
interface PronunciationWord {
    word: string
    accuracyScore: number
    errorType: string
}

interface AssessmentResult {
    transcript: string
    pronunciationScore: number
    fluencyScore: number
    accuracyScore: number
    wordsPerMinute: number
    words: PronunciationWord[]
    duration: number
}

export async function POST(request: NextRequest) {
    try {
        // Check Azure credentials
        if (!process.env.AZURE_SPEECH_KEY || !process.env.AZURE_SPEECH_REGION) {
            return NextResponse.json({ error: 'Azure Speech not configured' }, { status: 500 })
        }

        const formData = await request.formData()
        const audioFile = formData.get('audio') as File
        const referenceText = formData.get('referenceText') as string || ''
        const duration = parseFloat(formData.get('duration') as string) || 60

        if (!audioFile) {
            return NextResponse.json({ error: 'No audio file provided' }, { status: 400 })
        }

        // Create Azure pronunciation assessment
        const speechConfig = sdk.SpeechConfig.fromSubscription(
            process.env.AZURE_SPEECH_KEY,
            process.env.AZURE_SPEECH_REGION
        )

        // Configure for pronunciation assessment
        const pronunciationConfig = new sdk.PronunciationAssessmentConfig(
            referenceText,
            sdk.PronunciationAssessmentGradingSystem.HundredMark,
            sdk.PronunciationAssessmentGranularity.Phoneme,
            true // Enable miscue
        )
        pronunciationConfig.enableProsodyAssessment = true

        // Create audio config from buffer
        const pushStream = sdk.AudioInputStream.createPushStream()
        const arrayBuffer = await audioFile.arrayBuffer()
        pushStream.write(arrayBuffer)
        pushStream.close()
        const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream)

        // Create recognizer
        const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig)
        pronunciationConfig.applyTo(recognizer)

        // Perform recognition with assessment
        const result = await new Promise<AssessmentResult>((resolve, reject) => {
            let fullTranscript = ''
            const allWords: PronunciationWord[] = []
            let totalPronunciation = 0
            let totalFluency = 0
            let totalAccuracy = 0
            let segmentCount = 0

            recognizer.recognizing = (s, e) => {
                // Progressive recognition
            }

            recognizer.recognized = (s, e) => {
                if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
                    const pronunciationResult = sdk.PronunciationAssessmentResult.fromResult(e.result)

                    fullTranscript += e.result.text + ' '

                    // Collect scores
                    totalPronunciation += pronunciationResult.pronunciationScore || 0
                    totalFluency += pronunciationResult.fluencyScore || 0
                    totalAccuracy += pronunciationResult.accuracyScore || 0
                    segmentCount++

                    // Collect word-level data
                    const detailResult = pronunciationResult.detailResult
                    if (detailResult?.Words) {
                        for (const word of detailResult.Words) {
                            allWords.push({
                                word: word.Word,
                                accuracyScore: word.PronunciationAssessment?.AccuracyScore || 0,
                                errorType: word.PronunciationAssessment?.ErrorType || 'None'
                            })
                        }
                    }
                }
            }

            recognizer.canceled = (s, e) => {
                if (e.reason === sdk.CancellationReason.EndOfStream) {
                    recognizer.stopContinuousRecognitionAsync()
                } else if (e.reason === sdk.CancellationReason.Error) {
                    reject(new Error(e.errorDetails))
                }
            }

            recognizer.sessionStopped = () => {
                recognizer.close()

                // Calculate averages
                const avgPronunciation = segmentCount > 0 ? totalPronunciation / segmentCount : 0
                const avgFluency = segmentCount > 0 ? totalFluency / segmentCount : 0
                const avgAccuracy = segmentCount > 0 ? totalAccuracy / segmentCount : 0

                // Calculate WPM
                const wordCount = fullTranscript.trim().split(/\s+/).filter(w => w).length
                const wpm = duration > 0 ? Math.round((wordCount / duration) * 60) : 0

                resolve({
                    transcript: fullTranscript.trim(),
                    pronunciationScore: Math.round(avgPronunciation),
                    fluencyScore: Math.round(avgFluency),
                    accuracyScore: Math.round(avgAccuracy),
                    wordsPerMinute: wpm,
                    words: allWords,
                    duration
                })
            }

            recognizer.startContinuousRecognitionAsync(
                () => {
                    // Recognition started
                },
                (err) => reject(new Error(err))
            )
        })

        return NextResponse.json(result)

    } catch (error) {
        console.error('Interview pronunciation assessment error:', error)
        return NextResponse.json(
            { error: 'Failed to assess pronunciation' },
            { status: 500 }
        )
    }
}
