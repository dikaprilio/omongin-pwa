import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Question Words (5W1H) ❓",
        subtitle: "Basic Meeting 3",
        teacherNote: "Perkenalkan 6 kata tanya dasar yang sering digunakan dalam percakapan sehari-hari."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "5W1H = kunci untuk membuat pertanyaan dalam bahasa Inggris.",
            "Tanpa menguasai ini, siswa tidak bisa bertanya dengan jelas.",
            "Setiap question word punya fungsi spesifik yang berbeda."
        ],
        teacherNote: "Analogikan dengan detektif yang selalu bertanya 5W1H untuk mengumpulkan informasi."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "You are going where?", right: "Where are you going?" },
            { wrong: "You want what?", right: "What do you want?" },
            { wrong: "She is who?", right: "Who is she?" }
        ],
        teacherNote: "Jelaskan struktur question word + auxiliary + subject + verb."
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "QW + Auxiliary + S + V + ?",
        content: [
            "QW = Question Word (What, Where, When, Why, Who, How)",
            "Auxiliary = do/does/did/am/is/are/was/were",
            "Jika QW = Subjek, tidak perlu auxiliary"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "What", meaning: "Apa (informasi/benda)", example: "What is your name?" },
            { term: "Where", meaning: "Di mana (lokasi)", example: "Where do you live?" },
            { term: "When", meaning: "Kapan (waktu)", example: "When did you arrive?" },
            { term: "Why", meaning: "Mengapa (alasan)", example: "Why are you sad?" },
            { term: "Who", meaning: "Siapa (orang)", example: "Who is that man?" },
            { term: "How", meaning: "Bagaimana (cara/keadaan)", example: "How do you go to school?" }
        ]
    },
    {
        type: 'concept',
        title: "Function of Each QW",
        content: [
            "What → informasi/aktivitas/benda",
            "Where → tempat/lokasi",
            "When → waktu/tanggal/jam",
            "Why → alasan/sebab (jawabannya pakai because)",
            "Who → orang/subjek",
            "How → cara/kondisi/jumlah"
        ],
        teacherNote: "Beri contoh nyata untuk masing-masing kata tanya."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "You come when?", right: "When do you come?" },
            { wrong: "You are late why?", right: "Why are you late?" },
            { wrong: "He lives where?", right: "Where does he live?" }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "___ is your mother? (Who)",
            "___ do you study English? (Why)",
            "___ is the meeting? (When)",
            "___ did you buy? (What)"
        ],
        teacherNote: "Minta siswa pilih question word yang tepat berdasarkan konteks."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Kamu ingin tahu temanmu belajar di mana:",
            template: "Ask: 'Where do you study?' atau 'Where are you studying?'"
        },
        teacherNote: "Praktikkan dialog singkat menggunakan question words."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Buat pertanyaan untuk jawaban berikut:",
            "1. 'I live in Jakarta.' → ___",
            "2. 'She is my sister.' → ___",
            "3. 'Because I'm sick.' → ___",
            "4. 'At 7 o'clock.' → ___"
        ],
        teacherNote: "Beri waktu 4 menit. Siswa tulis pertanyaan di buku."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ You want what?",
            "❌ You go where?",
            "❌ She is who?",
            "→ Question word di AWAL kalimat!"
        ],
        teacherNote: "Tegaskan posisi question word selalu di depan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "QW sebagai Subjek: QW + V + ?",
        content: [
            "Contoh: 'Who broke the window?' (siapa yang memecahkan)",
            "'What happened?' (apa yang terjadi)",
            "Tidak perlu auxiliary jika QW = subjek!"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Tanya benda/aktivitas", sayThis: "What...?", dontSayThis: "You do what?" },
            { context: "Tanya tempat", sayThis: "Where...?", dontSayThis: "You go where?" },
            { context: "Tanya orang", sayThis: "Who...?", dontSayThis: "That is who?" },
            { context: "Tanya waktu", sayThis: "When...?", dontSayThis: "You come when?" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat 3 pertanyaan dengan masing-masing 5W1H (total 18 pertanyaan)",
            "Tulis jawaban untuk setiap pertanyaan",
            "Praktikkan dengan teman atau keluarga"
        ]
    },
    {
        type: 'title',
        title: "Excellent! 🎊",
        subtitle: "5W1H = Your Key to Asking Questions!",
        teacherNote: "Ingatkan siswa untuk selalu mulai dengan question word."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Question word untuk tanya tempat:",
        options: ["What", "Where", "When", "Who"],
        correctIndex: 1,
        explanation: "'Where' digunakan untuk menanyakan lokasi/tempat."
    },
    {
        question: "Pilih yang BENAR: '___ do you live?'",
        options: ["What", "Where", "When", "Why"],
        correctIndex: 1,
        explanation: "'Where do you live?' = Di mana kamu tinggal?"
    },
    {
        question: "Question word untuk tanya alasan:",
        options: ["What", "Where", "Why", "Who"],
        correctIndex: 2,
        explanation: "'Why' digunakan untuk menanyakan alasan/sebab."
    },
    {
        question: "Perbaiki: 'You are going where?'",
        options: [
            "Where you are going?",
            "Where are you going?",
            "You where are going?",
            "Are you where going?"
        ],
        correctIndex: 1,
        explanation: "Question word di awal: 'Where are you going?'"
    },
    {
        question: "___ did you eat for breakfast?",
        options: ["Who", "Where", "What", "When"],
        correctIndex: 2,
        explanation: "'What did you eat?' = Apa yang kamu makan?"
    },
    {
        question: "Question word untuk tanya orang:",
        options: ["What", "Where", "Who", "How"],
        correctIndex: 2,
        explanation: "'Who' digunakan untuk menanyakan tentang seseorang."
    },
    {
        question: "Pilih yang BENAR: '___ is that girl?'",
        options: ["What", "Where", "Who", "When"],
        correctIndex: 2,
        explanation: "'Who is that girl?' = Siapa gadis itu?"
    },
    {
        question: "___ do you go to school? By bus.",
        options: ["What", "Where", "When", "How"],
        correctIndex: 3,
        explanation: "'How' untuk menanyakan cara/metode: 'How do you go to school?'"
    },
    {
        question: "Perbaiki: 'She is who?'",
        options: [
            "Who she is?",
            "Who is she?",
            "Is who she?",
            "She who is?"
        ],
        correctIndex: 1,
        explanation: "'Who is she?' adalah susunan yang benar."
    },
    {
        question: "___ will the meeting start? At 3 PM.",
        options: ["What", "Where", "When", "Why"],
        correctIndex: 2,
        explanation: "'When' untuk menanyakan waktu."
    },
    {
        question: "Question word yang digunakan untuk tanya kondisi/keadaan:",
        options: ["What", "How", "Where", "Who"],
        correctIndex: 1,
        explanation: "'How' untuk menanyakan kondisi: 'How are you?'"
    },
    {
        question: "Pilih yang BENAR: '___ are you late?'",
        options: ["What", "Where", "When", "Why"],
        correctIndex: 3,
        explanation: "'Why are you late?' = Mengapa kamu terlambat?"
    },
    {
        question: "Jika jawabannya 'Because I am sick', pertanyaannya:",
        options: [
            "What are you?",
            "Where are you?",
            "Why are you absent?",
            "Who are you?"
        ],
        correctIndex: 2,
        explanation: "Jawaban dengan 'because' → pertanyaan pakai 'why'."
    },
    {
        question: "___ broke the window? (siapa yang memecahkan)",
        options: ["What", "Where", "Who", "How"],
        correctIndex: 2,
        explanation: "'Who' sebagai subjek → tidak perlu auxiliary: 'Who broke the window?'"
    },
    {
        question: "Perbaiki: 'You want what?'",
        options: [
            "What you want?",
            "What do you want?",
            "Do you want what?",
            "Want what you do?"
        ],
        correctIndex: 1,
        explanation: "'What do you want?' adalah susunan yang benar."
    },
    {
        question: "___ is your favorite color? Blue.",
        options: ["Who", "What", "Where", "When"],
        correctIndex: 1,
        explanation: "'What is your favorite color?' untuk menanyakan benda/informasi."
    },
    {
        question: "Pilih yang BENAR: '___ did you meet yesterday?'",
        options: ["What", "Where", "Who", "How"],
        correctIndex: 2,
        explanation: "'Who did you meet yesterday?' untuk tanya orang yang ditemui."
    },
    {
        question: "___ much is this book? It's $10.",
        options: ["What", "How", "Who", "Where"],
        correctIndex: 1,
        explanation: "'How much' untuk menanyakan harga/jumlah."
    },
    {
        question: "Question word yang TIDAK termasuk 5W1H:",
        options: ["What", "Where", "Which", "When"],
        correctIndex: 2,
        explanation: "5W1H = What, Where, When, Why, Who, How. 'Which' tidak termasuk."
    },
    {
        question: "Pilih yang SALAH:",
        options: [
            "What is your name?",
            "Where do you work?",
            "Why you are sad?",
            "Who is he?"
        ],
        correctIndex: 2,
        explanation: "'Why you are sad?' salah. Seharusnya: 'Why are you sad?'"
    }
];
