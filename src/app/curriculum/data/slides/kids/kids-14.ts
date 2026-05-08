import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Clothes & Costumes 👕",
        subtitle: "Describing What We Wear",
        teacherNote: "Goal: Anak bisa mendeskripsikan pakaian yang dipakai orang lain menggunakan 'wear' dan kata sifat warna/ukuran dengan benar."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's look at our clothes! 👔",
        content: [
            "👕 What are you wearing today? (Kamu pakai apa hari ini?)",
            "🎨 What is your favorite color for clothes? (Warna baju favorit?)",
            "👗 Do you like wearing dresses or pants? (Suka pakai dress atau celana?)",
            "👟 What shoes are you wearing? (Sepatu apa yang kamu pakai?)",
            "🎭 Have you ever worn a costume? (Pernah pakai kostum?)"
        ],
        teacherNote: "Warming up! Ask kids to look at what they're wearing. You can even ask them to describe your clothes first as an example."
    },
    // SLIDE 3 - VOCABULARY: CLOTHES
    {
        type: 'vocabulary',
        title: "Types of Clothes 👚",
        subtitle: "Jenis-jenis pakaian",
        vocabulary: [
            { term: "Shirt", meaning: "Kemeja / Kaos", example: "I wear a blue shirt." },
            { term: "T-shirt", meaning: "Kaos", example: "I have many T-shirts." },
            { term: "Pants / Trousers", meaning: "Celana panjang", example: "I wear pants to school." },
            { term: "Shorts", meaning: "Celana pendek", example: "I wear shorts when it's hot." },
            { term: "Skirt", meaning: "Rok", example: "She wears a pretty skirt." },
            { term: "Dress", meaning: "Gaun / Dress", example: "She looks beautiful in that dress." },
            { term: "Jacket", meaning: "Jaket", example: "I wear a jacket when it's cold." },
            { term: "Sweater", meaning: "Sweater", example: "My sweater is warm." },
            { term: "Uniform", meaning: "Seragam", example: "I wear a school uniform." },
            { term: "Pajamas", meaning: "Piyama", example: "I wear pajamas to sleep." }
        ],
        teacherNote: "Props Hunt! Ask kids to go get something blue / something warm / their favorite shirt!"
    },
    // SLIDE 4 - VOCABULARY: SHOES & ACCESSORIES
    {
        type: 'vocabulary',
        title: "Shoes & Accessories 👟",
        subtitle: "Sepatu dan aksesoris",
        vocabulary: [
            { term: "Shoes", meaning: "Sepatu", example: "My shoes are black." },
            { term: "Sneakers / Trainers", meaning: "Sepatu olahraga", example: "I wear sneakers for PE." },
            { term: "Sandals", meaning: "Sandal", example: "I wear sandals at home." },
            { term: "Boots", meaning: "Sepatu boot", example: "I wear boots when it rains." },
            { term: "Slippers", meaning: "Sandal rumah", example: "I wear slippers in my house." },
            { term: "Hat / Cap", meaning: "Topi", example: "I wear a cap to school." },
            { term: "Glasses", meaning: "Kacamata", example: "He wears glasses to read." },
            { term: "Watch", meaning: "Jam tangan", example: "I wear a watch on my wrist." },
            { term: "Necklace", meaning: "Kalung", example: "She wears a pretty necklace." },
            { term: "Bracelet", meaning: "Gelang", example: "I have a friendship bracelet." },
            { term: "Bag", meaning: "Tas", example: "I carry my bag to school." }
        ],
        teacherNote: "Point to items on your body or ask kids to show theirs!"
    },
    // SLIDE 5 - VOCABULARY: COLORS
    {
        type: 'vocabulary',
        title: "Colors 🎨",
        subtitle: "Warna-warna",
        vocabulary: [
            { term: "Red", meaning: "Merah", example: "She wears a red dress." },
            { term: "Blue", meaning: "Biru", example: "He wears a blue shirt." },
            { term: "Green", meaning: "Hijau", example: "I have a green jacket." },
            { term: "Yellow", meaning: "Kuning", example: "Her shirt is yellow." },
            { term: "Black", meaning: "Hitam", example: "My shoes are black." },
            { term: "White", meaning: "Putih", example: "I wear white socks." },
            { term: "Pink", meaning: "Pink / Merah muda", example: "She likes pink skirts." },
            { term: "Purple", meaning: "Ungu", example: "My bag is purple." },
            { term: "Orange", meaning: "Oranye", example: "He wears an orange T-shirt." },
            { term: "Brown", meaning: "Cokelat", example: "My shoes are brown." },
            { term: "Gray / Grey", meaning: "Abu-abu", example: "His jacket is gray." },
            { term: "Multi-colored", meaning: "Warna-warni", example: "I have a multi-colored shirt." }
        ],
        teacherNote: "Scavenger Hunt: 'Find something RED in your room!' Make it a race!"
    },
    // SLIDE 6 - FORMULA: WEAR vs USE
    {
        type: 'formula',
        title: "Wear vs Use",
        subtitle: "Bedanya Wear dan Use",
        formula: "Wear = pakaian, aksesoris | Use = benda, alat",
        vocabulary: [
            { term: "I wear...", meaning: "Saya memakai (baju, aksesoris)", example: "I wear a shirt." },
            { term: "She wears...", meaning: "Dia memakai", example: "She wears glasses." },
            { term: "I use...", meaning: "Saya menggunakan (alat)", example: "I use a pencil." },
            { term: "He uses...", meaning: "Dia menggunakan", example: "He uses a computer." }
        ],
        teacherNote: "Important distinction: We WEAR clothes, glasses, watches. We USE pencils, phones, computers."
    },
    // SLIDE 7 - FORMULA: DESCRIBING CLOTHES
    {
        type: 'formula',
        title: "How to Describe Clothes",
        subtitle: "Cara mendeskripsikan pakaian",
        formula: "Subject + wear(s) + [color] + [clothes]",
        vocabulary: [
            { term: "a red shirt", meaning: "kaos merah", example: "He wears a red shirt." },
            { term: "blue pants", meaning: "celana biru", example: "She wears blue pants." },
            { term: "a big jacket", meaning: "jaket besar", example: "I wear a big jacket." },
            { term: "small shoes", meaning: "sepatu kecil", example: "The baby wears small shoes." },
            { term: "a pretty dress", meaning: "gaun cantik", example: "She wears a pretty dress." },
            { term: "black glasses", meaning: "kacamata hitam", example: "He wears black glasses." }
        ],
        teacherNote: "Practice pattern: 'What is [student name] wearing?' → '[Name] is wearing a [color] [item].'"
    },
    // SLIDE 8 - ADJECTIVES FOR CLOTHES
    {
        type: 'vocabulary',
        title: "Describing Words (Adjectives)",
        subtitle: "Kata sifat untuk pakaian",
        vocabulary: [
            { term: "Big / Large", meaning: "Besar", example: "I wear a big sweater." },
            { term: "Small / Little", meaning: "Kecil", example: "The shirt is too small." },
            { term: "Long", meaning: "Panjang", example: "She wears a long skirt." },
            { term: "Short", meaning: "Pendek", example: "He wears short pants." },
            { term: "New", meaning: "Baru", example: "I have new shoes!" },
            { term: "Old", meaning: "Lama / Bekas", example: "These are my old clothes." },
            { term: "Pretty / Beautiful", meaning: "Cantik", example: "She looks pretty in that dress." },
            { term: "Cool / Nice", meaning: "KerEN / Bagus", example: "Your jacket is cool!" },
            { term: "Warm", meaning: "Hangat", example: "This sweater is warm." },
            { term: "Comfortable", meaning: "Nyaman", example: "My pajamas are comfortable." }
        ],
        teacherNote: "TPR: Ask kids to show you something big, something small, something warm from their surroundings!"
    },
    // SLIDE 9 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "I use a shirt.", right: "I wear a shirt." },
            { wrong: "She wearing a dress.", right: "She is wearing a dress." },
            { wrong: "He wear glasses.", right: "He wears glasses." },
            { wrong: "I wear bag.", right: "I carry a bag." },
            { wrong: "The shirt is red color.", right: "The shirt is red." }
        ],
        teacherNote: "Review common errors: Use 'wear' not 'use' for clothes. Don't say 'color' after the color name."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: What Are You Wearing? 👔",
        subtitle: "Describing today's outfit",
        caseStudy: {
            scenario: "Bertanya tentang pakaian yang dipakai.",
            template: "A: Hi! What are you wearing today?\nB: I'm wearing a blue T-shirt and black pants.\nA: What about shoes?\nB: I'm wearing white sneakers.\nA: Do you like your outfit today?\nB: Yes! It's very comfortable."
        },
        teacherNote: "DEMO: Ask one student about their outfit. Then have them ask another student. Chain activity!"
    },
    // SLIDE 11 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Describing Others 👗",
        subtitle: "Talking about what others wear",
        caseStudy: {
            scenario: "Mendeskripsikan pakaian orang lain.",
            template: "A: Look at that girl. What is she wearing?\nB: She is wearing a pink dress.\nA: What about her shoes?\nB: She wears white shoes.\nA: Does she wear glasses?\nB: No, she doesn't. But she wears a pretty necklace."
        },
        teacherNote: "Point to characters in a picture or video, or describe the teacher's outfit!"
    },
    // SLIDE 12 - ROLEPLAY 1: FASHION SHOW
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Fashion Show 🌟",
        subtitle: "A = Fashion Reporter | B = Model",
        caseStudy: {
            scenario: "Fashion reporter mendeskripsikan pakaian model.",
            template: "A: Welcome to our fashion show! What are you wearing today?\nB: I'm wearing a _____ _____.\nA: What color is it?\nB: It's _____.\nA: And what about your shoes/accessories?\nB: I'm wearing _____ _____.\nA: You look great!"
        },
        teacherNote: "FUN ACTIVITY: Kids pretend to be models and describe their own outfits with pride!"
    },
    // SLIDE 13 - ROLEPLAY 2: THE SPY GAME
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: The Spy Game 🕵️",
        subtitle: "A = Spy | B = Helper",
        caseStudy: {
            scenario: "Spy mendeskripsikan seseorang berdasarkan pakaiannya.",
            template: "A: I'm looking for someone. He/She wears _____.\nB: Is it [name]?\nA: No, he/she also wears _____.\nB: Oh! Is it [name]?\nA: Yes! You found the person!"
        },
        teacherNote: "GAME: Spy describes a classmate's clothes without saying their name. Others guess who it is!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Memakai baju", sayThis: "I wear a red shirt.", dontSayThis: "I use a red shirt." },
            { context: "Dia memakai (S rule)", sayThis: "She wears a dress.", dontSayThis: "She wear a dress." },
            { context: "Deskripsi lengkap", sayThis: "He wears blue pants.", dontSayThis: "He wear blue pant." },
            { context: "Membawa tas", sayThis: "I carry a bag.", dontSayThis: "I wear a bag." },
            { context: "Warna", sayThis: "The shirt is red.", dontSayThis: "The shirt is red color." }
        ],
        teacherNote: "Review together. Emphasize: Wear for clothes, S for He/She/It, no 'color' after color names."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Family Fashion: Deskripsikan pakaian 3 anggota keluargamu dalam Inggris!",
            "2. Draw & Describe: Gambar orang dengan outfit keren, lalu deskripsikan dengan 5 kalimat!",
            "3. Wear vs Use Challenge: Buat daftar 10 benda - tulis 'Wear' atau 'Use' untuk masing-masing!"
        ],
        teacherNote: "Encourage creativity! Drawing + describing is a great way to reinforce vocabulary."
    }
];

