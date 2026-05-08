import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 25,
    path: 'speaking-kids',
    title: "Two Truths & A Lie 🎭",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-25-001",
            question: "Apa arti dari 'Two Truths & A Lie'?",
            options: [
                "Dua Kebenaran dan Satu Kebohongan",
                "Dua Bohong dan Satu Benar",
                "Tiga Kebenaran",
                "Tiga Kebohongan"
            ],
            correctIndex: 0,
            explanation: "Dalam permainan ini, kita menyampaikan 2 fakta yang benar dan 1 yang bohong, teman harus menebak!",
            difficulty: "easy"
        },
        {
            id: "kids-25-002",
            question: "Pilih kata yang berarti BENAR/fakta:",
            options: ["lie", "false", "truth", "wrong"],
            correctIndex: 2,
            explanation: "'Truth' artinya kebenaran/fakta yang sebenarnya.",
            difficulty: "easy"
        },
        {
            id: "kids-25-003",
            question: "Bahasa Indonesia dari 'This is a lie' adalah:",
            options: [
                "Ini adalah fakta",
                "Ini adalah kebohongan",
                "Ini adalah benar",
                "Ini adalah permainan"
            ],
            correctIndex: 1,
            explanation: "'Lie' artinya kebohongan atau berbohong.",
            difficulty: "easy"
        },
        {
            id: "kids-25-004",
            question: "Pilih kalimat yang BENAR secara grammar:",
            options: [
                "I have been to Japan.",
                "I has been to Japan.",
                "I am been to Japan.",
                "I be been to Japan."
            ],
            correctIndex: 0,
            explanation: "'I have been to...' adalah struktur yang benar untuk pengalaman.",
            difficulty: "easy"
        },
        {
            id: "kids-25-005",
            question: "Apa arti dari 'guess'?",
            options: [
                "Menjawab dengan pasti",
                "Menebak",
                "Mengetahui",
                "Melupakan"
            ],
            correctIndex: 1,
            explanation: "'Guess' artinya menebak (tidak tahu pasti).",
            difficulty: "easy"
        },
        {
            id: "kids-25-006",
            question: "Lengkapi: 'I can speak ___ languages.'",
            options: ["a", "two", "the", "is"],
            correctIndex: 1,
            explanation: "Gunakan angka untuk menyebutkan jumlah (two languages = dua bahasa).",
            difficulty: "easy"
        },
        {
            id: "kids-25-007",
            question: "Bahasa Inggris dari 'Aku pernah...' adalah:",
            options: [
                "I never...",
                "I have never...",
                "I have...",
                "I am..."
            ],
            correctIndex: 2,
            explanation: "'I have...' atau 'I've...' bisa artinya 'aku pernah/sudah'.",
            difficulty: "easy"
        },
        {
            id: "kids-25-008",
            question: "Pilih kata yang BUKAN kata kerja (verb):",
            options: ["swim", "jump", "tall", "eat"],
            correctIndex: 2,
            explanation: "'Tall' (tinggi) adalah kata sifat, bukan kata kerja.",
            difficulty: "easy"
        },
        {
            id: "kids-25-009",
            question: "Apa arti dari 'I've never...'?",
            options: [
                "Aku sudah pernah...",
                "Aku belum pernah...",
                "Aku akan...",
                "Aku suka..."
            ],
            correctIndex: 1,
            explanation: "'I've never' = 'I have never' = Aku belum pernah...",
            difficulty: "easy"
        },
        {
            id: "kids-25-010",
            question: "Pilih kalimat yang benar untuk permainan ini:",
            options: [
                "I can fly like a bird.",
                "I have a pet dog.",
                "I am from Mars.",
                "I eat rocks for breakfast."
            ],
            correctIndex: 1,
            explanation: "'I have a pet dog' adalah fakta yang mungkin benar untuk Two Truths & A Lie.",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-25-011",
            question: "Pilih pernyataan yang PALSU (lie) tapi bisa diyakinkan:",
            options: [
                "I can breathe underwater without equipment.",
                "I have visited Bali twice.",
                "My favorite color is blue.",
                "I have two siblings."
            ],
            correctIndex: 0,
            explanation: "'I can breathe underwater' adalah kebohongan yang jelas, tapi harus realistis agar sulit ditebak!",
            difficulty: "medium"
        },
        {
            id: "kids-25-012",
            question: "Lengkapi: 'I ___ (visit) my grandmother last month.'",
            options: ["visit", "visited", "visiting", "to visit"],
            correctIndex: 1,
            explanation: "Untuk masa lalu yang spesifik (last month), gunakan Past Tense (visited).",
            difficulty: "medium"
        },
        {
            id: "kids-25-013",
            question: "Bahasa Indonesia dari 'Which one is the lie?'",
            options: [
                "Yang mana yang benar?",
                "Yang mana yang bohong?",
                "Yang mana yang baru?",
                "Yang mana yang lama?"
            ],
            correctIndex: 1,
            explanation: "'Which one is the lie?' = Yang mana yang bohong?",
            difficulty: "medium"
        },
        {
            id: "kids-25-014",
            question: "Pilih kalimat yang menggunakan 'can' dengan benar:",
            options: [
                "I can to swim.",
                "I can swimming.",
                "I can swim.",
                "I can swam."
            ],
            correctIndex: 2,
            explanation: "Setelah 'can', gunakan kata kerja dasar (swim, play, eat).",
            difficulty: "medium"
        },
        {
            id: "kids-25-015",
            question: "Apa arti dari 'convincing'?",
            options: [
                "Membingungkan",
                "Meyakinkan",
                "Membosankan",
                "Menakutkan"
            ],
            correctIndex: 1,
            explanation: "'Convincing' artinya meyakinkan (membuat orang percaya).",
            difficulty: "medium"
        },
        {
            id: "kids-25-016",
            question: "Lengkapi: 'I ___ broken my arm before.'",
            options: ["have", "has", "am", "is"],
            correctIndex: 0,
            explanation: "'I have broken' (Present Perfect) untuk pengalaman di masa lalu.",
            difficulty: "medium"
        },
        {
            id: "kids-25-017",
            question: "Bahasa Inggris dari 'Tebak yang mana!' adalah:",
            options: [
                "Guess which one!",
                "Know which one!",
                "Tell which one!",
                "See which one!"
            ],
            correctIndex: 0,
            explanation: "'Guess which one!' = Tebak yang mana!",
            difficulty: "medium"
        },
        {
            id: "kids-25-018",
            question: "Pilih kata yang menunjukkan pengalaman masa lalu:",
            options: ["tomorrow", "next week", "before", "soon"],
            correctIndex: 2,
            explanation: "'Before' artinya sebelumnya (pengalaman masa lalu).",
            difficulty: "medium"
        },
        {
            id: "kids-25-019",
            question: "Apa arti dari 'trick'?",
            options: [
                "Tipu daya/trik",
                "Kebenaran",
                "Fakta",
                "Permainan"
            ],
            correctIndex: 0,
            explanation: "'Trick' artinya trik atau tipu daya (untuk mengelabui).",
            difficulty: "medium"
        },
        {
            id: "kids-25-020",
            question: "Pilih kalimat yang paling meyakinkan:",
            options: [
                "I met a celebrity.",
                "I met a celebrity once at a restaurant in Jakarta, and they signed my napkin!",
                "I meet celebrity.",
                "Celebrity I met."
            ],
            correctIndex: 1,
            explanation: "Detail spesifik (Jakarta, signed napkin) membuat cerita lebih meyakinkan!",
            difficulty: "medium"
        },
        {
            id: "kids-25-021",
            question: "Lengkapi: 'I have ___ to Singapore three times.'",
            options: ["go", "went", "gone", "going"],
            correctIndex: 2,
            explanation: "'I have gone to...' (Present Perfect) untuk pengalaman berkali-kali.",
            difficulty: "medium"
        },
        {
            id: "kids-25-022",
            question: "Bahasa Indonesia dari 'You got me!' dalam konteks ini:",
            options: [
                "Kamu menangkapku!",
                "Kamu berhasil menebak!",
                "Kamu kalah!",
                "Kamu bohong!"
            ],
            correctIndex: 1,
            explanation: "'You got me!' artinya 'Kamu berhasil menebak/menangkap kebohonganku!'",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-25-023",
            question: "Susun kalimat pengalaman: 'never / I / have / mountain / a / climbed'",
            options: [
                "I have never climbed a mountain.",
                "Never I have climbed a mountain.",
                "I never have climbed a mountain.",
                "Have I never climbed a mountain."
            ],
            correctIndex: 0,
            explanation: "Struktur benar: Subject + have + never + past participle (climbed).",
            difficulty: "hard"
        },
        {
            id: "kids-25-024",
            question: "Pilih pernyataan yang SULIT ditebak sebagai kebohongan:",
            options: [
                "I can speak 10 languages fluently.",
                "I once won a spelling bee in third grade, but I was so nervous I almost misspelled 'banana'.",
                "I have a pet elephant at home.",
                "I am 100 years old."
            ],
            correctIndex: 1,
            explanation: "Cerita dengan detail yang masuk akal (nervous, almost misspelled) lebih sulit ditebak!",
            difficulty: "hard"
        },
        {
            id: "kids-25-025",
            question: "Apa arti dari 'bluff'?",
            options: [
                "Mengungkapkan fakta",
                "Berbohong/menggertak",
                "Menebak dengan benar",
                "Memberitahu kebenaran"
            ],
            correctIndex: 1,
            explanation: "'Bluff' artinya menggertak atau berbohong dengan tampak meyakinkan.",
            difficulty: "hard"
        },
        {
            id: "kids-25-026",
            question: "Pilih kata yang merupakan 'past participle':",
            options: ["go", "went", "gone", "going"],
            correctIndex: 2,
            explanation: "'Gone' adalah past participle dari 'go' (digunakan dengan have/has/had).",
            difficulty: "hard"
        },
        {
            id: "kids-25-027",
            question: "Lengkapi dengan kata kerja yang tepat: 'I have ___ (eat) sushi before, but I didn't like it.'",
            options: ["eat", "ate", "eaten", "eating"],
            correctIndex: 2,
            explanation: "Setelah 'have', gunakan past participle: eaten (eat), gone (go), done (do).",
            difficulty: "hard"
        },
        {
            id: "kids-25-028",
            question: "Bahasa Indonesia dari 'Are you telling the truth?'",
            options: [
                "Apakah kamu bohong?",
                "Apakah kamu mengatakan yang sebenarnya?",
                "Apakah kamu menebak?",
                "Apakah kamu menang?"
            ],
            correctIndex: 1,
            explanation: "'The truth' artinya kebenaran/keadaan yang sebenarnya.",
            difficulty: "hard"
        },
        {
            id: "kids-25-029",
            question: "Pilih strategi terbaik dalam permainan ini:",
            options: [
                "Semua pernyataan jelas bohong",
                "Dua pernyataan biasa saja, satu dengan detail yang masuk akal tapi bohong",
                "Semua pernyataan aneh",
                "Tidak mau bermain"
            ],
            correctIndex: 1,
            explanation: "Strategi terbaik: 2 fakta sederhana + 1 kebohongan dengan detail meyakinkan.",
            difficulty: "hard"
        },
        {
            id: "kids-25-030",
            question: "Buat tiga pernyataan untuk Two Truths & A Lie. Mana yang paling baik?",
            options: [
                "1. I like blue. 2. I have a dog. 3. I can fly.",
                "1. I've been to Bali three times. 2. I can play the guitar. 3. I once met the President at a school event and he shook my hand.",
                "1. I am human. 2. I need food. 3. I breathe air.",
                "1. I am from Mars. 2. I am 200 years old. 3. I eat rocks."
            ],
            correctIndex: 1,
            explanation: "Set B paling baik karena semua terdengar mungkin benar, dan #3 dengan detail yang sulit ditebak!",
            difficulty: "hard"
        }
    ]
};


