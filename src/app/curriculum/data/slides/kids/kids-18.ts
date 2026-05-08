import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Doctor, Help! 🏥",
        subtitle: "Talking About Health & Sickness",
        teacherNote: "Goal: Anak bisa mengungkapkan keluhan sakit dan memberi saran sederhana dengan jelas dalam Bahasa Inggris."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about health! 💪",
        content: [
            "🤒 When was the last time you were sick? (Kapan terakhir kali kamu sakit?)",
            "🏥 Have you ever been to the doctor? (Pernah ke dokter?)",
            "💊 Do you like taking medicine? (Suka minum obat?)",
            "🩹 What do you do when you have a cut? (Apa yang kamu lakukan saat luka?)",
            "🛌 How do you feel when you get enough sleep? (Gimana rasanya cukup tidur?)"
        ],
        teacherNote: "Warming up! Be sensitive - some kids may have health anxieties. Keep it light and educational."
    },
    // SLIDE 3 - VOCABULARY: PARTS OF THE BODY (REVIEW)
    {
        type: 'vocabulary',
        title: "Parts of the Body 🧍",
        subtitle: "Bagian tubuh (review)",
        vocabulary: [
            { term: "Head", meaning: "Kepala", example: "I have a headache." },
            { term: "Eye", meaning: "Mata", example: "My eyes are tired." },
            { term: "Ear", meaning: "Telinga", example: "I have an earache." },
            { term: "Nose", meaning: "Hidung", example: "I have a runny nose." },
            { term: "Mouth", meaning: "Mulut", example: "Open your mouth." },
            { term: "Throat", meaning: "Tenggorokan", example: "I have a sore throat." },
            { term: "Stomach", meaning: "Perut", example: "I have a stomachache." },
            { term: "Back", meaning: "Punggung", example: "My back hurts." },
            { term: "Arm", meaning: "Lengan", example: "My arm is sore." },
            { term: "Leg", meaning: "Kaki", example: "My leg hurts." },
            { term: "Hand", meaning: "Tangan", example: "Wash your hands." },
            { term: "Foot / Feet", meaning: "Kaki (telapak)", example: "My feet are tired." }
        ],
        teacherNote: "TPR: Point to body parts. 'Touch your head!' 'Show me your stomach!'"
    },
    // SLIDE 4 - VOCABULARY: HEALTH PROBLEMS
    {
        type: 'vocabulary',
        title: "Health Problems 🤒",
        subtitle: "Masalah kesehatan",
        vocabulary: [
            { term: "Headache", meaning: "Sakit kepala", example: "I have a headache." },
            { term: "Stomachache", meaning: "Sakit perut", example: "I have a stomachache." },
            { term: "Toothache", meaning: "Sakit gigi", example: "I have a toothache." },
            { term: "Earache", meaning: "Sakit telinga", example: "I have an earache." },
            { term: "Backache", meaning: "Sakit punggung", example: "I have a backache." },
            { term: "Sore throat", meaning: "Sakit tenggorokan", example: "I have a sore throat." },
            { term: "Runny nose", meaning: "Hidung berair", example: "I have a runny nose." },
            { term: "Cough", meaning: "Batuk", example: "I have a cough." },
            { term: "Fever", meaning: "Demam", example: "I have a fever." },
            { term: "Cold", meaning: "Pilek / Flu ringan", example: "I have a cold." },
            { term: "Cut", meaning: "Luka iris", example: "I have a cut on my finger." },
            { term: "Burn", meaning: "Luka bakar", example: "I have a burn on my hand." }
        ],
        teacherNote: "Important vocabulary for real-life situations. Practice the pronunciation carefully."
    },
    // SLIDE 5 - FORMULA: SAYING YOU'RE SICK
    {
        type: 'formula',
        title: "How to Say You're Sick",
        subtitle: "Cara mengatakan kita sakit",
        formula: "I have a + [health problem]",
        vocabulary: [
            { term: "I have a headache.", meaning: "Saya sakit kepala.", example: "I have a headache. I need to rest." },
            { term: "I have a stomachache.", meaning: "Saya sakit perut.", example: "I have a stomachache. I ate too much." },
            { term: "I have a fever.", meaning: "Saya demam.", example: "I have a fever. I feel hot." },
            { term: "I feel sick.", meaning: "Saya merasa sakit.", example: "I feel sick. I want to lie down." },
            { term: "I don't feel well.", meaning: "Saya tidak merasa baik.", example: "I don't feel well today." },
            { term: "Something hurts.", meaning: "Ada yang sakit.", example: "My stomach hurts." }
        ],
        teacherNote: "Emphasize: Use 'a' before health problems: a headache, a stomachache. But: I have diarrhea (no 'a')."
    },
    // SLIDE 6 - FORMULA: ASKING ABOUT HEALTH
    {
        type: 'formula',
        title: "Asking About Health",
        subtitle: "Menanyakan kondisi kesehatan",
        formula: "Are you okay? / What's wrong?",
        vocabulary: [
            { term: "Are you okay?", meaning: "Kamu baik-baik saja?", example: "You look pale. Are you okay?" },
            { term: "What's wrong?", meaning: "Ada apa? / Kenapa?", example: "You're crying. What's wrong?" },
            { term: "What's the matter?", meaning: "Ada masalah apa?", example: "What's the matter? Do you feel sick?" },
            { term: "Where does it hurt?", meaning: "Mana yang sakit?", example: "Where does it hurt? Here or here?" },
            { term: "Do you feel sick?", meaning: "Apa kamu merasa sakit?", example: "Do you feel sick? You should rest." },
            { term: "How do you feel?", meaning: "Bagaimana perasaanmu?", example: "How do you feel today? Better?" }
        ],
        teacherNote: "These are caring questions. Teach empathy - asking if someone is okay is kind!"
    },
    // SLIDE 7 - FORMULA: GIVING ADVICE
    {
        type: 'formula',
        title: "Giving Health Advice",
        subtitle: "Memberikan saran kesehatan",
        formula: "You should + [action]",
        vocabulary: [
            { term: "You should rest.", meaning: "Kamu harus istirahat.", example: "You have a fever. You should rest." },
            { term: "You should drink water.", meaning: "Kamu harus minum air.", example: "You should drink lots of water." },
            { term: "You should see a doctor.", meaning: "Kamu harus ke dokter.", example: "If it hurts a lot, you should see a doctor." },
            { term: "You should take medicine.", meaning: "Kamu harus minum obat.", example: "You should take this medicine." },
            { term: "You should stay home.", meaning: "Kamu harus di rumah.", example: "You should stay home and rest." },
            { term: "You should eat healthy food.", meaning: "Kamu harus makan makanan sehat.", example: "You should eat fruits and vegetables." }
        ],
        teacherNote: "'Should' is for giving advice. It's softer and kinder than 'must'."
    },
    // SLIDE 8 - FORMULA: AT THE DOCTOR'S
    {
        type: 'formula',
        title: "At the Doctor's Office",
        subtitle: "Di kantor dokter",
        formula: "Polite phrases for medical visits",
        vocabulary: [
            { term: "May I come in?", meaning: "Boleh saya masuk?", example: "May I come in, doctor?" },
            { term: "I have an appointment.", meaning: "Saya punya janji.", example: "I have an appointment at 2 PM." },
            { term: "It hurts here.", meaning: "Sakit di sini.", example: "It hurts here, doctor." },
            { term: "When did it start?", meaning: "Kapan mulainya?", example: "It started yesterday." },
            { term: "How long have you felt this way?", meaning: "Sudah berapa lama merasa begini?", example: "For two days." },
            { term: "Thank you, doctor.", meaning: "Terima kasih, dokter.", example: "Thank you for helping me." }
        ],
        teacherNote: "Roleplay visiting a doctor. Practice polite language in medical settings."
    },
    // SLIDE 9 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "I have headache.", right: "I have a headache." },
            { wrong: "My head is painful.", right: "My head hurts. / I have a headache." },
            { wrong: "I am sick my stomach.", right: "I have a stomachache." },
            { wrong: "I pain in my leg.", right: "My leg hurts. / I have pain in my leg." },
            { wrong: "You must to rest.", right: "You should rest." }
        ],
        teacherNote: "Key points: Use 'a' before -ache words. Use 'hurt(s)' for pain. 'Should' has no 'to'."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: At School 🤒",
        subtitle: "Telling a teacher you feel sick",
        caseStudy: {
            scenario: "Murid memberitahu guru bahwa dia merasa tidak enak badan.",
            template: "Student: Excuse me, teacher.\nTeacher: Yes? What's wrong?\nStudent: I don't feel well. I have a headache and a stomachache.\nTeacher: Oh no! Do you have a fever?\nStudent: I think so. I feel hot.\nTeacher: You should go to the nurse. Drink some water and rest.\nStudent: Okay, teacher. Thank you."
        },
        teacherNote: "DEMO: Show how to politely tell a teacher about feeling unwell. Very practical!"
    },
    // SLIDE 11 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: At Home 🏠",
        subtitle: "Talking to parents about health",
        caseStudy: {
            scenario: "Anak memberitahu orang tua bahwa dia sakit.",
            template: "Child: Mom, I don't feel well.\nMom: What's wrong, honey?\nChild: I have a sore throat and a runny nose.\nMom: Oh dear. Do you have a fever?\nChild: I don't know. But my throat really hurts.\nMom: You should rest and drink warm water. Let me check your temperature.\nChild: Okay, Mom."
        },
        teacherNote: "This conversation builds emotional vocabulary and helps kids express discomfort clearly."
    },
    // SLIDE 12 - ROLEPLAY 1: AT THE DOCTOR
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: At the Doctor 🏥",
        subtitle: "A = Doctor | B = Patient",
        caseStudy: {
            scenario: "Pasien berkonsultasi dengan dokter.",
            template: "A: Good morning. What's wrong?\nB: I don't feel well. I have _____.\nA: I see. Where does it hurt?\nB: It hurts _____.\nA: You should _____. Take this medicine.\nB: Thank you, doctor. How often should I take it?\nA: Three times a day. Get well soon!"
        },
        teacherNote: "GILIRAN MURID: Practice medical vocabulary in a safe, educational context."
    },
    // SLIDE 13 - ROLEPLAY 2: CARING FRIEND
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Caring Friend 💝",
        subtitle: "A = Sick Friend | B = Caring Friend",
        caseStudy: {
            scenario: "Teman yang peduli menanyakan kondisi temannya.",
            template: "A: I don't feel well today.\nB: Oh no! Are you okay? What's wrong?\nA: I have _____.\nB: I'm sorry to hear that. You should _____.\nA: Thanks for your advice.\nB: Get well soon!"
        },
        teacherNote: "Teach empathy and caring language. 'Get well soon' is a kind thing to say!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Sakit kepala", sayThis: "I have a headache.", dontSayThis: "I have headache." },
            { context: "Sakit perut", sayThis: "I have a stomachache.", dontSayThis: "My stomach is sick." },
            { context: "Tidak enak badan", sayThis: "I don't feel well.", dontSayThis: "I not feel good." },
            { context: "Bertanya", sayThis: "What's wrong? / Are you okay?", dontSayThis: "You sick?" },
            { context: "Memberi saran", sayThis: "You should rest.", dontSayThis: "You must to rest." }
        ],
        teacherNote: "Review together. This vocabulary is important for real-life situations."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Health Poster: Buat poster tentang cara menjaga kesehatan dengan 5 tips dalam Inggris!",
            "2. First Aid Kit: Gambar isi kotak P3K dan label dalam Bahasa Inggris!",
            "3. Healthy Habits: Buat jadwal kebiasaan sehat harianmu dalam Inggris!"
        ],
        teacherNote: "Focus on positive health habits. Encourage kids to be health-conscious!"
    }
];

