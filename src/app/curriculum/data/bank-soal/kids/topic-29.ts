import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 29,
    path: 'speaking-kids',
    title: "The Desert Island 🏝️",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-29-001",
            question: "Apa arti dari 'desert island'?",
            options: [
                "Pulau gurun/pulau terpencil",
                "Pulau ramai",
                "Pulau es",
                "Pulau besar"
            ],
            correctIndex: 0,
            explanation: "'Desert island' artinya pulau terpencil/tak berpenghuni (seperti di cerita Robinson Crusoe).",
            difficulty: "easy"
        },
        {
            id: "kids-29-002",
            question: "Pilih kata yang berarti MEMILIH:",
            options: ["reject", "refuse", "choose", "ignore"],
            correctIndex: 2,
            explanation: "'Choose' artinya memilih.",
            difficulty: "easy"
        },
        {
            id: "kids-29-003",
            question: "Bahasa Indonesia dari 'If I were on a desert island...' adalah:",
            options: [
                "Jika aku berada di pulau terpencil...",
                "Jika aku pergi ke sekolah...",
                "Jika aku di rumah...",
                "Jika aku di kota..."
            ],
            correctIndex: 0,
            explanation: "'If I were on a desert island' = Jika aku berada di pulau terpencil...",
            difficulty: "easy"
        },
        {
            id: "kids-29-004",
            question: "Pilih benda yang PENTING untuk bertahan hidup:",
            options: ["video game", "TV", "water", "toys"],
            correctIndex: 2,
            explanation: "'Water' (air) sangat penting untuk bertahan hidup.",
            difficulty: "easy"
        },
        {
            id: "kids-29-005",
            question: "Apa arti dari 'survive'?",
            options: [
                "Menyerah",
                "Bertahan hidup",
                "Bermain",
                "Tidur"
            ],
            correctIndex: 1,
            explanation: "'Survive' artinya bertahan hidup.",
            difficulty: "easy"
        },
        {
            id: "kids-29-006",
            question: "Lengkapi: 'I would bring ___ water.'",
            options: ["a", "some", "is", "the"],
            correctIndex: 1,
            explanation: "'Some' digunakan untuk benda yang tidak bisa dihitung (some water, some food).",
            difficulty: "easy"
        },
        {
            id: "kids-29-007",
            question: "Bahasa Inggris dari 'Aku akan membawa...' adalah:",
            options: [
                "I bring...",
                "I would bring...",
                "I brought...",
                "I bringing..."
            ],
            correctIndex: 1,
            explanation: "'I would bring...' = Aku akan membawa... (untuk situasi imajiner).",
            difficulty: "easy"
        },
        {
            id: "kids-29-008",
            question: "Pilih kata yang BUKAN makanan:",
            options: ["rice", "bread", "blanket", "fruit"],
            correctIndex: 2,
            explanation: "'Blanket' (selimut) bukan makanan.",
            difficulty: "easy"
        },
        {
            id: "kids-29-009",
            question: "Apa arti dari 'alone'?",
            options: [
                "Ramai",
                "Sendirian",
                "Senang",
                "Sedih"
            ],
            correctIndex: 1,
            explanation: "'Alone' artinya sendirian (tanpa orang lain).",
            difficulty: "easy"
        },
        {
            id: "kids-29-010",
            question: "Pilih kalimat yang benar:",
            options: [
                "I would bring a knife to cut food.",
                "I would bringing a knife to cut food.",
                "I would brings a knife to cut food.",
                "I would brought a knife to cut food."
            ],
            correctIndex: 0,
            explanation: "Setelah 'would', gunakan kata kerja dasar (bring, eat, play).",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-29-011",
            question: "Pilih kombinasi benda yang LOGIS untuk bertahan hidup:",
            options: [
                "Handphone, game console, TV",
                "Knife, matches, water bottle",
                "Makeup, mirror, comb",
                "Books, toys, balloons"
            ],
            correctIndex: 1,
            explanation: "Knife (pisau), matches (korek api), water bottle (botol air) berguna untuk bertahan hidup.",
            difficulty: "medium"
        },
        {
            id: "kids-29-012",
            question: "Lengkapi: 'I would ___ (pilih) my family photo.'",
            options: ["chose", "choose", "choosing", "chosen"],
            correctIndex: 1,
            explanation: "Setelah 'would', gunakan kata kerja dasar 'choose' (bukan chose/past tense).",
            difficulty: "medium"
        },
        {
            id: "kids-29-013",
            question: "Bahasa Indonesia dari 'I couldn't live without...':",
            options: [
                "Aku bisa hidup tanpa...",
                "Aku tidak bisa hidup tanpa...",
                "Aku suka hidup dengan...",
                "Aku benci hidup dengan..."
            ],
            correctIndex: 1,
            explanation: "'Couldn't live without' = Tidak bisa hidup tanpa (sangat penting).",
            difficulty: "medium"
        },
        {
            id: "kids-29-014",
            question: "Pilih alasan yang BAIK untuk memilih sesuatu:",
            options: [
                "Karena warnanya bagus",
                "Because it would help me find food and stay safe",
                "Karena temanku punya",
                "Karena mahal"
            ],
            correctIndex: 1,
            explanation: "Alasan yang baik menjelaskan manfaat fungsional (find food, stay safe).",
            difficulty: "medium"
        },
        {
            id: "kids-29-015",
            question: "Apa arti dari 'essential'?",
            options: [
                "Tidak penting",
                "Sangat penting/penting sekali",
                "Lucu",
                "Mahal"
            ],
            correctIndex: 1,
            explanation: "'Essential' artinya sangat penting/esensial.",
            difficulty: "medium"
        },
        {
            id: "kids-29-016",
            question: "Lengkapi: 'I would bring a book ___ I wouldn't get bored.'",
            options: ["because", "but", "or", "so"],
            correctIndex: 3,
            explanation: "'So' artinya jadi/sehingga (menunjukkan hasil/tujuan).",
            difficulty: "medium"
        },
        {
            id: "kids-29-017",
            question: "Bahasa Inggris dari 'Satu hal yang akan kubawa adalah...' adalah:",
            options: [
                "One thing I would bring is...",
                "One thing I bring is...",
                "One thing I brought is...",
                "One thing I bringing is..."
            ],
            correctIndex: 0,
            explanation: "'One thing I would bring is...' untuk situasi imajiner (would).",
            difficulty: "medium"
        },
        {
            id: "kids-29-018",
            question: "Pilih kata yang menunjukkan ALASAN:",
            options: ["and", "because", "then", "next"],
            correctIndex: 1,
            explanation: "'Because' digunakan untuk memberikan alasan.",
            difficulty: "medium"
        },
        {
            id: "kids-29-019",
            question: "Apa arti dari 'imagine'?",
            options: [
                "Melupakan",
                "Membayangkan",
                "Melihat",
                "Mendengar"
            ],
            correctIndex: 1,
            explanation: "'Imagine' artinya membayangkan/mengimajinasikan.",
            difficulty: "medium"
        },
        {
            id: "kids-29-020",
            question: "Pilih kalimat yang menggunakan 'if' dengan benar:",
            options: [
                "If I were on a desert island, I would bring a knife.",
                "If I were on a desert island, I bring a knife.",
                "If I were on a desert island, I brought a knife.",
                "If I were on a desert island, I bringing a knife."
            ],
            correctIndex: 0,
            explanation: "Second conditional: If + were, would + verb.",
            difficulty: "medium"
        },
        {
            id: "kids-29-021",
            question: "Lengkapi: 'I would miss my ___ and friends.'",
            options: ["family", "toys", "games", "computer"],
            correctIndex: 0,
            explanation: "'Family' (keluarga) adalah yang paling dirindukan saat sendirian.",
            difficulty: "medium"
        },
        {
            id: "kids-29-022",
            question: "Bahasa Indonesia dari 'What would you bring?'",
            options: [
                "Apa yang akan kamu bawa?",
                "Apa yang kamu bawa?",
                "Apa yang sudah kamu bawa?",
                "Apa yang sedang kamu bawa?"
            ],
            correctIndex: 0,
            explanation: "'What would you bring?' = Apa yang akan kamu bawa? (would = akan/imajiner).",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-29-023",
            question: "Susun kalimat: 'would / first / I / bring / aid / a / kit'",
            options: [
                "I would bring a first aid kit.",
                "I would first aid bring a kit.",
                "First I would bring a aid kit.",
                "A first aid kit I would bring."
            ],
            correctIndex: 0,
            explanation: "'First aid kit' adalah satu kesatuan (kotak P3K). Struktur: S + would + V + O.",
            difficulty: "hard"
        },
        {
            id: "kids-29-024",
            question: "Pilih penjelasan yang PALIS logis dan lengkap:",
            options: [
                "I would bring a knife.",
                "I would bring a Swiss Army knife because it's versatile - I could use it to cut food, build shelter, make tools, and protect myself if necessary.",
                "I want a knife.",
                "Knife is good."
            ],
            correctIndex: 1,
            explanation: "Penjelasan terbaik memberikan banyak alasan praktis (cut food, build shelter, make tools, protect).",
            difficulty: "hard"
        },
        {
            id: "kids-29-025",
            question: "Apa arti dari 'versatile'?",
            options: [
                "Serbaguna",
                "Satu fungsi",
                "Sulit digunakan",
                "Mahal"
            ],
            correctIndex: 0,
            explanation: "'Versatile' artinya serbaguna (bisa digunakan untuk banyak hal).",
            difficulty: "hard"
        },
        {
            id: "kids-29-026",
            question: "Pilih kata yang merupakan ANTONIM dari 'practical':",
            options: ["useful", "helpful", "useless", "functional"],
            correctIndex: 2,
            explanation: "'Useless' (tidak berguna) adalah lawan dari 'practical' (praktis/berguna).",
            difficulty: "hard"
        },
        {
            id: "kids-29-027",
            question: "Lengkapi: 'If I ___ (be) on a desert island, I ___ (bring) a solar-powered radio.'",
            options: [
                "was / would bring",
                "were / would bring",
                "am / will bring",
                "were / will bring"
            ],
            correctIndex: 1,
            explanation: "Second conditional: If + were (untuk semua subjek), would + verb.",
            difficulty: "hard"
        },
        {
            id: "kids-29-028",
            question: "Bahasa Indonesia dari 'I would rather have practical items than luxury items':",
            options: [
                "Aku lebih suka barang mewah daripada praktis",
                "Aku lebih suka barang praktis daripada barang mewah",
                "Aku tidak suka barang apa pun",
                "Aku suka semua barang"
            ],
            correctIndex: 1,
            explanation: "'Rather have... than...' artinya lebih suka... daripada...",
            difficulty: "hard"
        },
        {
            id: "kids-29-029",
            question: "Pilih strategi bertahan hidup terbaik:",
            options: [
                "Bawa barang mewah",
                "Bawa barang serbaguna yang bisa digunakan untuk banyak hal (air, makanan, perlindungan, kesehatan)",
                "Bawa mainan",
                "Bawa pakaian fashion"
            ],
            correctIndex: 1,
            explanation: "Strategi terbaik adalah membawa barang serbaguna untuk kebutuhan dasar.",
            difficulty: "hard"
        },
        {
            id: "kids-29-030",
            question: " ",
            options: [
                "Phone, game, TV",
                "I would bring a water filter for clean drinking water, a multi-tool for building shelter and finding food, and a first aid kit for emergencies. These items would help me survive and stay healthy until I get rescued.",
                "Toys, books, games",
                "I don't know"
            ],
            correctIndex: 1,
            explanation: "Jawaban terbaik mencakup: item spesifik + alasan fungsional + strategi bertahan hidup lengkap!",
            difficulty: "hard"
        }
    ]
};


