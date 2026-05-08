import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Graphic Designer",
        subtitle: "Session 29: Visual Communication Excellence",
        teacherNote: "Goal: Murid siap menghadapi interview Graphic Designer. Fokus: design principles, portfolio presentation, creative process, dan tool proficiency."
    },
    {
        type: 'concept',
        title: "The Graphic Design Landscape",
        subtitle: "VISUALS THAT COMMUNICATE",
        content: [
            "Graphic Designer = visual communicator, problem solver, brand guardian 🎨",
            "Scope: branding, marketing materials, social media graphics, UI/UX, packaging",
            "Skills: design principles, typography, color theory, software mastery, communication",
            "Tools: Adobe Creative Suite (PS, AI, ID), Figma, Canva untuk quick turns",
            "Career path: Junior Designer → Designer → Senior Designer → Art Director/Creative Director",
            "Portfolio is everything: show process, not just final pixels"
        ],
        teacherNote: "Graphic design adalah tentang communication, bukan hanya aesthetics. Mereka cari: problem-solving skills dan strategic thinking."
    },
    {
        type: 'comparison',
        title: "The Designer Mindset Check",
        comparison: [
            {
                wrong: "Saya suka gambar dan desain yang bagus, jadi saya designer.",
                right: "I solve communication problems through visual design, balancing aesthetics with strategic objectives."
            },
            {
                wrong: "Saya bikin desain yang saya suka dan client harus terima.",
                right: "I collaborate with stakeholders to create designs that achieve business goals while maintaining creative integrity."
            }
        ],
        teacherNote: "Professional designers adalah problem solvers. Client service dan strategic thinking adalah core skills."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Design Process Formula",
        subtitle: "From Brief to Delivery",
        formula: "BRIEF → RESEARCH → CONCEPT → DESIGN → REFINE → DELIVER",
        content: [
            "BRIEF: Understand objectives, audience, constraints, dan success metrics",
            "RESEARCH: Competitive analysis, inspiration, trend research",
            "CONCEPT: Develop creative directions dan present options",
            "DESIGN: Execute chosen concept dengan attention to principles",
            "REFINE: Iterate based on feedback dan testing",
            "DELIVER: Final files dengan proper documentation"
        ],
        teacherNote: "Design process adalah selling point. Clients/stakeholders want to see structured approach, not magic."
    },
    {
        type: 'int-vocab',
        title: "Graphic Design Essentials",
        subtitle: "Designer Must-Know Terms",
        interviewVocab: [
            { term: "Typography", meaning: "Seni penggunaan huruf", example: "I selected typography that conveys both modernity and trustworthiness.", category: "Principles" },
            { term: "Color theory", meaning: "Teori warna", example: "Using complementary colors to create visual hierarchy and contrast.", category: "Principles" },
            { term: "White space", meaning: "Ruang kosong/negative space", example: "Strategic white space improves readability and focus.", category: "Principles" },
            { term: "Visual hierarchy", meaning: "Urutan visual", example: "I established clear visual hierarchy guiding the viewer's eye.", category: "Principles" },
            { term: "Brand guidelines", meaning: "Panduan brand", example: "All designs strictly follow brand guidelines for consistency.", category: "Branding" },
            { term: "Mood board", meaning: "Papan inspirasi", example: "I created a mood board to align on aesthetic direction early.", category: "Process" },
            { term: "Mockup", meaning: "Pratinjau desain", example: "I presented designs in realistic mockups for better visualization.", category: "Presentation" },
            { term: "Vector vs Raster", meaning: "Tipe file grafis", example: "Logos are vector for scalability, photos are raster.", category: "Technical" }
        ],
        teacherNote: "Design vocabulary menunjukkan professionalism. Murid harus articulate design decisions dengan proper terms."
    },
    {
        type: 'concept',
        title: "Design Principles for Impact",
        subtitle: "THE FOUNDATION OF GOOD DESIGN",
        content: [
            "Balance: Distribusi visual weight untuk stability dan harmony",
            "Contrast: Perbedaan untuk emphasis dan visual interest",
            "Alignment: Struktur untuk organization dan readability",
            "Repetition: Consistency untuk unity dan brand recognition",
            "Proximity: Grouping untuk relationships dan hierarchy",
            "White Space: Breathing room untuk focus dan elegance"
        ],
        teacherNote: "These principles adalah fundamental. Great designers apply them intentionally, not intuitively."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Design Revision Request",
        subtitle: "Pertanyaan: How do you handle client feedback?",
        interviewScenario: {
            question: "A client asks you to make the logo bigger, add more colors, and use 3 different fonts. How do you respond?",
            starAnswer: {
                situation: "SITUATION: Client requests that would compromise design quality dan brand consistency.",
                task: "TASK: I need to address their underlying concerns while maintaining design integrity.",
                action: "ACTION: First, I listen to understand their goals — maybe they want more prominence (not just bigger). Second, I explain design rationale: 'A larger logo might overshadow content. Let's try a bolder placement instead.' Third, I offer alternatives: 'Multiple fonts can look cluttered. Let's use weights within one font family for variety.' Fourth, I show A/B comparisons so they can see the difference.",
                result: "RESULT: Most clients appreciate the education. They feel heard, understand the trade-offs, dan often agree with professional recommendations. When they insist, I find compromises that maintain minimum quality standards."
            },
            tip: "Client management: listen first, educate second, compromise third. Never be defensive."
        },
        teacherNote: "Client management adalah critical designer skill. Show diplomacy dan educational approach."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Tight Deadline Challenge",
        subtitle: "Pertanyaan: How do you handle tight deadlines?",
        interviewScenario: {
            question: "You have 24 hours to deliver a full campaign design that normally takes a week. What do you do?",
            starAnswer: {
                situation: "SITUATION: Unrealistic deadline untuk comprehensive campaign design.",
                task: "TASK: Deliver maximum value within constraints without burning out atau sacrificing all quality.",
                action: "ACTION: First, I clarify scope: what's absolutely essential vs nice-to-have? Second, I propose phased delivery: core assets first, variations later. Third, I leverage templates dan existing assets where appropriate. Fourth, I communicate progress every few hours — no surprises. Fifth, I focus on one strong concept rather than exploring multiple directions.",
                result: "RESULT: Delivered essential assets on time with acceptable quality. Extended assets delivered 2 days later. Client appreciated transparency dan pragmatic approach. Post-project, I proposed process improvements to prevent similar crunches."
            },
            tip: "Deadline management: clarify scope, communicate proactively, prioritize ruthlessly, deliver reliably."
        },
        teacherNote: "Designers sering face unrealistic deadlines. Show pragmatism dan communication skills."
    },
    {
        type: 'comparison',
        title: "Design Language: Amateur vs Professional",
        comparison: [
            {
                wrong: "I made it blue because blue is nice.",
                right: "I chose this blue because it conveys trust and aligns with industry conventions for fintech."
            },
            {
                wrong: "I think it looks good like this.",
                right: "This layout optimizes for the user's scanning pattern and puts CTA above the fold."
            }
        ],
        teacherNote: "Professional designers articulate rationale. Design decisions harus defensible, not arbitrary."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Design Critique Drill",
        subtitle: "Analyze and Articulate",
        mission: [
            "Critique sebuah logo terkenal: what works, what could improve?",
            "Analyze a website homepage: identify hierarchy, contrast, whitespace usage",
            "Explain your design choices: practice articulating rationale"
        ],
        teacherNote: "Design critique adalah interview skill. Murid harus bisa analyze dan articulate design decisions."
    },
    {
        type: 'recap',
        title: "Graphic Designer Interview Essentials",
        recap: [
            { context: "Portfolio", sayThis: "Show process, variety, results", dontSayThis: "Just final images" },
            { context: "Principles", sayThis: "Apply CRAP (contrast, repetition, alignment, proximity)", dontSayThis: "Just what feels right" },
            { context: "Communication", sayThis: "Articulate rationale, listen, educate", dontSayThis: "Defensive, subjective, stubborn" },
            { context: "Process", sayThis: "Structured, research-based, iterative", dontSayThis: "Jump straight to execution" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Graphic Designer Mock",
        subtitle: "Session 30 Preparation",
        mission: [
            "Curate portfolio: 6-8 best projects dengan case studies (problem → process → solution)",
            "Practice presenting: explain 1 project dalam 3 minutes dengan confidence",
            "Review design principles: bisa apply dan articulate dengan proper terminology",
            "Prepare for software questions: proficiency level dan workflow",
            "Research company: understand their visual style dan design challenges"
        ],
        teacherNote: "Persiapkan murid untuk final mock interview di session 30. Portfolio presentation adalah make-or-break."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa yang dimaksud dengan Visual Hierarchy?",
        options: [
            "Ukuran file desain dari besar ke kecil",
            "Urutan elemen visual yang memandu mata viewer",
            "Tingkat kesulitan dalam membuat desain",
            "Struktur organisasi tim desain"
        ],
        correctIndex: 1,
        explanation: "Visual hierarchy adalah pengaturan elemen visual untuk memandu viewer's eye dari yang paling penting ke yang least important. Ini helps communicate message effectively."
    },
    {
        question: "Mana yang lebih profesional untuk client presentation?",
        options: [
            "I think this looks better",
            "This layout improves readability by 30% based on eye-tracking studies",
            "Trust me, I am the designer",
            "Everyone else does it this way"
        ],
        correctIndex: 1,
        explanation: "Professional designers articulate rationale dengan data atau design principles. 'Improves readability by 30%' adalah defensible argument, bukan subjective opinion."
    },
    {
        question: "Prinsip design yang paling penting untuk readability?",
        options: [
            "Gunakan banyak warna untuk menarik perhatian",
            "White space/negative space dan contrast yang baik",
            "Isi setiap inchi space dengan informasi",
            "Gunakan minimal 5 font untuk variety"
        ],
        correctIndex: 1,
        explanation: "White space (breathing room) dan contrast adalah fundamental untuk readability. Too many colors atau fonts reduce legibility."
    }
];
