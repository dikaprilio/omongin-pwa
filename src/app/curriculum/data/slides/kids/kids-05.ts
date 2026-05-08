import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "Simon Says (Body Parts) 🖐️",
        subtitle: "Learning Body Parts with Movement",
        teacherNote: "Goal: Anak aktif bergerak dan paham perintah bahasa Inggris secara instan. Games gerak tubuh yang seru!"
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's move! 🏃",
        content: [
            "🖐️ Can you touch your nose? (Bisa sentuh hidung?)",
            "👂 Can you touch your ears? (Bisa sentuh telinga?)",
            "🦶 Can you touch your toes? (Bisa sentuh jari kaki?)",
            "🎮 Do you know the game Simon Says? (Tahu game Simon Says?)",
            "💪 Are you ready to move? (Siap bergerak?)"
        ],
        teacherNote: "Warming up! Get kids moving from the start. High energy!"
    },
    // SLIDE 3 - BODY PARTS - HEAD
    {
        type: 'vocabulary',
        title: "Body Parts: Head Area 👤",
        subtitle: "Bagian tubuh: Kepala",
        vocabulary: [
            { term: "Head", meaning: "Kepala", example: "Touch your head!" },
            { term: "Hair", meaning: "Rambut", example: "Touch your hair!" },
            { term: "Face", meaning: "Wajah", example: "Wash your face!" },
            { term: "Eye / Eyes", meaning: "Mata", example: "Close your eyes!" },
            { term: "Ear / Ears", meaning: "Telinga", example: "Touch your ears!" },
            { term: "Nose", meaning: "Hidung", example: "Touch your nose!" },
            { term: "Mouth", meaning: "Mulut", example: "Open your mouth!" },
            { term: "Teeth", meaning: "Gigi", example: "Brush your teeth!" }
        ],
        teacherNote: "TPR: For each word, kids touch that body part!"
    },
    // SLIDE 4 - BODY PARTS - BODY
    {
        type: 'vocabulary',
        title: "Body Parts: Body & Limbs 🦶",
        subtitle: "Bagian tubuh: Badan & anggota tubuh",
        vocabulary: [
            { term: "Neck", meaning: "Leher", example: "Touch your neck!" },
            { term: "Shoulder / Shoulders", meaning: "Bahu", example: "Touch your shoulders!" },
            { term: "Arm / Arms", meaning: "Lengan", example: "Wave your arms!" },
            { term: "Hand / Hands", meaning: "Tangan", example: "Clap your hands!" },
            { term: "Finger / Fingers", meaning: "Jari tangan", example: "Wiggle your fingers!" },
            { term: "Stomach / Tummy", meaning: "Perut", example: "Touch your tummy!" },
            { term: "Leg / Legs", meaning: "Kaki", example: "Shake your legs!" },
            { term: "Foot / Feet", meaning: "Kaki (telapak)", example: "Stamp your feet!" },
            { term: "Toe / Toes", meaning: "Jari kaki", example: "Wiggle your toes!" }
        ],
        teacherNote: "Lots of TPR here! Make it energetic and fun!"
    },
    // SLIDE 5 - ACTION VERBS
    {
        type: 'vocabulary',
        title: "Action Verbs 🎯",
        subtitle: "Kata kerja aksi",
        vocabulary: [
            { term: "Touch", meaning: "Sentuh", example: "Touch your nose!" },
            { term: "Shake", meaning: "Goyangkan", example: "Shake your head!" },
            { term: "Wave", meaning: "Lambaikan", example: "Wave your hands!" },
            { term: "Clap", meaning: "Tepuk", example: "Clap your hands!" },
            { term: "Stamp", meaning: "Pukul (kaki)", example: "Stamp your feet!" },
            { term: "Wiggle", meaning: "Gerak-gerakkan", example: "Wiggle your fingers!" },
            { term: "Open", meaning: "Buka", example: "Open your eyes!" },
            { term: "Close", meaning: "Tutup", example: "Close your eyes!" },
            { term: "Raise", meaning: "Angkat", example: "Raise your hands!" },
            { term: "Turn", meaning: "Putar", example: "Turn around!" }
        ],
        teacherNote: "These action verbs are used in Simon Says commands!"
    },
    // SLIDE 6 - SIMON SAYS RULES
    {
        type: 'concept',
        title: "How to Play Simon Says 🎮",
        subtitle: "Cara bermain Simon Says",
        content: [
            "🎤 Guru berkata 'Simon Says [perintah]'",
            "✅ Kalau ada 'Simon Says' → IKUTI!",
            "❌ Kalau TIDAK ada 'Simon Says' → DIAM!",
            "😄 Kalau salah, duduk sebentar atau giliran jadi 'Simon'!",
            "🏆 Yang terakhir berdiri = PEMENANG!"
        ],
        teacherNote: "Explain the rules clearly. Start slow, then speed up!"
    },
    // SLIDE 7 - SIMON SAYS COMMANDS
    {
        type: 'vocabulary',
        title: "Simon Says Commands 🗣️",
        subtitle: "Contoh perintah Simon Says",
        vocabulary: [
            { term: "Simon says touch your head!", meaning: "Sentuh kepalamu!", example: "✅ DO IT!" },
            { term: "Simon says clap your hands!", meaning: "Tepuk tangan!", example: "✅ DO IT!" },
            { term: "Simon says jump!", meaning: "Lompat!", example: "✅ DO IT!" },
            { term: "Touch your nose! (No 'Simon says')", meaning: "Sentuh hidung!", example: "❌ DON'T DO IT!" },
            { term: "Simon says turn around!", meaning: "Putar badan!", example: "✅ DO IT!" },
            { term: "Stamp your feet! (No 'Simon says')", meaning: "Pukul kaki!", example: "❌ DON'T DO IT!" }
        ],
        teacherNote: "Practice with examples. Trick them sometimes to test listening!"
    },
    // SLIDE 8 - CONVERSATION EXAMPLE
    {
        type: 'case-study',
        title: "Playing Simon Says 🎮",
        subtitle: "Contoh permainan",
        caseStudy: {
            scenario: "Guru memimpin permainan Simon Says.",
            template: "Teacher: Okay everyone, let's play Simon Says!\nStudents: Yay!\nTeacher: Simon says touch your head!\nStudents: [Touch their heads]\nTeacher: Simon says wave your hands!\nStudents: [Wave their hands]\nTeacher: Touch your nose!\nStudents: [Some touch, some don't]\nTeacher: Haha! I didn't say 'Simon says'! Those who touched are out!\nStudents: Aww! Let's play again!"
        },
        teacherNote: "DEMO: Actually play a round! Kids learn best by doing."
    },
    // SLIDE 9 - BODY DESCRIPTION
    {
        type: 'formula',
        title: "Describing Body Parts",
        subtitle: "Mendeskripsikan bagian tubuh",
        formula: "I have [number] [body part] / My [part] is [adjective]",
        vocabulary: [
            { term: "I have two eyes.", meaning: "Saya punya dua mata.", example: "I have two eyes." },
            { term: "I have ten fingers.", meaning: "Saya punya sepuluh jari.", example: "I have ten fingers." },
            { term: "My hair is black.", meaning: "Rambutku hitam.", example: "My hair is black." },
            { term: "My eyes are brown.", meaning: "Mataku cokelat.", example: "My eyes are brown." },
            { term: "I have a small nose.", meaning: "Saya punya hidung kecil.", example: "I have a small nose." }
        ],
        teacherNote: "Connect body parts to descriptions they've learned!"
    },
    // SLIDE 10 - ROLEPLAY 1: DOCTOR CHECK
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Doctor Check 🏥",
        subtitle: "A = Doctor | B = Patient",
        caseStudy: {
            scenario: "Dokter memeriksa pasien.",
            template: "A: Open your mouth, please.\nB: [Opens mouth]\nA: Good! Now touch your nose!\nB: [Touches nose]\nA: Very good! Close your eyes.\nB: [Closes eyes]\nA: Perfect! You are healthy!"
        },
        teacherNote: "Practice body part commands in a 'serious' context. Fun roleplay!"
    },
    // SLIDE 11 - ROLEPLAY 2: FOLLOW THE LEADER
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Follow the Leader 👑",
        subtitle: "A = Leader | B = Follower",
        caseStudy: {
            scenario: "Pemimpin memberi perintah gerakan.",
            template: "A: Touch your head!\nB: [Touches head]\nA: Clap your hands!\nB: [Claps]\nA: Turn around!\nB: [Turns around]\nA: Stamp your feet!\nB: [Stamps feet]\nA: Great job following!"
        },
        teacherNote: "Kids take turns being the leader. Builds confidence!"
    },
    // SLIDE 12 - SIMON SAYS CHALLENGE
    {
        type: 'micro-drill',
        title: "Simon Says Challenge! 🎮",
        subtitle: "Follow my commands!",
        mission: [
            "1. Simon says touch your head!",
            "2. Simon says touch your shoulders!",
            "3. Simon says touch your knees!",
            "4. Simon says touch your toes!",
            "5. Touch your nose! (Gotcha!)"
        ],
        teacherNote: "ACTUALLY PLAY THIS! Call commands quickly. Last one standing wins!"
    },
    // SLIDE 13 - BODY PARTS QUICK FIRE
    {
        type: 'micro-drill',
        title: "Body Parts Quick Fire! ⚡",
        subtitle: "Touch it fast!",
        mission: [
            "1. Touch your EARS!",
            "2. Touch your NOSE!",
            "3. Touch your SHOULDERS!",
            "4. Touch your STOMACH!",
            "5. Touch your FEET!"
        ],
        teacherNote: "Speed round! Go faster and faster. Kids love the challenge!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Sentuh kepala", sayThis: "Touch your head!", dontSayThis: "Touch head." },
            { context: "Perintah Simon Says", sayThis: "Simon says clap your hands!", dontSayThis: "Clap hands." },
            { context: "Mata", sayThis: "I have two eyes.", dontSayThis: "I have eyes." },
            { context: "Jari", sayThis: "I have ten fingers.", dontSayThis: "I have fingers." },
            { context: "Aturan game", sayThis: "Only follow if Simon says!", dontSayThis: "Do everything." }
        ],
        teacherNote: "Review body parts and Simon Says rules."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Teach Your Family: Ajari keluarga Simon Says dalam Inggris!",
            "2. Body Drawing: Gambar diri sendiri dan label semua body parts!",
            "3. Mirror Practice: Latih perintah di depan cermin sambil melihat refleksi!"
        ],
        teacherNote: "Encourage teaching others - best way to reinforce learning!"
    }
];

