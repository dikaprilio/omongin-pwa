/**
 * Topic 15: Amazing Animals 🦁
 * -----------------------------
 * 30 questions about wild animals, their habitats, characteristics,
 * and behaviors for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 15,
    path: 'speaking-kids',
    title: "Amazing Animals 🦁",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-15-001",
            question: "🦁 'The lion is the king of the ___.'",
            options: ["ocean", "jungle", "sky", "desert"],
            correctIndex: 1,
            explanation: "Lion (singa) adalah king of the jungle (raja hutan).",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-002",
            question: "Terjemahkan: 'Gajah itu besar.'",
            options: [
                "The elephant is big.",
                "The elephant are big.",
                "The elephants is big.",
                "A elephant is big."
            ],
            correctIndex: 0,
            explanation: "The elephant is big adalah kalimat yang benar. Elephant (tunggal) pakai is.",
            difficulty: "easy",
            tags: ["grammar", "to-be"]
        },
        {
            id: "kids-15-003",
            question: "🐘 Hewan yang memiliki belalai panjang adalah...",
            options: ["Tiger", "Elephant", "Giraffe", "Zebra"],
            correctIndex: 1,
            explanation: "Elephant (gajah) memiliki belalai (trunk) yang panjang.",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-004",
            question: "Pilih kata yang benar: 'Fish ___ in the water.'",
            options: ["live", "lives", "living", "is live"],
            correctIndex: 0,
            explanation: "Fish bisa tunggal atau jamak. Fish live = ikan-ikan hidup.",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-15-005",
            question: "🦒 'The ___ has a very long neck.'",
            options: ["lion", "elephant", "giraffe", "hippo"],
            correctIndex: 2,
            explanation: "Giraffe (jerapah) memiliki leher yang sangat panjang (long neck).",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-006",
            question: "🐦 'Birds can ___.'",
            options: ["swim", "fly", "run fast", "jump high"],
            correctIndex: 1,
            explanation: "Birds (burung-burung) dapat fly (terbang).",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-007",
            question: "Hewan yang bisa berenang dan berjalan di darat adalah...",
            options: ["Dog", "Frog", "Cat", "Bird"],
            correctIndex: 1,
            explanation: "Frog (katak) bisa berenang di air dan melompat di darat.",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-008",
            question: "🐼 '___ eat bamboo.' (Panda)",
            options: ["It", "They", "He", "She"],
            correctIndex: 1,
            explanation: "Pandas (jamak) menggunakan They (mereka). They eat bamboo = Mereka makan bambu.",
            difficulty: "easy",
            tags: ["grammar", "pronouns"]
        },
        {
            id: "kids-15-009",
            question: "'The cat ___ four legs.' (Memiliki)",
            options: ["have", "has", "having", "is have"],
            correctIndex: 1,
            explanation: "The cat (tunggal) pakai 'has'. Has = memiliki (tunggal).",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-15-010",
            question: "🐯 Hewan yang memiliki garis-garis hitam adalah...",
            options: ["Lion", "Leopard", "Tiger", "Cheetah"],
            correctIndex: 2,
            explanation: "Tiger (harimau) memiliki garis-garis (stripes) hitam.",
            difficulty: "easy",
            tags: ["vocabulary", "animals"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-15-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "The monkey like to eat bananas.",
                "The monkey likes to eat bananas.",
                "The monkeys likes to eat bananas.",
                "The monkey liking to eat bananas."
            ],
            correctIndex: 1,
            explanation: "The monkey (tunggal) pakai 'likes'. Likes to eat = suka makan.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-15-012",
            question: "🦈 'Sharks live in the ___.'",
            options: ["forest", "ocean", "mountain", "desert"],
            correctIndex: 1,
            explanation: "Sharks (hiu) live in the ocean (hidup di lautan/samudra).",
            difficulty: "medium",
            tags: ["vocabulary", "habitats"]
        },
        {
            id: "kids-15-013",
            question: "'___ do kangaroos live?' Pilih kata yang tepat:",
            options: ["What", "Where", "When", "Who"],
            correctIndex: 1,
            explanation: "Where do kangaroos live? = Di mana kanguru hidup? Where untuk menanyakan tempat.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-15-014",
            question: "🐊 'The crocodile has sharp ___.'",
            options: ["claws", "teeth", "horns", "wings"],
            correctIndex: 1,
            explanation: "Crocodile (buaya) memiliki sharp teeth (gigi tajam).",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-015",
            question: "Terjemahkan: 'Kambing-kambing sedang makan rumput.'",
            options: [
                "The goat is eating grass.",
                "The goats is eating grass.",
                "The goats are eating grass.",
                "The goat are eating grass."
            ],
            correctIndex: 2,
            explanation: "The goats (jamak) pakai 'are'. Are eating = sedang makan.",
            difficulty: "medium",
            tags: ["grammar", "present-continuous"]
        },
        {
            id: "kids-15-016",
            question: "🦅 'An eagle can see its prey from high ___'",
            options: ["in the ground", "in the sky", "in the water", "in the tree"],
            correctIndex: 1,
            explanation: "Eagle (elang) terbang in the sky (di langit) dan melihat mangsa dari ketinggian.",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-017",
            question: "Pilih yang benar: 'Dolphins are very ___ animals.' (Pintar)",
            options: ["stupid", "intelligent", "slow", "lazy"],
            correctIndex: 1,
            explanation: "Intelligent artinya pintar/cerdas. Dolphins (lumba-lumba) adalah hewan yang cerdas.",
            difficulty: "medium",
            tags: ["vocabulary", "adjectives"]
        },
        {
            id: "kids-15-018",
            question: "🐍 'A snake moves without ___.'",
            options: ["eyes", "legs", "head", "tail"],
            correctIndex: 1,
            explanation: "Snake (ular) bergerak tanpa legs (kaki). Ular melata.",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-019",
            question: "Apa arti dari 'endangered animals'?",
            options: [
                "Hewan yang berbahaya",
                "Hewan yang hampir punah",
                "Hewan yang banyak",
                "Hewan yang baru lahir"
            ],
            correctIndex: 1,
            explanation: "Endangered animals artinya hewan yang hampir punah/terancam punah.",
            difficulty: "medium",
            tags: ["vocabulary", "environment"]
        },
        {
            id: "kids-15-020",
            question: "🦓 'Zebras have black and white ___.'",
            options: ["dots", "stripes", "spots", "patterns"],
            correctIndex: 1,
            explanation: "Zebras (zebra) memiliki stripes (garis-garis) hitam dan putih.",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "The bird can flies.",
                "The bird can fly.",
                "The bird can flying.",
                "The bird can to fly."
            ],
            correctIndex: 1,
            explanation: "Can + kata kerja bentuk dasar. The bird can fly = Burung itu bisa terbang.",
            difficulty: "medium",
            tags: ["grammar", "modals"]
        },
        {
            id: "kids-15-022",
            question: "🦒 'Giraffes eat leaves from tall ___'",
            options: ["bushes", "trees", "grass", "flowers"],
            correctIndex: 1,
            explanation: "Giraffes (jerapah) makan daun dari tall trees (pohon-pohon tinggi).",
            difficulty: "medium",
            tags: ["vocabulary", "animals"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-15-023",
            question: "Susun kata berikut: 'fast / cheetah / can / very / run'",
            options: [
                "Cheetah can run very fast.",
                "Cheetah can very fast run.",
                "Cheetah very fast can run.",
                "Can cheetah run very fast."
            ],
            correctIndex: 0,
            explanation: "Cheetah can run very fast = Cheetah bisa berlari sangat cepat.",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-15-024",
            question: "🐧 Apa yang membedakan penguin dari burung lainnya?",
            options: [
                "Penguin bisa terbang",
                "Penguin tidak bisa terbang tapi bisa berenang",
                "Penguin tinggal di hutan",
                "Penguin makan daging"
            ],
            correctIndex: 1,
            explanation: "Penguin tidak bisa terbang (fly) tetapi bisa berenang (swim) dengan sangat baik.",
            difficulty: "hard",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither the lion nor the tiger eat vegetables.",
                "Neither the lion or the tiger eats vegetables.",
                "Neither the lion nor the tiger eats vegetables.",
                "Neither the lion and the tiger eat vegetables."
            ],
            correctIndex: 2,
            explanation: "Neither...nor menggunakan eats (tunggal) karena subject terdekat adalah 'tiger'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-15-026",
            question: "🐨 'Koalas sleep for about ___ hours a day.'",
            options: ["5", "10", "18", "24"],
            correctIndex: 2,
            explanation: "Koalas (koala) tidur sekitar 18-20 jam sehari karena makanan mereka (eucalyptus) membuat mereka mengantuk.",
            difficulty: "hard",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-027",
            question: "Apa arti dari 'habitat'?",
            options: [
                "Makanan hewan",
                "Tempat tinggal alami hewan",
                "Musuh hewan",
                "Teman hewan"
            ],
            correctIndex: 1,
            explanation: "Habitat artinya tempat tinggal alami/hewan di alam liar.",
            difficulty: "hard",
            tags: ["vocabulary", "science"]
        },
        {
            id: "kids-15-028",
            question: "🐘 'Elephants use their trunks to ___'",
            options: ["see", "smell and pick up food", "hear", "fly"],
            correctIndex: 1,
            explanation: "Elephants (gajah) menggunakan trunks (belalai) untuk mencium bau dan mengambil makanan.",
            difficulty: "hard",
            tags: ["vocabulary", "animals"]
        },
        {
            id: "kids-15-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "There is many animals in the zoo.",
                "There are many animals in the zoo.",
                "There be many animals in the zoo.",
                "There is much animals in the zoo."
            ],
            correctIndex: 1,
            explanation: "There are untuk benda yang bisa dihitung jamak (countable plural). Many animals = jamak.",
            difficulty: "hard",
            tags: ["grammar", "there-is-are"]
        },
        {
            id: "kids-15-030",
            question: "Identifikasi semua error: 'My favorite animal are elephant because they is very smart and cutee.'",
            options: [
                "2 errors",
                "3 errors",
                "4 errors",
                "5 errors"
            ],
            correctIndex: 2,
            explanation: "Errors: 1) are → is (animal tunggal), 2) they is → they are (they jamak), 3) cutee → cute (ejaan salah).",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
