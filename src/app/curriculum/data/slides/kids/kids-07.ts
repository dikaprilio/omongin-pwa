import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "My Perfect Day (Time) ⏰",
        subtitle: "Telling Time & Daily Routines",
        teacherNote: "Goal: Bisa baca jam dan bilang 'I wake up at 6 AM'. Merancang jadwal liburan impian mereka."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about time! ⏰",
        content: [
            "⏰ What time do you wake up? (Jam bangun tidur?)",
            "🍚 What time do you eat breakfast? (Jam sarapan?)",
            "🏫 What time does school start? (Jam sekolah mulai?)",
            "😴 What time do you go to bed? (Jam tidur?)",
            "🎉 Do you have a daily schedule? (Punya jadwal harian?)"
        ],
        teacherNote: "Warming up! Time is part of daily life. Connect to their real routine!"
    },
    // SLIDE 3 - TELLING TIME BASICS
    {
        type: 'vocabulary',
        title: "Telling Time Basics ⏰",
        subtitle: "Dasar-dasar jam",
        vocabulary: [
            { term: "O'clock", meaning: "Tepat (jam)", example: "It's 3 o'clock." },
            { term: "Quarter past", meaning: "15 menit (lewat)", example: "It's quarter past 3 (3:15)." },
            { term: "Half past", meaning: "30 menit (lewat)", example: "It's half past 3 (3:30)." },
            { term: "Quarter to", meaning: "15 menit (sebelum)", example: "It's quarter to 4 (3:45)." },
            { term: "AM", meaning: "Pagi (00:00-12:00)", example: "I wake up at 6 AM." },
            { term: "PM", meaning: "Sore/Malam (12:00-24:00)", example: "I go to bed at 9 PM." }
        ],
        teacherNote: "Start simple with o'clock, then introduce half past. Skip quarter if too difficult."
    },
    // SLIDE 4 - NUMBERS FOR TIME
    {
        type: 'vocabulary',
        title: "Numbers for Time 🔢",
        subtitle: "Angka untuk waktu",
        vocabulary: [
            { term: "Six (6:00)", meaning: "Enam", example: "I wake up at six." },
            { term: "Seven (7:00)", meaning: "Tujuh", example: "School starts at seven." },
            { term: "Eight (8:00)", meaning: "Delapan", example: "I eat breakfast at eight." },
            { term: "Nine (9:00)", meaning: "Sembilan", example: "I go to bed at nine." },
            { term: "Ten (10:00)", meaning: "Sepuluh", example: "I sleep at ten." },
            { term: "Eleven (11:00)", meaning: "Sebelas", example: "Lunch is at eleven." },
            { term: "Twelve (12:00)", meaning: "Dua belas", example: "It's twelve o'clock!" }
        ],
        teacherNote: "Practice numbers 1-12 for telling time. Connect to their daily schedule!"
    },
    // SLIDE 5 - DAILY ROUTINES
    {
        type: 'vocabulary',
        title: "Daily Routines 🌅",
        subtitle: "Kegiatan harian",
        vocabulary: [
            { term: "Wake up", meaning: "Bangun tidur", example: "I wake up at 6 AM." },
            { term: "Get up", meaning: "Bangun dari tempat tidur", example: "I get up at 6:15." },
            { term: "Brush teeth", meaning: "Sikat gigi", example: "I brush my teeth after breakfast." },
            { term: "Take a shower", meaning: "Mandi", example: "I take a shower in the morning." },
            { term: "Eat breakfast", meaning: "Sarapan", example: "I eat breakfast at 7 AM." },
            { term: "Go to school", meaning: "Pergi ke sekolah", example: "I go to school at 7:30." },
            { term: "Have lunch", meaning: "Makan siang", example: "I have lunch at 12." },
            { term: "Do homework", meaning: "Mengerjakan PR", example: "I do homework at 4 PM." },
            { term: "Eat dinner", meaning: "Makan malam", example: "I eat dinner at 7 PM." },
            { term: "Go to bed", meaning: "Pergi tidur", example: "I go to bed at 9 PM." }
        ],
        teacherNote: "TPR: Act out each routine! Make it a morning routine dance!"
    },
    // SLIDE 6 - FORMULA: AT + TIME
    {
        type: 'formula',
        title: "Talking About Time",
        subtitle: "Berbicara tentang waktu",
        formula: "Subject + verb + at + [time]",
        vocabulary: [
            { term: "I wake up at 6 AM.", meaning: "Saya bangun jam 6 pagi.", example: "I wake up at 6 AM." },
            { term: "School starts at 7 AM.", meaning: "Sekolah mulai jam 7.", example: "School starts at 7." },
            { term: "I eat breakfast at 7:30.", meaning: "Saya sarapan jam 7:30.", example: "I eat breakfast at 7:30." },
            { term: "I go to bed at 9 PM.", meaning: "Saya tidur jam 9 malam.", example: "I go to bed at 9 PM." }
        ],
        teacherNote: "Important: Use 'at' before time! I wake up AT 6 AM."
    },
    // SLIDE 7 - FORMULA: ASKING ABOUT TIME
    {
        type: 'formula',
        title: "Asking About Time",
        subtitle: "Bertanya tentang waktu",
        formula: "What time...? / When...?",
        vocabulary: [
            { term: "What time is it?", meaning: "Jam berapa sekarang?", example: "What time is it? It's 3 o'clock." },
            { term: "What time do you wake up?", meaning: "Jam berapa kamu bangun?", example: "I wake up at 6." },
            { term: "When do you eat breakfast?", meaning: "Kapan kamu sarapan?", example: "I eat breakfast at 7." },
            { term: "What time does school start?", meaning: "Jam berapa sekolah mulai?", example: "School starts at 7:30." }
        ],
        teacherNote: "Both 'What time' and 'When' work for asking about schedule times."
    },
    // SLIDE 8 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "I wake up 6 AM.", right: "I wake up AT 6 AM." },
            { wrong: "School start at 7.", right: "School starts at 7." },
            { wrong: "I breakfast at 7.", right: "I eat breakfast at 7." },
            { wrong: "I sleep 9 PM.", right: "I go to bed at 9 PM." },
            { wrong: "What time you wake up?", right: "What time do you wake up?" }
        ],
        teacherNote: "Key mistakes: missing 'at', missing 'do' in questions, missing verb (eat/breakfast)."
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Daily Routine ⏰",
        subtitle: "Talking about daily schedule",
        caseStudy: {
            scenario: "Bercerita tentang rutinitas harian.",
            template: "A: What time do you wake up?\nB: I wake up at 6 AM.\nA: What do you do next?\nB: I brush my teeth and take a shower.\nA: What time do you eat breakfast?\nB: I eat breakfast at 7 AM.\nA: When do you go to school?\nB: I go to school at 7:30 AM."
        },
        teacherNote: "DEMO: Model asking follow-up questions to keep conversation flowing."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: My Perfect Day 🌟",
        subtitle: "Designing a perfect daily schedule",
        caseStudy: {
            scenario: "Merancang jadwal hari yang sempurna.",
            template: "A: If you could plan your perfect day, what would it be?\nB: I would wake up at 9 AM!\nA: Nice! What would you eat for breakfast?\nB: I would eat pancakes at 10 AM.\nA: What time would you play?\nB: I would play games from 11 AM to 1 PM!\nA: Sounds like a fun day!"
        },
        teacherNote: "Use 'would' for imaginary perfect day. Encourage creativity!"
    },
    // SLIDE 11 - ROLEPLAY 1: DAILY SCHEDULE
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: My Day 📅",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Bercerita tentang jadwal harian.",
            template: "A: What time do you wake up?\nB: I wake up at _____.\nA: What do you do in the morning?\nB: I _____.\nA: What time do you go to school?\nB: I go to school at _____.\nA: What time do you go to bed?\nB: I go to bed at _____."
        },
        teacherNote: "GILIRAN MURID: Practice asking and answering about daily routines."
    },
    // SLIDE 12 - ROLEPLAY 2: PERFECT DAY PLANNER
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Perfect Day Planner 🌈",
        subtitle: "A = Planner | B = Client",
        caseStudy: {
            scenario: "Membantu merencanakan hari yang sempurna.",
            template: "A: Let's plan your perfect day! What time would you wake up?\nB: I would wake up at _____.\nA: What would you eat for breakfast?\nB: I would eat _____.\nA: What would you do at 12 PM?\nB: I would _____.\nA: Sounds perfect!"
        },
        teacherNote: "Imaginary play! Kids love designing their 'perfect' schedule."
    },
    // SLIDE 13 - TIME QUIZ GAME
    {
        type: 'micro-drill',
        title: "What Time Is It? ⏰",
        subtitle: "Look at the clock and tell the time!",
        mission: [
            "1. Show 6:00 → Say: It's six o'clock.",
            "2. Show 7:30 → Say: It's half past seven.",
            "3. Show 9:00 → Say: It's nine o'clock.",
            "4. Show 12:00 → Say: It's twelve o'clock.",
            "5. Show 3:00 PM → Say: It's three o'clock in the afternoon."
        ],
        teacherNote: "Use a real clock or show clock faces. Practice reading time!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Jam tepat", sayThis: "It's 6 o'clock.", dontSayThis: "It's 6." },
            { context: "Setengah", sayThis: "It's half past 7.", dontSayThis: "It's 7:30 o'clock." },
            { context: "Aktivitas jam", sayThis: "I wake up at 6 AM.", dontSayThis: "I wake up 6 AM." },
            { context: "Bertanya", sayThis: "What time do you wake up?", dontSayThis: "What time you wake up?" },
            { context: "Tidur", sayThis: "I go to bed at 9 PM.", dontSayThis: "I sleep 9 PM." }
        ],
        teacherNote: "Review the preposition 'at' and telling time."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. My Daily Schedule: Buat jadwal harian dengan gambar dan waktu dalam Inggris!",
            "2. Perfect Day Drawing: Gambar hari impianmu dengan jadwal lengkap!",
            "3. Family Interview: Tanya keluargamu: 'What time do you wake up?'"
        ],
        teacherNote: "Time awareness helps kids develop routine and responsibility!"
    }
];

