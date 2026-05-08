import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Super Introduction 🦸",
        subtitle: "Introduce Yourself Like a Pro!",
        teacherNote: "Goal: Anak berani kenalan dengan suara lantang dan kontak mata, menggunakan kalimat lengkap, bukan cuma 'My name is...'"
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's get to know each other! 👋",
        content: [
            "🤔 Do you remember your first day at school? (Ingat hari pertama sekolah?)",
            "😊 How did you introduce yourself? (Gimana kenalan dulu?)",
            "🎯 Do you want to make better introductions? (Mau kenalan lebih keren?)",
            "💪 Are you ready to be confident? (Siap percaya diri?)"
        ],
        teacherNote: "Warming up! Make kids comfortable. Assure them it's okay to make mistakes!"
    },
    // SLIDE 3 - THE BASICS
    {
        type: 'vocabulary',
        title: "Introduction Basics 📝",
        subtitle: "Dasar-dasar perkenalan",
        vocabulary: [
            { term: "Hello! / Hi!", meaning: "Halo!", example: "Hello! Nice to meet you!" },
            { term: "My name is...", meaning: "Nama saya...", example: "My name is Budi." },
            { term: "I am... years old.", meaning: "Saya berusia... tahun.", example: "I am 8 years old." },
            { term: "I am from...", meaning: "Saya dari...", example: "I am from Jakarta." },
            { term: "I live in...", meaning: "Saya tinggal di...", example: "I live in Bandung." },
            { term: "Nice to meet you!", meaning: "Senang bertemu denganmu!", example: "Nice to meet you too!" },
            { term: "Goodbye! / Bye!", meaning: "Sampai jumpa!", example: "Goodbye! See you later!" }
        ],
        teacherNote: "Basic phrases everyone should know. Practice pronunciation!"
    },
    // SLIDE 4 - ADDING DETAILS
    {
        type: 'vocabulary',
        title: "Add More Details ✨",
        subtitle: "Tambahkan informasi menarik",
        vocabulary: [
            { term: "My favorite color is...", meaning: "Warna favorit saya adalah...", example: "My favorite color is blue." },
            { term: "I like...", meaning: "Saya suka...", example: "I like playing games." },
            { term: "I love...", meaning: "Saya sangat suka...", example: "I love eating pizza!" },
            { term: "My hobby is...", meaning: "Hobi saya adalah...", example: "My hobby is drawing." },
            { term: "I have...", meaning: "Saya punya...", example: "I have a pet cat." },
            { term: "I can...", meaning: "Saya bisa...", example: "I can swim very fast." }
        ],
        teacherNote: "These make introductions interesting! Encourage kids to share something unique."
    },
    // SLIDE 5 - FORMULA: THE SUPER INTRODUCTION
    {
        type: 'formula',
        title: "The Super Introduction Formula",
        subtitle: "Rumus perkenalan keren",
        formula: "Hello + Name + Age + 1 Interesting Fact",
        vocabulary: [
            { term: "Step 1: Hello!", meaning: "Sapa dengan ramah", example: "Hello everyone!" },
            { term: "Step 2: My name is...", meaning: "Sebutkan nama", example: "My name is Ani." },
            { term: "Step 3: I am... years old.", meaning: "Sebutkan umur", example: "I am 9 years old." },
            { term: "Step 4: Interesting fact!", meaning: "Fakta menarik", example: "I can play the piano!" }
        ],
        teacherNote: "The 4-step formula for a complete introduction. Practice until smooth!"
    },
    // SLIDE 6 - ASKING QUESTIONS
    {
        type: 'formula',
        title: "Asking About Others",
        subtitle: "Bertanya tentang orang lain",
        formula: "Question words: What, Where, How",
        vocabulary: [
            { term: "What's your name?", meaning: "Siapa nama kamu?", example: "What's your name? I'm Ani." },
            { term: "How old are you?", meaning: "Berapa umur kamu?", example: "How old are you? I'm 8." },
            { term: "Where are you from?", meaning: "Dari mana asal kamu?", example: "Where are you from? I'm from Surabaya." },
            { term: "What do you like?", meaning: "Apa yang kamu suka?", example: "What do you like? I like cats." },
            { term: "What is your hobby?", meaning: "Apa hobimu?", example: "What is your hobby? My hobby is reading." }
        ],
        teacherNote: "Teach kids to ask back! Good conversations go both ways."
    },
    // SLIDE 7 - COMPARISON: BORING vs SUPER
    {
        type: 'comparison',
        title: "Boring vs Super Introduction",
        subtitle: "Perkenalan membosankan vs keren",
        comparison: [
            { wrong: "My name is Ani. Bye.", right: "Hello! My name is Ani. I'm 8 years old. I love drawing! Nice to meet you!" },
            { wrong: "I am Budi.", right: "Hi everyone! I'm Budi. I'm from Jakarta. My favorite hobby is playing football!" },
            { wrong: "I am 7.", right: "I am 7 years old and I can speak a little English!" },
            { wrong: "[Silent, looking down]", right: "[Eye contact, smile, speak clearly]" }
        ],
        teacherNote: "The difference is CONFIDENCE and DETAILS! Teach kids to speak up and add color to their intro."
    },
    // SLIDE 8 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Meeting a New Friend 👫",
        subtitle: "First meeting at school",
        caseStudy: {
            scenario: "Dua anak bertemu untuk pertama kalinya.",
            template: "A: Hi there! My name is Rina. What's your name?\nB: Hello! My name is Budi. Nice to meet you!\nA: Nice to meet you too! How old are you?\nB: I am 8 years old. How about you?\nA: I am 9 years old. Where are you from?\nB: I am from Jakarta. What about you?\nA: I am from Bandung! Do you like playing games?\nB: Yes, I do! I love Minecraft!"
        },
        teacherNote: "DEMO: Model friendly tone and eye contact. Show how to ask follow-up questions!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: The Full Introduction 🎤",
        subtitle: "Introducing yourself completely",
        caseStudy: {
            scenario: "Perkenalan lengkap dengan detail menarik.",
            template: "Teacher: Okay, please introduce yourself!\nStudent: Hello everyone! My name is Dina. I am 10 years old. I live in Jakarta. My favorite color is purple. I have a hobby - I love dancing! I also have a pet dog named Bobo. Nice to meet you all!\nTeacher: Thank you, Dina! That was wonderful!"
        },
        teacherNote: "Show what a complete, confident introduction looks like. Celebrate the effort!"
    },
    // SLIDE 10 - ROLEPLAY 1: NEW CLASSMATE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: New Classmate 🎒",
        subtitle: "A = New Student | B = Friendly Classmate",
        caseStudy: {
            scenario: "Murid baru bertemu teman di kelas.",
            template: "A: Hello! I'm new here. My name is _____.\nB: Hi! Welcome! My name is _____. Nice to meet you!\nA: Nice to meet you too! I am _____ years old.\nB: Cool! I'm _____. Where are you from?\nA: I'm from _____. What do you like to do?\nB: I like _____. How about you?\nA: I love _____!"
        },
        teacherNote: "GILIRAN MURID: Pair up! Practice the back-and-forth of real conversation."
    },
    // SLIDE 11 - ROLEPLAY 2: THE INTERVIEW
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: The Interview 🎤",
        subtitle: "A = Reporter | B = You",
        caseStudy: {
            scenario: "Wawancara singkat tentang diri sendiri.",
            template: "A: Hello! Can you introduce yourself?\nB: Hello! My name is _____. I am _____ years old.\nA: Nice! Tell me something interesting about you.\nB: Well, I _____. (can sing / have a pet / love pizza / etc.)\nA: That's cool! Where are you from?\nB: I am from _____.\nA: Thank you! It was nice meeting you!\nB: Thank you! Nice meeting you too!"
        },
        teacherNote: "Make it fun! One kid is a 'TV reporter' with an imaginary microphone!"
    },
    // SLIDE 12 - MICRO-DRILL: SPEED INTRODUCTIONS
    {
        type: 'micro-drill',
        title: "Speed Introduction Challenge! ⚡",
        subtitle: "Introduce yourself in 30 seconds!",
        mission: [
            "1. Stand up straight and smile!",
            "2. Say: 'Hello! My name is...'",
            "3. Say: 'I am ... years old.'",
            "4. Add ONE interesting fact about yourself!",
            "5. Finish with: 'Nice to meet you!'"
        ],
        teacherNote: "Timer challenge! Everyone gets 30 seconds. Cheer for each other!"
    },
    // SLIDE 13 - BODY LANGUAGE TIPS
    {
        type: 'concept',
        title: "Body Language Matters! 🌟",
        subtitle: "Bahasa tubuh penting!",
        content: [
            "👀 Make eye contact - Lihat ke lawan bicara",
            "😊 Smile - Senyum!",
            "🎤 Speak clearly - Bicara dengan jelas",
            "💪 Stand tall - Berdiri tegak",
            "👋 Wave when saying hello/goodbye - Lambaikan tangan"
        ],
        teacherNote: "Demonstrate good vs poor body language. Kids learn a lot from visual examples!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Memperkenalkan diri", sayThis: "Hello! My name is Ani.", dontSayThis: "I am Ani. [then silence]" },
            { context: "Sebutkan umur", sayThis: "I am 8 years old.", dontSayThis: "8." },
            { context: "Asal", sayThis: "I am from Jakarta.", dontSayThis: "Jakarta." },
            { context: "Fakta menarik", sayThis: "I love playing football!", dontSayThis: "No. [to hobbies]" },
            { context: "Menutup", sayThis: "Nice to meet you!", dontSayThis: "[Just leave]" }
        ],
        teacherNote: "Review the Full Sentence Rule. One-word answers are not enough!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Practice Mirror: Latih perkenalan di depan cermin 3x sehari!",
            "2. Family Intro: Kenalkan diri dalam Inggris ke semua anggota keluarga!",
            "3. Record Yourself: Rekam perkenalanmu dan lihat apa yang bisa diperbaiki!"
        ],
        teacherNote: "Encourage daily practice. Confidence comes from repetition!"
    }
];

