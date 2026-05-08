import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Nature Explorer! 🌿",
        subtitle: "Belajar Alam dan Kegiatan di Luar Rumah",
        teacherNote: "Goal: Anak-anak bisa mendeskripsikan alam, tempat-tempat outdoor, dan menceritakan kegiatan di luar rumah dalam Bahasa Inggris."
    },
    // SLIDE 2 - ICEBREAKING: BEFORE WE BEGIN
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about nature! 🌳",
        content: [
            "🌳 Do you like playing outside? (Kamu suka main di luar?)",
            "🏞️ Have you ever been to a mountain? (Pernah ke gunung?)",
            "🌊 Do you like the beach or the mountains? (Lebih suka pantai atau gunung?)",
            "🦋 What animals have you seen outside? (Binatang apa yang pernah kamu lihat di luar?)",
            "🗣️ Do you know how to say 'pohon' in English?"
        ],
        teacherNote: "Warming up! Tanya anak-anak satu per satu. Biarkan mereka jawab dalam Bahasa Indonesia dulu."
    },
    // SLIDE 3 - VOCABULARY TABLE 1: NATURE PLACES
    {
        type: 'vocabulary',
        title: "Nature Places",
        subtitle: "Tempat-tempat alam",
        vocabulary: [
            { term: "Park", meaning: "Taman", example: "I play in the park." },
            { term: "Garden", meaning: "Kebun", example: "My grandma has a beautiful garden." },
            { term: "Forest", meaning: "Hutan", example: "There are many trees in the forest." },
            { term: "Mountain", meaning: "Gunung", example: "The mountain is very high!" },
            { term: "Beach", meaning: "Pantai", example: "I swim at the beach." },
            { term: "River", meaning: "Sungai", example: "The river water is cold." },
            { term: "Lake", meaning: "Danau", example: "We can see fish in the lake." },
            { term: "Waterfall", meaning: "Air terjun", example: "The waterfall is so beautiful!" },
            { term: "Hill", meaning: "Bukit", example: "Let's climb the hill!" },
            { term: "Field", meaning: "Lapangan/Padang", example: "Cows eat grass in the field." }
        ],
        teacherNote: "Tanya anak: 'Which place have you visited?' Minta mereka berbagi pengalaman."
    },
    // SLIDE 4 - VOCABULARY TABLE 2: PLANTS & TREES
    {
        type: 'vocabulary',
        title: "Plants & Trees",
        subtitle: "Tanaman dan pohon",
        vocabulary: [
            { term: "Tree", meaning: "Pohon", example: "The tree is very tall." },
            { term: "Flower", meaning: "Bunga", example: "This flower is beautiful!" },
            { term: "Grass", meaning: "Rumput", example: "I sit on the grass." },
            { term: "Leaf", meaning: "Daun", example: "The leaf is green." },
            { term: "Leaves", meaning: "Daun-daun", example: "The leaves fall in autumn." },
            { term: "Branch", meaning: "Dahan", example: "The bird sits on the branch." },
            { term: "Bush", meaning: "Semak", example: "The cat hides behind the bush." },
            { term: "Rose", meaning: "Mawar", example: "Roses smell nice!" },
            { term: "Sunflower", meaning: "Bunga matahari", example: "Sunflowers are yellow and big!" },
            { term: "Seed", meaning: "Biji", example: "We plant seeds in the garden." }
        ],
        teacherNote: "Latihan: 'What color is a leaf?' 'What flowers do you know?' Ajak diskusi."
    },
    // SLIDE 5 - VOCABULARY TABLE 3: NATURE ELEMENTS
    {
        type: 'vocabulary',
        title: "Nature Elements",
        subtitle: "Elemen alam",
        vocabulary: [
            { term: "Sky", meaning: "Langit", example: "The sky is blue today." },
            { term: "Cloud", meaning: "Awan", example: "Look at the white clouds!" },
            { term: "Sun", meaning: "Matahari", example: "The sun is very bright." },
            { term: "Moon", meaning: "Bulan", example: "The moon shines at night." },
            { term: "Star", meaning: "Bintang", example: "I can see many stars tonight!" },
            { term: "Rainbow", meaning: "Pelangi", example: "Wow, there's a rainbow!" },
            { term: "Wind", meaning: "Angin", example: "The wind is blowing." },
            { term: "Rain", meaning: "Hujan", example: "It's raining outside." },
            { term: "Rock", meaning: "Batu", example: "I found a big rock!" },
            { term: "Sand", meaning: "Pasir", example: "I play with sand at the beach." }
        ],
        teacherNote: "Tunjuk ke luar jendela dan latih: 'What can you see in the sky?'"
    },
    // SLIDE 6 - VOCABULARY TABLE 4: OUTDOOR ANIMALS
    {
        type: 'vocabulary',
        title: "Animals in Nature",
        subtitle: "Binatang di alam",
        vocabulary: [
            { term: "Bird", meaning: "Burung", example: "The bird is flying in the sky." },
            { term: "Butterfly", meaning: "Kupu-kupu", example: "The butterfly is so colorful!" },
            { term: "Bee", meaning: "Lebah", example: "Bees make honey." },
            { term: "Ant", meaning: "Semut", example: "Ants are very small but strong." },
            { term: "Squirrel", meaning: "Tupai", example: "The squirrel climbs the tree." },
            { term: "Frog", meaning: "Katak", example: "Frogs jump and say 'ribbit'!" },
            { term: "Fish", meaning: "Ikan", example: "Fish swim in the river." },
            { term: "Dragonfly", meaning: "Capung", example: "The dragonfly has pretty wings!" },
            { term: "Snail", meaning: "Siput", example: "The snail moves very slowly." },
            { term: "Worm", meaning: "Cacing", example: "Worms live in the soil." }
        ],
        teacherNote: "Game: 'I spy something that can fly...' untuk latihan vocabulary."
    },
    // SLIDE 7 - VOCABULARY TABLE 5: OUTDOOR ACTIVITIES
    {
        type: 'vocabulary',
        title: "Outdoor Activities",
        subtitle: "Kegiatan di luar rumah",
        vocabulary: [
            { term: "Walk", meaning: "Berjalan", example: "I walk in the park every morning." },
            { term: "Run", meaning: "Berlari", example: "Let's run in the field!" },
            { term: "Climb", meaning: "Memanjat", example: "I climb the big tree." },
            { term: "Swim", meaning: "Berenang", example: "I swim in the river." },
            { term: "Camp", meaning: "Berkemah", example: "We camp in the forest." },
            { term: "Hike", meaning: "Mendaki", example: "We hike up the mountain." },
            { term: "Picnic", meaning: "Piknik", example: "Let's have a picnic in the park!" },
            { term: "Explore", meaning: "Menjelajah", example: "I love to explore nature!" },
            { term: "Catch", meaning: "Menangkap", example: "I catch butterflies." },
            { term: "Collect", meaning: "Mengumpulkan", example: "I collect pretty leaves." }
        ],
        teacherNote: "Drill: 'What do you like to do outside?' Minta anak buat kalimat sendiri."
    },
    // SLIDE 8 - VOCABULARY TABLE 6: OUTDOOR EQUIPMENT
    {
        type: 'vocabulary',
        title: "Outdoor Equipment",
        subtitle: "Perlengkapan outdoor",
        vocabulary: [
            { term: "Tent", meaning: "Tenda", example: "We sleep in a tent." },
            { term: "Backpack", meaning: "Tas ransel", example: "I carry my backpack." },
            { term: "Water bottle", meaning: "Botol air", example: "Don't forget your water bottle!" },
            { term: "Hat", meaning: "Topi", example: "Wear a hat in the sun." },
            { term: "Sunglasses", meaning: "Kacamata hitam", example: "I wear sunglasses at the beach." },
            { term: "Umbrella", meaning: "Payung", example: "Bring an umbrella, it might rain!" },
            { term: "Boots", meaning: "Sepatu bot", example: "Wear boots for hiking." },
            { term: "Flashlight", meaning: "Senter", example: "Use a flashlight at night." },
            { term: "Map", meaning: "Peta", example: "Look at the map to find the way." },
            { term: "Binoculars", meaning: "Teropong", example: "I see birds with binoculars!" }
        ],
        teacherNote: "Latihan: 'What do you need for camping?' Buat daftar bersama."
    },
    // SLIDE 9 - VOCABULARY TABLE 7: DESCRIBING NATURE
    {
        type: 'vocabulary',
        title: "Describing Nature",
        subtitle: "Kata sifat untuk alam",
        vocabulary: [
            { term: "Beautiful", meaning: "Indah", example: "The sunset is beautiful!" },
            { term: "Fresh", meaning: "Segar", example: "The air in the mountain is fresh." },
            { term: "Peaceful", meaning: "Damai/Tenang", example: "The lake is so peaceful." },
            { term: "Wild", meaning: "Liar", example: "Wild animals live in the forest." },
            { term: "Green", meaning: "Hijau", example: "The forest is very green." },
            { term: "Tall", meaning: "Tinggi", example: "That tree is very tall!" },
            { term: "Deep", meaning: "Dalam", example: "The river is deep here." },
            { term: "Wet", meaning: "Basah", example: "The grass is wet after rain." },
            { term: "Muddy", meaning: "Berlumpur", example: "My shoes are muddy!" },
            { term: "Sunny", meaning: "Cerah", example: "It's a sunny day for a picnic!" }
        ],
        teacherNote: "Ajarkan kombinasi: 'a beautiful garden', 'a tall tree', 'fresh air'."
    },
    // SLIDE 10 - FORMULA: DESCRIBING WHAT YOU SEE
    {
        type: 'formula',
        title: "What Can You See?",
        subtitle: "Mendeskripsikan apa yang kamu lihat",
        formula: "I can see a [adjective] [noun]. / There is/are [noun] in the [place].",
        vocabulary: [
            { term: "I can see a big tree.", meaning: "Saya bisa melihat pohon besar.", example: "Look! I can see a big tree over there!" },
            { term: "There is a bird in the tree.", meaning: "Ada burung di pohon.", example: "There is a bird in the tree." },
            { term: "There are flowers in the garden.", meaning: "Ada bunga-bunga di kebun.", example: "There are beautiful flowers in the garden." },
            { term: "I can see the mountains.", meaning: "Saya bisa melihat gunung-gunung.", example: "I can see the mountains from here!" },
            { term: "Look at the rainbow!", meaning: "Lihat pelanginya!", example: "Wow! Look at the rainbow!" }
        ],
        teacherNote: "Drill: Tunjuk gambar, minta anak bilang 'I can see...' atau 'There is/are...'"
    },
    // SLIDE 11 - FORMULA: TALKING ABOUT ACTIVITIES
    {
        type: 'formula',
        title: "What Do You Like to Do Outside?",
        subtitle: "Menceritakan kegiatan favorit di luar",
        formula: "I like to [verb] in/at the [place]. / I enjoy [verb+ing] outdoors.",
        vocabulary: [
            { term: "I like to play in the park.", meaning: "Saya suka bermain di taman.", example: "I like to play in the park with my friends." },
            { term: "I enjoy hiking.", meaning: "Saya menikmati mendaki.", example: "I enjoy hiking with my family." },
            { term: "I love swimming at the beach.", meaning: "Saya suka berenang di pantai.", example: "I love swimming at the beach!" },
            { term: "I like to explore the forest.", meaning: "Saya suka menjelajah hutan.", example: "I like to explore the forest and find animals." },
            { term: "I enjoy having picnics.", meaning: "Saya menikmati piknik.", example: "I enjoy having picnics in the garden." }
        ],
        teacherNote: "Minta setiap anak share kegiatan outdoor favorit mereka dengan pola ini."
    },
    // SLIDE 12 - FORMULA: ASKING ABOUT EXPERIENCES
    {
        type: 'formula',
        title: "Have You Ever...?",
        subtitle: "Bertanya tentang pengalaman",
        formula: "Have you ever [past participle] in/at the [place]?",
        vocabulary: [
            { term: "Have you ever climbed a mountain?", meaning: "Pernah mendaki gunung?", example: "Yes, I have! / No, I haven't, but I want to!" },
            { term: "Have you ever seen a rainbow?", meaning: "Pernah melihat pelangi?", example: "Yes! It was so beautiful!" },
            { term: "Have you ever camped in a forest?", meaning: "Pernah berkemah di hutan?", example: "No, I haven't. Is it scary?" },
            { term: "Have you ever caught a butterfly?", meaning: "Pernah menangkap kupu-kupu?", example: "Yes, I have! But I let it go." },
            { term: "Have you ever swum in a river?", meaning: "Pernah berenang di sungai?", example: "Yes! The water was very cold!" }
        ],
        teacherNote: "Pair practice: Anak saling bertanya 'Have you ever...?' tentang pengalaman outdoor."
    },
    // SLIDE 13 - FORMULA: EXPRESSING FEELINGS ABOUT NATURE
    {
        type: 'formula',
        title: "How Do You Feel?",
        subtitle: "Mengungkapkan perasaan tentang alam",
        formula: "I feel [adjective] when I am in/at the [place].",
        vocabulary: [
            { term: "I feel happy in the park.", meaning: "Saya merasa senang di taman.", example: "I feel happy when I play in the park." },
            { term: "I feel peaceful at the beach.", meaning: "Saya merasa damai di pantai.", example: "I feel peaceful listening to the waves." },
            { term: "I feel excited when hiking!", meaning: "Saya merasa senang saat mendaki!", example: "I feel excited when we reach the top!" },
            { term: "I feel fresh in the mountains.", meaning: "Saya merasa segar di pegunungan.", example: "The air makes me feel fresh." },
            { term: "I feel scared in the dark forest.", meaning: "Saya merasa takut di hutan gelap.", example: "I feel a little scared at night." }
        ],
        teacherNote: "Diskusi: 'How do you feel at the beach? At the mountain?' Latih ekspresi perasaan."
    },
    // SLIDE 14 - COMPARISON: COMMON MISTAKES
    {
        type: 'comparison',
        title: "Right Way to Say It",
        subtitle: "Cara yang benar",
        comparison: [
            { wrong: "I go to beach.", right: "I go to the beach." },
            { wrong: "The tree is have many leaves.", right: "The tree has many leaves." },
            { wrong: "There is many birds.", right: "There are many birds." },
            { wrong: "I can swimming.", right: "I can swim." },
            { wrong: "The flower is very beauty.", right: "The flower is very beautiful." }
        ],
        teacherNote: "Fokus pada common errors: articles (the), has/have, singular/plural, can + verb."
    },
    // SLIDE 15 - COMPARISON: SINGULAR VS PLURAL
    {
        type: 'comparison',
        title: "One or Many?",
        subtitle: "Satu atau banyak?",
        comparison: [
            { wrong: "One leaf", right: "Many leaves (bukan leafs!)" },
            { wrong: "One tree", right: "Many trees" },
            { wrong: "One butterfly", right: "Many butterflies" },
            { wrong: "One fish", right: "Many fish (sama!)" },
            { wrong: "There is birds.", right: "There are birds. (plural = are)" }
        ],
        teacherNote: "Ajarkan irregular plurals: leaf→leaves, fish→fish. Dan 'there is' vs 'there are'."
    },
    // SLIDE 16 - CONVERSATION EXAMPLE 1: AT THE PARK
    {
        type: 'case-study',
        title: "Conversation 1: A Day at the Park 🌳",
        subtitle: "A = Friend 1 | B = Friend 2",
        caseStudy: {
            scenario: "Dua teman berbicara tentang hari di taman.",
            template: "A: What a beautiful day! Let's go to the park!\nB: Great idea! I love the park.\nA: Look! I can see a butterfly!\nB: Wow! It's so colorful. Let's catch it!\nA: No, let's just watch it. It's so pretty!\nB: Okay! Oh, look at those flowers!\nA: They're beautiful! I feel so happy here."
        },
        teacherNote: "Demo dengan murid. Teacher jadi A atau B, murid jadi partner."
    },
    // SLIDE 17 - CONVERSATION EXAMPLE 2: PLANNING A TRIP
    {
        type: 'case-study',
        title: "Conversation 2: Planning an Adventure 🏕️",
        subtitle: "A = Child | B = Parent",
        caseStudy: {
            scenario: "Merencanakan perjalanan ke alam.",
            template: "A: Mom/Dad, can we go camping?\nB: Sure! Where do you want to go?\nA: Let's go to the mountain!\nB: Good idea! What should we bring?\nA: We need a tent, backpacks, and a flashlight.\nB: Don't forget water bottles!\nA: Okay! I'm so excited!\nB: Me too! Let's explore nature together!"
        },
        teacherNote: "Latih planning vocabulary: what to bring, where to go."
    },
    // SLIDE 18 - CONVERSATION EXAMPLE 3: DESCRIBING NATURE
    {
        type: 'case-study',
        title: "Conversation 3: At the Beach 🏖️",
        subtitle: "A = Child | B = Friend",
        caseStudy: {
            scenario: "Berbicara tentang pemandangan di pantai.",
            template: "A: Wow! The beach is so beautiful!\nB: Yes! Look at the blue water!\nA: I can see the waves. They're so big!\nB: And the sand is so soft and warm.\nA: Can we swim now?\nB: Yes! But let's put on sunscreen first.\nA: Okay! I love the beach!\nB: Me too! It's so peaceful here."
        },
        teacherNote: "Minta anak mendeskripsikan pemandangan menggunakan adjectives."
    },
    // SLIDE 19 - ROLEPLAY PRACTICE 1: NATURE WALK
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Nature Walk 🚶",
        subtitle: "A = Explorer 1 | B = Explorer 2",
        caseStudy: {
            scenario: "Kamu sedang jalan-jalan di alam. Ceritakan apa yang kamu lihat!",
            template: "A: Let's explore this [forest/park/garden]!\nB: Great! What can you see?\nA: I can see a [big tree / beautiful flower / colorful bird]!\nB: Wow! Look over there! There is a [butterfly/squirrel/frog]!\nA: Amazing! I love nature!\nB: Me too! Let's take a picture!"
        },
        teacherNote: "Pair up students. Minta mereka menggunakan vocabulary yang sudah dipelajari."
    },
    // SLIDE 20 - ROLEPLAY PRACTICE 2: DESCRIBING YOUR ADVENTURE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: My Adventure Story 🗺️",
        subtitle: "A = Storyteller | B = Listener",
        caseStudy: {
            scenario: "Ceritakan pengalaman outdoor kamu ke teman!",
            template: "A: I went to the [mountain/beach/forest] last weekend!\nB: Really? What did you do there?\nA: I [hiked/swam/explored]! It was so fun!\nB: What did you see?\nA: I saw [birds/fish/butterflies] and [tall trees/big waves/pretty flowers]!\nB: Wow! How did you feel?\nA: I felt [happy/excited/peaceful]!\nB: That sounds amazing! I want to go too!"
        },
        teacherNote: "Latih past tense sederhana: went, saw, did."
    },
    // SLIDE 21 - ROLEPLAY PRACTICE 3: PICNIC PLANNING
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 3: Picnic Planner 🧺",
        subtitle: "A = Planner | B = Friend",
        caseStudy: {
            scenario: "Rencanakan piknik bersama temanmu!",
            template: "A: Let's have a picnic this weekend!\nB: Great idea! Where should we go?\nA: How about the park near [school/my house]?\nB: Okay! What should we bring?\nA: Let's bring sandwiches, fruits, and juice.\nB: I'll bring a blanket to sit on!\nA: Perfect! Don't forget sunglasses and a hat!\nB: I can't wait! It's going to be fun!"
        },
        teacherNote: "Latih planning and suggestion: Let's..., How about...?, Should we...?"
    },
    // SLIDE 22 - VOCABULARY: NATURE SOUNDS
    {
        type: 'vocabulary',
        title: "Sounds of Nature 🔊",
        subtitle: "Suara-suara alam",
        vocabulary: [
            { term: "Birds chirp", meaning: "Burung berkicau", example: "I hear birds chirping in the morning." },
            { term: "Leaves rustle", meaning: "Daun berdesir", example: "The wind makes the leaves rustle." },
            { term: "Water splashes", meaning: "Air memercik", example: "The water splashes in the river." },
            { term: "Bees buzz", meaning: "Lebah berdengung", example: "Bees buzz around the flowers." },
            { term: "Frogs croak", meaning: "Katak menguak", example: "Frogs croak at night." },
            { term: "Thunder rumbles", meaning: "Guntur menggelegar", example: "I hear thunder rumbling." },
            { term: "Waves crash", meaning: "Ombak menghantam", example: "Waves crash on the beach." },
            { term: "It's quiet/peaceful", meaning: "Sepi/damai", example: "The forest is so quiet and peaceful." }
        ],
        teacherNote: "Fun activity! Make sounds and ask: 'What makes this sound?' Birds? Bees? Waves?"
    },
    // SLIDE 23 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Mendeskripsikan", sayThis: "I can see a beautiful flower.", dontSayThis: "I see flower beautiful." },
            { context: "Ada sesuatu", sayThis: "There are many birds.", dontSayThis: "There is many birds." },
            { context: "Kegiatan favorit", sayThis: "I like to hike in the mountains.", dontSayThis: "I like hiking in mountain." },
            { context: "Pengalaman", sayThis: "I have been to the beach.", dontSayThis: "I have go to beach." },
            { context: "Perasaan", sayThis: "I feel happy in nature.", dontSayThis: "I feel happy in the nature." }
        ],
        teacherNote: "Review bersama-sama dan cek pemahaman anak."
    },
    // SLIDE 24 - MISSION
    {
        type: 'mission',
        title: "Mission Time!",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Nature Spotter: Pergi keluar dan sebutkan 10 hal yang kamu lihat dalam Bahasa Inggris!",
            "2. Nature Diary: Tulis tentang tempat alam favoritmu. (My favorite place is ___ because ___)",
            "3. Sound Hunter: Tutup mata di taman atau kebun, dengarkan suara apa saja? Describe it in English!",
            "4. Photo Reporter: Ambil foto alam dan ceritakan ke keluarga dalam Bahasa Inggris!"
        ],
        teacherNote: "Encourage anak untuk praktek di luar rumah. Explore nature and speak English! See you next time!"
    }
];

