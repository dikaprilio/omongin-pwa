/**
 * Topic 16: The Weather Reporter ☀️
 * ----------------------------------
 * 30 questions about weather, seasons, and describing the weather
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 16,
    path: 'speaking-kids',
    title: "The Weather Reporter ☀️",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-16-001",
            question: "☀️ 'The ___ shines brightly in the sky.'",
            options: ["moon", "star", "sun", "cloud"],
            correctIndex: 2,
            explanation: "Sun (matahari) shines brightly (bersinar terang) di langit.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-002",
            question: "Terjemahkan: 'Hari ini panas.'",
            options: [
                "Today is cold.",
                "Today is rainy.",
                "Today is hot.",
                "Today is windy."
            ],
            correctIndex: 2,
            explanation: "Today is hot = Hari ini panas. Hot = panas.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-003",
            question: "🌧️ Saat hujan, kita memakai...",
            options: ["Sunglasses", "Umbrella", "Scarf", "Hat"],
            correctIndex: 1,
            explanation: "Umbrella (payung) dipakai saat hujan (rainy).",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-004",
            question: "Pilih kata yang benar: 'It ___ raining outside.' (Sedang)",
            options: ["is", "are", "am", "be"],
            correctIndex: 0,
            explanation: "It is raining = Sedang hujan. It (cuaca) pakai 'is'.",
            difficulty: "easy",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-16-005",
            question: "❄️ Salju dalam bahasa Inggris adalah...",
            options: ["Rain", "Snow", "Ice", "Wind"],
            correctIndex: 1,
            explanation: "Snow artinya salju. Rain = hujan, Ice = es, Wind = angin.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-006",
            question: "☁️ 'The sky is full of white ___.'",
            options: ["rain", "snow", "clouds", "sun"],
            correctIndex: 2,
            explanation: "Clouds artinya awan-awan. White clouds = awan putih.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-007",
            question: "'It is very ___ today.' (Dingin)",
            options: ["hot", "cold", "warm", "cool"],
            correctIndex: 1,
            explanation: "Cold artinya dingin. Hot = panas, Warm = hangat, Cool = sejuk.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-008",
            question: "🌈 'After the rain, we can see a beautiful ___.'",
            options: ["star", "moon", "rainbow", "cloud"],
            correctIndex: 2,
            explanation: "Rainbow (pelangi) muncul setelah hujan.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-009",
            question: "Pilih kata yang tepat: 'The wind is ___ strongly.' (Meniup)",
            options: ["rain", "snow", "blowing", "shining"],
            correctIndex: 2,
            explanation: "The wind is blowing = Angin sedang bertiup. Blowing = meniup.",
            difficulty: "easy",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-010",
            question: "🌸 Musim semi dalam bahasa Inggris adalah...",
            options: ["Summer", "Winter", "Spring", "Autumn"],
            correctIndex: 2,
            explanation: "Spring artinya musim semi. Summer = musim panas, Winter = musim dingin, Autumn/Fall = musim gugur.",
            difficulty: "easy",
            tags: ["vocabulary", "seasons"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-16-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "The weather are nice today.",
                "The weather is nice today.",
                "The weather be nice today.",
                "The weather nice today."
            ],
            correctIndex: 1,
            explanation: "The weather (cuaca - tunggal) pakai 'is'. Is nice = bagus/nyaman.",
            difficulty: "medium",
            tags: ["grammar", "to-be"]
        },
        {
            id: "kids-16-012",
            question: "🌪️ 'A ___ is a very strong, spinning wind.'",
            options: ["Rain", "Tornado", "Snow", "Fog"],
            correctIndex: 1,
            explanation: "Tornado (tornado/puting beliung) adalah angin yang sangat kuat dan berputar.",
            difficulty: "medium",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-013",
            question: "'___ the weather today?' Pilih kata yang tepat:",
            options: [
                "What is",
                "How is",
                "Where is",
                "Who is"
            ],
            correctIndex: 1,
            explanation: "How is the weather today? = Bagaimana cuaca hari ini? How untuk menanyakan keadaan.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-16-014",
            question: "☔ 'Don't forget to bring your ___. It might rain.'",
            options: ["sunglasses", "umbrella", "fan", "hat"],
            correctIndex: 1,
            explanation: "Umbrella (payung) dibawa saat mungkin hujan (might rain).",
            difficulty: "medium",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-015",
            question: "Terjemahkan: 'Sedang bersalju di luar.'",
            options: [
                "It is rain outside.",
                "It is snowing outside.",
                "It is windy outside.",
                "It is cloud outside."
            ],
            correctIndex: 1,
            explanation: "It is snowing outside = Sedang bersalju di luar. Snowing = sedang turun salju.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-16-016",
            question: "🌞 '___ is the hottest season of the year.'",
            options: ["Winter", "Spring", "Summer", "Autumn"],
            correctIndex: 2,
            explanation: "Summer (musim panas) adalah musim paling panas (hottest season) dalam setahun.",
            difficulty: "medium",
            tags: ["vocabulary", "seasons"]
        },
        {
            id: "kids-16-017",
            question: "Pilih yang benar: 'In Indonesia, we only have ___ seasons.'",
            options: ["two", "three", "four", "five"],
            correctIndex: 0,
            explanation: "Indonesia hanya memiliki dua musim: musim hujan (rainy season) dan musim kemarau (dry season).",
            difficulty: "medium",
            tags: ["vocabulary", "seasons"]
        },
        {
            id: "kids-16-018",
            question: "🌩️ 'There is thunder and ___ outside.'",
            options: ["sun", "snow", "lightning", "rainbow"],
            correctIndex: 2,
            explanation: "Lightning (petir/kilat) biasanya bersamaan dengan thunder (guntur).",
            difficulty: "medium",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-019",
            question: "Apa arti dari 'forecast'?",
            options: [
                "Peringatan",
                "Ramalan/prakiraan",
                "Keadaan",
                "Perubahan"
            ],
            correctIndex: 1,
            explanation: "Weather forecast artinya prakiraan cuaca.",
            difficulty: "medium",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-020",
            question: "🍂 'The leaves fall from the trees in ___'",
            options: ["Spring", "Summer", "Autumn/Fall", "Winter"],
            correctIndex: 2,
            explanation: "Autumn/Fall (musim gugur) adalah saat daun-daun jatuh dari pohon.",
            difficulty: "medium",
            tags: ["vocabulary", "seasons"]
        },
        {
            id: "kids-16-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "It often rain in the rainy season.",
                "It often rains in the rainy season.",
                "It often raining in the rainy season.",
                "It often to rain in the rainy season."
            ],
            correctIndex: 1,
            explanation: "It often rains = Sering hujan. It (tunggal) pakai rains.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-16-022",
            question: "⛅ 'The weather is ___ - not too hot and not too cold.'",
            options: ["freezing", "boiling", "mild", "stormy"],
            correctIndex: 2,
            explanation: "Mild artinya sejuk/nyaman - tidak terlalu panas dan tidak terlalu dingin.",
            difficulty: "medium",
            tags: ["vocabulary", "weather"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-16-023",
            question: "Susun kata berikut: 'weather / nice / is / the / very / today'",
            options: [
                "The weather is very nice today.",
                "The weather very is nice today.",
                "Today the weather is very nice.",
                "Very nice the weather is today."
            ],
            correctIndex: 0,
            explanation: "The weather is very nice today = Cuacanya sangat bagus hari ini.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-16-024",
            question: "🌡️ Apa yang digunakan untuk mengukur suhu?",
            options: ["Clock", "Thermometer", "Barometer", "Compass"],
            correctIndex: 1,
            explanation: "Thermometer adalah alat untuk mengukur suhu (temperature).",
            difficulty: "hard",
            tags: ["vocabulary", "science"]
        },
        {
            id: "kids-16-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither today nor yesterday was rainy.",
                "Neither today or yesterday was rainy.",
                "Neither today nor yesterday were rainy.",
                "Neither today and yesterday was rainy."
            ],
            correctIndex: 0,
            explanation: "Neither...nor dengan was (tunggal) karena yang dibandingkan adalah waktu (dianggap tunggal).",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-16-026",
            question: "🌊 'A very big ocean wave caused by underwater earthquake is called a ___'",
            options: ["Tornado", "Tsunami", "Hurricane", "Flood"],
            correctIndex: 1,
            explanation: "Tsunami adalah gelombang laut besar yang disebabkan oleh gempa bawah laut.",
            difficulty: "hard",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-027",
            question: "Apa arti dari 'humid'?",
            options: [
                "Dingin sekali",
                "Lembab (udara yang banyak uap airnya)",
                "Kering",
                "Panas terik"
            ],
            correctIndex: 1,
            explanation: "Humid artinya lembab - kondisi udara yang mengandung banyak uap air.",
            difficulty: "hard",
            tags: ["vocabulary", "weather"]
        },
        {
            id: "kids-16-028",
            question: "🌙 'The ___ is very hot during the day but very cold at night.'",
            options: ["beach", "mountain", "desert", "forest"],
            correctIndex: 2,
            explanation: "Desert (gurun) sangat panas di siang hari tapi sangat dingin di malam hari.",
            difficulty: "hard",
            tags: ["vocabulary", "geography"]
        },
        {
            id: "kids-16-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "There is some clouds in the sky.",
                "There are some clouds in the sky.",
                "There be some clouds in the sky.",
                "There is a clouds in the sky."
            ],
            correctIndex: 1,
            explanation: "There are untuk benda jamak. Some clouds = beberapa awan (jamak).",
            difficulty: "hard",
            tags: ["grammar", "there-is-are"]
        },
        {
            id: "kids-16-030",
            question: "Identifikasi semua error: 'The weathers yesterday were very colds and windies.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) weathers → weather (tidak ada jamak), 2) were → was (weather tunggal), 3) colds → cold, 4) windies → windy.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
