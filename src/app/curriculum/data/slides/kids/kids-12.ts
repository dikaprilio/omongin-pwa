import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "School Life 🏫",
        subtitle: "Talking About School",
        teacherNote: "Goal: Anak bisa bercerita tentang kehidupan sekolah mereka menggunakan 'I like...' dan 'I don't like...' dengan kalimat lengkap."
    },
    // SLIDE 2 - ICEBREAKING
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about school! 📚",
        content: [
            "🤔 Do you like going to school? (Suka sekolah?)",
            "📖 What is your favorite subject? (Pelajaran favorit?)",
            "😴 What subject do you not like? (Pelajaran yang tidak disukai?)",
            "👨‍🏫 Who is your favorite teacher? (Guru favorit?)",
            "🎒 What do you bring to school every day? (Bawa apa ke sekolah?)"
        ],
        teacherNote: "Warming up! Ajak anak bercerita tentang pengalaman sekolah mereka. Boleh jawab dalam Bahasa Indonesia dulu, lalu coba terjemahkan ke Inggris."
    },
    // SLIDE 3 - VOCABULARY: SCHOOL SUBJECTS
    {
        type: 'vocabulary',
        title: "School Subjects 📚",
        subtitle: "Mata pelajaran di sekolah",
        vocabulary: [
            { term: "Math", meaning: "Matematika", example: "I study Math every day." },
            { term: "Science", meaning: "Ilmu Pengetahuan Alam", example: "Science is fun! We do experiments." },
            { term: "English", meaning: "Bahasa Inggris", example: "I love learning English." },
            { term: "Indonesian", meaning: "Bahasa Indonesia", example: "We read stories in Indonesian class." },
            { term: "Art", meaning: "Seni / Menggambar", example: "I draw pictures in Art class." },
            { term: "Music", meaning: "Musik", example: "We sing songs in Music class." },
            { term: "PE (Physical Education)", meaning: "Olahraga", example: "We play games in PE." },
            { term: "Social Studies", meaning: "Ilmu Pengetahuan Sosial", example: "We learn about countries in Social Studies." },
            { term: "Computer", meaning: "Komputer", example: "I type on the computer." },
            { term: "Religion", meaning: "Agama", example: "We learn good values in Religion class." }
        ],
        teacherNote: "Tanya anak: 'What subjects do you have at school?' Minta mereka menyebutkan satu per satu."
    },
    // SLIDE 4 - VOCABULARY: SCHOOL PLACES
    {
        type: 'vocabulary',
        title: "Places at School 🏫",
        subtitle: "Tempat-tempat di sekolah",
        vocabulary: [
            { term: "Classroom", meaning: "Ruang kelas", example: "I sit in the classroom." },
            { term: "Library", meaning: "Perpustakaan", example: "I borrow books from the library." },
            { term: "Canteen / Cafeteria", meaning: "Kantin", example: "I buy food at the canteen." },
            { term: "Playground", meaning: "Taman bermain", example: "I play at the playground during break." },
            { term: "Principal's Office", meaning: "Ruang kepala sekolah", example: "The principal works in her office." },
            { term: "Teacher's Room", meaning: "Ruang guru", example: "Teachers drink coffee in the teacher's room." },
            { term: "Hall", meaning: "Aula", example: "We have assembly in the hall." },
            { term: "Laboratory / Lab", meaning: "Laboratorium", example: "We do experiments in the Science Lab." }
        ],
        teacherNote: "Latihan: 'Where do you [activity]?' → 'I [activity] in the [place].'"
    },
    // SLIDE 5 - FORMULA: I LIKE / I DON'T LIKE
    {
        type: 'formula',
        title: "How to Say Like & Dislike",
        subtitle: "Cara mengatakan suka dan tidak suka",
        formula: "I like + noun / I don't like + noun",
        vocabulary: [
            { term: "I like...", meaning: "Saya suka...", example: "I like Math." },
            { term: "I love...", meaning: "Saya sangat suka...", example: "I love PE class!" },
            { term: "I enjoy...", meaning: "Saya menikmati...", example: "I enjoy reading books." },
            { term: "I don't like...", meaning: "Saya tidak suka...", example: "I don't like homework." },
            { term: "I hate...", meaning: "Saya benci...", example: "I hate getting up early." },
            { term: "My favorite is...", meaning: "Favorit saya adalah...", example: "My favorite subject is Art." }
        ],
        teacherNote: "Teach the 'Full Sentence Rule' - jangan cuma jawab 'Math', tapi 'I like Math.' atau 'My favorite subject is Math.'"
    },
    // SLIDE 6 - FORMULA: GIVING REASONS (WHY)
    {
        type: 'formula',
        title: "Giving Reasons (Why?)",
        subtitle: "Memberikan alasan",
        formula: "I like ___ because ___",
        vocabulary: [
            { term: "because it's fun", meaning: "karena menyenangkan", example: "I like PE because it's fun." },
            { term: "because it's easy", meaning: "karena mudah", example: "I like Art because it's easy." },
            { term: "because it's interesting", meaning: "karena menarik", example: "I like Science because it's interesting." },
            { term: "because the teacher is nice", meaning: "karena gurunya baik", example: "I like English because the teacher is nice." },
            { term: "because I like [activity]", meaning: "karena saya suka [aktivitas]", example: "I like Math because I like numbers." }
        ],
        teacherNote: "Encourage anak untuk selalu kasih alasan. 'Why do you like Math?' → 'I like Math because it's easy.'"
    },
    // SLIDE 7 - FORMULA: SCHOOL ACTIVITIES
    {
        type: 'formula',
        title: "School Activities",
        subtitle: "Kegiatan di sekolah",
        formula: "At school, I + verb",
        vocabulary: [
            { term: "study", meaning: "belajar", example: "I study many subjects." },
            { term: "learn", meaning: "mempelajari", example: "I learn new things every day." },
            { term: "read", meaning: "membaca", example: "I read books in the library." },
            { term: "write", meaning: "menulis", example: "I write in my notebook." },
            { term: "draw", meaning: "menggambar", example: "I draw pictures in Art class." },
            { term: "play", meaning: "bermain", example: "I play with my friends at break time." },
            { term: "eat", meaning: "makan", example: "I eat lunch at the canteen." },
            { term: "do homework", meaning: "mengerjakan PR", example: "I do homework every night." }
        ],
        teacherNote: "Latihan: 'What do you do at school?' Minta anak membuat 3 kalimat menggunakan kata-kata ini."
    },
    // SLIDE 8 - COMPARISON: SHORT VS FULL ANSWER
    {
        type: 'comparison',
        title: "Short Answer vs Full Sentence",
        subtitle: "Jawaban pendek vs Kalimat lengkap",
        comparison: [
            { wrong: "Math.", right: "My favorite subject is Math." },
            { wrong: "Like.", right: "I like going to school." },
            { wrong: "Teacher Ana.", right: "My favorite teacher is Teacher Ana." },
            { wrong: "Canteen.", right: "I eat at the canteen." },
            { wrong: "Books.", right: "I like reading books." }
        ],
        teacherNote: "The 'Full Sentence Rule' - ajar anak untuk selalu menjawab dengan kalimat lengkap, bukan cuma satu kata!"
    },
    // SLIDE 9 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Talking About Subjects 📖",
        subtitle: "Teacher asks about school subjects",
        caseStudy: {
            scenario: "Guru bertanya tentang mata pelajaran favorit murid.",
            template: "Teacher: Hi! What's your favorite subject?\nStudent: My favorite subject is Science.\nTeacher: Why do you like Science?\nStudent: I like Science because it's interesting. We do experiments!\nTeacher: What subject don't you like?\nStudent: I don't like Math because it's difficult.\nTeacher: I see! Thank you for sharing."
        },
        teacherNote: "DEMO: Teacher plays the teacher role, pick one student to practice. Ulangi dengan murid lain."
    },
    // SLIDE 10 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: School Day 🎒",
        subtitle: "Talking about what happens at school",
        caseStudy: {
            scenario: "Cerita tentang hari di sekolah.",
            template: "Teacher: What do you do at school?\nStudent: I study many subjects. I read books and write in my notebook.\nTeacher: Where do you eat lunch?\nStudent: I eat lunch at the canteen. I like the food there!\nTeacher: What do you do during break time?\nStudent: I play with my friends at the playground.\nTeacher: That sounds fun!"
        },
        teacherNote: "Latih anak untuk bercerita tentang hari sekolah mereka dengan lebih detail."
    },
    // SLIDE 11 - ROLEPLAY 1: MY FAVORITE SUBJECT
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Favorite Subject 🌟",
        subtitle: "A = Teacher | B = Student",
        caseStudy: {
            scenario: "Guru bertanya tentang pelajaran favorit murid.",
            template: "A: What's your favorite subject?\nB: My favorite subject is _____.\nA: Why do you like _____?\nB: I like _____ because _____.\nA: What subject don't you like?\nB: I don't like _____ because _____."
        },
        teacherNote: "GILIRAN MURID: Pair up students. One as teacher, one as student. Swap roles after finishing."
    },
    // SLIDE 12 - ROLEPLAY 2: AT SCHOOL
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: My School Day 🏫",
        subtitle: "A = Friend | B = You",
        caseStudy: {
            scenario: "Dua teman berbincang tentang kehidupan sekolah.",
            template: "A: What subjects do you have today?\nB: I have _____, _____, and _____.\nA: What do you like to do at school?\nB: I like to _____. I also enjoy _____.\nA: Where do you [activity]?\nB: I [activity] in the _____."
        },
        teacherNote: "Variasi: Ganti aktivitas dan tempat. Latih 'I [verb] in the [place].'"
    },
    // SLIDE 13 - MICRO-DRILL: FULL SENTENCE PRACTICE
    {
        type: 'micro-drill',
        title: "Full Sentence Challenge! 💪",
        subtitle: "Answer with complete sentences",
        mission: [
            "1. What's your favorite subject? → My favorite subject is...",
            "2. Why do you like it? → I like it because...",
            "3. What don't you like? → I don't like...",
            "4. What do you do at school? → I [verb]...",
            "5. Where do you eat? → I eat in/at..."
        ],
        teacherNote: "Rapid fire! Tanya cepat, anak harus jawab dengan kalimat lengkap. Beri poin atau hadiah kecil!"
    },
    // SLIDE 14 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Mata pelajaran favorit", sayThis: "My favorite subject is Math.", dontSayThis: "Math." },
            { context: "Menyatakan suka", sayThis: "I like Science because it's fun.", dontSayThis: "Like Science." },
            { context: "Menyatakan tidak suka", sayThis: "I don't like homework.", dontSayThis: "Don't like." },
            { context: "Kegiatan di sekolah", sayThis: "I study and play at school.", dontSayThis: "Study. Play." },
            { context: "Tempat di sekolah", sayThis: "I read books in the library.", dontSayThis: "Library." }
        ],
        teacherNote: "Review bersama-sama. Tekankan pentingnya 'Full Sentence Rule'."
    },
    // SLIDE 15 - MISSION
    {
        type: 'mission',
        title: "Mission Time! 🎯",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Tell your parents: Ceritakan 3 hal tentang sekolahmu dalam Bahasa Inggris!",
            "2. Full Sentence Practice: Setiap ditanya, jawab dengan kalimat lengkap selama 1 hari!",
            "3. School Tour: Tunjukkan tempat-tempat di sekolahmu dan sebutkan dalam Inggris!"
        ],
        teacherNote: "Encourage anak untuk praktek di rumah. See you next time!"
    }
];

