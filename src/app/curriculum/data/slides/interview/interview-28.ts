import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Content Writer",
        subtitle: "Session 28: The Writing Challenge",
        teacherNote: "Full mock interview dengan portfolio review dan live writing test. Simulasikan real content writer hiring process."
    },
    {
        type: 'pres-mindset',
        title: "The Writer Interview Persona",
        subtitle: "Craft + Strategy + Professionalism",
        mindset: {
            before: "Interview adalah bawa portfolio dan jawab pertanyaan.",
            after: "Ini adalah demonstration of craft — show process, adaptability, dan strategic thinking.",
            bridgeText: "Great writing interviews are collaborative, not interrogative."
        },
        teacherNote: "Writer interviews serangkum live test. Murid harus comfortable writing under pressure."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Writer Interview Ready?",
        checklist: {
            title: "Writer Ready",
            items: [
                "✅ Portfolio: Curated selection of best work, various formats",
                "✅ Writing Samples: Ready to explain strategy behind each piece",
                "✅ SEO Knowledge: Basic understanding of on-page optimization",
                "✅ Adaptability: Bisa switch tones untuk different audiences"
            ]
        },
        teacherNote: "Writer interviews sangat portfolio-focused. Quality of work speaks loudest."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: Content Writer",
        subtitle: "Company: Traveloka (Fictional)",
        mockInterview: {
            jobTitle: "Content Writer",
            company: "Traveloka",
            context: "Kamu apply untuk content writer posisi di travel tech company. Scope: blog articles, destination guides, email campaigns, app copy. Target: engaging content that drives bookings. Ini interview dengan Content Manager dan SEO Specialist.",
            questions: [
                "1. Walk us through your portfolio. What's the strategy behind your favorite piece?",
                "2. How do you approach keyword research for a new topic?",
                "3. Write 3 headline options for: Hidden beaches in Lombok",
                "4. How do you handle feedback when an editor rewrites your work?",
                "5. Describe your writing process from brief to publication."
            ]
        },
        teacherNote: "Jadilah interviewer yang test both craft and professionalism. Writers need thick skin dan collaborative attitude."
    },
    {
        type: 'comparison',
        title: "Writer Interview Quality",
        comparison: [
            {
                wrong: "I just write what feels right in the moment.",
                right: "I start with audience research, create an outline, write the first draft, then iterate based on feedback and SEO requirements."
            },
            {
                wrong: "I don't like it when editors change my work.",
                right: "I view editing as collaboration. The goal is the best possible content, not protecting my ego."
            }
        ],
        teacherNote: "Writer mencari: process-oriented, collaborative, dan growth mindset. Bukan 'tortured artist'."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Portfolio Walkthrough",
        subtitle: "Experience & Strategy (10 Minutes)",
        simulation: {
            role: "Content Writer Candidate untuk Traveloka",
            scenario: "Tutor: 'Show me your portfolio. Tell me about the strategy behind one piece.' Murid present dan explain thinking process.",
            goal: "Articulate: target audience, objectives, research process, writing choices, dan results.",
            timeLimit: 600
        },
        teacherNote: "Portfolio review adalah core. Cari: strategic thinking behind the words, not just pretty writing."
    },
    {
        type: 'simulation',
        title: "Round 2: Live Writing Test",
        subtitle: "Headlines & Microcopy (10 Minutes)",
        simulation: {
            role: "Content Writer untuk Traveloka",
            scenario: "Tutor: 'Write 3 headlines untuk Hidden Beaches in Lombok. Then write app copy untuk booking confirmation screen. 10 minutes.' Uji speed dan versatility.",
            goal: "Show range: long-form thinking (headlines) dan microcopy precision (app copy).",
            timeLimit: 600
        },
        teacherNote: "Live writing test adalah standard. Cari: speed, creativity, dan attention to context."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Live Writing Test",
        interviewScenario: {
            question: "Write 3 headlines untuk Hidden Beaches in Lombok dan app copy untuk booking confirmation.",
            starAnswer: {
                situation: "LIVE WRITING CHALLENGE",
                task: "DEMONSTRATE RANGE AND CREATIVITY",
                action: "HEADLINES: (1) 7 Secret Beaches in Lombok Only Locals Know About — (2) Skip the Crowds: Your Guide to Lombok's Hidden Shores — (3) Lombok Beyond the Tourist Trail: Beaches Worth the Extra Mile. APP COPY: Booking Confirmed! Your adventure awaits. Check your email for details and get ready to explore. Need help? We're here 24/7.",
                result: "ASSESSMENT: Headlines show variety (curiosity, benefit-driven, experiential). App copy is concise, friendly, dan actionable."
            },
            tip: "Versatility adalah key. Great writers can switch between long-form and microcopy seamlessly."
        },
        teacherNote: "Review murid's output vs model. Highlight: range, creativity, dan appropriateness untuk context."
    },
    {
        type: 'simulation',
        title: "Round 3: Feedback Scenario",
        subtitle: "Professionalism Test (5 Minutes)",
        simulation: {
            role: "Content Writer Candidate",
            scenario: "Tutor: 'Your editor just rewrote 80% of your article. How do you respond?' Uji emotional maturity.",
            goal: "Show professionalism: ask for feedback, understand reasons, learn, improve. Not defensive.",
            timeLimit: 300
        },
        teacherNote: "Writing is collaborative. Editors are partners, not enemies. Cari: humility dan growth mindset."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "Content Writer Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "✍️ **Writing Quality**: Clarity, engagement, grammar, appropriate tone (1-5)",
            "🎯 **Strategy**: Audience awareness, objective-driven, CTA effectiveness (1-5)",
            "🔍 **SEO Understanding**: Keyword integration, meta elements, search intent (1-5)",
            "⚡ **Speed**: Writing under pressure, meeting deadlines (1-5)",
            "🤝 **Collaboration**: Receptiveness to feedback, professional attitude (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Writing adalah craft yang bisa diimprove, tapi attitude adalah fundamental."
    },
    {
        type: 'recap',
        title: "Content Writer Success Factors",
        recap: [
            { context: "Portfolio", sayThis: "Quality pieces, strategic thinking, measurable impact", dontSayThis: "Just volume, no context" },
            { context: "Craft", sayThis: "Clear, engaging, appropriate for audience", dontSayThis: "Wordy, unclear, one-tone-fits-all" },
            { context: "Speed", sayThis: "Can deliver under pressure, meets deadlines", dontSayThis: "Perfectionist to the point of missing deadlines" },
            { context: "Attitude", sayThis: "Open to feedback, collaborative, growth mindset", dontSayThis: "Defensive, precious about work" }
        ]
    },
    {
        type: 'mission',
        title: "Continue Your Writing Journey",
        subtitle: "Keep Improving",
        mission: [
            "Write daily: Journal, blog, atau LinkedIn posts untuk practice consistency",
            "Read widely: Analyze great writing across industries dan formats",
            "Get feedback: Join writing groups atau minta critique dari peers",
            "Study SEO: Google Search Console, keyword research tools, content optimization",
            "Build niche expertise: Specialize dalam 1-2 industries untuk higher value"
        ],
        teacherNote: "Writing adalah lifelong craft. Dorong murid untuk continuous practice dan learning."
    },
    {
        type: 'title',
        title: "Content Writer: Ready to Create! ✍️",
        subtitle: "Words Are Your Superpower",
        teacherNote: "Apresiasi effort murid. Writing adalah foundational skill yang transferable ke banyak karir. Next: Graphic Designer!"
    }
];

export const quiz: QuizQuestion[] = [];
