import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Content Writer",
        subtitle: "Session 27: The Power of Words",
        teacherNote: "Goal: Murid siap menghadapi interview Content Writer. Fokus: writing skills, content strategy, SEO basics, dan portfolio quality."
    },
    {
        type: 'concept',
        title: "The Content Writing Landscape",
        subtitle: "WORDS THAT DRIVE RESULTS",
        content: [
            "Content Writer = storyteller, strategist, dan SEO practitioner dalam satu role",
            "Formats: blog posts, website copy, email campaigns, social captions, video scripts",
            "Skills: writing excellence, audience understanding, SEO knowledge, research ability",
            "Indonesia market: demand tinggi untuk bilingual writers (Indo-English)",
            "Career path: Junior Writer → Content Writer → Senior Writer → Content Lead/Manager",
            "Portfolio is everything: quality over quantity, show variety of formats"
        ],
        teacherNote: "Content writing adalah craft yang requires both creativity dan discipline. Mereka cari: strong writing, research skills, dan adaptability."
    },
    {
        type: 'comparison',
        title: "The Content Writer Mindset",
        comparison: [
            {
                wrong: "Saya suka menulis jadi saya bisa jadi content writer.",
                right: "I combine writing craft with strategic thinking to create content that achieves business objectives."
            },
            {
                wrong: "Saya tulis apa yang saya pikirkan dan feel good tentang itu.",
                right: "I write for the target audience, optimizing for both engagement and search visibility."
            }
        ],
        teacherNote: "Professional content writing adalah strategic, bukan hanya expressive. Audience dan objectives adalah priority."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Content Writing Formula",
        subtitle: "Audience + Purpose + Research + Craft",
        formula: "RESEARCH → STRATEGIZE → WRITE → OPTIMIZE",
        content: [
            "RESEARCH: Understand audience, competitors, keywords, dan content gaps",
            "STRATEGIZE: Define angle, structure, tone, dan call-to-action",
            "WRITE: Craft compelling copy dengan clear flow dan engaging hooks",
            "OPTIMIZE: SEO refinement, readability improvement, CTA placement"
        ],
        teacherNote: "Great content writing adalah 40% preparation, 40% writing, 20% editing. Research dan strategy adalah foundation."
    },
    {
        type: 'int-vocab',
        title: "Content Writing Essentials",
        subtitle: "Writer Must-Know Terms",
        interviewVocab: [
            { term: "SEO", meaning: "Search Engine Optimization", example: "I optimize content for SEO to improve organic rankings.", category: "Technical" },
            { term: "CTA", meaning: "Call to Action", example: "Every piece ends with a clear CTA guiding next steps.", category: "Conversion" },
            { term: "Tone of voice", meaning: "Nada/gaya bahasa", example: "I adapted the tone of voice for millennial vs Gen Z audiences.", category: "Style" },
            { term: "Content brief", meaning: "Panduan konten", example: "I work from detailed content briefs including keywords and objectives.", category: "Process" },
            { term: "Readability", meaning: "Kemudahan baca", example: "I aim for Flesch Reading Ease score above 60 for general audiences.", category: "Quality" },
            { term: "Long-tail keywords", meaning: "Kata kunci spesifik", example: "I target long-tail keywords for lower competition, higher intent.", category: "SEO" },
            { term: "Content calendar", meaning: "Jadwal konten", example: "I plan content 1 month ahead using our editorial calendar.", category: "Planning" },
            { term: "Buyer persona", meaning: "Profil target audience", example: "I write for specific buyer personas, not generic audiences.", category: "Strategy" }
        ],
        teacherNote: "Content writers harus comfortable dengan marketing dan SEO vocabulary. Ini menunjukkan professional maturity."
    },
    {
        type: 'concept',
        title: "Content Writing Best Practices",
        subtitle: "CRAFT THAT CONVERTS",
        content: [
            "Hook: First 2 sentences determine if reader continues — make them count",
            "Structure: Clear headings, short paragraphs, scannable content",
            "Tone: Match audience expectations — professional for B2B, conversational for B2C",
            "SEO: Keywords in title, headers, intro, conclusion — tapi tetap natural",
            "Clarity: One idea per paragraph, simple words, active voice",
            "CTA: Every piece should guide reader to next step"
        ],
        teacherNote: "These are fundamentals. Great writers break rules dengan purposeful, tapi harus paham basics dulu."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Rewrite for Different Audiences",
        subtitle: "Pertanyaan: How do you adapt tone for different audiences?",
        interviewScenario: {
            question: "Write an intro for Cloud Storage Solutions untuk 2 audiences: C-suite executives dan small business owners.",
            starAnswer: {
                situation: "TASK: Same topic, different audiences",
                task: "ADAPT TONE AND FOCUS",
                action: "EXECUTIVE VERSION: Enterprise data security breaches cost companies $4.45M on average. Our cloud storage solution reduces risk while cutting infrastructure costs by 30% — all with 99.99% uptime guaranteed. SMALL BUSINESS VERSION: Running out of storage space? Losing files across devices? Our cloud storage keeps all your business files safe, synced, and accessible — so you can focus on growing your business, not managing your data.",
                result: "KEY DIFFERENCE: Executive version focuses on ROI, risk mitigation, dan reliability metrics. Small business version focuses on pain points, simplicity, dan benefit untuk growth."
            },
            tip: "Audience adaptation: same value proposition, different framing based on priorities and pain points."
        },
        teacherNote: "Highlight: flexibility dalam tone dan focus. Great writers adalah chameleons."
    },
    {
        type: 'int-scenario',
        title: "Scenario: SEO Content Challenge",
        subtitle: "Pertanyaan: How do you balance SEO dengan readability?",
        interviewScenario: {
            question: "Your content needs to rank for best coffee grinder Indonesia but reads keyword-stuffed. What do you do?",
            starAnswer: {
                situation: "SITUATION: Content is over-optimized, hurting readability and likely rankings too (Google penalizes keyword stuffing).",
                task: "TASK: Maintain SEO value while improving readability and user experience.",
                action: "ACTION: First, I use variations: coffee grinder terbaik, mesin giling kopi, grinder recommendations. Second, I distribute keywords naturally — in title, first paragraph, one H2, and conclusion. Third, I focus on semantic SEO: related terms like burr grinder, grind size, espresso. Fourth, I rewrite for flow — reading aloud to catch awkward phrasing.",
                result: "RESULT: Content now reads naturally while maintaining keyword relevance. Use of LSI keywords (latent semantic indexing) actually improves SEO by showing topical authority."
            },
            tip: "Modern SEO: write for humans first, optimize for search engines second. Natural language processing rewards topical depth over keyword density."
        },
        teacherNote: "SEO knowledge adalah differentiator. Show understanding of modern SEO, not outdated keyword stuffing."
    },
    {
        type: 'comparison',
        title: "Writing Quality: Weak vs Strong",
        comparison: [
            {
                wrong: "Our product is very good and has many features that customers like.",
                right: "Our project management tool reduces meeting time by 30% — here's how 3 teams achieved that."
            },
            {
                wrong: "In today's fast-paced world, businesses need solutions that work.",
                right: "Your team loses 8 hours weekly to status updates. Here's a better way."
            }
        ],
        teacherNote: "Strong writing: specific, benefit-driven, conversational, dan avoids cliches."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Headline Writing Drill",
        subtitle: "Create Compelling Headlines",
        mission: [
            "Write 3 headlines untuk article about remote work productivity",
            "Write email subject line untuk product launch (open rate focus)",
            "Rewrite boring headline: Tips for Better Sleep → make it compelling"
        ],
        teacherNote: "Headlines adalah critical skill. Practice writing hooks that drive clicks."
    },
    {
        type: 'recap',
        title: "Content Writer Interview Essentials",
        recap: [
            { context: "Portfolio", sayThis: "Quality samples, variety of formats, measurable results", dontSayThis: "Just quantity, no strategy" },
            { context: "SEO", sayThis: "Natural optimization, semantic keywords, user-first", dontSayThis: "Keyword stuffing, write for robots" },
            { context: "Audience", sayThis: "Adapt tone, understand personas, solve problems", dontSayThis: "One size fits all, write for myself" },
            { context: "Craft", sayThis: "Clear, engaging, error-free, strong CTA", dontSayThis: "Wordy, passive voice, no structure" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for Content Writer Mock",
        subtitle: "Session 28 Preparation",
        mission: [
            "Curate portfolio: 5-7 best pieces across different formats (blog, web copy, email, social)",
            "Practice writing exercise: time yourself writing 300 words on random topic",
            "Study SEO basics: on-page optimization, keyword research, meta descriptions",
            "Analyze great content: breakdown why viral articles work (hook, structure, flow)",
            "Edit old work: revisi tulisan lama untuk show growth"
        ],
        teacherNote: "Persiapkan murid untuk mock interview di session 28. Portfolio review dan live writing exercise akan jadi fokus."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa yang dimaksud dengan CTA (Call to Action)?",
        options: [
            "Contact Technical Assistant",
            "Call to Action — ajakan untuk bertindak",
            "Content Targeting Algorithm",
            "Creative Text Approach"
        ],
        correctIndex: 1,
        explanation: "CTA (Call to Action) adalah ajakan atau instruksi spesifik untuk audience melakukan tindakan — seperti Subscribe Now, Download Free Guide, atau Contact Us."
    },
    {
        question: "Prinsip SEO modern yang paling penting?",
        options: [
            "Keyword density minimal 5% di setiap paragraf",
            "Write for humans first, optimize for search engines second",
            "Gunakan keyword exact match sebanyak mungkin",
            "Tulis artikel minimal 3000 kata untuk ranking"
        ],
        correctIndex: 1,
        explanation: "Modern SEO prioritizes user experience dan natural language. Google's NLP understands topic relevance, not just keyword density. Quality content that serves user intent ranks best."
    },
    {
        question: "Mana yang lebih kuat untuk opening?",
        options: [
            "In this article, we will discuss various important things.",
            "Your team loses 8 hours weekly to status updates — here's the fix.",
            "Since the beginning of time, humans have needed tools.",
            "Our company was founded in 2010 and has many clients."
        ],
        correctIndex: 1,
        explanation: "Strong openings: specific, benefit-driven, conversational. Pilihan kedua langsung identify pain point dan promise solution — compelling untuk reader melanjutkan."
    }
];
