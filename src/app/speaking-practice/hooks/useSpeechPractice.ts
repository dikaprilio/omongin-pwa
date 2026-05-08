import { useState, useEffect, useRef, useCallback } from 'react';

// Define the SpeechRecognition types as they are not fully standard
declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

type PracticeState = 'setup' | 'practicing' | 'done';

const cleanWord = (word: string) => {
    return word.toLowerCase().replace(/[^a-z0-9]/g, '');
};

interface UseSpeechPracticeProps {
    onDone?: () => void;
}

export function useSpeechPractice({ onDone }: UseSpeechPracticeProps = {}) {
    // --- State ---
    const [viewState, setViewState] = useState<PracticeState>('setup');
    const [words, setWords] = useState<string[]>([]);

    // Status state
    const [isListening, setIsListening] = useState(false);
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [recognitionSupported, setRecognitionSupported] = useState(true);
    const [transcript, setTranscript] = useState('');

    // --- Strict Refs for Mobile Stability ---
    // React state closures within events often crash or misbehave on mobile,
    // so we store all active state in mutable refs that event listeners can always read fresh.
    const recognitionRef = useRef<any>(null);
    const isListeningRef = useRef(false);
    const shouldKeepListeningRef = useRef(false); // Mobile auto-restart workaround flag

    // Track active match logic to prevent stale closures
    const matchStateRef = useRef({
        words: [] as string[],
        activeWordIndex: 0,
    });

    // Update match ref whenever state changes
    useEffect(() => {
        matchStateRef.current = { words, activeWordIndex };
    }, [words, activeWordIndex]);

    // Check support on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRecognitionSupported(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
        }
    }, []);

    // --- Core Speech Logic ---
    const initRecognition = useCallback(() => {
        if (typeof window === 'undefined' || !recognitionSupported) return null;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) return null;

        const recognition = new SpeechRecognition();

        // Workaround: We keep continuous true, but mobile ignores it often.
        // We handle the disconnects manually in `onend`.
        recognition.continuous = true;

        // Workaround: interimResults=true duplicates words on Android Chrome.
        // We will keep it true for real-time feel, but our matching logic below handles duplication by matching individual words fuzzily.
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            isListeningRef.current = true;
            setIsListening(true);
        };

        recognition.onend = () => {
            isListeningRef.current = false;
            setIsListening(false);

            // MOBILE WORKAROUND: Force Restart
            // If the user didn't explicitly press "Stop", but the browser killed the mic (silence timeout), restart it.
            if (shouldKeepListeningRef.current) {
                // Short delay to prevent extreme rapid-fire loops
                setTimeout(() => {
                    if (shouldKeepListeningRef.current && recognitionRef.current) {
                        try {
                            recognitionRef.current.start();
                        } catch (e) {
                            console.warn("Could not auto-restart recognition", e);
                        }
                    }
                }, 200);
            }
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            // 'no-speech' happens constantly on Android when hesitating. We just swallow it.
            if (event.error !== 'aborted' && event.error !== 'no-speech') {
                isListeningRef.current = false;
                setIsListening(false);
            }
        };

        recognition.onresult = (event: any) => {
            // Android often duplicates text in `interimResults`. We just concatenate everything 
            // from the current result chunk and clean it.
            let currentTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                currentTranscript += event.results[i][0].transcript + ' ';
            }

            const freshTranscript = currentTranscript.trim();
            setTranscript(freshTranscript);

            // Directly run matching logic based on the freshest refs
            const { words: currentWords, activeWordIndex: refIndex } = matchStateRef.current;

            if (currentWords.length === 0 || refIndex >= currentWords.length) return;

            const targetWord = currentWords[refIndex];
            if (!targetWord) return;

            const cleanedTarget = cleanWord(targetWord);

            // Android Chrome Duplication workaround: just look at the last few chunks of raw text
            // spoken and see if the target word is inside it. We don't care about the grammar.
            const spokenWords = freshTranscript.split(/\s+/).map(cleanWord);
            const recentWords = spokenWords.slice(-6); // Look at last 6 words

            const isMatch = recentWords.some(spoken => {
                if (spoken === cleanedTarget) return true;
                if (cleanedTarget.length > 3 && spoken.includes(cleanedTarget)) return true;
                if (spoken.length > 3 && cleanedTarget.includes(spoken)) return true;
                return false;
            });

            if (isMatch) {
                // Clear transcript to avoid double matching
                setTranscript('');

                const nextIndex = refIndex + 1;
                setActiveWordIndex(nextIndex);

                // Update ref immediately so next result chunk sees the new word
                matchStateRef.current.activeWordIndex = nextIndex;

                if (nextIndex >= currentWords.length) {
                    // Done
                    shouldKeepListeningRef.current = false;
                    try { recognitionRef.current?.stop(); } catch (e) { }
                    setViewState('done');
                    onDone?.();
                }
            }
        };

        return recognition;
    }, [recognitionSupported, onDone]);

    // --- Actions ---
    const startListening = useCallback(() => {
        shouldKeepListeningRef.current = true;

        if (!recognitionRef.current) {
            recognitionRef.current = initRecognition();
        }

        if (!isListeningRef.current) {
            try {
                recognitionRef.current?.start();
            } catch (e) {
                console.warn("Already started", e);
            }
        }
    }, [initRecognition]);

    const stopListening = useCallback(() => {
        shouldKeepListeningRef.current = false;
        isListeningRef.current = false;
        try {
            recognitionRef.current?.stop();
        } catch (e) {
            // ignore
        }
        setIsListening(false);
    }, []);

    const toggleListening = useCallback(() => {
        if (isListeningRef.current) {
            stopListening();
        } else {
            startListening();
        }
    }, [isListeningRef, stopListening, startListening]);

    const setupPractice = useCallback((inputText: string) => {
        const wordsArray = inputText.trim().split(/\s+/).filter(w => w.length > 0);
        setWords(wordsArray);
        setActiveWordIndex(0);
        setViewState('practicing');
        setTranscript('');
    }, []);

    const skipWord = useCallback(() => {
        const { words: currentWords, activeWordIndex: currentIndex } = matchStateRef.current;
        const nextIndex = currentIndex + 1;

        setActiveWordIndex(nextIndex);
        setTranscript('');
        matchStateRef.current.activeWordIndex = nextIndex;

        if (nextIndex >= currentWords.length) {
            stopListening();
            setViewState('done');
            onDone?.();
        }
    }, [stopListening, onDone]);

    const resetPractice = useCallback(() => {
        stopListening();
        setViewState('setup');
        setWords([]);
        setActiveWordIndex(0);
        setTranscript('');
    }, [stopListening]);

    const tryAgain = useCallback(() => {
        stopListening();
        setActiveWordIndex(0);
        setViewState('setup');
        setTranscript('');
        setTimeout(() => setViewState('practicing'), 100);
    }, [stopListening]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            shouldKeepListeningRef.current = false;
            if (recognitionRef.current) {
                try { recognitionRef.current.stop(); } catch (e) { }
            }
        };
    }, []);

    return {
        viewState,
        words,
        activeWordIndex,
        isListening,
        transcript,
        recognitionSupported,
        actions: {
            setupPractice,
            toggleListening,
            skipWord,
            resetPractice,
            tryAgain
        }
    };
}
