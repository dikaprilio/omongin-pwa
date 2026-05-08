import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Past Tense (To Be) ⏮️",
        subtitle: "Basic Meeting 11",
        teacherNote: "Perkenalkan bentuk lampau dari to be: was/were."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Past tense to be = untuk keadaan/identitas/lokasi di masa lalu.",
            "Penting untuk bercerita tentang masa lalu.",
            "Lebih sederhana daripada verb biasa (tidak perlu did)."
        ],
        teacherNote: "Contohkan cerita masa kecil atau pengalaman lampau."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "I were happy yesterday.", right: "I was happy yesterday." },
            { wrong: "They was at school.", right: "They were at school." },
            { wrong: "She were sick last week.", right: "She was sick last week." }
        ],
        teacherNote: "Tegaskan: I/he/she/it + was, you/we/they + were."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "S + was/were + (Adj/Noun/Prep Phrase)",
        content: [
            "I/he/she/it + was",
            "You/we/they + were",
            "Keterangan waktu: yesterday, last week, ago, in 2010"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Was", meaning: "Bentuk lampau to be (I/he/she/it)", example: "I was tired." },
            { term: "Were", meaning: "Bentuk lampau to be (you/we/they)", example: "They were busy." },
            { term: "Yesterday", meaning: "Kemarin", example: "I was sick yesterday." },
            { term: "Ago", meaning: "Yang lalu", example: "It was rainy two days ago." }
        ]
    },
    {
        type: 'concept',
        title: "Using Was/Were",
        content: [
            "Identitas di masa lalu: 'I was a student.'",
            "Keadaan/sifat: 'She was happy.'",
            "Lokasi: 'We were at the park.'",
            "Usia: 'He was 10 years old.'"
        ],
        teacherNote: "Berikan contoh personal untuk membuat relatable."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "It were cold yesterday.", right: "It was cold yesterday." },
            { wrong: "We was friends.", right: "We were friends." },
            { wrong: "You was right.", right: "You were right." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "I ___ tired. (was)",
            "They ___ at home. (were)",
            "She ___ a teacher. (was)",
            "We ___ happy. (were)"
        ],
        teacherNote: "Drill cepat 2 menit."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Teman bertanya: 'Where were you yesterday?'",
            template: "Jawab: 'I was at home.' atau 'I was at the office.'"
        },
        teacherNote: "Praktikkan dialog Q&A dengan was/were."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Ceritakan keadaanmu kemarin:",
            "1. I ___ at ___",
            "2. I ___ (feeling)",
            "3. The weather ___ ___",
            "4. My friends ___ ___"
        ],
        teacherNote: "Beri waktu 3 menit untuk menyelesaikan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ I were at school.",
            "❌ They was late.",
            "❌ She were happy.",
            "→ I/she/he/it = was | you/we/they = were"
        ],
        teacherNote: "Identifikasi dan perbaiki kesalahan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Negative: S + was/were + not | Question: Was/Were + S + ...?",
        content: [
            "Negatif: I was not (wasn't), They were not (weren't)",
            "Pertanyaan: 'Were you at home?' 'Was she tired?'"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "I/he/she/it positif", sayThis: "was", dontSayThis: "I were" },
            { context: "You/we/they positif", sayThis: "were", dontSayThis: "They was" },
            { context: "I/he/she/it negatif", sayThis: "wasn't", dontSayThis: "weren't" },
            { context: "You/we/they negatif", sayThis: "weren't", dontSayThis: "wasn't" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Tulis 10 kalimat tentang keadaanmu kemarin",
            "Ceritakan di mana keluargamu kemarin (minimal 5 orang)",
            "Buat 5 kalimat negatif dan 5 pertanyaan dengan was/were"
        ]
    },
    {
        type: 'title',
        title: "Great Job! 🎉",
        subtitle: "Was/Were = Past of To Be!",
        teacherNote: "Review: was untuk tunggal, were untuk jamak/you."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pilih yang BENAR: 'I ___ tired yesterday.'",
        options: ["was", "were", "am", "is"],
        correctIndex: 0,
        explanation: "I + was (past tense to be)."
    },
    {
        question: "Pilih yang BENAR: 'They ___ at home last night.'",
        options: ["was", "were", "are", "is"],
        correctIndex: 1,
        explanation: "They + were (past tense to be)."
    },
    {
        question: "Pilih yang BENAR: 'She ___ happy yesterday.'",
        options: ["was", "were", "is", "am"],
        correctIndex: 0,
        explanation: "She + was (past tense to be)."
    },
    {
        question: "Perbaiki: 'We was friends in 2010.'",
        options: [
            "We were friends in 2010.",
            "We are friends in 2010.",
            "We is friends in 2010.",
            "We be friends in 2010."
        ],
        correctIndex: 0,
        explanation: "We + were (past tense to be)."
    },
    {
        question: "Negatif dari 'I was at home' adalah:",
        options: [
            "I weren't at home.",
            "I was not at home / I wasn't at home.",
            "I not was at home.",
            "I didn't was at home."
        ],
        correctIndex: 1,
        explanation: "Negatif: was + not = was not/wasn't."
    },
    {
        question: "Pertanyaan: '___ you at school yesterday?'",
        options: ["Was", "Were", "Did", "Are"],
        correctIndex: 1,
        explanation: "Were untuk you dalam pertanyaan past."
    },
    {
        question: "Pertanyaan: '___ she sick last week?'",
        options: ["Was", "Were", "Did", "Is"],
        correctIndex: 0,
        explanation: "Was untuk she dalam pertanyaan past."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "I was happy.",
            "They were late.",
            "He were tired.",
            "We were busy."
        ],
        correctIndex: 2,
        explanation: "'He were' salah. Seharusnya: 'He was tired.'"
    },
    {
        question: "'It ___ cold yesterday.'",
        options: ["was", "were", "is", "are"],
        correctIndex: 0,
        explanation: "It + was (past tense to be)."
    },
    {
        question: "Pilih yang BENAR: 'You ___ right about that.'",
        options: ["was", "were", "is", "am"],
        correctIndex: 1,
        explanation: "You + were (past tense to be)."
    },
    {
        question: "Keterangan waktu untuk past tense:",
        options: [
            "now, today",
            "yesterday, last week, ago",
            "tomorrow, next week",
            "every day, always"
        ],
        correctIndex: 1,
        explanation: "'Yesterday, last week, ago' adalah keterangan waktu past."
    },
    {
        question: "Negatif dari 'They were busy' adalah:",
        options: [
            "They was not busy.",
            "They were not busy / They weren't busy.",
            "They didn't were busy.",
            "They not were busy."
        ],
        correctIndex: 1,
        explanation: "Negatif: were + not = were not/weren't."
    },
    {
        question: "Perbaiki: 'My parents was on vacation.'",
        options: [
            "My parents were on vacation.",
            "My parents is on vacation.",
            "My parents are on vacation.",
            "My parents be on vacation."
        ],
        correctIndex: 0,
        explanation: "Parents (jamak) + were."
    },
    {
        question: "Pertanyaan: '___ we ready?'",
        options: ["Was", "Were", "Did", "Are"],
        correctIndex: 1,
        explanation: "Were untuk we dalam pertanyaan."
    },
    {
        question: "Short answer untuk 'Were you at home?' (Yes):",
        options: ["Yes, I was.", "Yes, I were.", "Yes, I am.", "Yes, I did."],
        correctIndex: 0,
        explanation: "Short answer: Yes, I was. / No, I wasn't."
    },
    {
        question: "Pilih yang BENAR: '___ your friends at the party?'",
        options: ["Was", "Were", "Did", "Are"],
        correctIndex: 1,
        explanation: "Were untuk your friends (jamak)."
    },
    {
        question: "Perbaiki: 'It were rainy yesterday.'",
        options: [
            "It was rainy yesterday.",
            "It is rainy yesterday.",
            "It are rainy yesterday.",
            "It be rainy yesterday."
        ],
        correctIndex: 0,
        explanation: "It + was."
    },
    {
        question: "Was/were digunakan untuk kecuali:",
        options: [
            "Keadaan di masa lalu",
            "Lokasi di masa lalu",
            "Aksi di masa lalu",
            "Identitas di masa lalu"
        ],
        correctIndex: 2,
        explanation: "Aksi di masa lalu pakai verb 2 (went, ate, played), bukan was/were."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "He were a doctor.",
            "She was at the mall.",
            "They was late.",
            "I were happy."
        ],
        correctIndex: 1,
        explanation: "'She was at the mall' adalah kalimat yang benar."
    }
];
