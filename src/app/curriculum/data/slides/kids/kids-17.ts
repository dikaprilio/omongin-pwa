import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "My Last Holiday 🏖️",
        subtitle: "Talking About Past Events",
        teacherNote: "Goal: Anak bisa bercerita tentang pengalaman liburan mereka menggunakan Past Tense (V2) dengan benar. Stop saying 'I go' for past events!"
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about holidays! ✈️",
        content: [
            "🏖️ Where did you go last holiday? (Kemana kamu pergi liburan lalu?)",
            "👨‍👩‍👧 Who did you go with? (Pergi sama siapa?)",
            "🎉 What did you do? (Ngapain aja?)",
            "😊 Did you have fun? (Seru gak?)",
            "📅 When was your last holiday? (Kapan liburan terakhirmu?)"
        ],
        teacherNote: "Warming up! Use past tense questions from the start to set the context."
    },
    // SLIDE 3 - CONCEPT: PAST TENSE
    {
        type: 'concept',
        title: "Storytelling Mode 📖",
        subtitle: "Cerita tentang masa lalu",
        content: [
            "🔒 LOCK THE TIMELINE: Once you say 'yesterday' or 'last week', everything becomes PAST!",
            "⚠️ The Mistake: 'I GO to Bali last week' ❌",
            "✅ The Fix: 'I WENT to Bali last week' ✓",
            "📝 Rule: Past Tense = V2 (Verb 2)",
            "🔑 Key Words: Yesterday, Last week, Last month, Last year, Last holiday, Ago"
        ],
        teacherNote: "Emphasize: 'GO' becomes 'WENT' for past events. This is the V2 form!"
    },
    // SLIDE 4 - VOCABULARY: TIME MARKERS
    {
        type: 'vocabulary',
        title: "Time Markers ⏰",
        subtitle: "Penanda waktu untuk masa lalu",
        vocabulary: [
            { term: "Yesterday", meaning: "Kemarin", example: "I went to the park yesterday." },
            { term: "Last night", meaning: "Tadi malam", example: "I watched a movie last night." },
            { term: "Last week", meaning: "Minggu lalu", example: "I visited grandma last week." },
            { term: "Last month", meaning: "Bulan lalu", example: "We moved house last month." },
            { term: "Last year", meaning: "Tahun lalu", example: "I went to Singapore last year." },
            { term: "Last Sunday", meaning: "Minggu lalu", example: "I played football last Sunday." },
            { term: "...ago", meaning: "...yang lalu", example: "I ate breakfast 2 hours ago." },
            { term: "In 2023", meaning: "Di tahun 2023", example: "I started school in 2023." },
            { term: "When I was...", meaning: "Ketika saya...", example: "I lived in Bandung when I was 5." }
        ],
        teacherNote: "These words are your signal: PAST TENSE coming! Everything after them must be V2."
    },
    // SLIDE 5 - VOCABULARY: COMMON VERBS V2
    {
        type: 'vocabulary',
        title: "Common Past Tense Verbs (V2) 📝",
        subtitle: "Kata kerja V2 yang sering digunakan",
        vocabulary: [
            { term: "go → went", meaning: "pergi → pergi (lalu)", example: "I went to the beach." },
            { term: "eat → ate", meaning: "makan → makan (lalu)", example: "I ate nasi goreng." },
            { term: "see → saw", meaning: "melihat → melihat (lalu)", example: "I saw a big fish." },
            { term: "do → did", meaning: "melakukan → melakukan (lalu)", example: "I did my homework." },
            { term: "have → had", meaning: "punya/makan → punya/makan (lalu)", example: "I had a great time." },
            { term: "play → played", meaning: "bermain → bermain (lalu)", example: "I played at the park." },
            { term: "visit → visited", meaning: "mengunjungi", example: "I visited my grandma." },
            { term: "buy → bought", meaning: "membeli", example: "I bought a souvenir." },
            { term: "swim → swam", meaning: "berenang", example: "I swam in the pool." },
            { term: "take → took", meaning: "mengambil/foto", example: "I took many photos." }
        ],
        teacherNote: "Group 1: Irregular verbs (go-went, eat-ate). Group 2: Regular verbs (add -ed)."
    },
    // SLIDE 6 - FORMULA: PAST TENSE SENTENCES
    {
        type: 'formula',
        title: "How to Make Past Tense Sentences",
        subtitle: "Cara membuat kalimat past tense",
        formula: "Time Marker + S + V2 + Object",
        vocabulary: [
            { term: "I went to...", meaning: "Saya pergi ke...", example: "I went to Bali last week." },
            { term: "I visited...", meaning: "Saya mengunjungi...", example: "I visited the zoo yesterday." },
            { term: "I ate...", meaning: "Saya makan...", example: "I ate delicious food." },
            { term: "I saw...", meaning: "Saya melihat...", example: "I saw beautiful beaches." },
            { term: "I played...", meaning: "Saya bermain...", example: "I played with my cousins." },
            { term: "I had...", meaning: "Saya punya/makan...", example: "I had a great time." }
        ],
        teacherNote: "Practice pattern: 'Last [time], I [V2] to [place]. I [V2] [activity].'"
    },
    // SLIDE 7 - FORMULA: ASKING ABOUT PAST
    {
        type: 'formula',
        title: "Asking About the Past",
        subtitle: "Bertanya tentang masa lalu",
        formula: "Did + S + verb? / Wh- + did + S + verb?",
        vocabulary: [
            { term: "Where did you go?", meaning: "Kamu pergi ke mana?", example: "Where did you go last holiday?" },
            { term: "What did you do?", meaning: "Kamu ngapain aja?", example: "What did you do yesterday?" },
            { term: "Who did you go with?", meaning: "Kamu pergi sama siapa?", example: "Who did you go with?" },
            { term: "Did you have fun?", meaning: "Seru gak?", example: "Did you have fun at the beach?" },
            { term: "When did you go?", meaning: "Kapan kamu pergi?", example: "When did you go to Jakarta?" },
            { term: "How long did you stay?", meaning: "Berapa lama kamu tinggal?", example: "How long did you stay there?" }
        ],
        teacherNote: "For questions, use 'did + base verb'. For answers, use V2. 'Did you GO?' → 'I WENT.'"
    },
    // SLIDE 8 - COMPARISON: PRESENT vs PAST
    {
        type: 'comparison',
        title: "Present vs Past",
        subtitle: "Sekarang vs Masa Lalu",
        comparison: [
            { wrong: "I go to Bali last week.", right: "I went to Bali last week." },
            { wrong: "I eat pizza yesterday.", right: "I ate pizza yesterday." },
            { wrong: "I see a monkey last Sunday.", right: "I saw a monkey last Sunday." },
            { wrong: "I have fun at the party yesterday.", right: "I had fun at the party yesterday." },
            { wrong: "I play games last night.", right: "I played games last night." }
        ],
        teacherNote: "The Trap: Using present tense for past events. The Fix: Always use V2 after time markers!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Beach Holiday 🏖️",
        subtitle: "Talking about a beach vacation",
        caseStudy: {
            scenario: "Bercerita tentang liburan ke pantai.",
            template: "A: Where did you go last holiday?\nB: I went to Bali with my family.\nA: When did you go?\nB: We went there last month.\nA: What did you do there?\nB: I swam in the ocean and built sandcastles. I ate delicious seafood too!\nA: That sounds amazing! Did you have fun?\nB: Yes! I had a great time!"
        },
        teacherNote: "DEMO: Model the conversation. Emphasize all the V2 verbs: went, swam, built, ate, had."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Visiting Family 👨‍👩‍👧",
        subtitle: "Talking about visiting relatives",
        caseStudy: {
            scenario: "Bercerita tentang mengunjungi keluarga.",
            template: "A: What did you do last weekend?\nB: I visited my grandparents in Bandung.\nA: Who did you go with?\nB: I went with my parents and my sister.\nA: What did you do there?\nB: We ate grandma's cooking. I played with my cousins. We took many photos!\nA: How nice! When did you come back?\nB: We came back yesterday."
        },
        teacherNote: "Show how to chain multiple past tense sentences together."
    },
    // SLIDE 11 - ROLEPLAY 1: HOLIDAY STORIES
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Holiday Story 🏝️",
        subtitle: "A = Interviewer | B = Storyteller",
        caseStudy: {
            scenario: "Wawancara tentang pengalaman liburan.",
            template: "A: Where did you go [last holiday/last week]?\nB: I went to _____.\nA: Who did you go with?\nB: I went with _____.\nA: What did you do there?\nB: I _____ and _____. I also _____.\nA: Did you like it?\nB: Yes, I _____ it very much!"
        },
        teacherNote: "GILIRAN MURID: Pair up. Encourage true stories or creative ones! Focus on V2 forms."
    },
    // SLIDE 12 - ROLEPLAY 2: WEEKEND UPDATE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Weekend Update 📅",
        subtitle: "A = News Reporter | B = Interviewee",
        caseStudy: {
            scenario: "Reporter bertanya tentang akhir pekan.",
            template: "A: Good morning! What did you do last weekend?\nB: Last weekend, I _____.\nA: Where did you go?\nB: I went to _____.\nA: Who were you with?\nB: I was with _____.\nA: Sounds fun! Thanks for sharing."
        },
        teacherNote: "Make it like a real TV interview! Practice clear speech and good posture."
    },
    // SLIDE 13 - MICRO-DRILL: V2 CHALLENGE
    {
        type: 'micro-drill',
        title: "V2 Challenge! 💪",
        subtitle: "Change to Past Tense!",
        mission: [
            "1. I go to the park. (yesterday) → I _____ to the park yesterday.",
            "2. I eat pizza. (last night) → I _____ pizza last night.",
            "3. I see a movie. (last week) → I _____ a movie last week.",
            "4. I have fun. (yesterday) → I _____ fun yesterday.",
            "5. I play games. (last Sunday) → I _____ games last Sunday."
        ],
        teacherNote: "Rapid fire! Call out present tense sentences, students respond with past tense."
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Pergi (lalu)", sayThis: "I went to Bali last week.", dontSayThis: "I go to Bali last week." },
            { context: "Makan (lalu)", sayThis: "I ate nasi goreng yesterday.", dontSayThis: "I eat nasi goreng yesterday." },
            { context: "Melihat (lalu)", sayThis: "I saw a beautiful sunset.", dontSayThis: "I see a beautiful sunset." },
            { context: "Bertanya (Did)", sayThis: "Where did you go?", dontSayThis: "Where you went?" },
            { context: "Waktu lampau", sayThis: "Last week, I visited my grandma.", dontSayThis: "Last week, I visit my grandma." }
        ],
        teacherNote: "Key takeaway: Time marker = V2 signal. Lock the timeline!"
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Holiday Diary: Tulis diary tentang liburan terakhirmu, minimal 5 kalimat past tense!",
            "2. Photo Story: Pilih 3 foto liburan, deskripsikan apa yang terjadi dalam Inggris!",
            "3. Interview Practice: Wawancarai orang tuamu: 'Where did you go last holiday?'"
        ],
        teacherNote: "Encourage kids to share their writings next class. Make it a storytelling session!"
    }
];

