import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Plural & Articles 🔢",
        subtitle: "Basic Meeting 5",
        teacherNote: "Perkenalkan aturan jamak dan penggunaan a/an/the yang sering membingungkan siswa."
    },
    {
        type: 'concept',
        title: "Why This Matters?",
        content: [
            "Plural dan articles adalah dasar grammar yang wajib dikuasai.",
            "Banyak siswa masih bingung kapan pakai a, an, atau the.",
            "Aturan jamak dalam bahasa Inggris tidak serumit yang dibayangkan."
        ],
        teacherNote: "Beri contoh kesalahan umum: 'I have two book' atau 'She is a honest person'."
    },
    {
        type: 'comparison',
        title: "The Trap vs The Fix",
        comparison: [
            { wrong: "I have two book.", right: "I have two books." },
            { wrong: "She is a honest person.", right: "She is an honest person." },
            { wrong: "The students is happy.", right: "The students are happy." }
        ],
        teacherNote: "Tekankan perubahan verb untuk plural: is → are"
    },
    {
        type: 'formula',
        title: "The Grammar Formula",
        formula: "Singular: a/an/the + noun | Plural: noun + s/es",
        content: [
            "a + consonant sound (a book, a university)",
            "an + vowel sound (an apple, an hour)",
            "the + spesifik/kedua kali disebut"
        ]
    },
    {
        type: 'vocabulary',
        title: "Key Terms",
        vocabulary: [
            { term: "Singular", meaning: "Tunggal (satu)", example: "a cat, the book" },
            { term: "Plural", meaning: "Jamak (lebih dari satu)", example: "cats, books" },
            { term: "Indefinite Article", meaning: "a/an (tidak spesifik)", example: "I see a dog." },
            { term: "Definite Article", meaning: "the (spesifik)", example: "The dog is brown." }
        ]
    },
    {
        type: 'concept',
        title: "Plural Rules",
        content: [
            "General rule: tambah -s (cat → cats, book → books)",
            "-s, -ss, -sh, -ch, -x, -z, -o → tambah -es (box → boxes)",
            "Konsonan + y → ganti -ies (baby → babies)",
            "Vokal + y → tambah -s (boy → boys)",
            "Irregular: man → men, woman → women, child → children"
        ],
        teacherNote: "Buat daftar irregular plurals di papan tulis."
    },
    {
        type: 'comparison',
        title: "More Examples",
        comparison: [
            { wrong: "I buy a apple.", right: "I buy an apple." },
            { wrong: "The teachers is nice.", right: "The teachers are nice." },
            { wrong: "She have a car.", right: "She has a car." }
        ]
    },
    {
        type: 'micro-drill',
        title: "Quick Pattern Practice",
        content: [
            "one book → two ___ (books)",
            "a university → ___ honest person (an)",
            "the student → the ___ (students)",
            "child → ___ (children)"
        ],
        teacherNote: "Drill cepat 3 menit. Fokus pada aturan jamak."
    },
    {
        type: 'case-study',
        title: "Real Conversation",
        caseStudy: {
            scenario: "Temanmu bilang: 'I see a elephant at the zoo.'",
            template: "Fix: 'I see an elephant at the zoo.' (elephant diawali vokal sound)"
        },
        teacherNote: "Tekankan bahwa an dipakai berdasarkan suara, bukan huruf."
    },
    {
        type: 'roleplay',
        title: "Student Practice",
        content: [
            "Lengkapi dengan a/an/the:",
            "1. I have ___ idea.",
            "2. ___ sun is hot.",
            "3. She is ___ doctor.",
            "4. ___ book on the table is mine."
        ],
        teacherNote: "Beri waktu 3 menit untuk mengerjakan."
    },
    {
        type: 'micro-drill',
        title: "Error Correction Drill",
        content: [
            "❌ I have two dog.",
            "❌ She is a honest woman.",
            "❌ The children is playing.",
            "→ Perhatikan plural dan article!"
        ],
        teacherNote: "Identifikasi kesalahan secara cepat."
    },
    {
        type: 'formula',
        title: "Advanced Application",
        formula: "Zero Article: No article untuk general plural",
        content: [
            "Cats are cute. (kucing secara umum)",
            "The cats are cute. (kucing spesifik yang sudah disebut)",
            "I love music. (tidak pakai article untuk uncountable general)"
        ]
    },
    {
        type: 'recap',
        title: "Summary Table",
        recap: [
            { context: "Satu benda (consonant)", sayThis: "a + noun", dontSayThis: "an book" },
            { context: "Satu benda (vowel)", sayThis: "an + noun", dontSayThis: "a apple" },
            { context: "Benda spesifik", sayThis: "the + noun", dontSayThis: "I want book (the)" },
            { context: "Jamak umum", sayThis: "Plural tanpa the", dontSayThis: "The dogs are cute (general)" }
        ]
    },
    {
        type: 'mission',
        title: "Homework Assignment",
        mission: [
            "Buat 10 kata benda jamak (5 regular, 5 irregular)",
            "Buat 10 kalimat dengan a/an/the",
            "Tulis 5 kalimat plural dengan verb yang benar"
        ]
    },
    {
        type: 'title',
        title: "Fantastic! 🎉",
        subtitle: "Plural & Articles mastered!",
        teacherNote: "Review irregular plurals dan penggunaan the sebelum melanjutkan."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Plural dari 'box' adalah:",
        options: ["boxs", "boxes", "boxies", "boxen"],
        correctIndex: 1,
        explanation: "Kata berakhiran x ditambah -es: boxes."
    },
    {
        question: "Pilih yang BENAR: 'I have ___ umbrella.'",
        options: ["a", "an", "the", "-"],
        correctIndex: 1,
        explanation: "'Umbrella' diawali vokal sound → pakai 'an'."
    },
    {
        question: "Plural dari 'child' adalah:",
        options: ["childs", "children", "childes", "childies"],
        correctIndex: 1,
        explanation: "'Child' adalah irregular plural: children."
    },
    {
        question: "Pilih yang BENAR: '___ book on the table is mine.'",
        options: ["A", "An", "The", "-"],
        correctIndex: 2,
        explanation: "Pakai 'the' untuk benda spesifik yang sudah disebut/diketahui."
    },
    {
        question: "Plural dari 'baby' adalah:",
        options: ["babys", "babies", "babyes", "babies"],
        correctIndex: 1,
        explanation: "Konsonan + y → ganti dengan -ies: babies."
    },
    {
        question: "Pilih yang BENAR: 'She is ___ university student.'",
        options: ["a", "an", "the", "-"],
        correctIndex: 0,
        explanation: "'University' diawali consonant sound /j/ → pakai 'a'."
    },
    {
        question: "Manakah yang SALAH?",
        options: [
            "The cats are sleeping.",
            "I have an apple.",
            "She buy a book.",
            "The children are playing."
        ],
        correctIndex: 2,
        explanation: "'She buy' salah. Seharusnya: 'She buys' (he/she/it + s)."
    },
    {
        question: "Plural dari 'woman' adalah:",
        options: ["womans", "women", "womens", "woman"],
        correctIndex: 1,
        explanation: "'Woman' adalah irregular plural: women."
    },
    {
        question: "Pilih yang BENAR: '___ honest man came yesterday.'",
        options: ["A", "An", "The", "-"],
        correctIndex: 1,
        explanation: "'Honest' diawali vokal sound /ɒ/ → pakai 'an'."
    },
    {
        question: "Plural dari 'tooth' adalah:",
        options: ["tooths", "teeth", "toothes", "toothies"],
        correctIndex: 1,
        explanation: "'Tooth' adalah irregular plural: teeth."
    },
    {
        question: "Kapan kita pakai 'the'?",
        options: [
            "Untuk benda umum",
            "Untuk benda spesifik/sudah disebut",
            "Untuk jamak umum",
            "Untuk kata benda tak terhitung"
        ],
        correctIndex: 1,
        explanation: "'The' digunakan untuk benda yang spesifik atau sudah disebut sebelumnya."
    },
    {
        question: "Pilih yang BENAR: 'I like ___ dogs.' (anjing secara umum)",
        options: ["a", "an", "the", "-"],
        correctIndex: 3,
        explanation: "Untuk jamak umum, tidak pakai article."
    },
    {
        question: "Plural dari 'mouse' adalah:",
        options: ["mouses", "mice", "mousees", "mousies"],
        correctIndex: 1,
        explanation: "'Mouse' adalah irregular plural: mice."
    },
    {
        question: "Perbaiki: 'The students is in the classroom.'",
        options: [
            "The students are in the classroom.",
            "The student is in the classroom.",
            "A students are in the classroom.",
            "The students be in the classroom."
        ],
        correctIndex: 0,
        explanation: "Subject jamak (students) pakai verb 'are'."
    },
    {
        question: "Plural dari 'foot' adalah:",
        options: ["foots", "feet", "footes", "footies"],
        correctIndex: 1,
        explanation: "'Foot' adalah irregular plural: feet."
    },
    {
        question: "Pilih yang BENAR: '___ apples are red.' (apel spesifik di meja)",
        options: ["A", "An", "The", "-"],
        correctIndex: 2,
        explanation: "Pakai 'the' untuk benda spesifik."
    },
    {
        question: "Plural dari 'fish' adalah:",
        options: ["fishes", "fish", "fishs", "fishies"],
        correctIndex: 1,
        explanation: "'Fish' tetap fish untuk plural (bisa juga fishes untuk jenis berbeda)."
    },
    {
        question: "Pilih yang BENAR: 'I want to buy ___ new car.'",
        options: ["a", "an", "the", "-"],
        correctIndex: 0,
        explanation: "'New' diawali consonant sound → pakai 'a'."
    },
    {
        question: "Plural dari 'person' adalah:",
        options: ["persons", "people", "peoples", "persones"],
        correctIndex: 1,
        explanation: "'Person' adalah irregular plural: people."
    },
    {
        question: "Pilih yang BENAR:",
        options: [
            "I have a hour.",
            "She is an doctor.",
            "The books are interesting.",
            "A children are playing."
        ],
        correctIndex: 2,
        explanation: "'The books are interesting' adalah kalimat yang benar."
    }
];
