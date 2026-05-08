import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Did vs Didn't ❓❌",
        subtitle: "Basic Meeting 14",
        teacherNote: "Perkenalkan cara membuat pertanyaan dan negatif dalam past tense."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Did = auxiliary verb untuk past tense.",
            "Semua subjek (I/you/he/she/it/we/they) pakai 'did'.",
            "Setelah did/didn't, verb kembali ke bentuk dasar (V1)!"
        ],
        teacherNote: "Tegaskan bahwa tidak ada perubahan verb setelah did."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "Did you went home?", right: "Did you go home?" },
            { wrong: "She didn't ate breakfast.", right: "She didn't eat breakfast." },
            { wrong: "Did he played football?", right: "Did he play football?" }
        ],
        teacherNote: "Tekankan: setelah did/didn't, verb selalu V1."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "Question: Did + S + V1? | Negative: S + didn't + V1",
        content: [
            "Did untuk semua subjek (I/you/he/she/it/we/they)",
            "Didn't = did not",
            "V1 = bentuk dasar verb (tanpa -ed, tanpa irregular V2)"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Did", meaning: "Auxiliary untuk past tense", example: "Did you go?" },
            { term: "Didn't", meaning: "Did not (negatif)", example: "I didn't see him." },
            { term: "V1", meaning: "Bentuk dasar verb", example: "go, eat, play" },
            { term: "Auxiliary", meaning: "Kata bantu", example: "do, does, did" }
        ]
    },
    {
        type: 'concept',
        title: "Question & Negative in Past Tense",
        content: [
            "Pertanyaan: Did + S + V1? → 'Did you eat?'",
            "Negatif: S + didn't + V1 → 'I didn't eat.'",
            "Jawaban singkat: Yes, I did. / No, I didn't.",
            "WH-question: WH + did + S + V1? → 'What did you eat?'"
        ],
        teacherNote: "Berikan banyak contoh untuk setiap pola."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "Did she saw him?", right: "Did she see him?" },
            { wrong: "They didn't went.", right: "They didn't go." },
            { wrong: "Where did you went?", right: "Where did you go?" }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "___ you go to school? (Did)",
            "She ___ ___ breakfast. (didn't eat)",
            "___ he play football? (Did)",
            "We ___ ___ TV. (didn't watch)"
        ],
        teacherNote: "Drill cepat 3 menit."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Teman bertanya: 'Did you see the movie?'",
            template: "Jawab: 'Yes, I did.' atau 'No, I didn't. I was busy.'"
        },
        teacherNote: "Praktikkan Q&A dengan jawaban singkat."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Buat pertanyaan dan negatif:",
            "1. You/go to the party → Did ___? / ___ didn't ___.",
            "2. She/buy a dress → Did ___? / ___ didn't ___.",
            "3. They/watch the game → Did ___? / ___ didn't ___."
        ],
        teacherNote: "Beri waktu 4 menit untuk menyelesaikan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ Did you went home?",
            "❌ She didn't ate.",
            "❌ Did he played?",
            "→ Setelah did/didn't, verb V1!"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "WH-Questions in Past",
        content: [
            "What did you do? | Where did you go?",
            "When did he come? | Why did she leave?",
            "Who did you meet? | How did they do it?"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Pertanyaan positif", sayThis: "Did you go?", dontSayThis: "Did you went?" },
            { context: "Negatif", sayThis: "I didn't go.", dontSayThis: "I didn't went." },
            { context: "Jawaban singkat Yes", sayThis: "Yes, I did.", dontSayThis: "Yes, I went." },
            { context: "WH-question", sayThis: "What did you eat?", dontSayThis: "What did you ate?" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Tulis 10 pertanyaan dengan 'did' tentang aktivitas temanmu",
            "Tulis 10 kalimat negatif dengan 'didn't'",
            "Buat dialog Q&A tentang liburan (minimal 5 pasang)"
        ]
    },
    {
        type: 'title',
        title: "Excellent! 🎉",
        subtitle: "Did + V1 = Questions & Negatives in Past!",
        teacherNote: "Review: setelah did/didn't, verb selalu V1!"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pertanyaan past tense: '___ you go to school yesterday?'",
        options: ["Do", "Did", "Does", "Are"],
        correctIndex: 1,
        explanation: "Did untuk pertanyaan past tense."
    },
    {
        question: "Pilih yang BENAR: 'Did you ___ home?'",
        options: ["went", "go", "going", "gone"],
        correctIndex: 1,
        explanation: "Setelah did, verb kembali ke V1: go."
    },
    {
        question: "Negatif past tense: 'I ___ ___ breakfast.'",
        options: [
            "didn't / ate",
            "didn't / eat",
            "not / eat",
            "don't / ate"
        ],
        correctIndex: 1,
        explanation: "Didn't + V1: didn't eat."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "Did you see him?",
            "She didn't go.",
            "Did he played football?",
            "I didn't eat."
        ],
        correctIndex: 2,
        explanation: "'Did he played' salah. Seharusnya: 'Did he play?'"
    },
    {
        question: "Jawaban singkat positif untuk 'Did you go?'",
        options: ["Yes, I went.", "Yes, I did.", "Yes, I go.", "Yes, I do."],
        correctIndex: 1,
        explanation: "Jawaban singkat: Yes, I did. / No, I didn't."
    },
    {
        question: "Pilih yang BENAR: 'She didn't ___ the bus.'",
        options: ["take", "took", "taken", "taking"],
        correctIndex: 0,
        explanation: "Setelah didn't, verb kembali ke V1: take."
    },
    {
        question: "Pertanyaan: 'What did you ___?'",
        options: ["ate", "eat", "eating", "eaten"],
        correctIndex: 1,
        explanation: "Setelah did, verb kembali ke V1: eat."
    },
    {
        question: "Pilih yang BENAR: '___ did you go there?'",
        options: ["What", "Where", "When", "Why"],
        correctIndex: 3,
        explanation: "'Why did you go there?' untuk menanyakan alasan."
    },
    {
        question: "Negatif dari 'I saw him' adalah:",
        options: [
            "I didn't saw him.",
            "I didn't see him.",
            "I not saw him.",
            "I don't see him."
        ],
        correctIndex: 1,
        explanation: "Didn't + V1: didn't see."
    },
    {
        question: "Pertanyaan: '___ did you meet?'",
        options: ["What", "Where", "Who", "When"],
        correctIndex: 2,
        explanation: "'Who did you meet?' untuk menanyakan orang."
    },
    {
        question: "Manakah yang menggunakan 'did' dengan benar?",
        options: [
            "Did you went home?",
            "She didn't ate.",
            "Did they play?",
            "Did he saw me?"
        ],
        correctIndex: 2,
        explanation: "'Did they play?' adalah kalimat yang benar (did + V1)."
    },
    {
        question: "Pilih yang BENAR: 'We didn't ___ anything.'",
        options: ["buy", "bought", "buying", "buys"],
        correctIndex: 0,
        explanation: "Setelah didn't, verb kembali ke V1: buy."
    },
    {
        question: "Pertanyaan tentang waktu: '___ did you arrive?'",
        options: ["What", "Where", "When", "Who"],
        correctIndex: 2,
        explanation: "'When did you arrive?' untuk menanyakan waktu."
    },
    {
        question: "Jawaban singkat negatif untuk 'Did she call?'",
        options: ["No, she didn't.", "No, she didn't called.", "No, she not.", "No, she no."],
        correctIndex: 0,
        explanation: "Jawaban singkat negatif: No, she didn't."
    },
    {
        question: "Pilih yang BENAR: 'Did he ___ to work?'",
        options: ["go", "went", "gone", "going"],
        correctIndex: 0,
        explanation: "Setelah did, verb kembali ke V1: go."
    },
    {
        question: "Aturan penting setelah did/didn't:",
        options: [
            "Verb tetap V2",
            "Verb kembali ke V1",
            "Verb pakai -ing",
            "Verb pakai -ed"
        ],
        correctIndex: 1,
        explanation: "Setelah did/didn't, verb SELALU kembali ke bentuk dasar (V1)."
    },
    {
        question: "Pilih yang BENAR: '___ did they do that?'",
        options: ["What", "How", "Where", "Why"],
        correctIndex: 1,
        explanation: "'How did they do that?' untuk menanyakan cara."
    },
    {
        question: "Perbaiki: 'Did you saw the movie?'",
        options: [
            "Did you see the movie?",
            "Did you saw the movie?",
            "Do you see the movie?",
            "Did you seen the movie?"
        ],
        correctIndex: 0,
        explanation: "Setelah did, verb kembali ke V1: see."
    },
    {
        question: "Negatif dari 'They went to Bali' adalah:",
        options: [
            "They didn't went to Bali.",
            "They didn't go to Bali.",
            "They not went to Bali.",
            "They don't go to Bali."
        ],
        correctIndex: 1,
        explanation: "Didn't + V1: didn't go."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "Did she went to school?",
            "Did he play football?",
            "They didn't ate lunch.",
            "Did you saw him?"
        ],
        correctIndex: 1,
        explanation: "'Did he play football?' adalah kalimat yang benar."
    }
];
