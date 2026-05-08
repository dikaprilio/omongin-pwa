import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ========== PHASE 1: HOOK (slides 1-3) ==========
    {
        type: 'title',
        title: "Mock Interview: Software Engineer",
        subtitle: "Session 8: The Technical & Culture Match Simulation",
        teacherNote: "Sesuaikan ekspektasi: ini simulasi interview Software Engineer seolah-olah ke startup unicorn (Tokopedia/Gojek). Siapkan mindset murid agar tidak grogi."
    },
    {
        type: 'pres-mindset',
        title: "Mindset: The Problem Solver",
        subtitle: "Shift dari 'Penjawab Pertanyaan' ke 'Partner Diskusi'",
        mindset: {
            before: "Saya harus punya jawaban benar untuk setiap pertanyaan teknis.",
            after: "Saya harus menunjukkan cara saya berpikir dan bagaimana saya handle trade-offs.",
            bridgeText: "Engineer dinilai dari 'Proses Berpikir', bukan cuma hafalan sintaks."
        },
        teacherNote: "Jelaskan: kalau nggak tahu syntax-nya, jangan bilang 'Gak tahu'. Bilang 'I'm not exactly sure about that syntax, but here is how I would investigate it...'"
    },
    {
        type: 'concept',
        title: "The 'Whiteboard' without a Whiteboard",
        subtitle: "Explaining Architecture Verbally",
        content: [
            "1. **Start High Level**: 'The system consists of a gateway, service A, and a database.'",
            "2. **The Flow**: 'When a user clicks X, the request goes through Y...'",
            "3. **The Bottleneck**: 'The main challenge was the latency in service Z.'",
            "4. **The Solution**: 'I implemented Redis caching to solve this.'"
        ],
        teacherNote: "Latih murid untuk 'menggambar' dengan kata-kata. Intonasi harus jelas."
    },

    // ========== PHASE 2: LOGIC & MECHANICS (slides 4-8) ==========
    {
        type: 'int-mock',
        title: "Role Card: Backend Engineer",
        subtitle: "Company: 'BliTok' (Fictional Fintech Unicorn)",
        mockInterview: {
            jobTitle: "Backend Developer",
            company: "BliTok Fintech Services",
            context: "BliTok cari engineer yang paham API Design, Performance Optimization, dan Unit Testing. Interviewer adalah Engineering Manager yang peduli Clean Code.",
            questions: [
                "1. Walk me through a complex bug you solved in production.",
                "2. How do you ensure your code is maintainable for other team members?",
                "3. Explain the difference between SQL and NoSQL for a payment system.",
                "4. Describe your approach to handling technical debt."
            ]
        },
        teacherNote: "Murid harus menjawab seolah-olah EM ini ada di depan mereka. Ingatkan pakai 'I' instead of 'We' saat cerita pencapaian."
    },
    {
        type: 'comparison',
        title: "Explaining Technical Logic",
        comparison: [
            {
                wrong: "Ya saya pake SQL karena disuruh kantor. Datanya masuk ke table terus kita query pake SELECT.",
                right: "I chose SQL for this project because data consistency was our top priority. The ACID properties ensured we didn't have double-spend issues."
            }
        ],
        teacherNote: "Fokus pada 'Rationale' (Alasan). Senior engineer selalu punya alasan di balik pilihan teknisnya."
    },
    {
        type: 'int-scenario',
        title: "Handling the 'I Don't Know'",
        interviewScenario: {
            question: "How do you handle a technical question you don't know the answer to?",
            starAnswer: {
                situation: "Interviewer asks about a specific library I've never used.",
                task: "Don't panic and don't lie.",
                action: "I acknowledge it: 'I haven't worked with [Library X] yet, but looking at its documentation, it seems similar to [Library Y] which I used for...'",
                result: "Interviewer sees my ability to bridge knowledge gaps."
            },
            tip: "Honesty + Logic > Lying and getting caught."
        },
        teacherNote: "Murid sering takut terlihat 'bodoh'. Padahal tidak tahu itu manusiawi."
    },
    {
        type: 'comparison',
        title: "Culture Fit: Handling Mistakes",
        comparison: [
            {
                wrong: "It wasn't my fault, the requirements were unclear.",
                right: "I realized my mistake late in the sprint. I immediately alerted the team, provided a hotfix, and proposed a new linting rule to prevent it from happening again."
            }
        ],
        teacherNote: "Tunjukkan 'Accountability' (Tanggung Jawab) dan 'Process Improvement'."
    },
    {
        type: 'micro-drill',
        title: "Self-Correction Practice",
        subtitle: "Refining Your Worst Story",
        mission: [
            "Ceritakan kegagalan teknis terbesarmu.",
            "Ubah agar endingnya adalah 'Belajar hal baru' atau 'Membantu tim'.",
            "Tutor: Pastikan murid tidak terdengar defensif."
        ],
        teacherNote: "Hapus kata-kata 'Tapi', 'Sebenarnya', 'Karena orang lain'."
    },

    // ========== PHASE 3: THE SIMULATION (slides 9-11) ==========
    {
        type: 'simulation',
        title: "Mock Phase: The Architecture Deep-Dive",
        subtitle: "20 Minutes of Real-World Pressure",
        simulation: {
            role: "Interviewer (Strict Senior)",
            scenario: "Tutor bertanya detail tentang architecture proyek andalan murid: 'Why this database?', 'How does it scale?', 'What happens if the server goes down?'.",
            goal: "Murid harus bisa mempertahankan pilihan teknisnya dengan argumen logis.",
            timeLimit: 1200
        },
        teacherNote: "Jadilah sedikit lebih kaku di sini. Coba 'push' murid sampai batas kemampuannya."
    },
    {
        type: 'micro-drill',
        title: "The Rapid Fire Round",
        subtitle: "30 Seconds per Question",
        mission: [
            "1. 'What is a Pull Request?'",
            "2. 'Why do we need Unit Tests?'",
            "3. 'What is CI/CD?'"
        ],
        teacherNote: "Kecepatan merespon menunjukkan penguasaan materi (Fluency)."
    },
    {
        type: 'comparison',
        title: "Asking about Career Growth",
        comparison: [
            {
                wrong: "When will I get a promotion?",
                right: "What does the career progression look like for engineers here? Is there a mentorship program?"
            }
        ],
        teacherNote: "Kanan terlihat haus ilmu (Good signal), kiri cuma mau duit (Bad signal)."
    },

    // ========== PHASE 4: EVALUATION & MISSION (slides 12-13) ==========
    {
        type: 'concept',
        title: "The Engineer Evaluation Rubric",
        subtitle: "How you were graded today",
        content: [
            "📊 **Logical Clarity**: Seberapa gampang idemu dimengerti (Score 1-5).",
            "🛠️ **Tool Proficiency**: Seberapa PD kamu ngomongin tech stack (Score 1-5).",
            "🧠 **Trade-off Awareness**: Paham gak plus-minus pilihanmu (Score 1-5).",
            "🤝 **Cultural Vibe**: Enak gak diajak kerja bareng (Score 1-5)."
        ],
        teacherNote: "Isi rubric ini bersama murid secara transparan."
    },
    {
        type: 'mission',
        title: "Your Homework Mission",
        subtitle: "Continuous Improvement",
        mission: [
            "1. Tonton 1 video 'Mock Technical Interview' di YouTube.",
            "2. Catat 3 frasa keren yang dipakai candidate-nya.",
            "3. Siapkan diri untuk Sesi 9: UI/UX Designer Path!"
        ],
        teacherNote: "Berikan semangat! Sesi depan ganti topik, tapi skill interview-nya tetap kepake."
    }
];

export const quiz: QuizQuestion[] = [];

