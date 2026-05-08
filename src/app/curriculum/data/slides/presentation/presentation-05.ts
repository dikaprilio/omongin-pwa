import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    {
        type: 'title',
        title: "The Charisma Check",
        subtitle: "Audit Your Style & Discover Your Authentic Voice",
        teacherNote: "Minta siswa untuk mendeskripsikan gaya bicara mereka dalam 1 kata (e.g. 'Fast', 'Shy', 'Funny')."
    },
    {
        type: 'pres-mindset',
        title: "The Authenticity Trap",
        subtitle: "Authenticity vs. Performance",
        mindset: {
            before: "I have to act like Steve Jobs or a TED speaker to be charismatic.",
            after: "Charisma means being the 'amplified' version of my true self.",
            bridgeText: "Find YOUR baseline, then turn up the volume"
        },
        teacherNote: "Tekankan bahwa 'fake charisma' itu gampang terdeteksi dan bikin audiens gak nyaman."
    },
    {
        type: 'pres-impact',
        title: "The Definition of Charisma",
        subtitle: "It's not about being 'loud'",
        impact: {
            quote: '"Charisma is the ability to influence others through your presence and communication."',
            author: "The ECC Speaking standard",
            accentColor: "#ec4899"
        },
        teacherNote: "Charisma = Presence + Warmth + Power."
    },
    {
        type: 'pres-phase',
        phaseNumber: 1,
        title: "Archetype 1: The Sage",
        subtitle: "The voice of Authority & Credibility"
    },
    {
        type: 'concept',
        title: "Characteristics of The Sage",
        subtitle: "Reliable, Calm, and Trustworthy",
        content: [
            "Voice: Lower pitch, steady pace with pauses.",
            "Body Language: Minimal gestures, 'The steeple' hand position.",
            "Eye Contact: Intense and direct.",
            "Ideal for: Giving bad news, technical reports, senior leadership updates."
        ],
        teacherNote: "Bayangkan Morgan Freeman atau Sri Mulyani. Tenang tapi sangat berwibawa."
    },
    {
        type: 'pres-language',
        title: "Authority Language",
        subtitle: "Words that demand respect",
        languagePoints: [
            {
                category: "Firm Conclusions",
                items: ["I am confident that...", "The data indicates...", "The standard procedure is..."],
                note: "Avoid 'I think' or 'Maybe'."
            },
            {
                category: "Setting Boundaries",
                items: ["We will focus on...", "That is out of scope for today.", "The priority is clear."],
                note: "Use these to control the room."
            }
        ]
    },
    {
        type: 'micro-drill',
        title: "The Sage Drill",
        subtitle: "Practice the 2-second pause",
        content: [
            "Read this: 'Our targets were not met. (Pause 2 sec) However, the solution is already being implemented.'",
            "Focus on: Deep voice, no 'filler' words, no smiling."
        ],
        teacherNote: "Tutor: Beri feedback kalau suara mereka masih terlalu tinggi/ngebut."
    },
    {
        type: 'pres-phase',
        phaseNumber: 2,
        title: "Archetype 2: The Hero",
        subtitle: "The voice of Energy & Inspiration"
    },
    {
        type: 'concept',
        title: "Characteristics of The Hero",
        subtitle: "Passionate, Visionary, and Bold",
        content: [
            "Voice: Varied pitch, faster pace, high volume.",
            "Body Language: Wide gestures, moving around the stage.",
            "Eye Contact: Scanning the whole room, bright eyes.",
            "Ideal for: Sales pitches, starting a project, motivational talks."
        ],
        teacherNote: "Bayangkan Steve Jobs atau motivator. Penuh energi dan passion."
    },
    {
        type: 'pres-language',
        title: "Inspiring Language",
        subtitle: "Words that spark movement",
        languagePoints: [
            {
                category: "Visionary Words",
                items: ["Imagine a world...", "A major breakthrough", "Unprecedented growth", "Transformative"],
                note: "Paint a picture with words."
            },
            {
                category: "Action Commands",
                items: ["Let's win this.", "Don't settle for less.", "The future starts now."],
                note: "Call them to action."
            }
        ]
    },
    {
        type: 'simulation',
        title: "The Hero Pitch",
        simulation: {
            role: "Entrepreneur",
            scenario: "You are pitching a new app that solves a huge problem.",
            goal: "Make the audience FEEL the excitement. Use your hands and your energy.",
            timeLimit: 60
        },
        teacherNote: "Watch for: Smiles, energy level, and 'Big' words."
    },
    {
        type: 'pres-phase',
        phaseNumber: 3,
        title: "Archetype 3: The Connector",
        subtitle: "The voice of Empathy & Friendship"
    },
    {
        type: 'concept',
        title: "Characteristics of The Connector",
        subtitle: "Relatable, Accessible, and Warm",
        content: [
            "Voice: Conversational tone, 'musical' intonation.",
            "Body Language: Open posture, tilting head, smiling.",
            "Eye Contact: Soft, 'eyebrow flash' to show interest.",
            "Ideal for: Networking, building team morale, handling difficult questions."
        ],
        teacherNote: "Bayangkan Ellen DeGeneres atau teman yang jago dengerin curhat. Bikin orang merasa nyaman."
    },
    {
        type: 'pres-technique',
        title: "The Eyebrow Flash",
        technique: {
            name: "The Soft Connect",
            description: "A micro-expression that instantly signals 'I'm a friend' to the audience.",
            steps: [
                "Raise your eyebrows slightly when you first look at someone.",
                "Combine with a gentle smile.",
                "Nod while they are asking a question."
            ],
            whyItWorks: "It releases oxytocin in the brain, lowering the 'stranger danger' defense mechanism.",
            icon: "🤨✨"
        }
    },
    {
        type: 'micro-drill',
        title: "The Connector Drill",
        subtitle: "The 'Me too' Story",
        content: [
            "Scenario: Someone says 'I'm afraid of public speaking.'",
            "Connector Response: 'I know exactly how that feels. I remember my first time...'",
            "Practice: Listen to a 'problem' and respond with empathy first, solution second."
        ],
        teacherNote: "Tutor: Cek apakah mata mereka 'tersenyum' (Duchenne smile)."
    },
    {
        type: 'pres-technique',
        title: "The Volume Knob",
        technique: {
            name: "Style Switching",
            description: "Learning to dial your archetype up or down based on the situation.",
            steps: [
                "Step 1: Identify your NATURAL style (your baseline).",
                "Step 2: Recognize the CONTEXT (Closing a deal? Use Hero. Firing someone? Use Sage).",
                "Step 3: Dial into the required archetype for that specific moment."
            ],
            whyItWorks: "True charisma is being flexible while staying true to your core values.",
            icon: "🎚️"
        }
    },
    {
        type: 'steps',
        title: "Audit Your Charisma",
        subtitle: "Check these 3 areas tonight",
        steps: [
            { id: 1, title: "EYES", description: "Are you looking at people or at the floor/ceiling?" },
            { id: 2, title: "HANDS", description: "Are they locked in your pockets or helping you explain?" },
            { id: 3, title: "FEET", description: "Are you pacing nervously or standing with ground authority?" }
        ]
    },
    {
        type: 'full-text',
        title: "Archetype Summary",
        subtitle: "Which one are you today?",
        fullText: "THE SAGE: Authority. Key: Pauses, Control, Depth.\n\nTHE HERO: Energy. Key: Passion, Movement, Vision.\n\nTHE CONNECTOR: Warmth. Key: Smiles, Empathy, Stories.",
        teacherNote: "Ingatkan: Kita punya ketiga ini di dalam diri kita. Tinggal dilatih mana yang mau dikeluarin."
    },
    {
        type: 'mission',
        title: "Mission: The chameleon",
        subtitle: "This Week's Challenge",
        mission: [
            "Record one 60-second video.",
            "First 20s as The Sage (Calm & Cold).",
            "Next 20s as The Hero (Loud & Fast).",
            "Last 20s as The Connector (Relatable & Warm).",
            "Notice which one feels most 'natural' to you."
        ]
    },
    {
        type: 'recap',
        title: "Topic Summary",
        subtitle: "Key takeaways from Topic 05",
        recap: [
            { context: "The Sage", sayThis: "Firm and direct conclusions", dontSayThis: "Fidgeting or high-pitched voice" },
            { context: "The Hero", sayThis: "Passionate vision/story", dontSayThis: "Standing still with low energy" },
            { context: "The Connector", sayThis: "Empathetic listening/anecdotes", dontSayThis: "Ignoring the audience's emotion" }
        ]
    },
    {
        type: 'concept',
        title: "Final Thought",
        subtitle: "The ultimate charisma secret",
        content: [
            "Charisma is not a personality trait.",
            "It is a set of behaviors you can practice.",
            "You are already enough.",
            "Now go and amplify it!",
            "See you in Phase 2: Structure next week!"
        ]
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "What are the three Speaker Archetypes in the ECC methodology?",
        options: ["The Boss, The Employee, The Client", "The Sage, The Hero, The Connector", "The Talker, The Silent, The Joker", "The Smart, The Loud, The Kind"],
        correctIndex: 1,
        explanation: "The Sage (Authority), The Hero (Energy), and The Connector (Warmth) are the three pillars of charisma."
    },
    {
        question: "Which archetype is best for delivering technical reports or bad news?",
        options: ["The Hero", "The Connector", "The Sage", "The Joker"],
        correctIndex: 2,
        explanation: "The Sage provides the calm authority and credibility needed for serious or complex information."
    },
    {
        question: "What is a characteristic of 'The Hero' body language?",
        options: ["Minimal gestures and still posture", "Wide gestures and moving around the room", "Hands in pockets", "Looking at the floor"],
        correctIndex: 1,
        explanation: "The Hero uses their entire body to project energy and passion."
    },
    {
        question: "What is the purpose of the 'Eyebrow Flash'?",
        options: ["To show you are angry", "To signal 'I am a friend' and build instant warmth", "To look more professional", "To see the audience better"],
        correctIndex: 1,
        explanation: "A slight eyebrow raise is a universal human signal for friendliness and recognition."
    },
    {
        question: "What does 'The Volume Knob' technique refer to?",
        options: ["Turning up the volume of your microphone", "Adjusting your archetype/style based on the situation", "Speaking as loudly as possible", "Playing background music during your talk"],
        correctIndex: 1,
        explanation: "Flexibility—knowing when to be a Sage and when to be a Hero—is the key to effective communication."
    }
];
