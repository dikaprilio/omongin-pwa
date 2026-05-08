import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "When I Grow Up 👨‍⚕️",
        subtitle: "Talking About Future Dreams & Jobs",
        teacherNote: "Goal: Anak bisa bercerita tentang cita-cita mereka menggunakan 'I want to be a...' dan memberikan alasan dengan percaya diri."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's dream big! 🌟",
        content: [
            "👨‍⚕️ What do you want to be when you grow up? (Cita-citamu apa?)",
            "🤔 Why do you want that job? (Kenapa mau jadi itu?)",
            "👩‍🏫 Who is your role model? (Siapa panutanmu?)",
            "🎨 What are you good at? (Kamu jago apa?)",
            "💪 What do you want to help with? (Kamu mau bantu apa?)"
        ],
        teacherNote: "Warming up! Dreams can change - that's okay! Encourage kids to dream big and be creative."
    },
    // SLIDE 3 - VOCABULARY: JOBS
    {
        type: 'vocabulary',
        title: "Jobs & Professions 👔",
        subtitle: "Pekerjaan dan profesi",
        vocabulary: [
            { term: "Doctor", meaning: "Dokter", example: "Doctors help sick people." },
            { term: "Teacher", meaning: "Guru", example: "Teachers help students learn." },
            { term: "Police Officer", meaning: "Polisi", example: "Police officers keep us safe." },
            { term: "Firefighter", meaning: "Pemadam kebakaran", example: "Firefighters put out fires." },
            { term: "Nurse", meaning: "Perawat", example: "Nurses take care of patients." },
            { term: "Engineer", meaning: "Insinyur", example: "Engineers build things." },
            { term: "Scientist", meaning: "Ilmuwan", example: "Scientists discover new things." },
            { term: "Artist", meaning: "Seniman", example: "Artists create beautiful art." },
            { term: "Musician", meaning: "Musisi", example: "Musicians play music." },
            { term: "Chef / Cook", meaning: "Koki", example: "Chefs cook delicious food." },
            { term: "Pilot", meaning: "Pilot", example: "Pilots fly airplanes." },
            { term: "Astronaut", meaning: "Astronot", example: "Astronauts go to space!" }
        ],
        teacherNote: "Ask: 'Who wants to be a [job]?' Count hands. Discuss what each job does."
    },
    // SLIDE 4 - VOCABULARY: MORE JOBS
    {
        type: 'vocabulary',
        title: "More Cool Jobs 🚀",
        subtitle: "Pekerjaan keren lainnya",
        vocabulary: [
            { term: "Veterinarian", meaning: "Dokter hewan", example: "Vets help sick animals." },
            { term: "Dentist", meaning: "Dokter gigi", example: "Dentists take care of teeth." },
            { term: "Architect", meaning: "Arsitek", example: "Architects design buildings." },
            { term: "Photographer", meaning: "Fotografer", example: "Photographers take photos." },
            { term: "Lawyer", meaning: "Pengacara", example: "Lawyers help people with laws." },
            { term: "Businessman / Businesswoman", meaning: "Pengusaha", example: "Businesspeople run companies." },
            { term: "Journalist", meaning: "Jurnalis", example: "Journalists write news." },
            { term: "Actor / Actress", meaning: "Aktor / Aktris", example: "Actors perform in movies." },
            { term: "Athlete", meaning: "Atlet", example: "Athletes play sports professionally." },
            { term: "Game Developer", meaning: "Pembuat game", example: "Game developers create video games!" },
            { term: "YouTuber", meaning: "YouTuber", example: "YouTubers make videos." },
            { term: "Entrepreneur", meaning: "Wirausahawan", example: "Entrepreneurs start businesses." }
        ],
        teacherNote: "Modern jobs included! Kids today dream of being YouTubers and game developers too."
    },
    // SLIDE 5 - VOCABULARY: JOB ACTIONS
    {
        type: 'vocabulary',
        title: "What Jobs Do 🔧",
        subtitle: "Apa yang dilakukan pekerjaan",
        vocabulary: [
            { term: "help people", meaning: "membantu orang", example: "Doctors help people." },
            { term: "save lives", meaning: "menyelamatkan nyawa", example: "Firefighters save lives." },
            { term: "teach", meaning: "mengajar", example: "Teachers teach students." },
            { term: "build", meaning: "membangun", example: "Engineers build bridges." },
            { term: "create", meaning: "menciptakan", example: "Artists create art." },
            { term: "protect", meaning: "melindungi", example: "Police protect the city." },
            { term: "heal / cure", meaning: "menyembuhkan", example: "Doctors heal sick people." },
            { term: "discover", meaning: "menemukan", example: "Scientists discover new things." },
            { term: "design", meaning: "mendesain", example: "Architects design houses." },
            { term: "invent", meaning: "menciptakan (baru)", example: "Scientists invent new technology." }
        ],
        teacherNote: "Connect jobs to actions. 'What does a doctor do?' → 'A doctor helps people and heals the sick.'"
    },
    // SLIDE 6 - FORMULA: I WANT TO BE
    {
        type: 'formula',
        title: "How to Talk About Your Dream Job",
        subtitle: "Cara berbicara tentang cita-cita",
        formula: "I want to be a [job] because...",
        vocabulary: [
            { term: "I want to be a doctor.", meaning: "Saya ingin jadi dokter.", example: "I want to be a doctor because I like helping people." },
            { term: "I want to be a teacher.", meaning: "Saya ingin jadi guru.", example: "I want to be a teacher because I like teaching." },
            { term: "I would like to be...", meaning: "Saya ingin jadi... (lebih sopan)", example: "I would like to be an engineer." },
            { term: "My dream is to be...", meaning: "Mimpiku adalah jadi...", example: "My dream is to be an astronaut." },
            { term: "I hope to become...", meaning: "Saya berharap menjadi...", example: "I hope to become a scientist." }
        ],
        teacherNote: "Teach the article 'a' or 'an': 'a doctor' but 'an engineer' (vowel sound)."
    },
    // SLIDE 7 - FORMULA: GIVING REASONS
    {
        type: 'formula',
        title: "Giving Reasons (Why?)",
        subtitle: "Memberikan alasan",
        formula: "I want to be a [job] because + reason",
        vocabulary: [
            { term: "because I like helping people", meaning: "karena saya suka membantu orang", example: "I want to be a doctor because I like helping people." },
            { term: "because I love [subject]", meaning: "karena saya suka [pelajaran]", example: "I want to be a scientist because I love Science." },
            { term: "because I'm good at [skill]", meaning: "karena saya jago [skill]", example: "I want to be an artist because I'm good at drawing." },
            { term: "because I want to help animals", meaning: "karena saya mau bantu hewan", example: "I want to be a vet because I want to help animals." },
            { term: "because it's exciting", meaning: "karena itu menarik", example: "I want to be a pilot because it's exciting!" },
            { term: "because I want to make a difference", meaning: "karena saya mau membuat perubahan", example: "I want to be a teacher because I want to make a difference." }
        ],
        teacherNote: "The most important part! Always ask 'Why?' and encourage full sentence answers."
    },
    // SLIDE 8 - FORMULA: WORKPLACE
    {
        type: 'formula',
        title: "Where Do They Work?",
        subtitle: "Di mana mereka bekerja?",
        formula: "A [job] works in/at [place]",
        vocabulary: [
            { term: "Hospital", meaning: "Rumah sakit", example: "Doctors work in hospitals." },
            { term: "School", meaning: "Sekolah", example: "Teachers work in schools." },
            { term: "Police station", meaning: "Kantor polisi", example: "Police officers work at police stations." },
            { term: "Fire station", meaning: "Pemadam kebakaran", example: "Firefighters work at fire stations." },
            { term: "Office", meaning: "Kantor", example: "Businesspeople work in offices." },
            { term: "Restaurant", meaning: "Restoran", example: "Chefs work in restaurants." },
            { term: "Airport", meaning: "Bandara", example: "Pilots work at airports." },
            { term: "Court", meaning: "Pengadilan", example: "Lawyers work in courts." }
        ],
        teacherNote: "Connect jobs to places. 'Where does a doctor work?' → 'In a hospital!'"
    },
    // SLIDE 9 - COMPARISON: WRONG vs RIGHT
    {
        type: 'comparison',
        title: "Common Mistakes",
        subtitle: "Kesalahan umum",
        comparison: [
            { wrong: "I want be a doctor.", right: "I want to be a doctor." },
            { wrong: "I want to be doctor.", right: "I want to be a doctor." },
            { wrong: "I want to be engineer.", right: "I want to be an engineer." },
            { wrong: "I want be teacher because I like teach.", right: "I want to be a teacher because I like teaching." },
            { wrong: "My dream is doctor.", right: "My dream is to be a doctor." }
        ],
        teacherNote: "Key rules: want TO be, use a/an before jobs, -ing after 'like'."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Career Day 🎓",
        subtitle: "Talking about dream jobs",
        caseStudy: {
            scenario: "Bertanya tentang cita-cita teman.",
            template: "A: Hi! What do you want to be when you grow up?\nB: I want to be a doctor!\nA: Wow! Why do you want to be a doctor?\nB: Because I like helping people and I want to heal sick patients.\nA: That's wonderful! Where would you work?\nB: I would work in a big hospital.\nA: I hope your dream comes true!"
        },
        teacherNote: "DEMO: Model enthusiasm and follow-up questions. 'Why?' is the magic question!"
    },
    // SLIDE 11 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Interview with a Role Model 👨‍🚀",
        subtitle: "Asking about someone's job",
        caseStudy: {
            scenario: "Wawancara dengan orang yang sudah bekerja.",
            template: "A: Excuse me, can I ask about your job?\nB: Of course! I'm a scientist.\nA: What do you do as a scientist?\nB: I do experiments and discover new things.\nA: Do you like your job?\nB: Yes, I love it! It's very interesting.\nA: What should I study to be a scientist?\nB: Study hard, especially Science and Math!"
        },
        teacherNote: "Show how to ask polite questions to adults about their careers."
    },
    // SLIDE 12 - ROLEPLAY 1: CAREER INTERVIEW
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Career Interview 🎤",
        subtitle: "A = Interviewer | B = Job Candidate",
        caseStudy: {
            scenario: "Wawancara singkat tentang pekerjaan impian.",
            template: "A: What do you want to be when you grow up?\nB: I want to be a _____.\nA: Why do you want to be a [job]?\nB: Because _____.\nA: Where would you work?\nB: I would work _____.\nA: That's a great dream! Good luck!"
        },
        teacherNote: "GILIRAN MURID: Practice giving reasons with 'because'. Full sentences only!"
    },
    // SLIDE 13 - ROLEPLAY 2: JOB FAIR
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: Job Fair 🏢",
        subtitle: "A = Job Counselor | B = Student",
        caseStudy: {
            scenario: "Konselor membantu siswa memilih pekerjaan.",
            template: "A: What are you good at?\nB: I'm good at _____.\nA: What do you like to do?\nB: I like _____.\nA: Maybe you could be a [job]!\nB: That's a good idea! Why?\nA: Because [job] involves [activity]. Does that sound good?\nB: Yes, I want to learn more about it!"
        },
        teacherNote: "Help kids connect their interests and skills to potential careers."
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Cita-cita", sayThis: "I want to be a doctor.", dontSayThis: "I want be doctor." },
            { context: "Alasan", sayThis: "Because I like helping people.", dontSayThis: "Because like help." },
            { context: "Vowel sound", sayThis: "I want to be an engineer.", dontSayThis: "I want to be a engineer." },
            { context: "Mimpi", sayThis: "My dream is to be a teacher.", dontSayThis: "My dream is teacher." },
            { context: "Tempat kerja", sayThis: "Doctors work in hospitals.", dontSayThis: "Doctors work on hospitals." }
        ],
        teacherNote: "Review together. Always include 'a/an' and use 'want TO be'."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Dream Job Poster: Buat poster tentang cita-citamu dengan gambar dan 3 alasan dalam Inggris!",
            "2. Interview Family: Tanya orang tuamu: 'What do you do? Do you like your job? Why?'",
            "3. Career Research: Pilih 1 pekerjaan, cari tahu: apa yang dilakukan, di mana kerja, butuh skill apa!"
        ],
        teacherNote: "Encourage kids to dream big! There's no wrong answer for what they want to be."
    }
];

