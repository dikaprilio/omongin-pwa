/**
 * Topic 14: Giving Opinions
 * --------------------------
 * 30 questions covering opinion phrases, advice giving,
 * avoiding 'I think' overuse, and persuasive communication.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 14,
    path: 'speaking-adults',
    title: "Giving Opinions",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-14-001",
            question: "Alternatif dari 'I think' yang lebih strong:",
            options: [
                "I thinking",
                "I believe / In my opinion",
                "I am think",
                "I thought"
            ],
            correctIndex: 1,
            explanation: "'I believe' dan 'In my opinion' adalah alternatives untuk 'I think' dengan nuansa yang berbeda.",
            difficulty: "easy",
            tags: ["alternatives", "think"]
        },
        {
            id: "adult-14-002",
            question: "Cara memberi saran yang sopan (bukan 'You should'):",
            options: [
                "You must...",
                "You might want to... / Have you considered...?",
                "You have to...",
                "Do this..."
            ],
            correctIndex: 1,
            explanation: "'You might want to' dan 'Have you considered' adalah suggestions yang softer dan less directive.",
            difficulty: "easy",
            tags: ["advice", "soft"]
        },
        {
            id: "adult-14-003",
            question: "Frasa untuk strong opinion:",
            options: [
                "I kind of think...",
                "I'm convinced that... / I strongly believe...",
                "Maybe...",
                "Perhaps..."
            ],
            correctIndex: 1,
            explanation: "'I'm convinced that' dan 'I strongly believe' menunjukkan conviction dan certainty.",
            difficulty: "easy",
            tags: ["strong", "opinion"]
        },
        {
            id: "adult-14-004",
            question: "Cara membuat suggestion di meeting:",
            options: [
                "Do this now.",
                "What if we...? / How about...?",
                "I order you to...",
                "This is what will happen."
            ],
            correctIndex: 1,
            explanation: "'What if we...?' dan 'How about...?' adalah invitational suggestions yang collaborative.",
            difficulty: "easy",
            tags: ["suggestion", "meeting"]
        },
        {
            id: "adult-14-005",
            question: "Frasa untuk tentative opinion:",
            options: [
                "I'm certain that...",
                "I tend to think... / I'm inclined to think...",
                "I have no doubt...",
                "It's obvious that..."
            ],
            correctIndex: 1,
            explanation: "'I tend to think' dan 'I'm inclined to think' menunjukkan opinion yang belum 100% certain.",
            difficulty: "easy",
            tags: ["tentative", "opinion"]
        },
        {
            id: "adult-14-006",
            question: "Cara bilang 'If I were you' dengan lebih soft:",
            options: [
                "You are wrong, do this.",
                "If I were in your position, I'd... / One option would be to...",
                "I am you, so...",
                "You should be me."
            ],
            correctIndex: 1,
            explanation: "'If I were in your position' atau 'One option would be' adalah softer than direct 'If I were you'.",
            difficulty: "easy",
            tags: ["advice", "conditional"]
        },
        {
            id: "adult-14-007",
            question: "Frasa untuk menunjukkan priority:",
            options: [
                "This is important.",
                "The most important thing is... / Our priority should be...",
                "This matters.",
                "We need this."
            ],
            correctIndex: 1,
            explanation: "'The most important thing is' dan 'Our priority should be' adalah phrases untuk emphasize priority.",
            difficulty: "easy",
            tags: ["priority", "phrases"]
        },
        {
            id: "adult-14-008",
            question: "Cara mengatakan 'saya khawatir' tanpa terlalu negative:",
            options: [
                "I'm worried!",
                "I'm concerned that... / I have reservations about...",
                "This is terrible!",
                "We're doomed!"
            ],
            correctIndex: 1,
            explanation: "'I'm concerned that' dan 'I have reservations about' menunjukkan worry dengan lebih measured/professional.",
            difficulty: "easy",
            tags: ["concern", "professional"]
        },
        {
            id: "adult-14-009",
            question: "Frasa untuk speculative opinion:",
            options: [
                "I know for sure...",
                "It's likely that... / There's a chance that...",
                "I'm certain...",
                "Without a doubt..."
            ],
            correctIndex: 1,
            explanation: "'It's likely that' dan 'There's a chance that' untuk speculation/possibility, bukan certainty.",
            difficulty: "easy",
            tags: ["speculation", "possibility"]
        },
        {
            id: "adult-14-010",
            question: "Cara meminta perspektif orang lain:",
            options: [
                "Tell me!",
                "I'd like to hear your thoughts. / What's your perspective on this?",
                "What do you know?",
                "Say something!"
            ],
            correctIndex: 1,
            explanation: "'I'd like to hear your thoughts' dan 'What's your perspective' adalah polite ways untuk invite input.",
            difficulty: "easy",
            tags: ["asking", "perspective"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-14-011",
            question: "Mengapa overusing 'I think' melemahkan opini Anda?",
            options: [
                "Tidak melemahkan",
                "Karena membuat Anda terdengar uncertain dan tidak confident",
                "Karena grammar-nya salah",
                "Karena terlalu pendek"
            ],
            correctIndex: 1,
            explanation: "Repetitive 'I think' menciptakan impression of uncertainty. Varied language menunjukkan confidence.",
            difficulty: "medium",
            tags: ["think", "overuse"]
        },
        {
            id: "adult-14-012",
            question: "Bedanya 'I believe' dan 'I think':",
            options: [
                "Tidak ada bedanya",
                "'I believe' lebih strong/conviction; 'I think' lebih common/neutral",
                "Yang satu benar, yang satu salah",
                "Sama-sama lemah"
            ],
            correctIndex: 1,
            explanation: "'I believe' menunjukkan stronger conviction, often about values/principles. 'I think' lebih neutral.",
            difficulty: "medium",
            tags: ["nuance", "difference"]
        },
        {
            id: "adult-14-013",
            question: "Cara memberi advice yang kuat tapi tetap respectful:",
            options: [
                "You have to do this!",
                "I strongly advise you to... / I'd urge you to consider...",
                "Do it or else!",
                "You must, no choice!"
            ],
            correctIndex: 1,
            explanation: "'I strongly advise' dan 'I'd urge you' adalah strong recommendations yang tetap respectful.",
            difficulty: "medium",
            tags: ["strong-advice", "respectful"]
        },
        {
            id: "adult-14-014",
            question: "Frasa untuk 'dari pengalaman saya':",
            options: [
                "I have experience.",
                "In my experience... / Based on my experience...",
                "I did this before.",
                "I know things."
            ],
            correctIndex: 1,
            explanation: "'In my experience' dan 'Based on my experience' adalah phrases yang establish credibility.",
            difficulty: "medium",
            tags: ["experience", "credibility"]
        },
        {
            id: "adult-14-015",
            question: "Cara mengatakan 'saya melihatnya berbeda' dengan diplomatic:",
            options: [
                "You're wrong.",
                "I see it a bit differently. / From my point of view...",
                "That's not right.",
                "I don't see it that way. (kasar)"
            ],
            correctIndex: 1,
            explanation: "'I see it a bit differently' adalah soft way untuk introduce alternative perspective.",
            difficulty: "medium",
            tags: ["different-view", "diplomatic"]
        },
        {
            id: "adult-14-016",
            question: "Mengapa 'From where I stand' adalah phrase yang useful?",
            options: [
                "Tidak useful",
                "Karena acknowledge that perspective is situational/subjective",
                "Karena formal",
                "Karena panjang"
            ],
            correctIndex: 1,
            explanation: "'From where I stand' implicitly acknowledge bahwa others might see it differently based on their position.",
            difficulty: "medium",
            tags: ["perspective", "acknowledgment"]
        },
        {
            id: "adult-14-017",
            question: "Cara mengajukan ide baru tanpa dismiss ide yang ada:",
            options: [
                "Your idea is bad, use mine.",
                "Building on that... / In addition to that... What if we also considered...",
                "Forget your idea.",
                "My idea is better."
            ],
            correctIndex: 1,
            explanation: "'Building on that' menunjukkan you value existing ideas sambil menambahkan new perspectives.",
            difficulty: "medium",
            tags: ["new-ideas", "collaboration"]
        },
        {
            id: "adult-14-018",
            question: "Frasa untuk 'saya yakin ini akan berhasil':",
            options: [
                "I think maybe it will work.",
                "I'm confident this will work. / I have every confidence that...",
                "It might work.",
                "Hopefully it works."
            ],
            correctIndex: 1,
            explanation: "'I'm confident this will work' dan 'I have every confidence' menunjukkan certainty dan optimism.",
            difficulty: "medium",
            tags: ["confidence", "certainty"]
        },
        {
            id: "adult-14-019",
            question: "Mengapa 'You should' sering terdengar bossy?",
            options: [
                "Tidak bossy",
                "Karena directive dan tidak memberikan choice/acknowledge others' autonomy",
                "Karena grammar-nya",
                "Karena pendek"
            ],
            correctIndex: 1,
            explanation: "'You should' adalah directive yang kuat. Alternatif yang softer memberikan sense of choice.",
            difficulty: "medium",
            tags: ["should", "bossy"]
        },
        {
            id: "adult-14-020",
            question: "Cara mengekspresikan concern tanpa terdengar negative:",
            options: [
                "This is a disaster!",
                "One thing that concerns me is... / I wonder if we should consider...",
                "We're going to fail!",
                "This won't work!"
            ],
            correctIndex: 1,
            explanation: "'One thing that concerns me' adalah measured way untuk raise potential issues.",
            difficulty: "medium",
            tags: ["concern", "measured"]
        },
        {
            id: "adult-14-021",
            question: "Frasa untuk mengakui validitas opini lain sebelum memberi opini sendiri:",
            options: [
                "You're wrong, and here's why.",
                "I understand why you'd say that. My view is slightly different...",
                "That makes no sense.",
                "I don't care what you think."
            ],
            correctIndex: 1,
            explanation: "'I understand why you'd say that' menunjukkan empathy dan intellectual openness.",
            difficulty: "medium",
            tags: ["validation", "empathy"]
        },
        {
            id: "adult-14-022",
            question: "Cara bilang 'Itu bukan ide bagus' dengan softening:",
            options: [
                "Bad idea.",
                "I'm not sure that's the best approach. / That might be challenging because...",
                "Terrible idea!",
                "No way!"
            ],
            correctIndex: 1,
            explanation: "'I'm not sure that's the best approach' adalah diplomatic way untuk express reservation.",
            difficulty: "medium",
            tags: ["negative", "softening"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-14-023",
            question: "Analisis: 'I think we should do this. I think this is good. I think we need to change. I think, I think, I think...' Apa masalahnya?",
            options: [
                "Tidak ada masalah",
                "Overuse 'I think' membuat speaker terdengar uncertain dan repetitive; perlu variety",
                "Grammar-nya salah",
                "Terlalu pendek"
            ],
            correctIndex: 1,
            explanation: "Repetitive 'I think' membosankan dan melemahkan impact. Gunakan variety: 'I believe', 'In my view', 'From my perspective'.",
            difficulty: "hard",
            tags: ["analysis", "variety"]
        },
        {
            id: "adult-14-024",
            question: "Mengapa 'As I see it' berbeda dari 'I think'?",
            options: [
                "Tidak berbeda",
                "'As I see it' lebih tentang observasi/perspective; 'I think' lebih tentang cognitive process",
                "Yang satu benar, yang satu salah",
                "Sama-sama lemah"
            ],
            correctIndex: 1,
            explanation: "'As I see it' frames opinion sebagai observasi dari one's vantage point. Nuansa yang subtle tapi berbeda.",
            difficulty: "hard",
            tags: ["nuance", "subtle"]
        },
        {
            id: "adult-14-025",
            question: "Skenario: Tim ingin meluncurkan produk bulan ini, Anda yakin belum siap. Respon terbaik:",
            options: [
                "We're not ready. Period.",
                "I share the enthusiasm for launching. One concern I'd raise is whether the testing coverage is sufficient for a smooth launch. What do you think about running one more round of QA?",
                "Bad idea. Don't do it.",
                "I don't like it."
            ],
            correctIndex: 1,
            explanation: "Ini: acknowledge their enthusiasm, raise specific concern, offer constructive alternative.",
            difficulty: "hard",
            tags: ["application", "persuasion"]
        },
        {
            id: "adult-14-026",
            question: "Apa hubungan antara opinion expression dan leadership?",
            options: [
                "Tidak ada hubungan",
                "Leaders perlu articulate vision dengan clarity dan inspire others - ini semua tentang opinion expression",
                "Leaders tidak perlu opini",
                "Hanya untuk presentasi"
            ],
            correctIndex: 1,
            explanation: "Leadership = ability to form, articulate, dan persuade others tentang vision/opinions. Core skill.",
            difficulty: "hard",
            tags: ["leadership", "connection"]
        },
        {
            id: "adult-14-027",
            question: "Mengapa 'If I may' atau 'With your permission' useful sebelum strong opinion?",
            options: [
                "Tidak useful",
                "Karena menunjukkan respect untuk speaking space dan social harmony",
                "Karena formal",
                "Karena panjang"
            ],
            correctIndex: 1,
            explanation: "These phrases acknowledge bahwa Anda taking up space dan asking for social license untuk speak.",
            difficulty: "hard",
            tags: ["politeness", "social"]
        },
        {
            id: "adult-14-028",
            question: "Buat kalimat yang menggabungkan: acknowledge others' view + your different view + question untuk discussion:",
            options: [
                "You're wrong. I'm right.",
                "I can certainly see the value in expanding to the Asian market. I'm wondering if we might be underestimating the regulatory complexity there. What's the team's take on the compliance requirements?",
                "I don't agree.",
                "Asia is hard. Let's not."
            ],
            correctIndex: 1,
            explanation: "Ini perfect formula: acknowledge (see the value) → your view (wondering about complexity) → invite discussion (what's the team's take).",
            difficulty: "hard",
            tags: ["formula", "complete"]
        },
        {
            id: "adult-14-029",
            question: "Mengapa ability to express opinions dengan nuance penting dalam global business?",
            options: [
                "Tidak penting",
                "Karena cultures berbeda dalam directness; nuance helps navigate diverse contexts",
                "Karena grammar",
                "Karena vocabulary"
            ],
            correctIndex: 1,
            explanation: "Global business = diverse cultural contexts. Ability to modulate directness adalah intercultural competence.",
            difficulty: "hard",
            tags: ["global", "intercultural"]
        },
        {
            id: "adult-14-030",
            question: "Final Challenge: Opinion expression yang effective memerlukan:",
            options: [
                "Banyaknya kata",
                "Clarity + appropriate strength + consideration for audience + variety",
                "Kecepatan bicara",
                "Volume yang keras"
            ],
            correctIndex: 1,
            explanation: "Effective opinion expression = clear message, strength yang sesuai situasi, audience awareness, dan language variety.",
            difficulty: "hard",
            tags: ["mastery", "effective"]
        }
    ]
};
