import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: 'The "Rasa" Class',
        subtitle: "Descriptive English: Beyond 'Good' and 'Nice'",
        teacherNote: "Goal: Mengatasi masalah 'generic adjectives' - dari 'the food is good' menjadi 'the food is mouthwatering'.",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The Generic Trap",
        subtitle: "Ketika semua deskripsi terdengar sama.",
        content: [
            "Orang Indonesia sering menggunakan kata sifat yang 'aman' tapi membosankan.",
            "'Good', 'nice', 'delicious', 'beautiful' - terlalu generic.",
            "Hasilnya: Cerita menjadi flat dan tidak memorable.",
            "Native speaker menggunakan kata-kata yang spesifik dan evocative."
        ],
        teacherNote: "Demo: Ceritakan liburan dengan 'It was nice, the food was good' vs descriptive words."
    },

    // SLIDE 3: THE SPECTRUM
    {
        type: 'comparison',
        title: "Basic vs. Descriptive",
        subtitle: "Upgrade kata-kata Anda.",
        comparison: [
            { wrong: "The food was good.", right: "The food was mouthwatering / flavorful / divine." },
            { wrong: "The view was nice.", right: "The view was breathtaking / picturesque / stunning." },
            { wrong: "The movie was good.", right: "The movie was captivating / thought-provoking / gripping." },
            { wrong: "I'm tired.", right: "I'm exhausted / drained / worn out." }
        ],
        teacherNote: "Perbedaannya: Basic = informasi. Descriptive = experience/emosi."
    },

    // SLIDE 4: THE FEELING VOCABULARY
    {
        type: 'vocabulary',
        title: "Beyond 'Happy' and 'Sad'",
        subtitle: "Kosakata emosi yang lebih nuanced.",
        vocabulary: [
            { term: "Ecstatic / Thrilled", meaning: "Super happy, excited", example: "I was ecstatic when I got the promotion!" },
            { term: "Content / Blissful", meaning: "Happy dan peaceful", example: "Lying on the beach, I felt completely content." },
            { term: "Frustrated / Irritated", meaning: "Annoyed, upset", example: "I was frustrated with the slow service." },
            { term: "Devastated / Heartbroken", meaning: "Extremely sad", example: "She was devastated by the news." },
            { term: "Anxious / Nervous", meaning: "Worried, uneasy", example: "I felt anxious before the presentation." },
            { term: "Relieved / At ease", meaning: "Lepas dari worry", example: "I was relieved when it was over." }
        ]
    },

    // SLIDE 5: SENSORY WORDS - TASTE
    {
        type: 'vocabulary',
        title: "Describing Food (Taste)",
        subtitle: "Jangan cuma 'delicious'.",
        vocabulary: [
            { term: "Savory / Umami", meaning: "Gurih, meaty", example: "The broth was rich and savory." },
            { term: "Zesty / Tangy", meaning: "Asam segar", example: "The sauce had a zesty lemon flavor." },
            { term: "Spicy / Fiery", meaning: "Pedas", example: "The curry was fiery hot!" },
            { term: "Bittersweet", meaning: "Pahit manis", example: "It was a bittersweet goodbye." },
            { term: "Mouthwatering", meaning: "Menggugah selera", example: "The aroma was absolutely mouthwatering." },
            { term: "Bland / Tasteless", meaning: "Hambar", example: "The dish was rather bland." }
        ]
    },

    // SLIDE 6: SENSORY WORDS - TEXTURE
    {
        type: 'vocabulary',
        title: "Describing Texture",
        subtitle: "Rasa di lidah, tekstur di mulut.",
        vocabulary: [
            { term: "Crispy / Crunchy", meaning: "Renyah", example: "The fried chicken was perfectly crispy." },
            { term: "Creamy / Velvety", meaning: "Lembut creamy", example: "The soup was velvety smooth." },
            { term: "Tender / Juicy", meaning: "Lembut (daging)", example: "The steak was tender and juicy." },
            { term: "Chewy / Gooey", meaning: "Kenyal/lengket", example: "The brownie was warm and gooey." },
            { term: "Fluffy / Airy", meaning: "Empuk ringan", example: "The pancakes were light and fluffy." },
            { term: "Soggy / Mushy", meaning: "Lembek basah", example: "Unfortunately, the fries were soggy." }
        ]
    },

    // SLIDE 7: VISUAL DESCRIPTIONS
    {
        type: 'vocabulary',
        title: "Describing Visuals",
        subtitle: "Beyond 'beautiful' and 'ugly'.",
        vocabulary: [
            { term: "Breathtaking / Awe-inspiring", meaning: "Membuat terkesima", example: "The sunset was absolutely breathtaking." },
            { term: "Vibrant / Vivid", meaning: "Warna cerah", example: "The market was full of vibrant colors." },
            { term: "Serene / Tranquil", meaning: "Tenang damai", example: "The lake was serene in the morning." },
            { term: "Chaotic / Bustling", meaning: "Ramai riuh", example: "The city center was bustling with energy." },
            { term: "Quaint / Charming", meaning: "Menarik/unik (old style)", example: "We stayed in a quaint little village." },
            { term: "Gloomy / Dreary", meaning: "Suram, muram", example: "The weather was gloomy all week." }
        ]
    },

    // SLIDE 8: SOUND DESCRIPTIONS
    {
        type: 'vocabulary',
        title: "Describing Sounds",
        subtitle: "Bunyi bukan cuma 'loud' atau 'quiet'.",
        vocabulary: [
            { term: "Deafening / Ear-splitting", meaning: "Sangat keras", example: "The concert was deafening!" },
            { term: "Soothing / Melodic", meaning: "Menenangkan", example: "Her voice was soothing and melodic." },
            { term: "Boisterous / Rowdy", meaning: "Ramai riuh (orang)", example: "The kids were boisterous at the party." },
            { term: "Faint / Muffled", meaning: "Samaran/tertutup", example: "I could hear faint music from downstairs." },
            { term: "Rhythmic / Pulsating", meaning: "Berg rhythm", example: "The rhythmic sound of waves was hypnotic." },
            { term: "Piercing / Shrill", meaning: "Nyaring menusuk", example: "A piercing scream broke the silence." }
        ]
    },

    // SLIDE 9: THE SHOW DON'T TELL
    {
        type: 'formula',
        title: "Show, Don't Tell",
        subtitle: "Prinsip storytelling yang powerful.",
        formula: "[Specific Detail] + [Sensory Word] = Vivid Image",
        vocabulary: [
            { term: "Tell (Weak)", meaning: "General statement", example: "The restaurant was good." },
            { term: "Show (Strong)", meaning: "Specific details", example: "The restaurant had dim lighting, soft jazz, and the steak melted in my mouth." },
            { term: "Tell", meaning: "I was tired.", example: "My eyes were heavy and I could barely keep them open." },
            { term: "Show", meaning: "She was angry.", example: "Her face turned red and she slammed the door." }
        ],
        teacherNote: "Prinsip ini dasar dalam creative writing. The more specific, the better."
    },

    // SLIDE 10: METAPHORS & SIMILES
    {
        type: 'concept',
        title: "Metaphors and Similes",
        subtitle: "Membuat perbandingan yang evocative.",
        content: [
            "Simile: Using 'like' or 'as' untuk membandingkan.",
            "Contoh: 'Her smile was like sunshine.' 'He runs as fast as lightning.'",
            "Metaphor: Langsung menyamakan tanpa 'like/as'.",
            "Contoh: 'Time is money.' 'The city is a jungle.'"
        ],
        teacherNote: "Indonesian speakers sering kurang menggunakan figurative language. Latih ini!"
    },

    // SLIDE 11: METAPHOR PRACTICE
    {
        type: 'micro-drill',
        title: "Create Your Own Metaphors",
        subtitle: "Ubah deskripsi biasa menjadi vivid.",
        mission: [
            "1. 'The coffee was strong.' → 'The coffee was like __________'",
            "2. 'The traffic was bad.' → 'The traffic was a __________'",
            "3. 'My boss is strict.' → 'My boss is as __________ as __________'",
            "4. 'The meeting was long.' → 'The meeting felt like __________'",
            "Bonus: Describe your job using a metaphor."
        ],
        teacherNote: "Contoh: 'The coffee was like liquid fuel.' 'The traffic was a parking lot.'"
    },

    // SLIDE 12: IDIOMS FOR DESCRIPTION
    {
        type: 'vocabulary',
        title: "Descriptive Idioms",
        subtitle: "Cara native speaker yang natural.",
        vocabulary: [
            { term: "A piece of cake", meaning: "Sangat mudah", example: "The test was a piece of cake." },
            { term: "Like a fish out of water", meaning: "Tidak nyaman/asing", example: "At the formal dinner, I felt like a fish out of water." },
            { term: "The tip of the iceberg", meaning: "Sedikit dari yang sebenarnya", example: "The problem we see is just the tip of the iceberg." },
            { term: "A breath of fresh air", meaning: "Segar dan menyenangkan", example: "Her ideas were a breath of fresh air." },
            { term: "Like night and day", meaning: "Sangat berbeda", example: "Before and after the renovation - like night and day!" },
            { term: "Head over heels", meaning: "Sangat jatuh cinta", example: "He's head over heels for her." }
        ]
    },

    // SLIDE 13: MICRO-DRILL 2
    {
        type: 'micro-drill',
        title: "Upgrade These Sentences",
        subtitle: "Ganti kata-kata generic dengan descriptive words.",
        mission: [
            "1. 'The weather was nice.' → _______________________________",
            "2. 'The hotel was good.' → _______________________________",
            "3. 'The meeting was bad.' → _______________________________",
            "4. 'I'm happy with my job.' → _______________________________",
            "5. 'The presentation was interesting.' → _______________________________"
        ],
        teacherNote: "Berbagai jawaban mungkin. Fokus pada specific details dan sensory words."
    },

    // SLIDE 14: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: Describe Your Weekend",
        subtitle: "Gunakan minimal 5 descriptive words.",
        roleplay: {
            scenario: "Describe your weekend (or a recent experience) to your partner. Use sensory words, metaphors, and avoid 'good/nice/bad'. Your partner should be able to visualize the experience.",
            roles: [
                { role: "You", goal: "Use vivid, descriptive language. Paint a picture with words." },
                { role: "Partner", goal: "Listen and visualize. Ask follow-up questions about details." }
            ]
        },
        teacherNote: "Dengarkan dan catat kata-kata generic yang masih digunakan. Beri alternatif."
    },

    // SLIDE 15: SMELL & TOUCH SENSORY
    {
        type: 'vocabulary',
        title: "Describing Smell & Touch",
        subtitle: "Lengkapi sensory vocabulary Anda.",
        vocabulary: [
            { term: "Fragrant / Aromatic", meaning: "Wangi harum", example: "The kitchen was filled with aromatic spices." },
            { term: "Pungent / Foul", meaning: "Tajam/bau tidak sedap", example: "A pungent smell came from the kitchen." },
            { term: "Musty / Stuffy", meaning: "Bau lembap/ pengap", example: "The old room had a musty smell." },
            { term: "Rough / Coarse", meaning: "Kasar", example: "The towel felt rough against my skin." },
            { term: "Silky / Smooth", meaning: "Halus lembut", example: "Her hair was silky and smooth." },
            { term: "Prickly / Sticky", meaning: "Berbulu/lengket", example: "The humidity made my skin feel sticky." }
        ]
    },

    // SLIDE 16: DESCRIPTIVE VERBS
    {
        type: 'vocabulary',
        title: "Power Verbs for Description",
        subtitle: "Ganti 'walk' dan 'say' dengan kata yang lebih descriptive.",
        vocabulary: [
            { term: "Stroll / March / Tiptoe", meaning: "Variasi berjalan", example: "She strolled along the beach at sunset." },
            { term: "Whisper / Mumble / Shout", meaning: "Variasi berbicara", example: "He whispered the secret in my ear." },
            { term: "Gaze / Glance / Stare", meaning: "Variasi melihat", example: "They gazed at the stars all night." },
            { term: "Devour / Nibble / Savor", meaning: "Variasi makan", example: "We savored every bite of the meal." },
            { term: "Chuckle / Giggle / Roar", meaning: "Variasi tertawa", example: "The audience roared with laughter." }
        ]
    },

    // SLIDE 17: WEATHER DESCRIPTIONS
    {
        type: 'vocabulary',
        title: "Describing Weather",
        subtitle: "Dari 'hot' dan 'cold' menjadi lebih vivid.",
        vocabulary: [
            { term: "Scorching / Sweltering", meaning: "Panas terik", example: "The scorching sun made us seek shade." },
            { term: "Chilly / Nippy / Freezing", meaning: "Dingin", example: "A nippy wind blew through the streets." },
            { term: "Drizzle / Downpour", meaning: "Hujan ringan/deras", example: "A sudden downpour soaked everyone." },
            { term: "Overcast / Cloudy", meaning: "Mendung", example: "The sky was overcast all afternoon." },
            { term: "Humid / Muggy", meaning: "Lembab", example: "The muggy air made it hard to breathe." }
        ]
    },

    // SLIDE 18: PEOPLE DESCRIPTIONS
    {
        type: 'vocabulary',
        title: "Describing People",
        subtitle: "Dari personality sampai appearance.",
        vocabulary: [
            { term: "Charismatic / Charming", meaning: "Memesona", example: "He has a charismatic personality." },
            { term: "Eccentric / Quirky", meaning: "Unik/aneh", example: "She has a quirky sense of style." },
            { term: "Distinguished / Elegant", meaning: "Anggun/berkelas", example: "She looked elegant in that dress." },
            { term: "Disheveled / Immaculate", meaning: "Berantakan/rapi", example: "His room was always immaculate." },
            { term: "Radiant / Glowing", meaning: "Bersinar (happy)", example: "The bride looked radiant." }
        ]
    },

    // SLIDE 19: WRITING PRACTICE
    {
        type: 'micro-drill',
        title: "Write a Descriptive Paragraph",
        subtitle: "Gunakan semua teknik yang sudah dipelajari.",
        mission: [
            "Tulis 3-4 kalimat tentang:",
            "1. Makanan favorit Anda (gunakan taste + texture words)",
            "2. Tempat liburan terakhir (gunakan visual + smell words)",
            "3. Gunakan minimal 1 simile atau metaphor",
            "4. Hindari: good, nice, bad, delicious, beautiful"
        ],
        teacherNote: "Ini bisa jadi writing homework. Kumpulkan dan beri feedback."
    },

    // SLIDE 20: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Descriptive English",
        recap: [
            { context: "Describing food", sayThis: "Mouthwatering, savory, crispy, velvety", dontSayThis: "Good, delicious, tasty" },
            { context: "Describing feelings", sayThis: "Ecstatic, devastated, relieved, frustrated", dontSayThis: "Happy, sad, good, bad" },
            { context: "Describing places", sayThis: "Breathtaking, bustling, serene, vibrant", dontSayThis: "Nice, beautiful, good" },
            { context: "Storytelling", sayThis: "Show with specific sensory details", dontSayThis: "Tell with generic adjectives" },
            { context: "Making comparisons", sayThis: "Metaphors and similes", dontSayThis: "Very, really, so" }
        ]
    },

    // SLIDE 21: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Build your descriptive vocabulary.",
        mission: [
            "Pick 5 new descriptive words and use them daily",
            "Describe one experience per day using sensory details",
            "Replace 'good' and 'nice' with specific alternatives",
            "Create 3 original metaphors about your work/life",
            "Notice descriptive language in books/movies you consume"
        ],
        teacherNote: "Challenge: Setelah 1 minggu, mereka tidak akan pernah bilang 'the food was delicious' lagi!"
    }
];

export const quiz: QuizQuestion[] = [];