export const quiz: QuizQuestion[] = [
    // JOBS VOCABULARY
    {
        question: "Who helps sick people?",
        options: ["Teacher", "Doctor", "Chef"],
        correctIndex: 1,
        explanation: "Doctors help sick people get better!"
    },
    {
        question: "Who teaches students at school?",
        options: ["Doctor", "Police Officer", "Teacher"],
        correctIndex: 2,
        explanation: "Teachers teach students at school!"
    },
    {
        question: "Who puts out fires?",
        options: ["Firefighter", "Doctor", "Chef"],
        correctIndex: 0,
        explanation: "Firefighters put out fires and save people!"
    },
    {
        question: "Who flies airplanes?",
        options: ["Driver", "Pilot", "Teacher"],
        correctIndex: 1,
        explanation: "Pilots fly airplanes!"
    },
    {
        question: "Who helps sick animals?",
        options: ["Doctor", "Veterinarian", "Nurse"],
        correctIndex: 1,
        explanation: "Veterinarians (vets) help sick animals!"
    },
    {
        question: "Who cooks food in restaurants?",
        options: ["Chef", "Teacher", "Doctor"],
        correctIndex: 0,
        explanation: "Chefs cook delicious food in restaurants!"
    },
    // GRAMMAR
    {
        question: "Complete: I want _____ a doctor.",
        options: ["be", "to be", "being"],
        correctIndex: 1,
        explanation: "'I want to be a doctor' - use 'to be' after 'want'."
    },
    {
        question: "Complete: I want to be _____ engineer.",
        options: ["a", "an", "the"],
        correctIndex: 1,
        explanation: "'Engineer' starts with a vowel sound, so use 'an'."
    },
    {
        question: "Complete: I want to be _____ teacher.",
        options: ["a", "an", "the"],
        correctIndex: 0,
        explanation: "'Teacher' starts with a consonant sound, so use 'a'."
    },
    {
        question: "Which is CORRECT?",
        options: ["I want be a doctor.", "I want to be a doctor.", "I want being a doctor."],
        correctIndex: 1,
        explanation: "'I want to be a doctor' is correct. Don't forget 'to'!"
    },
    {
        question: "Complete: My dream is _____ a pilot.",
        options: ["be", "to be", "being"],
        correctIndex: 1,
        explanation: "'My dream is to be a pilot' - use 'to be'."
    },
    // GIVING REASONS
    {
        question: "How do you give a reason?",
        options: ["so", "because", "and"],
        correctIndex: 1,
        explanation: "Use 'because' to give a reason: 'I want to be a doctor because...'"
    },
    {
        question: "Complete: I want to be a teacher _____ I like helping students.",
        options: ["because", "so", "but"],
        correctIndex: 0,
        explanation: "'Because' introduces the reason: 'I want to be a teacher because I like helping students.'"
    },
    // WORKPLACES
    {
        question: "Where does a doctor work?",
        options: ["School", "Hospital", "Restaurant"],
        correctIndex: 1,
        explanation: "Doctors work in hospitals!"
    },
    {
        question: "Where does a teacher work?",
        options: ["Hospital", "School", "Airport"],
        correctIndex: 1,
        explanation: "Teachers work in schools!"
    },
    {
        question: "Where does a chef work?",
        options: ["Hospital", "School", "Restaurant"],
        correctIndex: 2,
        explanation: "Chefs work in restaurants!"
    },
    // JOB ACTIONS
    {
        question: "Doctors _____ sick people.",
        options: ["teach", "help", "cook"],
        correctIndex: 1,
        explanation: "Doctors help sick people!"
    },
    {
        question: "Teachers _____ students.",
        options: ["heal", "teach", "build"],
        correctIndex: 1,
        explanation: "Teachers teach students!"
    },
    {
        question: "Artists _____ beautiful art.",
        options: ["create", "heal", "protect"],
        correctIndex: 0,
        explanation: "Artists create beautiful art!"
    },
    // LIKE + VERB-ING
    {
        question: "Complete: I like _____ people.",
        options: ["help", "helping", "helps"],
        correctIndex: 1,
        explanation: "After 'like', use -ing: 'I like helping people.'"
    },
    {
        question: "Complete: I like _____ (teach).",
        options: ["teach", "teaching", "teaches"],
        correctIndex: 1,
        explanation: "After 'like', use -ing form: 'I like teaching.'"
    }
];
