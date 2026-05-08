/**
 * Topic 14: Clothes & Costumes 👕
 * --------------------------------
 * 30 questions about clothing, accessories, costumes, and fashion
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 14,
    path: 'speaking-kids',
    title: "Clothes & Costumes 👕",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-14-001",
            question: "👕 'I wear a ___ to school every day.'",
            options: ["shoe", "uniform", "hat", "glove"],
            correctIndex: 1,
            explanation: "Uniform artinya seragam. Banyak sekolah memakai seragam.",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-002",
            question: "Terjemahkan: 'Saya memakai kaos merah.'",
            options: [
                "I wear red shirt.",
                "I wears a red shirt.",
                "I wear a red shirt.",
                "I wearing a red shirt."
            ],
            correctIndex: 2,
            explanation: "I wear a red shirt adalah kalimat yang benar. Wear = memakai (pakaian).",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-14-003",
            question: "👖 Celana panjang dalam bahasa Inggris adalah...",
            options: ["Shorts", "Pants", "Skirt", "Dress"],
            correctIndex: 1,
            explanation: "Pants artinya celana panjang. Shorts = celana pendek, Skirt = rok, Dress = gaun.",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-004",
            question: "Pilih kata yang benar: 'She ___ a beautiful dress today.'",
            options: ["wear", "wears", "wearing", "is wear"],
            correctIndex: 1,
            explanation: "She (tunggal) pakai 'wears'. Wears a beautiful dress = memakai gaun cantik.",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-14-005",
            question: "👟 'I need new ___ for running.'",
            options: ["shirts", "shoes", "hats", "scarves"],
            correctIndex: 1,
            explanation: "Shoes artinya sepatu. Untuk berlari kita butuh sepatu.",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-006",
            question: "🧦 'Don't forget to wear your ___ inside your shoes.'",
            options: ["gloves", "socks", "hats", "belts"],
            correctIndex: 1,
            explanation: "Socks artinya kaos kaki. Kita memakai kaos kaki di dalam sepatu.",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-007",
            question: "Warna biru dalam bahasa Inggris adalah...",
            options: ["Red", "Blue", "Green", "Yellow"],
            correctIndex: 1,
            explanation: "Blue artinya biru. Red = merah, Green = hijau, Yellow = kuning.",
            difficulty: "easy",
            tags: ["vocabulary", "colors"]
        },
        {
            id: "kids-14-008",
            question: "🧥 'It's cold outside. Wear your ___.'",
            options: ["t-shirt", "jacket", "shorts", "sandals"],
            correctIndex: 1,
            explanation: "Jacket artinya jaket. Saat dingin kita memakai jaket.",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-009",
            question: "'This hat is too ___ for me.' (Besar)",
            options: ["small", "big", "short", "long"],
            correctIndex: 1,
            explanation: "Big artinya besar. Too big = terlalu besar.",
            difficulty: "easy",
            tags: ["vocabulary", "adjectives"]
        },
        {
            id: "kids-14-010",
            question: "👗 Pakaian untuk perempuan yang satu bagian adalah...",
            options: ["Shirt", "Dress", "Pants", "Jacket"],
            correctIndex: 1,
            explanation: "Dress artinya gaun (satu bagian dari atas sampai bawah).",
            difficulty: "easy",
            tags: ["vocabulary", "clothes"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-14-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "My shoes is new.",
                "My shoes are new.",
                "My shoe are new.",
                "My shoes be new."
            ],
            correctIndex: 1,
            explanation: "Shoes (jamak) pakai 'are'. My shoes are new = Sepatu-sepatuku baru.",
            difficulty: "medium",
            tags: ["grammar", "to-be"]
        },
        {
            id: "kids-14-012",
            question: "🎃 'At Halloween, children wear special ___'",
            options: ["uniforms", "costumes", "pajamas", "suits"],
            correctIndex: 1,
            explanation: "Costumes artinya kostum/pakaian khusus. Di Halloween anak-anak memakai kostum.",
            difficulty: "medium",
            tags: ["vocabulary", "costumes"]
        },
        {
            id: "kids-14-013",
            question: "'___ is your favorite color?' Pilih kata yang tepat:",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 0,
            explanation: "What is your favorite color? = Apa warna favoritmu? What untuk menanyakan benda/informasi.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-14-014",
            question: "🧣 'I wear a ___ around my neck when it's cold.'",
            options: ["belt", "scarf", "tie", "glove"],
            correctIndex: 1,
            explanation: "Scarf artinya syal. Kita pakai syal di leher saat dingin.",
            difficulty: "medium",
            tags: ["vocabulary", "accessories"]
        },
        {
            id: "kids-14-015",
            question: "Terjemahkan: 'Celana pendekku warna biru.'",
            options: [
                "My short is blue.",
                "My shorts is blue.",
                "My shorts are blue.",
                "My short are blue."
            ],
            correctIndex: 2,
            explanation: "Shorts selalu bentuk jamak (tidak ada 'short'), jadi pakai 'are'. My shorts are blue.",
            difficulty: "medium",
            tags: ["grammar", "plurals"]
        },
        {
            id: "kids-14-016",
            question: "🎭 'When I dress up as a superhero, I wear a ___'",
            options: ["crown", "cape", "tiara", "necklace"],
            correctIndex: 1,
            explanation: "Cape artinya jubah/kerudung yang dipakai pahlawan super.",
            difficulty: "medium",
            tags: ["vocabulary", "costumes"]
        },
        {
            id: "kids-14-017",
            question: "Pilih yang benar: 'These ___ are too expensive.' (Kaos)",
            options: ["shirt", "shirts", "t-shirt", "t-shirts"],
            correctIndex: 3,
            explanation: "These (ini - jamak) untuk benda jamak. T-shirts adalah bentuk jamak.",
            difficulty: "medium",
            tags: ["grammar", "demonstratives"]
        },
        {
            id: "kids-14-018",
            question: "👔 'My father wears a ___ to work every day.'",
            options: ["dress", "tie", "skirt", "tiara"],
            correctIndex: 1,
            explanation: "Tie artinya dasi. Banyak ayah yang pakai dasi untuk kerja.",
            difficulty: "medium",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-019",
            question: "Apa arti dari 'get dressed'?",
            options: [
                "Membeli baju",
                "Memakai baju/mengenakan pakaian",
                "Mencuci baju",
                "Mengeringkan baju"
            ],
            correctIndex: 1,
            explanation: "Get dressed artinya memakai pakaian/mengenakan pakaian.",
            difficulty: "medium",
            tags: ["vocabulary", "phrasal-verbs"]
        },
        {
            id: "kids-14-020",
            question: "🧤 'I wear ___ to keep my hands warm.'",
            options: ["socks", "gloves", "scarves", "hats"],
            correctIndex: 1,
            explanation: "Gloves artinya sarung tangan. Untuk menhangatkan tangan.",
            difficulty: "medium",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "She don't have any blue clothes.",
                "She doesn't has any blue clothes.",
                "She doesn't have any blue clothes.",
                "She not have any blue clothes."
            ],
            correctIndex: 2,
            explanation: "She doesn't have adalah kalimat yang benar. Doesn't + have (bentuk dasar).",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-14-022",
            question: "👑 'A princess wears a ___ on her head.'",
            options: ["hat", "crown", "scarf", "helmet"],
            correctIndex: 1,
            explanation: "Crown artinya mahkota. Putri memakai mahkota di kepala.",
            difficulty: "medium",
            tags: ["vocabulary", "costumes"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-14-023",
            question: "Susun kata berikut: 'costume / for / party / a / I / need'",
            options: [
                "I need a costume for party.",
                "I need a costume for the party.",
                "I a costume need for party.",
                "For party I need a costume."
            ],
            correctIndex: 1,
            explanation: "I need a costume for the party = Saya butuh kostum untuk pesta. Perlu 'the' sebelum party.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-14-024",
            question: "🎨 Apa arti dari 'match' dalam konteks pakaian?",
            options: [
                "Pertandingan",
                "Cocok/serasi",
                "Korek api",
                "Pertandingan tenis"
            ],
            correctIndex: 1,
            explanation: "Match dalam konteks pakaian artinya cocok/serasi. Contoh: Your shirt matches your pants.",
            difficulty: "hard",
            tags: ["vocabulary", "clothes"]
        },
        {
            id: "kids-14-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Both my sister and my brother likes wearing costumes.",
                "Both my sister and my brother like wearing costumes.",
                "Both my sister or my brother like wearing costumes.",
                "Both my sister and my brother liking wearing costumes."
            ],
            correctIndex: 1,
            explanation: "Both...and menggunakan like (jamak) karena ada dua subjek (sister dan brother).",
            difficulty: "hard",
            tags: ["grammar", "both-and"]
        },
        {
            id: "kids-14-026",
            question: "🛍️ 'Let's go ___ for new clothes!'",
            options: ["shop", "shopping", "to shop", "shopped"],
            correctIndex: 1,
            explanation: "Go shopping = pergi berbelanja. Shopping adalah kegiatan.",
            difficulty: "hard",
            tags: ["vocabulary", "activities"]
        },
        {
            id: "kids-14-027",
            question: "Apa bedanya 'put on' dan 'wear'?",
            options: [
                "Sama saja",
                "Put on = memakai (aksi), Wear = memakai (keadaan)",
                "Put on = melepas, Wear = memakai",
                "Put on = mencuci, Wear = mengeringkan"
            ],
            correctIndex: 1,
            explanation: "Put on = aksi memakai (Put on your shoes!). Wear = keadaan sedang memakai (I wear shoes).",
            difficulty: "hard",
            tags: ["vocabulary", "phrasal-verbs"]
        },
        {
            id: "kids-14-028",
            question: "👘 'A kimono is a traditional costume from ___'",
            options: ["China", "Japan", "Korea", "Thailand"],
            correctIndex: 1,
            explanation: "Kimono adalah pakaian tradisional dari Jepang (Japan).",
            difficulty: "hard",
            tags: ["vocabulary", "culture"]
        },
        {
            id: "kids-14-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "My favorite clothes is my red jacket.",
                "My favorite clothes are my red jacket.",
                "My favorite cloth is my red jacket.",
                "My favorite clothing is my red jacket."
            ],
            correctIndex: 3,
            explanation: "Clothing atau 'piece of clothing' untuk benda tunggal. Clothes selalu jamak.",
            difficulty: "hard",
            tags: ["grammar", "nouns"]
        },
        {
            id: "kids-14-030",
            question: "Identifikasi semua error: 'My sister don't likes to wears dress, she prefer wearing pants.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) don't → doesn't (she tunggal), 2) likes → like (setelah doesn't), 3) wears → wear (setelah to), 4) prefer → prefers (she tunggal).",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
