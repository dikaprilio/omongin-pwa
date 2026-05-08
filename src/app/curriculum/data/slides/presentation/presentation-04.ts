import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    {
        type: 'title',
        title: "The Audience Chameleon",
        subtitle: "Adapting Your Presentation for Bosses, Clients & Teams",
        teacherNote: "Start by asking: 'Siapa audiens tersulit yang pernah kamu hadapi?'"
    },
    {
        type: 'pres-mindset',
        title: "The Shift in Focus",
        subtitle: "It's Not About Your Presentation, It's About Their World",
        mindset: {
            before: "I need to tell them everything I've done this week so they know I'm working hard.",
            after: "I need to show them the 2 things that matter to THEIR goals so I don't waste their time.",
            bridgeText: "From 'I' focus to 'THEM' focus"
        },
        teacherNote: "Gunakan analogi Mirror vs Window. Jangan biarkan slide jadi cermin diri kita, tapi jendela buat mereka."
    },
    {
        type: 'pres-impact',
        title: "The WIIFM Principle",
        subtitle: "The Most Important Question in Every Room",
        impact: {
            quote: '"What\'s In It For Me?"',
            author: "The Audience's Internal Radio Station",
            accentColor: "#f97316"
        },
        teacherNote: "Jelaskan bahwa audiens selalu bertanya: 'Apa untungnya buat saya dengerin orang ini ngomong?'"
    },
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "The Executive Audience",
        subtitle: "Target: Bosses, Managers, CEOs"
    },
    {
        type: 'concept',
        title: "Bottom Line Up Front (BLUF)",
        subtitle: "Don't build suspense, build confidence",
        content: [
            "Executives have 0 patience for long stories.",
            "Tell them the RESULT first, then the data.",
            "Be prepared to be interrupted (and be okay with it)."
        ],
        teacherNote: "CEO gak butuh drama. Mereka butuh angka dan keputusan."
    },
    {
        type: 'pres-language',
        title: "Strategic Action Verbs",
        subtitle: "Words that resonate with leadership",
        languagePoints: [
            {
                category: "Efficiency & Growth",
                items: ["Optimize", "Accelerate", "Scale up", "Leverage"],
                note: "Use these to show progress."
            },
            {
                category: "Risk & Control",
                items: ["Mitigate", "Halt", "Stabilize", "Oversee"],
                note: "Use these when handling problems."
            }
        ]
    },
    {
        type: 'micro-drill',
        title: "The CEO Summary",
        subtitle: "Condensing a 10-minute update into 30 seconds",
        content: [
            "Situation: You are 1 week late on a project.",
            "Draft: 'Uh, so we had some issues with the server and the team was sick...'",
            "CEO Version: 'We are 1 week behind schedule due to server issues. I have already scaled the team to catch up by Friday. No extra budget needed.'"
        ],
        teacherNote: "Latih intonasi yang 'Direct' dan 'No Excusess'."
    },
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "The Client Audience",
        subtitle: "Target: Prospective Customers, Clients"
    },
    {
        type: 'comparison',
        title: "Feature vs. Benefit",
        subtitle: "Sell the 'Transformation', not the 'Tool'",
        comparison: [
            { wrong: "Our software has 256-bit encryption.", right: "Your data is 100% safe from hackers." },
            { wrong: "I have 10 years of experience in HR.", right: "I can help you find the right hire in half the time." },
            { wrong: "The meeting will last 2 hours.", right: "We will solve your strategy issues by lunch." }
        ],
        teacherNote: "Feature is what it IS. Benefit is what it DOES for them."
    },
    {
        type: 'pres-technique',
        title: "The Bridge Technique",
        technique: {
            name: "The 'Which Means' Bridge",
            description: "A simple way to turn any boring fact into a powerful benefit.",
            steps: [
                "State the feature or fact.",
                "Say the words 'Which means...'",
                "State the emotional or practical benefit."
            ],
            whyItWorks: "It forces you to connect your work to the client's happiness or profit.",
            icon: "🌉"
        }
    },
    {
        type: 'micro-drill',
        title: "The 'Which Means' Drill",
        subtitle: "Practice connecting the dots",
        content: [
            "Drill 1: 'The car has a 500L trunk... which means...'",
            "Drill 2: 'I speak 3 languages... which means...'",
            "Drill 3: 'This report is only 1 page... which means...'"
        ],
        teacherNote: "Pastikan mereka menyebutkan benefit yang REAL (Comfort, Time, Money, Status)."
    },
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "The Team Audience",
        subtitle: "Target: Colleagues, Technical Peers, Staff"
    },
    {
        type: 'pres-mindset',
        title: "The Culture of 'We'",
        subtitle: "Fostering Collaboration over Authority",
        mindset: {
            before: "I need to tell you what to do to finish this project.",
            after: "We need to align on these steps so we can succeed together.",
            bridgeText: "From 'Commander' to 'Collaborator'"
        },
        teacherNote: "Tim lebih termotivasi kalau mereka merasa dilibatkan, bukan disuruh-suruh."
    },
    {
        type: 'vocabulary',
        title: "Inclusive Language",
        vocabulary: [
            { term: "Align", meaning: "To be in agreement", example: "Are we all aligned on the goal?" },
            { term: "Sync up", meaning: "A quick meeting for updates", example: "Let's sync up for 5 mins." },
            { term: "Bandwidth", meaning: "Capacity to handle work", example: "Do you have the bandwidth for this?" },
            { term: "Buy-in", meaning: "Getting agreement from others", example: "I need your buy-in on this plan." }
        ]
    },
    {
        type: 'simulation',
        title: "The Mid-Project Rally",
        simulation: {
            role: "Project Lead",
            scenario: "The team is tired and there's one week left until a big launch.",
            goal: "Acknowledge the effort, clarify the final steps, and keep the energy high.",
            timeLimit: 60
        },
        teacherNote: "Watch for: 'We' vs 'I', clear instructions, and encouraging tone."
    },
    {
        type: 'full-text',
        title: "The Audience Cheat Sheet",
        subtitle: "Quick Reference for your next talk",
        fullText: "EXECUTIVE: Be brief. Start with results. Focus on Money/Time/Strategy.\n\nCLIENT: Be persuasive. Focus on Benefits. Answer WIIFM.\n\nTEAM: Be clear. Focus on Action Steps. Use 'We' to build trust.",
        teacherNote: "Minta siswa screenshot bagian ini."
    },
    {
        type: 'steps',
        title: "3-Step Analysis Protocol",
        subtitle: "Do this before you open PowerPoint",
        steps: [
            { id: 1, title: "KNOWLEDGE", description: "What do they already know? (Don't explain the basics to experts)." },
            { id: 2, title: "DRIVERS", description: "What keeps them up at night? (Fear, Profit, Efficiency)." },
            { id: 3, title: "GOAL", description: "What is the ONE thing I want them to do after I finish?" }
        ]
    },
    {
        type: 'mission',
        title: "Mission: The chameleon",
        subtitle: "This Week's Challenge",
        mission: [
            "Pick ONE meeting you have this week.",
            "Analyze the audience using the 3-Step Protocol.",
            "Record a 1-minute intro adapting to that specific audience.",
            "Bonus: Use at least 2 Strategic Action Verbs."
        ]
    },
    {
        type: 'recap',
        title: "Topic Summary",
        subtitle: "Key takeaways from Topic 04",
        recap: [
            { context: "Executives", sayThis: "BLUF (Bottom Line Up Front)", dontSayThis: "Long detailed stories first" },
            { context: "Clients", sayThis: "Benefits (Results)", dontSayThis: "Technical features list" },
            { context: "Teams", sayThis: "Inclusive 'We'", dontSayThis: "Commanding 'I'" }
        ]
    },
    {
        type: 'concept',
        title: "Final Thought",
        subtitle: "The definition of an expert speaker",
        content: [
            "An amateur talks about what they know.",
            "A pro talks about what the audience needs.",
            "Be a pro.",
            "See you in Topic 05!"
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What does 'WIIFM' stand for?",
        options: ["What Is It For Me?", "Why Is It Factually Meaningful?", "What's In It For Me?", "Who Is In Favor Mainly?"],
        correctIndex: 2,
        explanation: "WIIFM is the core question every audience asks: 'What's In It For Me?'"
    },
    {
        question: "Which communication style is best for Executives?",
        options: ["Detailed and slow storytelling", "Bottom Line Up Front (BLUF)", "Focusing only on technical features", "Asking them to wait until the end for results"],
        correctIndex: 1,
        explanation: "Executives are busy; they want the results (Bottom Line) immediately."
    },
    {
        question: "How do you turn a 'Feature' into a 'Benefit'?",
        options: ["Explain it more technically", "Ignore the feature and talk about price", "Use the 'Which Means' bridge", "Make it sound more complex"],
        correctIndex: 2,
        explanation: "The 'Which Means' bridge connects a fact to a positive result for the listener."
    },
    {
        question: "When presenting to your team, which word builds more trust?",
        options: ["I", "You", "We", "They"],
        correctIndex: 2,
        explanation: "Using 'We' fosters collaboration and shared ownership of the project."
    },
    {
        question: "In the 3-Step Analysis Protocol, what does 'Knowledge' refer to?",
        options: ["How smart the speaker is", "What the audience already knows about the topic", "How many slides you have", "The technical jargon you use"],
        correctIndex: 1,
        explanation: "Understanding what the audience already knows prevents you from being too basic or too complex."
    }
];