export const quiz: QuizQuestion[] = [
    // VOCABULARY - PLACES
    {
        question: "What is the English word for 'gunung'?",
        options: ["Hill", "Mountain", "Forest"],
        correctIndex: 1,
        explanation: "Mountain means 'gunung'. Mountains are very tall!"
    },
    {
        question: "What is the English word for 'pantai'?",
        options: ["River", "Lake", "Beach"],
        correctIndex: 2,
        explanation: "Beach means 'pantai'. We can swim and build sandcastles at the beach!"
    },
    {
        question: "Where can you find many trees?",
        options: ["Beach", "Forest", "Lake"],
        correctIndex: 1,
        explanation: "A forest has many trees. It's home to many wild animals!"
    },
    {
        question: "What is 'air terjun' in English?",
        options: ["River", "Waterfall", "Lake"],
        correctIndex: 1,
        explanation: "Waterfall means 'air terjun'. Water falls down from a high place!"
    },
    // VOCABULARY - PLANTS
    {
        question: "What is the English word for 'pohon'?",
        options: ["Tree", "Bush", "Flower"],
        correctIndex: 0,
        explanation: "Tree means 'pohon'. Trees are tall and have many leaves!"
    },
    {
        question: "What is the plural of 'leaf'?",
        options: ["Leafs", "Leaves", "Leafes"],
        correctIndex: 1,
        explanation: "'Leaves' is the plural of 'leaf'. It's an irregular plural!"
    },
    {
        question: "What is 'rumput' in English?",
        options: ["Leaf", "Flower", "Grass"],
        correctIndex: 2,
        explanation: "Grass means 'rumput'. Grass is green and covers the ground!"
    },
    // VOCABULARY - NATURE ELEMENTS
    {
        question: "What do we see after rain on a sunny day?",
        options: ["Cloud", "Rainbow", "Star"],
        correctIndex: 1,
        explanation: "A rainbow appears after rain when the sun comes out. It has many colors!"
    },
    {
        question: "What is 'awan' in English?",
        options: ["Cloud", "Sky", "Wind"],
        correctIndex: 0,
        explanation: "Cloud means 'awan'. Clouds are white and fluffy in the sky!"
    },
    {
        question: "What can we see at night in the sky?",
        options: ["Sun and clouds", "Moon and stars", "Rainbow"],
        correctIndex: 1,
        explanation: "At night, we can see the moon and stars in the sky!"
    },
    // VOCABULARY - ANIMALS
    {
        question: "What is 'kupu-kupu' in English?",
        options: ["Bee", "Butterfly", "Bird"],
        correctIndex: 1,
        explanation: "Butterfly means 'kupu-kupu'. Butterflies have colorful wings!"
    },
    {
        question: "Which animal makes 'buzz buzz' sound?",
        options: ["Bird", "Frog", "Bee"],
        correctIndex: 2,
        explanation: "Bees buzz! They fly around flowers to collect nectar."
    },
    {
        question: "What is 'katak' in English?",
        options: ["Fish", "Frog", "Snail"],
        correctIndex: 1,
        explanation: "Frog means 'katak'. Frogs jump and say 'croak croak'!"
    },
    // VOCABULARY - ACTIVITIES
    {
        question: "What does 'hike' mean?",
        options: ["Berenang", "Mendaki", "Berlari"],
        correctIndex: 1,
        explanation: "Hike means 'mendaki'. We hike up mountains to see beautiful views!"
    },
    {
        question: "'To explore' means...",
        options: ["Tidur", "Menjelajah", "Makan"],
        correctIndex: 1,
        explanation: "Explore means 'menjelajah'. Explorers discover new places!"
    },
    {
        question: "What does 'camp' mean?",
        options: ["Berkemah", "Berenang", "Bermain"],
        correctIndex: 0,
        explanation: "Camp means 'berkemah'. We sleep in tents when we go camping!"
    },
    // GRAMMAR - THERE IS/ARE
    {
        question: "Complete: 'There ___ many birds in the tree.'",
        options: ["is", "are", "am"],
        correctIndex: 1,
        explanation: "'There are' is used with plural nouns. Birds = plural, so we use 'are'."
    },
    {
        question: "Complete: 'There ___ a butterfly on the flower.'",
        options: ["is", "are", "am"],
        correctIndex: 0,
        explanation: "'There is' is used with singular nouns. One butterfly = singular, so we use 'is'."
    },
    // GRAMMAR - CAN
    {
        question: "Which sentence is CORRECT?",
        options: ["I can swimming.", "I can swim.", "I can to swim."],
        correctIndex: 1,
        explanation: "After 'can', we use the base form of the verb: 'can swim', not 'can swimming'."
    },
    // DESCRIPTIONS
    {
        question: "How do you say 'udaranya segar'?",
        options: ["The air is fresh.", "The air fresh.", "The air is freshly."],
        correctIndex: 0,
        explanation: "'The air is fresh' is correct. We use 'is' + adjective."
    },
    {
        question: "'The mountain is very tall' means...",
        options: ["Gunungnya sangat pendek", "Gunungnya sangat tinggi", "Gunungnya sangat lebar"],
        correctIndex: 1,
        explanation: "Tall means 'tinggi'. The mountain is very tall = Gunungnya sangat tinggi."
    },
    // EXPRESSING
    {
        question: "How do you say 'Saya bisa melihat pelangi'?",
        options: ["I can see rainbow.", "I can see a rainbow.", "I see can rainbow."],
        correctIndex: 1,
        explanation: "'I can see a rainbow' is correct. Don't forget the article 'a'!"
    },
    {
        question: "'I feel peaceful at the beach' means...",
        options: ["Saya merasa takut di pantai", "Saya merasa damai di pantai", "Saya merasa lapar di pantai"],
        correctIndex: 1,
        explanation: "Peaceful means 'damai' or 'tenang'. The beach makes us feel calm!"
    },
    // EQUIPMENT
    {
        question: "What do we use to see things far away?",
        options: ["Flashlight", "Binoculars", "Umbrella"],
        correctIndex: 1,
        explanation: "Binoculars help us see things that are far away, like birds in trees!"
    },
    {
        question: "What do we sleep in when camping?",
        options: ["Backpack", "Tent", "Boots"],
        correctIndex: 1,
        explanation: "A tent is our outdoor 'house' when we go camping!"
    },
    // SOUNDS
    {
        question: "What sound do birds make?",
        options: ["Buzz", "Croak", "Chirp"],
        correctIndex: 2,
        explanation: "Birds chirp! We hear beautiful bird songs in the morning."
    },
    {
        question: "'Waves crash on the beach' means...",
        options: ["Ombak menghantam pantai", "Ombak tidur di pantai", "Ombak pergi dari pantai"],
        correctIndex: 0,
        explanation: "Crash means 'menghantam'. Ocean waves crash onto the beach shore!"
    },
    // ADVANCED
    {
        question: "Which sentence is WRONG?",
        options: ["I go to the beach.", "There are many fishes.", "The flower is beautiful."],
        correctIndex: 1,
        explanation: "'Fish' stays the same in plural! We say 'many fish', not 'many fishes'."
    },
    {
        question: "Complete: 'I like ___ in the park.'",
        options: ["to play", "playing", "Both are correct!"],
        correctIndex: 2,
        explanation: "Both 'I like to play' and 'I like playing' are correct!"
    },
    {
        question: "You see a beautiful sunset. What do you say?",
        options: ["Yuck! It's ugly!", "Wow! The sunset is so beautiful!", "I'm bored."],
        correctIndex: 1,
        explanation: "When we see something beautiful in nature, we can say 'Wow! It's so beautiful!'"
    }
];
