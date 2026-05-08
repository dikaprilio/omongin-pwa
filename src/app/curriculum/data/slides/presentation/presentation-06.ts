import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // ===== TITLE SLIDE =====
    {
        type: 'title',
        title: "Structure: The Killer Opening",
        subtitle: "Curi perhatian audiens di 30 detik pertama. Stop pembukaan yang membosankan.",
        teacherNote: "Fokus: Menghilangkan kebiasaan 'basa-basi' Indo yang terlalu panjang di awal."
    },

    // ===== PHASE 1: THE MINDSET =====
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Attention Economy",
        subtitle: "Mengapa 30 detik pertama adalah segalanya"
    },
    {
        type: 'pres-mindset',
        title: "The Politeness Trap",
        subtitle: "Don't waste their time with 'Thank You' first.",
        mindset: {
            before: "I must start with long greetings and thank every person in the room.",
            after: "I must start with a HOOK to prove that my talk is worth their time.",
            bridgeText: "Respect their attention, not just their title"
        },
        teacherNote: "Di Indonesia, basa-basi dianggap sopan. Di presentasi global, 'sopinstan' (sopan tapi instan) lebih dihargai. Sapa secukupnya, lalu masuk ke Hook."
    },
    {
        type: 'pres-impact',
        title: "The 30-Second Rule",
        subtitle: "Prinsip Utama Pembukaan (The Hook)",
        impact: {
            quote: "WIN THE ROOM IN THE FIRST MINUTE.",
            author: "Presentation Rule #3",
            accentColor: "#dc2626"
        },
        teacherNote: "Jika Anda gagal di 30 detik pertama, audiens akan membuka HP mereka."
    },

    // ===== PHASE 2: LOGIC & MECHANICS =====
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The 5 Hook Methods",
        subtitle: "Teknik mencuri perhatian selain 'Selamat Pagi'"
    },
    {
        type: 'pres-technique',
        title: "Hook Arsenal",
        technique: {
            name: "The 5 Methods",
            description: "Pilih satu teknik yang paling cocok dengan topik Anda.",
            steps: [
                "The Question: 'Have you ever wondered why...?'",
                "The Shocking Data: '90% of startups fail because...'",
                "The 'Imagine' Scenario: 'Imagine a world where...'",
                "The Story: 'Two years ago, I met a man who...'",
                "The Bold Statement: 'Email is dead.'"
            ],
            whyItWorks: "Metode ini memicu rasa penasaran (curiosity) atau emosi secara instan.",
            icon: "🪝"
        },
        teacherNote: "Latihan: Minta murid mencoba 'The Question' untuk topik kerjaan mereka."
    },
    {
        type: 'comparison',
        title: "Standard vs Killer Opening",
        subtitle: "Beda level energi di awal presentasi",
        comparison: [
            {
                wrong: "Good morning. Thank you for coming. Today I want to talk about our sales report for this month.",
                right: "What if I told you we could double our sales without spending a single dollar? (Question Hook)"
            },
            {
                wrong: "Hi everyone, I'm Andi. I'm the IT Manager. I will explain the new security update today.",
                right: "Last week, a company lost $1 million in 10 minutes because of a simple password error. (Data Hook)"
            }
        ],
        teacherNote: "Perhatikan bagaimana 'Right' langsung memberikan ALASAN kenapa audiens harus peduli."
    },

    // ===== PHASE 3: THE UPGRADE =====
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The 'After-Hook' Greeting",
        subtitle: "Kapan saatnya menyapa audiens?"
    },
    {
        type: 'pres-technique',
        title: "Delayed Greeting",
        technique: {
            name: "The Hook-Sink-Greet",
            description: "Gunakan Hook dulu, biarkan audiens terpaku (sink), baru sapa mereka secara singkat.",
            steps: [
                "Deliver the Hook (Boldly)",
                "Pause for 2 seconds (Effect)",
                "Brief Greeting: 'Good morning everyone, I'm [Name] and today...'"
            ],
            whyItWorks: "Ini menciptakan wibawa (authority) instan.",
            icon: "✨"
        },
        teacherNote: "Ini teknik pembicara TED Talk. Mereka jarang menyapa di kalimat pertama."
    },
    {
        type: 'pres-checklist',
        title: "The Opening Checklist",
        subtitle: "Pastikan 30 detik pertama Anda sempurna",
        checklist: {
            title: "Killer Opening Qualities",
            items: [
                "No 'uhm' or 'aaa' in the first sentence",
                "Strong eye contact (don't look at the floor)",
                "Loud and clear voice projection",
                "Direct connection to the Big Idea",
                "Smiling (unless it's a very sad topic)"
            ]
        }
    },

    // ===== PHASE 4: PRACTICE & SIMULATION =====
    {
        type: 'pres-phase',
        phaseNumber: 4,
        title: "Simulation: The First 30 Seconds",
        subtitle: "Latihan 'Landing' di panggung dengan percaya diri"
    },
    {
        type: 'pres-script',
        title: "The 'Data-Driven' Opening",
        subtitle: "Script untuk presentasi hasil project",
        scriptSteps: [
            {
                label: "The Hook",
                action: "Use a serious, authoritative tone.",
                script: "Every single day, we are losing 4 hours of productivity to inefficient meetings."
            },
            {
                label: "The Gretting",
                action: "Smile slightly, acknowledge the room.",
                script: "Good afternoon, Board members. I'm Andi, and today I'll show you how to win that time back."
            }
        ],
        teacherNote: "Tekankan pada angka '4 hours'. Itu adalah umpan (bait) ceritanya."
    },
    {
        type: 'simulation',
        title: "The Town Hall Opening",
        simulation: {
            role: "Department Head",
            scenario: "Anda akan presentasi di depan 200 orang karyawan. Suasana sangat bising.",
            goal: "Gunakan 'The Imagine Scenario' untuk membuat ruangan tiba-tiba hening dan fokus pada Anda.",
            timeLimit: 30
        }
    },

    // ===== MISSION =====
    {
        type: 'mission',
        title: "Mission: Hook Master",
        subtitle: "Latihlah otot 'Pembukaan' Anda",
        mission: [
            "Tonton 1 TED Talk dan catat Hook apa yang mereka gunakan.",
            "Rekam 3 variasi Hook untuk presentasi Anda berikutnya.",
            "Coba mulai meeting besok tanpa kata 'I want to talk about...'",
            "Latihan 'Hook-Greet' di depan cermin setiap pagi."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Why are the first 30 seconds of a presentation critical?",
        options: ["To show your fashion sense", "To determine if the audience will listen or open their phones", "To check the microphone", "To count the number of audience members"],
        correctIndex: 1,
        explanation: "Audiens memutuskan apakah Anda berharga untuk didengar dalam hitungan detik."
    },
    {
        question: "What is a 'Hook'?",
        options: ["A tool for fishing", "A structural element to grab attention at the start", "A type of slide background", "The ending of a presentation"],
        correctIndex: 1,
        explanation: "Hook adalah 'umpan' untuk menarik minat perhatian audiens sejak awal."
    },
    {
        question: "Which of these is a 'Standard' (Weak) opening?",
        options: ["Imagine you have no internet for a day.", "90% of people fail this test.", "Good morning, today I will present my report.", "Have you ever wondered why we work?"],
        correctIndex: 2,
        explanation: "Salam standar tanpa 'pancingan' seringkali terdengar membosankan dan 'forgettable'."
    },
    {
        question: "What is the 'Delayed Greeting' technique?",
        options: ["Saying hello at the end", "Delivering a hook first, then greeting the audience", "Not saying hello at all", "Saying hello 10 times"],
        correctIndex: 1,
        explanation: "Ini membangun wibawa dan rasa penasaran sebelum masuk ke perkenalan standar."
    },
    {
        question: "How should you deliver your first sentence?",
        options: ["Softly and looking at the floor", "Looking at your notes", "With strong eye contact and a clear voice", "While walking away from the stage"],
        correctIndex: 2,
        explanation: "Kesan pertama yang kuat datang dari bahasa tubuh dan vokal yang mantap."
    }
];
