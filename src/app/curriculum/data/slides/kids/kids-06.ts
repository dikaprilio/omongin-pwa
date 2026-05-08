import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "The Spy (Colors & Shapes) 🕵️",
        subtitle: "Finding Things Around You",
        teacherNote: "Goal: Melatih respon cepat dan observasi lingkungan dalam bahasa Inggris. Mencari benda berwarna dan berbentuk tertentu di rumah!"
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's be spies! 🕵️",
        content: [
            "🎨 What is your favorite color? (Warna favoritmu?)",
            "🔺 Can you name some shapes? (Bisa sebutkan bentuk?)",
            "🏠 Look around your room. What do you see? (Lihat sekeliling. Apa yang kamu lihat?)",
            "⚡ Can you find things quickly? (Bisa cari barang dengan cepat?)",
            "🕵️ Are you ready to be a spy? (Siap jadi detektif?)"
        ],
        teacherNote: "Warming up! Get kids excited about being 'spies'. Make it a mission!"
    },
    // SLIDE 3 - COLORS REVIEW
    {
        type: 'vocabulary',
        title: "Colors 🎨",
        subtitle: "Warna-warna",
        vocabulary: [
            { term: "Red", meaning: "Merah", example: "A red apple." },
            { term: "Blue", meaning: "Biru", example: "The blue sky." },
            { term: "Yellow", meaning: "Kuning", example: "A yellow banana." },
            { term: "Green", meaning: "Hijau", example: "Green grass." },
            { term: "Orange", meaning: "Oranye", example: "An orange orange!" },
            { term: "Purple", meaning: "Ungu", example: "Purple grapes." },
            { term: "Pink", meaning: "Pink", example: "A pink flower." },
            { term: "Black", meaning: "Hitam", example: "Black hair." },
            { term: "White", meaning: "Putih", example: "White clouds." },
            { term: "Brown", meaning: "Cokelat", example: "Brown chocolate." },
            { term: "Gray / Grey", meaning: "Abu-abu", example: "A gray elephant." },
            { term: "Rainbow", meaning: "Pelangi / Warna-warni", example: "Rainbow colors!" }
        ],
        teacherNote: "Review colors. Kids should know these already - make it fast!"
    },
    // SLIDE 4 - SHAPES
    {
        type: 'vocabulary',
        title: "Shapes 🔺",
        subtitle: "Bentuk-bentuk",
        vocabulary: [
            { term: "Circle", meaning: "Lingkaran", example: "The sun is a circle." },
            { term: "Square", meaning: "Persegi", example: "This box is a square." },
            { term: "Triangle", meaning: "Segitiga", example: "A pizza slice is a triangle." },
            { term: "Rectangle", meaning: "Persegi panjang", example: "The door is a rectangle." },
            { term: "Star", meaning: "Bintang", example: "A star in the sky." },
            { term: "Heart", meaning: "Hati / Love", example: "I love you! (heart shape)" },
            { term: "Oval", meaning: "Oval", example: "An egg is oval." },
            { term: "Diamond", meaning: "Belah ketupat / Wajik", example: "A diamond shape." }
        ],
        teacherNote: "Kids often know these from math class. Connect English to what they know!"
    },
    // SLIDE 5 - I SPY GAME RULES
    {
        type: 'concept',
        title: "How to Play 'I Spy' 🕵️",
        subtitle: "Cara bermain I Spy",
        content: [
            "👁️ Guru bilang: 'I spy with my little eye...'",
            "🎨 Sebutkan WARNA: '...something RED!'",
            "🔍 Anak mencari benda berwarna merah di kamarnya",
            "🏃 Anak menunjukkan benda itu ke kamera",
            "🎉 Yang paling cepat mendapat poin!"
        ],
        teacherNote: "Explain the rules. This game requires kids to move around!"
    },
    // SLIDE 6 - THE SPY COMMANDS
    {
        type: 'formula',
        title: "Spy Commands",
        subtitle: "Perintah detektif",
        formula: "Find something [color/shape]! / I spy...",
        vocabulary: [
            { term: "Find something red!", meaning: "Cari sesuatu yang merah!", example: "Find something red!" },
            { term: "Find something round!", meaning: "Cari sesuatu yang bulat!", example: "Find something round!" },
            { term: "I spy with my little eye...", meaning: "Aku melihat dengan mata kecilku...", example: "I spy with my little eye... something blue!" },
            { term: "What color is it?", meaning: "Warnanya apa?", example: "What color is your book?" },
            { term: "What shape is it?", meaning: "Bentuknya apa?", example: "What shape is the clock?" }
        ],
        teacherNote: "Practice the key phrases before starting the game!"
    },
    // SLIDE 7 - DESCRIBING OBJECTS
    {
        type: 'formula',
        title: "Describing What You Found",
        subtitle: "Mendeskripsikan benda yang ditemukan",
        formula: "It's [color] and [shape]. / It's a [color] [object].",
        vocabulary: [
            { term: "It's red.", meaning: "Ini merah.", example: "My book is red." },
            { term: "It's round.", meaning: "Ini bulat.", example: "My ball is round." },
            { term: "It's a red ball.", meaning: "Ini bola merah.", example: "It's a red ball." },
            { term: "It's blue and square.", meaning: "Ini biru dan persegi.", example: "My box is blue and square." },
            { term: "It has [color] and [color].", meaning: "Ini punya warna... dan...", example: "It has red and yellow." }
        ],
        teacherNote: "After finding something, kids should describe it! Full sentences!"
    },
    // SLIDE 8 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Describing Correctly",
        subtitle: "Mendeskripsikan dengan benar",
        comparison: [
            { wrong: "Red.", right: "It's red. / My book is red." },
            { wrong: "Circle.", right: "It's a circle. / My plate is a circle." },
            { wrong: "Red ball.", right: "It's a red ball." },
            { wrong: "Blue.", right: "I found something blue!" },
            { wrong: "[Just show, no words]", right: "I found a yellow pencil!" }
        ],
        teacherNote: "The Full Sentence Rule applies even in fast games!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE
    {
        type: 'case-study',
        title: "Playing I Spy 🕵️",
        subtitle: "Contoh permainan I Spy",
        caseStudy: {
            scenario: "Bermain I Spy di kelas virtual.",
            template: "Teacher: Okay spies! I spy with my little eye...\nStudents: What color?\nTeacher: Something RED!\nStudent A: [Runs and grabs a red book] I found something red!\nTeacher: Great! What is it?\nStudent A: It's a red book!\nTeacher: Excellent! Now you try, Student B!\nStudent B: I spy with my little eye... something BLUE!"
        },
        teacherNote: "DEMO: Actually play a round! Get kids moving and excited!"
    },
    // SLIDE 10 - THE COLOR/SHAPE GAME
    {
        type: 'case-study',
        title: "Color & Shape Challenge 🎯",
        subtitle: "Tantangan warna dan bentuk",
        caseStudy: {
            scenario: "Mencari benda dengan kombinasi warna dan bentuk.",
            template: "Teacher: Find something YELLOW and ROUND!\nStudent A: [Finds a yellow ball] I found it!\nTeacher: What is it?\nStudent A: It's a yellow ball!\nTeacher: Perfect! Now find something BLUE and SQUARE!\nStudent B: [Finds a blue box] I found something blue and square!\nTeacher: What shape is it exactly?\nStudent B: It's a blue rectangle!"
        },
        teacherNote: "Make it harder by asking for color + shape combinations!"
    },
    // SLIDE 11 - ROLEPLAY 1: THE SPY MISSION
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Spy Mission 🕵️",
        subtitle: "A = Spy Leader | B = Spy Agent",
        caseStudy: {
            scenario: "Pemimpin memberi misi mencari benda.",
            template: "A: Agent, your mission is to find something _____.\nB: Yes, leader! [Finds item] I found it!\nA: Report! What did you find?\nB: I found _____. It's _____ and _____.\nA: Mission complete! Good job!"
        },
        teacherNote: "Make it dramatic! Kids love spy roleplay!"
    },
    // SLIDE 12 - ROLEPLAY 2: SHAPE DETECTIVE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Shape Detective 🔍",
        subtitle: "A = Detective | B = Witness",
        caseStudy: {
            scenario: "Detektif mencari benda berbentuk tertentu.",
            template: "A: I'm looking for something round. Do you see it?\nB: Yes! Is it the _____?\nA: What color is it?\nB: It's _____.\nA: That's it! You found the round object!"
        },
        teacherNote: "Alternative game format - guessing based on description."
    },
    // SLIDE 13 - SPEED ROUND
    {
        type: 'micro-drill',
        title: "Speed Spy Challenge! ⚡",
        subtitle: "Find it FAST!",
        mission: [
            "1. Find something RED! 🟥",
            "2. Find something BLUE! 🟦",
            "3. Find something ROUND! ⭕",
            "4. Find something SQUARE! ⬜",
            "5. Find something YELLOW and ROUND! 🟡"
        ],
        teacherNote: "Rapid fire! Go fast and energetic! Award points for speed!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Mencari warna", sayThis: "Find something red!", dontSayThis: "Find red." },
            { context: "Mendeskripsikan", sayThis: "It's a red ball.", dontSayThis: "Red ball." },
            { context: "Bentuk", sayThis: "It's a circle.", dontSayThis: "Circle." },
            { context: "Kombinasi", sayThis: "It's blue and square.", dontSayThis: "Blue square." },
            { context: "Game phrase", sayThis: "I spy with my little eye...", dontSayThis: "Find me..." }
        ],
        teacherNote: "Review color and shape vocabulary. Full sentences always!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Room Color Hunt: Tulis 10 barang di kamar dengan warnanya dalam Inggris!",
            "2. Shape Search: Cari 5 bentuk berbeda di rumah, foto dan label dalam Inggris!",
            "3. Teach I Spy: Ajari keluarga bermain I Spy dalam Inggris!"
        ],
        teacherNote: "Connect learning to environment. Colors and shapes are everywhere!"
    }
];