export const quiz: QuizQuestion[] = [
    // TIME MARKERS
    {
        question: "Which word tells us to use Past Tense?",
        options: ["Tomorrow", "Yesterday", "Now"],
        correctIndex: 1,
        explanation: "'Yesterday' means the past, so we use Past Tense (V2)!"
    },
    {
        question: "Which is a Past Tense time marker?",
        options: ["Next week", "Last week", "This week"],
        correctIndex: 1,
        explanation: "'Last week' indicates the past. 'Next week' is future!"
    },
    // V2 VERBS
    {
        question: "What is the Past Tense of 'go'?",
        options: ["goed", "went", "gone"],
        correctIndex: 1,
        explanation: "'Went' is the V2 (Past Tense) of 'go'. It's irregular!"
    },
    {
        question: "What is the Past Tense of 'eat'?",
        options: ["eated", "ate", "eaten"],
        correctIndex: 1,
        explanation: "'Ate' is the V2 (Past Tense) of 'eat'. It's irregular!"
    },
    {
        question: "What is the Past Tense of 'see'?",
        options: ["seed", "saw", "seen"],
        correctIndex: 1,
        explanation: "'Saw' is the V2 (Past Tense) of 'see'. It's irregular!"
    },
    {
        question: "What is the Past Tense of 'play'?",
        options: ["plaied", "played", "plaid"],
        correctIndex: 1,
        explanation: "'Played' is the V2. Regular verbs add -ed!"
    },
    {
        question: "What is the Past Tense of 'visit'?",
        options: ["visited", "visit", "visitted"],
        correctIndex: 0,
        explanation: "'Visited' is the V2. Just add -ed for regular verbs!"
    },
    // CORRECT SENTENCES
    {
        question: "Which sentence is CORRECT?",
        options: ["I go to Bali last week.", "I went to Bali last week.", "I going to Bali last week."],
        correctIndex: 1,
        explanation: "'I went to Bali last week' uses the correct V2 form."
    },
    {
        question: "Which sentence is CORRECT?",
        options: ["I eat pizza yesterday.", "I ate pizza yesterday.", "I eating pizza yesterday."],
        correctIndex: 1,
        explanation: "'I ate pizza yesterday' uses the correct V2 form."
    },
    {
        question: "Complete: Yesterday, I _____ my grandma.",
        options: ["visit", "visited", "visiting"],
        correctIndex: 1,
        explanation: "Use V2 after 'yesterday': 'I visited my grandma.'"
    },
    // QUESTIONS
    {
        question: "How do you ask about a past trip?",
        options: ["Where you went?", "Where did you go?", "Where you go?"],
        correctIndex: 1,
        explanation: "'Where did you go?' is correct. Questions use 'did + base verb'."
    },
    {
        question: "Complete: _____ did you do last weekend?",
        options: ["Where", "What", "Who"],
        correctIndex: 1,
        explanation: "'What did you do?' asks about activities."
    },
    {
        question: "Complete: _____ did you go with?",
        options: ["Where", "What", "Who"],
        correctIndex: 2,
        explanation: "'Who did you go with?' asks about people."
    },
    // NEGATIVES AND ANSWERS
    {
        question: "Complete: I _____ to the beach last Sunday.",
        options: ["go", "went", "going"],
        correctIndex: 1,
        explanation: "'Last Sunday' = past. Use V2: 'went'."
    },
    {
        question: "'I had a great time' means...",
        options: ["Saya punya waktu besar", "Saya bersenang-senang", "Saya punya jam"],
        correctIndex: 1,
        explanation: "'Had a great time' = had fun = bersenang-senang!"
    },
    {
        question: "Which is WRONG?",
        options: ["I saw a movie.", "I see a movie last night.", "I watched a movie."],
        correctIndex: 1,
        explanation: "'Last night' requires past tense: 'I saw' not 'I see.'"
    }
];
