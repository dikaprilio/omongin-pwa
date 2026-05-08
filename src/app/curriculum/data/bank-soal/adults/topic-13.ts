/**
 * Topic 13: Agreeing & Disagreeing
 * ---------------------------------
 * 30 questions covering agreement phrases, polite disagreement,
 * the 'I am agree' error fix, and debate etiquette.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 13,
    path: 'speaking-adults',
    title: "Agreeing & Disagreeing",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-13-001",
            question: "Grammar yang benar untuk setuju:",
            options: [
                "I am agree.",
                "I agree.",
                "I agreeing.",
                "I am agreed."
            ],
            correctIndex: 1,
            explanation: "'Agree' adalah verb, tidak perlu 'to be'. Benar: 'I agree' atau 'I disagree'.",
            difficulty: "easy",
            tags: ["grammar", "agree"]
        },
        {
            id: "adult-13-002",
            question: "Cara setuju dengan antusias:",
            options: [
                "I agree.",
                "Exactly! / Absolutely! / I couldn't agree more!",
                "Yes.",
                "Okay."
            ],
            correctIndex: 1,
            explanation: "'Exactly!', 'Absolutely!', 'I couldn't agree more!' menunjukkan enthusiasm dan strong agreement.",
            difficulty: "easy",
            tags: ["enthusiasm", "agreement"]
        },
        {
            id: "adult-13-003",
            question: "Cara setuju sebagian (partial agreement):",
            options: [
                "I don't agree.",
                "I see your point, but... / I agree to some extent.",
                "You're wrong.",
                "I fully agree."
            ],
            correctIndex: 1,
            explanation: "'I see your point, but...' atau 'I agree to some extent' menunjukkan qualified/partial agreement.",
            difficulty: "easy",
            tags: ["partial", "agreement"]
        },
        {
            id: "adult-13-004",
            question: "Cara tidak setuju dengan sopan:",
            options: [
                "You're wrong.",
                "I see your point, but I have a different view.",
                "That's stupid.",
                "I don't think so. (kasar)"
            ],
            correctIndex: 1,
            explanation: "'I see your point, but...' adalah cara diplomatic untuk disagree tanpa confrontational.",
            difficulty: "easy",
            tags: ["disagree", "polite"]
        },
        {
            id: "adult-13-005",
            question: "Frasa untuk menanyakan opini:",
            options: [
                "Tell me.",
                "What do you think? / What's your take on this?",
                "Say something.",
                "Your opinion?"
            ],
            correctIndex: 1,
            explanation: "'What do you think?' dan 'What's your take on this?' adalah cara yang natural untuk ask for opinion.",
            difficulty: "easy",
            tags: ["asking", "opinion"]
        },
        {
            id: "adult-13-006",
            question: "Frasa untuk strong disagreement yang tetap professional:",
            options: [
                "You're an idiot.",
                "I have to disagree. / With respect, I think...",
                "That's the dumbest thing I've heard.",
                "Shut up."
            ],
            correctIndex: 1,
            explanation: "'I have to disagree' atau 'With respect, I think...' adalah strong but professional disagreement.",
            difficulty: "easy",
            tags: ["strong", "professional"]
        },
        {
            id: "adult-13-007",
            question: "Cara setuju dalam bisnis formal:",
            options: [
                "Yeah, sure.",
                "I'm in agreement. / That aligns with my thinking.",
                "Okay, fine.",
                "Whatever you say."
            ],
            correctIndex: 1,
            explanation: "'I'm in agreement' dan 'That aligns with my thinking' adalah phrases formal untuk setuju.",
            difficulty: "easy",
            tags: ["formal", "business"]
        },
        {
            id: "adult-13-008",
            question: "Frasa untuk menghindari direct disagreement:",
            options: [
                "You're wrong.",
                "What about...? / Have you considered...?",
                "I hate your idea.",
                "That's bad."
            ],
            correctIndex: 1,
            explanation: "'What about...?' atau 'Have you considered...?' menawarkan alternative tanpa directly disagree.",
            difficulty: "easy",
            tags: ["avoid", "direct"]
        },
        {
            id: "adult-13-009",
            question: "'I'm on the fence' berarti:",
            options: [
                "Saya di pagar",
                "Saya belum memutuskan / netral",
                "Saya setuju",
                "Saya tidak setuju"
            ],
            correctIndex: 1,
            explanation: "'On the fence' = undecided, belum memihak, melihat kedua sisi sebelum memutuskan.",
            difficulty: "easy",
            tags: ["idiom", "neutral"]
        },
        {
            id: "adult-13-010",
            question: "Frasa untuk menunjukkan understanding sebelum disagree:",
            options: [
                "I don't care what you think.",
                "I understand where you're coming from, however...",
                "Whatever.",
                "You're not listening to me."
            ],
            correctIndex: 1,
            explanation: "'I understand where you're coming from' menunjukkan empathy sebelum expressing different view.",
            difficulty: "easy",
            tags: ["understanding", "disagree"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-13-011",
            question: "Mengapa 'I am agree' salah?",
            options: [
                "Karena tidak sopan",
                "Karena 'agree' adalah verb, tidak boleh dipasangkan dengan 'to be' (am/is/are)",
                "Karena terlalu pendek",
                "Karena grammar Indonesia berbeda"
            ],
            correctIndex: 1,
            explanation: "'Agree' adalah main verb. Benar: 'I agree' (S + V). Salah: 'I am agree' (S + to be + V).",
            difficulty: "medium",
            tags: ["grammar", "explanation"]
        },
        {
            id: "adult-13-012",
            question: "Bedanya 'I agree' dan 'I am in agreement':",
            options: [
                "Tidak ada bedanya",
                "'I agree' lebih umum; 'I am in agreement' lebih formal",
                "Yang satu salah",
                "Bedanya di grammar"
            ],
            correctIndex: 1,
            explanation: "Keduanya benar. 'I agree' lebih conversational. 'I am in agreement' lebih formal/business.",
            difficulty: "medium",
            tags: ["nuance", "formality"]
        },
        {
            id: "adult-13-013",
            question: "Cara setuju dengan teman dekat (casual):",
            options: [
                "I am in agreement with your statement.",
                "Tell me about it! / I know, right?",
                "I concur with your position.",
                "That aligns with my perspective."
            ],
            correctIndex: 1,
            explanation: "'Tell me about it!' dan 'I know, right?' adalah expressions casual untuk enthusiastic agreement.",
            difficulty: "medium",
            tags: ["casual", "friends"]
        },
        {
            id: "adult-13-014",
            question: "Mengapa 'With respect' digunakan sebelum strong disagreement?",
            options: [
                "Tidak ada gunanya",
                "Untuk soften disagreement dan menunjukkan regard untuk orangnya meski beda opini",
                "Karena wajib",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "'With respect' menunjukkan you value the person and the relationship meski beda opini.",
            difficulty: "medium",
            tags: ["softener", "respect"]
        },
        {
            id: "adult-13-015",
            question: "Cara terbaik untuk debat tanpa fighting:",
            options: [
                "Teriak lebih keras",
                "Use 'I' statements, acknowledge valid points, focus on ideas not people",
                "Tidak bicara",
                "Menang dengan cara apa pun"
            ],
            correctIndex: 1,
            explanation: "'I' statements (I think/believe), acknowledge others' points, dan focus on ideas membuat debat constructive.",
            difficulty: "medium",
            tags: ["debate", "technique"]
        },
        {
            id: "adult-13-016",
            question: "Frasa untuk 'agree to disagree':",
            options: [
                "We are both wrong.",
                "It seems we have different perspectives on this. Let's move forward.",
                "You win.",
                "I give up."
            ],
            correctIndex: 1,
            explanation: "'Agree to disagree' = acknowledge beda pandangan dengan gracefully dan move on.",
            difficulty: "medium",
            tags: ["agree-to-disagree", "resolution"]
        },
        {
            id: "adult-13-017",
            question: "Cultural consideration: Mengapa di Indonesia kadang orang tidak直接 disagree?",
            options: [
                "Karena tidak tahu bahasa Inggris",
                "Karena budaya menghargai harmony dan saving face",
                "Karena tidak punya opini",
                "Karena takut"
            ],
            correctIndex: 1,
            explanation: "Budaya Indonesia menghargai rukun. Indirect disagreement adalah cara menjaga harmony.",
            difficulty: "medium",
            tags: ["culture", "indonesia"]
        },
        {
            id: "adult-13-018",
            question: "Frasa untuk setuju dengan reservation:",
            options: [
                "I fully agree without any doubt.",
                "I agree in principle, but we need to consider the implementation.",
                "I disagree completely.",
                "You're wrong, but I'll go with it."
            ],
            correctIndex: 1,
            explanation: "'I agree in principle, but...' menunjukkan general agreement dengan concerns spesifik.",
            difficulty: "medium",
            tags: ["reservation", "qualified"]
        },
        {
            id: "adult-13-019",
            question: "Cara mengatakan '100% setuju' tanpa repetitive:",
            options: [
                "I agree 100%.",
                "I'm completely on board. / I couldn't agree more.",
                "I agree totally.",
                "Very agree."
            ],
            correctIndex: 1,
            explanation: "'I'm completely on board' dan 'I couldn't agree more' adalah varied ways untuk express total agreement.",
            difficulty: "medium",
            tags: ["variety", "total-agreement"]
        },
        {
            id: "adult-13-020",
            question: "Mengapa variety dalam agreement/disagreement penting?",
            options: [
                "Tidak penting",
                "Karena repetition 'I agree' membosankan; variety menunjukkan language sophistication",
                "Karena grammar mengharuskan",
                "Karena lebih pendek"
            ],
            correctIndex: 1,
            explanation: "Variety menunjukkan vocabulary range dan membuat conversation lebih engaging.",
            difficulty: "medium",
            tags: ["variety", "sophistication"]
        },
        {
            id: "adult-13-021",
            question: "Saat brainstorming, frasa untuk build on idea orang lain:",
            options: [
                "That's wrong.",
                "Building on that idea... / That's a great starting point. What if we also...",
                "I have a better idea.",
                "No, let's do this instead."
            ],
            correctIndex: 1,
            explanation: "'Building on that idea' menunjukkan you value contribution mereka sambil menambahkan.",
            difficulty: "medium",
            tags: ["brainstorming", "collaboration"]
        },
        {
            id: "adult-13-022",
            question: "Cara disagree dengan atasan dengan diplomatic:",
            options: [
                "You're wrong, boss.",
                "I see it a bit differently. Would you be open to another perspective?",
                "I don't think so.",
                "That's not going to work."
            ],
            correctIndex: 1,
            explanation: "Dengan senior, gunakan lebih banyak deference: 'Would you be open to...' menunjukkan respect.",
            difficulty: "medium",
            tags: ["hierarchy", "diplomatic"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-13-023",
            question: "Analisis: 'I am agree with you. You are wrong about this. I don't like your idea. This is bad.' Apa SEMUA masalahnya?",
            options: [
                "Tidak ada masalah",
                "Grammar error (I am agree), confrontational language, no softening, personal attack",
                "Hanya grammar",
                "Hanya terlalu pendek"
            ],
            correctIndex: 1,
            explanation: "Masalah: 'I am agree' (salah), 'You are wrong' (confrontational), tidak ada softening phrases.",
            difficulty: "hard",
            tags: ["analysis", "multiple-errors"]
        },
        {
            id: "adult-13-024",
            question: "Mengapa 'That's a fair point' adalah phrase yang powerful?",
            options: [
                "Tidak powerful",
                "Karena acknowledge validity dari argument meski kita beda kesimpulan",
                "Karena panjang",
                "Karena formal"
            ],
            correctIndex: 1,
            explanation: "'That's a fair point' menunjukkan intellectual honesty - Anda bisa lihat validity meski beda position.",
            difficulty: "hard",
            tags: ["fair-point", "power"]
        },
        {
            id: "adult-13-025",
            question: "Skenario: Tim Anda ingin strategy A, Anda yakin strategy B lebih baik. Respon yang terbaik:",
            options: [
                "Strategy A is wrong. We must do B.",
                "I see the merit in Strategy A. One thing I'd like us to consider is whether Strategy B might address the cost concern more effectively. What do you all think?",
                "I don't like A.",
                "You're all wrong."
            ],
            correctIndex: 1,
            explanation: "Ini acknowledge their view, introduce alternative dengan softening, dan invite discussion.",
            difficulty: "hard",
            tags: ["application", "persuasion"]
        },
        {
            id: "adult-13-026",
            question: "Apa perbedaan 'I don't agree' dan 'I disagree'?",
            options: [
                "Tidak ada bedanya",
                "'I disagree' lebih direct dan formal; 'I don't agree' bisa lebih tentative",
                "Yang satu benar, yang satu salah",
                "Sama-sama kasar"
            ],
            correctIndex: 1,
            explanation: "Keduanya acceptable. 'I disagree' lebih definitive. 'I don't agree' kadang bisa lebih soft/hesitant.",
            difficulty: "hard",
            tags: ["nuance", "difference"]
        },
        {
            id: "adult-13-027",
            question: "Mengapa ability to disagree dengan sopan adalah tanda emotional maturity?",
            options: [
                "Tidak benar",
                "Karena menunjukkan confidence, respect for diversity of thought, dan secure sense of self",
                "Karena orang dewasa suka bertengkar",
                "Karena aturan sosial"
            ],
            correctIndex: 1,
            explanation: "Mature communicators bisa beda opini tanpa personal animosity - ini secure dan respectful.",
            difficulty: "hard",
            tags: ["maturity", "psychology"]
        },
        {
            id: "adult-13-028",
            question: "Buat kalimat yang setuju dengan antusias menggunakan idiom:",
            options: [
                "I agree very much.",
                "You can count me in! / I'm totally on board with this!",
                "Yes, I think so.",
                "Okay, I agree."
            ],
            correctIndex: 1,
            explanation: "'You can count me in' dan 'I'm totally on board' adalah idiomatic enthusiastic agreement.",
            difficulty: "hard",
            tags: ["idiom", "enthusiasm"]
        },
        {
            id: "adult-13-029",
            question: "Mengapa 'Tell me about it!' berarti setuju (bukan minta penjelasan)?",
            options: [
                "Tidak berarti setuju",
                "Karena it's an idiom expressing 'I feel the same way' - shared experience/frustration",
                "Karena grammar-nya",
                "Karena konteks"
            ],
            correctIndex: 1,
            explanation: "'Tell me about it!' adalah ironic idiom: 'You don't need to tell me because I already know/experience it too!'",
            difficulty: "hard",
            tags: ["idiom", "irony"]
        },
        {
            id: "adult-13-030",
            question: "Final Challenge: Skill PALING penting dalam agreeing/disagreeing adalah:",
            options: [
                "Menguasai banyak vocabulary",
                "Reading the situation + choosing appropriate register + maintaining relationship",
                "Selalu menang dalam debat",
                "Menghindari disagreement"
            ],
            correctIndex: 1,
            explanation: "Communication excellence = match approach dengan context, maintain rapport, dan express views dengan clarity.",
            difficulty: "hard",
            tags: ["mastery", "context"]
        }
    ]
};
