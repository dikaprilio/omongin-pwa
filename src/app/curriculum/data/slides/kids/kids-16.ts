import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "The Weather Reporter ☀️",
        subtitle: "Describing Weather & Seasons",
        teacherNote: "Goal: Anak bisa mendeskripsikan cuaca, memilih pakaian yang sesuai, dan mempraktikkan roleplay sebagai reporter cuaca cilik dengan percaya diri."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about weather! 🌤️",
        content: [
            "☀️ What's the weather like today? (Cuaca hari ini gimana?)",
            "🌧️ Do you like rainy days? (Suka hari hujan?)",
            "☃️ Have you ever seen snow? (Pernah lihat salju?)",
            "🌈 What season do you like best? (Musim apa yang paling disukai?)",
            "👕 What do you wear when it's hot? (Pakai apa saat panas?)"
        ],
        teacherNote: "Warming up! Look outside or check a weather app together. Connect weather to real life!"
    },
    // SLIDE 3 - VOCABULARY: WEATHER TYPES
    {
        type: 'vocabulary',
        title: "Weather Types 🌦️",
        subtitle: "Jenis-jenis cuaca",
        vocabulary: [
            { term: "Sunny", meaning: "Cerah / Terik", example: "It's sunny today. Let's go outside!" },
            { term: "Cloudy", meaning: "Berawan", example: "It's cloudy. The sun is hiding." },
            { term: "Rainy", meaning: "Hujan", example: "It's rainy. Don't forget your umbrella!" },
            { term: "Windy", meaning: "Berangin", example: "It's windy. Hold your hat!" },
            { term: "Stormy", meaning: "Badai", example: "It's stormy. Stay inside!" },
            { term: "Hot", meaning: "Panas", example: "It's hot today. Drink water!" },
            { term: "Warm", meaning: "Hangat", example: "It's warm. Perfect weather!" },
            { term: "Cool", meaning: "Sejuk", example: "It's cool. Nice breeze!" },
            { term: "Cold", meaning: "Dingin", example: "It's cold. Wear a jacket!" },
            { term: "Freezing", meaning: "Sangat dingin / Beku", example: "It's freezing! Brrr!" },
            { term: "Humid", meaning: "Lembap", example: "It's humid. I feel sticky." },
            { term: "Dry", meaning: "Kering", example: "It's dry. My skin feels tight." }
        ],
        teacherNote: "Act out the weather! Fan yourself for hot, shiver for cold, hold umbrella for rain!"
    },
    // SLIDE 4 - VOCABULARY: SEASONS
    {
        type: 'vocabulary',
        title: "The Four Seasons 🍂",
        subtitle: "Empat musim",
        vocabulary: [
            { term: "Spring", meaning: "Musim semi", example: "In spring, flowers bloom." },
            { term: "Summer", meaning: "Musim panas", example: "In summer, it's very hot." },
            { term: "Fall / Autumn", meaning: "Musim gugur", example: "In fall, leaves change color." },
            { term: "Winter", meaning: "Musim dingin", example: "In winter, it can snow." },
            { term: "Wet season", meaning: "Musim hujan", example: "Indonesia has a wet season." },
            { term: "Dry season", meaning: "Musim kemarau", example: "The dry season is hot and sunny." }
        ],
        teacherNote: "Explain: Indonesia has wet/dry seasons, not four seasons like countries with snow."
    },
    // SLIDE 5 - FORMULA: ASKING ABOUT WEATHER
    {
        type: 'formula',
        title: "How to Talk About Weather",
        subtitle: "Cara membicarakan cuaca",
        formula: "What's the weather like? / It's [weather].",
        vocabulary: [
            { term: "What's the weather like?", meaning: "Cuacanya gimana?", example: "What's the weather like today?" },
            { term: "How's the weather?", meaning: "Bagaimana cuacanya?", example: "How's the weather in Jakarta?" },
            { term: "It's sunny.", meaning: "Cerah.", example: "It's sunny and hot!" },
            { term: "It's raining.", meaning: "Sedang hujan.", example: "It's raining. Take an umbrella!" },
            { term: "The weather is nice.", meaning: "Cuacanya bagus.", example: "The weather is nice today." },
            { term: "The weather is terrible!", meaning: "Cuacanya buruk!", example: "The weather is terrible! It's stormy!" }
        ],
        teacherNote: "Practice the question 'What's the weather like?' - the most common weather question!"
    },
    // SLIDE 6 - FORMULA: CLOTHES FOR WEATHER
    {
        type: 'formula',
        title: "Clothes for Different Weather",
        subtitle: "Pakaian untuk cuaca berbeda",
        formula: "When it's [weather], I wear [clothes].",
        vocabulary: [
            { term: "When it's hot", meaning: "Saat panas", example: "When it's hot, I wear a T-shirt." },
            { term: "When it's cold", meaning: "Saat dingin", example: "When it's cold, I wear a sweater." },
            { term: "When it's rainy", meaning: "Saat hujan", example: "When it's rainy, I carry an umbrella." },
            { term: "When it's sunny", meaning: "Saat cerah", example: "When it's sunny, I wear a hat." },
            { term: "sunglasses", meaning: "Kacamata hitam", example: "I wear sunglasses when it's sunny." },
            { term: "raincoat", meaning: "Jas hujan", example: "I wear a raincoat when it's rainy." },
            { term: "boots", meaning: "Sepatu boot", example: "I wear boots when it's rainy." }
        ],
        teacherNote: "Props Hunt: Ask kids to find something they'd wear on a rainy day / sunny day!"
    },
    // SLIDE 7 - TEMPERATURE
    {
        type: 'vocabulary',
        title: "Temperature Words 🌡️",
        subtitle: "Kata-kata suhu",
        vocabulary: [
            { term: "Degrees", meaning: "Derajat", example: "It's 30 degrees today." },
            { term: "Celsius", meaning: "Celcius", example: "The temperature is 25 degrees Celsius." },
            { term: "Temperature", meaning: "Suhu", example: "What's the temperature today?" },
            { term: "High", meaning: "Tinggi (suhu)", example: "The temperature is very high!" },
            { term: "Low", meaning: "Rendah (suhu)", example: "The temperature is low tonight." },
            { term: "Boiling", meaning: "Sangat panas (bahasa figuratif)", example: "It's boiling outside!" },
            { term: "Mild", meaning: "Sedang (tidak panas tidak dingin)", example: "The weather is mild today." }
        ],
        teacherNote: "Check the actual temperature together! Practice saying numbers in English."
    },
    // SLIDE 8 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "Today is rain.", right: "Today is rainy. / It's raining." },
            { wrong: "The weather is sun.", right: "The weather is sunny." },
            { wrong: "I wear jacket when cold.", right: "I wear a jacket when it's cold." },
            { wrong: "What's the weather today?", right: "What's the weather like today?" },
            { wrong: "It's very hotly.", right: "It's very hot." }
        ],
        teacherNote: "Weather words are adjectives: sunny (not sun), rainy (not rain), cloudy (not cloud)."
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Talking About Weather 🌤️",
        subtitle: "Daily weather chat",
        caseStudy: {
            scenario: "Percakapan sehari-hari tentang cuaca.",
            template: "A: Hi! What's the weather like today?\nB: It's sunny and hot!\nA: What's the temperature?\nB: It's about 32 degrees Celsius.\nA: What are you wearing today?\nB: I'm wearing a T-shirt and shorts.\nA: Don't forget your sunscreen!"
        },
        teacherNote: "DEMO: Check real weather together. Ask about temperature and appropriate clothes."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2: WEATHER REPORT
    {
        type: 'case-study',
        title: "Conversation 2: Weather Report 📺",
        subtitle: "Being a weather reporter",
        caseStudy: {
            scenario: "Seorang reporter cuaca melaporkan ramalan cuaca.",
            template: "A: Good morning! This is your weather report.\nB: Good morning! What's the weather today?\nA: Today will be sunny in the morning and cloudy in the afternoon.\nB: Will it rain?\nA: There's a small chance of rain in the evening.\nB: What should people wear?\nA: Wear light clothes and bring an umbrella, just in case!"
        },
        teacherNote: "MODEL: Show how a weather reporter speaks - clear, confident, enthusiastic!"
    },
    // SLIDE 11 - ROLEPLAY 1: DRESS FOR THE WEATHER
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Dress for the Weather 👕",
        subtitle: "A = Weather Advisor | B = Friend",
        caseStudy: {
            scenario: "Memberi saran pakaian berdasarkan cuaca.",
            template: "A: It's [weather] today!\nB: Oh no! / Great!\nA: You should wear _____.\nB: Good idea! What else?\nA: Don't forget your _____!\nB: Thanks for the advice!"
        },
        teacherNote: "GILIRAN MURID: Give different weather scenarios, students suggest appropriate clothes."
    },
    // SLIDE 12 - ROLEPLAY 2: TV WEATHER REPORTER
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Weather Reporter 📺",
        subtitle: "Be a confident weather reporter!",
        caseStudy: {
            scenario: "Anak mempraktikkan menjadi reporter cuaca.",
            template: "Reporter: Good [morning/afternoon]! This is [name] with the weather report.\nToday, the weather is _____.\nThe temperature is _____ degrees.\nIt will be _____ in the morning.\nIn the afternoon, it will be _____.\nDon't forget to wear _____!\nBack to you!"
        },
        teacherNote: "FUN ACTIVITY: Kids stand up like real TV reporters! Practice eye contact and clear voice."
    },
    // SLIDE 13 - MICRO-DRILL: WEATHER CHARADES
    {
        type: 'micro-drill',
        title: "Weather Charades! 🎭",
        subtitle: "Act out the weather!",
        mission: [
            "1. Act SUNNY: Big smile, fan yourself, say 'It's hot!'",
            "2. Act RAINY: Hold umbrella, make rain sounds, say 'It's raining!'",
            "3. Act COLD: Shiver, hug yourself, say 'Brrr, it's cold!'",
            "4. Act WINDY: Hold your hat, sway side to side, say 'It's windy!'",
            "5. Act SNOWY: Pretend to catch snow, shiver happily, say 'It's snowing!'"
        ],
        teacherNote: "TPR TIME! Kids act out weather while others guess. Make it energetic and fun!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Tanya cuaca", sayThis: "What's the weather like?", dontSayThis: "How is weather?" },
            { context: "Jawab cuaca", sayThis: "It's sunny.", dontSayThis: "It is sun." },
            { context: "Pakaian", sayThis: "When it's hot, I wear a T-shirt.", dontSayThis: "When hot I wear shirt." },
            { context: "Suhu", sayThis: "It's 30 degrees Celsius.", dontSayThis: "It 30 degree." },
            { context: "Musim", sayThis: "Indonesia has a wet season.", dontSayThis: "Indonesia have wet." }
        ],
        teacherNote: "Review together. Practice asking and answering about real weather outside."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Weather Diary: Buat diary cuaca 3 hari - tulis cuaca dan pakaian yang kamu pakai!",
            "2. Weather Report Video: Rekam dirimu jadi reporter cuaca selama 30 detik!",
            "3. Dress the Weather: Gambar orang dengan pakaian yang sesuai cuaca (panas, hujan, dingin)!"
        ],
        teacherNote: "Encourage kids to watch real weather reports on TV or YouTube for inspiration!"
    }
];

