import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Presentation Basics",
        subtitle: "Signposting and Structuring Your Talk",
        teacherNote: "Goal: Presentasi yang terstruktur dan mudah diikuti, tidak berbelit-belit.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The Rambling Problem",
        subtitle: "Presentasi yang membingungkan audience.",
        content: [
            "Speaker lompat-lompat tanpa struktur yang jelas.",
            "Audience kehilangan jejak: 'Ini ngomongin apa sekarang?'",
            "Tidak ada signal kapan mulai/berakhir/beralih.",
            "Hasilnya: Pesan tidak tersampaikan, audience frustrasi."
        ],
        teacherNote: "Tanya: 'Pernahkah Anda bingung di presentasi karena speaker tidak jelas?'"
    },

    // SLIDE 3: THE STRUCTURE
    {
        type: 'concept',
        title: "The Classic Structure",
        subtitle: "Tell them what you're going to tell them...",
        content: [
            "Opening: Hook + Preview apa yang akan dibahas.",
            "Body: 3 main points (jangan terlalu banyak!)",
            "Transitions: Clear signposting antar section.",
            "Closing: Summary + Call to action/Takeaway."
        ],
        teacherNote: "Rule of 3: Otak manusia mudah mengingat 3 poin. Lebih dari itu = cognitive overload."
    },

    // SLIDE 4: SIGNPOSTING PHRASES
    {
        type: 'vocabulary',
        title: "Opening Phrases",
        subtitle: "Mulai dengan kuat dan jelas.",
        vocabulary: [
            { term: "Today, I'll be talking about...", meaning: "State topic", example: "Today, I'll be talking about our Q3 sales performance." },
            { term: "The goal of this presentation is...", meaning: "State purpose", example: "The goal is to propose a new marketing strategy." },
            { term: "Here's what we'll cover...", meaning: "Preview agenda", example: "Here's what we'll cover: market analysis, challenges, and recommendations." },
            { term: "Let's get started.", meaning: "Transition to content", example: "Let's get started with the background." },
            { term: "Feel free to interrupt with questions.", meaning: "Invite interaction", example: "Feel free to interrupt if you have questions." }
        ]
    },

    // SLIDE 5: TRANSITIONS
    {
        type: 'vocabulary',
        title: "Transition Phrases",
        subtitle: "Pandu audience melewati presentasi Anda.",
        vocabulary: [
            { term: "Let's move on to...", meaning: "Pindah section", example: "Let's move on to the next point." },
            { term: "Now, let's look at...", meaning: "Introduce new topic", example: "Now, let's look at the data." },
            { term: "Turning to...", meaning: "Shift focus", example: "Turning to the financial implications..." },
            { term: "This leads us to...", meaning: "Connect to next", example: "This leads us to our recommendations." },
            { term: "Before we continue...", meaning: "Pause/checkpoint", example: "Before we continue, any questions so far?" },
            { term: "Let's dig deeper into...", meaning: "Detail lebih", example: "Let's dig deeper into this issue." }
        ]
    },

    // SLIDE 6: EMPHASIZING
    {
        type: 'vocabulary',
        title: "Emphasizing Key Points",
        subtitle: "Buat poin penting menonjol.",
        vocabulary: [
            { term: "This is important because...", meaning: "Highlight significance", example: "This is important because it affects our budget." },
            { term: "The key takeaway here is...", meaning: "Main message", example: "The key takeaway is that we need to act now." },
            { term: "What this means is...", meaning: "Explain implication", example: "What this means is we'll need additional resources." },
            { term: "I can't stress this enough...", meaning: "Strong emphasis", example: "I can't stress this enough: deadlines are non-negotiable." },
            { term: "Remember that...", meaning: "Reinforce", example: "Remember that customer satisfaction is our priority." },
            { term: "The bottom line is...", meaning: "Final conclusion", example: "The bottom line is we need to change our approach." }
        ]
    },

    // SLIDE 7: REFERRING TO VISUALS
    {
        type: 'vocabulary',
        title: "Referring to Visuals",
        subtitle: "Guide audience attention.",
        vocabulary: [
            { term: "As you can see here...", meaning: "Point to visual", example: "As you can see here, sales have doubled." },
            { term: "This chart shows...", meaning: "Explain graph", example: "This chart shows the trend over 5 years." },
            { term: "Take a look at this...", meaning: "Direct attention", example: "Take a look at this comparison." },
            { term: "The figures clearly indicate...", meaning: "Interpret data", example: "The figures clearly indicate growth potential." },
            { term: "If you look at the red line...", meaning: "Specific detail", example: "If you look at the red line, that's our target." },
            { term: "This image illustrates...", meaning: "Explain image", example: "This image illustrates our new process." }
        ]
    },

    // SLIDE 8: HANDLING QUESTIONS
    {
        type: 'vocabulary',
        title: "Handling Questions",
        subtitle: "Q&A dengan confidence.",
        vocabulary: [
            { term: "That's a great question.", meaning: "Acknowledge (stalling time)", example: "That's a great question. Let me think about that." },
            { term: "I'm glad you asked.", meaning: "Positive response", example: "I'm glad you asked - this is crucial to understand." },
            { term: "I'll get to that in a moment.", meaning: "Defer question", example: "I'll get to that in a moment when we discuss pricing." },
            { term: "Let me check and get back to you.", meaning: "When unsure", example: "I don't have that figure now. Let me check and get back to you." },
            { term: "Does that answer your question?", meaning: "Confirm understanding", example: "Does that answer your question, or should I clarify further?" }
        ]
    },

    // SLIDE 9: CLOSING PHRASES
    {
        type: 'vocabulary',
        title: "Closing Phrases",
        subtitle: "Akhiri dengan impact.",
        vocabulary: [
            { term: "To summarize...", meaning: "Recap main points", example: "To summarize, we've covered three key areas." },
            { term: "In conclusion...", meaning: "Final statement", example: "In conclusion, this strategy will drive growth." },
            { term: "Let's recap the main points.", meaning: "Review", example: "Let's recap: first, market opportunity..." },
            { term: "The key message is...", meaning: "Final takeaway", example: "The key message is that we're ready to launch." },
            { term: "Thank you for your attention.", meaning: "Gratitude", example: "Thank you for your attention. I'm happy to take questions." },
            { term: "Let's open the floor for questions.", meaning: "Start Q&A", example: "Let's open the floor for questions." }
        ]
    },

    // SLIDE 10: STRUCTURE FORMULA
    {
        type: 'formula',
        title: "The 10-20-30 Rule",
        subtitle: "Guy Kawasaki's presentation formula.",
        formula: "10 slides + 20 minutes + 30-point font minimum",
        vocabulary: [
            { term: "10 Slides", meaning: "Batasi jumlah slide", example: "Force yourself to be concise and focused." },
            { term: "20 Minutes", meaning: "Durasi ideal", example: "Leave time for Q&A and discussion." },
            { term: "30-Point Font", meaning: "Minimal font size", example: "Forces you to use fewer words per slide." },
            { term: "Bonus", meaning: "Images over text", example: "Use visuals. People remember images better than text." }
        ],
        teacherNote: "Ini guideline, bukan aturan keras. Tapi principles-nya solid: concise, visual, time-managed."
    },

    // SLIDE 11: COMMON MISTAKES
    {
        type: 'comparison',
        title: "Common Presentation Mistakes",
        subtitle: "Hindari kesalahan ini.",
        comparison: [
            { wrong: "Reading directly from slides", right: "Slides are visual aids, not script" },
            { wrong: "Too much text on slides", right: "Bullet points, keywords only" },
            { wrong: "No clear structure/signposting", right: "Clear transitions and preview" },
            { wrong: "Going over time", right: "Respect the audience's time" },
            { wrong: "No eye contact/engagement", right: "Connect with audience" }
        ],
        teacherNote: "Kesalahan paling umum: reading slides. Audience bisa baca sendiri!"
    },

    // SLIDE 12: CONFIDENCE BOOSTERS
    {
        type: 'vocabulary',
        title: "Confidence Phrases",
        subtitle: "Terbantu saat nervous.",
        vocabulary: [
            { term: "I strongly believe that...", meaning: "Show conviction", example: "I strongly believe this is the right approach." },
            { term: "The data clearly shows...", meaning: "Base on evidence", example: "The data clearly shows positive trends." },
            { term: "We're confident that...", meaning: "Team confidence", example: "We're confident this solution will work." },
            { term: "Based on our research...", meaning: "Ground arguments", example: "Based on our research, customers prefer..." },
            { term: "I'm convinced that...", meaning: "Personal conviction", example: "I'm convinced this investment will pay off." }
        ],
        teacherNote: "Frasa ini membantu Anda terdengar lebih confident, bahkan saat nervous."
    },

    // SLIDE 13: HOOK TECHNIQUES - NEW
    {
        type: 'vocabulary',
        title: "Hook Techniques for Opening",
        subtitle: "Grab attention from the first 10 seconds.",
        vocabulary: [
            { term: "The Story Hook", meaning: "Start with a personal story", example: "Three years ago, I stood exactly where you are now..." },
            { term: "The Question Hook", meaning: "Ask a thought-provoking question", example: "What if I told you we could double our efficiency overnight?" },
            { term: "The Statistic Hook", meaning: "Open with a surprising number", example: "80% of projects fail due to poor communication..." },
            { term: "The Quote Hook", meaning: "Use a relevant quote", example: "As Steve Jobs once said, 'Innovation distinguishes...'" },
            { term: "The Contrast Hook", meaning: "Present before/after or then/now", example: "In 2019, we had 10 customers. Today, we have 10,000." },
            { term: "The Prop Hook", meaning: "Show a physical object or visual", example: "This small device [holds up] will revolutionize..." }
        ],
        teacherNote: "The first 10 seconds determine if audience will pay attention. Practice your hook!"
    },

    // SLIDE 14: BODY LANGUAGE - NEW
    {
        type: 'concept',
        title: "Body Language Tips",
        subtitle: "Your body speaks louder than your words.",
        content: [
            "Stand tall: Good posture projects confidence and authority.",
            "Eye contact: Look at different sections of the audience (3-5 seconds each).",
            "Hand gestures: Use open palms to appear trustworthy, avoid crossing arms.",
            "Movement: Purposeful movement keeps energy up, but avoid pacing nervously.",
            "Smile: A genuine smile creates connection and reduces tension.",
            "Mirror your content: Show enthusiasm when discussing exciting points."
        ],
        teacherNote: "Record yourself presenting. Notice what your hands do when you're nervous!"
    },

    // SLIDE 15: MANAGING NERVOUSNESS - NEW
    {
        type: 'concept',
        title: "Managing Nervousness",
        subtitle: "Turn anxiety into positive energy.",
        content: [
            "Prepare thoroughly: Know your material inside out.",
            "Power posing: Stand in a confident pose for 2 minutes before presenting.",
            "Deep breathing: 4 counts in, hold, out - calms your nervous system.",
            "Reframe anxiety: 'I'm excited' instead of 'I'm nervous'.",
            "Connect with friendly faces: Find 2-3 supportive people in the audience.",
            "Remember: The audience wants you to succeed, not fail."
        ],
        teacherNote: "Nervousness is energy. Channel it into enthusiasm rather than suppressing it."
    },

    // SLIDE 16: SLIDE DESIGN - NEW
    {
        type: 'comparison',
        title: "Slide Design Principles",
        subtitle: "Design slides that support, not distract.",
        comparison: [
            { wrong: "Wall of text (paragraphs)", right: "6 words per line, 6 lines max" },
            { wrong: "Cluttered with decorations", right: "Ample white space, clean layout" },
            { wrong: "Inconsistent fonts/colors", right: "2 fonts max, consistent palette" },
            { wrong: "Low contrast text", right: "High contrast for readability" },
            { wrong: "Tiny charts and graphs", right: "One main visual per slide" },
            { wrong: "Reading every word", right: "Keywords that prompt your speaking" }
        ],
        teacherNote: "Slides are for the audience, not your speaker notes. Less is more!"
    },

    // SLIDE 17: PRACTICE TECHNIQUES - NEW
    {
        type: 'micro-drill',
        title: "Practice Techniques",
        subtitle: "Rehearse effectively for maximum impact.",
        mission: [
            "1. Record yourself - watch for filler words (um, uh, like)",
            "2. Practice with a timer - stick to your time limit",
            "3. Rehearse in front of a mirror - check body language",
            "4. Run through with a friend - get feedback",
            "5. Practice the first 2 minutes until perfect - builds momentum",
            "6. Do a tech check - test slides, microphone, remote"
        ],
        teacherNote: "Never practice until you get it right. Practice until you can't get it wrong."
    },

    // SLIDE 18: AUDIENCE ENGAGEMENT - NEW
    {
        type: 'vocabulary',
        title: "Audience Engagement Strategies",
        subtitle: "Keep your audience active and interested.",
        vocabulary: [
            { term: "Raise your hand if...", meaning: "Quick interactive poll", example: "Raise your hand if you've ever experienced this problem." },
            { term: "Turn to your neighbor...", meaning: "Pair discussion", example: "Turn to your neighbor and share one challenge." },
            { term: "By a show of hands...", meaning: "Gauge experience level", example: "By a show of hands, who has used this tool before?" },
            { term: "Imagine this scenario...", meaning: "Create mental picture", example: "Imagine you're presenting to the board tomorrow..." },
            { term: "I'd love to hear your thoughts...", meaning: "Invite participation", example: "I'd love to hear your thoughts on this approach." },
            { term: "Let's do a quick exercise...", meaning: "Active learning moment", example: "Let's do a quick exercise - write down your main takeaway." }
        ],
        teacherNote: "Audience attention drops after 10 minutes. Plan engagement points throughout."
    },

    // SLIDE 19: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Practice These Openings",
        subtitle: "Ucapkan dengan lancar dan percaya diri.",
        mission: [
            "1. Open a presentation about quarterly results",
            "2. Transition from introduction to first main point",
            "3. Emphasize a critical point",
            "4. Refer to a chart/data",
            "5. Close and open for Q&A",
            "Bonus: Handle a difficult question gracefully"
        ],
        teacherNote: "Praktekkan dengan intonation yang tepat. Jangan monoton!"
    },

    // SLIDE 20: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: 3-Minute Presentation",
        subtitle: "Apply the structure.",
        roleplay: {
            scenario: "Give a 3-minute presentation on any work-related topic (or a hobby if preferred). Use: clear opening with agenda, 2-3 main points with transitions, at least 2 emphasis phrases, and a strong closing with summary.",
            roles: [
                { role: "Presenter", goal: "Use signposting phrases. Clear structure. Engage audience." },
                { role: "Audience", goal: "Listen for structure. Note if you could follow the flow. Ask one question at the end." }
            ]
        },
        teacherNote: "Beri feedback: Struktur jelas? Signposting phrases digunakan? Terdengar natural?"
    },

    // SLIDE 21: RECAP (FIXED FORMAT)
    {
        type: 'recap',
        title: "Key Takeaways: Presentation Basics",
        recap: [
            { context: "The Hook (Opening)", sayThis: "Start with a story, question, or statistic to grab attention", dontSayThis: "So... um... today I'll talk about..." },
            { context: "Structure", sayThis: "Use Opening → Body (3 points) → Closing with clear signposts", dontSayThis: "Jump randomly between topics without transitions" },
            { context: "Signposting", sayThis: "'Let's move on to...' / 'The key takeaway is...'", dontSayThis: "Silent transitions that confuse the audience" },
            { context: "Body Language", sayThis: "Stand tall, make eye contact, use purposeful gestures", dontSayThis: "Crossed arms, staring at slides, nervous pacing" },
            { context: "Managing Nerves", sayThis: "Deep breaths, power posing, reframe as excitement", dontSayThis: "Apologizing for being nervous or unprepared" },
            { context: "Slide Design", sayThis: "6x6 rule, high contrast, one main visual per slide", dontSayThis: "Walls of text, cluttered decorations, tiny fonts" }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Build your presentation skills.",
        mission: [
            "Notice signposting phrases di presentasi yang Anda tonton",
            "Prepare a 3-minute presentation dengan proper structure",
            "Practice menggunakan transition phrases",
            "Record yourself - notice filler words dan um's",
            "Simplify one of your existing presentations (10-20-30 rule)"
        ],
        teacherNote: "Presentation skill adalah muscle - semakin sering dilatih, semakin kuat."
    }
];

export const quiz: QuizQuestion[] = [];
