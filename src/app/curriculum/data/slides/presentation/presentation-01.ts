import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Foundation: Overcoming Stage Fright",
        subtitle: "Metode Psikologi & Teknik Pernapasan untuk Tampil Percaya Diri",
        teacherNote: "Gugup itu normal. Tugas tutor: Pastikan mereka paham 'Physiological Sigh' di awal."
    },
    {
        type: 'pres-mindset',
        title: "The Nervousness Reframing",
        subtitle: "Mengubah rasa takut menjadi energi positif",
        mindset: {
            before: "I'm so nervous. What if I make a mistake and look stupid?",
            after: "I'm so excited! This adrenaline is my fuel to perform better.",
            bridgeText: "Relabel 'Nervous' to 'Excited'"
        },
        teacherNote: "Jelaskan bahwa tubuh tidak tahu bedanya gugup dan antusias. Cuma label di otak yang beda."
    },
    {
        type: 'pres-impact',
        title: "The Golden Rule",
        subtitle: "Prinsip Utama ECC dalam Presentasi",
        impact: {
            quote: "ENERGY > PERFECTION",
            author: "Presentation Rule #1",
            accentColor: "#2563eb"
        },
        teacherNote: "Tekankan: Audiens lebih peduli pada ENERGI kita daripada GRAMMAR yang sempurna."
    },
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The 4-4-4 Technique",
        subtitle: "Metode Navy SEALs untuk ketenangan instan"
    },
    {
        type: 'pres-technique',
        title: "Box Breathing",
        technique: {
            name: "The 4-4-4 Method",
            description: "Teknik pernapasan sederhana untuk 'hack' sistem saraf dan menurunkan detak jantung.",
            steps: [
                "Breathe in for 4 seconds (Tarik napas)",
                "Hold for 4 seconds (Tahan)",
                "Exhale for 4 seconds (Buang napas)",
                "Hold for 4 seconds (Tahan)"
            ],
            whyItWorks: "Metode ini mengirim sinyal ke otak bahwa Anda aman, sehingga menghentikan respon 'Fight or Flight'.",
            icon: "🫁"
        }
    },
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "Body Language Protocol",
        subtitle: "Menggunakan fisik untuk memengaruhi otak"
    },
    {
        type: 'pres-technique',
        title: "The Expansion Pose",
        technique: {
            name: "Power Posing",
            description: "Membuka postur tubuh untuk meningkatkan hormon percaya diri (Testosteron).",
            steps: [
                "Stand with feet shoulder-width apart",
                "Hands on hips (Wonder Woman/Superman style)",
                "Chin up, chest out (Dagu naik, dada tegak)",
                "Hold for 2 minutes (Lakukan sebelum naik panggung)"
            ],
            whyItWorks: "Postur tubuh memengaruhi kimiawi otak, membuat Anda merasa lebih dominan dan less-stressed.",
            icon: "🦸‍♂️"
        }
    },
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The 3-Minute First Impression",
        subtitle: "Menangkan audiens di menit-menit awal"
    },
    {
        type: 'pres-checklist',
        title: "The Pre-Stage Routine",
        subtitle: "Lakukan ini 3 menit sebelum mulai bicara",
        checklist: {
            title: "3-Minute Checklist",
            items: [
                "Check equipment (Mic/Camera/Lighting)",
                "Take a sip of water (Cegah mulut kering)",
                "Perform 3 cycles of Box Breathing",
                "Smile & Pause for 2 seconds (Senyum dan diam sejenak)"
            ]
        }
    },
    {
        type: 'mission',
        title: "Mission: The Brave Speaker",
        subtitle: "Tugas Praktik Minggu Ini",
        mission: [
            "Practice Box Breathing for 1 minute.",
            "Record yourself using the 'Expansion Pose'.",
            "Sampaikan opening line presentasi Anda dengan 'Smile & Pause'.",
            "Mantra internal: Energy over Perfection."
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "How should you relabel the feeling of being 'nervous'?",
        options: ["Anxious", "Excited", "Scared", "Panic"],
        correctIndex: 1,
        explanation: "Nervous and excited have the same physical symptoms. Changing the label helps your performance."
    },
    {
        question: "What is the core philosophy of ECC when presenting?",
        options: ["Grammar > Energy", "Perfection > Connection", "Energy > Perfection", "Writing > Speaking"],
        correctIndex: 2,
        explanation: "Audiences care more about your energy and connection than perfect grammar."
    },
    {
        question: "In Box Breathing (4-4-4), what do you do after exhaling?",
        options: ["Breathe in immediately", "Hold for 4 seconds", "Drink water", "Start speaking"],
        correctIndex: 1,
        explanation: "The box has four sides: In, Hold, Out, Hold."
    },
    {
        question: "Why does 'Power Posing' work?",
        options: ["It makes you look taller", "It increases cortisol", "It changes your brain chemistry (Testosterone up, Cortisol down)", "It hides your mistakes"],
        correctIndex: 2,
        explanation: "Opening your body releases hormones that make you feel more confident."
    },
    {
        question: "What should you do for 2 seconds BEFORE saying your first word?",
        options: ["Check your phone", "Smile & Pause", "Apologize", "Look at your notes"],
        correctIndex: 1,
        explanation: "A smile and a pause show authority and help you connect with the audience."
    }
];
