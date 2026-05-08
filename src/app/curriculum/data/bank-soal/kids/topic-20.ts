/**
 * Topic 20: Superheroes 🦸
 * ------------------------
 * 30 questions about superheroes, powers, and heroic actions
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 20,
    path: 'speaking-kids',
    title: "Superheroes 🦸",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-20-001",
            question: "🦸‍♂️ 'Superman can ___ very fast.'",
            options: ["swim", "fly", "run", "drive"],
            correctIndex: 1,
            explanation: "Superman bisa fly (terbang) dengan sangat cepat.",
            difficulty: "easy",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-002",
            question: "Terjemahkan: 'Spiderman bisa memanjat dinding.'",
            options: [
                "Spiderman can climb walls.",
                "Spiderman can climbs walls.",
                "Spiderman can climbing walls.",
                "Spiderman can to climb walls."
            ],
            correctIndex: 0,
            explanation: "Spiderman can climb walls = Spiderman bisa memanjat dinding. Can + climb (bentuk dasar).",
            difficulty: "easy",
            tags: ["grammar", "modals"]
        },
        {
            id: "kids-20-003",
            question: "🕷️ Superhero yang memakai kostum laba-laba adalah...",
            options: ["Batman", "Spiderman", "Superman", "Ironman"],
            correctIndex: 1,
            explanation: "Spiderman adalah superhero dengan kostum laba-laba.",
            difficulty: "easy",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-004",
            question: "Pilih kata yang benar: 'Batman ___ a cool car called the Batmobile.' (Punya)",
            options: ["have", "has", "having", "had"],
            correctIndex: 1,
            explanation: "Batman has = Batman memiliki. Has untuk subjek tunggal (he/she/it/Batman).",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-20-005",
            question: "💪 'A superhero is very ___ and brave.'",
            options: ["weak", "strong", "small", "slow"],
            correctIndex: 1,
            explanation: "Strong (kuat) dan brave (berani) adalah ciri superhero.",
            difficulty: "easy",
            tags: ["vocabulary", "adjectives"]
        },
        {
            id: "kids-20-006",
            question: "🦸‍♀️ 'Wonder Woman uses a ___ and a shield to fight.'",
            options: ["pen", "lasso", "book", "toy"],
            correctIndex: 1,
            explanation: "Lasso (tali cambuk ajaib) adalah senjata Wonder Woman.",
            difficulty: "easy",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-007",
            question: "'___ can you do?' (Tanya kemampuan)",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 0,
            explanation: "What can you do? = Apa yang bisa kamu lakukan? What untuk menanyakan kemampuan/aksi.",
            difficulty: "easy",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-20-008",
            question: "🦇 'Batman lives in the city of ___'",
            options: ["New York", "Gotham", "Metropolis", "Chicago"],
            correctIndex: 1,
            explanation: "Batman tinggal di kota Gotham.",
            difficulty: "easy",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-009",
            question: "Lawan kata dari 'hero' adalah...",
            options: ["Friend", "Villain", "Helper", "Partner"],
            correctIndex: 1,
            explanation: "Villain (penjahat) adalah lawan dari hero (pahlawan).",
            difficulty: "easy",
            tags: ["vocabulary", "opposites"]
        },
        {
            id: "kids-20-010",
            question: "⚡ 'Flash can run very ___'",
            options: ["slowly", "fast", "quietly", "carefully"],
            correctIndex: 1,
            explanation: "Flash adalah superhero yang bisa run very fast (berlari sangat cepat).",
            difficulty: "easy",
            tags: ["vocabulary", "superheroes"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-20-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "She can flies like a bird.",
                "She can fly like a bird.",
                "She can flying like a bird.",
                "She can to fly like a bird."
            ],
            correctIndex: 1,
            explanation: "Can + kata kerja bentuk dasar. She can fly = Dia bisa terbang.",
            difficulty: "medium",
            tags: ["grammar", "modals"]
        },
        {
            id: "kids-20-012",
            question: "🦸‍♂️ 'Iron Man wears a special ___ made of metal.'",
            options: ["shirt", "suit", "hat", "shoe"],
            correctIndex: 1,
            explanation: "Suit (baju/rompi) adalah pakaian khusus Iron Man yang terbuat dari logam.",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-013",
            question: "'___ is your favorite superhero?' Pilih kata yang tepat:",
            options: ["What", "Where", "Who", "When"],
            correctIndex: 2,
            explanation: "Who is your favorite superhero? = Siapa superhero favoritmu? Who untuk menanyakan orang.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-20-014",
            question: "🎯 'Hawkeye is very good at shooting with a ___'",
            options: ["gun", "bow and arrow", "sling", "spear"],
            correctIndex: 1,
            explanation: "Hawkeye pakai bow and arrow (busur dan panah).",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-015",
            question: "Terjemahkan: 'Superhero membantu orang-orang.'",
            options: [
                "Superhero help peoples.",
                "Superheroes helps people.",
                "Superheroes help people.",
                "Superhero helps people."
            ],
            correctIndex: 2,
            explanation: "Superheroes (jamak) help people = Superhero-superhero membantu orang-orang.",
            difficulty: "medium",
            tags: ["grammar", "plurals"]
        },
        {
            id: "kids-20-016",
            question: "🛡️ 'Captain America carries a round ___'",
            options: ["ball", "shield", "plate", "mirror"],
            correctIndex: 1,
            explanation: "Shield (tameng) adalah perlengkapan Captain America.",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-017",
            question: "Pilih yang benar: 'The superhero ___ the city from the villain.' (Menyelamatkan)",
            options: ["help", "helps", "save", "saves"],
            correctIndex: 3,
            explanation: "Saves = menyelamatkan (tunggal). The superhero saves the city.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-20-018",
            question: "🔨 'Thor uses his magic ___ to control thunder.'",
            options: ["sword", "hammer", "staff", "shield"],
            correctIndex: 1,
            explanation: "Thor menggunakan magic hammer (palu ajaib) untuk mengendalikan petir.",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-019",
            question: "Apa arti dari 'power'?",
            options: [
                "Kelemahan",
                "Kekuatan/super power",
                "Kecantikan",
                "Kekayaan"
            ],
            correctIndex: 1,
            explanation: "Power artinya kekuatan/super power yang dimiliki superhero.",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-020",
            question: "👁️ '___ can become invisible and create force fields.'",
            options: ["The Hulk", "The Invisible Woman", "Black Widow", "Wolverine"],
            correctIndex: 1,
            explanation: "The Invisible Woman (Wanita Tak Terlihat) bisa menjadi invisible (tak terlihat).",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "Superman don't have any superpowers.",
                "Superman doesn't has any superpowers.",
                "Superman doesn't have any superpowers.",
                "Superman not have any superpowers."
            ],
            correctIndex: 2,
            explanation: "Superman doesn't have = Superman tidak memiliki. Doesn't + have (bentuk dasar).",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-20-022",
            question: "🐈‍⬛ 'Black Panther is the king of the African nation called ___'",
            options: ["Egypt", "Wakanda", "Kenya", "Nigeria"],
            correctIndex: 1,
            explanation: "Black Panther adalah raja dari Wakanda.",
            difficulty: "medium",
            tags: ["vocabulary", "superheroes"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-20-023",
            question: "Susun kata berikut: 'can / fly / He / buildings / over / the'",
            options: [
                "He can fly over the buildings.",
                "He can over fly the buildings.",
                "Can he fly over the buildings.",
                "He fly can over the buildings."
            ],
            correctIndex: 0,
            explanation: "He can fly over the buildings = Dia bisa terbang di atas gedung-gedung.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-20-024",
            question: "🧠 Apa nama professor X-Men yang bisa membaca pikiran?",
            options: ["Magneto", "Professor X", "Wolverine", "Cyclops"],
            correctIndex: 1,
            explanation: "Professor X adalah pemimpin X-Men yang bisa membaca pikiran.",
            difficulty: "hard",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither Batman nor Superman have weakness.",
                "Neither Batman or Superman has weakness.",
                "Neither Batman nor Superman has weakness.",
                "Neither Batman and Superman has weakness."
            ],
            correctIndex: 2,
            explanation: "Neither...nor menggunakan has (tunggal) karena subject terdekat adalah Superman.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-20-026",
            question: "💚 'The Hulk turns green and becomes very ___ when he is angry.'",
            options: ["small", "weak", "strong", "fast"],
            correctIndex: 2,
            explanation: "Hulk menjadi sangat strong (kuat) saat marah.",
            difficulty: "hard",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-027",
            question: "Apa arti dari 'save the day'?",
            options: [
                "Menyelamatkan hari",
                "Menyelesaikan masalah/sukses",
                "Menulis cerita",
                "Membuat rencana"
            ],
            correctIndex: 1,
            explanation: "Save the day artinya berhasil menyelesaikan masalah besar atau menyelamatkan situasi.",
            difficulty: "hard",
            tags: ["vocabulary", "idioms"]
        },
        {
            id: "kids-20-028",
            question: "⚔️ 'Black Widow is an expert at ___ fighting.'",
            options: ["sword", "gun", "hand-to-hand", "magic"],
            correctIndex: 2,
            explanation: "Hand-to-hand fighting (pertarungan tangan kosong) adalah keahlian Black Widow.",
            difficulty: "hard",
            tags: ["vocabulary", "superheroes"]
        },
        {
            id: "kids-20-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "Spiderman and his friends always saves the city.",
                "Spiderman and his friends always save the city.",
                "Spiderman and his friends always saving the city.",
                "Spiderman and his friends always to save the city."
            ],
            correctIndex: 1,
            explanation: "Spiderman and his friends (jamak) pakai save (bukan saves).",
            difficulty: "hard",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-20-030",
            question: "Identifikasi semua error: 'Supermans has many power and can flies faster than a plane.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) Supermans -> Superheroes (atau A superhero), 2) has -> have (Supermans jamak), 3) power -> powers, 4) flies -> fly (can + bentuk dasar).",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
