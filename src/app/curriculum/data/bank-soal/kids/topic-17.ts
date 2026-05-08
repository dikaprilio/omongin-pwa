/**
 * Topic 17: My Last Holiday 🏖️
 * -----------------------------
 * 30 questions about past holidays, travel experiences, and vacation activities
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 17,
    path: 'speaking-kids',
    title: "My Last Holiday 🏖️",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-17-001",
            question: "🏖️ 'I went to the ___ last weekend.' (Pantai)",
            options: ["mountain", "beach", "forest", "lake"],
            correctIndex: 1,
            explanation: "Beach artinya pantai. Went to the beach = pergi ke pantai.",
            difficulty: "easy",
            tags: ["vocabulary", "places"]
        },
        {
            id: "kids-17-002",
            question: "Terjemahkan: 'Saya pergi ke Jakarta minggu lalu.'",
            options: [
                "I go to Jakarta last week.",
                "I went to Jakarta last week.",
                "I going to Jakarta last week.",
                "I gone to Jakarta last week."
            ],
            correctIndex: 1,
            explanation: "I went to Jakarta last week = Saya pergi ke Jakarta minggu lalu. Went (go - past tense).",
            difficulty: "easy",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-003",
            question: "🚗 Kita pergi ke tempat liburan dengan...",
            options: ["Eat", "Travel", "Sleep", "Study"],
            correctIndex: 1,
            explanation: "Travel artinya bepergian/melakukan perjalanan. Kita travel untuk liburan.",
            difficulty: "easy",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-004",
            question: "Pilih kata yang benar: 'We ___ a lot of photos on holiday.'",
            options: ["take", "took", "taking", "taken"],
            correctIndex: 1,
            explanation: "We took = Kami mengambil. Took adalah bentuk lampau dari take.",
            difficulty: "easy",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-005",
            question: "🏨 'We stayed at a nice ___ during our holiday.'",
            options: ["school", "hospital", "hotel", "office"],
            correctIndex: 2,
            explanation: "Hotel (hotel) adalah tempat menginap saat liburan.",
            difficulty: "easy",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-006",
            question: "📸 'I took many ___ with my camera.'",
            options: ["pictures", "foods", "clothes", "books"],
            correctIndex: 0,
            explanation: "Pictures artinya foto. Take pictures = mengambil foto.",
            difficulty: "easy",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-007",
            question: "'Last summer, I ___ my grandmother.' (Bertemu)",
            options: ["meet", "met", "meeting", "meets"],
            correctIndex: 1,
            explanation: "Met adalah bentuk lampau dari meet (bertemu). Last summer = musim panas lalu.",
            difficulty: "easy",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-008",
            question: "✈️ 'We traveled by ___ to Bali.'",
            options: ["car", "train", "plane", "bus"],
            correctIndex: 2,
            explanation: "Plane (pesawat) untuk perjalanan jauh ke Bali.",
            difficulty: "easy",
            tags: ["vocabulary", "transportation"]
        },
        {
            id: "kids-17-009",
            question: "Minggu lalu dalam bahasa Inggris adalah...",
            options: ["Next week", "Last week", "This week", "Every week"],
            correctIndex: 1,
            explanation: "Last week = minggu lalu. Next week = minggu depan.",
            difficulty: "easy",
            tags: ["vocabulary", "time"]
        },
        {
            id: "kids-17-010",
            question: "🎁 'I bought some ___ for my friends.'",
            options: ["homework", "souvenirs", "lessons", "chores"],
            correctIndex: 1,
            explanation: "Souvenirs (oleh-oleh) dibeli untuk teman-teman saat liburan.",
            difficulty: "easy",
            tags: ["vocabulary", "travel"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-17-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "Yesterday, I go to the zoo.",
                "Yesterday, I went to the zoo.",
                "Yesterday, I going to the zoo.",
                "Yesterday, I gone to the zoo."
            ],
            correctIndex: 1,
            explanation: "Yesterday (kemarin) menggunakan past tense. I went = Saya pergi.",
            difficulty: "medium",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-012",
            question: "🏛️ 'We visited an old ___ in Yogyakarta.'",
            options: ["mall", "temple", "airport", "station"],
            correctIndex: 1,
            explanation: "Temple (candi) banyak ditemukan di Yogyakarta.",
            difficulty: "medium",
            tags: ["vocabulary", "places"]
        },
        {
            id: "kids-17-013",
            question: "'___ did you go on holiday?' Pilih kata yang tepat:",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 1,
            explanation: "Where did you go? = Kamu pergi ke mana? Where untuk menanyakan tempat.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-17-014",
            question: "🍴 'We ___ delicious food at the restaurant.'",
            options: ["eat", "ate", "eating", "eats"],
            correctIndex: 1,
            explanation: "Ate adalah bentuk lampau dari eat (makan).",
            difficulty: "medium",
            tags: ["vocabulary", "past-simple"]
        },
        {
            id: "kids-17-015",
            question: "Terjemahkan: 'Kami bersenang-senang di Bandung.'",
            options: [
                "We has fun in Bandung.",
                "We had fun in Bandung.",
                "We have fun in Bandung.",
                "We having fun in Bandung."
            ],
            correctIndex: 1,
            explanation: "We had fun = Kami bersenang-senang. Had adalah bentuk lampau dari have.",
            difficulty: "medium",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-016",
            question: "🗺️ 'Before traveling, I looked at a ___ to find the way.'",
            options: ["book", "map", "phone", "ticket"],
            correctIndex: 1,
            explanation: "Map (peta) digunakan untuk mencari jalan saat bepergian.",
            difficulty: "medium",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-017",
            question: "Pilih yang benar: 'The beach ___ very beautiful.' (Waktu liburan)",
            options: ["is", "was", "were", "are"],
            correctIndex: 1,
            explanation: "Was (lampau dari is) untuk keadaan di masa lalu. The beach was very beautiful.",
            difficulty: "medium",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-018",
            question: "🏕️ 'We ___ in a tent near the lake.'",
            options: ["sleep", "slept", "sleeping", "sleeps"],
            correctIndex: 1,
            explanation: "Slept adalah bentuk lampau dari sleep (tidur).",
            difficulty: "medium",
            tags: ["vocabulary", "camping"]
        },
        {
            id: "kids-17-019",
            question: "Apa arti dari 'itinerary'?",
            options: [
                "Rencana perjalanan/jadwal",
                "Tiket pesawat",
                "Paspor",
                "Koper"
            ],
            correctIndex: 0,
            explanation: "Itinerary artinya rencana perjalanan atau jadwal perjalanan.",
            difficulty: "medium",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-020",
            question: "🚂 'We ___ the train to Surabaya.' (Naik)",
            options: ["ride", "rode", "ridden", "riding"],
            correctIndex: 1,
            explanation: "Rode adalah bentuk lampau dari ride (naik/mengendarai).",
            difficulty: "medium",
            tags: ["vocabulary", "transportation"]
        },
        {
            id: "kids-17-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "She swim in the sea yesterday.",
                "She swam in the sea yesterday.",
                "She swimming in the sea yesterday.",
                "She swims in the sea yesterday."
            ],
            correctIndex: 1,
            explanation: "She swam = Dia berenang. Swam adalah bentuk lampau dari swim.",
            difficulty: "medium",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-17-022",
            question: "🎡 'We went to an amusement ___ and rode many rides.'",
            options: ["zoo", "park", "museum", "mall"],
            correctIndex: 1,
            explanation: "Amusement park (taman hiburan/taman bermain) memiliki wahana permainan.",
            difficulty: "medium",
            tags: ["vocabulary", "places"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-17-023",
            question: "Susun kata berikut: 'holiday / I / wonderful / had / a'",
            options: [
                "I had a wonderful holiday.",
                "I wonderful had a holiday.",
                "Had I a wonderful holiday.",
                "A wonderful holiday I had."
            ],
            correctIndex: 0,
            explanation: "I had a wonderful holiday = Saya memiliki liburan yang menyenangkan.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-17-024",
            question: "🌋 'I ___ a volcano for the first time in my life.' (Melihat)",
            options: ["saw", "see", "seen", "seeing"],
            correctIndex: 0,
            explanation: "Saw adalah bentuk lampau dari see (melihat). For the first time = pertama kali.",
            difficulty: "hard",
            tags: ["vocabulary", "past-simple"]
        },
        {
            id: "kids-17-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither my mom nor my dad like traveling.",
                "Neither my mom or my dad likes traveling.",
                "Neither my mom nor my dad likes traveling.",
                "Neither my mom and my dad likes traveling."
            ],
            correctIndex: 2,
            explanation: "Neither...nor menggunakan likes (tunggal) karena subject terdekat adalah 'dad'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-17-026",
            question: "🎒 'A ___ is a bag used to carry things during travel.'",
            options: ["Purse", "Backpack", "Wallet", "Pocket"],
            correctIndex: 1,
            explanation: "Backpack (ransel/tas punggung) digunakan untuk membawa barang saat bepergian.",
            difficulty: "hard",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-027",
            question: "Apa arti dari 'check-in' di bandara?",
            options: [
                "Membeli tiket",
                "Mendaftarkan diri dan bagasi sebelum terbang",
                "Makan di bandara",
                "Belanja di bandara"
            ],
            correctIndex: 1,
            explanation: "Check-in artinya mendaftarkan diri dan menyerahkan bagasi sebelum penerbangan.",
            difficulty: "hard",
            tags: ["vocabulary", "travel"]
        },
        {
            id: "kids-17-028",
            question: "🏊 'The children ___ in the swimming pool all afternoon.'",
            options: ["play", "played", "playing", "plays"],
            correctIndex: 1,
            explanation: "Played adalah bentuk lampau dari play (bermain). All afternoon = sepanjang sore.",
            difficulty: "hard",
            tags: ["vocabulary", "past-simple"]
        },
        {
            id: "kids-17-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "Last holiday, my family and me went to Singapore.",
                "Last holiday, my family and I went to Singapore.",
                "Last holiday, me and my family went to Singapore.",
                "Last holiday, my family and I go to Singapore."
            ],
            correctIndex: 1,
            explanation: "My family and I (subjek) untuk posisi subjek. Went untuk past tense.",
            difficulty: "hard",
            tags: ["grammar", "subject-pronouns"]
        },
        {
            id: "kids-17-030",
            question: "Identifikasi semua error: 'Last weekends, we go to the beach and swimed in the sea. It were very fun!'",
            options: [
                "3 errors",
                "4 errors",
                "5 errors",
                "6 errors"
            ],
            correctIndex: 1,
            explanation: "Errors: 1) weekends → weekend, 2) go → went, 3) swimed → swam, 4) were → was. Total 4 errors.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
