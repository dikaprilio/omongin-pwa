import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "My Room Tour 🏠",
        subtitle: "Learning Prepositions: In, On, Under",
        teacherNote: "Goal: Stop bingung bedanya 'On the table' dan 'In the box'. Anak bisa menjelaskan lokasi barang dengan preposisi yang benar."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about your room! 🏠",
        content: [
            "🛏️ Do you have your own room? (Punya kamar sendiri?)",
            "🧸 What is your favorite thing in your room? (Barang favorit di kamar?)",
            "📚 Where do you keep your books? (Di mana simpan buku?)",
            "🎮 Where is your toy box? (Di mana kotak mainan?)",
            "🖼️ Can you describe your room to me? (Bisa deskripsikan kamarmu?)"
        ],
        teacherNote: "Warming up! Get kids excited to show their space. Props Hunt coming!"
    },
    // SLIDE 3 - ROOM VOCABULARY
    {
        type: 'vocabulary',
        title: "Things in My Room 🛏️",
        subtitle: "Barang-barang di kamar",
        vocabulary: [
            { term: "Bed", meaning: "Tempat tidur", example: "I sleep in my bed." },
            { term: "Pillow", meaning: "Bantal", example: "My pillow is soft." },
            { term: "Blanket", meaning: "Selimut", example: "I have a warm blanket." },
            { term: "Table / Desk", meaning: "Meja", example: "I study at my desk." },
            { term: "Chair", meaning: "Kursi", example: "I sit on my chair." },
            { term: "Wardrobe / Closet", meaning: "Lemari baju", example: "My clothes are in the wardrobe." },
            { term: "Bookshelf", meaning: "Rak buku", example: "My books are on the bookshelf." },
            { term: "Toy box", meaning: "Kotak mainan", example: "My toys are in the toy box." },
            { term: "Lamp", meaning: "Lampu", example: "The lamp is on my desk." },
            { term: "Window", meaning: "Jendela", example: "Look out the window!" },
            { term: "Door", meaning: "Pintu", example: "Close the door, please." },
            { term: "Mirror", meaning: "Cermin", example: "I look in the mirror." }
        ],
        teacherNote: "Use this as a checklist! Kids can point to these items in their room."
    },
    // SLIDE 4 - PREPOSITIONS
    {
        type: 'vocabulary',
        title: "Prepositions (Kata Depan) 📍",
        subtitle: "Kata yang menunjukkan posisi",
        vocabulary: [
            { term: "In", meaning: "Di dalam", example: "The book is in the bag." },
            { term: "On", meaning: "Di atas (menyentuh)", example: "The book is on the table." },
            { term: "Under", meaning: "Di bawah", example: "The cat is under the bed." },
            { term: "Behind", meaning: "Di belakang", example: "The ball is behind the door." },
            { term: "In front of", meaning: "Di depan", example: "The chair is in front of the desk." },
            { term: "Next to / Beside", meaning: "Di samping", example: "The lamp is next to the bed." },
            { term: "Between", meaning: "Di antara", example: "The phone is between the books." },
            { term: "Above", meaning: "Di atas (tidak menyentuh)", example: "The picture is above the bed." }
        ],
        teacherNote: "The key words! Focus on In, On, Under first for younger kids."
    },
    // SLIDE 5 - FORMULA: DESCRIBING LOCATION
    {
        type: 'formula',
        title: "Where Is It?",
        subtitle: "Di mana letaknya?",
        formula: "[Object] + is + [preposition] + [place]",
        vocabulary: [
            { term: "The book is on the table.", meaning: "Bukunya di atas meja.", example: "The book is on the table." },
            { term: "The toy is in the box.", meaning: "Mainannya di dalam kotak.", example: "The toy is in the box." },
            { term: "The cat is under the bed.", meaning: "Kucingnya di bawah tempat tidur.", example: "The cat is under the bed." },
            { term: "The lamp is next to the bed.", meaning: "Lampunya di samping tempat tidur.", example: "The lamp is next to the bed." },
            { term: "My shoes are under the chair.", meaning: "Sepatuku di bawah kursi.", example: "My shoes are under the chair." }
        ],
        teacherNote: "Remember: singular = 'is', plural = 'are' (shoes are, books are)"
    },
    // SLIDE 6 - ASKING QUESTIONS
    {
        type: 'formula',
        title: "Asking Where Things Are",
        subtitle: "Bertanya di mana barang berada",
        formula: "Where is/are...?",
        vocabulary: [
            { term: "Where is my book?", meaning: "Di mana bukuku?", example: "Where is my book? It's on the table." },
            { term: "Where are my toys?", meaning: "Di mana mainanku?", example: "Where are my toys? They're in the box." },
            { term: "Is it on the table?", meaning: "Apakah di atas meja?", example: "Yes, it is! / No, it isn't." },
            { term: "Are they under the bed?", meaning: "Apakah di bawah tempat tidur?", example: "Yes, they are! / No, they aren't." }
        ],
        teacherNote: "'Where is' for one thing, 'Where are' for many things."
    },
    // SLIDE 7 - COMPARISON: CONFUSING PAIRS
    {
        type: 'comparison',
        title: "In vs On vs Under",
        subtitle: "Perbedaan preposisi utama",
        comparison: [
            { wrong: "The book is on the bag.", right: "The book is in the bag. (di dalam)" },
            { wrong: "The book is in the table.", right: "The book is on the table. (di atas)" },
            { wrong: "The book is on the floor under the table.", right: "The book is under the table. (di bawah)" },
            { wrong: "The cat is in the bed (on top).", right: "The cat is on the bed." }
        ],
        teacherNote: "The most common confusion: In = inside, On = touching surface, Under = below"
    },
    // SLIDE 8 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Looking for Something 🔍",
        subtitle: "Mencari barang yang hilang",
        caseStudy: {
            scenario: "Mencari buku yang tidak ketemu.",
            template: "A: I can't find my book! Where is it?\nB: Is it on your desk?\nA: No, it isn't.\nB: Is it in your bag?\nA: No... Oh! It's under my bed!\nB: There it is! Put it on your desk so you don't lose it.\nA: Good idea! Thank you!"
        },
        teacherNote: "DEMO: Practice the 'Where is...?' / 'Is it...?' pattern. Very practical!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: My Room Tour 🏠",
        subtitle: "Describing your room",
        caseStudy: {
            scenario: "Mendeskripsikan isi kamar.",
            template: "A: Can you tell me about your room?\nB: Sure! My bed is next to the window.\nA: Where is your desk?\nB: My desk is in front of my bed. My chair is next to the desk.\nA: Where do you keep your toys?\nB: My toys are in the toy box under my bed.\nA: Your room sounds nice and organized!"
        },
        teacherNote: "Show how to chain prepositions together to describe a space."
    },
    // SLIDE 10 - ROLEPLAY 1: FIND THE TOY
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Find the Toy 🧸",
        subtitle: "A = Helper | B = You",
        caseStudy: {
            scenario: "Mencari mainan yang hilang.",
            template: "B: I can't find my _____. Where is it?\nA: Is it on the _____?\nB: No, it isn't.\nA: Is it in the _____?\nB: No...\nA: Is it under the _____?\nB: Yes! It is! Thank you!"
        },
        teacherNote: "GILIRAN MURID: Practice the question/answer pattern with real objects!"
    },
    // SLIDE 11 - ROLEPLAY 2: ROOM DESCRIPTION
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: My Room 🏠",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Mendeskripsikan kamar sendiri.",
            template: "A: What's in your room?\nB: I have a bed, a desk, and a chair.\nA: Where is your bed?\nB: My bed is _____ the _____.\nA: Where do you put your books?\nB: My books are _____ the _____.\nA: Where is your favorite toy?\nB: It's _____ the _____."
        },
        teacherNote: "Kids describe their real room! Encourage them to look around."
    },
    // SLIDE 12 - PROPS HUNT GAME
    {
        type: 'micro-drill',
        title: "Props Hunt Challenge! 🎯",
        subtitle: "Find these in your room!",
        mission: [
            "1. Find something UNDER your bed!",
            "2. Find something ON your table!",
            "3. Find something IN your bag or box!",
            "4. Find something NEXT TO your bed!",
            "5. Find something BEHIND the door!"
        ],
        teacherNote: "ACTIVE GAME! Kids run (safely) to find items. They love this!"
    },
    // SLIDE 13 - PREPOSITION MEMORY GAME
    {
        type: 'micro-drill',
        title: "Where Is The Ball? 🎾",
        subtitle: "Answer quickly!",
        mission: [
            "1. The ball is IN the box. (Show: inside)",
            "2. The ball is ON the table. (Show: on top)",
            "3. The ball is UNDER the chair. (Show: below)",
            "4. The ball is NEXT TO the lamp. (Show: beside)",
            "5. The ball is BEHIND the door. (Show: at the back)"
        ],
        teacherNote: "TPR: Kids use hand signals to show positions. Visual learning!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Di dalam", sayThis: "The toy is in the box.", dontSayThis: "The toy is on the box." },
            { context: "Di atas", sayThis: "The book is on the table.", dontSayThis: "The book is in the table." },
            { context: "Di bawah", sayThis: "The cat is under the bed.", dontSayThis: "The cat is in the bed." },
            { context: "Bertanya (tunggal)", sayThis: "Where is my book?", dontSayThis: "Where are my book?" },
            { context: "Bertanya (jamak)", sayThis: "Where are my toys?", dontSayThis: "Where is my toys?" }
        ],
        teacherNote: "Review In/On/Under - the most important prepositions for kids!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Room Map: Gambar kamar kamu dan label lokasi barang dengan preposisi!",
            "2. Treasure Hunt: Sembunyikan 3 barang, deskripsikan lokasinya dalam Inggris!",
            "3. Clean Up Game: Rapikan kamar sickeramanya, sebutkan lokasi barang dalam Inggris!"
        ],
        teacherNote: "Connect learning to real life - their own room!"
    }
];

