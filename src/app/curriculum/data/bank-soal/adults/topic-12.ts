/**
 * Topic 12: Describing Data & Trends
 * -----------------------------------
 * 30 questions covering data vocabulary, trend verbs, grammar fixes,
 * and professional data description.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 12,
    path: 'speaking-adults',
    title: "Describing Data & Trends",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-12-001",
            question: "Grammar yang benar untuk sales data:",
            options: [
                "The sales is up.",
                "Sales have increased.",
                "Sales is increased.",
                "The sales are up."
            ],
            correctIndex: 1,
            explanation: "'Sales' adalah plural, jadi gunakan 'have increased'. Tidak perlu 'the'.",
            difficulty: "easy",
            tags: ["grammar", "sales"]
        },
        {
            id: "adult-12-002",
            question: "Verb untuk trend yang naik dengan cepat:",
            options: [
                "Decreased",
                "Increased / Rose / Grew",
                "Fell",
                "Dropped"
            ],
            correctIndex: 1,
            explanation: "'Increased', 'rose', 'grew' adalah verbs untuk trend naik. 'Fell' dan 'dropped' untuk turun.",
            difficulty: "easy",
            tags: ["verbs", "trends"]
        },
        {
            id: "adult-12-003",
            question: "Adverb untuk peningkatan yang sangat besar:",
            options: [
                "Slightly",
                "Significantly / Substantially",
                "Marginally",
                "A bit"
            ],
            correctIndex: 1,
            explanation: "'Significantly' dan 'substantially' menunjukkan peningkatan yang besar. 'Slightly' dan 'marginally' untuk kecil.",
            difficulty: "easy",
            tags: ["adverbs", "degree"]
        },
        {
            id: "adult-12-004",
            question: "Frasa untuk mencapai nilai tertinggi:",
            options: [
                "Bottomed out",
                "Peaked at",
                "Fell to",
                "Dropped at"
            ],
            correctIndex: 1,
            explanation: "'Peaked at' = mencapai puncak/tertinggi. 'Bottomed out' = mencapai terendah.",
            difficulty: "easy",
            tags: ["vocabulary", "peak"]
        },
        {
            id: "adult-12-005",
            question: "Grammar yang benar untuk 'the number of customers':",
            options: [
                "The number of customers are growing.",
                "The number of customers is growing.",
                "Number of customers is grow.",
                "The customers number is growing."
            ],
            correctIndex: 1,
            explanation: "'The number' adalah singular (subjeknya 'number'), jadi gunakan 'is growing'.",
            difficulty: "easy",
            tags: ["grammar", "number"]
        },
        {
            id: "adult-12-006",
            question: "Grafik garis disebut dalam bahasa Inggris:",
            options: [
                "Bar chart",
                "Line graph",
                "Pie chart",
                "Table"
            ],
            correctIndex: 1,
            explanation: "Line graph = grafik garis (untuk trend over time). Bar chart = grafik batang. Pie chart = grafik lingkaran.",
            difficulty: "easy",
            tags: ["charts", "vocabulary"]
        },
        {
            id: "adult-12-007",
            question: "Frasa untuk membandingkan dengan periode sebelumnya:",
            options: [
                "Same as before",
                "Compared to / Versus",
                "Like last time",
                "Before now"
            ],
            correctIndex: 1,
            explanation: "'Compared to Q2' atau 'versus last year' adalah cara profesional untuk perbandingan.",
            difficulty: "easy",
            tags: ["comparison", "phrases"]
        },
        {
            id: "adult-12-008",
            question: "'Fluctuated' berarti:",
            options: [
                "Naik terus",
                "Naik turun tidak menentu",
                "Turun terus",
                "Tetap stabil"
            ],
            correctIndex: 1,
            explanation: "Fluctuated = berfluktuasi, naik turun, tidak stabil dalam range tertentu.",
            difficulty: "easy",
            tags: ["vocabulary", "fluctuation"]
        },
        {
            id: "adult-12-009",
            question: "Frasa untuk prediksi positif:",
            options: [
                "Will maybe",
                "Is projected to / Is expected to",
                "Might be",
                "Probably"
            ],
            correctIndex: 1,
            explanation: "'Is projected to' dan 'is expected to' adalah phrases formal untuk forecast.",
            difficulty: "easy",
            tags: ["prediction", "phrases"]
        },
        {
            id: "adult-12-010",
            question: "'Plateaued' berarti:",
            options: [
                "Naik terus",
                "Mendatar setelah periode naik",
                "Turun drastis",
                "Tidak ada data"
            ],
            correctIndex: 1,
            explanation: "Plateaued = datar/mendatar setelah naik (seperti puncak datar), tidak naik lagi tapi juga tidak turun.",
            difficulty: "easy",
            tags: ["vocabulary", "plateau"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-12-011",
            question: "Complete sentence: 'Revenue _____ by 15% in Q3 _____ Q2.'",
            options: [
                "is up / compared",
                "has increased / compared to",
                "increased / versus to",
                "was up / comparing"
            ],
            correctIndex: 1,
            explanation: "'Has increased by 15% in Q3 compared to Q2' adalah struktur yang lengkap dan benar.",
            difficulty: "medium",
            tags: ["grammar", "structure"]
        },
        {
            id: "adult-12-012",
            question: "Mengapa 'The sales is up' salah?",
            options: [
                "Tidak salah",
                "Sales = plural (harus 'sales HAVE'), dan tidak perlu 'the'",
                "Terlalu pendek",
                "Tidak profesional"
            ],
            correctIndex: 1,
            explanation: "'Sales' adalah plural noun, jadi gunakan plural verb 'have'. Dan 'sales' umumnya tidak pakai 'the'.",
            difficulty: "medium",
            tags: ["grammar", "explanation"]
        },
        {
            id: "adult-12-013",
            question: "Upgrade dari 'The sales went up a lot':",
            options: [
                "Sales increased very much.",
                "Sales increased significantly by 25% quarter-over-quarter.",
                "Sales went up big.",
                "Sales up a lot."
            ],
            correctIndex: 1,
            explanation: "Versi yang profesional: verb yang tepat + adverb yang spesifik + angka yang jelas + perbandingan.",
            difficulty: "medium",
            tags: ["upgrade", "professional"]
        },
        {
            id: "adult-12-014",
            question: "Frasa untuk menjelaskan 'why' di balik data:",
            options: [
                "Because...",
                "This can be attributed to... / The main driver is...",
                "The reason is...",
                "Why this happened..."
            ],
            correctIndex: 1,
            explanation: "'Attributed to' dan 'driver' adalah vocabulary bisnis yang profesional untuk menjelaskan causes.",
            difficulty: "medium",
            tags: ["explanation", "vocabulary"]
        },
        {
            id: "adult-12-015",
            question: "Cara mengatakan data turun sedikit dengan profesional:",
            options: [
                "Sales went down a little.",
                "Sales fell slightly by 3% this quarter.",
                "Sales decreased small.",
                "Sales down a bit."
            ],
            correctIndex: 1,
            explanation: "'Fell slightly by 3%' menggunakan verb yang tepat, adverb yang precise, dan angka yang spesifik.",
            difficulty: "medium",
            tags: ["professional", "decrease"]
        },
        {
            id: "adult-12-016",
            question: "Kontras yang tepat: 'Online sales rose, _____ in-store sales fell.'",
            options: [
                "And",
                "Whereas / While",
                "But",
                "Also"
            ],
            correctIndex: 1,
            explanation: "'Whereas' dan 'while' digunakan untuk kontras formal di data description.",
            difficulty: "medium",
            tags: ["contrast", "grammar"]
        },
        {
            id: "adult-12-017",
            question: "Frasa untuk 'all-time high':",
            options: [
                "Very high",
                "Highest ever / Record high / All-time high",
                "Most high",
                "Extremely high"
            ],
            correctIndex: 1,
            explanation: "'All-time high', 'record high', 'highest ever' adalah phrases untuk tertinggi sepanjang sejarah.",
            difficulty: "medium",
            tags: ["vocabulary", "superlative"]
        },
        {
            id: "adult-12-018",
            question: "Mengapa spesifik dengan angka penting dalam data description?",
            options: [
                "Tidak penting",
                "Karena 'up a lot' tidak credible; angka memberikan precision dan credibility",
                "Karena terlihat pintar",
                "Karena aturannya"
            ],
            correctIndex: 1,
            explanation: "Specific numbers ('by 15%') memberikan credibility dan precision yang 'up a lot' tidak bisa.",
            difficulty: "medium",
            tags: ["precision", "credibility"]
        },
        {
            id: "adult-12-019",
            question: "Complete dengan adverb yang tepat: 'Costs have _____ increased.' (naik sedikit)",
            options: [
                "Significantly",
                "Slightly / Marginally",
                "Sharply",
                "Dramatically"
            ],
            correctIndex: 1,
            explanation: "'Slightly' atau 'marginally' untuk peningkatan kecil. 'Significantly', 'sharply', 'dramatically' untuk besar.",
            difficulty: "medium",
            tags: ["adverbs", "nuance"]
        },
        {
            id: "adult-12-020",
            question: "Frasa untuk tren naik yang konsisten dan stabil:",
            options: [
                "Up and down",
                "Steady growth / Gradual increase",
                "Sharp rise",
                "Dramatic surge"
            ],
            correctIndex: 1,
            explanation: "'Steady growth' dan 'gradual increase' menunjukkan trend naik yang konsisten tanpa fluktuasi besar.",
            difficulty: "medium",
            tags: ["vocabulary", "steady"]
        },
        {
            id: "adult-12-021",
            question: "Cara mengatakan 'meskipun ada masalah, tetap berhasil':",
            options: [
                "But we success",
                "Despite the challenges, we achieved growth.",
                "Although problem, we good.",
                "Challenges, but success."
            ],
            correctIndex: 1,
            explanation: "'Despite + noun' atau 'although + clause' adalah cara yang grammatical untuk contrast.",
            difficulty: "medium",
            tags: ["despite", "grammar"]
        },
        {
            id: "adult-12-022",
            question: "Upgrade dari 'This is good':",
            options: [
                "This is very good.",
                "This indicates positive momentum / shows promising results.",
                "This is so good.",
                "This is really good."
            ],
            correctIndex: 1,
            explanation: "'Indicates positive momentum' atau 'shows promising results' adalah phrases bisnis yang profesional.",
            difficulty: "medium",
            tags: ["upgrade", "professional"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-12-023",
            question: "Analisis: 'The statistics shows that we are good. Our sales is up and the number of customers are increasing. We do better than before.' Apa SEMUA masalahnya?",
            options: [
                "Tidak ada masalah",
                "Statistics SHOW (plural), sales HAVE (plural), the number IS (singular), 'good' terlalu vague",
                "Hanya grammar",
                "Hanya vocabulary"
            ],
            correctIndex: 1,
            explanation: "Grammar: statistics SHOW, sales HAVE increased, the number IS. Vocabulary: 'good' dan 'better' terlalu vague.",
            difficulty: "hard",
            tags: ["analysis", "multiple-errors"]
        },
        {
            id: "adult-12-024",
            question: "Mengapa data literacy penting untuk karir?",
            options: [
                "Tidak penting",
                "Karena decisions modern didasarkan pada data; ability to interpret dan communicate data adalah skill yang dicari",
                "Karena bos suka angka",
                "Karena terlihat pintar"
            ],
            correctIndex: 1,
            explanation: "Data-driven decision making adalah norm di bisnis modern. Data literacy = career advancement.",
            difficulty: "hard",
            tags: ["career", "importance"]
        },
        {
            id: "adult-12-025",
            question: "Buat deskripsi lengkap untuk: Revenue Q1 $1M, Q2 $1.2M, Q3 $1.5M (peak), Q4 $1.4M",
            options: [
                "Revenue up then down.",
                "Revenue has shown consistent growth throughout the year, peaking at $1.5M in Q3 before a slight moderation to $1.4M in Q4, representing a 40% increase compared to Q1.",
                "Revenue is good this year.",
                "Revenue went up and up then little down."
            ],
            correctIndex: 1,
            explanation: "Ini menggunakan: trend verb (shown growth), peak (puncak), moderation (euphemism untuk turun), dan comparison (40% increase).",
            difficulty: "hard",
            tags: ["application", "full-description"]
        },
        {
            id: "adult-12-026",
            question: "Mengapa 'I think' tidak cocok saat presentasi data?",
            options: [
                "Tidak benar",
                "Karena data adalah facts, bukan opinion; 'I think' melemahkan credibility",
                "Karena grammar-nya salah",
                "Karena terlalu pendek"
            ],
            correctIndex: 1,
            explanation: "Data adalah objective facts. 'The data shows' lebih credible daripada 'I think sales increased'.",
            difficulty: "hard",
            tags: ["data", "objectivity"]
        },
        {
            id: "adult-12-027",
            question: "Perbedaan nuansa: 'Sales have increased' vs 'Sales have been increasing'?",
            options: [
                "Tidak ada beda",
                "'Have increased' = result/completed; 'have been increasing' = ongoing process/continuing trend",
                "Yang kedua lebih formal",
                "Yang pertama lebih lama"
            ],
            correctIndex: 1,
            explanation: "'Have increased' (present perfect) = result. 'Have been increasing' (present perfect continuous) = ongoing process.",
            difficulty: "hard",
            tags: ["grammar", "tenses", "nuance"]
        },
        {
            id: "adult-12-028",
            question: "Buat kalimat yang mencakup: subject + trend verb + adverb + amount + period + comparison",
            options: [
                "Sales up.",
                "Customer acquisition has increased significantly by 35% year-over-year compared to the previous period.",
                "Sales are very good this year.",
                "We have more customers now."
            ],
            correctIndex: 1,
            explanation: "Ini complete formula: Customer acquisition (S) + has increased (V) + significantly (Adv) + by 35% (Amount) + year-over-year (Period) + compared to... (Comparison).",
            difficulty: "hard",
            tags: ["formula", "complete"]
        },
        {
            id: "adult-12-029",
            question: "Mengapa visual (charts/graphs) penting dalam presentasi data?",
            options: [
                "Hanya untuk hiasan",
                "Karena otak memproses visual lebih cepat; 'A picture is worth a thousand words'",
                "Karena terlihat bagus",
                "Tidak penting"
            ],
            correctIndex: 1,
            explanation: "Visual processing di otak jauh lebih cepat daripada text. Charts membuat patterns dan trends immediately visible.",
            difficulty: "hard",
            tags: ["visual", "psychology"]
        },
        {
            id: "adult-12-030",
            question: "Final Challenge: Elemen PALING kritis untuk data description yang profesional adalah:",
            options: [
                "Banyaknya data",
                "Grammar yang benar + specific numbers + context/comparison + professional vocabulary",
                "Slide yang bagus",
                "Kecepatan bicara"
            ],
            correctIndex: 1,
            explanation: "Professional data description = correct grammar, specific numbers, meaningful context/comparison, dan business vocabulary.",
            difficulty: "hard",
            tags: ["mastery", "professional"]
        }
    ]
};
