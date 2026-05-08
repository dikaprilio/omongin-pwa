import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Tastebuds Adventure! 👅",
        subtitle: "Belajar Rasa dalam Bahasa Inggris"
    },
    // SLIDE 2 - ICEBREAKING: BEFORE WE BEGIN
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about food! 🍕",
        content: [
            "🤔 What is your favorite food? (Makanan favorit kamu apa?)",
            "🍦 Do you like ice cream? What flavor? (Suka es krim? Rasa apa?)",
            "🍋 Have you ever tasted something very sour? (Pernah makan yang asam banget?)",
            "🌶️ Do you like spicy food? (Suka makanan pedas?)",
            "🗣️ Do you know how to say 'manis' in English?"
        ],
        teacherNote: "Warming up! Tanya anak-anak satu per satu. Biarkan mereka jawab dalam Bahasa Indonesia dulu. Ini untuk membangun konteks sebelum masuk materi."
    },
    // SLIDE 3 - VOCABULARY TABLE 1: THE FIVE BASIC TASTES
    {
        type: 'vocabulary',
        title: "The Five Basic Tastes",
        subtitle: "Lima rasa dasar yang bisa kita rasakan",
        vocabulary: [
            { term: "Sweet", meaning: "Manis", example: "Candy is sweet. Ice cream is sweet." },
            { term: "Sour", meaning: "Asam", example: "Lemon is sour. Vinegar is sour." },
            { term: "Salty", meaning: "Asin", example: "Chips are salty. The sea is salty." },
            { term: "Bitter", meaning: "Pahit", example: "Coffee is bitter. Some medicine is bitter." },
            { term: "Umami", meaning: "Gurih (savory)", example: "Cheese is umami. Meat is umami." },
            { term: "Spicy", meaning: "Pedas", example: "Chili is spicy. Sambal is very spicy!" },
            { term: "Bland", meaning: "Hambar (tidak ada rasa)", example: "Plain rice is bland." },
            { term: "Tasty", meaning: "Enak/Lezat", example: "This food is very tasty!" },
            { term: "Delicious", meaning: "Sangat enak", example: "Mom's cooking is delicious!" },
            { term: "Yummy", meaning: "Enak (informal)", example: "Yummy! I love this cake!" }
        ],
        teacherNote: "Fokus pada 5 rasa dasar: Sweet, Sour, Salty, Bitter, Umami. Spicy sebenarnya bukan 'taste' tapi 'sensation', tapi untuk anak-anak boleh dimasukkan."
    },
    // SLIDE 4 - VOCABULARY TABLE 2: FOOD & TASTE WORDS
    {
        type: 'vocabulary',
        title: "Taste Words & Food Examples",
        subtitle: "Kata-kata rasa dan contoh makanannya",
        vocabulary: [
            // Sweet foods
            { term: "Candy", meaning: "Permen", example: "Candy is sweet." },
            { term: "Chocolate", meaning: "Cokelat", example: "Chocolate is sweet and yummy." },
            { term: "Honey", meaning: "Madu", example: "Honey is sweet like sugar." },
            { term: "Cake", meaning: "Kue", example: "Birthday cake is sweet." },
            // Sour foods
            { term: "Lemon", meaning: "Jeruk lemon", example: "Lemon is very sour!" },
            { term: "Orange", meaning: "Jeruk", example: "Oranges are sweet and a little sour." },
            { term: "Vinegar", meaning: "Cuka", example: "Vinegar is sour." },
            // Salty foods
            { term: "Chips", meaning: "Keripik", example: "Potato chips are salty." },
            { term: "French fries", meaning: "Kentang goreng", example: "French fries are salty and tasty." },
            { term: "Popcorn", meaning: "Popcorn", example: "Popcorn can be salty or sweet." },
            // Bitter foods
            { term: "Coffee", meaning: "Kopi", example: "Coffee is bitter." },
            { term: "Dark chocolate", meaning: "Cokelat pahit", example: "Dark chocolate is a little bitter." },
            // Spicy foods
            { term: "Chili", meaning: "Cabai", example: "Chili is very spicy!" },
            { term: "Pepper", meaning: "Lada/Merica", example: "Pepper makes food spicy." }
        ],
        teacherNote: "Latihan: Tunjuk gambar makanan, minta anak menyebut rasanya dalam Bahasa Inggris."
    },
    // SLIDE 5 - FORMULA: HOW TO DESCRIBE TASTE
    {
        type: 'formula',
        title: "How to Describe Taste",
        subtitle: "Cara mendeskripsikan rasa",
        formula: "[Food] is [taste]. / [Food] tastes [taste].",
        vocabulary: [
            { term: "This is sweet.", meaning: "Ini manis.", example: "This candy is sweet." },
            { term: "It tastes sour.", meaning: "Rasanya asam.", example: "It tastes sour like lemon." },
            { term: "This food is salty.", meaning: "Makanan ini asin.", example: "These chips are salty." },
            { term: "It's very spicy!", meaning: "Ini sangat pedas!", example: "Wow, it's very spicy!" },
            { term: "Yummy! It's delicious!", meaning: "Enak! Ini lezat!", example: "Yummy! This cake is delicious!" }
        ],
        teacherNote: "Dua cara: 'is + taste' atau 'tastes + taste'. Keduanya benar!"
    },
    // SLIDE 6 - FORMULA: ASKING ABOUT TASTE
    {
        type: 'formula',
        title: "How to Ask About Taste",
        subtitle: "Cara bertanya tentang rasa",
        formula: "How does it taste? / What does it taste like?",
        vocabulary: [
            { term: "How does it taste?", meaning: "Bagaimana rasanya?", example: "How does the soup taste?" },
            { term: "What does it taste like?", meaning: "Rasanya seperti apa?", example: "What does durian taste like?" },
            { term: "Is it sweet?", meaning: "Apakah ini manis?", example: "Is the juice sweet?" },
            { term: "Is it spicy?", meaning: "Apakah ini pedas?", example: "Is the sambal spicy?" },
            { term: "Do you like the taste?", meaning: "Kamu suka rasanya?", example: "Do you like the taste of coffee?" }
        ],
        teacherNote: "Latihan tanya jawab: A tanya, B jawab dengan rasa yang tepat."
    },
    // SLIDE 7 - FORMULA: EXPRESSING LIKES & DISLIKES
    {
        type: 'formula',
        title: "I Like / I Don't Like",
        subtitle: "Mengungkapkan suka atau tidak suka",
        formula: "I like [taste] food. / I don't like [taste] food.",
        vocabulary: [
            { term: "I like sweet food.", meaning: "Saya suka makanan manis.", example: "I like sweet food like candy." },
            { term: "I don't like bitter food.", meaning: "Saya tidak suka makanan pahit.", example: "I don't like bitter food like coffee." },
            { term: "I love spicy food!", meaning: "Saya suka banget makanan pedas!", example: "I love spicy food like sambal!" },
            { term: "I hate sour food.", meaning: "Saya benci makanan asam.", example: "I hate sour food like lemon." },
            { term: "Salty food is my favorite.", meaning: "Makanan asin adalah favoritku.", example: "Salty food like chips is my favorite." }
        ],
        teacherNote: "Minta anak-anak berbagi preferensi rasa masing-masing."
    },
    // SLIDE 8 - COMPARISON: DESCRIBING INTENSITY
    {
        type: 'comparison',
        title: "How Strong is the Taste?",
        subtitle: "Seberapa kuat rasanya?",
        comparison: [
            { wrong: "A little sweet (Agak manis)", right: "Very sweet (Sangat manis)" },
            { wrong: "A little sour (Agak asam)", right: "Very sour (Sangat asam)" },
            { wrong: "A little spicy (Agak pedas)", right: "Very spicy (Sangat pedas)" },
            { wrong: "Not too salty (Tidak terlalu asin)", right: "Too salty (Terlalu asin)" },
            { wrong: "Not bitter (Tidak pahit)", right: "So bitter! (Pahit banget!)" }
        ],
        teacherNote: "Ini bukan 'salah vs benar' tapi 'lemah vs kuat'. Ajarkan perbedaan intensitas rasa."
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Trying New Food 🍜",
        subtitle: "A = Friend 1 | B = Friend 2",
        caseStudy: {
            scenario: "Dua teman mencoba makanan baru bersama.",
            template: "A: Try this! It's really good!\nB: Okay! (tries it) Mmm, how does it taste?\nA: It's sweet and a little sour.\nB: Yummy! I like it!\nA: Do you want more?\nB: Yes, please!"
        },
        teacherNote: "Demo dengan murid. Teacher jadi A atau B, murid jadi partner."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: At a Restaurant 🍽️",
        subtitle: "A = Waiter | B = Customer",
        caseStudy: {
            scenario: "Di restoran, pelayan bertanya tentang makanan.",
            template: "A: How is your food?\nB: It's delicious! Very tasty.\nA: Is it too spicy?\nB: No, it's just right. Not too spicy.\nA: Great! Enjoy your meal!\nB: Thank you!"
        },
        teacherNote: "Roleplay: Satu jadi pelayan, satu jadi pelanggan."
    },
    // SLIDE 11 - ROLEPLAY PRACTICE 1
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Taste Test 🍬",
        subtitle: "A = Tester | B = Friend",
        caseStudy: {
            scenario: "Tes rasa! Coba makanan dan deskripsikan rasanya.",
            template: "A: Close your eyes and try this.\nB: Okay! (tries it) Hmm...\nA: How does it taste?\nB: It tastes [sweet/sour/salty]!\nA: Yes! It's [food name]!\nB: Yummy! / Yuck!"
        },
        teacherNote: "Bisa bawa permen atau snack berbeda rasa untuk latihan nyata."
    },
    // SLIDE 12 - ROLEPLAY PRACTICE 2
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Food Review 📝",
        subtitle: "A = Reviewer | B = Chef",
        caseStudy: {
            scenario: "Jadi food reviewer! Berikan pendapat tentang makanan.",
            template: "A: I'm going to try your [food].\nB: Please, go ahead!\nA: (tries it) Wow, this is [taste]!\nB: Do you like it?\nA: Yes! It's very delicious! / It's too [taste] for me.\nB: Thank you for the review!"
        },
        teacherNote: "Latih anak memberikan pendapat tentang makanan dengan kalimat yang sopan."
    },
    // SLIDE 13 - VOCABULARY: REACTIONS TO TASTE
    {
        type: 'vocabulary',
        title: "Taste Reactions",
        subtitle: "Reaksi saat merasakan makanan",
        vocabulary: [
            { term: "Yummy!", meaning: "Enak!", example: "Yummy! This is so good!" },
            { term: "Delicious!", meaning: "Lezat!", example: "Delicious! I want more!" },
            { term: "Yuck!", meaning: "Ih! (tidak enak)", example: "Yuck! This is too bitter!" },
            { term: "Mmm!", meaning: "Mmm! (enak)", example: "Mmm! I love this taste!" },
            { term: "Wow!", meaning: "Wow! (kaget)", example: "Wow! This is very spicy!" },
            { term: "Not bad.", meaning: "Lumayan.", example: "Not bad. I can eat this." },
            { term: "It's okay.", meaning: "Biasa saja.", example: "It's okay, not my favorite." },
            { term: "I love it!", meaning: "Aku suka banget!", example: "I love it! Can I have more?" }
        ],
        teacherNote: "Latih ekspresi wajah dan intonasi saat mengucapkan reaksi-reaksi ini."
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Lima Rasa", sayThis: "Sweet, Sour, Salty, Bitter, Umami", dontSayThis: "Manis, Asam, Asin, Pahit, Gurih" },
            { context: "Mendeskripsikan", sayThis: "It tastes sweet / This is salty", dontSayThis: "It sweet / This salty" },
            { context: "Bertanya", sayThis: "How does it taste?", dontSayThis: "What taste?" },
            { context: "Suka", sayThis: "I like sweet food", dontSayThis: "I like sweet" },
            { context: "Reaksi", sayThis: "Yummy! / Delicious!", dontSayThis: "Enak!" }
        ],
        teacherNote: "Review bersama-sama dan cek pemahaman anak."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time!",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Taste Detective: Makan sesuatu di rumah dan bilang rasanya dalam Bahasa Inggris!",
            "2. Food Diary: Tulis 5 makanan favorit dan rasanya (contoh: Ice cream - sweet).",
            "3. Taste Test: Minta keluarga coba makanan dengan mata tertutup dan tebak rasanya!"
        ],
        teacherNote: "Encourage anak untuk praktek di rumah saat makan. See you next time!"
    }
];