export const quiz: QuizQuestion[] = [
    // ROOM VOCABULARY
    {
        question: "Where do you sleep?",
        options: ["Table", "Bed", "Chair"],
        correctIndex: 1,
        explanation: "You sleep in a bed!"
    },
    {
        question: "Where do you put your clothes?",
        options: ["Bookshelf", "Wardrobe", "Toy box"],
        correctIndex: 1,
        explanation: "Clothes go in the wardrobe or closet!"
    },
    {
        question: "Where do you study or do homework?",
        options: ["Bed", "Desk", "Wardrobe"],
        correctIndex: 1,
        explanation: "You study at a desk or table!"
    },
    {
        question: "What do you use to see yourself?",
        options: ["Window", "Mirror", "Door"],
        correctIndex: 1,
        explanation: "You look in the mirror to see yourself!"
    },
    // PREPOSITIONS
    {
        question: "If something is IN the box, it is...",
        options: ["Di atas", "Di dalam", "Di bawah"],
        correctIndex: 1,
        explanation: "'In' means di dalam!"
    },
    {
        question: "If something is ON the table, it is...",
        options: ["Di atas", "Di dalam", "Di bawah"],
        correctIndex: 0,
        explanation: "'On' means di atas (touching the surface)!"
    },
    {
        question: "If something is UNDER the bed, it is...",
        options: ["Di atas", "Di dalam", "Di bawah"],
        correctIndex: 2,
        explanation: "'Under' means di bawah!"
    },
    {
        question: "If something is NEXT TO the lamp, it is...",
        options: ["Di belakang", "Di depan", "Di samping"],
        correctIndex: 2,
        explanation: "'Next to' means di samping!"
    },
    // CORRECT USAGE
    {
        question: "The toy is _____ the box.",
        options: ["on", "in", "under"],
        correctIndex: 1,
        explanation: "Toys go IN the box!"
    },
    {
        question: "The book is _____ the table.",
        options: ["in", "on", "under"],
        correctIndex: 1,
        explanation: "Books go ON the table!"
    },
    {
        question: "The cat is _____ the bed.",
        options: ["in", "on", "under"],
        correctIndex: 2,
        explanation: "Cats often hide UNDER the bed!"
    },
    // GRAMMAR
    {
        question: "Complete: The book _____ on the table.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "One book = 'is' (singular)"
    },
    {
        question: "Complete: The toys _____ in the box.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "Many toys = 'are' (plural)"
    },
    // QUESTIONS
    {
        question: "How do you ask about one thing's location?",
        options: ["Where are...", "Where is...", "Where..."],
        correctIndex: 1,
        explanation: "'Where is my book?' for one thing (singular)"
    },
    {
        question: "How do you ask about many things' location?",
        options: ["Where are...", "Where is...", "Where..."],
        correctIndex: 0,
        explanation: "'Where are my toys?' for many things (plural)"
    },
    // COMPLETE SENTENCES
    {
        question: "Which is CORRECT?",
        options: [
            "The pillow is on the bed.",
            "The pillow is in the bed.",
            "The pillow is under the bed."
        ],
        correctIndex: 0,
        explanation: "Pillows go ON the bed!"
    },
    {
        question: "Which is CORRECT?",
        options: [
            "My shoes is under the bed.",
            "My shoes are under the bed.",
            "My shoes be under the bed."
        ],
        correctIndex: 1,
        explanation: "'Shoes' is plural, so use 'are'!"
    }
];
