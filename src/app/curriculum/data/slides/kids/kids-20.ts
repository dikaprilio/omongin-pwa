import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Superheroes! 🦸",
        subtitle: "Creating Your Own Hero with Can/Can't",
        teacherNote: "Goal: Anak bisa menggunakan 'can' dan 'can't' dengan lancar untuk mendeskripsikan kemampuan superhero mereka sendiri."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about superheroes! 🦸‍♀️",
        content: [
            "🦸 Who is your favorite superhero? (Superhero favoritmu siapa?)",
            "💪 What can Superman do? (Apa yang bisa dilakukan Superman?)",
            "🕷️ What can Spider-Man do? (Apa yang bisa dilakukan Spider-Man?)",
            "⚡ If you had superpowers, what would you want? (Kamu mau kekuatan apa?)",
            "🦹 Would you be a hero or a villain? (Mau jadi pahlawan atau penjahat?)"
        ],
        teacherNote: "Warming up! Kids love superheroes! Let them be enthusiastic and creative."
    },
    // SLIDE 3 - FAMOUS SUPERHEROES
    {
        type: 'vocabulary',
        title: "Famous Superheroes 🦸",
        subtitle: "Superhero terkenal",
        vocabulary: [
            { term: "Superman", meaning: "Superman", example: "Superman can fly. He is super strong." },
            { term: "Batman", meaning: "Batman", example: "Batman can't fly, but he can fight well." },
            { term: "Spider-Man", meaning: "Spider-Man", example: "Spider-Man can climb walls. He can shoot webs." },
            { term: "Wonder Woman", meaning: "Wonder Woman", example: "Wonder Woman can fly. She is very strong." },
            { term: "Iron Man", meaning: "Iron Man", example: "Iron Man can fly with his suit. He is smart." },
            { term: "The Flash", meaning: "The Flash", example: "The Flash can run super fast!" },
            { term: "Hulk", meaning: "Hulk", example: "Hulk is super strong. He can lift heavy things." },
            { term: "Captain America", meaning: "Captain America", example: "Captain America can throw his shield." }
        ],
        teacherNote: "Ask: 'What can [superhero] do?' Get kids to describe powers in English."
    },
    // SLIDE 4 - SUPERPOWERS
    {
        type: 'vocabulary',
        title: "Superpowers 💥",
        subtitle: "Kekuatan super",
        vocabulary: [
            { term: "Fly", meaning: "Terbang", example: "Superman can fly in the sky." },
            { term: "Be invisible", meaning: "Menjadi tidak terlihat", example: "I can be invisible. No one can see me!" },
            { term: "Read minds", meaning: "Membaca pikiran", example: "I can read minds. I know what you're thinking!" },
            { term: "Super strength", meaning: "Kekuatan super", example: "I have super strength. I can lift cars!" },
            { term: "Super speed", meaning: "Kecepatan super", example: "I have super speed. I can run faster than a car!" },
            { term: "Teleport", meaning: "Teleportasi", example: "I can teleport. I can go anywhere instantly!" },
            { term: "Breathe underwater", meaning: "Bernapas di bawah air", example: "I can breathe underwater like a fish!" },
            { term: "Shoot lasers", meaning: "Menembak laser", example: "I can shoot lasers from my eyes!" },
            { term: "Shape shift", meaning: "Mengubah bentuk", example: "I can shape shift. I can look like anyone!" },
            { term: "Control weather", meaning: "Mengendalikan cuaca", example: "I can control weather. I can make it rain!" }
        ],
        teacherNote: "Encourage creativity! What other powers can they think of?"
    },
    // SLIDE 5 - FORMULA: CAN / CAN'T
    {
        type: 'formula',
        title: "Can & Can't for Superpowers",
        subtitle: "Bisa dan Tidak Bisa untuk kekuatan super",
        formula: "Subject + can/can't + base verb",
        vocabulary: [
            { term: "I can fly.", meaning: "Saya bisa terbang.", example: "I can fly like a bird!" },
            { term: "I can't fly.", meaning: "Saya tidak bisa terbang.", example: "I can't fly, but I can jump high." },
            { term: "He can swim.", meaning: "Dia bisa berenang.", example: "Aquaman can swim very fast." },
            { term: "She can't read minds.", meaning: "Dia tidak bisa baca pikiran.", example: "She can't read minds, but she is smart." },
            { term: "We can work together.", meaning: "Kita bisa kerja sama.", example: "We can work together to save the day!" },
            { term: "They can't lose!", meaning: "Mereka tidak bisa kalah!", example: "They can't lose with our help!" }
        ],
        teacherNote: "Remind: After 'can/can't', always use base verb (no -s, no -ing, no -ed)."
    },
    // SLIDE 6 - SUPERHERO DESCRIPTION
    {
        type: 'formula',
        title: "Describing Your Superhero",
        subtitle: "Mendeskripsikan superhero",
        formula: "Name + Costume + Powers",
        vocabulary: [
            { term: "My superhero name is...", meaning: "Nama superhero saya adalah...", example: "My superhero name is Thunder Girl!" },
            { term: "He/She wears...", meaning: "Dia memakai...", example: "She wears a red cape and a blue mask." },
            { term: "His/Her superpower is...", meaning: "Kekuatannya adalah...", example: "Her superpower is controlling fire." },
            { term: "He/She can...", meaning: "Dia bisa...", example: "She can fly and shoot fire." },
            { term: "He/She can't...", meaning: "Dia tidak bisa...", example: "She can't swim, but she can fly!" },
            { term: "His/Her weakness is...", meaning: "Kelemahannya adalah...", example: "Her weakness is water." }
        ],
        teacherNote: "Guide kids to create a complete character: name, costume, powers, weakness."
    },
    // SLIDE 7 - ADJECTIVES FOR HEROES
    {
        type: 'vocabulary',
        title: "Describing Superheroes 💪",
        subtitle: "Kata sifat untuk superhero",
        vocabulary: [
            { term: "Strong", meaning: "Kuat", example: "My hero is very strong." },
            { term: "Fast", meaning: "Cepat", example: "My hero is super fast." },
            { term: "Brave", meaning: "Berani", example: "My hero is brave. He is not afraid." },
            { term: "Smart / Clever", meaning: "Pintar / Cerdik", example: "My hero is smart. She solves problems." },
            { term: "Kind", meaning: "Baik hati", example: "My hero is kind. She helps everyone." },
            { term: "Powerful", meaning: "Kuat / Berkekuatan besar", example: "My hero is very powerful." },
            { term: "Mysterious", meaning: "Misterius", example: "My hero is mysterious. No one knows his name." },
            { term: "Heroic", meaning: "Heroik / Pahlawan", example: "My hero is heroic. He saves people." }
        ],
        teacherNote: "These adjectives make descriptions more interesting! 'My hero is strong AND kind!'"
    },
    // SLIDE 8 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "I can flies.", right: "I can fly." },
            { wrong: "He can swimming.", right: "He can swim." },
            { wrong: "She can to run fast.", right: "She can run fast." },
            { wrong: "They can runs.", right: "They can run." },
            { wrong: "My hero can invisible.", right: "My hero can be invisible." }
        ],
        teacherNote: "Key rule: After 'can', use base verb ONLY. No -s, no -ing, no 'to'."
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Creating a Hero 🦸",
        subtitle: "Designing your own superhero",
        caseStudy: {
            scenario: "Membahas superhero yang akan dibuat.",
            template: "A: Let's create a superhero! What's the name?\nB: My superhero is called 'Lightning Boy'!\nA: Cool! What can he do?\nB: He can run super fast, like lightning! He can also shoot electricity.\nA: What can't he do?\nB: He can't fly, but he can jump very high!\nA: What's his weakness?\nB: His weakness is rubber. Electricity can't go through rubber!"
        },
        teacherNote: "DEMO: Create a hero together as a class first. Then let kids create their own."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Hero vs Hero 🥊",
        subtitle: "Comparing superheroes",
        caseStudy: {
            scenario: "Membandingkan kemampuan dua superhero.",
            template: "A: Can your hero fly?\nB: Yes, she can fly. Can your hero fly?\nA: No, he can't fly. But he can climb walls!\nB: Wow! What else can he do?\nA: He can lift heavy things. He is super strong!\nB: My hero can control water. She can make big waves!\nA: If they fight, who would win?\nB: Hmm, maybe they should work together instead!"
        },
        teacherNote: "Show how to compare using can/can't. Encourage friendly comparisons!"
    },
    // SLIDE 11 - ROLEPLAY 1: HERO INTERVIEW
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Hero Interview 🎤",
        subtitle: "A = Reporter | B = Superhero",
        caseStudy: {
            scenario: "Reporter mewawancarai superhero.",
            template: "A: What's your superhero name?\nB: I'm _____.\nA: What can you do?\nB: I can _____. I can also _____.\nA: What can't you do?\nB: I can't _____, but I can _____.\nA: What's your weakness?\nB: My weakness is _____.\nA: Thank you, hero! Keep saving the world!"
        },
        teacherNote: "GILIRAN MURID: Let kids introduce their created heroes with pride!"
    },
    // SLIDE 12 - ROLEPLAY 2: HERO ACADEMY
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Hero Academy 🏫",
        subtitle: "A = Teacher | B = New Student",
        caseStudy: {
            scenario: "Guru Akademi Hero bertanya pada murid baru.",
            template: "A: Welcome to Hero Academy! What powers do you have?\nB: I can _____.\nA: Impressive! Can you also _____?\nB: No, I can't _____, but I can _____.\nA: Every hero has strengths and weaknesses. Can you work in a team?\nB: Yes! I can work with other heroes.\nA: Great! You're accepted!"
        },
        teacherNote: "FUN SCENARIO: Make it feel like a real superhero school!"
    },
    // SLIDE 13 - MICRO-DRILL: CAN OR CAN'T
    {
        type: 'micro-drill',
        title: "Can or Can't Challenge! 💪",
        subtitle: "Decide if heroes CAN or CAN'T",
        mission: [
            "1. Humans _____ fly like birds. (can/can't)",
            "2. Fish _____ breathe underwater. (can/can't)",
            "3. Superman _____ lift heavy things. (can/can't)",
            "4. Batman _____ shoot lasers from his eyes. (can/can't)",
            "5. My hero _____ [create your own!]"
        ],
        teacherNote: "Rapid fire! Mix real and superhero abilities. Make it fun!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Bisa terbang", sayThis: "I can fly.", dontSayThis: "I can flying." },
            { context: "Tidak bisa berenang", sayThis: "I can't swim.", dontSayThis: "I can not swim." },
            { context: "Dia bisa lari", sayThis: "He can run fast.", dontSayThis: "He can runs fast." },
            { context: "Menjadi tidak terlihat", sayThis: "I can be invisible.", dontSayThis: "I can invisible." },
            { context: "Kerja sama", sayThis: "We can work together.", dontSayThis: "We can to work together." }
        ],
        teacherNote: "Key rule: can/can't + base verb only! No -s, no -ing, no 'to'."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Design Your Hero: Gambar superhero-mu dengan kostum dan tulis: nama, kekuatan (can), kelemahan (can't)!",
            "2. Hero Comic: Buat komik 4 panel tentang superhero-mu menyelamatkan hari!",
            "3. Hero Profile: Buat kartu profil hero lengkap dengan gambar dan deskripsi dalam Inggris!"
        ],
        teacherNote: "Creative project! Let kids go wild with their imagination. Display their work proudly!"
    }
];

