/**
 * Topic 11: Nature & Activities 🌲
 * --------------------------------
 * 30 questions about nature, outdoor activities, and the environment
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 11,
    path: 'speaking-kids',
    title: "Nature & Activities 🌲",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-11-001",
            question: "🌳 Pohon dalam bahasa Inggris adalah...",
            options: ["Tree", "Flower", "Grass", "Leaf"],
            correctIndex: 0,
            explanation: "Tree artinya pohon. Flower = bunga, Grass = rumput, Leaf = daun.",
            difficulty: "easy",
            tags: ["vocabulary", "nature"]
        },
        {
            id: "kids-11-002",
            question: "🔥 'The sun is ___' - Pilih kata yang benar:",
            options: ["cold", "hot", "wet", "dark"],
            correctIndex: 1,
            explanation: "The sun is hot = Matahari itu panas. Hot = panas.",
            difficulty: "easy",
            tags: ["vocabulary", "adjectives"]
        },
        {
            id: "kids-11-003",
            question: "🦋 'I see a beautiful ___ in the garden.'",
            options: ["car", "butterfly", "book", "phone"],
            correctIndex: 1,
            explanation: "Butterfly artinya kupu-kupu. Ada di taman/garden.",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-11-004",
            question: "Terjemahkan: 'Ada banyak bunga di kebun.'",
            options: [
                "There are many flowers in the garden.",
                "There is a flower in the garden.",
                "Many flowers are garden.",
                "Flowers many in garden."
            ],
            correctIndex: 0,
            explanation: "Kalimat yang benar: There are many flowers in the garden. 'There are' untuk benda jamak (banyak).",
            difficulty: "easy",
            tags: ["grammar", "there-is-are"]
        },
        {
            id: "kids-11-005",
            question: "🏔️ Gunung dalam bahasa Inggris adalah...",
            options: ["River", "Mountain", "Lake", "Beach"],
            correctIndex: 1,
            explanation: "Mountain artinya gunung. River = sungai, Lake = danau, Beach = pantai.",
            difficulty: "easy",
            tags: ["vocabulary", "nature"]
        },
        {
            id: "kids-11-006",
            question: "Pilih kata yang BUKAN warna langit:",
            options: ["blue", "cloudy", "green", "clear"],
            correctIndex: 2,
            explanation: "Green (hijau) bukan warna langit. Blue (biru), cloudy (berawan), dan clear (cerah) menggambarkan langit.",
            difficulty: "easy",
            tags: ["vocabulary", "colors"]
        },
        {
            id: "kids-11-007",
            question: "🐦 'Birds can ___'",
            options: ["swim", "fly", "run fast", "jump high"],
            correctIndex: 1,
            explanation: "Birds can fly = Burung bisa terbang. Fly = terbang.",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-11-008",
            question: "☀️ Matahari dalam bahasa Inggris adalah...",
            options: ["Moon", "Star", "Sun", "Cloud"],
            correctIndex: 2,
            explanation: "Sun artinya matahari. Moon = bulan, Star = bintang, Cloud = awan.",
            difficulty: "easy",
            tags: ["vocabulary", "nature"]
        },
        {
            id: "kids-11-009",
            question: "'I like to play ___ the park.' Pilih kata yang tepat:",
            options: ["on", "at", "in", "to"],
            correctIndex: 2,
            explanation: "In the park = di taman. Kita menggunakan 'in' untuk tempat terbuka seperti taman.",
            difficulty: "easy",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-11-010",
            question: "🌧️ 'It is ___ today.' (Hujan)",
            options: ["sunny", "rainy", "windy", "snowy"],
            correctIndex: 1,
            explanation: "Rainy artinya hujan. Sunny = cerah/terik, Windy = berangin, Snowy = bersalju.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-11-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "The flower is very beautiful.",
                "The flower very beautiful.",
                "The flower are very beautiful.",
                "The flowers is very beautiful."
            ],
            correctIndex: 0,
            explanation: "The flower is very beautiful adalah kalimat yang benar. Flower tunggal pakai 'is'.",
            difficulty: "medium",
            tags: ["grammar", "to-be"]
        },
        {
            id: "kids-11-012",
            question: "🌊 'We can see fish ___ the river.'",
            options: ["on", "in", "at", "under"],
            correctIndex: 1,
            explanation: "In the river = di sungai. Ikan berada di dalam air, jadi pakai 'in'.",
            difficulty: "medium",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-11-013",
            question: "Apa arti dari 'hiking'?",
            options: ["Berenang", "Mendaki gunung", "Bersepeda", "Berkemah"],
            correctIndex: 1,
            explanation: "Hiking artinya mendaki gunung atau jalan-jalan di alam.",
            difficulty: "medium",
            tags: ["vocabulary", "activities"]
        },
        {
            id: "kids-11-014",
            question: "🦅 'The eagle is flying ___ the sky.'",
            options: ["on", "at", "in", "under"],
            correctIndex: 2,
            explanation: "In the sky = di langit. Kita pakai 'in' untuk udara/langit.",
            difficulty: "medium",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-11-015",
            question: "Pilih kata yang sesuai: 'Let's ___ a picnic in the park!'",
            options: ["do", "make", "have", "take"],
            correctIndex: 2,
            explanation: "Have a picnic = piknik. Ini adalah ungkapan yang umum digunakan.",
            difficulty: "medium",
            tags: ["vocabulary", "collocations"]
        },
        {
            id: "kids-11-016",
            question: "🐿️ 'Squirrels like to eat ___.'",
            options: ["meat", "nuts", "fish", "grass"],
            correctIndex: 1,
            explanation: "Squirrels (tupai) suka makan nuts (kacang-kacangan).",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-11-017",
            question: "Terjemahkan: 'Anak-anak sedang bermain di luar.'",
            options: [
                "The children is playing outside.",
                "The children are playing outside.",
                "The child are playing outside.",
                "The children playing outside."
            ],
            correctIndex: 1,
            explanation: "Children adalah jamak (banyak), jadi pakai 'are'. Are playing = sedang bermain.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-11-018",
            question: "Pilih yang BUKAN aktivitas outdoor:",
            options: ["camping", "hiking", "reading", "fishing"],
            correctIndex: 2,
            explanation: "Reading (membaca) biasanya dilakukan di dalam ruangan. Camping, hiking, dan fishing adalah aktivitas outdoor.",
            difficulty: "medium",
            tags: ["vocabulary", "activities"]
        },
        {
            id: "kids-11-019",
            question: "🌙 'At night, we can see the ___ in the sky.'",
            options: ["sun", "moon", "cloud", "rainbow"],
            correctIndex: 1,
            explanation: "At night (di malam hari) kita bisa melihat moon (bulan).",
            difficulty: "medium",
            tags: ["vocabulary", "nature"]
        },
        {
            id: "kids-11-020",
            question: "Lengkapi: 'There ___ many trees in the forest.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 1,
            explanation: "There are untuk benda jamak (banyak). Trees adalah jamak, jadi pakai 'are'.",
            difficulty: "medium",
            tags: ["grammar", "there-is-are"]
        },
        {
            id: "kids-11-021",
            question: "🦆 'Look! The ducks ___ swimming in the pond.'",
            options: ["is", "are", "am", "be"],
            correctIndex: 1,
            explanation: "Ducks (bebek-bebek) adalah jamak, jadi pakai 'are'. Are swimming = sedang berenang.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-11-022",
            question: "Apa arti 'campfire'?",
            options: [
                "Tenda besar",
                "Api unggun",
                "Lampu senter",
                "Pohon cemara"
            ],
            correctIndex: 1,
            explanation: "Campfire = api unggun. Camp = kemah, fire = api.",
            difficulty: "medium",
            tags: ["vocabulary", "camping"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-11-023",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "The leaves on the tree is green.",
                "The leafs on the tree are green.",
                "The leaves on the tree are green.",
                "The leaf on the trees are green."
            ],
            correctIndex: 2,
            explanation: "Leaves adalah bentuk jamak dari leaf. Karena jamak, pakai 'are'. The leaves... are green.",
            difficulty: "hard",
            tags: ["grammar", "plurals"]
        },
        {
            id: "kids-11-024",
            question: "🌿 'Plants need ___ to grow.' (Pilih yang paling lengkap)",
            options: [
                "water",
                "sunlight",
                "water and sunlight",
                "soil only"
            ],
            correctIndex: 2,
            explanation: "Tanaman membutuhkan water (air) dan sunlight (sinar matahari) untuk tumbuh.",
            difficulty: "hard",
            tags: ["vocabulary", "science"]
        },
        {
            id: "kids-11-025",
            question: "Pilih preposisi yang tepat: 'The bird is sitting ___ the branch.'",
            options: ["in", "on", "at", "under"],
            correctIndex: 1,
            explanation: "On the branch = di atas dahan. Burung duduk DI ATAS dahan, jadi pakai 'on'.",
            difficulty: "hard",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-11-026",
            question: "🐻 'Bears usually sleep ___ winter.'",
            options: ["on", "at", "in", "during"],
            correctIndex: 3,
            explanation: "During winter = selama musim dingin. During digunakan untuk periode waktu tertentu.",
            difficulty: "hard",
            tags: ["grammar", "prepositions"]
        },
        {
            id: "kids-11-027",
            question: "Susun kata berikut: 'park / play / to / like / I / in / the'",
            options: [
                "I like to play in the park.",
                "I play to like in the park.",
                "In the park I like to play.",
                "I like play to in the park."
            ],
            correctIndex: 0,
            explanation: "Kalimat yang benar: I like to play in the park. (Saya suka bermain di taman.)",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-11-028",
            question: "Pilih jawaban yang benar: 'What do we call animals that can live on land and in water?'",
            options: ["Birds", "Amphibians", "Reptiles", "Mammals"],
            correctIndex: 1,
            explanation: "Amphibians (amfibi) adalah hewan yang bisa hidup di darat dan di air, seperti katak.",
            difficulty: "hard",
            tags: ["vocabulary", "science"]
        },
        {
            id: "kids-11-029",
            question: "🌻 'The sunflower ___ towards the sun.'",
            options: ["look", "looks", "looking", "looked"],
            correctIndex: 1,
            explanation: "The sunflower (tunggal) pakai 'looks' (menghadap/melihat). Looks towards = menghadap ke arah.",
            difficulty: "hard",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-11-030",
            question: "Identifikasi semua error: 'The childrens is playing in the park and they is very happy.'",
            options: [
                "1 error",
                "2 errors",
                "3 errors",
                "4 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) childrens → children (sudah jamak), 2) is playing → are playing (children jamak), 3) they is → they are.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
