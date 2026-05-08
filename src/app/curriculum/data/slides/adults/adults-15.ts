import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1: TITLE
    {
        type: 'title',
        title: "Making Plans",
        subtitle: "Scheduling, Canceling, and Confirming Politely",
        teacherNote: "Goal: Dari 'Join with us' menjadi proper invitation, scheduling, dan handling plan changes dengan profesional.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920"
    },

    // SLIDE 2: THE PROBLEM
    {
        type: 'concept',
        title: "The 'Join With Us' Error",
        subtitle: "Kesalahan umum dalam membuat dan mengatur janji.",
        content: [
            "'Join with us' adalah error karena 'join' langsung mengikuti objek (no 'with').",
            "Tidak jelas tentang detail: waktu, tempat, agenda.",
            "Cancel atau reschedule tanpa proper notice = unprofessional.",
            "Butuh phrases yang jelas, polite, dan complete."
        ],
        teacherNote: "Koreksi: 'Would you like to join us?' (NO 'with')"
    },

    // SLIDE 3: INVITATIONS
    {
        type: 'vocabulary',
        title: "Making Invitations",
        subtitle: "Undang dengan jelas dan sopan.",
        vocabulary: [
            { term: "Would you like to join us?", meaning: "Basic invite", example: "Would you like to join us for dinner?" },
            { term: "Are you free on [day]?", meaning: "Check availability", example: "Are you free on Thursday evening?" },
            { term: "Do you have time to...?", meaning: "Casual invite", example: "Do you have time to grab coffee?" },
            { term: "I'd like to invite you to...", meaning: "Formal invite", example: "I'd like to invite you to our product launch." },
            { term: "How about we...?", meaning: "Suggestive invite", example: "How about we meet for lunch next week?" },
            { term: "We're having a... and we'd love for you to come.", meaning: "Warm invite", example: "We're having a small gathering and we'd love for you to come." }
        ]
    },

    // SLIDE 4: SUGGESTING TIME
    {
        type: 'vocabulary',
        title: "Suggesting Times",
        subtitle: "Propose waktu dengan fleksibilitas.",
        vocabulary: [
            { term: "How about [time] on [day]?", meaning: "Suggest specific time", example: "How about 3 PM on Tuesday?" },
            { term: "Would [time] work for you?", meaning: "Check if suitable", example: "Would 10 AM work for you?" },
            { term: "Are you available...?", meaning: "Ask availability", example: "Are you available sometime next week?" },
            { term: "What time suits you best?", meaning: "Give them choice", example: "What time suits you best - morning or afternoon?" },
            { term: "I'm free on [day] at [time].", meaning: "State your availability", example: "I'm free on Monday at 2 PM." },
            { term: "Does [day] work for you?", meaning: "Check day availability", example: "Does Wednesday work for you?" }
        ]
    },

    // SLIDE 5: CONFIRMING
    {
        type: 'vocabulary',
        title: "Confirming Plans",
        subtitle: "Pastikan semua jelas.",
        vocabulary: [
            { term: "So we're meeting at...", meaning: "Confirm details", example: "So we're meeting at 2 PM at the coffee shop, right?" },
            { term: "Just to confirm...", meaning: "Double-check", example: "Just to confirm - the address is 123 Main Street?" },
            { term: "I'll see you then.", meaning: "Acknowledge plan", example: "Great! I'll see you then." },
            { term: "Looking forward to it.", meaning: "Express enthusiasm", example: "Looking forward to meeting you!" },
            { term: "Please let me know if anything changes.", meaning: "Ask for updates", example: "Please let me know if your schedule changes." },
            { term: "I've marked it in my calendar.", meaning: "Show commitment", example: "I've marked it in my calendar for Thursday at 3." }
        ]
    },

    // SLIDE 6: RESCHEDULING
    {
        type: 'vocabulary',
        title: "Rescheduling Politely",
        subtitle: "Ubah jadwal tanpa offense.",
        vocabulary: [
            { term: "I need to reschedule.", meaning: "Direct but polite", example: "I need to reschedule our meeting." },
            { term: "Something has come up.", meaning: "Vague reason", example: "Something has come up - can we meet another time?" },
            { term: "Would it be possible to move...?", meaning: "Request change", example: "Would it be possible to move our meeting to Friday?" },
            { term: "I'm double-booked.", meaning: "Scheduling conflict", example: "I'm double-booked at that time. Could we do 4 PM instead?" },
            { term: "Can we push it back/to...?", meaning: "Move later", example: "Can we push it back to next week?" },
            { term: "I have a conflict at that time.", meaning: "Formal reason", example: "I have a conflict at that time. Are you free Tuesday instead?" }
        ]
    },

    // SLIDE 7: CANCELING
    {
        type: 'vocabulary',
        title: "Canceling Plans",
        subtitle: "Batalkan dengan apology dan alternative.",
        vocabulary: [
            { term: "I need to cancel.", meaning: "Direct", example: "I need to cancel our meeting tomorrow." },
            { term: "I'm afraid I can't make it.", meaning: "Polite regret", example: "I'm afraid I can't make it to dinner." },
            { term: "I have to bail on our plans.", meaning: "Casual (friends)", example: "Sorry, I have to bail on our plans tonight." },
            { term: "Unfortunately, I won't be able to...", meaning: "Formal apology", example: "Unfortunately, I won't be able to attend." },
            { term: "Can we take a rain check?", meaning: "Postpone to later", example: "Can we take a rain check on lunch?" },
            { term: "I apologize for the short notice.", meaning: "Acknowledge lateness", example: "I apologize for the short notice, but I need to cancel." }
        ]
    },

    // SLIDE 8: RESPONDING TO CHANGES
    {
        type: 'vocabulary',
        title: "Responding to Changes",
        subtitle: "Reaksi yang graceful.",
        vocabulary: [
            { term: "No problem at all.", meaning: "Easygoing acceptance", example: "No problem at all. Let's find another time." },
            { term: "That works for me too.", meaning: "Agree to change", example: "Friday works for me too." },
            { term: "No worries, let's reschedule.", meaning: "Casual acceptance", example: "No worries, let's reschedule for next week." },
            { term: "I understand. Things come up.", meaning: "Empathetic", example: "I understand. Things come up. Let's touch base later." },
            { term: "Sure, when works better for you?", meaning: "Flexible", example: "Sure, when works better for you?" },
            { term: "Thanks for letting me know.", meaning: "Appreciate notice", example: "Thanks for letting me know in advance." }
        ]
    },

    // SLIDE 9: VAGUE PLANS
    {
        type: 'vocabulary',
        title: "Making Vague/Future Plans",
        subtitle: "Saat belum ada detail pasti.",
        vocabulary: [
            { term: "We should get together sometime.", meaning: "Casual future", example: "We should get together sometime soon." },
            { term: "Let's catch up soon.", meaning: "Reconnect", example: "Let's catch up soon over coffee." },
            { term: "I'll be in touch.", meaning: "Promise to contact", example: "I'll be in touch to set up a meeting." },
            { term: "Let's play it by ear.", meaning: "Flexible planning", example: "Let's play it by ear and see how the week goes." },
            { term: "Let's tentatively say...", meaning: "Not confirmed", example: "Let's tentatively say Thursday, and I'll confirm." },
            { term: "Keep [day] open if possible.", meaning: "Provisional hold", example: "Keep next Monday open if possible." }
        ]
    },

    // SLIDE 10: MEETING SCHEDULING
    {
        type: 'vocabulary',
        title: "Business Meeting Scheduling",
        subtitle: "Professional context.",
        vocabulary: [
            { term: "I'd like to schedule a meeting...", meaning: "Formal request", example: "I'd like to schedule a meeting to discuss the proposal." },
            { term: "Please send me your availability.", meaning: "Ask for options", example: "Please send me your availability for next week." },
            { term: "I'll send a calendar invite.", meaning: "Formal confirmation", example: "I'll send a calendar invite with the details." },
            { term: "Let's book a room.", meaning: "Arrange venue", example: "Let's book a conference room." },
            { term: "I'll add it to our calendars.", meaning: "Confirm scheduling", example: "I'll add it to our calendars right now." },
            { term: "The meeting is set for...", meaning: "Confirm final", example: "The meeting is set for Tuesday at 10 AM." }
        ]
    },

    // SLIDE 11: REMINDERS
    {
        type: 'vocabulary',
        title: "Sending Reminders",
        subtitle: "Gentle nudge sebelum meeting.",
        vocabulary: [
            { term: "Just a reminder that...", meaning: "Gentle reminder", example: "Just a reminder that we're meeting tomorrow at 2." },
            { term: "Looking forward to seeing you...", meaning: "Positive reminder", example: "Looking forward to seeing you on Thursday!" },
            { term: "Are we still on for...?", meaning: "Check if confirmed", example: "Are we still on for lunch tomorrow?" },
            { term: "Confirming our meeting for...", meaning: "Formal reminder", example: "Confirming our meeting for Monday at 10." },
            { term: "Don't forget about...", meaning: "Casual reminder", example: "Don't forget about our call at 3!" }
        ]
    },

    // SLIDE 12: TIME EXPRESSIONS
    {
        type: 'vocabulary',
        title: "Useful Time Expressions",
        subtitle: "Kosakata waktu yang sering digunakan.",
        vocabulary: [
            { term: "First thing in the morning", meaning: "Pagi sekali", example: "Can we meet first thing Monday morning?" },
            { term: "By the end of the day/week", meaning: "Sebelum hari/minggu berakhir", example: "Let's confirm by the end of the day." },
            { term: "Sometime next week", meaning: "Minggu depan (unspecified)", example: "Let's meet sometime next week." },
            { term: "The week after next", meaning: "Dua minggu lagi", example: "How about the week after next?" },
            { term: "At your earliest convenience", meaning: "Sesegera Anda bisa", example: "Please reply at your earliest convenience." },
            { term: "ASAP", meaning: "As soon as possible", example: "I need to know ASAP." }
        ]
    },

    // SLIDE 13: CALENDAR VOCABULARY
    {
        type: 'vocabulary',
        title: "Calendar & Scheduling Vocabulary",
        subtitle: "Terms for managing your schedule professionally.",
        vocabulary: [
            { term: "Time slot", meaning: "A specific period available for a meeting", example: "Do you have a time slot open on Tuesday afternoon?" },
            { term: "Buffer time", meaning: "Extra time between meetings", example: "I always schedule 15 minutes of buffer time between calls." },
            { term: "Outlook/Google Calendar", meaning: "Digital calendar tools", example: "I'll send you a Google Calendar invite." },
            { term: "Recurring meeting", meaning: "Meeting that repeats regularly", example: "Let's set this up as a recurring meeting every Monday." },
            { term: "All-day event", meaning: "Event blocking the entire day", example: "I have an all-day event on Thursday, so I'm not available." },
            { term: "Out of office (OOO)", meaning: "Not available for work", example: "I'll be OOO next Friday, so let's meet this week." }
        ]
    },

    // SLIDE 14: FORMAL VS CASUAL INVITATIONS
    {
        type: 'comparison',
        title: "Formal vs Casual Invitations",
        subtitle: "Match your tone to the situation.",
        comparison: [
            { wrong: "Wanna hang out?", right: "Would you be available for a meeting?" },
            { wrong: "Let's grab coffee sometime.", right: "I'd like to invite you to discuss this over coffee." },
            { wrong: "You free tomorrow?", right: "Are you available tomorrow?" },
            { wrong: "Come to our party!", right: "We would be delighted if you could attend our event." },
            { wrong: "Join us for lunch?", right: "Would you like to join us for lunch?" },
            { wrong: "Let's meet up.", right: "I'd like to schedule a time to meet with you." }
        ],
        teacherNote: "Casual is fine for friends, but formal is safer for business and first meetings."
    },

    // SLIDE 15: BREAKING BAD NEWS
    {
        type: 'vocabulary',
        title: "Breaking Bad News: Cancel & Postpone",
        subtitle: "Professional ways to deliver disappointing news.",
        vocabulary: [
            { term: "I regret to inform you...", meaning: "Very formal bad news", example: "I regret to inform you that I need to cancel our meeting." },
            { term: "Due to unforeseen circumstances...", meaning: "Unexpected situation", example: "Due to unforeseen circumstances, we need to postpone." },
            { term: "I hope to reschedule at your earliest convenience.", meaning: "Polite offer to reschedule", example: "I hope to reschedule at your earliest convenience." },
            { term: "My apologies for any inconvenience caused.", meaning: "Acknowledge disruption", example: "My apologies for any inconvenience caused by this change." },
            { term: "The meeting has been pushed to...", meaning: "Rescheduled to later", example: "The meeting has been pushed to next Wednesday." },
            { term: "We need to put this on hold.", meaning: "Pause indefinitely", example: "We need to put this meeting on hold until next month." }
        ]
    },

    // SLIDE 16: GROUP SCHEDULING STRATEGIES
    {
        type: 'concept',
        title: "Group Scheduling Strategies",
        subtitle: "Coordinating multiple people's calendars.",
        content: [
            "Use 'Doodle poll' or 'When2meet' to find common availability.",
            "Propose 2-3 time options: 'Would Tuesday 2 PM, Wednesday 10 AM, or Thursday 3 PM work?'",
            "Set a deadline for responses: 'Please reply by EOD Thursday.'",
            "Consider time zones: 'That's 9 AM EST / 3 PM CET.'",
            "Send calendar invites immediately after confirmation.",
            "Have a backup plan: 'If that doesn't work, I'll send alternatives.'"
        ],
        teacherNote: "Group scheduling is one of the hardest communication tasks. Practice being clear and efficient."
    },

    // SLIDE 17: MEETING AGENDA TEMPLATES
    {
        type: 'concept',
        title: "Meeting Agenda Templates",
        subtitle: "Structure your meetings for clarity and efficiency.",
        content: [
            "Always include: Date, Time, Location/Link, Duration, Attendees.",
            "Agenda items with time allocations: 'Introduction (5 min), Review (15 min), Discussion (20 min).'",
            "Pre-meeting preparation: 'Please review the attached document before the meeting.'",
            "Desired outcomes: 'By the end: Finalize Q3 budget, Assign tasks.'",
            "Follow-up plan: 'Notes will be sent within 24 hours.'",
            "Sample subject: 'Meeting: Project Review - March 15 @ 2 PM (30 min)'"
        ],
        teacherNote: "A good agenda saves time and keeps everyone focused. Always send it in advance."
    },

    // SLIDE 18: PRACTICE SCHEDULING COMPLEX MEETING
    {
        type: 'micro-drill',
        title: "Practice: Schedule a Complex Meeting",
        subtitle: "Put it all together in a realistic scenario.",
        mission: [
            "1. You need to schedule a 1-hour project review with 3 busy colleagues.",
            "2. Send an initial email proposing 3 possible time slots next week.",
            "3. One person declines all options - suggest 2 alternatives.",
            "4. Confirm the final time with a complete agenda.",
            "5. Day before: Send a reminder with meeting link.",
            "6. Morning of: You need to cancel due to illness - send a polite cancellation."
        ],
        teacherNote: "This drill covers the full lifecycle of scheduling. Focus on tone and completeness of information."
    },

    // SLIDE 19: MICRO-DRILL
    {
        type: 'micro-drill',
        title: "Quick Review: Respond to These Scenarios",
        subtitle: "Respons dengan phrase yang tepat.",
        mission: [
            "1. Invite a colleague to lunch next week",
            "2. Confirm a meeting scheduled for Friday at 2 PM",
            "3. Reschedule due to a conflict (polite)",
            "4. Cancel dinner plans with a friend (casual)",
            "5. Respond gracefully when someone cancels on you",
            "Bonus: Schedule a formal business meeting via email"
        ],
        teacherNote: "Pastikan grammar benar dan tone sesuai konteks."
    },

    // SLIDE 20: ROLEPLAY
    {
        type: 'roleplay',
        title: "Roleplay: The Scheduling Dance",
        subtitle: "Navigate scheduling conflicts.",
        roleplay: {
            scenario: "You and your colleague are trying to schedule an important project review. You both have busy calendars. Practice: suggesting times, finding conflicts, proposing alternatives, confirming final details, and handling a last-minute reschedule.",
            roles: [
                { role: "You", goal: "Find a mutually suitable time. Be flexible but ensure the meeting happens." },
                { role: "Colleague", goal: "Have limited availability. Make them work to find a slot. Then cancel last minute." }
            ]
        },
        teacherNote: "Ini latihan real-world yang sering membuat frustrasi. Skill ini sangat berguna!"
    },

    // SLIDE 21: RECAP
    {
        type: 'recap',
        title: "Key Takeaways: Making Plans",
        recap: [
            {
                context: "Inviting someone to an event",
                sayThis: "Would you like to join us for dinner?",
                dontSayThis: "Join with us for dinner"
            },
            {
                context: "Suggesting a meeting time",
                sayThis: "How about 3 PM on Tuesday? Would that work for you?",
                dontSayThis: "Meet Tuesday?"
            },
            {
                context: "Confirming plans professionally",
                sayThis: "Just to confirm - we're meeting at 2 PM at the coffee shop, right?",
                dontSayThis: "See you tomorrow I guess"
            },
            {
                context: "Rescheduling politely",
                sayThis: "Would it be possible to move our meeting to Friday? I have a conflict.",
                dontSayThis: "I can't make it. Another time?"
            },
            {
                context: "Canceling with professionalism",
                sayThis: "I'm afraid I can't make it. I apologize for the short notice. Can we take a rain check?",
                dontSayThis: "Sorry, can't come."
            },
            {
                context: "Responding to a cancellation",
                sayThis: "No problem at all. I understand things come up. When works better for you?",
                dontSayThis: "Okay fine."
            }
        ]
    },

    // SLIDE 22: MISSION
    {
        type: 'mission',
        title: "This Week's Mission",
        subtitle: "Master planning conversations.",
        mission: [
            "Practice 'join us' tanpa 'with' - koreksi diri sendiri",
            "Schedule 2 meetings menggunakan phrases baru",
            "Practice rescheduling - notice how people react",
            "Send a calendar invite dengan complete details",
            "Notice planning phrases di email/meeting requests Anda"
        ],
        teacherNote: "Planning yang efektif = professionalism. Skill ini mencerminkan reliability Anda."
    }
];

export const quiz: QuizQuestion[] = [];
