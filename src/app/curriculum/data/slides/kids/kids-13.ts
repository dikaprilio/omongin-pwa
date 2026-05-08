import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Hobbies & Games 🎮",
        subtitle: "Talking About Fun Activities",
        teacherNote: "Goal: Anak bisa bercerita tentang hobi dan game favorit mereka dengan menggunakan action verbs dan Present Simple tense yang benar."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about fun! 🎉",
        content: [
            "🎮 Do you like playing games? (Suka main game?)",
            "⚽ What sports do you like? (Suka olahraga apa?)",
            "🎨 Do you have a hobby? (Punya hobi?)",
            "📱 What games do you play? (Main game apa? Roblox? Minecraft?)",
            "🏃 What do you do for fun? (Ngapain aja untuk bersenang-senang?)"
        ],
        teacherNote: "Warming up! Most kids love talking about games. Use their enthusiasm to practice English!"
    },
    // SLIDE 3 - VOCABULARY: GAMES
    {
        type: 'vocabulary',
        title: "Games & Video Games 🎮",
        subtitle: "Jenis-jenis permainan",
        vocabulary: [
            { term: "Roblox", meaning: "Game platform populer", example: "I play Roblox with my friends." },
            { term: "Minecraft", meaning: "Game membangun dunia", example: "I build houses in Minecraft." },
            { term: "Mobile Legends", meaning: "Game MOBA", example: "I play Mobile Legends on my phone." },
            { term: "Free Fire", meaning: "Game battle royale", example: "I play Free Fire every day." },
            { term: "PUBG", meaning: "Game battle royale", example: "I like playing PUBG." },
            { term: "Console", meaning: "PlayStation, Xbox, Nintendo", example: "I play on my console at home." },
            { term: "Mobile games", meaning: "Game di HP", example: "I download mobile games." },
            { term: "Computer games", meaning: "Game di komputer", example: "I play computer games after school." },
            { term: "Board games", meaning: "Permainan papan", example: "I play board games with family." },
            { term: "Card games", meaning: "Permainan kartu", example: "We play card games at parties." }
        ],
        teacherNote: "Kids love talking about games! Accept any game they mention and help them form sentences."
    },
    // SLIDE 4 - VOCABULARY: SPORTS & ACTIVITIES
    {
        type: 'vocabulary',
        title: "Sports & Activities ⚽",
        subtitle: "Olahraga dan aktivitas",
        vocabulary: [
            { term: "Football / Soccer", meaning: "Sepak bola", example: "I play football with my friends." },
            { term: "Basketball", meaning: "Bola basket", example: "I shoot hoops in basketball." },
            { term: "Badminton", meaning: "Bulu tangkis", example: "I play badminton every weekend." },
            { term: "Swimming", meaning: "Berenang", example: "I go swimming at the pool." },
            { term: "Cycling", meaning: "Bersepeda", example: "I love cycling in the park." },
            { term: "Running", meaning: "Lari", example: "I go running every morning." },
            { term: "Dancing", meaning: "Menari", example: "I take dancing lessons." },
            { term: "Singing", meaning: "Menyanyi", example: "I enjoy singing songs." },
            { term: "Drawing", meaning: "Menggambar", example: "I like drawing cartoons." },
            { term: "Reading", meaning: "Membaca", example: "I love reading comics." },
            { term: "Cooking", meaning: "Memasak", example: "I help my mom with cooking." },
            { term: "Gardening", meaning: "Berkebun", example: "I do gardening with my grandma." }
        ],
        teacherNote: "Make it active! If you mention sports, ask kids to show the action. TPR works great here!"
    },
    // SLIDE 5 - ACTION VERBS
    {
        type: 'formula',
        title: "Action Verbs",
        subtitle: "Kata kerja aksi",
        formula: "I + verb + object",
        vocabulary: [
            { term: "play", meaning: "bermain", example: "I play Roblox." },
            { term: "watch", meaning: "menonton", example: "I watch YouTube videos." },
            { term: "collect", meaning: "mengumpulkan", example: "I collect Pokemon cards." },
            { term: "build", meaning: "membangun", example: "I build houses in Minecraft." },
            { term: "practice", meaning: "berlatih", example: "I practice piano every day." },
            { term: "learn", meaning: "mempelajari", example: "I learn new dance moves." },
            { term: "join", meaning: "bergabung", example: "I join a football club." },
            { term: "win", meaning: "menang", example: "I want to win the game!" },
            { term: "lose", meaning: "kalah", example: "It's okay to lose sometimes." },
            { term: "create", meaning: "menciptakan", example: "I create art in my free time." }
        ],
        teacherNote: "Action verbs are the heart of talking about hobbies. Practice with TPR - kids act out the verbs!"
    },
    // SLIDE 6 - PRESENT SIMPLE: HOW TO TALK ABOUT HABITS
    {
        type: 'formula',
        title: "Talking About Habits",
        subtitle: "Cara bercerita tentang kebiasaan",
        formula: "I/You/We/They + verb | He/She/It + verb+s",
        vocabulary: [
            { term: "I play", meaning: "Saya bermain", example: "I play games every day." },
            { term: "He plays", meaning: "Dia bermain (laki-laki)", example: "He plays football well." },
            { term: "She plays", meaning: "Dia bermain (perempuan)", example: "She plays the piano." },
            { term: "We play", meaning: "Kami bermain", example: "We play together." },
            { term: "They play", meaning: "Mereka bermain", example: "They play in the park." }
        ],
        teacherNote: "The 'S' Rule: He/She/It gets an 'S'! I play → He plays. Practice dengan contoh dari hobi anak."
    },
    // SLIDE 7 - FREQUENCY WORDS
    {
        type: 'vocabulary',
        title: "How Often? (Frequency)",
        subtitle: "Seberapa sering?",
        vocabulary: [
            { term: "always", meaning: "selalu", example: "I always play games after school." },
            { term: "usually", meaning: "biasanya", example: "I usually play football on Sunday." },
            { term: "often", meaning: "sering", example: "I often watch YouTube." },
            { term: "sometimes", meaning: "kadang-kadang", example: "I sometimes read books." },
            { term: "rarely", meaning: "jarang", example: "I rarely play outside." },
            { term: "never", meaning: "tidak pernah", example: "I never cheat in games." },
            { term: "every day", meaning: "setiap hari", example: "I practice piano every day." },
            { term: "every week", meaning: "setiap minggu", example: "I swim every week." },
            { term: "on weekends", meaning: "akhir pekan", example: "I play games on weekends." }
        ],
        teacherNote: "Ajarkan urutan: ALWAYS (100%) → USUALLY → OFTEN → SOMETIMES → RARELY → NEVER (0%)"
    },
    // SLIDE 8 - COMPARISON: WRONG VS RIGHT
    {
        type: 'comparison',
        title: "The 'S' Rule",
        subtitle: "Tambahkan 'S' untuk He/She/It",
        comparison: [
            { wrong: "He play football.", right: "He plays football." },
            { wrong: "She like dancing.", right: "She likes dancing." },
            { wrong: "My brother watch TV.", right: "My brother watches TV." },
            { wrong: "My sister play Roblox.", right: "My sister plays Roblox." },
            { wrong: "He go swimming.", right: "He goes swimming." }
        ],
        teacherNote: "The Snake Sound Rule: He/She/It adds the 'S' sound like a snake! Sssssss! 🐍"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Video Games 🎮",
        subtitle: "Talking about gaming hobbies",
        caseStudy: {
            scenario: "Bertanya tentang game yang dimainkan.",
            template: "A: What games do you play?\nB: I play Roblox and Minecraft.\nA: How often do you play?\nB: I play every day after finishing homework.\nA: What do you do in the game?\nB: I build houses and play with my friends.\nA: That's cool! My brother plays too."
        },
        teacherNote: "DEMO: Show enthusiasm when kids talk about games. Ask follow-up questions to keep conversation going."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Sports & Hobbies ⚽",
        subtitle: "Talking about sports and activities",
        caseStudy: {
            scenario: "Bertanya tentang olahraga dan aktivitas.",
            template: "A: Do you like sports?\nB: Yes, I love playing football!\nA: When do you play?\nB: I play football every Saturday with my friends.\nA: What other hobbies do you have?\nB: I also like drawing. I draw cartoons every weekend.\nA: Wow, you're talented!"
        },
        teacherNote: "Latih anak untuk memberikan detail: What, When, Who, Where."
    },
    // SLIDE 11 - ROLEPLAY 1: MY FAVORITE GAME
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: My Game 🎮",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Dua teman berbincang tentang game favorit.",
            template: "A: What games do you like to play?\nB: I like playing _____.\nA: How often do you play?\nB: I play _____. (every day / on weekends / etc.)\nA: What do you do in the game?\nB: I _____ in the game.\nA: Who do you play with?\nB: I play with _____."
        },
        teacherNote: "GILIRAN MURID: Pair up students. Let them talk about their real favorite games!"
    },
    // SLIDE 12 - ROLEPLAY 2: SPORTS & ACTIVITIES
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: My Hobby ⚽",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Bertanya tentang hobi dan olahraga.",
            template: "A: What sports do you like?\nB: I like _____.\nA: When do you [play/do] [sport]?\nB: I [play/do] [sport] _____.\nA: What other hobbies do you have?\nB: I also like _____. I _____ every _____."
        },
        teacherNote: "Encourage anak untuk berbagi hobby nyata mereka. This builds confidence!"
    },
    // SLIDE 13 - MICRO-DRILL: THE 'S' CHALLENGE
    {
        type: 'micro-drill',
        title: "The 'S' Challenge! 🐍",
        subtitle: "Add 'S' for He/She/It",
        mission: [
            "1. I play → My brother ____",
            "2. I watch → She ____",
            "3. I go → He ____",
            "4. I like → My sister ____",
            "5. I do → My friend ____"
        ],
        teacherNote: "Rapid fire! Tanya cepat, anak harus tambahkan 'S'. Make snake sound: Sssss! 🐍"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Main game", sayThis: "I play Roblox every day.", dontSayThis: "I play game." },
            { context: "He plays (S rule)", sayThis: "He plays football.", dontSayThis: "He play football." },
            { context: "Seberapa sering", sayThis: "I usually play on weekends.", dontSayThis: "I play weekend." },
            { context: "Hobi olahraga", sayThis: "I like swimming.", dontSayThis: "I like swim." },
            { context: "Detail hobi", sayThis: "I play with my friends.", dontSayThis: "Play friends." }
        ],
        teacherNote: "Review bersama-sama. Tekankan 'The S Rule' untuk He/She/It."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Hobby Poster: Gambar hobi favoritmu dan tulis 3 kalimat dalam Inggris!",
            "2. The 'S' Game: Ceritakan hobi keluargamu: 'My dad plays...', 'My mom likes...'",
            "3. Game Review: Tulis review singkat game favoritmu dalam Inggris (3-5 kalimat)!"
        ],
        teacherNote: "Connect learning with their real interests. They'll be more motivated!"
    }
];