export const quiz: QuizQuestion[] = [
    // CLOTHES VOCABULARY
    {
        question: "What do you wear on your feet?",
        options: ["Shirt", "Shoes", "Hat"],
        correctIndex: 1,
        explanation: "We wear shoes on our feet!"
    },
    {
        question: "Girls often wear this to parties:",
        options: ["Pants", "Dress", "Jacket"],
        correctIndex: 1,
        explanation: "A dress is common for girls to wear to parties!"
    },
    {
        question: "What do you wear to sleep?",
        options: ["Uniform", "Pajamas", "Boots"],
        correctIndex: 1,
        explanation: "Pajamas are clothes we wear to sleep!"
    },
    {
        question: "What do students wear to school in Indonesia?",
        options: ["Costume", "Uniform", "Pajamas"],
        correctIndex: 1,
        explanation: "Students in Indonesia wear school uniforms!"
    },
    // COLORS
    {
        question: "The color of the sky is...",
        options: ["Red", "Blue", "Green"],
        correctIndex: 1,
        explanation: "The sky is blue!"
    },
    {
        question: "Bananas are...",
        options: ["Yellow", "Purple", "Gray"],
        correctIndex: 0,
        explanation: "Bananas are yellow!"
    },
    // WEAR vs USE
    {
        question: "Which is correct? 'I _____ a shirt.'",
        options: ["wear", "use", "carry"],
        correctIndex: 0,
        explanation: "We say 'I wear a shirt' not 'use'. Wear is for clothes!"
    },
    {
        question: "Which is correct? 'I _____ a pencil.'",
        options: ["wear", "use", "carry"],
        correctIndex: 1,
        explanation: "We say 'I use a pencil'. Use is for tools and objects!"
    },
    {
        question: "Which is correct? 'I _____ a bag to school.'",
        options: ["wear", "use", "carry"],
        correctIndex: 2,
        explanation: "We say 'I carry a bag'. Carry means to bring something with you!"
    },
    // THE 'S' RULE
    {
        question: "Complete: She _____ a pink dress.",
        options: ["wear", "wears", "wearing"],
        correctIndex: 1,
        explanation: "'She' needs the 'S' → 'She wears'"
    },
    {
        question: "Complete: He _____ black shoes.",
        options: ["wear", "wears", "wearing"],
        correctIndex: 1,
        explanation: "'He' needs the 'S' → 'He wears'"
    },
    // ADJECTIVES
    {
        question: "If clothes are not big, they are...",
        options: ["Small", "Long", "New"],
        correctIndex: 0,
        explanation: "The opposite of big is small!"
    },
    {
        question: "If clothes are not short, they are...",
        options: ["Small", "Long", "Old"],
        correctIndex: 1,
        explanation: "The opposite of short (for length) is long!"
    },
    {
        question: "Clothes that keep you warm are...",
        options: ["Cool", "Warm", "Pretty"],
        correctIndex: 1,
        explanation: "Warm clothes keep you warm in cold weather!"
    },
    // CORRECT SENTENCES
    {
        question: "Which sentence is CORRECT?",
        options: ["I use a jacket.", "I wear a jacket.", "I wearing a jacket."],
        correctIndex: 1,
        explanation: "'I wear a jacket' is correct. Use 'wear' for clothes!"
    },
    {
        question: "Which sentence is CORRECT?",
        options: ["She wear glasses.", "She wearing glasses.", "She wears glasses."],
        correctIndex: 2,
        explanation: "'She wears glasses' is correct. Don't forget the 'S' for She!"
    },
    {
        question: "Which is the RIGHT way to say the color?",
        options: ["The shirt is red color.", "The shirt is red.", "The shirt color red."],
        correctIndex: 1,
        explanation: "Just say 'The shirt is red'. No need to add 'color'!"
    },
    {
        question: "Complete: My mom _____ a beautiful necklace.",
        options: ["wear", "wears", "carries"],
        correctIndex: 1,
        explanation: "'My mom' = She → 'wears'. Use 'wear' for accessories too!"
    }
];
