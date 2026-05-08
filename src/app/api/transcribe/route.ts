import { NextRequest } from 'next/server';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Types
interface PronunciationWord {
    word: string;
    accuracyScore: number;
    errorType: string;
    phonemes: { phoneme: string; accuracyScore: number }[];
}

interface PronunciationResult {
    accuracyScore: number;
    fluencyScore: number;
    completenessScore: number;
    pronunciationScore: number;
    words: PronunciationWord[];
}

// Security Constants
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const MAX_REQUESTS_PER_MIN = 10;
const MAX_TEXT_LENGTH = 500;
const ALLOWED_TYPES = ['audio/wav', 'audio/x-wav', 'audio/webm', 'audio/mpeg', 'audio/mp3'];

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
        return true;
    }

    if (record.count >= MAX_REQUESTS_PER_MIN) {
        return false;
    }

    record.count++;
    return true;
}

export async function POST(request: NextRequest) {
    // Create a streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
        async start(controller) {
            const send = (type: string, data: unknown) => {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type, data })}\n\n`));
            };

            try {
                // Check API keys
                if (!process.env.AZURE_SPEECH_KEY || !process.env.AZURE_SPEECH_REGION) {
                    send('error', { message: 'Azure credentials not configured' });
                    controller.close();
                    return;
                }

                // 1. Rate Limiting
                const ip = request.headers.get('x-forwarded-for') || 'anonymous';
                if (!checkRateLimit(ip)) {
                    send('error', { message: 'Too many requests. Please try again in a minute.' });
                    controller.close();
                    return;
                }

                const formData = await request.formData();
                const audioFile = formData.get('audio') as File;
                const expectedText = formData.get('expectedText') as string;
                const tips = formData.get('tips') as string;

                if (!audioFile || !expectedText) {
                    send('error', { message: 'Missing audio or expected text' });
                    controller.close();
                    return;
                }

                // 2. Validate File Size
                if (audioFile.size > MAX_FILE_SIZE) {
                    send('error', { message: 'Audio file too large (max 2MB)' });
                    controller.close();
                    return;
                }

                // 3. Validate Text Length
                if (expectedText.length > MAX_TEXT_LENGTH) {
                    send('error', { message: 'Text too long' });
                    controller.close();
                    return;
                }

                // 4. Validate MIME Type (Optional - strict check)
                if (!ALLOWED_TYPES.includes(audioFile.type)) {
                    // Log but allow for now as browser mime types can vary
                    console.warn('Unknown MIME type:', audioFile.type);
                }

                // Step 1: Audio received
                send('progress', { step: 1, message: 'Audio received', detail: `${(audioFile.size / 1024).toFixed(1)} KB` });

                const arrayBuffer = await audioFile.arrayBuffer();
                const audioBuffer = Buffer.from(arrayBuffer);

                // Step 2: Processing with Azure
                send('progress', { step: 2, message: 'Sending to Our AI Teacher...', detail: 'Analyzing pronunciation' });

                const result = await assessPronunciation(
                    audioBuffer,
                    expectedText,
                    process.env.AZURE_SPEECH_KEY,
                    process.env.AZURE_SPEECH_REGION
                );

                if (!result) {
                    send('error', { message: 'Pronunciation assessment failed' });
                    controller.close();
                    return;
                }

                // Step 3: Got Azure results
                send('progress', {
                    step: 3,
                    message: 'Analysis complete',
                    detail: `${result.words.length} words analyzed`
                });
                send('partial', {
                    accuracyScore: result.accuracyScore,
                    fluencyScore: result.fluencyScore,
                    words: result.words.map(w => ({ word: w.word, score: w.accuracyScore }))
                });

                // Step 4: Generating AI feedback
                let aiFeedback = null;
                if (process.env.GEMINI_API_KEY) {
                    send('progress', { step: 4, message: 'Generating AI feedback...', detail: 'Gemini analyzing' });
                    aiFeedback = await generateFeedback(result, expectedText, tips);
                }

                // Step 5: Complete
                send('progress', { step: 5, message: 'Complete!', detail: '' });
                send('complete', {
                    text: result.words.map(w => w.word).join(' '),
                    score: result.pronunciationScore,
                    accuracyScore: result.accuracyScore,
                    fluencyScore: result.fluencyScore,
                    completenessScore: result.completenessScore,
                    words: result.words,
                    feedback: aiFeedback?.feedback || [{ type: 'success', message: `Score: ${result.pronunciationScore}/100` }],
                    timingFeedback: aiFeedback?.timingFeedback || '',
                    detailedAnalysis: aiFeedback?.detailedAnalysis || '',
                });

            } catch (error) {
                console.error('Stream error:', error);
                send('error', { message: error instanceof Error ? error.message : 'Unknown error' });
            } finally {
                controller.close();
            }
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
        },
    });
}

// Azure Pronunciation Assessment
async function assessPronunciation(
    audioBuffer: Buffer,
    referenceText: string,
    subscriptionKey: string,
    region: string
): Promise<PronunciationResult | null> {
    return new Promise((resolve) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, region);
        speechConfig.speechRecognitionLanguage = 'en-US';

        const pushStream = sdk.AudioInputStream.createPushStream(
            sdk.AudioStreamFormat.getWaveFormatPCM(16000, 16, 1)
        );
        pushStream.write(audioBuffer.buffer.slice(
            audioBuffer.byteOffset,
            audioBuffer.byteOffset + audioBuffer.byteLength
        ) as ArrayBuffer);
        pushStream.close();
        const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);

        const pronunciationConfig = new sdk.PronunciationAssessmentConfig(
            referenceText,
            sdk.PronunciationAssessmentGradingSystem.HundredMark,
            sdk.PronunciationAssessmentGranularity.Phoneme,
            true
        );
        pronunciationConfig.enableProsodyAssessment = true;

        const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        pronunciationConfig.applyTo(recognizer);

        recognizer.recognizeOnceAsync(
            (speechResult) => {
                if (speechResult.reason === sdk.ResultReason.RecognizedSpeech) {
                    const pronunciationResult = sdk.PronunciationAssessmentResult.fromResult(speechResult);
                    const jsonResult = speechResult.properties.getProperty(sdk.PropertyId.SpeechServiceResponse_JsonResult);

                    let words: PronunciationWord[] = [];
                    try {
                        const parsed = JSON.parse(jsonResult);
                        const nBest = parsed.NBest?.[0];
                        if (nBest?.Words) {
                            words = nBest.Words.map((w: { Word: string; PronunciationAssessment: { AccuracyScore: number; ErrorType: string }; Phonemes?: { Phoneme: string; PronunciationAssessment: { AccuracyScore: number } }[] }) => ({
                                word: w.Word,
                                accuracyScore: w.PronunciationAssessment?.AccuracyScore || 0,
                                errorType: w.PronunciationAssessment?.ErrorType || 'None',
                                phonemes: (w.Phonemes || []).map((p: { Phoneme: string; PronunciationAssessment: { AccuracyScore: number } }) => ({
                                    phoneme: p.Phoneme,
                                    accuracyScore: p.PronunciationAssessment?.AccuracyScore || 0,
                                })),
                            }));
                        }
                    } catch (e) {
                        console.error('Parse error:', e);
                    }

                    resolve({
                        accuracyScore: pronunciationResult.accuracyScore,
                        fluencyScore: pronunciationResult.fluencyScore,
                        completenessScore: pronunciationResult.completenessScore,
                        pronunciationScore: pronunciationResult.pronunciationScore,
                        words,
                    });
                } else {
                    resolve(null);
                }
                recognizer.close();
            },
            (error) => {
                console.error('Recognition error:', error);
                recognizer.close();
                resolve(null);
            }
        );
    });
}

// AI Models with fallback order
const AI_MODELS = ['gemma-3-27b-it', 'gemma-3-12b-it'];

// Helper: delay for retry
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate AI feedback with retry and model fallback
async function generateFeedback(result: PronunciationResult, expectedText: string, tips: string) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const mispronounced = result.words.filter(w => w.accuracyScore < 70);
    const prompt = `You are an English coach for Indonesians. Based on Azure pronunciation scores:

