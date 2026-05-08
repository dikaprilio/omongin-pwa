import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Irregular Verbs (V2) 🔄",
        subtitle: "Basic Meeting 13",
        teacherNote: "Perkenalkan kata kerja tidak beraturan yang sering digunakan."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Irregular verbs = kata kerja yang tidak pakai -ed.",
            "V2 (Verb 2) = bentuk past tense yang unik untuk setiap verb.",
            "Irregular verbs sering muncul dalam percakapan sehari-hari."
        ],
        teacherNote: "Tekankan pentingnya menghafal irregular verbs."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "I go-ed to school.", right: "I went to school." },
            { wrong: "She eated breakfast.", right: "She ate breakfast." },
            { wrong: "They buyed a car.", right: "They bought a car." }
        ],
        teacherNote: "Jelaskan bahwa irregular verbs tidak mengikuti pola -ed."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + V2 (irregular) + O",
        content: [
            "V2 = bentuk past tense yang berbeda dari V1",
            "Tidak ada aturan pasti, harus dihafal",
            "Contoh: go → went, eat → ate, buy → bought"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Irregular Verb", meaning: "Kata kerja tidak beraturan", example: "go → went → gone" },
            { term: "V1 (Base Form)", meaning: "Bentuk dasar", example: "go, eat, write" },
            { term: "V2 (Past Tense)", meaning: "Bentuk lampau", example: "went, ate, wrote" },
            { term: "V3 (Past Participle)", meaning: "Bentuk ketiga", example: "gone, eaten, written" }
        ]
    },
    {
        type: 'concept',
        title: "Common Irregular Verbs",
        content: [
            "Go → went | Come → came | Eat → ate | Drink → drank",
            "See → saw | Buy → bought | Write → wrote | Read → read",
            "Take → took | Give → gave | Know → knew | Think → thought",
            "Get → got | Find → found | Say → said | Tell → told"
        ],
        teacherNote: "Buat daftar irregular verbs yang sering digunakan."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "I seed a movie.", right: "I saw a movie." },
            { wrong: "He taked the bus.", right: "He took the bus." },
            { wrong: "We thinked about it.", right: "We thought about it." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "go → ___ (went)",
            "eat → ___ (ate)",
            "buy → ___ (bought)",
            "see → ___ (saw)"
        ],
        teacherNote: "Drill cepat 3 menit."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Teman bertanya: 'What did you do last weekend?'",
            template: "Jawab: 'I went to the beach.' atau 'I saw a great movie.'"
        },
        teacherNote: "Praktikkan dengan irregular verbs yang umum."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Ceritakan akhir pekanmu:",
            "1. I ___ (go) to the mall.",
            "2. I ___ (buy) some clothes.",
            "3. I ___ (eat) at a restaurant.",
            "4. I ___ (see) my friends."
        ],
        teacherNote: "Beri waktu 3 menit untuk menyelesaikan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ I go-ed to Jakarta.",
            "❌ She eated pizza.",
            "❌ They buyed new shoes.",
            "→ Hafal bentuk irregular-nya!"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Same V1, V2, V3 | Same V2, V3 | All Different",
        content: [
            "Same all: cut → cut → cut, put → put → put",
            "Same V2,V3: buy → bought → bought, think → thought → thought",
            "All different: go → went → gone, see → saw → seen"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "go", sayThis: "went", dontSayThis: "goed" },
            { context: "eat", sayThis: "ate", dontSayThis: "eated" },
            { context: "buy", sayThis: "bought", dontSayThis: "buyed" },
            { context: "see", sayThis: "saw", dontSayThis: "seed" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Hafalkan 30 irregular verbs (V1, V2, V3)",
            "Tulis cerita liburanmu menggunakan irregular verbs",
            "Buat flashcard untuk irregular verbs"
        ]
    },
    {
        type: 'title',
        title: "Fantastic! 🎯",
        subtitle: "Irregular Verbs = Practice & Memorize!",
        teacherNote: "Ingatkan untuk terus berlatih dan menghafal."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Past tense dari 'go' adalah:",
        options: ["goed", "went", "gone", "going"],
        correctIndex: 1,
        explanation: "Irregular: go → went."
    },
    {
        question: "Past tense dari 'eat' adalah:",
        options: ["eated", "ate", "eaten", "eating"],
        correctIndex: 1,
        explanation: "Irregular: eat → ate."
    },
    {
        question: "Past tense dari 'buy' adalah:",
        options: ["buyed", "bought", "buy", "buying"],
        correctIndex: 1,
        explanation: "Irregular: buy → bought."
    },
    {
        question: "Past tense dari 'see' adalah:",
        options: ["seed", "saw", "seen", "seeing"],
        correctIndex: 1,
        explanation: "Irregular: see → saw."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "I went home.",
            "She ate lunch.",
            "They goed to school.",
            "He bought a book."
        ],
        correctIndex: 2,
        explanation: "'Goed' salah. Seharusnya: 'went'."
    },
    {
        question: "Past tense dari 'take' adalah:",
        options: ["taked", "took", "taken", "taking"],
        correctIndex: 1,
        explanation: "Irregular: take → took."
    },
    {
        question: "Past tense dari 'write' adalah:",
        options: ["writed", "wrote", "written", "writing"],
        correctIndex: 1,
        explanation: "Irregular: write → wrote."
    },
    {
        question: "Past tense dari 'come' adalah:",
        options: ["comed", "came", "come", "coming"],
        correctIndex: 1,
        explanation: "Irregular: come → came."
    },
    {
        question: "Past tense dari 'drink' adalah:",
        options: ["drinked", "drank", "drunk", "drinking"],
        correctIndex: 1,
        explanation: "Irregular: drink → drank."
    },
    {
        question: "Pilih yang BENAR: 'I ___ a letter yesterday.'",
        options: ["write", "wrote", "written", "writing"],
        correctIndex: 1,
        explanation: "'Yesterday' → past tense: wrote."
    },
    {
        question: "Past tense dari 'get' adalah:",
        options: ["getted", "got", "gotten", "getting"],
        correctIndex: 1,
        explanation: "Irregular: get → got."
    },
    {
        question: "Pilih yang BENAR: 'She ___ to my house last night.'",
        options: ["come", "came", "comes", "coming"],
        correctIndex: 1,
        explanation: "'Last night' → past tense: came."
    },
    {
        question: "Past tense dari 'think' adalah:",
        options: ["thinked", "thought", "think", "thinking"],
        correctIndex: 1,
        explanation: "Irregular: think → thought."
    },
    {
        question: "Manakah yang menggunakan irregular verb dengan benar?",
        options: [
            "I goed to school.",
            "She taked the bus.",
            "We saw a movie.",
            "They buyed food."
        ],
        correctIndex: 2,
        explanation: "'We saw a movie' adalah kalimat yang benar."
    },
    {
        question: "Past tense dari 'read' adalah:",
        options: ["readed", "read", "red", "reading"],
        correctIndex: 1,
        explanation: "Irregular: read → read (spelling sama, pronunciation beda)."
    },
    {
        question: "Pilih yang BENAR: 'They ___ lunch at noon.'",
        options: ["eat", "ate", "eaten", "eating"],
        correctIndex: 1,
        explanation: "Past tense: ate."
    },
    {
        question: "Past tense dari 'know' adalah:",
        options: ["knowed", "knew", "known", "knowing"],
        correctIndex: 1,
        explanation: "Irregular: know → knew."
    },
    {
        question: "Pilih yang SALAH:",
        options: [
            "He went to Jakarta.",
            "I saw her yesterday.",
            "She drinked coffee.",
            "They bought a car."
        ],
        correctIndex: 2,
        explanation: "'Drinked' salah. Seharusnya: 'drank'."
    },
    {
        question: "Past tense dari 'give' adalah:",
        options: ["gived", "gave", "given", "giving"],
        correctIndex: 1,
        explanation: "Irregular: give → gave."
    },
    {
        question: "Irregular verbs perlu:",
        options: [
            "Ditambah -ed",
            "Dihafal satu per satu",
            "Diubah -y jadi -i",
            "Digandakan konsonan"
        ],
        correctIndex: 1,
        explanation: "Irregular verbs tidak punya aturan pasti dan perlu dihafal."
    }
];
