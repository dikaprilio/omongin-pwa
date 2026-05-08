/**
 * Topic 18: Doctor, Help! 🏥
 * --------------------------
 * 30 questions about health, body parts, illnesses, and visiting the doctor
 * for kids ages 7-12.
 */

import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 18,
    path: 'speaking-kids',
    title: "Doctor, Help! 🏥",
    totalQuestions: 30,
    questions: [
        // === EASY (10 questions) ===
        {
            id: "kids-18-001",
            question: "🏥 'When I am sick, I go to the ___.'",
            options: ["school", "hospital", "park", "mall"],
            correctIndex: 1,
            explanation: "Hospital (rumah sakit) adalah tempat pergi saat sakit.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-002",
            question: "Terjemahkan: 'Saya sakit kepala.'",
            options: [
                "I have headache.",
                "I has a headache.",
                "I have a headache.",
                "I having a headache."
            ],
            correctIndex: 2,
            explanation: "I have a headache = Saya sakit kepala. Selalu gunakan 'a' sebelum headache.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-003",
            question: "🩺 Orang yang memeriksa pasien sakit adalah...",
            options: ["Teacher", "Doctor", "Chef", "Driver"],
            correctIndex: 1,
            explanation: "Doctor (dokter) memeriksa dan mengobati pasien sakit.",
            difficulty: "easy",
            tags: ["vocabulary", "jobs"]
        },
        {
            id: "kids-18-004",
            question: "Pilih kata yang benar: 'I ___ a fever. My body is hot.'",
            options: ["have", "has", "had", "having"],
            correctIndex: 0,
            explanation: "I have a fever = Saya demam. Have untuk subjek I/you/they/we.",
            difficulty: "easy",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-18-005",
            question: "💊 'The doctor gives me ___ to feel better.'",
            options: ["candy", "medicine", "toys", "books"],
            correctIndex: 1,
            explanation: "Medicine (obat) diberikan dokter agar pasien merasa lebih baik.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-006",
            question: "🦷 'I brush my ___ every morning and night.'",
            options: ["hair", "teeth", "nails", "hands"],
            correctIndex: 1,
            explanation: "Teeth (gigi-gigi) perlu disikat setiap pagi dan malam.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-007",
            question: "'I have a ___ throat.' (Sakit)",
            options: ["happy", "sore", "good", "nice"],
            correctIndex: 1,
            explanation: "Sore throat = sakit tenggorokan. Sore = sakit/perih.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-008",
            question: "🤒 'My temperature is high. I have a ___.'",
            options: ["cold", "fever", "cough", "sneeze"],
            correctIndex: 1,
            explanation: "Fever (demam) ditandai dengan suhu tubuh tinggi.",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-009",
            question: "Bagian tubuh untuk melihat adalah...",
            options: ["Ear", "Eye", "Nose", "Mouth"],
            correctIndex: 1,
            explanation: "Eye (mata) adalah bagian tubuh untuk melihat (see).",
            difficulty: "easy",
            tags: ["vocabulary", "body-parts"]
        },
        {
            id: "kids-18-010",
            question: "🤧 'When I have a cold, I often ___.' (Bersin)",
            options: ["sleep", "eat", "sneeze", "run"],
            correctIndex: 2,
            explanation: "Sneeze artinya bersin. Sering terjadi saat pilek (cold).",
            difficulty: "easy",
            tags: ["vocabulary", "health"]
        },

        // === MEDIUM (12 questions) ===
        {
            id: "kids-18-011",
            question: "Pilih kalimat yang benar:",
            options: [
                "He have a stomachache.",
                "He has a stomachache.",
                "He having a stomachache.",
                "He had a stomachache yesterday."
            ],
            correctIndex: 1,
            explanation: "He has a stomachache = Dia sakit perut. He (tunggal) pakai has.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-18-012",
            question: "💉 'The nurse will give you an ___ to stop the pain.'",
            options: ["apple", "injection", "book", "toy"],
            correctIndex: 1,
            explanation: "Injection (suntikan) diberikan untuk mengurangi rasa sakit.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-013",
            question: "'___ do you feel today?' Pilih kata yang tepat:",
            options: ["What", "Where", "How", "Who"],
            correctIndex: 2,
            explanation: "How do you feel? = Bagaimana perasaanmu? How untuk menanyakan keadaan/perasaan.",
            difficulty: "medium",
            tags: ["grammar", "questions"]
        },
        {
            id: "kids-18-014",
            question: "🩹 'I cut my finger. I need a ___.'",
            options: ["hat", "bandage", "shoe", "book"],
            correctIndex: 1,
            explanation: "Bandage (perban) dibutuhkan untuk luka di jari.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-015",
            question: "Terjemahkan: 'Kakak perempuanku sakit gigi.'",
            options: [
                "My sister have a toothache.",
                "My sister has a toothache.",
                "My sister had a toothache.",
                "My sister having a toothache."
            ],
            correctIndex: 1,
            explanation: "My sister has a toothache = Kakak perempuanku sakit gigi. Has untuk she (tunggal).",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-18-016",
            question: "🧼 'Always ___ your hands before eating.'",
            options: ["wash", "washes", "washing", "washed"],
            correctIndex: 0,
            explanation: "Wash your hands = cuci tangan. Kalimat perintah menggunakan bentuk dasar wash.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-017",
            question: "Pilih yang benar: 'My leg ___. I can't walk well.' (Sakit)",
            options: ["is happy", "hurts", "is good", "is fun"],
            correctIndex: 1,
            explanation: "My leg hurts = Kakiku sakit. Hurts = menyakitkan/sakit.",
            difficulty: "medium",
            tags: ["grammar", "simple-present"]
        },
        {
            id: "kids-18-018",
            question: "🏃 'Exercise helps us stay ___'",
            options: ["sick", "healthy", "tired", "sad"],
            correctIndex: 1,
            explanation: "Healthy (sehat). Exercise (olahraga) membantu kita tetap sehat.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-019",
            question: "Apa arti dari 'rest'?",
            options: [
                "Bekerja keras",
                "Istirahat",
                "Berolahraga",
                "Makan"
            ],
            correctIndex: 1,
            explanation: "Rest artinya istirahat. Saat sakit, kita perlu banyak rest (istirahat).",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-020",
            question: "🍎 'Eating ___ keeps the doctor away.'",
            options: ["candy", "chips", "fruits", "ice cream"],
            correctIndex: 2,
            explanation: "Eating fruits (makan buah-buahan) membuat kita sehat.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-021",
            question: "Pilih kalimat yang benar:",
            options: [
                "She don't feel well today.",
                "She doesn't feels well today.",
                "She doesn't feel well today.",
                "She not feel well today."
            ],
            correctIndex: 2,
            explanation: "She doesn't feel well = Dia tidak merasa baik. Doesn't + feel (bentuk dasar).",
            difficulty: "medium",
            tags: ["grammar", "negatives"]
        },
        {
            id: "kids-18-022",
            question: "🩺 'The doctor uses a ___ to listen to my heart.'",
            options: ["ruler", "stethoscope", "pen", "book"],
            correctIndex: 1,
            explanation: "Stethoscope (stetoskop) digunakan dokter untuk mendengarkan detak jantung.",
            difficulty: "medium",
            tags: ["vocabulary", "health"]
        },

        // === HARD (8 questions) ===
        {
            id: "kids-18-023",
            question: "Susun kata berikut: 'doctor / go / should / the / you / to'",
            options: [
                "You should go to the doctor.",
                "You should to go the doctor.",
                "Should you go to the doctor.",
                "You go should to the doctor."
            ],
            correctIndex: 0,
            explanation: "You should go to the doctor = Kamu sebaiknya pergi ke dokter. Should + go (bentuk dasar).",
            difficulty: "hard",
            tags: ["grammar", "sentence-structure"]
        },
        {
            id: "kids-18-024",
            question: "💊 Apa bedanya 'medicine' dan 'vitamin'?",
            options: [
                "Sama saja",
                "Medicine untuk mengobati sakit, Vitamin untuk kesehatan umum",
                "Medicine untuk anak, Vitamin untuk dewasa",
                "Medicine lebih mahal"
            ],
            correctIndex: 1,
            explanation: "Medicine (obat) untuk mengobati penyakit sakit. Vitamin untuk menjaga kesehatan.",
            difficulty: "hard",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-025",
            question: "Pilih kalimat yang paling benar:",
            options: [
                "Neither my mom nor my dad have ever been sick.",
                "Neither my mom or my dad has ever been sick.",
                "Neither my mom nor my dad has ever been sick.",
                "Neither my mom and my dad has ever been sick."
            ],
            correctIndex: 2,
            explanation: "Neither...nor menggunakan has (tunggal) karena subject terdekat adalah 'dad'.",
            difficulty: "hard",
            tags: ["grammar", "neither-nor"]
        },
        {
            id: "kids-18-026",
            question: "🤕 'I fell down and got a ___ on my knee.' (Memar)",
            options: ["smile", "bruise", "gift", "prize"],
            correctIndex: 1,
            explanation: "Bruise (memar/luka memar) terjadi saat jatuh.",
            difficulty: "hard",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-027",
            question: "Apa arti dari 'take care of yourself'?",
            options: [
                "Bekerja keras",
                "Jaga kesehatanmu/perawatan diri",
                "Makan banyak",
                "Tidur seharian"
            ],
            correctIndex: 1,
            explanation: "Take care of yourself artinya jaga kesehatanmu/urus dirimu dengan baik.",
            difficulty: "hard",
            tags: ["vocabulary", "phrasal-verbs"]
        },
        {
            id: "kids-18-028",
            question: "🌡️ 'The doctor checks my ___ with a thermometer.'",
            options: ["weight", "temperature", "height", "age"],
            correctIndex: 1,
            explanation: "Temperature (suhu tubuh) diperiksa dengan thermometer (termometer).",
            difficulty: "hard",
            tags: ["vocabulary", "health"]
        },
        {
            id: "kids-18-029",
            question: "Pilih kalimat dengan grammar yang benar:",
            options: [
                "Yesterday, I drink some medicine for my cough.",
                "Yesterday, I drank some medicine for my cough.",
                "Yesterday, I drinked some medicine for my cough.",
                "Yesterday, I drinks some medicine for my cough."
            ],
            correctIndex: 1,
            explanation: "Drank adalah bentuk lampau dari drink (minum). Yesterday menunjukkan past tense.",
            difficulty: "hard",
            tags: ["grammar", "past-simple"]
        },
        {
            id: "kids-18-030",
            question: "Identifikasi semua error: 'My brother don't has a fever, but he have a bad cough and his throats is sore.'",
            options: [
                "3 errors",
                "4 errors",
                "5 errors",
                "6 errors"
            ],
            correctIndex: 1,
            explanation: "Errors: 1) don't -> does not, 2) has -> have (setelah does), 3) have -> has (he tunggal), 4) throats -> throat (tunggal). Total 4 errors.",
            difficulty: "hard",
            tags: ["grammar", "error-correction"]
        }
    ]
};