EXPECTED: "${expectedText}"
SCORES: Overall ${result.pronunciationScore}/100, Accuracy ${result.accuracyScore}/100, Fluency ${result.fluencyScore}/100
${mispronounced.length > 0 ? `LOW ACCURACY WORDS: ${mispronounced.map(w => `"${w.word}": ${w.accuracyScore}`).join(', ')}` : 'All words good!'}
TIPS: ${tips || 'Focus on clarity.'}

Give 2 SHORT feedback points in Indonesian (casual tone). JSON only:
{"feedback":[{"type":"success|warning","message":"<max 60 chars>"}],"timingFeedback":"<1 sentence>","detailedAnalysis":"<1 sentence>"}`;

    // Try each model with retry
    for (const modelName of AI_MODELS) {
        const model = genAI.getGenerativeModel({ model: modelName });

        for (let attempt = 0; attempt < 2; attempt++) {
            try {
                const response = await model.generateContent(prompt);
                const text = response.response.text().replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
                return JSON.parse(text);
            } catch (error: unknown) {
                const isRateLimit = error instanceof Error &&
                    (error.message.includes('429') || error.message.includes('quota') || error.message.includes('rate'));

                if (isRateLimit && attempt === 0) {
                    // Wait 2 seconds before retry on same model
                    await delay(2000);
                    continue;
                }

                // If rate limited after retry, try next model
                if (isRateLimit) {
                    console.log(`Model ${modelName} rate limited, trying fallback...`);
                    break;
                }

                // For other errors, try next model
                console.error(`Model ${modelName} error:`, error);
                break;
            }
        }
    }

    // All models failed
    return null;
}

