import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Amazing Animals 🦁",
        subtitle: "Describing Animals & Their Abilities",
        teacherNote: "Goal: Anak bisa mendeskripsikan hewan menggunakan ciri-ciri fisik dan kemampuannya (can/can't) serta bermain tebak-tebakan hewan."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about animals! 🐘",
        content: [
            "🦁 What is your favorite animal? (Hewan favoritmu?)",
            "🏠 Do you have a pet at home? (Punya peliharaan?)",
            "🐯 Have you been to the zoo? (Pernah ke kebun binatang?)",
            "🐦 Can you name 5 animals that can fly? (Sebutkan 5 hewan yang bisa terbang!)",
            "🐟 What animals live in the water? (Hewan apa yang tinggal di air?)"
        ],
        teacherNote: "Warming up! Kids usually love animals. Get them excited with animal sounds! 🦁 Roar! 🐘 Trumpet!"
    },
    // SLIDE 3 - VOCABULARY: ANIMAL CATEGORIES
    {
        type: 'vocabulary',
        title: "Animal Categories 🐾",
        subtitle: "Kategori hewan",
        vocabulary: [
            { term: "Wild animals", meaning: "Hewan liar", example: "Lions and tigers are wild animals." },
            { term: "Farm animals", meaning: "Hewan ternak", example: "Cows and chickens are farm animals." },
            { term: "Pets", meaning: "Hewan peliharaan", example: "Dogs and cats are pets." },
            { term: "Birds", meaning: "Burung", example: "Eagles and parrots are birds." },
            { term: "Fish", meaning: "Ikan", example: "Goldfish and sharks are fish." },
            { term: "Insects", meaning: "Serangga", example: "Butterflies and bees are insects." },
            { term: "Reptiles", meaning: "Reptil", example: "Snakes and crocodiles are reptiles." },
            { term: "Mammals", meaning: "Mamalia", example: "Elephants and dolphins are mammals." }
        ],
        teacherNote: "Ask: 'What category is a dog?' → 'It's a pet and a mammal!' Make connections!"
    },
    // SLIDE 4 - VOCABULARY: ANIMAL NAMES
    {
        type: 'vocabulary',
        title: "Animals Around Us 🦒",
        subtitle: "Nama-nama hewan",
        vocabulary: [
            { term: "Lion", meaning: "Singa", example: "The lion is the king of the jungle." },
            { term: "Elephant", meaning: "Gajah", example: "An elephant has a long trunk." },
            { term: "Tiger", meaning: "Harimau", example: "A tiger has orange and black stripes." },
            { term: "Giraffe", meaning: "Jerapah", example: "A giraffe has a very long neck." },
            { term: "Monkey", meaning: "Monyet", example: "Monkeys love to eat bananas." },
            { term: "Zebra", meaning: "Zebra", example: "A zebra has black and white stripes." },
            { term: "Panda", meaning: "Panda", example: "Pandas eat bamboo." },
            { term: "Bear", meaning: "Beruang", example: "Bears are big and strong." },
            { term: "Kangaroo", meaning: "Kangguru", example: "Kangaroos jump high." },
            { term: "Rabbit", meaning: "Kelinci", example: "Rabbits have long ears." },
            { term: "Snake", meaning: "Ular", example: "Snakes have no legs." },
            { term: "Crocodile", meaning: "Buaya", example: "Crocodiles live in rivers." }
        ],
        teacherNote: "Animal charades: Make animal sounds or movements, kids guess the animal in English!"
    },
    // SLIDE 5 - VOCABULARY: BODY PARTS OF ANIMALS
    {
        type: 'vocabulary',
        title: "Animal Body Parts 🦋",
        subtitle: "Bagian tubuh hewan",
        vocabulary: [
            { term: "Tail", meaning: "Ekor", example: "A monkey has a long tail." },
            { term: "Trunk", meaning: "Belalai", example: "An elephant has a long trunk." },
            { term: "Tusks", meaning: "Gading", example: "Elephants have white tusks." },
            { term: "Wings", meaning: "Sayap", example: "Birds use wings to fly." },
            { term: "Beak", meaning: "Paruh", example: "A bird has a beak." },
            { term: "Feathers", meaning: "Bulu", example: "Birds have colorful feathers." },
            { term: "Fur", meaning: "Bulu (mamalia)", example: "Bears have thick fur." },
            { term: "Horns", meaning: "Tanduk", example: "Bulls have horns." },
            { term: "Stripes", meaning: "Belang", example: "Tigers and zebras have stripes." },
            { term: "Spots", meaning: "Bintik", example: "Leopards have spots." },
            { term: "Scales", meaning: "Sisik", example: "Fish and snakes have scales." },
            { term: "Paws", meaning: "Cakar / Kaki", example: "Cats walk on their paws." }
        ],
        teacherNote: "TPR: Point to body parts on a picture or yourself. 'Show me where your tail would be!'"
    },
    // SLIDE 6 - FORMULA: CAN / CAN'T
    {
        type: 'formula',
        title: "Can & Can't",
        subtitle: "Bisa dan Tidak Bisa",
        formula: "Subject + can/can't + verb",
        vocabulary: [
            { term: "can", meaning: "bisa / dapat", example: "Birds can fly." },
            { term: "can't", meaning: "tidak bisa", example: "Fish can't walk." },
            { term: "can fly", meaning: "bisa terbang", example: "Eagles can fly high." },
            { term: "can swim", meaning: "bisa berenang", example: "Ducks can swim." },
            { term: "can run", meaning: "bisa berlari", example: "Cheetahs can run fast." },
            { term: "can jump", meaning: "bisa melompat", example: "Kangaroos can jump." },
            { term: "can climb", meaning: "bisa memanjat", example: "Monkeys can climb trees." }
        ],
        teacherNote: "Emphasize pronunciation: CAN (strong) vs CAN'T (with a small 't' sound at the end)."
    },
    // SLIDE 7 - ANIMAL ABILITIES
    {
        type: 'vocabulary',
        title: "Animal Abilities & Facts 🎯",
        subtitle: "Kemampuan dan fakta hewan",
        vocabulary: [
            { term: "run fast", meaning: "berlari cepat", example: "Cheetahs can run fast." },
            { term: "swim", meaning: "berenang", example: "Fish can swim." },
            { term: "fly", meaning: "terbang", example: "Birds can fly." },
            { term: "climb", meaning: "memanjat", example: "Monkeys can climb." },
            { term: "lay eggs", meaning: "bertelur", example: "Chickens lay eggs." },
            { term: "live in water", meaning: "tinggal di air", example: "Fish live in water." },
            { term: "live on land", meaning: "tinggal di darat", example: "Elephants live on land." },
            { term: "eat meat", meaning: "makan daging", example: "Lions eat meat." },
            { term: "eat plants", meaning: "makan tumbuhan", example: "Giraffes eat plants." },
            { term: "sleep during the day", meaning: "tidur siang", example: "Owls sleep during the day." }
        ],
        teacherNote: "Make it a game: 'Can a fish climb trees?' → 'No, it can't!' (Laugh together!)"
    },
    // SLIDE 8 - DESCRIBING ANIMALS
    {
        type: 'formula',
        title: "How to Describe Animals",
        subtitle: "Cara mendeskripsikan hewan",
        formula: "It has [body part] + It can/can't [action]",
        vocabulary: [
            { term: "It has...", meaning: "Ia memiliki...", example: "It has a long neck." },
            { term: "It is...", meaning: "Ia adalah...", example: "It is big and strong." },
            { term: "It lives in...", meaning: "Ia tinggal di...", example: "It lives in the jungle." },
            { term: "It eats...", meaning: "Ia makan...", example: "It eats meat." },
            { term: "It can...", meaning: "Ia bisa...", example: "It can run fast." },
            { term: "It can't...", meaning: "Ia tidak bisa...", example: "It can't fly." }
        ],
        teacherNote: "Use 'It' for animals. Practice describing one animal using all these patterns."
    },
    // SLIDE 9 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "A lion can swims.", right: "A lion can swim." },
            { wrong: "Fish can fly.", right: "Fish can't fly." },
            { wrong: "Elephant has a trunk.", right: "An elephant has a trunk. / Elephants have trunks." },
            { wrong: "Birds can to fly.", right: "Birds can fly." },
            { wrong: "It can flying.", right: "It can fly." }
        ],
        teacherNote: "Key rule: After 'can', use the base verb (no -ing, no -s, no 'to')."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Describing an Animal 🦁",
        subtitle: "Talking about animal features",
        caseStudy: {
            scenario: "Mendeskripsikan seekor singa.",
            template: "A: Tell me about lions.\nB: Lions are big cats. They have fur and sharp teeth.\nA: What can they do?\nB: They can run fast. They can't fly.\nA: What do they eat?\nB: They eat meat. They are carnivores.\nA: Where do they live?\nB: They live in Africa, on the grasslands."
        },
        teacherNote: "DEMO: Pick an animal, describe it fully. Cover: appearance, abilities, food, habitat."
    },
    // SLIDE 11 - CONVERSATION EXAMPLE 2: GUESS THE ANIMAL
    {
        type: 'case-study',
        title: "Conversation 2: Guess the Animal! 🕵️",
        subtitle: "Playing animal guessing game",
        caseStudy: {
            scenario: "Bermain tebak-tebakan hewan.",
            template: "A: I'm thinking of an animal. It has a long neck.\nB: Is it a giraffe?\nA: Yes! Now you try.\nB: Okay. This animal is black and white. It can climb trees. It eats bamboo.\nA: Is it a panda?\nB: Yes! You got it!"
        },
        teacherNote: "FUN GAME: Play 'Guess the Animal' - give 3 clues, others guess!"
    },
    // SLIDE 12 - ROLEPLAY 1: ZOO GUIDE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Zoo Guide 🦓",
        subtitle: "A = Zoo Guide | B = Visitor",
        caseStudy: {
            scenario: "Pemandu kebun binatang menjelaskan tentang hewan.",
            template: "A: Welcome to the zoo! Look at this animal.\nB: What is it?\nA: It's a _____. It has _____.\nB: What can it do?\nA: It can _____. It can't _____.\nB: What does it eat?\nA: It eats _____. It lives in _____."
        },
        teacherNote: "GILIRAN MURID: Students take turns being zoo guides describing different animals."
    },
    // SLIDE 13 - ROLEPLAY 2: ANIMAL DETECTIVE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Animal Detective 🕵️",
        subtitle: "A = Detective | B = Witness",
        caseStudy: {
            scenario: "Detektif menebak hewan dari deskripsi.",
            template: "A: I'm looking for an animal. It has _____.\nB: Can it _____?\nA: Yes, it can. / No, it can't.\nB: Does it have _____?\nA: Yes! / No.\nB: Is it a _____?\nA: Yes! You found it!"
        },
        teacherNote: "GAME: Use yes/no questions to guess the animal. Like 20 questions but simpler!"
    },
    // SLIDE 14 - MICRO-DRILL: CAN OR CAN'T
    {
        type: 'micro-drill',
        title: "Can or Can't Challenge! 🎯",
        subtitle: "Say the correct ability",
        mission: [
            "1. Birds _____ fly. (can/can't)",
            "2. Fish _____ walk. (can/can't)",
            "3. Elephants _____ swim. (can/can't)",
            "4. Monkeys _____ fly. (can/can't)",
            "5. Kangaroos _____ jump. (can/can't)"
        ],
        teacherNote: "Rapid fire! Ask quick questions. Make it fun with animal sounds!"
    },
    // SLIDE 15 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Deskripsi fisik", sayThis: "It has a long trunk.", dontSayThis: "It have a long trunk." },
            { context: "Kemampuan (can)", sayThis: "Birds can fly.", dontSayThis: "Birds can flying." },
            { context: "Tidak bisa (can't)", sayThis: "Fish can't walk.", dontSayThis: "Fish can not walks." },
            { context: "Rumah hewan", sayThis: "It lives in the jungle.", dontSayThis: "It living in jungle." },
            { context: "Makanan", sayThis: "It eats meat.", dontSayThis: "It eat meats." }
        ],
        teacherNote: "Review together. Key points: has/have, can + base verb, eats (with S for It)."
    },
    // SLIDE 16 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Animal Report: Pilih 1 hewan, buat laporan: nama, penampilan, kemampuan, makanan, habitat!",
            "2. Draw & Describe: Gambar hewan favoritmu dan deskripsikan dengan 5 kalimat dalam Inggris!",
            "3. Guess the Animal: Main tebak-tebakan dengan keluarga menggunakan clues dalam Inggris!"
        ],
        teacherNote: "Encourage research! Kids can look up interesting animal facts to share next class."
    }
];