export const quiz: QuizQuestion[] = [
    // BODY PARTS
    {
        question: "What do you use to see?",
        options: ["Ears", "Eyes", "Nose"],
        correctIndex: 1,
        explanation: "We use our eyes to see!"
    },
    {
        question: "What do you use to hear?",
        options: ["Eyes", "Ears", "Mouth"],
        correctIndex: 1,
        explanation: "We use our ears to hear!"
    },
    {
        question: "What do you use to smell?",
        options: ["Eyes", "Nose", "Ears"],
        correctIndex: 1,
        explanation: "We use our nose to smell!"
    },
    {
        question: "What do you use to eat and talk?",
        options: ["Nose", "Ears", "Mouth"],
        correctIndex: 2,
        explanation: "We use our mouth to eat and talk!"
    },
    {
        question: "Where is your hair?",
        options: ["On your feet", "On your head", "On your hands"],
        correctIndex: 1,
        explanation: "Hair grows on your head!"
    },
    // MORE BODY PARTS
    {
        question: "How many hands do you have?",
        options: ["One", "Two", "Ten"],
        correctIndex: 1,
        explanation: "You have two hands!"
    },
    {
        question: "How many fingers do you have?",
        options: ["Five", "Eight", "Ten"],
        correctIndex: 2,
        explanation: "You have ten fingers (5 on each hand)!"
    },
    {
        question: "What do you use to walk?",
        options: ["Hands", "Feet", "Head"],
        correctIndex: 1,
        explanation: "We use our feet to walk!"
    },
    // ACTION VERBS
    {
        question: "What do you do with your hands to make sound?",
        options: ["Touch", "Clap", "Wave"],
        correctIndex: 1,
        explanation: "You clap your hands together to make sound!"
    },
    {
        question: "What does 'wiggle' mean?",
        options: ["Lambaikan", "Gerak-gerakkan", "Tepuk"],
        correctIndex: 1,
        explanation: "'Wiggle' means gerak-gerakkan, like wiggling your fingers!"
    },
    {
        question: "What does 'shake' mean?",
        options: ["Goyangkan", "Sentuh", "Tutup"],
        correctIndex: 0,
        explanation: "'Shake' means goyangkan, like shaking your head!"
    },
    // SIMON SAYS RULES
    {
        question: "If the teacher says 'Simon says touch your head', you should...",
        options: ["Do nothing", "Touch your head", "Sit down"],
        correctIndex: 1,
        explanation: "If Simon says it, you DO it!"
    },
    {
        question: "If the teacher says 'Touch your nose' (without 'Simon says'), you should...",
        options: ["Touch your nose", "Do nothing", "Jump"],
        correctIndex: 1,
        explanation: "If there's no 'Simon says', DON'T do it!"
    },
    // DESCRIBING BODY
    {
        question: "Complete: I have _____ eyes.",
        options: ["one", "two", "three"],
        correctIndex: 1,
        explanation: "You have two eyes!"
    },
    {
        question: "Complete: I have _____ fingers.",
        options: ["five", "eight", "ten"],
        correctIndex: 2,
        explanation: "You have ten fingers!"
    },
    {
        question: "Complete: My hair _____ black.",
        options: ["am", "is", "are"],
        correctIndex: 1,
        explanation: "'My hair is black' - use 'is' for singular!"
    },
    {
        question: "Complete: My eyes _____ brown.",
        options: ["am", "is", "are"],
        correctIndex: 2,
        explanation: "'My eyes are brown' - use 'are' for plural!"
    }
];
