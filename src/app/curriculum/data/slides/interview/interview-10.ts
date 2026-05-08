import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: 'title',
        title: "Mock Interview: UI/UX Designer",
        subtitle: "Session 10: The Portfolio & Craft Simulation",
        teacherNote: "Hari ini 'Design Review' terbesar murid. Fokus utama adalah bagaimana mereka menjelaskan logic di balik visual. Jangan biarkan mereka cuma bilang 'Ini cantik'."
    },
    {
        type: 'pres-mindset',
        title: "Mindset: The Product Thinker",
        subtitle: "Shift dari 'Pembuat Gambar' ke 'Problem Solver'",
        mindset: {
            before: "Saya harap mereka suka gaya visual saya dan pilihan warna saya.",
            after: "Saya akan menunjukkan bagaimana desain saya membantu bisnis dan user.",
            bridgeText: "Great design is invisible, but its results are measurable."
        },
        teacherNote: "Ingatkan: Interviewer UI/UX cari orang yang bisa diajak kolaborasi, bukan ego besar."
    },
    {
        type: 'pres-checklist',
        title: "Portfolio Presentation Checklist",
        subtitle: "Persiapan sebelum Share Screen",
        checklist: {
            title: "Virtual Portfolio Ready",
            items: [
                "✅ Figma Prototype: Link sudah siap dan 'Play' mode lancar.",
                "✅ Case Study Outline: Tahu bagian mana yang mau di-highlight.",
                "✅ 'Before vs After': Siapkan bukti nyata perubahan (misal: heatmap, metrics)."
            ]
        },
        teacherNote: "Minta murid cek link portfolionya sekarang juga sebelum simulasi dimulai."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: 'int-mock',
        title: "Role Card: UI/UX Designer",
        subtitle: "Company: 'TiketGo' (Travel & Lifestyle Startup)",
        mockInterview: {
            jobTitle: "Mid-level Product Designer",
            company: "TiketGo Indonesia",
            context: "TiketGo mau redesign fitur 'Hotel Booking' karena bounce rate-nya tinggi. Kamu akan interview dengan Head of Design.",
            questions: [
                "1. Walk me through a design project where you balanced business and user needs.",
                "2. How do you decide which user feedback to prioritize?",
                "3. Describe a time you disagreed with a PM. How did you resolve it?",
                "4. How do you stay updated with accessibility standards?"
            ]
        },
        teacherNote: "Jadilah Head of Design yang kritis. Tanya 'Why' untuk setiap keputusan visual."
    },
    {
        type: 'comparison',
        title: "Explaining Design Choices",
        comparison: [
            {
                wrong: "Saya taruh tombolnya di tengah karena terlihat lebih balance secara komposisi.",
                right: "I placed the primary CTA in the thumb-zone to reduce physical friction. Heatmaps showed users were missing the top button."
            }
        ],
        teacherNote: "Kanan menggunakan data (Heatmaps) dan terminologi UX (Thumb-zone, Friction)."
    },
    {
        type: 'concept',
        title: "Handling the 'Whiteboard' Challenge",
        subtitle: "Solving problems on the fly",
        content: [
            "1. **Clarify**: 'Before I start, who is the target user?'",
            "2. **Constraints**: 'Are we building this for iOS or Web?'",
            "3. **Sketch Vocally**: 'I would start with a simplified onboarding...'",
            "4. **Validate**: 'Does this align with our goal of reducing churn?'"
        ],
        teacherNote: "Latih murid untuk bertanya balik sebelum memberikan solusi."
    },
    {
        type: 'int-scenario',
        title: "Handling Negative Feedback",
        interviewScenario: {
            question: "What would you do if our CEO called your design 'boring'?",
            starAnswer: {
                situation: "The CEO didn't like the minimal aesthetic I proposed.",
                task: "Handle the subjective comment while protecting the UX.",
                action: "I asked what 'Exciting' meant to him, then showed data proving the 'boring' version led to 20% faster task completion.",
                result: "We compromised by adding subtle brand accents. He was satisfied because I showed business value."
            },
            tip: "Don't take it personally. Use data to bridge the gap."
        },
        teacherNote: "Ini pertanyaan 'Trap'. Jangan sampai murid terlihat baper atau keras kepala."
    },
    {
        type: 'micro-drill',
        title: "Critique Response Round",
        subtitle: "Polite but Firm",
        mission: [
            "Tutor: 'I think this font is too small and the contrast is bad.'",
            "Murid: Respond using 'Accessibility standards' (WCAG) as your shield.",
            "Tutor: 'Okay, but users like pretty things more than standards.' (Respond!)"
        ],
        teacherNote: "Latih 'Resilience'. Designer harus bisa mempertahankan argumen UX."
    },

    // ========== PHASE 3: THE SIMULATION (slides 9-11) ==========
    {
        type: 'simulation',
        title: "Mock Phase: Portfolio Walkthrough",
        subtitle: "10 Minutes of Deep Diving",
        simulation: {
            role: "Senior Design Interviewer",
            scenario: "Murid share screen portfolionya. Tutor tanya: 'Which part of this design was the most challenging?' dan 'How did you validate this UI decision?'.",
            goal: "Murid harus menceritakan 'Story' di balik portfolionya dengan 3 vocab UX.",
            timeLimit: 600
        },
        teacherNote: "Beri feedback soal cara murid memandu mata interviewer di layar. Jangan scroll terlalu cepat!"
    },
    {
        type: 'simulation',
        title: "Mock Phase: Stakeholder Conflict",
        subtitle: "Behavioral Round",
        simulation: {
            role: "Product Manager (Aggressive)",
            scenario: "Tutor: 'We need to launch this tomorrow. Skip the usability testing, just follow my sketch.'",
            goal: "Murid harus menunjukkan 'User Advocacy' tanpa terdengar ngeyel.",
            timeLimit: 300
        },
        teacherNote: "Uji apakah murid bisa bilang 'No' secara strategis. Misal: 'I understand the rush, but launching without a quick test might risk our core metric...'"
    },
    {
        type: 'int-scenario',
        title: "Killer Question: Analytics",
        interviewScenario: {
            question: "In your opinion, which local app has the best UX and why?",
            starAnswer: {
                situation: "Interviewer wants to see your analytical eye and market awareness.",
                task: "Don't just say 'It looks nice'. Be specific about UX patterns.",
                action: "I highlight 'Gojek's home-screen reorganization'. They solved cognitive overload by intelligent grouping.",
                result: "This shows I don't just 'use' apps, I 'analyze' them."
            },
            tip: "Pick an app and prep 2 specific reasons BEFORE the interview."
        },
        teacherNote: "Minta murid memilih satu app lokal dan buat analisis UX-nya sekarang dalam English."
    },

    // ========== PHASE 4: EVALUATION & MISSION (slides 12-13) ==========
    {
        type: 'concept',
        title: "The Designer Evaluation Rubric",
        subtitle: "How you were graded today",
        content: [
            "🎨 **Visual Rationale**: Alasan logis di balik setiap pixel (Score 1-5).",
            "👥 **User Advocacy**: Seberapa kuat kamu membela kenyamanan user (Score 1-5).",
            "💬 **Critique Handling**: Cara terima dan merespon feedback (Score 1-5).",
            "📈 **Business Insight**: Paham metrik/goals company (Score 1-5)."
        ],
        teacherNote: "Berikan score jujur. Fokus pada bahasa Inggris dan body language saat live portfolio review."
    },
    {
        type: 'mission',
        title: "Your Design Mission",
        subtitle: "Continuous Improvement",
        mission: [
            "1. Rapikan 1 project portfolio berdasarkan feedback mock hari ini.",
            "2. Rekam dirimu me-review app favoritmu (pakai jargon UX) selama 2 menit.",
            "3. Siapkan diri untuk Sesi 11: Data Analyst Path!"
        ],
        teacherNote: "Berikan semangat! Sesi selanjutnya adalah untuk para 'Data Geeks'."
    }
];

export const quiz: QuizQuestion[] = [];