export const quiz: QuizQuestion[] = [
    // COLORS
    {
        question: "What color is the sky?",
        options: ["Red", "Blue", "Green"],
        correctIndex: 1,
        explanation: "The sky is blue!"
    },
    {
        question: "What color is grass?",
        options: ["Green", "Yellow", "Purple"],
        correctIndex: 0,
        explanation: "Grass is green!"
    },
    {
        question: "What color is a banana?",
        options: ["Red", "Blue", "Yellow"],
        correctIndex: 2,
        explanation: "Bananas are yellow!"
    },
    {
        question: "What color is an apple (usually)?",
        options: ["Red", "Black", "White"],
        correctIndex: 0,
        explanation: "Apples are usually red (or green)!"
    },
    {
        question: "What color is chocolate?",
        options: ["White", "Brown", "Pink"],
        correctIndex: 1,
        explanation: "Chocolate is brown!"
    },
    // SHAPES
    {
        question: "What shape is the sun?",
        options: ["Square", "Circle", "Triangle"],
        correctIndex: 1,
        explanation: "The sun is a circle!"
    },
    {
        question: "What shape is a pizza slice?",
        options: ["Circle", "Triangle", "Square"],
        correctIndex: 1,
        explanation: "A pizza slice is a triangle!"
    },
    {
        question: "What shape is a door?",
        options: ["Circle", "Triangle", "Rectangle"],
        correctIndex: 2,
        explanation: "A door is usually a rectangle!"
    },
    {
        question: "What shape has 4 equal sides?",
        options: ["Circle", "Square", "Triangle"],
        correctIndex: 1,
        explanation: "A square has 4 equal sides!"
    },
    // DESCRIBING
    {
        question: "Complete: _____ a red ball.",
        options: ["It's", "It", "Is"],
        correctIndex: 0,
        explanation: "'It's a red ball' (It is = It's)"
    },
    {
        question: "Complete: It _____ blue.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'It is blue' - use 'is' for it!"
    },
    {
        question: "What do you say to play the spy game?",
        options: [
            "I see something...",
            "I spy with my little eye...",
            "I look at..."
        ],
        correctIndex: 1,
        explanation: "'I spy with my little eye...' is the classic game phrase!"
    },
    // COLOR + SHAPE
    {
        question: "A ball is usually _____ and _____.",
        options: [
            "red and square",
            "round and colorful",
            "blue and triangle"
        ],
        correctIndex: 1,
        explanation: "Balls are usually round (shape) and can be any color!"
    },
    {
        question: "Complete: My book is _____ (color) and _____ (shape).",
        options: [
            "blue / rectangle",
            "round / circle",
            "tall / high"
        ],
        correctIndex: 0,
        explanation: "Books are often blue (color) and rectangle (shape)!"
    },
    // FULL SENTENCES
    {
        question: "Which is a complete sentence?",
        options: ["Red ball.", "It's a red ball.", "Ball red."],
        correctIndex: 1,
        explanation: "'It's a red ball' is a complete sentence!"
    },
    {
        question: "Which is CORRECT?",
        options: [
            "I found something red!",
            "I found red!",
            "Found red something!"
        ],
        correctIndex: 0,
        explanation: "'I found something red!' is the correct sentence structure!"
    },
    {
        question: "What shape is a star?",
        options: ["Circle", "Star", "Square"],
        correctIndex: 1,
        explanation: "A star shape has points like a star in the sky!"
    },
    {
        question: "What shape is an egg?",
        options: ["Circle", "Oval", "Square"],
        correctIndex: 1,
        explanation: "An egg is oval-shaped!"
    }
];
