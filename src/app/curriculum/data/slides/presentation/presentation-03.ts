import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Foundation: Impromptu Speaking",
        subtitle: "Seni bicara spontan dengan struktur 'PREP' agar tidak pernah 'freeze' lagi.",
        teacherNote: "Fokus: Menghilangkan ketakutan 'mendadak disuruh ngomong'. Tekankan bahwa struktur mengalahkan bakat."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Rapid-Response Mindset",
        subtitle: "Mengapa persiapan berlebihan justru membuat Anda 'freeze'"
    },
    {
        type: 'pres-mindset',
        title: "The Perfectionist Trap",
        subtitle: "Don't try to be perfect; try to be structured.",
        mindset: {
            before: "I must prepare perfectly or I will look stupid.",
            after: "I just need a simple structure to guide my thoughts.",
            bridgeText: "Shades of Truth over Perfect Lies"
        },
        teacherNote: "Orang Indo sering 'freeze' karena takut salah grammar atau takut tidak terdengar pintar. Struktur PREP adalah pengaman (safety net) mereka."
    },
    {
        type: 'pres-impact',
        title: "Silence is Power",
        subtitle: "Prinsip Utama Ketenangan (Composure)",
        impact: {
            quote: "PAUSE. THINK. STRUCTURE.",
            author: "The Impromptu Rule #1",
            accentColor: "#f59e0b"
        },
        teacherNote: "Jelaskan bahwa diam 3 detik untuk berpikir terlihat jauh lebih pro daripada langsung 'uhm... aaa...'."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The PREP Framework",
        subtitle: "Struktur universal untuk menjawab pertanyaan apa pun"
    },
    {
        type: 'pres-technique',
        title: "The PREP Formula",
        technique: {
            name: "P.R.E.P",
            description: "Kerangka bicara spontan yang memastikan pesan Anda logis dari awal sampai akhir.",
            steps: [
                "Point: Langsung ke intinya (Direct answer).",
                "Reason: Berikan alasan 'Mengapa' (The logic).",
                "Example: Berikan bukti nyata/analogi (The proof).",
                "Point: Ulangi intinya (The conclusion)."
            ],
            whyItWorks: "Daya ingat audiens paling kuat di awal dan akhir. PREP memastikan kedua titik itu aman.",
            icon: "🏗️"
        },
        teacherNote: "Simulasikan: 'What do you think of this coffee?' -> 'It's great (P), because it's not too bitter (R), for example this latte is very smooth (E), so yeah, I love it (P).'"
    },
    {
        type: 'comparison',
        title: "Random vs Structured",
        subtitle: "Cara orang awam vs profesional menjawab tantangan",
        comparison: [
            {
                wrong: "Uhm, the project is okay. We are working hard. Maybe next week finish? I hope so.",
                right: "The project is on track (P). We've solved the main bug (R), such as the login error (E). So, we'll finish by Friday (P)."
            },
            {
                wrong: "I think the new office is good. Close to mall. Large windows. I like the colors.",
                right: "The new office is very strategic (P) for our team's morale (R). For instance, the open space leads to more collaboration (E). Overall, it's a great move (P)."
            }
        ],
        teacherNote: "Tunjukkan bahwa 'Right' (PREP) terdengar jauh lebih 'Decisive' (tegas)."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The 'Buy Time' Tactics",
        subtitle: "Cara curang mendapatkan 5 detik untuk berpikir"
    },
    {
        type: 'pres-technique',
        title: "Tactical Stalling",
        technique: {
            name: "Buy Your Seconds",
            description: "Jangan langsung bicara. Gunakan 'Filler phrases' yang terdengar cerdas untuk memproses PREP Anda.",
            steps: [
                "Validate the question: 'That's a very interesting point...'",
                "The Echo: 'So, you're asking about the marketing budget...'",
                "The Transition: 'I've actually given this some thought...'"
            ],
            whyItWorks: "Otak butuh sekitar 3-5 detik untuk menyusun struktur. Kalimat ini adalah 'loading bar' Anda.",
            icon: "⏳"
        },
        teacherNote: "Latihan filler: 'Great question', 'Thank you for asking that', 'Let me look at that from another perspective'."
    },
    {
        type: 'pres-checklist',
        title: "The Anti-Freeze Checklist",
        subtitle: "Gunakan saat Anda mulai merasa panik",
        checklist: {
            title: "Quick Recovery Steps",
            items: [
                "Take a deep breath (Oxygen for your brain)",
                "Smile (Relax your facial muscles)",
                "Pick ONE main point (Don't try to say everything)",
                "Drop the PREP (Start with P immediately)",
                "Eye contact with one person (Find a friendly face)"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The Sudden Update",
        subtitle: "Latihan menghadapi situasi 'High Pressure'"
    },
    {
        type: 'pres-script',
        title: "The 'Ready for Anything' Script",
        subtitle: "Contoh script saat diminta kabar project mendadak",
        scriptSteps: [
            {
                label: "The Hook (P)",
                action: "Stand tall, use a clear voice.",
                script: "Generally speaking, we are 80% done with the prototype."
            },
            {
                label: "The Data (R/E)",
                action: "List 2 specific things quickly.",
                script: "We've finished the UI phase and started integration testing today."
            },
            {
                label: "The Wrap-up (P)",
                action: "Provide a clear next step.",
                script: "So, the full demo will be ready as promised by Monday morning."
            }
        ],
        teacherNote: "Pastikan murid tidak 'curhat' soal susahnya kerjaan. Fokus pada HASIL (P)."
    },
    {
        type: 'simulation',
        title: "The Boardroom Interruption",
        simulation: {
            role: "Middle Manager",
            scenario: "Di tengah rapat, Direktur tiba-tiba menoleh ke Anda: 'Eh, gimana perkembangan rekrutmen tim baru?'",
            goal: "Gunakan PREP. Jangan ceritakan semua detail, cukup sampaikan progress inti dan target.",
            timeLimit: 45
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: The PREP Ninja",
        subtitle: "Latih otot bicara spontan Anda setiap hari",
        mission: [
            "Gunakan PREP saat menjawab pertanyaan sederhana (makan apa? gimana kabar?)",
            "Praktikkan 'Buying Time' phrases minimal 3x sehari.",
            "Rekam suara diri sendiri menjawab 3 tantangan spontan di HP.",
            "Terapkan PREP di meeting kantor besok pagi!"
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What is the main purpose of the PREP framework?",
        options: ["To memorize scripts", "To provide a logical structure for spontaneous speaking", "To check grammar", "To make people laugh"],
        correctIndex: 1,
        explanation: "PREP ensures your spontaneous answer is structured and easy to follow."
    },
    {
        question: "What does the first 'P' in P.R.E.P stand for?",
        options: ["Preparation", "Practice", "Point", "Perfect"],
        correctIndex: 2,
        explanation: "Always start with a clear 'Point' or direct answer."
    },
    {
        question: "Why should you use 'Tactical Stalling' phrases like 'That's a great question'?",
        options: ["To sound smart only", "To give your brain 3-5 seconds to structure your answer", "To annoy the audience", "To hide that you don't know the answer"],
        correctIndex: 1,
        explanation: "These phrases buy you clinical seconds to organize your logic."
    },
    {
        question: "What should you do if you feel like 'freezing'?",
        options: ["Stop talking immediately", "Look at the floor", "Take a breath and start with a simple Point", "Say sorry in Indonesian"],
        correctIndex: 2,
        explanation: "Focusing on a single 'Point' and breathing helps reboot your focus."
    },
    {
        question: "In the 'E' part of PREP (Example), what is the best content to provide?",
        options: ["Long technical definitions", "A short story, analogy, or specific data point", "Hidden jokes", "The same sentence as the Point"],
        correctIndex: 1,
        explanation: "Examples/Evidence make your point credible and memorable."
    }
];
