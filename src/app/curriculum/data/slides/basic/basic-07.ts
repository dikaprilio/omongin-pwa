import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "The S Ending Rule 🐍",
        subtitle: "Basic Meeting 7",
        teacherNote: "Fokuskan pada pengucapan -s/-es di akhir kata dalam bahasa Inggris."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Pengucapan -s/-es ada 3 cara berbeda: /s/, /z/, /ɪz/",
            "Mengucapkan dengan benar membuat bahasa Inggrismu terdengar natural.",
            "Kesalahan pengucapan -s bisa mengubah arti atau terdengar aneh."
        ],
        teacherNote: "Demonstrasikan 3 pengucapan -s secara lisan."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "cat-s (suara z)", right: "cat-s (suara s)" },
            { wrong: "dog-s (suara s)", right: "dog-s (suara z)" },
            { wrong: "box-s (suara s)", right: "box-es (suara iz)" }
        ],
        teacherNote: "Perhatikan suara terakhir kata sebelum -s."
    },
    {
        type: 'formula',
        title: "The Pronunciation Formula",
        formula: "3 Sounds of -s/-es: /s/ | /z/ | /ɪz/",
        content: [
            "/s/ → setelah suara tidak bersuara (p, t, k, f)",
            "/z/ → setelah suara bersuara (b, d, g, v, vocal)",
            "/ɪz/ → setelah sibilan (s, z, sh, ch, x, ge)"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "/s/ sound", meaning: "Suara tidak bersuara (voiceless)", example: "cats, books, stops" },
            { term: "/z/ sound", meaning: "Suara bersuara (voiced)", example: "dogs, birds, plays" },
            { term: "/ɪz/ sound", meaning: "Suara syllable tambahan", example: "boxes, watches, buses" },
            { term: "Voiceless", meaning: "Suara tanpa getaran pita suara", example: "p, t, k, f, th" }
        ]
    },
    {
        type: 'concept',
        title: "The 3 Rules in Detail",
        content: [
            "Rule 1 (/s/): cats, books, laughs, stops, walks",
            "Rule 2 (/z/): dogs, trees, plays, calls, shows, cars",
            "Rule 3 (/ɪz/): boxes, watches, buses, roses, bridges"
        ],
        teacherNote: "Praktikkan setiap rule dengan contoh-contoh."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "book-z", right: "book-s (/s/)" },
            { wrong: "car-s", right: "car-z (/z/)" },
            { wrong: "box-s", right: "box-iz (/ɪz/)" }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "cats → /s/ atau /z/ atau /ɪz/? (/s/)",
            "dogs → /s/ atau /z/ atau /ɪz/? (/z/)",
            "watches → /s/ atau /z/ atau /ɪz/? (/ɪz/)",
            "plays → /s/ atau /z/ atau /ɪz/? (/z/)"
        ],
        teacherNote: "Minta siswa praktik mengucapkan dengan benar."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Siswa mengucapkan 'I have two dog-s' (suaranya /s/)",
            template: "Fix: 'I have two dog-z' (suara /z/ karena g bersuara)"
        },
        teacherNote: "Dengarkan pengucapan siswa dan koreksi jika perlu."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Ucapkan dengan benar:",
            "1. She works hard. (/s/)",
            "2. He plays tennis. (/z/)",
            "3. She watches TV. (/ɪz/)",
            "4. I like books. (/s/)"
        ],
        teacherNote: "Beri waktu untuk praktik berpasangan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ cup-s (ucapkan /z/)",
            "❌ rose-s (ucapkan /s/)",
            "❌ bag-s (ucapkan /s/)",
            "→ Perhatikan suara terakhir kata!"
        ],
        teacherNote: "Identifikasi dan perbaiki pengucapan."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Plural Nouns = Verb Suffix (same rules!)",
        content: [
            "Aturan yang sama berlaku untuk:",
            "- Plural nouns (cats, dogs, boxes)",
            "- Verb he/she/it (plays, watches, stops)",
            "- Possessive 's (John's, Mary's)"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Setelah p, t, k, f", sayThis: "/s/ sound", dontSayThis: "book-z, cat-z" },
            { context: "Setelah vokal/b/d/g/v", sayThis: "/z/ sound", dontSayThis: "dog-s, car-s" },
            { context: "Setelah s/z/sh/ch/x", sayThis: "/ɪz/ sound", dontSayThis: "box-s, watch-s" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat daftar 10 kata jamak dan tentukan pengucapan -s-nya",
            "Rekam diri mengucapkan 5 kalimat dengan -s/-es",
            "Dengarkan podcast/audio native speaker dan perhatikan -s ending"
        ]
    },
    {
        type: 'title',
        title: "Perfect! 🎯",
        subtitle: "Master the 3 Sounds of -s!",
        teacherNote: "Review tiga pengucapan -s secara lisan."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Pengucapan /s/ digunakan setelah huruf:",
        options: ["b, d, g", "p, t, k, f", "s, z, sh", "vocal"],
        correctIndex: 1,
        explanation: "/s/ digunakan setelah suara tidak bersuara: p, t, k, f."
    },
    {
        question: "Bagaimana mengucapkan 'cats'?",
        options: ["/cat-z/", "/cat-s/", "/cat-iz/", "/cats/"],
        correctIndex: 1,
        explanation: "'Cats' = /s/ karena t adalah voiceless."
    },
    {
        question: "Bagaimana mengucapkan 'dogs'?",
        options: ["/dog-s/", "/dog-z/", "/dog-iz/", "/dogs/"],
        correctIndex: 1,
        explanation: "'Dogs' = /z/ karena g adalah voiced."
    },
    {
        question: "Pengucapan /ɪz/ digunakan setelah:",
        options: ["p, t, k", "b, d, g", "s, z, sh, ch, x", "vokal"],
        correctIndex: 2,
        explanation: "/ɪz/ digunakan setelah sibilan: s, z, sh, ch, x, ge."
    },
    {
        question: "Bagaimana mengucapkan 'boxes'?",
        options: ["/box-s/", "/box-z/", "/box-iz/", "/boxes/"],
        correctIndex: 2,
        explanation: "'Boxes' = /ɪz/ karena berakhiran x."
    },
    {
        question: "Bagaimana mengucapkan 'plays'?",
        options: ["/play-s/", "/play-z/", "/play-iz/", "/plays/"],
        correctIndex: 1,
        explanation: "'Plays' = /z/ karena berakhiran vokal (bersuara)."
    },
    {
        question: "Manakah yang diucapkan dengan /s/?",
        options: ["dogs", "books", "trees", "plays"],
        correctIndex: 1,
        explanation: "'Books' diucapkan dengan /s/ karena k adalah voiceless."
    },
    {
        question: "Manakah yang diucapkan dengan /z/?",
        options: ["cats", "stops", "cars", "watches"],
        correctIndex: 2,
        explanation: "'Cars' diucapkan dengan /z/ karena r adalah voiced."
    },
    {
        question: "Manakah yang diucapkan dengan /ɪz/?",
        options: ["cats", "dogs", "watches", "plays"],
        correctIndex: 2,
        explanation: "'Watches' diucapkan dengan /ɪz/ karena berakhiran ch."
    },
    {
        question: "Bagaimana mengucapkan 'stops'?",
        options: ["/stop-s/", "/stop-z/", "/stop-iz/", "/stops/"],
        correctIndex: 0,
        explanation: "'Stops' = /s/ karena p adalah voiceless."
    },
    {
        question: "Bagaimana mengucapkan 'bridges'?",
        options: ["/bridge-s/", "/bridge-z/", "/bridge-iz/", "/bridges/"],
        correctIndex: 2,
        explanation: "'Bridges' = /ɪz/ karena berakhiran ge."
    },
    {
        question: "Huruf mana yang menghasilkan suara /s/?",
        options: ["b", "g", "v", "f"],
        correctIndex: 3,
        explanation: "f adalah voiceless sound → menghasilkan /s/."
    },
    {
        question: "Bagaimana mengucapkan 'laughs'?",
        options: ["/laugh-s/", "/laugh-z/", "/laugh-iz/", "/laughs/"],
        correctIndex: 0,
        explanation: "'Laughs' = /s/ karena gh diucapkan /f/ (voiceless)."
    },
    {
        question: "Aturan pengucapan -s juga berlaku untuk:",
        options: [
            "Hanya plural nouns",
            "Plural nouns dan verb he/she/it",
            "Hanya verb he/she/it",
            "Tidak ada aturan"
        ],
        correctIndex: 1,
        explanation: "Aturan yang sama berlaku untuk plural nouns dan verb he/she/it."
    },
    {
        question: "Bagaimana mengucapkan 'buses'?",
        options: ["/bus-s/", "/bus-z/", "/bus-iz/", "/buses/"],
        correctIndex: 2,
        explanation: "'Buses' = /ɪz/ karena berakhiran s."
    },
    {
        question: "Manakah yang SALAH dalam pengucapan?",
        options: [
            "cats = /s/",
            "dogs = /z/",
            "boxes = /s/",
            "plays = /z/"
        ],
        correctIndex: 2,
        explanation: "'Boxes' harusnya /ɪz/, bukan /s/."
    },
    {
        question: "Bagaimana mengucapkan 'Mrs. Smith's car'?",
        options: ["/smith-s/", "/smith-z/", "/smith-iz/", "/smiths/"],
        correctIndex: 0,
        explanation: "'Smith's' = /s/ karena th di sini voiceless."
    },
    {
        question: "Pengucapan /z/ paling sering muncul karena:",
        options: [
            "Huruf voiceless lebih banyak",
            "Huruf voiced dan vokal lebih banyak",
            "Sibilant sounds lebih banyak",
            "Tidak ada aturan"
        ],
        correctIndex: 1,
        explanation: "Huruf voiced (b, d, g, v) dan vokal lebih banyak dalam bahasa Inggris."
    },
    {
        question: "Bagaimana mengucapkan 'watches'?",
        options: ["/watch-s/", "/watch-z/", "/watch-iz/", "/watches/"],
        correctIndex: 2,
        explanation: "'Watches' = /ɪz/ karena berakhiran ch."
    },
    {
        question: "Suara /ɪz/ menambah:",
        options: [
            "1 suku kata baru",
            "Tidak ada suku kata baru",
            "2 suku kata baru",
            "3 suku kata baru"
        ],
        correctIndex: 0,
        explanation: "/ɪz/ menambah satu suku kata (syllable)."
    }
];