export const quiz: QuizQuestion[] = [
    // BASIC TASTES
    {
        question: "What is the English word for 'manis'?",
        options: ["Sour", "Sweet", "Salty"],
        correctIndex: 1,
        explanation: "Sweet means 'manis'. Candy and ice cream are sweet!"
    },
    {
        question: "What is the English word for 'asam'?",
        options: ["Sour", "Bitter", "Spicy"],
        correctIndex: 0,
        explanation: "Sour means 'asam'. Lemon is very sour!"
    },
    {
        question: "What is the English word for 'asin'?",
        options: ["Sweet", "Salty", "Bitter"],
        correctIndex: 1,
        explanation: "Salty means 'asin'. Chips and french fries are salty!"
    },
    {
        question: "What is the English word for 'pahit'?",
        options: ["Bitter", "Sour", "Bland"],
        correctIndex: 0,
        explanation: "Bitter means 'pahit'. Coffee is bitter!"
    },
    {
        question: "What is the English word for 'pedas'?",
        options: ["Salty", "Sour", "Spicy"],
        correctIndex: 2,
        explanation: "Spicy means 'pedas'. Chili and sambal are spicy!"
    },
    // FOOD EXAMPLES
    {
        question: "Lemon tastes...",
        options: ["Sweet", "Sour", "Salty"],
        correctIndex: 1,
        explanation: "Lemon tastes sour! It's very asam."
    },
    {
        question: "Candy tastes...",
        options: ["Bitter", "Salty", "Sweet"],
        correctIndex: 2,
        explanation: "Candy tastes sweet! Kids love sweet candy."
    },
    {
        question: "Coffee tastes...",
        options: ["Sweet", "Bitter", "Sour"],
        correctIndex: 1,
        explanation: "Coffee tastes bitter! That's why some people add sugar."
    },
    {
        question: "Chips are usually...",
        options: ["Sweet", "Sour", "Salty"],
        correctIndex: 2,
        explanation: "Chips are usually salty! Potato chips are salty snacks."
    },
    {
        question: "Chili is...",
        options: ["Sweet", "Spicy", "Bland"],
        correctIndex: 1,
        explanation: "Chili is spicy! Be careful, it's hot!"
    },
    // DESCRIBING TASTE
    {
        question: "How do you say 'Ini manis' in English?",
        options: ["This sweet.", "This is sweet.", "Is this sweet?"],
        correctIndex: 1,
        explanation: "The correct sentence is 'This is sweet.' Always use 'is' before the taste word!"
    },
    {
        question: "Complete: 'How does it ___?'",
        options: ["tastes", "taste", "tasting"],
        correctIndex: 1,
        explanation: "The correct question is 'How does it taste?' We use 'taste' (without 's') after 'does'."
    },
    {
        question: "'It tastes sour' means...",
        options: ["Rasanya manis", "Rasanya asam", "Rasanya asin"],
        correctIndex: 1,
        explanation: "'It tastes sour' means 'Rasanya asam'."
    },
    // EXPRESSING LIKES
    {
        question: "How do you say 'Saya suka makanan manis'?",
        options: ["I like sweet.", "I like sweet food.", "I sweet food."],
        correctIndex: 1,
        explanation: "The correct sentence is 'I like sweet food.' Don't forget 'food' after the taste!"
    },
    {
        question: "If you don't like bitter food, you say...",
        options: ["I not like bitter food.", "I don't like bitter food.", "I no like bitter food."],
        correctIndex: 1,
        explanation: "The correct sentence is 'I don't like bitter food.' Use 'don't like' for negatives."
    },
    // REACTIONS
    {
        question: "When food is delicious, you can say...",
        options: ["Yuck!", "Yummy!", "Yikes!"],
        correctIndex: 1,
        explanation: "'Yummy!' means the food is delicious! Use 'Yuck!' when food is not good."
    },
    {
        question: "'Yuck!' is used when...",
        options: ["Food is delicious", "Food is not good", "Food is salty"],
        correctIndex: 1,
        explanation: "'Yuck!' is used when you don't like the taste of something."
    },
    // INTENSITY
    {
        question: "'Very spicy' means...",
        options: ["Agak pedas", "Sangat pedas", "Tidak pedas"],
        correctIndex: 1,
        explanation: "'Very spicy' means 'sangat pedas'. 'A little spicy' means 'agak pedas'."
    },
    {
        question: "'Too salty' means...",
        options: ["Pas asinnya", "Terlalu asin", "Kurang asin"],
        correctIndex: 1,
        explanation: "'Too salty' means 'terlalu asin'. 'Too' means 'terlalu' - more than you want!"
    },
    // MIXED
    {
        question: "What does 'bland' mean?",
        options: ["Sangat enak", "Hambar/tidak ada rasa", "Sangat pedas"],
        correctIndex: 1,
        explanation: "'Bland' means 'hambar' - food with no strong taste."
    },
    // === QUESTIONS 21-30: INCREASED DIFFICULTY ===
    // Sentence completion
    {
        question: "Complete: 'This soup ___ a little salty.'",
        options: ["taste", "tastes", "tasting"],
        correctIndex: 1,
        explanation: "When the subject is 'soup' (singular), we use 'tastes' with an 's'."
    },
    {
        question: "Which sentence is CORRECT?",
        options: ["The cake taste sweet.", "The cake tastes sweet.", "The cake is taste sweet."],
        correctIndex: 1,
        explanation: "'The cake tastes sweet' is correct. We use 'tastes' (with 's') for third person singular."
    },
    // Combined tastes
    {
        question: "Orange juice is usually...",
        options: ["Only sweet", "Only sour", "Sweet and a little sour"],
        correctIndex: 2,
        explanation: "Orange juice has both sweet and sour tastes - it's a mix!"
    },
    {
        question: "Dark chocolate tastes...",
        options: ["Very sweet", "Bitter and a little sweet", "Salty"],
        correctIndex: 1,
        explanation: "Dark chocolate has a bitter taste with just a little sweetness."
    },
    // Context questions
    {
        question: "Your friend gives you food. It's not good but you want to be polite. You say:",
        options: ["Yuck! This is terrible!", "It's okay, not bad.", "I hate this food!"],
        correctIndex: 1,
        explanation: "'It's okay' or 'Not bad' are polite ways to respond when food isn't great."
    },
    {
        question: "You try something and love it! What do you say?",
        options: ["It's okay.", "Mmm! This is delicious!", "It's bland."],
        correctIndex: 1,
        explanation: "'Mmm! This is delicious!' shows you really enjoy the food."
    },
    // Grammar with negatives
    {
        question: "How do you say 'Makanan ini tidak terlalu pedas'?",
        options: ["This food is not too spicy.", "This food not too spicy.", "This food is no spicy."],
        correctIndex: 0,
        explanation: "The correct sentence is 'This food is not too spicy' with 'is not'."
    },
    {
        question: "Complete: 'I ___ like the taste. It's too bitter.'",
        options: ["doesn't", "don't", "not"],
        correctIndex: 1,
        explanation: "With 'I', we use 'don't like' (not 'doesn't' or 'not')."
    },
    // Comparative
    {
        question: "'This is sweeter than that' means...",
        options: ["Ini sama manisnya", "Ini lebih manis dari itu", "Ini tidak manis"],
        correctIndex: 1,
        explanation: "'Sweeter than' means 'lebih manis dari'. We add '-er' to compare tastes."
    },
    // Tricky vocabulary
    {
        question: "What is 'savory' food?",
        options: ["Makanan manis", "Makanan gurih (not sweet)", "Makanan pahit"],
        correctIndex: 1,
        explanation: "'Savory' means 'gurih' - food that is salty or umami, NOT sweet."
    }
];