export const quiz: QuizQuestion[] = [
    // VOCABULARY - SUBJECTS
    {
        question: "What subject do we learn numbers in?",
        options: ["Art", "Math", "Music"],
        correctIndex: 1,
        explanation: "We learn numbers and counting in Math class!"
    },
    {
        question: "Where do we do experiments?",
        options: ["Science class", "PE", "Art"],
        correctIndex: 0,
        explanation: "We do experiments in Science class!"
    },
    {
        question: "What subject involves singing songs?",
        options: ["English", "Music", "Math"],
        correctIndex: 1,
        explanation: "We sing songs and learn about instruments in Music class!"
    },
    {
        question: "Where do you play sports and games?",
        options: ["Classroom", "Library", "PE (Physical Education)"],
        correctIndex: 2,
        explanation: "PE stands for Physical Education - that's where we play sports!"
    },
    // VOCABULARY - PLACES
    {
        question: "Where do you borrow books from?",
        options: ["Canteen", "Library", "Playground"],
        correctIndex: 1,
        explanation: "The library is where we borrow and read books!"
    },
    {
        question: "Where do you buy food at school?",
        options: ["Library", "Canteen", "Classroom"],
        correctIndex: 1,
        explanation: "The canteen (or cafeteria) is where we buy and eat food at school."
    },
    {
        question: "Where do you play during break time?",
        options: ["Playground", "Teacher's Room", "Principal's Office"],
        correctIndex: 0,
        explanation: "The playground is where we play during break time!"
    },
    // LIKE / DON'T LIKE
    {
        question: "How do you say 'Saya suka Math'?",
        options: ["I don't like Math.", "I like Math.", "Math I like."],
        correctIndex: 1,
        explanation: "'I like Math' is the correct way to say you like something."
    },
    {
        question: "How do you say 'Saya tidak suka PR'?",
        options: ["I like homework.", "I don't like homework.", "I no like homework."],
        correctIndex: 1,
        explanation: "'I don't like homework' is correct. Use 'don't' for negative."
    },
    {
        question: "What is stronger than 'I like'?",
        options: ["I don't like", "I hate", "I know"],
        correctIndex: 1,
        explanation: "'I love' or 'I hate' are stronger than 'I like'. 'I hate' means you really don't like something."
    },
    // FULL SENTENCE
    {
        question: "Which is a FULL sentence?",
        options: ["Math.", "I like Math.", "Like Math."],
        correctIndex: 1,
        explanation: "'I like Math' is a complete sentence with subject (I) + verb (like) + object (Math)."
    },
    {
        question: "Complete: My favorite subject _____ Science.",
        options: ["is", "are", "am"],
        correctIndex: 0,
        explanation: "Use 'is' for singular subjects like 'My favorite subject'."
    },
    {
        question: "How do you ask about someone's favorite subject?",
        options: ["What your favorite subject?", "What's your favorite subject?", "Your favorite subject is what?"],
        correctIndex: 1,
        explanation: "'What's your favorite subject?' is the correct question form."
    },
    // ACTIVITIES
    {
        question: "What do you do with books?",
        options: ["Write", "Read", "Draw"],
        correctIndex: 1,
        explanation: "We read books! We write in notebooks and draw on paper."
    },
    {
        question: "What do you do in a notebook?",
        options: ["Eat", "Write", "Sleep"],
        correctIndex: 1,
        explanation: "We write in our notebooks at school!"
    },
    {
        question: "Where do students sit and learn?",
        options: ["Playground", "Classroom", "Canteen"],
        correctIndex: 1,
        explanation: "Students sit and learn in the classroom!"
    },
    // GIVING REASONS
    {
        question: "Complete: I like Art _____ it's fun.",
        options: ["because", "so", "and"],
        correctIndex: 0,
        explanation: "Use 'because' to give a reason. 'I like Art because it's fun.'"
    },
    {
        question: "'I like PE because...' - what is a good reason?",
        options: ["it's Monday", "it's fun", "I have a book"],
        correctIndex: 1,
        explanation: "'It's fun' is a good reason for liking something!"
    }
];