export const quiz: QuizQuestion[] = [
    // SUPERHERO VOCABULARY
    {
        question: "Which superhero can shoot webs?",
        options: ["Superman", "Spider-Man", "Batman"],
        correctIndex: 1,
        explanation: "Spider-Man can shoot webs from his hands!"
    },
    {
        question: "Which superhero is super strong and green?",
        options: ["Hulk", "The Flash", "Iron Man"],
        correctIndex: 0,
        explanation: "Hulk is super strong and turns green when angry!"
    },
    {
        question: "Which superhero can run super fast?",
        options: ["Hulk", "The Flash", "Batman"],
        correctIndex: 1,
        explanation: "The Flash can run faster than anyone!"
    },
    // SUPERPOWERS
    {
        question: "If you can go anywhere instantly, you can...",
        options: ["fly", "teleport", "read minds"],
        correctIndex: 1,
        explanation: "Teleport means to move instantly from one place to another!"
    },
    {
        question: "If no one can see you, you are...",
        options: ["flying", "invisible", "strong"],
        correctIndex: 1,
        explanation: "Being invisible means no one can see you!"
    },
    {
        question: "If you can lift heavy things, you have...",
        options: ["super speed", "super strength", "invisibility"],
        correctIndex: 1,
        explanation: "Super strength means you are super strong!"
    },
    // CAN / CAN'T GRAMMAR
    {
        question: "Complete: I _____ fly like a bird.",
        options: ["can", "cans", "can to"],
        correctIndex: 0,
        explanation: "'Can' never changes. Just 'can' + base verb."
    },
    {
        question: "Complete: She _____ swim. (negatif)",
        options: ["can", "can't", "cannots"],
        correctIndex: 1,
        explanation: "Can't = cannot = tidak bisa."
    },
    {
        question: "Which is CORRECT?",
        options: ["I can flies.", "I can fly.", "I can flying."],
        correctIndex: 1,
        explanation: "After 'can', use base verb only: 'I can fly.'"
    },
    {
        question: "Which is CORRECT?",
        options: ["He can runs fast.", "He can run fast.", "He can running fast."],
        correctIndex: 1,
        explanation: "After 'can', no -s: 'He can run fast.'"
    },
    {
        question: "Complete: They _____ (can/not) lose!",
        options: ["can", "can't", "can not"],
        correctIndex: 1,
        explanation: "Can't = can not. The contraction is more common."
    },
    // ADJECTIVES
    {
        question: "If a hero is not afraid, he is...",
        options: ["weak", "brave", "slow"],
        correctIndex: 1,
        explanation: "Brave means berani - not afraid!"
    },
    {
        question: "If a hero helps everyone, he is...",
        options: ["mean", "kind", "lazy"],
        correctIndex: 1,
        explanation: "Kind means baik hati - helping others!"
    },
    {
        question: "A synonym for 'strong' is...",
        options: ["weak", "powerful", "slow"],
        correctIndex: 1,
        explanation: "Powerful means having great power/strength!"
    },
    // COMPREHENSION
    {
        question: "What does 'weakness' mean?",
        options: ["Kekuatan", "Kelemahan", "Kostum"],
        correctIndex: 1,
        explanation: "Weakness = kelemahan (the opposite of strength)."
    },
    {
        question: "Complete: I can _____ invisible.",
        options: ["be", "being", "am"],
        correctIndex: 0,
        explanation: "'Can' + be + adjective: 'I can be invisible.'"
    },
    // REALITY vs FANTASY
    {
        question: "In real life, people _____ fly without machines.",
        options: ["can", "can't", "sometimes can"],
        correctIndex: 1,
        explanation: "In real life, people can't fly without airplanes or helicopters!"
    },
    {
        question: "Fish _____ breathe underwater.",
        options: ["can", "can't", "never"],
        correctIndex: 0,
        explanation: "Fish can breathe underwater using their gills!"
    },
    {
        question: "Humans _____ read minds.",
        options: ["can", "can't", "sometimes can"],
        correctIndex: 1,
        explanation: "In real life, humans can't read minds. That's superpower fantasy!"
    },
    // SENTENCE STRUCTURE
    {
        question: "Complete: My hero _____ run super fast.",
        options: ["can", "cans", "can to"],
        correctIndex: 0,
        explanation: "'Can' doesn't change for he/she/it. Always 'can'."
    },
    {
        question: "Which sentence has correct word order?",
        options: ["Can fly he?", "He can fly?", "Can he fly?"],
        correctIndex: 2,
        explanation: "Questions: 'Can + subject + verb?' → 'Can he fly?'"
    }
];