export const quiz: QuizQuestion[] = [
    // WEATHER VOCABULARY
    {
        question: "When the sun is shining bright, it is...",
        options: ["Rainy", "Sunny", "Cloudy"],
        correctIndex: 1,
        explanation: "When the sun shines bright, the weather is sunny!"
    },
    {
        question: "When water falls from the sky, it is...",
        options: ["Windy", "Rainy", "Snowy"],
        correctIndex: 1,
        explanation: "When water falls from the sky, it's rainy!"
    },
    {
        question: "When clouds cover the sky, it is...",
        options: ["Sunny", "Cloudy", "Hot"],
        correctIndex: 1,
        explanation: "When clouds cover the sky, it's cloudy!"
    },
    {
        question: "When the wind blows strongly, it is...",
        options: ["Stormy", "Windy", "Rainy"],
        correctIndex: 1,
        explanation: "When wind blows strongly, it's windy!"
    },
    {
        question: "When it's very, very cold, we say it's...",
        options: ["Cool", "Cold", "Freezing"],
        correctIndex: 2,
        explanation: "When it's extremely cold, we say 'freezing'!"
    },
    // SEASONS
    {
        question: "What season comes after winter?",
        options: ["Summer", "Spring", "Fall"],
        correctIndex: 1,
        explanation: "Spring comes after winter. Flowers bloom in spring!"
    },
    {
        question: "What season is the hottest?",
        options: ["Winter", "Spring", "Summer"],
        correctIndex: 2,
        explanation: "Summer is the hottest season!"
    },
    {
        question: "In Indonesia, we have wet season and...",
        options: ["Snow season", "Dry season", "Spring season"],
        correctIndex: 1,
        explanation: "Indonesia has wet season and dry season!"
    },
    // CLOTHES FOR WEATHER
    {
        question: "What should you wear when it's sunny?",
        options: ["Raincoat", "Sunglasses", "Boots"],
        correctIndex: 1,
        explanation: "We wear sunglasses when it's sunny to protect our eyes!"
    },
    {
        question: "What should you carry when it's rainy?",
        options: ["Fan", "Umbrella", "Sunglasses"],
        correctIndex: 1,
        explanation: "We carry an umbrella when it's rainy!"
    },
    {
        question: "What should you wear when it's cold?",
        options: ["T-shirt", "Shorts", "Sweater"],
        correctIndex: 2,
        explanation: "We wear a sweater or jacket when it's cold!"
    },
    // GRAMMAR
    {
        question: "Which is the CORRECT question?",
        options: ["How is weather?", "What's the weather like?", "What the weather?"],
        correctIndex: 1,
        explanation: "'What's the weather like?' is the correct question."
    },
    {
        question: "Complete: _____ the weather like today?",
        options: ["How's", "What's", "How"],
        correctIndex: 1,
        explanation: "'What's the weather like?' - Use 'what' with 'like'."
    },
    {
        question: "Which is CORRECT?",
        options: ["Today is rain.", "Today is rainy.", "Today rain."],
        correctIndex: 1,
        explanation: "'Today is rainy' - use the adjective form (rainy, not rain)."
    },
    {
        question: "Complete: When it's hot, I _____ a T-shirt.",
        options: ["wear", "wears", "wearing"],
        correctIndex: 0,
        explanation: "'I wear' - no 's' needed for I/You/We/They."
    },
    // TEMPERATURE
    {
        question: "How do we measure temperature?",
        options: ["In meters", "In degrees", "In liters"],
        correctIndex: 1,
        explanation: "We measure temperature in degrees (Celsius or Fahrenheit)!"
    },
    {
        question: "If the weather is not hot and not cold, it is...",
        options: ["Freezing", "Mild", "Boiling"],
        correctIndex: 1,
        explanation: "Mild weather is not too hot and not too cold - just right!"
    },
    // CORRECT EXPRESSIONS
    {
        question: "How do you ask about the weather?",
        options: ["How's weather?", "What's the weather like?", "What weather today?"],
        correctIndex: 1,
        explanation: "The correct question is 'What's the weather like?'"
    },
    {
        question: "What do you say when it's 0 degrees?",
        options: ["It's hot!", "It's freezing!", "It's warm!"],
        correctIndex: 1,
        explanation: "At 0 degrees, we say 'It's freezing!' because it's very cold!"
    }
];
