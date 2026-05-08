import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Storytelling Strategy",
        subtitle: "Mastering the Past Tense",
        teacherNote: "Goal: Menguasai 'Storytelling Mode' (Past Tense) agar bisa menceritakan pengalaman/update pekerjaan tanpa membingungkan pendengar.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=1920"
    },

    // --- PHASE 1: THE MINDSET ---

    // SLIDE 2: WARM UP (BASELINE)
    {
        type: 'micro-drill',
        title: "Baseline Check",
        subtitle: "Ceritakan akhir pekan atau liburan terakhir Anda.",
        mission: [
            "Tutor: 'What did you do last weekend?'",
            "Student: Answer freely (3-4 sentences).",
            "Action: Just tell the story."
        ],
        teacherNote: "Catat setiap kali murid menggunakan Verb 1 (Present) untuk cerita masa lalu. Ini error paling fatal."
    },

    // SLIDE 3: THE TRAP
    {
        type: 'concept',
        title: "The Time Traveler",
        subtitle: "Jangan melompat-lompat antar waktu.",
        content: [
            "Masalah: Mencampur Present (V1) dan Past (V2).",
            "Efek: Pendengar bingung. 'Ini kejadian sekarang atau kemarin?'",
            "Penyebab: Lupa mengubah kata kerja karena fokus ke cerita.",
            "Solusi: Kunci Timeline di masa lalu."
        ],
        teacherNote: "Analogi: Kalau kita masuk kamar 'Masa Lalu', pintunya dikunci. Jangan keluar masuk."
    },

    // SLIDE 4: THE GOLDEN RULE
    {
        type: 'comparison',
        title: "The Golden Rule",
        subtitle: "Lock the Timeline",
        comparison: [
            { wrong: "Last week I go to Bali. It is beautiful. I swim there.", right: "Last week I WENT to Bali. It WAS beautiful. I SWAM there." },
            { wrong: "Yesterday I meet client and we discuss rules.", right: "Yesterday I MET client and we DISCUSSED rules." }
        ],
        teacherNote: "Sekali bilang 'Yesterday/Last...', SEMUA kata kerja harus berubah bentuk (V2)."
    },

    // --- PHASE 2: LOGIC & MECHANICS (V2) ---

    // SLIDE 5: FORMULA A (TIME MARKERS)
    {
        type: 'formula',
        title: "Step 1: Set the Time",
        subtitle: "Kuncinya ada di kata pertama.",
        formula: "Time Marker + Subject + V2",
        vocabulary: [
            { term: "Yesterday...", meaning: "Kemarin", example: "Yesterday, I stayed at home." },
            { term: "Last weekend...", meaning: "Akhir pekan lalu", example: "Last weekend, I watched a movie." },
            { term: "Two days ago...", meaning: "Dua hari lalu", example: "Two days ago, I bought a laptop." },
            { term: "Just now...", meaning: "Barusan", example: "Just now, I finished my report." },
            { term: "This morning...", meaning: "Pagi ini", example: "This morning, I went to office." }
        ],
        teacherNote: "Wajib menggunakan Time Marker di awal kalimat untuk men-trigger otak pakai V2."
    },

    // SLIDE 6: DRILL (TRIGGER)
    {
        type: 'micro-drill',
        title: "Micro-Drill: Time Triggers",
        subtitle: "Ubah kalimat ini ke masa lalu.",
        mission: [
            "I eat lunch. -> 'Yesterday, I ATE lunch.'",
            "I meet Budi. -> 'Last week, I MET Budi.'",
            "I send the email. -> 'Just now, I SENT the email.'",
            "I go to office. -> 'This morning, I WENT to office.'"
        ],
        teacherNote: "Pastikan murid mengubah Verb-nya. Eat->Ate, Meet->Met, Send->Sent, Go->Went."
    },

    // SLIDE 7: FORMULA B (REGULAR VS IRREGULAR)
    {
        type: 'formula',
        title: "Step 2: The Verb Change",
        subtitle: "Regular (-ed) vs Irregular (Unik).",
        formula: "Most Verbs = +ed. Special Verbs = Memorize.",
        vocabulary: [
            { term: "Work -> Worked", meaning: "Regular", example: "I worked late yesterday." },
            { term: "Call -> Called", meaning: "Regular", example: "I called him." },
            { term: "Go -> Went", meaning: "Irregular (Common)", example: "I went to Bandung." },
            { term: "Have -> Had", meaning: "Irregular (Common)", example: "I had a meeting." }
        ],
        teacherNote: "Fokus pada 5 irregular verbs paling umum: Go(Went), Have(Had), Do(Did), Get(Got), Meet(Met)."
    },

    // SLIDE 8: COMPARISON
    {
        type: 'comparison',
        title: "Sound Check",
        subtitle: "Past Tense Pronunciation",
        comparison: [
            { wrong: "Work-ed (2 suku kata)", right: "Workt (1 suku kata ending T)" },
            { wrong: "Call-ed (2 suku kata)", right: "Calld (1 suku kata ending D)" },
            { wrong: "Start-ed (2 suku kata)", right: "Start-id (2 suku kata - benar karena ending T/D)" }
        ],
        teacherNote: "Jangan baca 'e-d' secara jelas kecuali ending T/D (Started, Ended). Sisanya lebur (Playd, Workt)."
    },

    // SLIDE 9: MINI-TASK (3 THINGS)
    {
        type: 'micro-drill',
        title: "Mini-Task: 3 Things I Did",
        subtitle: "Sebutkan 3 hal yang Anda lakukan kemarin.",
        mission: [
            "Yesterday, first I [V2]...",
            "Then, I [V2]...",
            "Finally, I [V2]...",
            "Example: Yesterday, first I woke up. Then I had coffee. Finally I drove to work."
        ],
        teacherNote: "Paksa murid menggunakan 3 kata kerja berbeda dalam bentuk V2."
    },

    // SLIDE 10: LOGIC CHECK
    {
        type: 'case-study',
        title: "Logic Check",
        subtitle: "Find the Imposter (V1)",
        caseStudy: {
            scenario: "Temukan kata kerja yang salah.",
            template: "\"Last holiday was amazing. We traveled to Japan. We eat sushi every day. We also visited Tokyo Tower.\""
        },
        teacherNote: "Jawaban: 'Eat' salah. Harusnya 'Ate'. Karena konteksnya Last Holiday."
    },

    // --- PHASE 3: THE UPGRADE (FLOW) ---

    // SLIDE 11: TITLE
    {
        type: 'title',
        title: "The Upgrade: Flow & Emotion",
        subtitle: "Membuat cerita tidak kaku seperti robot.",
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 12: VOCABULARY (SEQUENCERS)
    {
        type: 'vocabulary',
        title: "Story Sequencers",
        subtitle: "Kata penghubung urutan waktu.",
        vocabulary: [
            { term: "At first...", meaning: "Awalnya...", example: "At first, I didn't want to go." },
            { term: "After that / Then...", meaning: "Setelah itu...", example: "After that, we looked for a hotel." },
            { term: "Suddenly...", meaning: "Tiba-tiba...", example: "Suddenly, it started raining." },
            { term: "In the end...", meaning: "Akhirnya (Kesimpulan)...", example: "In the end, we went home happy." }
        ],
        teacherNote: "Gunakan 'Suddenly' untuk memberi drama/plot twist pada cerita."
    },

    // SLIDE 13: VOCABULARY (ADJECTIVES)
    {
        type: 'vocabulary',
        title: "Emotional Adjectives",
        subtitle: "Berikan 'Rasa' pada cerita.",
        vocabulary: [
            { term: "Exhausting", meaning: "Melelahkan (Sangat)", example: "The trip was exhausting." },
            { term: "Memorable", meaning: "Berkesan", example: "It was a memorable night." },
            { term: "Awkward", meaning: "Canggung/Aneh", example: "The meeting was awkward." },
            { term: "Hectic", meaning: "Sibuk/Rusuh", example: "My Monday was very hectic." }
        ],
        teacherNote: "Ganti 'Good/Bad/Busy' dengan kata-kata ini agar terdengar lebih dewasa."
    },

    // SLIDE 14: TRANSFORMATION DRILL
    {
        type: 'recap',
        title: "Transformation Drill",
        recap: [
            { context: "Boring Story", sayThis: "My weekend was flat. Usually I just rested.", dontSayThis: "My weekend is so so." },
            { context: "Busy Story", sayThis: "It was hectic! I had back-to-back meetings.", dontSayThis: "I am very busy." },
            { context: "Sequence", sayThis: "First we met, then we had lunch.", dontSayThis: "We meet. After we lunch." }
        ]
    },

    // --- PHASE 4: THE SIMULATION ---

    // SLIDE 15: THE FORMULA (STAR)
    {
        type: 'formula',
        title: "The Story Framework",
        subtitle: "S-A-R Method",
        formula: "Situation (Set time/place) -> Action (What happened) -> Result (Feeling)",
        vocabulary: [
            { term: "S: Situation", meaning: "Last weekend, I went to Puncak...", example: "-" },
            { term: "A: Action", meaning: "Whatever happened (V2)...", example: "The traffic was crazy. We waited 3 hours." },
            { term: "R: Result", meaning: "How you felt...", example: "It was exhausting but the villa was nice." }
        ],
        teacherNote: "Gunakan struktur ini untuk memastikan cerita ada awal, tengah, dan akhir."
    },

    // SLIDE 16: BAD EXAMPLE
    {
        type: 'case-study',
        title: "The Confused Storyteller",
        subtitle: "Analisa kesalahan tense ini.",
        caseStudy: {
            scenario: "Context: Weekend Update",
            template: "\"Last Saturday, I wake up late. Then I go to mall with family. We have dinner. It is good.\""
        },
        teacherNote: "Semua verb masih V1 (Wake, Go, Have, Is). Ini terdengar seperti rutinitas, bukan cerita masa lalu."
    },

    // SLIDE 17: GOOD EXAMPLE
    {
        type: 'case-study',
        title: "The Engaging Storyteller",
        subtitle: "Versi Pro (V2 + Sequencers).",
        caseStudy: {
            scenario: "Context: Weekend Update",
            template: "\"Last Saturday, I woke up late because I was so tired. After that, I went to the mall with my family. We had a great dinner. It was simple, but memorable.\""
        },
        teacherNote: "Verb V2 (Woke, Was, Went, Had) + Connecting words + Adjectives."
    },

    // SLIDE 18: PREP TIME
    {
        type: 'micro-drill',
        title: "Preparation Time",
        subtitle: "Siapkan 1 cerita pendek (30-45 detik).",
        mission: [
            "Topic Options:",
            "1. A memorable vacation.",
            "2. Your last busy day at work.",
            "3. A funny thing that happened recently.",
            "Checklist: Use V2? Use 'Then/After that'? Use Adjective?"
        ],
        teacherNote: "Beri waktu 1 menit untuk berpikir. Murid boleh coreat-coret verb kunci."
    },

    // SLIDE 19: SIMULATION
    {
        type: 'simulation',
        title: "Showtime: Weekend Update",
        subtitle: "Final Simulation",
        simulation: {
            role: "Colleague / Friend",
            scenario: "Senin pagi di kantor. Teman Anda bertanya: 'So, how was your weekend?'",
            goal: "Ceritakan pengalaman Anda dengan lancar menggunakan Past Tense (V2).",
            timeLimit: 60
        },
        teacherNote: "Tanyakan follow-up question jika cerita terlalu pendek. 'Did you go alone?'"
    },

    // SLIDE 20: CLOSING
    {
        type: 'title',
        title: "Session Completed",
        subtitle: "Past Tense Unlocked.",
        teacherNote: "Review error V2 yang masih tersisa. Ingatkan: Story = Past Tense Mode."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Mana kalimat Past Tense yang BENAR?",
        options: [
            "Yesterday I go to the bank.",
            "Yesterday I went to the bank.",
            "Yesterday I am going to the bank."
        ],
        correctIndex: 1,
        explanation: "'Yesterday' adalah masa lalu, jadi Gunakan V2 (Went). Jangan V1 (Go)."
    },
    {
        question: "Apa bentuk V2 dari 'Buy', 'Think', dan 'Catch'?",
        options: [
            "Buyed, Thinked, Catched",
            "Bought, Thought, Caught",
            "Bought, Thinked, Caught"
        ],
        correctIndex: 1,
        explanation: "Ini adalah Irregular Verbs. Polanya mirip (Ought/Aught)."
    },
    {
        question: "Lengkapi kalimat: 'I was tired, so I _____ early.'",
        options: [
            "sleep",
            "sleeps",
            "slept"
        ],
        correctIndex: 2,
        explanation: "Kalimat pertama (Was) menunjukkan masa lalu. Maka lanjutannya harus V2 (Slept)."
    },
    {
        question: "Mana kata penghubung (Sequencer) untuk bagian akhir cerita?",
        options: [
            "At first",
            "Suddenly",
            "In the end"
        ],
        correctIndex: 2,
        explanation: "'In the end' atau 'Finally' digunakan untuk menutup cerita."
    },
    {
        question: "Pronunciation Check: Bagaimana cara baca 'Moved'?",
        options: [
            "Muv-ed (2 suku kata)",
            "Muvd (1 suku kata)",
            "Muv-id"
        ],
        correctIndex: 1,
        explanation: "Ending suara 'V' adalah voiced, jadi 'ed' dibaca 'D' (lebur). Bukan 'Id'."
    }
];