export const quiz: QuizQuestion[] = [
    // TIME TELLING
    {
        question: "What does 'o'clock' mean?",
        options: ["Setengah jam", "Tepat jam", "15 menit"],
        correctIndex: 1,
        explanation: "'O'clock' means tepat jam (e.g., 3:00, 4:00)"
    },
    {
        question: "What does 'half past' mean?",
        options: ["Tepat jam", "30 menit lewat", "15 menit"],
        correctIndex: 1,
        explanation: "'Half past' means 30 minutes past the hour!"
    },
    {
        question: "What is 3:00?",
        options: ["Half past three", "Three o'clock", "Quarter past three"],
        correctIndex: 1,
        explanation: "3:00 is 'three o'clock'!"
    },
    {
        question: "What is 7:30?",
        options: ["Seven o'clock", "Half past seven", "Quarter to seven"],
        correctIndex: 1,
        explanation: "7:30 is 'half past seven'!"
    },
    // AM/PM
    {
        question: "When do we use AM?",
        options: ["Sore", "Pagi", "Malam"],
        correctIndex: 1,
        explanation: "AM is for morning time (midnight to noon)!"
    },
    {
        question: "When do we use PM?",
        options: ["Pagi", "Sore/Malam", "Subuh"],
        correctIndex: 1,
        explanation: "PM is for afternoon and evening (noon to midnight)!"
    },
    // DAILY ROUTINES
    {
        question: "What do you do first in the morning?",
        options: ["Go to bed", "Wake up", "Eat dinner"],
        correctIndex: 1,
        explanation: "You wake up first in the morning!"
    },
    {
        question: "When do you brush your teeth?",
        options: ["In the morning", "At midnight", "Never"],
        correctIndex: 0,
        explanation: "You brush your teeth in the morning (and evening too)!"
    },
    {
        question: "What do you do at night before sleeping?",
        options: ["Wake up", "Go to bed", "Eat breakfast"],
        correctIndex: 1,
        explanation: "You go to bed at night before sleeping!"
    },
    // GRAMMAR - AT
    {
        question: "Complete: I wake up _____ 6 AM.",
        options: ["in", "at", "on"],
        correctIndex: 1,
        explanation: "Use 'at' before specific times: 'I wake up at 6 AM.'"
    },
    {
        question: "Complete: School starts _____ 7 AM.",
        options: ["in", "at", "on"],
        correctIndex: 1,
        explanation: "Use 'at' for specific times!"
    },
    {
        question: "Complete: I go to bed _____ 9 PM.",
        options: ["in", "at", "on"],
        correctIndex: 1,
        explanation: "Use 'at' for bedtime too!"
    },
    // QUESTIONS
    {
        question: "How do you ask about someone's wake-up time?",
        options: [
            "What time is it?",
            "What time do you wake up?",
            "When is morning?"
        ],
        correctIndex: 1,
        explanation: "'What time do you wake up?' asks for their wake-up time."
    },
    {
        question: "Complete: What time _____ you eat breakfast?",
        options: ["do", "does", "is"],
        correctIndex: 0,
        explanation: "'What time do you eat breakfast?' - use 'do' for questions."
    },
    {
        question: "Complete: What time _____ school start?",
        options: ["do", "does", "is"],
        correctIndex: 1,
        explanation: "'What time does school start?' - use 'does' for he/she/it."
    },
    // CORRECT SENTENCES
    {
        question: "Which is CORRECT?",
        options: [
            "I wake up at 6 AM.",
            "I wake up 6 AM.",
            "I wake up in 6 AM."
        ],
        correctIndex: 0,
        explanation: "'I wake up at 6 AM' - use 'at' before time!"
    },
    {
        question: "Which is CORRECT?",
        options: [
            "School start at 7.",
            "School starts at 7.",
            "School starting at 7."
        ],
        correctIndex: 1,
        explanation: "'School starts at 7' - add 's' for he/she/it!"
    },
    {
        question: "What time is lunch usually?",
        options: ["6 AM", "12 PM", "9 PM"],
        correctIndex: 1,
        explanation: "Lunch is usually at 12 PM (noon)!"
    }
];