export const quiz: QuizQuestion[] = [
    // GAMES VOCABULARY
    {
        question: "Which one is a video game?",
        options: ["Basketball", "Minecraft", "Swimming"],
        correctIndex: 1,
        explanation: "Minecraft is a popular video game where you build and explore!"
    },
    {
        question: "What do you call games on your phone?",
        options: ["Console games", "Board games", "Mobile games"],
        correctIndex: 2,
        explanation: "Games played on mobile phones are called 'mobile games'."
    },
    // SPORTS VOCABULARY
    {
        question: "Which sport uses a racket?",
        options: ["Football", "Badminton", "Basketball"],
        correctIndex: 1,
        explanation: "Badminton is played with a racket and shuttlecock!"
    },
    {
        question: "Where do you go swimming?",
        options: ["Library", "Pool", "Park"],
        correctIndex: 1,
        explanation: "We go swimming at the pool!"
    },
    // ACTION VERBS
    {
        question: "What do you do with Pokemon cards?",
        options: ["Eat them", "Collect them", "Drink them"],
        correctIndex: 1,
        explanation: "We collect Pokemon cards as a hobby!"
    },
    {
        question: "In Minecraft, you _____ houses.",
        options: ["eat", "build", "swim"],
        correctIndex: 1,
        explanation: "In Minecraft, you build houses and structures!"
    },
    // THE 'S' RULE
    {
        question: "Which sentence is CORRECT?",
        options: ["He play football.", "He plays football.", "He playing football."],
        correctIndex: 1,
        explanation: "Use 'plays' (with S) for He/She/It. The 'S' Rule!"
    },
    {
        question: "Complete: She _____ Roblox every day.",
        options: ["play", "plays", "playing"],
        correctIndex: 1,
        explanation: "'She' needs the 'S' → 'She plays'"
    },
    {
        question: "Complete: My brother _____ basketball well.",
        options: ["play", "plays", "playing"],
        correctIndex: 1,
        explanation: "'My brother' is 'he', so use 'plays' with S!"
    },
    {
        question: "Which does NOT need an 'S'?",
        options: ["He", "She", "I"],
        correctIndex: 2,
        explanation: "Only He/She/It needs 'S'. 'I' does not need 'S' → 'I play'"
    },
    // FREQUENCY
    {
        question: "If you do something 100% of the time, you say...",
        options: ["Never", "Always", "Sometimes"],
        correctIndex: 1,
        explanation: "'Always' means you do it 100% of the time!"
    },
    {
        question: "If you do something 0% of the time, you say...",
        options: ["Always", "Often", "Never"],
        correctIndex: 2,
        explanation: "'Never' means you don't do it at all (0%)!"
    },
    {
        question: "Complete: I play games _____ weekends.",
        options: ["in", "on", "at"],
        correctIndex: 1,
        explanation: "We say 'on weekends' or 'on Saturday/Sunday'."
    },
    // CORRECT SENTENCES
    {
        question: "Which sentence is CORRECT?",
        options: ["She like dancing.", "She likes dancing.", "She liking dancing."],
        correctIndex: 1,
        explanation: "'She likes' is correct. Don't forget the 'S'!"
    },
    {
        question: "How do you say 'Dia bermain sepak bola'?",
        options: ["He play football.", "He plays football.", "He playing football."],
        correctIndex: 1,
        explanation: "'He plays football' is the correct translation."
    },
    {
        question: "Complete the sentence: I _____ drawing cartoons.",
        options: ["likes", "liking", "like"],
        correctIndex: 2,
        explanation: "'I like' - no 'S' needed for I/You/We/They"
    },
    {
        question: "'I go swimming _____ week.'",
        options: ["all", "every", "many"],
        correctIndex: 1,
        explanation: "We say 'every week' for things we do regularly."
    }
];
