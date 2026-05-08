import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Telephoning & Zoom",
        subtitle: "Handling Calls, Connections, and Virtual Meetings",
        teacherNote: "Goal: Etika dan phrases untuk komunikasi jarak jauh yang profesional.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "Virtual Communication Challenges",
        subtitle: "Kesulitan khusus di telepon dan video call.",
        content: [
            "Tidak ada body language → Harus lebih jelas dengan kata-kata.",
            "Technical issues → Butuh phrases untuk handle interruption.",
            "Multi-tasking temptation → Etika perhatian penuh.",
            "Ending calls → Butuh phrases yang sopan dan jelas."
        ],
        teacherNote: "Tanya: 'Apa challenge terbesar Anda saat meeting online?'"
    },

    // SLIDE 3: OPENING CALLS
    {
        type: 'vocabulary',
        title: "Opening Phone/Zoom Calls",
        subtitle: "Mulai dengan profesional.",
        vocabulary: [
            { term: "This is [Name] from [Company].", meaning: "Identifikasi diri", example: "This is Budi from ABC Corp." },
            { term: "I'm calling about...", meaning: "State purpose", example: "I'm calling about the proposal we discussed." },
            { term: "Do you have a few minutes to talk?", meaning: "Check availability", example: "Do you have a few minutes to discuss the project?" },
            { term: "Thanks for taking the time.", meaning: "Appreciate their time", example: "Thanks for taking the time to speak with me." },
            { term: "Can you hear me okay?", meaning: "Check audio", example: "Can you hear me okay? Should I adjust my mic?" }
        ]
    },

    // SLIDE 4: CONNECTION ISSUES
    {
        type: 'vocabulary',
        title: "Handling Connection Issues",
        subtitle: "Saat technical problems terjadi.",
        vocabulary: [
            { term: "You're breaking up.", meaning: "Suara putus-putus", example: "Sorry, you're breaking up. Could you repeat that?" },
            { term: "I lost you for a moment.", meaning: "Sempat terputus", example: "I lost you for a moment. What were you saying?" },
            { term: "Could you say that again?", meaning: "Minta ulang", example: "The line is bad. Could you say that again?" },
            { term: "I'll call you back.", meaning: "Telepon ulang", example: "The connection is poor. I'll call you back." },
            { term: "Let me switch to my phone.", meaning: "Ganti device", example: "My internet is unstable. Let me switch to my phone." },
            { term: "Can everyone hear me?", meaning: "Check audio meeting", example: "Can everyone hear me clearly?" }
        ]
    },

    // SLIDE 5: ZOOM SPECIFIC
    {
        type: 'vocabulary',
        title: "Zoom/Video Call Phrases",
        subtitle: "Etika dan praktik video conferencing.",
        vocabulary: [
            { term: "I'm going to share my screen.", meaning: "Screen sharing", example: "I'm going to share my screen to show you the report." },
            { term: "Can you see my screen?", meaning: "Confirm visibility", example: "Can you see my screen okay?" },
            { term: "I'll turn my camera on/off.", meaning: "Camera control", example: "I'll turn my camera off to save bandwidth." },
            { term: "You're on mute.", meaning: "Memberitahu mute", example: "I think you're on mute. We can't hear you." },
            { term: "Let me unmute you.", meaning: "Buka mute (host)", example: "Let me unmute you so you can speak." },
            { term: "I'll put it in the chat.", meaning: "Share via chat", example: "I'll put the link in the chat." }
        ]
    },

    // SLIDE 6: INTERUPTIONS
    {
        type: 'vocabulary',
        title: "Interrupting Politely",
        subtitle: "Cara menyela tanpa kasar.",
        vocabulary: [
            { term: "Sorry to interrupt, but...", meaning: "Interrupt dengan apology", example: "Sorry to interrupt, but I need to clarify something." },
            { term: "Could I jump in here?", meaning: "Minta izin menyela", example: "Could I jump in here with a quick question?" },
            { term: "If I could just add...", meaning: "Tambahkan point", example: "If I could just add one thing to that..." },
            { term: "Before we move on...", meaning: "Sela sebelum lanjut", example: "Before we move on, can we go back to the budget?" },
            { term: "Just to clarify...", meaning: "Klarifikasi", example: "Just to clarify - are we talking about Q3 or Q4?" },
            { term: "Sorry, I didn't catch that.", meaning: "Tidak mendengar", example: "Sorry, I didn't catch that last point." }
        ]
    },

    // SLIDE 7: CLARIFYING
    {
        type: 'vocabulary',
        title: "Clarifying and Confirming",
        subtitle: "Pastikan pemahaman di call.",
        vocabulary: [
            { term: "Just to make sure I understand...", meaning: "Konfirmasi", example: "Just to make sure I understand - you need this by Friday?" },
            { term: "So what you're saying is...", meaning: "Parafrase", example: "So what you're saying is we need to delay the launch?" },
            { term: "Correct me if I'm wrong...", meaning: "Check understanding", example: "Correct me if I'm wrong, but the budget is $50k?" },
            { term: "Could you spell that for me?", meaning: "Minta dieja", example: "Could you spell the company name for me?" },
            { term: "Let me read that back to you.", meaning: "Konfirmasi detail", example: "Let me read that back to you: 555-0123, right?" },
            { term: "Is that clear?", meaning: "Check their understanding", example: "Does that make sense? Is that clear?" }
        ]
    },

    // SLIDE 8: VOICE MAIL
    {
        type: 'vocabulary',
        title: "Leaving Voicemail",
        subtitle: "Pesan suara yang jelas dan efektif.",
        vocabulary: [
            { term: "This is [Name] calling from...", meaning: "Identifikasi", example: "This is Sarah calling from XYZ Company." },
            { term: "I'm calling regarding...", meaning: "State purpose", example: "I'm calling regarding the meeting tomorrow." },
            { term: "Please call me back at...", meaning: "Minta callback", example: "Please call me back at 555-0123." },
            { term: "I'll try again later.", meaning: "Follow-up plan", example: "If I don't hear back, I'll try again tomorrow." },
            { term: "It's not urgent.", meaning: "Set priority", example: "It's not urgent, but I'd appreciate a call back by Friday." },
            { term: "Thanks for your time.", meaning: "Close politely", example: "Thanks for your time. Talk soon." }
        ]
    },

    // SLIDE 9: ENDING CALLS
    {
        type: 'vocabulary',
        title: "Ending Calls Professionally",
        subtitle: "Tutup dengan sopan dan jelas.",
        vocabulary: [
            { term: "I think that covers everything.", meaning: "Konfirmasi selesai", example: "I think that covers everything we needed to discuss." },
            { term: "Thanks for your time.", meaning: "Appreciate", example: "Thanks for your time today." },
            { term: "I'll send you a follow-up email.", meaning: "Next steps", example: "I'll send you a follow-up email with the details." },
            { term: "Let's touch base next week.", meaning: "Plan follow-up", example: "Let's touch base next week to review progress." },
            { term: "I need to jump on another call.", meaning: "Excuse yourself", example: "I need to jump on another call, but let's continue later." },
            { term: "Great speaking with you!", meaning: "Warm close", example: "Great speaking with you! Have a good day." }
        ]
    },

    // SLIDE 10: HOLD AND TRANSFER
    {
        type: 'vocabulary',
        title: "Hold and Transfer",
        subtitle: "Minta menunggu atau transfer call.",
        vocabulary: [
            { term: "Can I put you on hold?", meaning: "Minta hold", example: "Can I put you on hold for a moment?" },
            { term: "Thanks for holding.", meaning: "Appreciate waiting", example: "Thanks for holding. I have the information now." },
            { term: "Let me transfer you to...", meaning: "Transfer", example: "Let me transfer you to the sales department." },
            { term: "One moment, please.", meaning: "Tunggu sebentar", example: "One moment, please. I'll check that for you." },
            { term: "I'll connect you now.", meaning: "Hubungkan", example: "I'll connect you now. Please hold." },
            { term: "The line is busy.", meaning: "Line sibuk", example: "The line is busy. Would you like to hold or call back?" }
        ]
    },

    // SLIDE 11: ZOOM ETIQUETTE
    {
        type: 'concept',
        title: "Video Call Etiquette",
        subtitle: "Do's and Don'ts.",
        content: [
            "DO: Dress professionally (at least from the waist up).",
            "DO: Mute when not speaking to reduce background noise.",
            "DO: Look at the camera, not just the screen.",
            "DON'T: Multitask or check your phone visibly.",
            "DON'T: Have distracting background or poor lighting."
        ],
        teacherNote: "Demo: Tunjukkan contoh setup yang baik vs buruk."
    },

    // SLIDE 12: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Practice These Scenarios",
        subtitle: "Ucapkan dengan lancar.",
        mission: [
            "1. Opening a Zoom call with 5 participants",
            "2. Telling someone they're on mute",
            "3. Handling a bad connection",
            "4. Interrupting to ask for clarification",
            "5. Ending a call professionally",
            "Bonus: Leaving a voicemail for a client"
        ],
        teacherNote: "Dengarkan pronunciation dan fluency. Koreksi jika terdengar kaku."
    },

    // SLIDE 13: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: Technical Difficulties",
        subtitle: "Handle a call with multiple issues.",
        roleplay: {
            scenario: "You're on an important client call. Your audio keeps cutting out, the client is on mute and doesn't realize it, and you need to share your screen but can't find the button. Navigate through these challenges professionally.",
            roles: [
                { role: "You", goal: "Handle technical issues calmly. Use appropriate phrases. Maintain professionalism." },
                { role: "Client", goal: "Be patient but slightly frustrated. Make them work through the issues." }
            ]
        },
        teacherNote: "Catat phrases yang mereka gunakan. Apakah terdengar natural dan profesional?"
    },

    // SLIDE 14: CASE STUDY
    {
        type: 'case-study',
        title: "Case Study: The Awkward Zoom",
        subtitle: "Identifikasi masalahnya.",
        caseStudy: {
            scenario: "SITUATION: During a team Zoom meeting: Rina is eating loudly with mic on, Budi has a messy bedroom visible, Sari keeps interrupting, and the host doesn't know how to mute people. The meeting is chaotic.",
            template: "SOLUTIONS:\n1. Rina: Mute when eating, use 'Sorry, let me mute while I eat'\n2. Budi: Use virtual background or blur: 'Let me fix my background real quick'\n3. Sari: Host says 'Let's take turns. Sari, please let others finish first'\n4. Host learns: 'Everyone please mute. Click the mic icon at bottom left'\n5. Setup: Test before meetings, have agenda, assign a co-host"
        },
        teacherNote: "Diskusikan solusi untuk tiap masalah. Ini learning moment yang sering terjadi!"
    },

    // SLIDE 15: PROFESSIONAL VOICEMAIL STRUCTURE
    {
        type: 'concept',
        title: "Professional Voicemail Structure",
        subtitle: "The 4-part formula for effective messages.",
        content: [
            "1. GREETING: Start with a polite greeting and your name",
            "2. PURPOSE: State clearly why you're calling",
            "3. ACTION: What you want them to do (call back, check email, etc.)",
            "4. CLOSE: Thank them and provide your callback number slowly"
        ],
        teacherNote: "Practice: Have students record a sample voicemail following this structure."
    },

    // SLIDE 16: MORE TECHNICAL ISSUES
    {
        type: 'vocabulary',
        title: "More Technical Issue Phrases",
        subtitle: "Advanced phrases for video call problems.",
        vocabulary: [
            { term: "My camera seems to be frozen.", meaning: "Kamera macet", example: "My camera seems to be frozen. Can you still see me?" },
            { term: "There's a delay on my end.", meaning: "Ada delay", example: "There's a delay on my end. Let me try refreshing." },
            { term: "The screen is lagging.", meaning: "Layar patah-patah", example: "The screen is lagging. Should I lower the video quality?" },
            { term: "I think we have an echo.", meaning: "Suara bergema", example: "I think we have an echo. Could someone mute their mic?" },
            { term: "My connection is unstable.", meaning: "Koneksi tidak stabil", example: "My connection is unstable. Let me try joining from mobile data." },
            { term: "Could we switch to audio only?", meaning: "Hanya audio", example: "Could we switch to audio only? My bandwidth is struggling." }
        ]
    },

    // SLIDE 17: MEETING CHECKLIST
    {
        type: 'steps',
        title: "Meeting Checklist: Before, During, After",
        subtitle: "Be prepared for every virtual meeting.",
        steps: [
            { id: 1, title: "BEFORE", description: "Test camera & mic, check lighting, close distractions, prepare materials", icon: "✅" },
            { id: 2, title: "DURING", description: "Join on time, mute when not speaking, take notes, stay focused", icon: "🎙️" },
            { id: 3, title: "AFTER", description: "Send follow-up email, summarize action items, schedule next meeting", icon: "📧" }
        ]
    },

    // SLIDE 18: DIFFICULT CALL SCENARIOS
    {
        type: 'roleplay',
        title: "Roleplay: Difficult Call Scenarios",
        subtitle: "Handle challenging conversations professionally.",
        roleplay: {
            scenario: "You receive an angry call from a customer complaining about a delayed delivery. They're speaking very fast, raising their voice, and not letting you explain. You need to de-escalate, get the information you need, and provide a solution.",
            roles: [
                { role: "Customer Service Rep", goal: "Stay calm, use de-escalation phrases, get order details, offer solution." },
                { role: "Angry Customer", goal: "Be frustrated about a missed deadline. Interrupt frequently. Demand immediate action." }
            ]
        },
        teacherNote: "Focus on tone and de-escalation phrases. Success = customer feels heard and has next steps."
    },

    // SLIDE 19: PROFESSIONAL EMAIL FOLLOW-UP
    {
        type: 'concept',
        title: "Professional Email Follow-Up",
        subtitle: "After the call: Document and confirm.",
        content: [
            "Subject: Clear reference to the call (e.g., 'Follow-up: Project Discussion - Jan 15')",
            "Opening: Thank them for their time",
            "Body: Summarize key points discussed and decisions made",
            "Action Items: List who does what by when",
            "Close: Offer to answer questions and next meeting date"
        ],
        teacherNote: "Tip: Send follow-up within 24 hours while the conversation is fresh."
    },

    // SLIDE 20: VIRTUAL BACKGROUND & LIGHTING
    {
        type: 'concept',
        title: "Virtual Background & Lighting Tips",
        subtitle: "Look professional on camera.",
        content: [
            "LIGHTING: Face a window or use a ring light - avoid backlight",
            "BACKGROUND: Clean, uncluttered space OR professional virtual background",
            "CAMERA ANGLE: Eye level or slightly above - avoid looking up at camera",
            "EYE LINE: Look at camera when speaking, not at your own video",
            "ATTIRE: Solid colors work best - avoid busy patterns or same color as background"
        ],
        teacherNote: "Quick check: Have students look at their own video and identify one improvement."
    },

    // SLIDE 21: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Telephoning & Zoom",
        recap: [
            { context: "Opening a call", sayThis: "This is [Name] from [Company]. I'm calling about...", dontSayThis: "Hello? Is this [Name]?" },
            { context: "Connection issues", sayThis: "You're breaking up. Could you repeat that?", dontSayThis: "What? I can't hear you!" },
            { context: "Interrupting", sayThis: "Sorry to interrupt, but I need to clarify...", dontSayThis: "Wait, that's wrong!" },
            { context: "Someone is on mute", sayThis: "I think you're on mute. We can't hear you.", dontSayThis: "Hello? Are you there?" },
            { context: "Ending a call", sayThis: "I think that covers everything. Thanks for your time!", dontSayThis: "Okay, bye." },
            { context: "Voicemail", sayThis: "Please call me back at [number]. Thanks!", dontSayThis: "Call me back." }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Master virtual communication.",
        mission: [
            "Notice phrases used di meeting Zoom Anda",
            "Practice leaving a clear voicemail",
            "Improve your video call setup (lighting, background)",
            "Use at least 3 new phrases di call minggu ini",
            "Record yourself doing a mock call - notice habits"
        ],
        teacherNote: "Virtual communication adalah skill permanen. Investasi di sini akan terus berguna."
    }
];

export const quiz: QuizQuestion[] = [];