export const quiz: QuizQuestion[] = [
    // ANIMAL NAMES
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Elephant", "Lion", "Giraffe"],
        correctIndex: 1,
        explanation: "The lion is known as the King of the Jungle! 🦁"
    },
    {
        question: "Which animal has black and white stripes?",
        options: ["Leopard", "Zebra", "Tiger"],
        correctIndex: 1,
        explanation: "Zebras have distinctive black and white stripes!"
    },
    {
        question: "Which animal has a very long neck?",
        options: ["Elephant", "Giraffe", "Kangaroo"],
        correctIndex: 1,
        explanation: "Giraffes have extremely long necks to reach tree leaves!"
    },
    {
        question: "Which animal carries its baby in a pouch?",
        options: ["Monkey", "Kangaroo", "Bear"],
        correctIndex: 1,
        explanation: "Kangaroos carry their babies (joeys) in a pouch!"
    },
    // BODY PARTS
    {
        question: "What do birds use to fly?",
        options: ["Legs", "Wings", "Tail"],
        correctIndex: 1,
        explanation: "Birds use their wings to fly!"
    },
    {
        question: "What is the elephant's long nose called?",
        options: ["Beak", "Trunk", "Tusk"],
        correctIndex: 1,
        explanation: "An elephant's long nose is called a trunk!"
    },
    {
        question: "What do snakes have instead of legs?",
        options: ["Wings", "Scales", "Fur"],
        correctIndex: 1,
        explanation: "Snakes have scales covering their bodies and no legs!"
    },
    // CAN / CAN'T
    {
        question: "Birds _____ fly.",
        options: ["can", "can't", "don't"],
        correctIndex: 0,
        explanation: "Birds CAN fly! It's their special ability."
    },
    {
        question: "Fish _____ walk on land.",
        options: ["can", "can't", "don't"],
        correctIndex: 1,
        explanation: "Fish CAN'T walk on land. They need water!"
    },
    {
        question: "Monkeys _____ climb trees.",
        options: ["can", "can't", "is"],
        correctIndex: 0,
        explanation: "Monkeys CAN climb trees very well!"
    },
    {
        question: "Elephants _____ fly.",
        options: ["can", "can't", "don't"],
        correctIndex: 1,
        explanation: "Elephants are too heavy to fly! They CAN'T fly."
    },
    // GRAMMAR
    {
        question: "Complete: It _____ a long tail.",
        options: ["have", "has", "having"],
        correctIndex: 1,
        explanation: "Use 'has' for He/She/It. 'It has a long tail.'"
    },
    {
        question: "Complete: Birds _____ fly high.",
        options: ["can", "cans", "can to"],
        correctIndex: 0,
        explanation: "'Can' never changes. No 's', no 'to'. Just 'can'."
    },
    {
        question: "Which is CORRECT?",
        options: ["Fish can swims.", "Fish can swim.", "Fish can swimming."],
        correctIndex: 1,
        explanation: "After 'can', use the base verb: 'Fish can swim.'"
    },
    // ANIMAL FACTS
    {
        question: "What do lions eat?",
        options: ["Plants", "Meat", "Fish"],
        correctIndex: 1,
        explanation: "Lions are carnivores. They eat meat!"
    },
    {
        question: "Where do pandas live?",
        options: ["Africa", "China", "Australia"],
        correctIndex: 1,
        explanation: "Pandas live in China and eat bamboo!"
    },
    {
        question: "Which animal lays eggs?",
        options: ["Lion", "Chicken", "Elephant"],
        correctIndex: 1,
        explanation: "Chickens are birds and they lay eggs!"
    },
    {
        question: "What is a baby kangaroo called?",
        options: ["Cub", "Joey", "Puppy"],
        correctIndex: 1,
        explanation: "A baby kangaroo is called a joey!"
    }
];
