import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 21,
    path: 'speaking-kids',
    title: "Show & Tell 🎤",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-21-001",
            question: "Apa arti dari 'Show & Tell'?",
            options: [
                "Tunjukkan dan Ceritakan",
                "Tunjukkan dan Sembunyikan",
                "Berbicara dan Menulis",
                "Melihat dan Mendengar"
            ],
            correctIndex: 0,
            explanation: "'Show' artinya tunjukkan, 'Tell' artinya ceritakan. Kita menunjukkan barang dan menceritakannya!",
            difficulty: "easy"
        },
        {
            id: "kids-21-002",
            question: "Pilih kalimat yang BENAR untuk memulai Show & Tell:",
            options: [
                "This is my favorite toy.",
                "This my favorite toy.",
                "My is favorite toy this.",
                "Toy favorite my is this."
            ],
            correctIndex: 0,
            explanation: "Kalimat yang benar: 'This is my favorite toy.' (Ini adalah mainan favoritku.)",
            difficulty: "easy"
        },
        {
            id: "kids-21-003",
            question: "Bahasa Indonesia dari 'I want to show you...' adalah:",
            options: [
                "Aku makan denganmu...",
                "Aku ingin menunjukkan kepadamu...",
                "Aku pergi ke sekolah...",
                "Aku suka bermain..."
            ],
            correctIndex: 1,
            explanation: "'I want to show you' = 'Aku ingin menunjukkan kepadamu'",
            difficulty: "easy"
        },
        {
            id: "kids-21-004",
            question: "Pilih kata yang tepat: 'This is ___ doll.'",
            options: ["a", "an", "the", "is"],
            correctIndex: 0,
            explanation: "Kita pakai 'a' sebelum kata yang dimulai dengan huruf konsonan (doll).",
            difficulty: "easy"
        },
        {
            id: "kids-21-005",
            question: "Apa arti dari 'This is special to me'?",
            options: [
                "Ini spesial bagiku",
                "Ini besar sekali",
                "Ini warna merah",
                "Ini dari toko"
            ],
            correctIndex: 0,
            explanation: "'Special to me' artinya 'spesial/berarti bagiku'",
            difficulty: "easy"
        },
        {
            id: "kids-21-006",
            question: "Lengkapi kalimat: 'I got this ___ my birthday.'",
            options: ["on", "at", "for", "in"],
            correctIndex: 2,
            explanation: "'I got this for my birthday' = Aku dapat ini untuk ulang tahunku.",
            difficulty: "easy"
        },
        {
            id: "kids-21-007",
            question: "Pilih kata sifat yang BAIK untuk menggambarkan mainan:",
            options: ["eat", "soft", "run", "jump"],
            correctIndex: 1,
            explanation: "'Soft' (lembut) adalah kata sifat. Kata lainnya adalah kata kerja.",
            difficulty: "easy"
        },
        {
            id: "kids-21-008",
            question: "Bahasa Inggris dari 'Hadiah dari ibuku' adalah:",
            options: [
                "A gift to my mom",
                "A gift from my mom",
                "A gift with my mom",
                "A gift at my mom"
            ],
            correctIndex: 1,
            explanation: "'From' artinya 'dari'. Jadi 'a gift from my mom' = hadiah dari ibuku.",
            difficulty: "easy"
        },
        {
            id: "kids-21-009",
            question: "Pilih kalimat yang benar untuk mengakhiri Show & Tell:",
            options: [
                "Thank you for listening!",
                "I go home now!",
                "You are bad!",
                "I don't like this!"
            ],
            correctIndex: 0,
            explanation: "'Thank you for listening' adalah cara sopan untuk mengakhiri presentasi.",
            difficulty: "easy"
        },
        {
            id: "kids-21-010",
            question: "Apa arti dari 'I like it because...'?",
            options: [
                "Aku suka karena...",
                "Aku tidak suka...",
                "Aku punya banyak...",
                "Aku memberikan..."
            ],
            correctIndex: 0,
            explanation: "'I like it because...' = 'Aku menyukainya karena...' (untuk menjelaskan alasan)",
            difficulty: "easy"
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-21-011",
            question: "Pilih kalimat yang lebih detail dan menarik:",
            options: [
                "This is a ball.",
                "This is a shiny red ball that I play with every day.",
                "I have ball.",
                "Ball is round."
            ],
            correctIndex: 1,
            explanation: "Kalimat yang panjang dengan detail (shiny, red, every day) lebih menarik!",
            difficulty: "medium"
        },
        {
            id: "kids-21-012",
            question: "Lengkapi: 'I like to play with it ___ I feel happy.'",
            options: ["because", "but", "or", "if"],
            correctIndex: 0,
            explanation: "'Because' digunakan untuk memberikan alasan.",
            difficulty: "medium"
        },
        {
            id: "kids-21-013",
            question: "Pilih kata ganti yang tepat: '___ is my favorite toy.'",
            options: ["He", "She", "They", "This"],
            correctIndex: 3,
            explanation: "'This' digunakan untuk menunjukkan benda yang dekat dengan kita.",
            difficulty: "medium"
        },
        {
            id: "kids-21-014",
            question: "Bahasa Indonesia dari 'It has been with me for two years':",
            options: [
                "Sudah dua tahun aku punya ini",
                "Aku baru beli ini",
                "Ini hilang dua tahun",
                "Aku punya dua mainan"
            ],
            correctIndex: 0,
            explanation: "Kalimat ini artinya barang itu sudah lama dimiliki (dua tahun).",
            difficulty: "medium"
        },
        {
            id: "kids-21-015",
            question: "Pilih kata yang BUKAN warna:",
            options: ["fluffy", "blue", "yellow", "purple"],
            correctIndex: 0,
            explanation: "'Fluffy' artinya lembut/bulu-bulu, bukan warna.",
            difficulty: "medium"
        },
        {
            id: "kids-21-016",
            question: "Lengkapi: 'My grandma gave ___ to me.'",
            options: ["it", "they", "we", "he"],
            correctIndex: 0,
            explanation: "'It' digunakan untuk benda tunggal.",
            difficulty: "medium"
        },
        {
            id: "kids-21-017",
            question: "Apa arti dari 'precious'?",
            options: [
                "Berharga/istimewa",
                "Berat",
                "Besar",
                "Baru"
            ],
            correctIndex: 0,
            explanation: "'Precious' artinya berharga atau sangat istimewa.",
            difficulty: "medium"
        },
        {
            id: "kids-21-018",
            question: "Pilih kalimat yang benar:",
            options: [
                "I got it when I am five.",
                "I got it when I was five.",
                "I got it when I five.",
                "I got it when five I."
            ],
            correctIndex: 1,
            explanation: "Untuk masa lalu, gunakan 'was' (I was five = aku berumur lima tahun).",
            difficulty: "medium"
        },
        {
            id: "kids-21-019",
            question: "Bahasa Inggris dari 'Ini membuatku tersenyum':",
            options: [
                "It makes me cry",
                "It makes me smile",
                "It makes me sad",
                "It makes me angry"
            ],
            correctIndex: 1,
            explanation: "'It makes me smile' = Ini membuatku tersenyum.",
            difficulty: "medium"
        },
        {
            id: "kids-21-020",
            question: "Pilih kata yang paling deskriptif:",
            options: ["good", "nice", "amazing", "okay"],
            correctIndex: 2,
            explanation: "'Amazing' (luar biasa) adalah kata yang lebih kuat dan deskriptif.",
            difficulty: "medium"
        },
        {
            id: "kids-21-021",
            question: "Lengkapi: 'I bring it ___ when I sleep.'",
            options: ["everywhere", "nowhere", "someone", "nothing"],
            correctIndex: 0,
            explanation: "'Everywhere' artinya kemana-mana/ke mana pun.",
            difficulty: "medium"
        },
        {
            id: "kids-21-022",
            question: "Apa arti dari 'memories'?",
            options: [
                "Kenangan",
                "Makanan",
                "Mainan",
                "Mobil"
            ],
            correctIndex: 0,
            explanation: "'Memories' artinya kenangan atau pengalaman masa lalu.",
            difficulty: "medium"
        },

        // === HARD (8 questions) ===
        {
            id: "kids-21-023",
            question: "Susun kata ini: 'years / had / I / for / it / three / have'",
            options: [
                "I have had it for three years.",
                "I had have it for three years.",
                "For three years I have had it.",
                "It have I had for three years."
            ],
            correctIndex: 0,
            explanation: "'I have had it for three years' = Aku sudah memilikinya selama tiga tahun.",
            difficulty: "hard"
        },
        {
            id: "kids-21-024",
            question: "Pilih kalimat yang menggunakan kata sifat paling banyak:",
            options: [
                "This is my toy.",
                "This is my soft, cuddly, brown teddy bear.",
                "This is brown.",
                "This is a bear."
            ],
            correctIndex: 1,
            explanation: "Kalimat kedua punya 3 kata sifat: soft (lembut), cuddly (nyaman dipeluk), brown (cokelat).",
            difficulty: "hard"
        },
        {
            id: "kids-21-025",
            question: "Lengkapi dengan bentuk yang benar: 'If I ___ (lose) it, I would be very sad.'",
            options: ["lose", "lost", "losing", "loses"],
            correctIndex: 1,
            explanation: "Untuk kalimat pengandaian (conditional), gunakan 'lost'.",
            difficulty: "hard"
        },
        {
            id: "kids-21-026",
            question: "Apa arti dari 'irreplaceable'?",
            options: [
                "Bisa diganti",
                "Tidak tergantikan",
                "Sering hilang",
                "Baru dibeli"
            ],
            correctIndex: 1,
            explanation: "'Irreplaceable' artinya sangat berharga sehingga tidak bisa diganti.",
            difficulty: "hard"
        },
        {
            id: "kids-21-027",
            question: "Pilih kalimat yang paling formal dan baik untuk Show & Tell:",
            options: [
                "Yo, check out my toy!",
                "I would like to present my favorite possession.",
                "Look at my thing!",
                "This is stuff I got."
            ],
            correctIndex: 1,
            explanation: "'I would like to present my favorite possession' adalah cara yang sopan dan formal.",
            difficulty: "hard"
        },
        {
            id: "kids-21-028",
            question: "Bahasa Indonesia dari 'It holds sentimental value':",
            options: [
                "Ini punya nilai emosional/kenangan",
                "Ini mahal harganya",
                "Ini berat sekali",
                "Ini warnanya bagus"
            ],
            correctIndex: 0,
            explanation: "'Sentimental value' artinya nilai emosional karena kenangan, bukan harga uang.",
            difficulty: "hard"
        },
        {
            id: "kids-21-029",
            question: "Pilih kata yang merupakan sinonim dari 'special':",
            options: ["ordinary", "unique", "common", "regular"],
            correctIndex: 1,
            explanation: "'Unique' artinya unik/istimewa, sama seperti 'special'.",
            difficulty: "hard"
        },
        {
            id: "kids-21-030",
            question: "Susun kalimat yang lengkap dan benar: 'given / was / this / by / I / best / my / friend'",
            options: [
                "I was given this by my best friend.",
                "My best friend was given I by this.",
                "This was given I by my best friend.",
                "By my best friend I was given this."
            ],
            correctIndex: 0,
            explanation: "'I was given this by my best friend' = Aku diberi ini oleh teman baikku (bentuk pasif).",
            difficulty: "hard"
        }
    ]
};