export const quiz: QuizQuestion[] = [
    // BODY PARTS
    {
        question: "Which part of the body do you use to see?",
        options: ["Ear", "Eye", "Nose"],
        correctIndex: 1,
        explanation: "We use our eyes to see!"
    },
    {
        question: "Which part of the body do you use to hear?",
        options: ["Eye", "Ear", "Mouth"],
        correctIndex: 1,
        explanation: "We use our ears to hear!"
    },
    // HEALTH PROBLEMS
    {
        question: "If your head hurts, you have a...",
        options: ["Stomachache", "Headache", "Toothache"],
        correctIndex: 1,
        explanation: "When your head hurts, you have a headache!"
    },
    {
        question: "If your stomach hurts, you have a...",
        options: ["Headache", "Backache", "Stomachache"],
        correctIndex: 2,
        explanation: "When your stomach hurts, you have a stomachache!"
    },
    {
        question: "When your body temperature is high, you have a...",
        options: ["Cold", "Fever", "Cough"],
        correctIndex: 1,
        explanation: "A high body temperature means you have a fever!"
    },
    {
        question: "When water runs from your nose, you have a...",
        options: ["Runny nose", "Sore throat", "Cough"],
        correctIndex: 0,
        explanation: "A runny nose is when liquid comes out of your nose."
    },
    {
        question: "When your throat hurts, you have a...",
        options: ["Headache", "Sore throat", "Stomachache"],
        correctIndex: 1,
        explanation: "A sore throat means your throat hurts!"
    },
    // SAYING YOU'RE SICK
    {
        question: "Which is CORRECT?",
        options: ["I have headache.", "I have a headache.", "I am headache."],
        correctIndex: 1,
        explanation: "Use 'a' before health problems: 'I have a headache.'"
    },
    {
        question: "Which is CORRECT?",
        options: ["I have a stomachache.", "I have stomachache.", "I am stomachache."],
        correctIndex: 0,
        explanation: "Use 'a' before -ache words: 'I have a stomachache.'"
    },
    {
        question: "How do you say 'Saya tidak merasa baik'?",
        options: ["I don't feel well.", "I no feel good.", "I not feel well."],
        correctIndex: 0,
        explanation: "'I don't feel well' is the correct expression."
    },
    // ASKING ABOUT HEALTH
    {
        question: "How do you ask if someone is sick?",
        options: ["You sick?", "Are you okay?", "What you want?"],
        correctIndex: 1,
        explanation: "'Are you okay?' is the polite way to ask if someone is sick."
    },
    {
        question: "How do you ask what the problem is?",
        options: ["What's matter?", "What's wrong?", "What problem you?"],
        correctIndex: 1,
        explanation: "'What's wrong?' is the common way to ask about a problem."
    },
    // GIVING ADVICE
    {
        question: "Complete: You _____ rest when you're sick.",
        options: ["should", "will", "can to"],
        correctIndex: 0,
        explanation: "'You should rest' - use 'should' for giving advice."
    },
    {
        question: "Which is good advice for someone with a fever?",
        options: ["You should play outside.", "You should rest.", "You should eat ice cream."],
        correctIndex: 1,
        explanation: "Rest is important when you have a fever!"
    },
    // POLITE LANGUAGE
    {
        question: "What should you say when entering the doctor's office?",
        options: ["Hey doctor!", "May I come in?", "I am here!"],
        correctIndex: 1,
        explanation: "'May I come in?' is polite. Always be polite to doctors!"
    },
    {
        question: "What do you say to wish someone to get better?",
        options: ["Go away!", "Get well soon!", "Stay sick!"],
        correctIndex: 1,
        explanation: "'Get well soon!' is a kind wish for someone who is sick."
    },
    // CORRECT EXPRESSIONS
    {
        question: "Which is WRONG?",
        options: ["My leg hurts.", "I have pain in my leg.", "I pain in my leg."],
        correctIndex: 2,
        explanation: "'I pain in my leg' is wrong. Say 'My leg hurts' or 'I have pain in my leg.'"
    }
];
