import type { TopicQuiz } from '../types';

export const quiz: TopicQuiz = {
    topicId: 2,
    path: 'presentation',
    title: "The Big Idea Framework",
    totalQuestions: 30,
    questions: [
        {
            id: "pres-02-001",
            question: "What is the primary goal of a 'Big Idea'?",
            options: ["To show all data", "To deliver one clear and powerful message", "To make slides look pretty", "To talk like a robot"],
            correctIndex: 1,
            explanation: "Pesan yang terfokus jauh lebih mudah diingat daripada tumpukan data (data dump).",
            difficulty: 'easy'
        },
        {
            id: "pres-02-002",
            question: "What is the 'Data Dump Trap'?",
            options: ["Not having enough data", "Trying to show everything to prove you worked hard", "Losing your data in the computer", "Deleting too many slides"],
            correctIndex: 1,
            explanation: "Menunjukkan terlalu banyak data justru menyembunyikan poin utama dan membuat audiens bingung.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-003",
            question: "What does 'WIIFM' stand for?",
            options: ["What If I Fail Manually", "What's In It For Me", "Why Is Focus Mandatory", "Who Is In Front of Me"],
            correctIndex: 1,
            explanation: "Setiap audiens secara tidak sadar bertanya: 'Apa untungnya informasi ini buat saya?'.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-004",
            question: "How do you perform the 'So What?' test?",
            options: ["Check the grammar", "Ask why a point matters until you find the real benefit", "Ask the boss's opinion", "Time your presentation"],
            correctIndex: 1,
            explanation: "Tes ini membantu menemukan nilai nyata dari informasi Anda bagi audiens.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-005",
            question: "Which of these is a 'Strong' message?",
            options: ["Sales update for Q4.", "We increased our revenue by 20% in Q4.", "A list of Q4 customers.", "Our Q4 meetings were productive."],
            correctIndex: 1,
            explanation: "Pesan yang kuat berfokus pada hasil dan manfaat, bukan sekadar label atau judul.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-006",
            question: "In the Big Idea Formula, what usually follows the 'Subject'?",
            options: ["Date and Time", "Action or Benefit", "A long list of names", "A thank you note"],
            correctIndex: 1,
            explanation: "Rumusnya adalah: [Subjek] + [Aksi/Manfaat].",
            difficulty: 'easy'
        },
        {
            id: "pres-02-007",
            question: "What should you do with a 'cool' data point that doesn't support your Big Idea?",
            options: ["Keep it anyway", "Remove it or put it in the Appendix", "Change your Big Idea", "Make it the center of the talk"],
            correctIndex: 1,
            explanation: "Jika data tersebut tidak mendukung pesan utama, maka itu adalah gangguan (Noise).",
            difficulty: 'medium'
        },
        {
            id: "pres-02-008",
            question: "Which quality makes a Big Idea 'easy to remember'?",
            options: ["Complexity", "Length", "Brevity/One-breath rule", "Technical jargon"],
            correctIndex: 2,
            explanation: "Jika sebuah ide bisa diucapkan dalam satu napas, audiens lebih mungkin untuk mengingatnya.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-009",
            question: "What is an 'Elevator Pitch'?",
            options: ["A pitch given in a slow elevator", "A 30-60 second summary of your core idea", "A long business proposal", "A list of elevator safety rules"],
            correctIndex: 1,
            explanation: "Ini meniru pertemuan singkat di lift di mana Anda hanya punya waktu detik untuk memberikan dampak.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-010",
            question: "Why should you rename your slide titles to be 'Results'?",
            options: ["To use more words", "To answer the audience's 'So What?' immediately", "To hide the data", "Because it's a rule of grammar"],
            correctIndex: 1,
            explanation: "Judul yang berorientasi pada hasil membantu audiens memahami kesimpulan slide tersebut secara instan.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-011",
            question: "A 'Low Power' presentation is usually characterized by...",
            options: ["Clarity", "Too many bullet points and data dumping", "Strong visuals", "Confident delivery"],
            correctIndex: 1,
            explanation: "Membanjiri audiens dengan poin-poin adalah tanda kurangnya fokus dari pembicara.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-012",
            question: "The analogy 'Bullets vs Sand' means...",
            options: ["Presentations are dangerous", "One focused message penetrates; scattered info just makes a mess", "Slides should be brown", "Use sand timers"],
            correctIndex: 1,
            explanation: "Fokus (peluru) adalah kunci dari dampak sebuah pesan.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-013",
            question: "A Big Idea should have a 'Point of View'. This means it should be...",
            options: ["Neutral", "Opinionated or result-driven", "Confusing", "Invisible"],
            correctIndex: 1,
            explanation: "Tugas pembicara adalah membimbing audiens ke sebuah kesimpulan atau perspektif tertentu.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-014",
            question: "If your Big Idea focuses on 'Saving Time', your slides should...",
            options: ["Be very long", "Show exactly how and where time is saved", "List all employees", "Talk about history"],
            correctIndex: 1,
            explanation: "Semua konten harus selaras dan mendukung janji utama presentasi tersebut.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-015",
            question: "Which mindset change is required for 'Clarity'?",
            options: ["Show off more", "Think about the audience's needs first", "Use more colors", "Talk faster"],
            correctIndex: 1,
            explanation: "Kejelasan datang dari memprioritaskan kebutuhan dan manfaat bagi audiens.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-016",
            question: "Why is 'January Marketing Report' a weak title?",
            options: ["It's too short", "It's just a label, not an idea or result", "It's in English", "It doesn't have a date"],
            correctIndex: 1,
            explanation: "Label tidak memberi tahu audiens apa yang harus mereka pikirkan atau lakukan.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-017",
            question: "The 'So What?' for 'New Office Coffee Machine' could be...",
            options: ["We spent $500", "Higher employee energy and productivity", "The machine is black", "It's located in the kitchen"],
            correctIndex: 1,
            explanation: "Produktivitas adalah nilai nyata bagi perusahaan, bukan sekadar mesin kopinya.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-018",
            question: "A 'Message Anchor' helps the presenter by...",
            options: ["Acting as a weight", "Keeping the talk focused on the main point", "Making the talk longer", "Replacing the slides"],
            correctIndex: 1,
            explanation: "Ini memastikan Anda tidak 'melantur' ke detail-detail yang tidak relevan.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-019",
            question: "The first step of the Big Idea Formula is identifying...",
            options: ["The colors", "The target audience", "The font size", "The snacks"],
            correctIndex: 1,
            explanation: "Anda tidak bisa membuat ide yang relevan jika tidak tahu siapa yang Anda ajak bicara.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-020",
            question: "How should you treat 'Interesting' but 'Not Vital' information?",
            options: ["Add it to a bonus slide", "Keep it in the main flow", "Talk about it for 10 minutes", "Add it to the title"],
            correctIndex: 0,
            explanation: "Jaga alur utama tetap ramping; informasi sekunder bisa ditaruh di sesi tanya jawab atau lampiran.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-021",
            question: "A professional presenter is measured by...",
            options: ["How many slides they have", "How much information they can remove while keeping the core message", "How many jokes they tell", "How loud they shout"],
            correctIndex: 1,
            explanation: "Kemampuan menyederhanakan dan mengedit adalah ciri seorang pakar.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-022",
            question: "In a 30-second pitch, what should you avoid?",
            options: ["Eye contact", "Listing every small detail or step", "The main result", "Confidence"],
            correctIndex: 1,
            explanation: "Detail teknis memakan waktu dan mengaburkan fokus dari pesan utama yang singkat.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-023",
            question: "Why is a 'One-Sentence' Big Idea effective?",
            options: ["It saves paper", "It's easy for the audience to repeat to others", "It's a secret code", "It's faster to write"],
            correctIndex: 1,
            explanation: "Jika sebuah ide tidak bisa dijelaskan dalam satu kalimat, berarti ide tersebut belum cukup sederhana.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-024",
            question: "The 'Audience Filter' means...",
            options: ["Deleting the audience", "Only saying things that are valuable to them", "Asking them to be quiet", "Recording them"],
            correctIndex: 1,
            explanation: "Menyesuaikan setiap poin untuk memenuhi kebutuhan dan minat audiens.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-025",
            question: "What is 'Clarity'?",
            options: ["Being loud", "Being simple and easy to understand", "Being complicated", "Using many words"],
            correctIndex: 1,
            explanation: "Clarity (kejelasan) adalah proses menghilangkan kebingungan.",
            difficulty: 'easy'
        },
        {
            id: "pres-02-026",
            question: "Which of these Big Ideas focuses on the 'Future'?",
            options: ["We failed the goal yesterday.", "Our team worked 10 hours.", "Next month, we will launch a more efficient system.", "The history of our team."],
            correctIndex: 2,
            explanation: "Presentasi yang efektif membimbing audiens menuju tindakan atau hasil di masa depan.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-027",
            question: "What does 'Subject + Action' provide to a message?",
            options: ["A noun", "Oversimplification", "A clear direction and impact", "Confusion"],
            correctIndex: 2,
            explanation: "Ini memberi tahu audiens SIAPA yang melakukan APA untuk MENCAPAI hasil tertentu.",
            difficulty: 'hard'
        },
        {
            id: "pres-02-028",
            question: "A presentation without a Big Idea is like...",
            options: ["A boat without a motor", "A compass without a needle", "A race without a finish line", "All of the above"],
            correctIndex: 3,
            explanation: "Presentasi tanpa pesan inti tidak punya arah, tujuan, atau titik akhir yang jelas.",
            difficulty: 'hard'
        },
        {
            id: "pres-02-029",
            question: "How can you practice the 'One-Breath Rule'?",
            options: ["Hold your breath for a minute", "Try to say your Big Idea out loud in one exhale", "Stop breathing", "Talk underwater"],
            correctIndex: 1,
            explanation: "Jika Anda kehabisan napas, berarti Big Idea Anda terlalu panjang dan perlu diedit.",
            difficulty: 'medium'
        },
        {
            id: "pres-02-030",
            question: "The 'Big Idea' framework is best used for...",
            options: ["Convincing stakeholders or bosses", "Listing ingredients", "Reading the news", "Writing a poem"],
            correctIndex: 0,
            explanation: "Metode ini dirancang untuk komunikasi profesional berdampak tinggi di mana waktu sangat berharga.",
            difficulty: 'easy'
        }
    ]
};
