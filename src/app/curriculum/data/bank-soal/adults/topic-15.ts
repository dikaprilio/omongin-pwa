/**
 * Topic 15: Making Plans
 * -----------------------
 * 30 questions covering scheduling, invitations, rescheduling,
 * and professional planning communication.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 15,
    path: 'speaking-adults',
    title: "Making Plans",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-15-001",
            question: "Grammar yang benar untuk mengajak:",
            options: [
                "Would you like to join with us?",
                "Would you like to join us?",
                "Join us, please?",
                "You join us?"
            ],
            correctIndex: 1,
            explanation: "'Join' langsung diikuti objek, tidak perlu 'with'. Benar: 'Would you like to join us?'",
            difficulty: "easy",
            tags: ["grammar", "join"]
        },
        {
            id: "adult-15-002",
            question: "Cara menanyakan ketersediaan waktu:",
            options: [
                "You free?",
                "Are you free on Thursday? / Do you have time to talk?",
                "Can you meet?",
                "Meeting when?"
            ],
            correctIndex: 1,
            explanation: "'Are you free on Thursday?' dan 'Do you have time to talk?' adalah polite ways untuk check availability.",
            difficulty: "easy",
            tags: ["availability", "asking"]
        },
        {
            id: "adult-15-003",
            question: "Cara menyarankan waktu dengan sopan:",
            options: [
                "We meet at 3.",
                "How about 3 PM on Thursday? / Would 3 PM work for you?",
                "3 PM. Be there.",
                "Meet me 3."
            ],
            correctIndex: 1,
            explanation: "'How about...?' dan 'Would... work for you?' adalah suggestive dan considerate.",
            difficulty: "easy",
            tags: ["suggesting", "time"]
        },
        {
            id: "adult-15-004",
            question: "Frasa untuk konfirmasi janji:",
            options: [
                "Okay.",
                "Just to confirm... / So we're meeting at...",
                "See you.",
                "Alright then."
            ],
            correctIndex: 1,
            explanation: "'Just to confirm' dan 'So we're meeting at...' memastikan detail benar dan mutual understanding.",
            difficulty: "easy",
            tags: ["confirming", "details"]
        },
        {
            id: "adult-15-005",
            question: "Cara reschedule dengan sopan:",
            options: [
                "I can't meet. Change time.",
                "Would it be possible to move our meeting to Friday?",
                "Cancel meeting. New time later.",
                "I don't want Thursday anymore."
            ],
            correctIndex: 1,
            explanation: "'Would it be possible to move...?' adalah request yang polite dan gives the other person an out.",
            difficulty: "easy",
            tags: ["reschedule", "polite"]
        },
        {
            id: "adult-15-006",
            question: "Cara membatalkan dengan apology:",
            options: [
                "Can't come. Bye.",
                "I'm afraid I can't make it. / I need to cancel. Something has come up.",
                "Not coming.",
                "Busy. Another time."
            ],
            correctIndex: 1,
            explanation: "'I'm afraid I can't make it' atau 'Something has come up' adalah cancellations yang polite dengan brief explanation.",
            difficulty: "easy",
            tags: ["canceling", "apology"]
        },
        {
            id: "adult-15-007",
            question: "Frasa untuk 'rain check' (tunda ke lain waktu):",
            options: [
                "Cancel forever.",
                "Can we take a rain check?",
                "Never meet.",
                "I don't want to meet you."
            ],
            correctIndex: 1,
            explanation: "'Take a rain check' adalah idiom untuk postpone plan dengan intention untuk reschedule later.",
            difficulty: "easy",
            tags: ["rain-check", "idiom"]
        },
        {
            id: "adult-15-008",
            question: "Cara bilang 'saya double-booked':",
            options: [
                "I have two meetings.",
                "I'm double-booked at that time.",
                "I book twice.",
                "Two meetings same time."
            ],
            correctIndex: 1,
            explanation: "'I'm double-booked' adalah istilah standar untuk scheduling conflict.",
            difficulty: "easy",
            tags: ["double-booked", "phrases"]
        },
        {
            id: "adult-15-009",
            question: "Frasa untuk menutup call setelah menjadwalkan:",
            options: [
                "Bye.",
                "Great, I'll see you then. Looking forward to it.",
                "Okay. Done.",
                "Finished."
            ],
            correctIndex: 1,
            explanation: "'I'll see you then' dan 'Looking forward to it' adalah closings yang warm dan confirm the plan.",
            difficulty: "easy",
            tags: ["closing", "warm"]
        },
        {
            id: "adult-15-010",
            question: "Cara reminder yang sopan sebelum meeting:",
            options: [
                "Hey, meeting!",
                "Just a reminder that we're meeting tomorrow at 2.",
                "Don't forget!",
                "Meeting soon!"
            ],
            correctIndex: 1,
            explanation: "'Just a reminder' adalah phrase yang polite dan helpful untuk gentle nudge.",
            difficulty: "easy",
            tags: ["reminder", "polite"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-15-011",
            question: "Mengapa 'join with us' salah?",
            options: [
                "Tidak salah",
                "Karena 'join' adalah transitive verb yang langsung mengambil objek, tidak perlu 'with'",
                "Karena tidak sopan",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "'Join' langsung diikuti objek: join us, join the team, join the meeting. Tidak perlu 'with'.",
            difficulty: "medium",
            tags: ["grammar", "explanation"]
        },
        {
            id: "adult-15-012",
            question: "Cara invite yang lebih formal untuk business:",
            options: [
                "Wanna meet?",
                "I'd like to invite you to... / Would you be available for...?",
                "Let's meet.",
                "Come to my office."
            ],
            correctIndex: 1,
            explanation: "'I'd like to invite you to' dan 'Would you be available' adalah formal dan respectful.",
            difficulty: "medium",
            tags: ["formal", "business"]
        },
        {
            id: "adult-15-013",
            question: "Frasa untuk waktu yang fleksibel:",
            options: [
                "Must be this time.",
                "What time suits you best? / Whenever you're free.",
                "Only this time works.",
                "No other time."
            ],
            correctIndex: 1,
            explanation: "'What time suits you best' dan 'Whenever you're free' menunjukkan flexibility dan consideration.",
            difficulty: "medium",
            tags: ["flexible", "consideration"]
        },
        {
            id: "adult-15-014",
            question: "Mengapa detail (waktu, tempat, agenda) penting saat membuat plan?",
            options: [
                "Tidak penting",
                "Karena ambiguity menyebabkan confusion, no-shows, dan wasted time",
                "Karena aturan",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "Clear details prevent misunderstandings. Vague plans ('let's meet sometime') jarang terjadi.",
            difficulty: "medium",
            tags: ["details", "importance"]
        },
        {
            id: "adult-15-015",
            question: "Cara respons saat orang reschedule dengan wajar:",
            options: [
                "That's annoying.",
                "No problem at all. What time works better for you?",
                "You always do this.",
                "Okay, fine. (dengan nada kesal)"
            ],
            correctIndex: 1,
            explanation: "'No problem at all' dengan offer untuk find new time menunjukkan understanding dan flexibility.",
            difficulty: "medium",
            tags: ["rescheduling", "gracious"]
        },
        {
            id: "adult-15-016",
            question: "Frasa untuk 'sesegera mungkin' yang lebih sopan dari ASAP:",
            options: [
                "ASAP now!",
                "At your earliest convenience / When you have a moment",
                "Quickly!",
                "Now!"
            ],
            correctIndex: 1,
            explanation: "'At your earliest convenience' dan 'When you have a moment' lebih respectful daripada demanding 'ASAP'.",
            difficulty: "medium",
            tags: ["asap", "polite"]
        },
        {
            id: "adult-15-017",
            question: "Cara propose vague plan untuk masa depan:",
            options: [
                "We must meet on December 15 at 3 PM.",
                "We should get together sometime. / Let's catch up soon.",
                "No need to meet.",
                "Meet never."
            ],
            correctIndex: 1,
            explanation: "'We should get together sometime' dan 'Let's catch up soon' adalah vague plans yang tidak commit ke detail.",
            difficulty: "medium",
            tags: ["vague", "future"]
        },
        {
            id: "adult-15-018",
            question: "Mengapa 'Something has come up' lebih baik daripada detailed excuse?",
            options: [
                "Tidak lebih baik",
                "Karena brief, respectful of privacy, dan universally understood",
                "Karena lebih panjang",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "'Something has come up' adalah social code untuk 'I need to cancel but don't want to overshare'.",
            difficulty: "medium",
            tags: ["privacy", "social-code"]
        },
        {
            id: "adult-15-019",
            question: "Frasa untuk konfirmasi via email:",
            options: [
                "Meeting yes.",
                "Confirming our meeting for Thursday at 2 PM at your office.",
                "Okay see you.",
                "Thursday 2."
            ],
            correctIndex: 1,
            explanation: "Email confirmation harus include all details: day, time, location, agenda (jika ada).",
            difficulty: "medium",
            tags: ["email", "confirmation"]
        },
        {
            id: "adult-15-020",
            question: "Cara mengatakan 'saya akan menghubungi lagi untuk detail':",
            options: [
                "I call you later.",
                "I'll be in touch with the details. / I'll reach out to confirm.",
                "Talk later.",
                "See you around."
            ],
            correctIndex: 1,
            explanation: "'I'll be in touch' dan 'I'll reach out' adalah professional commitments untuk follow up.",
            difficulty: "medium",
            tags: ["follow-up", "commitment"]
        },
        {
            id: "adult-15-021",
            question: "Mengapa 'I need to jump on another call' adalah excuse yang acceptable?",
            options: [
                "Tidak acceptable",
                "Karena common business practice dan shows you value their time by not rushing",
                "Karena kasar",
                "Karena tidak jelas"
            ],
            correctIndex: 1,
            explanation: "Ini adalah professional way untuk exit dengan implying you have other commitments.",
            difficulty: "medium",
            tags: ["excuse", "professional"]
        },
        {
            id: "adult-15-022",
            question: "Cara menangani orang yang selalu reschedule:",
            options: [
                "Marahi mereka",
                "Suggest a different approach: 'Would it work better if we scheduled further in advance?'",
                "Tidak pernah meet mereka lagi",
                "Terima saja"
            ],
            correctIndex: 1,
            explanation: "Address pattern dengan constructive suggestion menunjukkan problem-solving attitude.",
            difficulty: "medium",
            tags: ["chronic", "solution"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-15-023",
            question: "Analisis: 'Hey, meeting Thursday? Okay see you. Wait no, Friday better? Okay Friday. Actually Monday. Just come whenever.' Apa masalahnya?",
            options: [
                "Tidak ada masalah",
                "Tidak ada commitment yang clear, terlalu banyak changes, tidak ada confirmation detail",
                "Hanya grammar",
                "Terlalu panjang"
            ],
            correctIndex: 1,
            explanation: "Ini contoh planning yang chaotic: vague, frequent changes, no clear confirmation. Recipe untuk no-show.",
            difficulty: "hard",
            tags: ["analysis", "chaotic"]
        },
        {
            id: "adult-15-024",
            question: "Mengapa 'On time is late, early is on time' adalah motto dalam business?",
            options: [
                "Tidak benar",
                "Karena reliability dan respect untuk others' time adalah professional currency",
                "Karena formal",
                "Karena aturan"
            ],
            correctIndex: 1,
            explanation: "Punctuality menunjukkan reliability dan respect. Being late melemahkan trust dan credibility.",
            difficulty: "hard",
            tags: ["punctuality", "reliability"]
        },
        {
            id: "adult-15-025",
            question: "Cultural consideration: Mengapa di beberapa cultures 'vague' planning lebih common?",
            options: [
                "Karena tidak organized",
                "Karena relationship-based cultures prioritize flexibility dan spontaneity over rigid schedules",
                "Karena malas",
                "Tidak ada alasannya"
            ],
            correctIndex: 1,
            explanation: "Different cultures have different relationships dengan time. Understanding ini membantu navigate global business.",
            difficulty: "hard",
            tags: ["culture", "time"]
        },
        {
            id: "adult-15-026",
            question: "Buat email lengkap untuk schedule business meeting dengan sopan:",
            options: [
                "Meeting?",
                "Dear Mr. Smith, I hope this email finds you well. I'd like to schedule a meeting to discuss the Q3 results. Would you be available for a 30-minute call next Tuesday or Wednesday afternoon? Please let me know what time works best for you. Best regards, [Name]",
                "Can we meet?",
                "Meeting next week. Confirm."
            ],
            correctIndex: 1,
            explanation: "Ini meliputi: greeting, purpose, specific request dengan options, polite closing.",
            difficulty: "hard",
            tags: ["email", "complete"]
        },
        {
            id: "adult-15-027",
            question: "Mengapa 'Let me check my calendar and get back to you' adalah phrase yang useful?",
            options: [
                "Tidak useful",
                "Karena shows you take commitments seriously dan tidak overcommit",
                "Karena menghindari",
                "Karena tidak mau meet"
            ],
            correctIndex: 1,
            explanation: "Ini menunjukkan thoughtful approach untuk commitments daripada impulsive yes yang mungkin broken.",
            difficulty: "hard",
            tags: ["thoughtful", "commitment"]
        },
        {
            id: "adult-15-028",
            question: "Skenario: Client important minta meet besok tapi Anda sudah fully booked. Respon terbaik:",
            options: [
                "I'm busy. No.",
                "I'd love to meet. I'm fully booked tomorrow, but I could make time Thursday morning or Friday afternoon. Would either of those work for you?",
                "Can't.",
                "Find another time yourself."
            ],
            correctIndex: 1,
            explanation: "Ini: show enthusiasm, explain constraint honestly, offer specific alternatives.",
            difficulty: "hard",
            tags: ["application", "client"]
        },
        {
            id: "adult-15-029",
            question: "Mengapa follow-through pada plans adalah trust-building?",
            options: [
                "Tidak penting",
                "Karena reliability adalah foundation dari professional relationships",
                "Karena aturan",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "Doing what you say you will do builds credibility. Broken plans erode trust over time.",
            difficulty: "hard",
            tags: ["trust", "reliability"]
        },
        {
            id: "adult-15-030",
            question: "Final Challenge: Elemen PALING penting untuk planning yang efektif adalah:",
            options: [
                "Banyaknya rencana",
                "Clarity + mutual confirmation + respect untuk others' time + follow-through",
                "Kecepatan janji",
                "Banyaknya options"
            ],
            correctIndex: 1,
            explanation: "Effective planning = clear communication, confirmed details, respect untuk time, dan execution.",
            difficulty: "hard",
            tags: ["mastery", "effective"]
        }
    ]
};
