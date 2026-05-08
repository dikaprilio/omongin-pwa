import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: "title",
        title: "UI/UX Designer: Visualizing Your Value",
        subtitle: "Session 9: Design Vocabulary & Process Q&A",
        teacherNote: "Selamat datang di sesi khusus UI/UX Designer. Hari ini kita ngomongin 'Why' di balik desainmu dalam English. HRD dari startup (Gojek/Traveloka) peduli pada User-Centricity."
    },
    {
        type: "concept",
        title: "The Role of English in Design",
        subtitle: "Design is Communication",
        content: [
            "1. **Design Handoff**: Menjelaskan specs dan interaction logic ke developers global.",
            "2. **Stakeholder Pitch**: Menjelaskan ROI (Return on Investment) dari desainmu ke CEO/PM.",
            "3. **Critique Sessions**: Memberi dan menerima feedback dengan gaya professional."
        ],
        teacherNote: "Tekankan bahwa 'English for Design' itu soal 'Clarity' dan 'Persuasion'. Kamu harus bisa 'menjual' idemu."
    },
    {
        type: "comparison",
        title: "Amateur vs Professional Intro",
        comparison: [
            {
                wrong: "I am a designer. I use Figma. I make cool apps and websites look good.",
                right: "I'm a UI/UX Designer with a passion for human-centered design. I specialize in building scalable design systems that drive better user retention."
            }
        ],
        teacherNote: "Bandingkan: kiri fokus pada 'Look good' (Boring). Kanan fokus pada 'Human-centered' dan 'Business results' (Professional)."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: "formula",
        title: "The UX Answer Formula",
        subtitle: "Problem + Process + Proof",
        formula: "The Pain Point + Your Research/Method + The Data/Result",
        teacherNote: "Rumus ini adalah STAR versi Designer. 'Proof' di sini bisa berupa usability score atau conversion metrics."
    },
    {
        type: "int-vocab",
        title: "Industry Vocab: Process & Visuals",
        interviewVocab: [
            { term: "Pain Point", meaning: "Masalah spesifik user", example: "The multi-step checkout was a major pain point.", category: "problem" },
            { term: "Usability Testing", meaning: "Tes kegunaan ke real users", example: "Our usability testing showed users struggle with the filters.", category: "research" },
            { term: "Design System", meaning: "Kumpulan komponen UI reusable", example: "I contributed 10 new components to our design system.", category: "visual" },
            { term: "Wireframe", meaning: "Kerangka dasar desain", example: "I started with low-fidelity wireframes to test the flow.", category: "visual" },
            { term: "Design Handoff", meaning: "Serah terima desain ke dev", example: "We ensure a seamless design handoff via Zeplin.", category: "process" }
        ],
        teacherNote: "Fokus pada pelafalan dan pastikan murid paham 'Handoff' bukan cuma ngasih file, tapi komunikasi."
    },
    {
        type: "concept",
        title: "Explaining Your Process (Double Diamond)",
        subtitle: "Discover → Define → Develop → Deliver",
        content: [
            "1. **Discover**: 'I started with user interviews and competitive audit.'",
            "2. **Define**: 'I synthesized findings into an IA and User Flow.'",
            "3. **Develop**: 'I prototyped 3 variations and ran a quick test.'",
            "4. **Deliver**: 'I prepared the specs for the final handoff.'"
        ],
        teacherNote: "Murid harus hafal 4 langkah standar industri ini jika ditanya soal proses."
    },
    {
        type: "concept",
        title: "UI/UX Vocabulary Upgrades",
        subtitle: "Sounds more strategic",
        content: [
            "❌ 'I made it look clean' → ✅ 'I **simplified the interface** to reduce cognitive load.'",
            "❌ 'I put buttons here' → ✅ 'I **optimized the visual hierarchy** for better conversion.'",
            "❌ 'I asked users' → ✅ 'I **conducted qualitative research** to uncover user motivations.'",
            "❌ 'It is easy to use' → ✅ 'The interface is **intuitive** and follows **accessibility standards**.'"
        ],
        teacherNote: "Perubahan diksi ini menaikkan salary expectation-mu di mata HRD."
    },
    {
        type: "micro-drill",
        title: "The Portfolio Pitch",
        subtitle: "Rationale Practice",
        mission: [
            "Pilih satu aplikasi random (misal: Gojek/Tokopedia).",
            "Jelaskan satu tombol kritis di sana dari sisi UX (Kenapa ukurannya/warnanya begitu?).",
            "Tutor: Paksa murid pakai kata 'Accessibility' atau 'Visual hierarchy'."
        ],
        teacherNote: "Latihan 'Thinking like a Senior Designer' sebelum benar-benar buka portofolio."
    },

    // ========== PHASE 3: PRACTICE (slides 9-11) ==========
    {
        type: "int-scenario",
        title: "Scenario: Data vs Gut Feeling",
        interviewScenario: {
            question: "What do you do if your design intuition conflicts with user test data?",
            starAnswer: {
                situation: "I loved a minimalist nav, but users testing it couldn't find the menu.",
                task: "Solve the navigation issue without sacrificing the clean aesthetic.",
                action: "I analyzed drop-off rates and added clear labels to the abstract icons.",
                result: "Success rate increased from 40% to 95%. I learned to prioritize clarity over 'trendy' visuals."
            },
            tip: "Selalu prioritaskan User Data. Ini bukti kamu 'User-Centric'."
        },
        teacherNote: "Tanya murid: 'Have you ever had to kill your favorite design because of data?'"
    },
    {
        type: "int-scenario",
        title: "Scenario: Conflict with Devs",
        interviewScenario: {
            question: "How do you handle a developer saying your design is too hard to build?",
            starAnswer: {
                situation: "I designed a complex animation that the dev said would delay the launch.",
                task: "Find a middle ground that maintains UX but meets the deadline.",
                action: "I paired with the lead dev to simplify the interaction while keeping the core value.",
                result: "We implemented a simpler version that took 50% less time. Relationship with dev improved."
            },
            tip: "Fokus pada 'Compromise' dan 'Technical Feasibility'."
        },
        teacherNote: "Kata kunci: 'Feasibility', 'Compromise', 'Collaboration'."
    },
    {
        type: "comparison",
        title: "Talking About Feedback",
        comparison: [
            {
                wrong: "Saya tidak suka feedback PM itu karena dia bukan designer.",
                right: "I value stakeholder feedback as a chance to align business goals with user needs. I ask clarifying questions to understand the 'Why' before iterating."
            }
        ],
        teacherNote: "Kanan menunjukkan 'Maturity'. Designer bukan seniman egois, tapi problem solver."
    },

    // ========== PHASE 4: SIMULATION (slides 12-13) ==========
    {
        type: "simulation",
        title: "Live Portfolio Pitch Simulation",
        subtitle: "3-Minute Highlight",
        simulation: {
            role: "Hiring Manager (Design Lead)",
            scenario: "Tutor: 'Walk me through a project where you solved a high-impact business problem. What was your process?'.",
            goal: "Murid harus pakai formula Problem-Process-Proof + minimal 3 vocab (Pain point, Iterate, Usability).",
            timeLimit: 180
        },
        teacherNote: "Fokus pada alur cerita. Jangan biarkan murid kelamaan bahas warna, minta hasil bisnisnya (metrics)."
    },
    {
        type: "recap",
        title: "Mission for Material 10",
        subtitle: "Persiapan Real Mock Interview",
        recap: [
            { context: "Portfolio", sayThis: "Pilih 1 case study end-to-end", dontSayThis: "Siapkan desain dribbble yang cuma cantik" },
            { context: "Whiteboard", sayThis: "Latihan 'Explain thinking' secara verbal", dontSayThis: "Diam saja saat memecahkan masalah" },
            { context: "Vocab", sayThis: "Hafalkan istilah: Cognitive load, Hierarchy", dontSayThis: "Lupa kata dan pakai bahasa gaul" }
        ],
        teacherNote: "Sesi depan (Sesi 10) adalah Full Mock Interview. Pastikan kandidat siapkan link portfolionya."
    }
];

export const quiz: QuizQuestion[] = [];

