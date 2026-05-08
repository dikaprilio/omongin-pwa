import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Social Media Manager",
        subtitle: "Session 26: The Social Strategy Challenge",
        teacherNote: "Full mock interview dengan portfolio review dan live strategy exercise. Simulasikan real SMM hiring process."
    },
    {
        type: 'pres-mindset',
        title: "The SMM Interview Persona",
        subtitle: "Creative Strategist & Data Lover",
        mindset: {
            before: "Interview adalah show portfolio dan jawab pertanyaan.",
            after: "Ini adalah collaborative strategy session — show how I think, create, dan measure.",
            bridgeText: "SMM interviews are as much about process as they are about portfolio."
        },
        teacherNote: "SMM interviews serangkum case exercise dan portfolio walkthrough. Murid harus articulate thinking process."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "SMM Interview Ready?",
        checklist: {
            title: "SMM Ready",
            items: [
                "✅ Portfolio: Screenshots/metrics dari akun yang pernah dikelola",
                "✅ Platform Knowledge: Latest features, algorithm changes, best practices",
                "✅ Strategy Framework: Bisa jelaskan approach dari research sampai measurement",
                "✅ Trend Awareness: Current social trends dan platform updates"
            ]
        },
        teacherNote: "SMM interviews sangat praktikal. Portfolio dan real examples adalah must-have."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: Social Media Manager",
        subtitle: "Company: Wardah Cosmetics (Fictional)",
        mockInterview: {
            jobTitle: "Social Media Manager",
            company: "Wardah Cosmetics",
            context: "Kamu apply untuk SMM posisi di beauty brand lokal yang scale up. Target: grow Instagram dari 500K to 1M followers dalam 12 months dengan 5%+ engagement. Ini interview dengan Brand Manager dan Creative Director.",
            questions: [
                "1. Walk us through your portfolio. What's your proudest social media achievement?",
                "2. How do you stay on top of social media trends?",
                "3. Design a campaign for our new skincare line launch.",
                "4. How do you balance creativity dengan data-driven decisions?",
                "5. A post performs poorly. What do you do?"
            ]
        },
        teacherNote: "Jadilah interviewer yang test both creative dan strategic thinking. SMM harus bisa both."
    },
    {
        type: 'comparison',
        title: "SMM Interview Quality",
        comparison: [
            {
                wrong: "I just create content that I think looks good and post it.",
                right: "I start with audience research, develop content pillars, create based on data insights, and continuously optimize based on performance."
            },
            {
                wrong: "If a post flops, I delete it and pretend it never happened.",
                right: "I analyze why it underperformed — timing? format? messaging? — and apply those learnings to future content."
            }
        ],
        teacherNote: "SMM mencari: strategic process, learning mindset, dan humility. Bukan cuma 'creative genius'."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Portfolio Walkthrough",
        subtitle: "Experience & Achievements (10 Minutes)",
        simulation: {
            role: "SMM Candidate untuk Wardah",
            scenario: "Tutor: 'Show me your portfolio. Walk me through a campaign you're proud of.' Murid present portfolio dengan metrics dan learnings.",
            goal: "Show real results, articulate strategy, demonstrate growth mindset. Use specific numbers.",
            timeLimit: 600
        },
        teacherNote: "Portfolio review adalah core dari SMM interview. Cari: real results, strategic thinking, dan self-awareness."
    },
    {
        type: 'simulation',
        title: "Round 2: Live Campaign Design",
        subtitle: "Creative Challenge (12 Minutes)",
        simulation: {
            role: "SMM untuk Wardah",
            scenario: "Tutor: 'Design a launch campaign for our new vitamin C serum targeting Gen Z. Budget: Rp100M, timeline: 1 month.' Present your concept.",
            goal: "Show creative concept, platform strategy, influencer plan, content ideas, dan measurement framework.",
            timeLimit: 720
        },
        teacherNote: "Live creative exercise. Cari: creativity, practicality, platform knowledge, dan budget awareness."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Campaign Design",
        interviewScenario: {
            question: "Design vitamin C serum launch campaign for Gen Z, Rp100M budget, 1 month.",
            starAnswer: {
                situation: "CAMPAIGN BRIEF: Launch Wardah Vitamin C Serum untuk Gen Z (18-25)",
                task: "STRATEGY OVERVIEW",
                action: "PHASE 1 (Week 1): Teaser — mysterious 'What's your glow secret?' campaign. Micro-influencers (50 x Rp1M) post glow transformation. PHASE 2 (Week 2-3): Launch — '7 Days to Glow' challenge dengan 20 mid-tier beauty influencers (20 x Rp2M). UGC content push. Paid ads Rp30M. PHASE 3 (Week 4): Sustained — user testimonials, before/after real users, shoppable content. KPIs: 10M impressions, 50K engagement, 5% engagement rate, Rp500M sales attributed.",
                result: "SUCCESS METRICS: Brand awareness (reach), engagement (rate), conversions (sales), UGC volume. Content mix: 40% Reels, 30% carousel, 30% static."
            },
            tip: "Great campaign design: clear phases, budget allocation, platform mix, influencer tiers, dan measurable KPIs."
        },
        teacherNote: "Review murid's campaign vs model. Highlight: structure, creativity, measurability."
    },
    {
        type: 'simulation',
        title: "Round 3: Data & Optimization",
        subtitle: "Analytics Challenge (8 Minutes)",
        simulation: {
            role: "SMM Candidate",
            scenario: "Tutor: 'Your Reels get 3x engagement tapi static posts drive more sales. Your boss wants more Reels. What do you recommend?' Uji balancing act.",
            goal: "Show understanding of full funnel: awareness (Reels) vs conversion (static). Recommend balanced approach dengan clear rationale.",
            timeLimit: 480
        },
        teacherNote: "Real SMM dilemma. Cari: business understanding, data interpretation, dan persuasive communication."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "SMM Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "🎨 **Creativity**: Fresh ideas, on-trend, visually aware (1-5)",
            "📊 **Strategy**: Clear objectives, target audience, platform selection (1-5)",
            "🔢 **Analytics**: Data interpretation, KPI setting, optimization mindset (1-5)",
            "💬 **Communication**: Articulate ideas, persuasive, good listener (1-5)",
            "📱 **Platform Expertise**: Deep knowledge of features, best practices, trends (1-5)"
        ],
        teacherNote: "Beri score dan feedback. SMM adalah blend of art and science — both matter."
    },
    {
        type: 'recap',
        title: "SMM Interview Success Factors",
        recap: [
            { context: "Portfolio", sayThis: "Real results, metrics, learnings", dontSayThis: "Just pretty posts" },
            { context: "Strategy", sayThis: "Research-based, platform-appropriate, measurable", dontSayThis: "Random creative ideas" },
            { context: "Data", sayThis: "KPI-driven, optimize based on insights", dontSayThis: "Ignore data, trust gut only" },
            { context: "Trends", sayThis: "Current, authentic adaptation", dontSayThis: "Forced, late to trends" }
        ]
    },
    {
        type: 'mission',
        title: "Grow Your Social Media Career",
        subtitle: "Next Steps",
        mission: [
            "📱 Build portfolio: Manage pro bono untuk UMKM untuk dapat real results",
            "📚 Learn: Social media marketing certifications (Meta, HubSpot)",
            "🔍 Analyze: Weekly audit competitor brands dan dokumentasikan insights",
            "🎨 Create: Practice content creation — copywriting, basic design, video editing",
            "📊 Master: Deep-dive analytics tools (Meta Business Suite, Google Analytics, etc.)"
        ],
        teacherNote: "SMM adalah field yang evolve constantly. Dorong murid untuk continuous learning dan portfolio building."
    },
    {
        type: 'title',
        title: "Social Media Manager: Ready to Engage! 📱",
        subtitle: "You're Equipped for the Social Challenge",
        teacherNote: "Apresiasi effort murid. SMM adalah role yang fun dan impactful. Next: Content Writer!"
    }
];

export const quiz: QuizQuestion[] = [];
