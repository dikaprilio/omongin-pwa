/**
 * Topic 06: The "Rasa" Class - Descriptive English
 * -------------------------------------------------
 * 30 questions covering descriptive vocabulary, sensory words,
 * metaphors, and show-don't-tell principles.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 6,
    path: 'speaking-adults',
    title: "Descriptive English: Beyond 'Good'",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "adult-06-001",
            question: "Upgrade terbaik untuk 'The food was good' adalah:",
            options: [
                "The food was nice.",
                "The food was very good.",
                "The food was mouthwatering and flavorful.",
                "The food was okay."
            ],
            correctIndex: 2,
            explanation: "'Mouthwatering and flavorful' adalah descriptive words yang evocative, tidak generic.",
            difficulty: "easy",
            tags: ["vocabulary", "upgrade"]
        },
        {
            id: "adult-06-002",
            question: "Kata sifat mana yang paling descriptive untuk 'happy'?",
            options: [
                "Very happy",
                "A bit happy",
                "Ecstatic / Thrilled / Overjoyed",
                "More happy"
            ],
            correctIndex: 2,
            explanation: "'Ecstatic', 'thrilled', 'overjoyed' adalah specific emotional states, bukan intensifier generic.",
            difficulty: "easy",
            tags: ["emotions", "vocabulary"]
        },
        {
            id: "adult-06-003",
            question: "Apa yang dimaksud dengan 'Show, Don't Tell'?",
            options: [
                "Tunjukkan gambar saat bicara",
                "Gunakan specific details daripada general statements",
                "Ceritakan semuanya secara lengkap",
                "Tunjukkan dengan bahasa isyarat"
            ],
            correctIndex: 1,
            explanation: "Show = specific details (The steak melted in my mouth). Tell = general (The food was good).",
            difficulty: "easy",
            tags: ["concept", "show-dont-tell"]
        },
        {
            id: "adult-06-004",
            question: "Simile yang benar adalah:",
            options: [
                "Her smile is sunshine.",
                "Her smile was like sunshine.",
                "Her smile as sunshine.",
                "Her smile sunshine."
            ],
            correctIndex: 1,
            explanation: "Simile menggunakan 'like' atau 'as' untuk membandingkan. 'Her smile was like sunshine.'",
            difficulty: "easy",
            tags: ["simile", "grammar"]
        },
        {
            id: "adult-06-005",
            question: "Deskripsi tekstur untuk 'crispy' adalah:",
            options: [
                "Soft and mushy",
                "Renyah",
                "Smooth and creamy",
                "Wet and soggy"
            ],
            correctIndex: 1,
            explanation: "Crispy = renyah, bertekstur keras yang pecah saat digigit (fried chicken, kerupuk).",
            difficulty: "easy",
            tags: ["texture", "vocabulary"]
        },
        {
            id: "adult-06-006",
            question: "Kata mana yang BUKAN sinonim dari 'beautiful'?",
            options: [
                "Breathtaking",
                "Stunning",
                "Gorgeous",
                "Bland"
            ],
            correctIndex: 3,
            explanation: "Bland = hambar/tanpa ciri khas (untuk makanan atau sesuatu yang membosankan), bukan sinonim beautiful.",
            difficulty: "easy",
            tags: ["vocabulary", "synonyms"]
        },
        {
            id: "adult-06-007",
            question: "Apa bedanya simile dan metaphor?",
            options: [
                "Tidak ada bedanya",
                "Simile pakai 'like/as', metaphor langsung menyamakan",
                "Simile lebih kuat dari metaphor",
                "Metaphor hanya untuk puisi"
            ],
            correctIndex: 1,
            explanation: "Simile: 'Her smile was LIKE sunshine.' Metaphor: 'Her smile WAS sunshine.' (langsung menyamakan).",
            difficulty: "easy",
            tags: ["simile", "metaphor", "grammar"]
        },
        {
            id: "adult-06-008",
            question: "Deskripsi yang lebih baik untuk 'tired':",
            options: [
                "Very tired",
                "Exhausted / Drained / Worn out",
                "More tired",
                "So tired"
            ],
            correctIndex: 1,
            explanation: "'Exhausted', 'drained', 'worn out' adalah specific states of tiredness yang lebih evocative.",
            difficulty: "easy",
            tags: ["vocabulary", "upgrade"]
        },
        {
            id: "adult-06-009",
            question: "'Velvety' digunakan untuk mendeskripsikan:",
            options: [
                "Suara yang keras",
                "Tekstur yang lembut halus",
                "Rasa yang asam",
                "Warna yang cerah"
            ],
            correctIndex: 1,
            explanation: "Velvety = lembut seperti beludru, digunakan untuk texture (soup, chocolate) atau sound (voice).",
            difficulty: "easy",
            tags: ["texture", "vocabulary"]
        },
        {
            id: "adult-06-010",
            question: "Idiom 'A breath of fresh air' berarti:",
            options: [
                "Udara segar di pagi hari",
                "Sesuatu/seseorang yang baru dan menyegarkan",
                "Merasakan lega",
                "Kehabisan napas"
            ],
            correctIndex: 1,
            explanation: "'A breath of fresh air' = sesuatu yang baru, berbeda, dan menyegarkan dari yang biasa.",
            difficulty: "easy",
            tags: ["idioms", "vocabulary"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "adult-06-011",
            question: "Contoh 'Show, Don't Tell' yang baik untuk 'I was tired':",
            options: [
                "I was very tired.",
                "I was extremely tired.",
                "My eyes were heavy and I could barely keep them open.",
                "I felt so tired yesterday."
            ],
            correctIndex: 2,
            explanation: "'My eyes were heavy...' menunjukkan kelelahan melalui specific physical details, bukan cuma state the fact.",
            difficulty: "medium",
            tags: ["show-dont-tell", "example"]
        },
        {
            id: "adult-06-012",
            question: "Mengapa native speaker jarang bilang 'The food is delicious'?",
            options: [
                "Karena grammar-nya salah",
                "Karena 'delicious' sudah terlalu common/generic",
                "Karena makanan tidak bisa delicious",
                "Karena mereka tidak suka makanan"
            ],
            correctIndex: 1,
            explanation: "'Delicious' adalah generic. Native speaker lebih sering pakai specific: mouthwatering, flavorful, divine, scrumptious.",
            difficulty: "medium",
            tags: ["nuance", "vocabulary"]
        },
        {
            id: "adult-06-013",
            question: "Simile yang tepat untuk kopi yang sangat kuat:",
            options: [
                "The coffee was like water.",
                "The coffee was like liquid fuel.",
                "The coffee was like tea.",
                "The coffee was like juice."
            ],
            correctIndex: 1,
            explanation: "'Like liquid fuel' adalah simile yang evocative untuk kopi yang sangat kuat/strong.",
            difficulty: "medium",
            tags: ["simile", "creative"]
        },
        {
            id: "adult-06-014",
            question: "Kata yang paling tepat untuk 'macet parah':",
            options: [
                "The traffic was bad.",
                "The traffic was a nightmare / at a standstill / bumper-to-bumper",
                "The traffic was not good.",
                "The traffic was slow."
            ],
            correctIndex: 1,
            explanation: "'Nightmare', 'at a standstill', 'bumper-to-bumper' adalah descriptive phrases untuk macet parah.",
            difficulty: "medium",
            tags: ["vocabulary", "upgrade"]
        },
        {
            id: "adult-06-015",
            question: "'Bittersweet' digunakan untuk mendeskripsikan:",
            options: [
                "Makanan yang pahit",
                "Perasaan campuran senang dan sedih",
                "Coklat hitam",
                "Pengalaman yang buruk"
            ],
            correctIndex: 1,
            explanation: "Bittersweet = campuran bitter (pahit) dan sweet (manis) = perasaan yang campuran senang dan sedih.",
            difficulty: "medium",
            tags: ["emotions", "vocabulary"]
        },
        {
            id: "adult-06-016",
            question: "Metaphor yang tepat untuk 'time is valuable':",
            options: [
                "Time is like money.",
                "Time is money.",
                "Time looks like money.",
                "Time and money are similar."
            ],
            correctIndex: 1,
            explanation: "'Time is money' adalah metaphor (langsung menyamakan). 'Time is like money' adalah simile.",
            difficulty: "medium",
            tags: ["metaphor", "idioms"]
        },
        {
            id: "adult-06-017",
            question: "Deskripsi visual terbaik untuk sunset yang indah:",
            options: [
                "The sunset was beautiful.",
                "The sunset was breathtaking with vibrant hues of orange and pink painting the sky.",
                "The sunset was very nice.",
                "The sunset was good to see."
            ],
            correctIndex: 1,
            explanation: "'Breathtaking with vibrant hues... painting the sky' menggunakan sensory details dan descriptive words.",
            difficulty: "medium",
            tags: ["visual", "descriptive"]
        },
        {
            id: "adult-06-018",
            question: "Idiom 'Like a fish out of water' berarti:",
            options: [
                "Seseorang yang suka berenang",
                "Seseorang yang merasa tidak nyaman/asing di lingkungan baru",
                "Seseorang yang sedang kehausan",
                "Seseorang yang suka ikan"
            ],
            correctIndex: 1,
            explanation: "'Like a fish out of water' = merasa tidak nyaman, asing, atau tidak bisa beradaptasi di lingkungan baru.",
            difficulty: "medium",
            tags: ["idioms", "vocabulary"]
        },
        {
            id: "adult-06-019",
            question: "Kata mana yang menggambarkan suara yang menenangkan?",
            options: [
                "Deafening",
                "Soothing / Melodic",
                "Ear-splitting",
                "Piercing"
            ],
            correctIndex: 1,
            explanation: "'Soothing' dan 'melodic' menenangkan. 'Deafening', 'ear-splitting', 'piercing' adalah suara keras/nyaring.",
            difficulty: "medium",
            tags: ["sound", "vocabulary"]
        },
        {
            id: "adult-06-020",
            question: "Mengapa 'show, don't tell' penting dalam storytelling?",
            options: [
                "Karena lebih pendek",
                "Karena membuat pendengar bisa memvisualisasikan dan merasakan pengalaman",
                "Karena lebih mudah",
                "Karena grammar-nya lebih sederhana"
            ],
            correctIndex: 1,
            explanation: "Show membuat pendengar memvisualisasikan dan emotionally engage. Tell hanya memberi informasi kering.",
            difficulty: "medium",
            tags: ["storytelling", "concept"]
        },
        {
            id: "adult-06-021",
            question: "Upgrade terbaik untuk 'The meeting was long':",
            options: [
                "The meeting was very long.",
                "The meeting felt like it would never end. / The meeting dragged on for hours.",
                "The meeting was too long.",
                "The meeting was so long."
            ],
            correctIndex: 1,
            explanation: "'Felt like it would never end' atau 'dragged on' menunjukkan experience waktu yang berat, bukan cuma durasi.",
            difficulty: "medium",
            tags: ["upgrade", "creative"]
        },
        {
            id: "adult-06-022",
            question: "'Fluffy' dan 'airy' menggambarkan tekstur yang:",
            options: [
                "Berat dan padat",
                "Ringan dan empuk dengan banyak udara",
                "Lengket dan kenyal",
                "Keras dan renyah"
            ],
            correctIndex: 1,
            explanation: "Fluffy dan airy menggambarkan tekstur yang ringan, empuk, dengan banyak udara (pancakes, sponge cake).",
            difficulty: "medium",
            tags: ["texture", "vocabulary"]
        },
        {
            id: "adult-06-023",
            question: "Contoh metaphor untuk 'He is very busy with work':",
            options: [
                "He is like a busy bee.",
                "He is a busy bee.",
                "He works like hard.",
                "He is as busy as a bee."
            ],
            correctIndex: 1,
            explanation: "'He IS a busy bee' adalah metaphor (langsung menyamakan). Yang lain adalah simile (like/as).",
            difficulty: "medium",
            tags: ["metaphor", "example"]
        },

        // === HARD (8 questions) ===
        {
            id: "adult-06-024",
            question: "Analisis: 'The restaurant was good. The food was nice. The service was okay.' Apa masalahnya?",
            options: [
                "Grammar-nya salah",
                "Semua kata sifat terlalu generic - tidak ada vivid description",
                "Tidak ada masalah",
                "Terlalu banyak informasi"
            ],
            correctIndex: 1,
            explanation: "'Good', 'nice', 'okay' adalah dead words. Tidak ada vivid imagery atau specific details.",
            difficulty: "hard",
            tags: ["analysis", "descriptive"]
        },
        {
            id: "adult-06-025",
            question: "Mengapa menggunakan 5 senses dalam description itu powerful?",
            options: [
                "Karena lebih panjang",
                "Karena mengaktifkan berbagai bagian otak pendengar untuk pengalaman yang lebih immersive",
                "Karena lebih sulit",
                "Karena semua orang suka 5 senses"
            ],
            correctIndex: 1,
            explanation: "Sensory language mengaktifkan cortex sensorik otak pendengar, menciptakan pengalaman yang immersive.",
            difficulty: "hard",
            tags: ["neuroscience", "sensory"]
        },
        {
            id: "adult-06-026",
            question: "Susun descriptive sentence tentang 'hujan' yang paling evocative:",
            options: [
                "It was raining.",
                "It was raining heavily.",
                "The rain came down in sheets, drumming against the windows with a rhythmic fury.",
                "There was a lot of rain."
            ],
            correctIndex: 2,
            explanation: "'Came down in sheets' (visual) + 'drumming' (sound) + 'rhythmic fury' (emotion) = multi-sensory description.",
            difficulty: "hard",
            tags: ["creative", "sensory"]
        },
        {
            id: "adult-06-027",
            question: "Dalam konteks bisnis, mengapa descriptive language tetap penting?",
            options: [
                "Tidak penting, bisnis hanya butuh data",
                "Karena membantu membuat pesan lebih memorable dan persuasive",
                "Karena membuat email lebih panjang",
                "Karena bos suka kata-kata bagus"
            ],
            correctIndex: 1,
            explanation: "Descriptive language dalam storytelling bisnis membuat pesan lebih memorable, engaging, dan persuasive.",
            difficulty: "hard",
            tags: ["business", "communication"]
        },
        {
            id: "adult-06-028",
            question: "Apa perbedaan nuansa antara 'I'm sad' dan 'I'm devastated'?",
            options: [
                "Tidak ada bedanya",
                "'Devastated' adalah level intensity yang jauh lebih tinggi",
                "'Sad' lebih formal",
                "'Devastated' tidak bisa untuk orang"
            ],
            correctIndex: 1,
            explanation: "Devastated = level sadness yang extreme (kehilangan orang tersayang, kebangkrutan). Sad = general unhappiness.",
            difficulty: "hard",
            tags: ["nuance", "emotions"]
        },
        {
            id: "adult-06-029",
            question: "Buat metaphor untuk 'My job is stressful':",
            options: [
                "My job is like a stress.",
                "My job is a pressure cooker / an emotional rollercoaster / a never-ending marathon",
                "My job is as stress as heavy",
                "My job is stress and work"
            ],
            correctIndex: 1,
            explanation: "'Pressure cooker', 'rollercoaster', 'marathon' adalah metaphor yang evocative untuk stress kerja.",
            difficulty: "hard",
            tags: ["creative", "metaphor"]
        },
        {
            id: "adult-06-030",
            question: "Final Challenge: Kalimat mana yang menggunakan SEMUA prinsip descriptive writing dengan baik?",
            options: [
                "The party was good.",
                "The party was very nice and I enjoyed it.",
                "The party was a whirlwind of laughter, the air thick with the aroma of spices, and the music pulsing through the room like a heartbeat.",
                "The party had food and music and people."
            ],
            correctIndex: 2,
            explanation: "Ini menggunakan: metaphor (whirlwind), sound (laughter, music), smell (aroma), touch/feeling (pulsing), dan show don't tell.",
            difficulty: "hard",
            tags: ["mastery", "descriptive"]
        }
    ]
};
