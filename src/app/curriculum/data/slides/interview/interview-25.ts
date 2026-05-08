import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Social Media Manager",
        subtitle: "Session 25: The Art & Science of Social",
        teacherNote: "Goal: Murid siap menghadapi interview Social Media Manager. Fokus: content strategy, community management, analytics, dan platform expertise."
    },
    {
        type: 'concept',
        title: "The Social Media Landscape",
        subtitle: "WHERE BRANDS COME ALIVE",
        content: [
            "Social Media Manager = voice of the brand di digital space 📱",
            "Indonesia: 167M+ social media users — largest in Southeast Asia",
            "Platforms: Instagram, TikTok, LinkedIn, Twitter/X — each requires different strategy",
            "Skills mix: creativity + analytics + trend awareness + community management",
            "Career path: SMM → Senior SMM → Social Media Lead → Head of Social/Digital",
            "Portfolio matters: candidates diharapkan show real accounts they've managed"
        ],
        teacherNote: "SMM adalah role yang blend creative dan analytical. Mereka cari: trend-savvy, data-driven, dan engaging personality."
    },
    {
        type: 'comparison',
        title: "The SMM Mindset Check",
        comparison: [
            {
                wrong: "Saya suka main Instagram dan TikTok, jadi cocok jadi SMM.",
                right: "I understand that social media management is about driving business objectives through strategic content and community engagement."
            },
            {
                wrong: "Saya posting apa yang saya suka dan lihat engagement-nya.",
                right: "I develop data-informed content strategies that align with brand voice and marketing goals."
            }
        ],
        teacherNote: "SMM bukan 'main sosmed'. Mereka cari strategic thinking dan business awareness."
    },

    // ==================== PHASE 2: LOGIC & MECHANICS ====================
    {
        type: 'formula',
        title: "The Social Media Success Formula",
        subtitle: "Strategy + Content + Community + Analytics",
        formula: "STRATEGY → CREATE → ENGAGE → MEASURE",
        content: [
            "STRATEGY: Define objectives, audience personas, platform mix, dan content pillars",
            "CREATE: Produce engaging content (copy, visual, video) yang on-brand dan on-trend",
            "ENGAGE: Build community melalui responses, conversations, dan user-generated content",
            "MEASURE: Track KPIs, analyze performance, optimize based on data"
        ],
        teacherNote: "SMM adalah continuous cycle. Setiap fase penting — tidak bisa skip dari create ke create tanpa strategy dan measurement."
    },
    {
        type: 'int-vocab',
        title: "Social Media Essentials Vocabulary",
        subtitle: "SMM Must-Know Terms",
        interviewVocab: [
            { term: "Engagement rate", meaning: "Tingkat interaksi", example: "Our engagement rate improved from 2% to 5% after the campaign.", category: "Metrics" },
            { term: "Content pillars", meaning: "Tema konten utama", example: "Our content pillars are education, entertainment, and product showcase.", category: "Strategy" },
            { term: "Community management", meaning: "Pengelolaan komunitas", example: "I dedicate 2 hours daily to community management and responses.", category: "Engagement" },
            { term: "UGC", meaning: "User Generated Content", example: "Our UGC campaign generated 1,000+ authentic posts from customers.", category: "Content" },
            { term: "Impressions vs Reach", meaning: "Jumlah tayang vs jangkauan", example: "We had 100K impressions but 40K reach — meaning people saw content multiple times.", category: "Metrics" },
            { term: "Social listening", meaning: "Memantau percakapan", example: "I use social listening to track brand mentions and sentiment.", category: "Research" },
            { term: "Influencer collaboration", meaning: "Kerja sama influencer", example: "I managed influencer collaborations that drove 20% of Q3 sales.", category: "Partnerships" },
            { term: "Content calendar", meaning: "Kalender konten", example: "I plan content 2 weeks ahead using our content calendar.", category: "Planning" }
        ],
        teacherNote: "SMM punya vocab yang spesifik. Murid harus comfortable dengan metrics dan strategy terms."
    },
    {
        type: 'concept',
        title: "Platform-Specific Strategy",
        subtitle: "KNOW YOUR CHANNELS",
        content: [
            "📸 **Instagram**: Visual-first, Stories untuk engagement, Reels untuk reach, Shopping untuk conversion",
            "🎵 **TikTok**: Trend-driven, authentic content, entertainment value, Gen Z dominant",
            "💼 **LinkedIn**: B2B thought leadership, professional content, recruitment, industry insights",
            "🐦 **Twitter/X**: Real-time updates, customer service, trending conversations, snappy copy",
            "📌 **Pinterest**: Discovery platform, inspiration content, longer content lifespan"
        ],
        teacherNote: "Great SMM understands platform nuances. Same content doesn't work everywhere."
    },

    // ==================== PHASE 3: PRACTICE ====================
    {
        type: 'int-scenario',
        title: "Scenario: Low Engagement Recovery",
        subtitle: "Pertanyaan: 'How would you improve declining engagement?'",
        interviewScenario: {
            question: "Our Instagram engagement has dropped 40% over 3 months. What do you do?",
            starAnswer: {
                situation: "SITUATION: Instagram engagement dropped from 4% to 2.4% over 3 months. Follower growth stagnated.",
                task: "TASK: I need to diagnose root causes and develop a recovery strategy.",
                action: "ACTION: First, I conducted content audit — found we've been posting same formats. Second, I analyzed best-performing posts — video content had 3x engagement. Third, I researched competitors — they're using Reels heavily. Fourth, I surveyed followers — they want more behind-the-scenes content. I pivoted strategy: 50% Reels, added 'Meet the Team' series, increased posting frequency to daily.",
                result: "RESULT: Within 6 weeks, engagement recovered to 3.5%. Reels specifically hit 8% engagement. We gained 5K new followers — organic, not paid."
            },
            tip: "Data-driven diagnosis + strategic pivot + consistent execution = social media recovery."
        },
        teacherNote: "Highlight: audit, analysis, research, pivot. SMM harus analytical, bukan cuma creative."
    },
    {
        type: 'int-scenario',
        title: "Scenario: Crisis Management",
        subtitle: "Pertanyaan: 'How do you handle negative viral post?'",
        interviewScenario: {
            question: "A customer's complaint about our product goes viral. How do you respond?",
            starAnswer: {
                situation: "SITUATION: A TikTok video criticizing our product quality gained 500K views overnight. Comments section full of similar complaints.",
                task: "TASK: I need to manage the crisis, protect brand reputation, dan turn situation around.",
                action: "ACTION: First, I acknowledged the issue publicly within 2 hours — 'We hear you and we're investigating.' Second, I DMed the customer offering replacement + apology. Third, I coordinated with product team for official statement. Fourth, I created follow-up content showing improvements made. Fifth, I monitored sentiment closely for 48 hours.",
                result: "RESULT: Customer updated their TikTok praising our response. Followers appreciated our transparency. The crisis became a case study in our customer-first approach. Sentiment recovered to positive within a week."
            },
            tip: "Speed, authenticity, dan follow-through are key in social media crisis management."
        },
        teacherNote: "Crisis management adalah critical SMM skill. Show calm under pressure dan strategic response."
    },
    {
        type: 'comparison',
        title: "SMM Language Upgrade",
        comparison: [
            {
                wrong: "I post content every day and hope people like it.",
                right: "I develop content strategies based on audience insights and performance data."
            },
            {
                wrong: "I reply to comments when I have time.",
                right: "I prioritize community management to build relationships and brand loyalty."
            },
            {
                wrong: "I create whatever looks good.",
                right: "I ensure all content aligns with our brand voice and content pillars."
            }
        ],
        teacherNote: "Professional SMM language: strategic, data-informed, brand-conscious."
    },

    // ==================== PHASE 4: WRAP-UP ====================
    {
        type: 'micro-drill',
        title: "Content Concept Drill",
        subtitle: "Create Campaign Ideas",
        mission: [
            "Create a UGC campaign concept for skincare brand",
            "Design content pillars for B2B SaaS company",
            "Plan crisis response framework for food brand recall"
        ],
        teacherNote: "Drill creative thinking. SMM perlu bisa generate ideas on the spot."
    },
    {
        type: 'recap',
        title: "SMM Interview Essentials",
        recap: [
            { context: "Strategy", sayThis: "Content pillars, audience personas, platform strategy", dontSayThis: "Post random, hope viral" },
            { context: "Analytics", sayThis: "Engagement rate, reach, conversion, ROI", dontSayThis: "Likes, followers, viral" },
            { context: "Community", sayThis: "Two-way conversations, UGC, brand advocacy", dontSayThis: "Broadcast, one-way" },
            { context: "Crisis", sayThis: "Speed, transparency, follow-through", dontSayThis: "Ignore, delete, argue" }
        ]
    },
    {
        type: 'mission',
        title: "Prep for SMM Mock Interview",
        subtitle: "Session 26 Preparation",
        mission: [
            "Audit 3 brand social media accounts — analyze what works and what doesn't",
            "Create sample content calendar untuk fictional brand (1 week)",
            "Siapkan portfolio: screenshots akun yang pernah dikelola dengan metrics",
            "Research latest social media trends dan algorithm updates",
            "Practice menjelaskan social strategy dalam 2 minutes (elevator pitch)"
        ],
        teacherNote: "Persiapkan murid untuk mock interview di session 26. Portfolio dan real examples sangat penting untuk SMM."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Apa bedanya Impressions dan Reach?",
        options: [
            "Sama saja, jumlah orang yang melihat konten",
            "Impressions = total tayangan, Reach = unique users yang melihat",
            "Impressions = paid views, Reach = organic views",
            "Impressions = likes, Reach = comments"
        ],
        correctIndex: 1,
        explanation: "Impressions adalah total jumlah tayangan (bisa satu orang lihat berkali-kali), sementara Reach adalah jumlah unique users yang melihat konten tersebut."
    },
    {
        question: "Apa yang dimaksud dengan Content Pillars?",
        options: [
            "Jadwal posting harian",
            "Tema utama yang konsisten dalam strategi konten",
            "Jumlah followers yang ingin dicapai",
            "Budget untuk iklan sosial media"
        ],
        correctIndex: 1,
        explanation: "Content pillars adalah 3-5 tema utama yang menjadi fondasi strategi konten. Misalnya: education, entertainment, product showcase. Ini membantu menjaga konsistensi brand."
    },
    {
        question: "Response terbaik untuk viral complaint?",
        options: [
            "Ignore sampai reda sendiri",
            "Delete comment dan block user",
            "Quick acknowledgment, investigate, transparent follow-up",
            "Argue dengan facts untuk defend brand"
        ],
        correctIndex: 2,
        explanation: "Speed dan transparency adalah key dalam crisis management: acknowledge quickly, investigate, then follow up dengan concrete actions. Ini shows accountability."
    }
];
