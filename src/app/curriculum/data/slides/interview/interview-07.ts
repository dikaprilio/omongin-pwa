import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: "title",
        title: "Software Engineer: Technical Interview Prep",
        subtitle: "Session 7: Mastering Vocab & Performance Questions",
        teacherNote: "Selamat datang di sesi khusus Software Engineer. Fokus pada perpaduan Technical Vocabulary dan Behavioral Questions ala startup Indonesia (Tokopedia, Gojek)."
    },
    {
        type: "concept",
        title: "Why Tech English Matters?",
        subtitle: "Bukan cuma soal ngoding, tapi soal COLLABORATION",
        content: [
            "1. **Cross-border teams**: Banyak startup Indo punya engineer di region lain. English is the bridge.",
            "2. **Documentation**: Technical specs dan arsitektur selalu dalam English.",
            "3. **Code Reviews**: Menjelaskan 'Why' di balik kodemu ke Senior Engineer global."
        ],
        teacherNote: "Tekankan bahwa 'ngoding doang' nggak cukup untuk naik ke Senior role. English adalah kunci untuk leadership."
    },
    {
        type: "comparison",
        title: "Amateur vs Professional: Tech Intro",
        comparison: [
            {
                wrong: "I am a programmer. I know Java and Python. I have worked at some small companies.",
                right: "I'm a Software Engineer specializing in backend systems. Recently, I optimized our API layer which reduced latency by 30% using Go and Redis."
            }
        ],
        teacherNote: "Bandingkan: kiri cuma daftar fakta. Kanan punya impact, metrik, dan tech stack yang jelas (Professional)."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: "formula",
        title: "The Tech Answer Formula",
        subtitle: "Context + Action + Impact",
        formula: "Role/Project Context + Specific Action/Tool + Measurable Impact",
        teacherNote: "Rumus leaner dari STAR untuk pertanyaan teknis cepat. Contoh: 'In the checkout module (Context), I refactored the SQL queries (Action), reducing load time by 40% (Impact).'"
    },
    {
        type: "int-vocab",
        title: "Essential Tech Vocab: Architecture & Process",
        interviewVocab: [
            { term: "Scalability", meaning: "Kemampuan sistem handle growth", example: "We architected the microservices for high scalability.", category: "logic" },
            { term: "Trade-off", meaning: "Konsekuensi pilihan teknis", example: "There's a trade-off between speed and data consistency here.", category: "logic" },
            { term: "Bottleneck", meaning: "Hambatan yang bikin lambat", example: "The database connection was our main bottleneck.", category: "perf" },
            { term: "Technical Debt", meaning: "Utang kode karena solusi sementara", example: "We allocate 20% of our sprint to address technical debt.", category: "process" },
            { term: "Refactoring", meaning: "Merapikan kode internal", example: "I led the refactoring of the legacy payment module.", category: "maintenance" }
        ],
        teacherNote: "Interview teknis bukan cuma soal 'benar', tapi soal menunjukkan kamu paham tradeoff dari setiap arsitektur."
    },
    {
        type: "comparison",
        title: "Explaining Processes",
        comparison: [
            {
                wrong: "I check my code, then I push, then PM checks, then it's live.",
                right: "My workflow involves local unit testing, a pull request for peer review, and automated deployment through our CI/CD pipeline."
            }
        ],
        teacherNote: "Perhatikan penggunaan terminologi: 'Pull request', 'Peer review', 'CI/CD pipeline'."
    },
    {
        type: "concept",
        title: "Vocabulary Upgrades (Tech Edition)",
        subtitle: "Sounding like an Engineering Leader",
        content: [
            "❌ 'I made the app fast' → ✅ 'I **optimized** application performance.'",
            "❌ 'I fixed many bugs' → ✅ 'I **improved system stability** by resolving critical issues.'",
            "❌ 'I work with others' → ✅ 'I **collaborate cross-functionally** with product.'",
            "❌ 'We have old code' → ✅ 'We are managing a **legacy codebase**.'"
        ],
        teacherNote: "Diksi 'optimized', 'stability', dan 'cross-functionally' bikin vibe Senior engineer menonjol."
    },
    {
        type: "micro-drill",
        title: "Vocab Integration",
        subtitle: "Fill in the Blank (Spoken)",
        mission: [
            "Lengkapi: 'I suggested a ___ because our ___ code was causing a ___.'",
            "Tutor: Bantu murid menyusun kalimat logis (Misal: refactor, legacy, bottleneck)."
        ],
        teacherNote: "Fokus pada kelancaran memasukkan istilah teknis ke dalam kalimat perdebatan teknis."
    },

    // ========== PHASE 3: PRACTICE (slides 9-11) ==========
    {
        type: "int-scenario",
        title: "Scenario: The Failed Sprint",
        interviewScenario: {
            question: "Tell me about a time your team failed to deliver a feature on time.",
            starAnswer: {
                situation: "During a major launch for the payment module, we hit an API integration blocker.",
                task: "We promised 5 features but only finished 3 by the sprint deadline.",
                action: "Instead of scrambling, I flagged the blockers early to the PO and proposed a scope reduction.",
                result: "We delivered the 3 core features without bugs. The PM appreciated the transparency and we held a retrospective."
            },
            tip: "Interviewer cari 'Accountability' dan 'Problem Solving', bukan alasan."
        },
        teacherNote: "Kata kunci: 'Flagged blockers', 'Scope reduction', 'Transparency', 'Retrospective'."
    },
    {
        type: "int-scenario",
        title: "Scenario: Conflict of Interest",
        interviewScenario: {
            question: "How do you handle disagreements on technical architecture?",
            starAnswer: {
                situation: "My tech lead wanted to use a NoSQL DB, but I believed SQL was better for our strict data structure.",
                task: "I needed to present my case without creating team tension.",
                action: "I built a small benchmark prototype comparing the read/write speeds of both.",
                result: "The metrics showed SQL was 20% more reliable for our case. He agreed based on the data."
            },
            tip: "Fokus pada data and 'Healthy Conflict', bukan ego."
        },
        teacherNote: "Ini pertanyaan wajib di interview tech. 'Data wins arguments'."
    },
    {
        type: "comparison",
        title: "Amateur vs Professional: Asking Questions",
        comparison: [
            {
                wrong: "How much is the salary? Is there a lot of overtime?",
                right: "What does the engineering culture look like here? How does the team handle tech debt?"
            }
        ],
        teacherNote: "Bertanya soal 'Engineering Culture' bikin kandidat terlihat peduli kualitas."
    },

    // ========== PHASE 4: SIMULATION (slides 12-13) ==========
    {
        type: "simulation",
        title: "Live Tech Q&A Simulation",
        subtitle: "The Final Drill",
        simulation: {
            role: "Interviewer (Engineering Manager)",
            scenario: "Tutor bertanya: 'We have a slow legacy system. We can either patch the bugs (fast) or rewrite the whole service (takes 2 months). Which do you choose and why?'",
            goal: "Jawab menggunakan formula Context-Action-Impact, bahas 'Trade-offs'!",
            timeLimit: 120
        },
        teacherNote: "Tekan murid sedikit. Cek apakah mereka bisa menjelaskan 'Trade-off' bisnis vs teknis."
    },
    {
        type: "recap",
        title: "Tech Vocab Mastery Recap",
        subtitle: "Your Success Pillars",
        recap: [
            { context: "Optimization", sayThis: "Refactor, Bottleneck, Scalability", dontSayThis: "Merapikan, Lambat, Tambah user" },
            { context: "Process", sayThis: "Agile, Backlog, CI/CD", dontSayThis: "Meeting tim, Kerjaan numpuk, Upload biasa" },
            { context: "Mindset", sayThis: "Trade-offs, Mentorship, Tech Debt", dontSayThis: "Pilih aja, Bikin cepat, Biarin kode jelek" }
        ],
        teacherNote: "Persiapkan murid untuk Sesi 8: Full Mock Interview (System Design & Leadership)."
    }
];

export const quiz: QuizQuestion[] = [];
