import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Daily Routines",
        subtitle: "Mastering the 'S' Habit",
        teacherNote: "Goal: Memperbaiki error paling umum orang Indonesia: Lupa pakai 'S' untuk She/He (Third Person Singular).",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920"
    },

    // --- PHASE 1: THE MINDSET ---

    // SLIDE 2: WARM UP (BASELINE)
    {
        type: 'micro-drill',
        title: "The Baseline Check",
        subtitle: "Describe a colleague or boss.",
        mission: [
            "Tell me about your manager/boss. What do they do?",
            "Answer freely (30 seconds).",
            "Just speak naturally."
        ],
        teacherNote: "Fokus mendengarkan bunyi 'S' di akhir kata kerja. 90% murid biasanya melupakannya."
    },

    // SLIDE 3: THE TRAP
    {
        type: 'concept',
        title: "The Lazy Tongue",
        subtitle: "Why we forget the 'S'",
        content: [
            "Problem: Indonesian has NO verb changes.",
            "Indo: Saya kerja, Dia kerja (Sama).",
            "English: I work, He WORKS (Beda).",
            "The Trap: We treat every person the same."
        ],
        teacherNote: "Ini bukan soal pengetahuan, ini soal 'Muscle Memory' lidah."
    },

    // SLIDE 4: THE GOLDEN RULE
    {
        type: 'comparison',
        title: "The Golden Rule",
        subtitle: "The Snake Sound 🐍",
        comparison: [
            { wrong: "My boss go to office. (❌)", right: "My boss GOES to office. (✅)" },
            { wrong: "She have a meeting. (❌)", right: "She HAS a meeting. (✅)" },
            { wrong: "He like coffee. (❌)", right: "He LIKES coffee. (✅)" }
        ],
        teacherNote: "Ingat 'Snake Sound'. Kalau pelakunya SENDIRI (He/She/It/Nama Orang), harus ada DESIS 'Sss'."
    },

    // --- PHASE 2: LOGIC & MECHANICS (S/ES) ---

    // SLIDE 5: FORMULA A (SUBJECT CHECK)
    {
        type: 'formula',
        title: "Step 1: The Subject Check",
        subtitle: "Who is the actor?",
        formula: "Solo Player = +S | Group/I/You = No S",
        vocabulary: [
            { term: "I / You / We / They", meaning: "No 'S'", example: "They work hard." },
            { term: "He / She / It", meaning: "+ 'S'", example: "She works hard." },
            { term: "Mr. Budi (Solo)", meaning: "+ 'S'", example: "Mr. Budi manages the team." },
            { term: "The Team (Group)", meaning: "No 'S'", example: "The team members meet weekly." }
        ],
        teacherNote: "Hati-hati: 'The Team' bisa singular (It) atau plural (They) tergantung konteks, tapi untuk pemula fokus ke 'Members' (Plural) vs 'Leader' (Singular)."
    },

    // SLIDE 6: DRILL (RAPID FIRE)
    {
        type: 'micro-drill',
        title: "Micro-Drill: S or No S?",
        subtitle: "Selesaikan kalimat ini secepat mungkin.",
        mission: [
            "1. My Manager (Call)...",
            "2. My Clients (Complain)...",
            "3. The System (Work)...",
            "4. We (Need)...",
            "5. Everybody (Know)..."
        ],
        teacherNote: "Answers: 1. Calls, 2. Complain (Plural), 3. Works, 4. Need, 5. Knows (Everyone=Singular). Speed is key!"
    },

    // SLIDE 7: FORMULA B (PRONUNCIATION PART 1)
    {
        type: 'formula',
        title: "Step 2: The Sound Rules",
        subtitle: "Part 1: The 'S' & 'Z' Sounds",
        formula: "Most Verbs = Just add 'S'",
        vocabulary: [
            { term: "Works / Hits", meaning: "Hard Sound (/s/)", example: "Like a snake: 'Sss'" },
            { term: "KnoWS / CallS", meaning: "Soft Sound (/z/)", example: "Like a bee: 'Zzz'" },
            { term: "Lives / DriveS", meaning: "Soft Sound (/z/)", example: "Vibrates in throat" }
        ],
        teacherNote: "Jangan terlalu akademis tentang Voiced/Unvoiced. Cukup bedakan 'Tajam (S)' dan 'Halus (Z)'."
    },

    // SLIDE 8: FORMULA C (PRONUNCIATION PART 2)
    {
        type: 'formula',
        title: "Step 2: The Sound Rules",
        subtitle: "Part 2: The Extra Syllable (/iz/)",
        formula: "Ends in S/Z/Ch/Sh/Ge = ADD Syllable",
        vocabulary: [
            { term: "Man-age (2)", meaning: "Man-a-ges (3)", example: "He manages the team." },
            { term: "Dis-cuss (2)", meaning: "Dis-cuss-es (3)", example: "She discusses the deal." },
            { term: "Change (1)", meaning: "Chan-ges (2)", example: "It changes everyday." },
            { term: "Wash (1)", meaning: "Wash-es (2)", example: "He washes the car." }
        ],
        teacherNote: "Ini error paling sering. 'Change' itu 1 suku kata. 'Changes' harus 2 suku kata. Paksa murid hitung pakai jari."
    },

    // SLIDE 9: COMPARISON
    {
        type: 'comparison',
        title: "Sound Check",
        subtitle: "Spoken English Focus",
        comparison: [
            { wrong: "He change (1 syllable)", right: "He Chang-es (2 syllables)" },
            { wrong: "She wash (1 syllable)", right: "She Wash-es (2 syllables)" },
            { wrong: "It cost money", right: "It Costs money (Desis S!)" }
        ],
        teacherNote: "Lebih baik 'lebay' (berlebihan) mendesisnya daripada hilang sama sekali."
    },

    // SLIDE 10: ROLEPLAY (DIALOG)
    {
        type: 'roleplay',
        title: "Practice the Flow",
        subtitle: "Dialog: The New Colleague",
        roleplay: {
            scenario: "Asking about someone's job. Practice using the Snake Sound (S) verbs correctly.",
            roles: [
                { role: "Person A", goal: "Ask about Budi's job using 'What does he do?' and follow-up questions" },
                { role: "Person B", goal: "Answer using Snake Sound verbs: manages, travels, handles, prepares" }
            ]
        },
        teacherNote: "Pastikan intonasi bertanya (Does he...) naik di akhir."
    },

    // SLIDE 11: MINI-TASK (THE BOSS'S SCHEDULE)
    {
        type: 'micro-drill',
        title: "Mini-Task: The Boss's Schedule",
        subtitle: "Deskripsikan hari atasan Anda.",
        mission: [
            "Every morning, my boss [Arrive+s] at...",
            "Then, he/she [Check+s] the...",
            "Usually, he/she [Lead+s] a meeting...",
            "Finally, he/she [Go+es] home..."
        ],
        teacherNote: "Pastikan setiap kata kerja memiliki akhiran 'S' yang audibel."
    },

    // --- PHASE 3: THE UPGRADE (VOCAB & FREQUENCY) ---

    // SLIDE 12: TITLE
    {
        type: 'title',
        title: "The Upgrade: Professional Habits",
        subtitle: "Glossy Vocabulary & Frequency",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 13: VOCABULARY (ACTION VERBS) - NEW
    {
        type: 'vocabulary',
        title: "Action Verbs",
        subtitle: "Stop saying 'Do' or 'Make'. Use these.",
        vocabulary: [
            { term: "Oversee", meaning: "Mengawasi (Project/Team)", example: "She oversees the marketing division." },
            { term: "Handle", meaning: "Menangani (Masalah)", example: "He handles customer complaints." },
            { term: "Coordinate", meaning: "Mengatur (Jadwal/Orang)", example: "Budi coordinates the schedule." },
            { term: "Review", meaning: "Memeriksa", example: "The manager reviews our reports." }
        ],
        teacherNote: "Ganti kata basic (Look, Check, Do) dengan kata-kata ini agar terdengar expert."
    },

    // SLIDE 14: CASE STUDY (PLACEMENT)
    {
        type: 'case-study',
        title: "Placement Rules",
        subtitle: "Frequency Adverbs (Sering/Jarang)",
        caseStudy: {
            scenario: "RULE: Before the Main Verb.",
            template: "Standard: I go to Jakarta sometimes.\nUpgrade: I OCCASIONALLY travel to Jakarta.\n\nStandard: He is always late.\nUpgrade: He CONSISTENTLY arrives late."
        },
        teacherNote: "Adverb jatuh SEBELUM Action Verb, tapi SETELAH To Be (She is always...)."
    },

    // SLIDE 15: TRANSFORMATION DRILL
    {
        type: 'recap',
        title: "Transformation Drill",
        recap: [
            { context: "Checking Email", sayThis: "She consistently checks her inbox.", dontSayThis: "She always check email." },
            { context: "Handling Issues", sayThis: "He frequently handles technical errors.", dontSayThis: "He often fix error." },
            { context: "Supervision", sayThis: "My boss oversees 3 departments.", dontSayThis: "My boss bossing 3 departments." }
        ]
    },

    // --- PHASE 4: THE SIMULATION ---

    // SLIDE 16: THE FORMULA (DESCRIPTION)
    {
        type: 'formula',
        title: "The Routine Framework",
        subtitle: "How to explain a Job Description.",
        formula: "Role + Action Verbs (+s) + Frequency",
        vocabulary: [
            { term: "Role", meaning: "As a Sales Manager...", example: "-" },
            { term: "Action", meaning: "She oversees clients...", example: "(Ingat 'S')" },
            { term: "Detail", meaning: "...and frequently travels out of town.", example: "-" }
        ],
        teacherNote: "Gabungkan semua yang sudah dipelajari: S Habit + Action Verbs + Frequency."
    },

    // SLIDE 17: BAD EXAMPLE
    {
        type: 'case-study',
        title: "The Amateur Speaker",
        subtitle: "Apa yang salah di sini?",
        caseStudy: {
            scenario: "Context: Explaining Admin duties.",
            template: "\"My admin help me. She make report. She also manage data. Sometimes she busy.\""
        },
        teacherNote: "Error: Help(s), Make(s), Manage(s). Hilang 'Is' (She IS busy)."
    },

    // SLIDE 18: GOOD EXAMPLE
    {
        type: 'case-study',
        title: "The Professional Speaker",
        subtitle: "Versi Pro (Snake Sound + Vocab).",
        caseStudy: {
            scenario: "Context: Explaining Admin duties.",
            template: "\"My admin ASSISTS me a lot. She consistently PREPARES reports and MANAGES our data. She IS occasionally busy with invoices.\""
        },
        teacherNote: "Verb strong: Helps -> Assists, Makes -> Prepares."
    },

    // SLIDE 19: PREP TIME
    {
        type: 'micro-drill',
        title: "Preparation Time",
        subtitle: "Pick one person to describe.",
        mission: [
            "Option A: Your Boss (He/She)",
            "Option B: Your Colleague (He/She)",
            "Option C: A Family Member (He/She)",
            "Task: List 3 things they do using 'Action Verbs' (Oversees, Handles, etc)."
        ],
        teacherNote: "Tulis poin-poinnya saja. Jangan lupa 'S' diujung kata kerja."
    },

    // SLIDE 20: SIMULATION
    {
        type: 'simulation',
        title: "Orientation Day",
        subtitle: "Final Simulation",
        simulation: {
            role: "Senior Staff",
            scenario: "Ada karyawan baru bertanya tentang Manager kalian: 'What is the manager like? What does he/she do?'",
            goal: "Describe your manager's routine duties professionally (45-60s).",
            timeLimit: 60
        },
        teacherNote: "Pastikan murid konsisten menggunakan 'He/She' dan Verb+S. Jika murid pakai 'You', koreksi (kita sedang gosipin orang ke-3)."
    },

    // SLIDE 21: CLOSING
    {
        type: 'title',
        title: "Session Completed",
        subtitle: "The 'S' Habit Installed.",
        teacherNote: "Homework: Perhatikan email/chat dari bos/klien. Notice penggunaan 'S' pada verb mereka."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Select the grammatically correct sentence.",
        options: [
            "She go to work at 8.",
            "She goes to work at 8.",
            "She going to work at 8."
        ],
        correctIndex: 1,
        explanation: "Subject 'She' (Singular) requires the verb to change (Go + es = Goes)."
    },
    {
        question: "Which subject does NOT need an 'S' on the verb?",
        options: [
            "My Manager (He/She)",
            "The Client (He/She)",
            "The Clients (They)"
        ],
        correctIndex: 2,
        explanation: "'The Clients' is plural (They), so the verb stays in base form (e.g., They complain)."
    },
    {
        question: "Correct pronunciation for 'Changes'?",
        options: [
            "Change-s (1 syllable)",
            "Change-iz (2 syllables)",
            "Chang-es"
        ],
        correctIndex: 1,
        explanation: "Words ending in sibilant sounds (s, z, ch, sh, ge) add a syllable: Change -> Chan-ges (/iz/)."
    },
    {
        question: "Professional upgrade for: 'He looks at the report'.",
        options: [
            "He sees the report.",
            "He reviews the report.",
            "He watches the report."
        ],
        correctIndex: 1,
        explanation: "'Reviews' implies careful examination, much more professional than 'looks at'."
    },
    {
        question: "Where should the adverb go? 'She (always) is (always) busy'.",
        options: [
            "She always is busy.",
            "She is always busy.",
            "Always she is busy."
        ],
        correctIndex: 1,
        explanation: "Frequency adverbs go AFTER the verb 'To Be' (Am/Is/Are). But BEFORE action verbs (e.g., She always works)."
    }
];
