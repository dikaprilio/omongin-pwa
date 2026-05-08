import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: HOOK ====================
    {
        type: 'title',
        title: "Mock Interview: Graphic Designer",
        subtitle: "Session 30: The Portfolio Challenge",
        teacherNote: "Final mock interview untuk Graphic Designer. Full portfolio review dan live design critique. Simulasikan real design hiring process."
    },
    {
        type: 'pres-mindset',
        title: "The Designer Interview Persona",
        subtitle: "Creative Professional",
        mindset: {
            before: "Portfolio saya yang berbicara. Saya tinggal tunjukkan hasil.",
            after: "Interview adalah collaborative conversation tentang problem-solving melalui design.",
            bridgeText: "Great design interviews are dialogues, not monologues."
        },
        teacherNote: "Design interviews sangat conversational. Chemistry dan communication skills adalah sama pentingnya dengan portfolio."
    },
    {
        type: 'pres-checklist',
        title: "Pre-Mock Checklist",
        subtitle: "Designer Interview Ready?",
        checklist: {
            title: "Designer Ready",
            items: [
                "✅ Portfolio: 6-8 projects dengan case studies",
                "✅ Presentation: Bisa explain process dalam 3-5 minutes per project",
                "✅ Design Rationale: Ready to articulate decisions dengan principles",
                "✅ Attitude: Open, collaborative, ego in check"
            ]
        },
        teacherNote: "Designer interviews adalah balance antara showing work dan showing personality."
    },

    // ==================== PHASE 2: MOCK SETUP ====================
    {
        type: 'int-mock',
        title: "Role Card: Graphic Designer",
        subtitle: "Company: Gojek Creative Team (Fictional)",
        mockInterview: {
            jobTitle: "Graphic Designer",
            company: "Gojek",
            context: "Kamu apply untuk designer posisi di tech company creative team. Scope: marketing materials, social media content, event graphics, internal communications. Fast-paced environment. Ini interview dengan Creative Director dan Senior Designer.",
            questions: [
                "1. Walk us through your portfolio. Pick one project and tell us the story.",
                "2. How do you stay current with design trends?",
                "3. Critique one of our recent campaigns. What would you do differently?",
                "4. Describe your ideal design process from brief to delivery.",
                "5. How do you handle creative differences with stakeholders?"
            ]
        },
        teacherNote: "Jadilah interviewer yang test both craft dan cultural fit. Gojek creative team values speed dan collaboration."
    },
    {
        type: 'comparison',
        title: "Designer Interview Quality",
        comparison: [
            {
                wrong: "Here's my work. I think it looks good.",
                right: "For this project, the challenge was X. I researched Y, explored Z directions, and landed on this solution because it achieved the objective of..."
            },
            {
                wrong: "I don't really follow trends. I have my own style.",
                right: "I balance trend awareness with timeless principles. I follow Design Week, Behance, and design podcasts to stay informed."
            }
        ],
        teacherNote: "Design interviews mencari: process thinking, curiosity, dan collaborative attitude."
    },

    // ==================== PHASE 3: LIVE SIMULATIONS ====================
    {
        type: 'simulation',
        title: "Round 1: Portfolio Presentation",
        subtitle: "Show Your Best (12 Minutes)",
        simulation: {
            role: "Graphic Designer Candidate untuk Gojek",
            scenario: "Tutor: 'Walk us through your portfolio. Pick your strongest piece.' Murid present 1-2 projects dengan story arc.",
            goal: "Tell compelling story: problem → research → exploration → solution → results. Show process, not just pixels.",
            timeLimit: 720
        },
        teacherNote: "Portfolio presentation adalah make-or-break. Cari: storytelling, strategic thinking, dan self-awareness."
    },
    {
        type: 'simulation',
        title: "Round 2: Live Critique",
        subtitle: "Design Thinking Under Pressure (8 Minutes)",
        simulation: {
            role: "Graphic Designer Candidate",
            scenario: "Tutor: 'Here's a flyer we recently did. Critique it — what works, what doesn't, what would you change?' Uji critical thinking dan diplomacy.",
            goal: "Show analytical skills: identify strengths, articulate weaknesses dengan tact, propose improvements.",
            timeLimit: 480
        },
        teacherNote: "Live critique test confidence dan diplomacy. Cari: honest analysis tanpa being destructive."
    },
    {
        type: 'int-scenario',
        title: "Model Answer: Design Critique",
        interviewScenario: {
            question: "Critique this flyer design.",
            starAnswer: {
                situation: "CRITIQUE CHALLENGE",
                task: "BALANCED ANALYSIS",
                action: "WHAT WORKS: The color palette is on-brand and eye-catching. The main message is clear. WHAT COULD IMPROVE: The hierarchy could be stronger — my eye doesn't know where to go first. There's a lot of text competing for attention. The CTA could be more prominent. WHAT I'D TRY: Increase contrast on the headline, group related information tighter, use bullet points for readability, and make the CTA button larger with more white space around it.",
                result: "APPROACH: Start positive, be specific about improvements, offer solutions not just problems, stay constructive."
            },
            tip: "Good critique: specific, balanced, solution-oriented, dan respectful."
        },
        teacherNote: "Review murid's critique vs model. Highlight: diplomacy, specificity, dan constructiveness."
    },
    {
        type: 'simulation',
        title: "Round 3: Process & Collaboration",
        subtitle: "Working Style (5 Minutes)",
        simulation: {
            role: "Graphic Designer Candidate",
            scenario: "Tutor: 'Your PM wants a design by EOD but you know quality will suffer. What do you do?' Uji pragmatism dan communication.",
            goal: "Show collaborative problem-solving: negotiate scope, propose alternatives, communicate trade-offs.",
            timeLimit: 300
        },
        teacherNote: "Real-world scenario. Cari: pragmatism, communication, dan solution orientation."
    },

    // ==================== PHASE 4: EVALUATION ====================
    {
        type: 'concept',
        title: "Graphic Designer Assessment Rubric",
        subtitle: "Your Performance Today",
        content: [
            "🎨 **Visual Craft**: Quality of work, principles application, typography, color (1-5)",
            "🧠 **Strategic Thinking**: Problem-solving, audience awareness, objective-driven (1-5)",
            "💬 **Communication**: Articulates rationale, listens, presents clearly (1-5)",
            "⚡ **Speed/Adaptability**: Works under pressure, handles feedback, iterates (1-5)",
            "🤝 **Collaboration**: Attitude, ego management, team fit (1-5)"
        ],
        teacherNote: "Beri score dan feedback. Design adalah team sport — collaboration skills adalah essential."
    },
    {
        type: 'recap',
        title: "Graphic Designer Success Factors",
        recap: [
            { context: "Portfolio", sayThis: "Quality over quantity, show process", dontSayThis: "Volume without story" },
            { context: "Critique", sayThis: "Specific, balanced, constructive", dontSayThis: "Vague, destructive, personal" },
            { context: "Process", sayThis: "Structured, research-based, iterative", dontSayThis: "Random, purely intuitive" },
            { context: "Attitude", sayThis: "Collaborative, humble, growth mindset", dontSayThis: "Defensive, precious, stubborn" }
        ]
    },
    {
        type: 'mission',
        title: "Launch Your Design Career",
        subtitle: "Final Action Items",
        mission: [
            "Polish portfolio: Get feedback dari 2-3 designers senior",
            "Practice presenting: Record yourself, refine story flow",
            "Stay current: Follow design blogs, Dribbble, Behance",
            "Build network: Join design communities, attend events",
            "Keep creating: Personal projects show passion dan initiative"
        ],
        teacherNote: "Final encouragement. Design adalah journey — dorong murid untuk terus berkembang."
    },
    {
        type: 'title',
        title: "Graphic Designer: Ready to Create! 🎨",
        subtitle: "Design Your Future",
        teacherNote: "Congratulations! Murid telah menyelesaikan interview preparation untuk 9 career tracks. Review key learnings dan encourage continuous practice."
    }
];

export const quiz: QuizQuestion[] = [];