export const quiz: QuizQuestion[] = [
    // BASIC INTRODUCTION
    {
        question: "How do you say 'Nama saya Budi'?",
        options: ["My name is Budi.", "I am Budi name.", "Budi is my."],
        correctIndex: 0,
        explanation: "'My name is Budi' is the correct way to introduce your name."
    },
    {
        question: "How do you say 'Saya berusia 8 tahun'?",
        options: ["I 8 years old.", "I am 8 years old.", "My age 8."],
        correctIndex: 1,
        explanation: "'I am 8 years old' is the complete sentence."
    },
    {
        question: "How do you say 'Senang bertemu denganmu'?",
        options: ["Nice to meet you!", "Good to see!", "Happy meet you!"],
        correctIndex: 0,
        explanation: "'Nice to meet you!' is the standard greeting."
    },
    // ASKING QUESTIONS
    {
        question: "How do you ask someone's name?",
        options: ["Your name?", "What's your name?", "Name you?"],
        correctIndex: 1,
        explanation: "'What's your name?' is the correct question."
    },
    {
        question: "How do you ask someone's age?",
        options: ["How age are you?", "How old are you?", "What is your age?"],
        correctIndex: 1,
        explanation: "'How old are you?' is the common way to ask age."
    },
    {
        question: "How do you ask where someone is from?",
        options: ["Where are you from?", "From where you?", "You from where?"],
        correctIndex: 0,
        explanation: "'Where are you from?' is the correct question form."
    },
    // VOCABULARY
    {
        question: "What does 'I am from Indonesia' mean?",
        options: ["Saya ke Indonesia", "Saya dari Indonesia", "Saya suka Indonesia"],
        correctIndex: 1,
        explanation: "'I am from Indonesia' = Saya dari Indonesia."
    },
    {
        question: "What does 'I live in Jakarta' mean?",
        options: ["Saya dari Jakarta", "Saya tinggal di Jakarta", "Saya suka Jakarta"],
        correctIndex: 1,
        explanation: "'I live in Jakarta' = Saya tinggal di Jakarta."
    },
    {
        question: "Complete: _____ hobby is drawing.",
        options: ["I", "My", "Me"],
        correctIndex: 1,
        explanation: "'My hobby is drawing' - use 'My' to show possession."
    },
    {
        question: "Complete: I _____ play football.",
        options: ["can", "am", "have"],
        correctIndex: 0,
        explanation: "'I can play football' - 'can' shows ability."
    },
    // FULL SENTENCES
    {
        question: "Which is a complete sentence?",
        options: ["Budi.", "My name is Budi.", "Name Budi."],
        correctIndex: 1,
        explanation: "'My name is Budi' is a complete sentence."
    },
    {
        question: "Which is the BEST introduction?",
        options: [
            "I am Ani. Bye.",
            "Hello! My name is Ani. I'm 8 years old. I like dancing! Nice to meet you!",
            "Ani. 8. Jakarta."
        ],
        correctIndex: 1,
        explanation: "The second option has all elements: greeting, name, age, interesting fact, and closing!"
    },
    {
        question: "Complete: I have _____ pet cat.",
        options: ["a", "an", "the"],
        correctIndex: 0,
        explanation: "'I have a pet cat' - use 'a' before consonant sounds."
    },
    // RESPONSES
    {
        question: "If someone says 'Nice to meet you!', you say...",
        options: ["Yes.", "Nice to meet you too!", "Okay."],
        correctIndex: 1,
        explanation: "'Nice to meet you too!' is the polite response."
    },
    {
        question: "How do you say goodbye?",
        options: ["Hello!", "Goodbye!", "Thank you!"],
        correctIndex: 1,
        explanation: "'Goodbye!' or 'Bye!' is used to say farewell."
    },
    {
        question: "Complete: What _____ your hobby?",
        options: ["is", "are", "do"],
        correctIndex: 0,
        explanation: "'What is your hobby?' - 'hobby' is singular, so use 'is'."
    },
    // BONUS QUESTIONS
    {
        question: "What do you say when you meet someone new?",
        options: ["Goodbye!", "Nice to meet you!", "See you later!"],
        correctIndex: 1,
        explanation: "'Nice to meet you!' is what you say when meeting someone new."
    },
    {
        question: "Complete: I _____ from Jakarta.",
        options: ["am", "is", "are"],
        correctIndex: 0,
        explanation: "'I am from Jakarta' - use 'am' with I."
    },
    {
        question: "What is the correct order for introduction?",
        options: ["Name → Age → Hobby", "Age → Name → Hobby", "Hobby → Name → Age"],
        correctIndex: 0,
        explanation: "Usually: Name first, then age, then something interesting!"
    },
    {
        question: "How do you say 'Saya suka bermain'?",
        options: ["I like play.", "I like playing.", "I liking play."],
        correctIndex: 1,
        explanation: "'I like playing' - use -ing form after 'like'."
    },
    {
        question: "What does 'Good morning' mean?",
        options: ["Selamat malam", "Selamat pagi", "Selamat siang"],
        correctIndex: 1,
        explanation: "'Good morning' = Selamat pagi!"
    },
    {
        question: "What does 'Good night' mean?",
        options: ["Selamat malam (tidur)", "Selamat sore", "Selamat pagi"],
        correctIndex: 0,
        explanation: "'Good night' = Selamat malam (before sleeping)!"
    },
    {
        question: "Complete: _____ you like pizza?",
        options: ["Do", "Does", "Are"],
        correctIndex: 0,
        explanation: "'Do you like pizza?' - use 'Do' for questions with you/I/we/they."
    },
    {
        question: "What do you say when leaving?",
        options: ["Hello!", "Goodbye!", "Nice to meet you!"],
        correctIndex: 1,
        explanation: "'Goodbye!' or 'Bye!' is used when leaving."
    },
    {
        question: "Complete: He _____ from Bandung.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'He is from Bandung' - use 'is' with he/she/it."
    },
    {
        question: "What is 'hobby' in Indonesian?",
        options: ["Pekerjaan", "Hobi", "Sekolah"],
        correctIndex: 1,
        explanation: "'Hobby' = Hobi (kegiatan yang disukai)!"
    },
    {
        question: "Which is the best full introduction?",
        options: [
            "Name. 8. Bye.",
            "Hello! I'm Ani. I'm 8. I love dancing! Nice to meet you!",
            "I am student."
        ],
        correctIndex: 1,
        explanation: "The best introduction includes greeting, name, age, interesting fact, and closing!"
    },
    {
        question: "Complete: They _____ from Surabaya.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "'They are from Surabaya' - use 'are' with they/we/you."
    },
    {
        question: "What does 'See you later' mean?",
        options: ["Sampai jumpa nanti", "Selamat tinggal", "Senang bertemu"],
        correctIndex: 0,
        explanation: "'See you later' = Sampai jumpa nanti!"
    },
    {
        question: "How do you respond to 'How are you?'",
        options: ["I am 8.", "I am fine, thank you!", "I am from Jakarta."],
        correctIndex: 1,
        explanation: "'I am fine, thank you!' is the common response to 'How are you?'"
    }
];
