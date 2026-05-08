import type { Slide, QuizQuestion } from "../../types";

export const slides: Slide[] = [
    // ==================== PHASE 1: OPENING & THE HOOK (4 slides) ====================
    {
        type: 'title',
        title: "The S-P-O Rule 🧩",
        subtitle: "Subject - Predicate - Object Logic",
        teacherNote: "Sambut siswa dengan energi positif. Tekankan bahwa grammar itu LOGIKA, bukan hafalan."
    },
    {
        type: 'concept',
        title: "Kenapa Ini Penting?",
        content: [
            "❌ Tanpa S-P-O: 'I chicken eat' → orang Inggris bingung!",
            "✅ Dengan S-P-O: 'I eat chicken' → langsung dimengerti!",
            "80% kalimat bahasa Inggris menggunakan pola S-P-O",
            "Master S-P-O = Bisa membuat kalimat yang jelas dan benar"
        ],
        teacherNote: "Beri contoh nyata: pesan makanan, cerita kegiatan, deskripsi orang."
    },
    {
        type: 'concept',
        title: "Masalahnya: Bahasa Indonesia vs Inggris",
        content: [
            "🇮🇩 Bahasa Indonesia: Fleksibel! 'Saya makan ayam' / 'Ayam saya makan' / 'Makan ayam saya'",
            "🇬🇧 Bahasa Inggris: KAKU! HANYA 'S-P-O' yang benar!",
            "❌ 'I chicken eat' → ❌ 'Eat I chicken' → ✅ 'I eat chicken'",
            "💡 Kunci: Inggris PAKAI URUTAN untuk memahami makna"
        ],
        teacherNote: "Jelaskan perbedaan fundamental ini. Bahasa Indonesia pakai imbuhan, Inggris pakai urutan."
    },
    {
        type: 'comparison',
        title: "Kesalahan Umum yang Sering Terjadi",
        comparison: [
            { wrong: "I chicken eat every day.", right: "I eat chicken every day." },
            { wrong: "She book read in library.", right: "She reads books in the library." },
            { wrong: "They movie watch last night.", right: "They watched a movie last night." },
            { wrong: "He coffee drink morning.", right: "He drinks coffee in the morning." }
        ],
        teacherNote: "Minta siswa identifikasi pola: mana yang S-P-O dan mana yang acak."
    },

    // ==================== PHASE 2: UNDERSTANDING SUBJECT (5 slides) ====================
    {
        type: 'concept',
        title: "📍 SUBJECT (S) - Siapa yang Beraksi?",
        content: [
            "Subject = Pelaku utama dalam kalimat",
            "Biasanya: orang, hewan, benda, atau konsep",
            "Position: SELALU di AWAL kalimat (99% kasus)",
            "Tanya: 'Siapa yang...?' atau 'Apa yang...?'"
        ],
        teacherNote: "Tekankan posisi subject - ini beda dengan bahasa Indonesia."
    },
    {
        type: 'vocabulary',
        title: "Jenis-Jenis Subject",
        vocabulary: [
            { term: "Pronouns (Kata Ganti)", meaning: "I, You, He, She, It, We, They", example: "She walks to school." },
            { term: "Proper Nouns (Nama)", meaning: "Nama orang, tempat, brand", example: "Budi plays guitar. / Jakarta is big." },
            { term: "Common Nouns (Benda)", meaning: "Kata benda umum", example: "The cat sleeps. / A car stops." },
            { term: "Compound Subject", meaning: "Subject gabungan", example: "My brother and I go to school." }
        ],
        teacherNote: "Berikan contoh lisan untuk setiap jenis."
    },
    {
        type: 'formula',
        title: "Cara Menemukan Subject",
        formula: "Tanyakan: SIAPA yang melakukan verb ini?",
        content: [
            "📖 Contoh: 'My mother cooks dinner'",
            "❓ Siapa yang cooks? → My mother",
            "✅ Subject = My mother",
            "💡 Tip: Subject bisa terdiri dari beberapa kata (My little brother)"
        ],
        teacherNote: "Latih dengan contoh: 'The tall man in the blue shirt drives a car.' Subject-nya panjang!"
    },
    {
        type: 'comparison',
        title: "Subject yang Hilang ❌ → ✅",
        comparison: [
            { wrong: "Is reading a book. (Siapa?)", right: "She is reading a book." },
            { wrong: "Went to school yesterday.", right: "They went to school yesterday." },
            { wrong: "Likes to play football.", right: "My brother likes to play football." },
            { wrong: "Are very expensive.", right: "These shoes are very expensive." }
        ],
        teacherNote: "Setiap kalimat Inggris WAJIB punya subject yang jelas."
    },
    {
        type: 'micro-drill',
        title: "Drill: Temukan Subject-nya! 🎯",
        subtitle: "Identifikasi subject dalam setiap kalimat",
        mission: [
            "'The students study English.' → Subject: The students",
            "'My father works in Jakarta.' → Subject: My father",
            "'A big dog runs in the park.' → Subject: A big dog",
            "'She and I go to the cinema.' → Subject: She and I",
            "'Reading books is fun.' → Subject: Reading books"
        ],
        teacherNote: "Jawaban: 1. The students 2. My father 3. A big dog 4. She and I 5. Reading books"
    },

    // ==================== PHASE 3: UNDERSTANDING PREDICATE (4 slides) ====================
    {
        type: 'concept',
        title: "⚡ PREDICATE (P) - Apa yang Dilakukan?",
        content: [
            "Predicate = Kata kerja (Verb) + informasi tambahan",
            "Menjelaskan APA yang dilakukan subject",
            "Position: SELALU setelah Subject",
            "Tanya: 'Melakukan apa?' atau 'Bagaimana keadaannya?'"
        ],
        teacherNote: "Jelaskan bahwa predicate paling sering berupa kata kerja."
    },
    {
        type: 'vocabulary',
        title: "Jenis-Jenis Verb (Kata Kerja)",
        vocabulary: [
            { term: "Action Verbs", meaning: "Menunjukkan aksi fisik/mental", example: "eat, run, think, write, read" },
            { term: "State Verbs", meaning: "Menunjukkan keadaan/pikiran", example: "know, like, want, need, love" },
            { term: "Linking Verbs", meaning: "Menghubungkan subject dengan deskripsi", example: "is, am, are, was, were, become" },
            { term: "Helping Verbs", meaning: "Membantu membentuk tense", example: "have, has, do, does, did, will" }
        ],
        teacherNote: "Fokus pada Action Verbs dan Linking Verbs untuk level ini."
    },
    {
        type: 'comparison',
        title: "To Be vs Action Verb: Jangan Campur!",
        comparison: [
            { wrong: "I am eat rice.", right: "I eat rice. (Action verb)" },
            { wrong: "She is works here.", right: "She works here. (Action verb)" },
            { wrong: "They are go to school.", right: "They go to school. (Action verb)" },
            { wrong: "He happy. (Tanpa verb)", right: "He is happy. (To be + adjective)" }
        ],
        teacherNote: "Ini kesalahan paling umum! To be dan action verb tidak bisa bareng."
    },
    {
        type: 'micro-drill',
        title: "Drill: Pilih To Be atau Action Verb? 🤔",
        subtitle: "Pilih kata yang tepat untuk melengkapi kalimat",
        mission: [
            "'She _____ a teacher.' → is (keadaan)",
            "'They _____ to the gym every day.' → go (aksi)",
            "'I _____ hungry right now.' → am (keadaan)",
            "'He _____ English with me.' → studies (aksi)",
            "'We _____ in the classroom.' → are (keadaan)"
        ],
        teacherNote: "Jawaban: 1. is 2. go 3. am 4. studies 5. are. Jelaskan bedanya: keadaan vs aksi."
    },

    // ==================== PHASE 4: UNDERSTANDING OBJECT (4 slides) ====================
    {
        type: 'concept',
        title: "🎯 OBJECT (O) - Siapa/Apa yang Dikenai?",
        content: [
            "Object = Benda/orang yang menerima aksi dari verb",
            "TIDAK SEMUA kalimat punya object (intransitive verbs)",
            "Position: Setelah Verb",
            "Tanya: 'Melakukan apa kepada siapa/apa?'"
        ],
        teacherNote: "Jelaskan transitive vs intransitive dengan contoh konkret."
    },
    {
        type: 'vocabulary',
        title: "Jenis-Jenis Object",
        vocabulary: [
            { term: "Direct Object", meaning: "Langsung dikenai aksi verb", example: "I eat rice. (rice = direct object)" },
            { term: "Indirect Object", meaning: "Menerima direct object", example: "She gives me a book. (me = indirect)" },
            { term: "Object of Preposition", meaning: "Setelah kata depan", example: "He looks at the sky. (sky = obj of prep)" },
            { term: "No Object (Intransitive)", meaning: "Verb yang tidak butuh object", example: "He sleeps. / They arrive." }
        ],
        teacherNote: "Untuk level basic, fokus pada Direct Object dulu."
    },
    {
        type: 'comparison',
        title: "Dengan Object vs Tanpa Object",
        comparison: [
            { wrong: "She eats. (Kurang jelas)", right: "She eats rice. / She eats an apple." },
            { wrong: "I read. (Terlalu umum)", right: "I read a book. / I read the news." },
            { wrong: "He writes. (Nggak lengkap)", right: "He writes a letter. / He writes emails." },
            { wrong: "They play. (Main apa?)", right: "They play football. / They play chess." }
        ],
        teacherNote: "Jelaskan kapan object diperlukan untuk membuat kalimat jelas."
    },
    {
        type: 'formula',
        title: "Rumus Lengkap S-P-O",
        formula: "Subject + Verb + (Object)",
        content: [
            "📖 Contoh lengkap:",
            "'The diligent student (S) writes (V) homework (O).'",
            "'My little sister (S) sleeps (V). [no object]'",
            "'We (S) learn (V) English (O) every day.'",
            "💡 Object opsional, tapi sering dibutuhkan untuk kejelasan"
        ],
        teacherNote: "Latih siswa membedakan verb yang butuh object dan yang tidak."
    },

    // ==================== PHASE 5: BUILDING COMPLETE SENTENCES (4 slides) ====================
    {
        type: 'concept',
        title: "Merakit Kalimat Lengkap 🧩",
        content: [
            "Langkah 1: Tentukan SIAPA yang berbicara (Subject)",
            "Langkah 2: Tentukan APA yang dilakukan (Verb)",
            "Langkah 3: Tentukan APA yang dikenai (Object - jika perlu)",
            "Langkah 4: Susun: S + V + O + (keterangan tambahan)"
        ],
        teacherNote: "Gunakan pendekatan step-by-step ini untuk pemula."
    },
    {
        type: 'micro-drill',
        title: "Drill: Susun Kalimat! 🔧",
        subtitle: "Susun kata-kata acak menjadi kalimat S-P-O yang benar",
        mission: [
            "my sister / a cake / bakes → My sister bakes a cake.",
            "football / play / every weekend / They → They play football every weekend.",
            "reads / in the library / The student / books → The student reads books in the library.",
            "my mother / cooks / delicious food / always → My mother always cooks delicious food.",
            "We / to school / walk / every morning → We walk to school every morning."
        ],
        teacherNote: "Jawaban: 1. My sister bakes a cake. 2. They play football every weekend. 3. The student reads books in the library. 4. My mother always cooks delicious food. 5. We walk to school every morning."
    },
    {
        type: 'case-study',
        title: "Contoh Situasi: Pesan di Restoran 🍽️",
        subtitle: "Bagaimana S-P-O membantu komunikasi sehari-hari",
        caseStudy: {
            scenario: "Situasi: Kamu ingin memesan makanan. Temanmu bilang: 'I chicken rice want.' Pelayan bingung. Kenapa? Karena urutan kata salah!",
            template: "✅ Kalimat yang benar:\n'I want chicken rice.' (S + V + O)\natau\n'I would like to order chicken rice, please.'"
        },
        teacherNote: "Diskusikan situasi nyata di mana S-P-O penting untuk komunikasi efektif."
    },
    {
        type: 'roleplay',
        title: "Latihan Bersama: Perbaiki Kalimat! 🎭",
        subtitle: "Kerjakan bersama pasanganmu",
        caseStudy: {
            scenario: "Perbaiki kalimat-kalimat berikut menjadi S-P-O yang benar:",
            template: "A: Every day gym go I.\nB: I go to the gym every day.\n\nA: Computer my brother fixes.\nB: My brother fixes the computer.\n\nA: Delicious makes mother cooking.\nB: Mother makes delicious cooking.\n\nA: School to walk we together.\nB: We walk to school together.\n\nA: Books reads she library in.\nB: She reads books in the library."
        },
        teacherNote: "Beri waktu 5 menit. Siswa kerjakan berpasangan A dan B, kemudian presentasikan."
    },

    // ==================== PHASE 6: ADVANCED & REVIEW (4 slides) ====================
    {
        type: 'formula',
        title: "Variasi Pola S-P-O (Advanced) 📐",
        formula: "(Adjunct) + S + (Adverb) + V + (O) + (Adjunct)",
        content: [
            "Adjunct = keterangan waktu/tempat (opsional, bisa di awal/akhir)",
            "Contoh: 'Every morning, my father carefully drives his car to work.'",
            "Urutan: Every morning (Adjunct) + my father (S) + carefully (Adv) + drives (V) + his car (O) + to work (Adjunct)",
            "💡 Position adalah KUNCI dalam bahasa Inggris!"
        ],
        teacherNote: "Tunjukkan bahwa S-P-O tetap di tengah meski ada tambahan info."
    },
    {
        type: 'micro-drill',
        title: "Final Challenge: Error Correction Master! 🏆",
        subtitle: "Perbaiki kesalahan pada kalimat berikut",
        mission: [
            "❌ 'Is studying in the library.' → ✅ 'She is studying in the library.'",
            "❌ 'My sister in the garden.' → ✅ 'My sister is in the garden.'",
            "❌ 'The children plays football.' → ✅ 'The children play football.'",
            "❌ 'I am goes to school.' → ✅ 'I go to school.'",
            "❌ 'Eats he rice every day.' → ✅ 'He eats rice every day.'"
        ],
        teacherNote: "Review semua konsep: missing subject, to be vs verb, word order."
    },
    {
        type: 'recap',
        title: "Ringkasan Lengkap: S-P-O Rule 📝",
        recap: [
            { context: "Kalimat tanpa Subject", sayThis: "Tambahkan subjek yang jelas", dontSayThis: "Is raining / Went to school" },
            { context: "Kalimat tanpa Verb", sayThis: "Tambahkan verb yang tepat", dontSayThis: "He happy / She a doctor" },
            { context: "Urutan kata", sayThis: "S + V + O", dontSayThis: "I chicken eat" },
            { context: "To Be + Verb", sayThis: "Pilih salah satu", dontSayThis: "I am eat / She is works" },
            { context: "Verb tunggal/jamak", sayThis: "She eats / They eat", dontSayThis: "She eat / They eats" }
        ],
        teacherNote: "Ingatkan siswa untuk mengingat 5 poin kunci ini."
    },
    {
        type: 'mission',
        title: "Tugas Mandiri: S-P-O Mastery 📚",
        mission: [
            "Buat 15 kalimat dengan pola S + V + O (tulis di buku)",
            "Tandai Subject dengan warna biru, Verb dengan merah, Object dengan hijau",
            "Temukan 10 kalimat 'acak' di media sosial/news, susun ulang menjadi S-P-O yang benar",
            "Record diri kamu membacakan 5 kalimat S-P-O, kirim ke grup kelas"
        ],
        teacherNote: "Berikan deadline dan format pengumpulan yang jelas."
    },
    {
        type: 'title',
        title: "Kerja Bagus! 🎉",
        subtitle: "Kamu sudah menguasai dasar S-P-O!",
        teacherNote: "Beri apresiasi. Preview next meeting: To Be vs Verb lebih detail."
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: "Manakah kalimat yang BENAR menggunakan pola S-P-O?",
        options: [
            "Is reading a book.",
            "She is reading a book.",
            "Reading a book she is.",
            "A book is reading she."
        ],
        correctIndex: 1,
        explanation: "Kalimat bahasa Inggris WAJIB punya subjek di awal. 'She' adalah subjek yang benar."
    },
    {
        question: "Pilih kalimat dengan Subject, Verb, dan Object yang lengkap:",
        options: [
            "Went to school.",
            "They went to school.",
            "To school went they.",
            "School went to."
        ],
        correctIndex: 1,
        explanation: "'They' (S) + 'went' (V) + 'to school' (O) adalah struktur yang lengkap dan benar."
    },
    {
        question: "Perbaiki kalimat: 'Very beautiful girl.'",
        options: [
            "Is very beautiful girl.",
            "She is a very beautiful girl.",
            "A very beautiful girl she.",
            "Beautiful girl very is."
        ],
        correctIndex: 1,
        explanation: "Kalimat butuh Subjek (She) dan Verb (is) agar lengkap. 'A very beautiful girl' adalah complement."
    },
    {
        question: "Subject dalam kalimat 'My mother cooks dinner' adalah:",
        options: ["My", "My mother", "cooks", "dinner"],
        correctIndex: 1,
        explanation: "'My mother' adalah pelaku kalimat (Subject) yang melakukan aksi 'cooks'."
    },
    {
        question: "Verb dalam kalimat 'The students study English' adalah:",
        options: ["The", "students", "study", "English"],
        correctIndex: 2,
        explanation: "'study' adalah kata kerja (Verb) yang menunjukkan aksi yang dilakukan subject."
    },
    {
        question: "Object dalam kalimat 'He reads a newspaper' adalah:",
        options: ["He", "reads", "a", "a newspaper"],
        correctIndex: 3,
        explanation: "'a newspaper' adalah Object (benda yang dikenai aksi membaca)."
    },
    {
        question: "Perbaiki: 'Raining outside.'",
        options: [
            "Is raining outside.",
            "It raining outside.",
            "It is raining outside.",
            "Outside is raining."
        ],
        correctIndex: 2,
        explanation: "Untuk cuaca, gunakan 'It' sebagai subjek: 'It is raining outside.'"
    },
    {
        question: "Kalimat mana yang TIDAK punya Object?",
        options: [
            "She eats rice.",
            "He sleeps.",
            "They watch TV.",
            "I love you."
        ],
        correctIndex: 1,
        explanation: "'He sleeps' menggunakan intransitive verb (tidak butuh object)."
    },
    {
        question: "Pilih pola S-P-O yang benar:",
        options: [
            "Plays football Tom every day.",
            "Every day Tom plays football.",
            "Football plays Tom every day.",
            "Tom every day football plays."
        ],
        correctIndex: 1,
        explanation: "'Every day' (keterangan waktu) bisa di awal, 'Tom' (S), 'plays' (V), 'football' (O)."
    },
    {
        question: "Apa fungsi 'there' dalam 'There is a book'?",
        options: ["Subjek", "Verb", "Object", "Kata penghubung"],
        correctIndex: 0,
        explanation: "'There' berfungsi sebagai subjek palsu (existential there) untuk menunjukkan keberadaan."
    },
    {
        question: "Perbaiki: 'In the kitchen.'",
        options: [
            "Mother is in the kitchen.",
            "In the kitchen mother.",
            "The kitchen in is mother.",
            "Is in the kitchen."
        ],
        correctIndex: 0,
        explanation: "Tambahkan subjek (Mother) dan verb (is) untuk melengkapi kalimat."
    },
    {
        question: "Kalimat: 'We happy today.' — Apa yang kurang?",
        options: ["Subjek", "Verb", "Object", "Tidak ada yang kurang"],
        correctIndex: 1,
        explanation: "Kurang verb 'are'. Seharusnya: 'We are happy today.'"
    },
    {
        question: "Manakah yang merupakan subjek?",
        options: ["Run", "Quickly", "The tall boy", "Beautiful"],
        correctIndex: 2,
        explanation: "'The tall boy' adalah frasa nomina yang bisa menjadi subjek kalimat."
    },
    {
        question: "Pola kalimat: 'The sun rises in the east'",
        options: ["S-V", "S-V-O", "S-V-Adj", "V-S-O"],
        correctIndex: 0,
        explanation: "'The sun' (S) + 'rises' (V). 'In the east' adalah keterangan tempat, bukan object."
    },
    {
        question: "Perbaiki: 'My sister in Bandung.'",
        options: [
            "My sister is in Bandung.",
            "Is my sister in Bandung.",
            "In Bandung my sister.",
            "My sister Bandung in."
        ],
        correctIndex: 0,
        explanation: "Tambahkan linking verb 'is' untuk melengkapi kalimat tentang keadaan/lokasi."
    },
    {
        question: "Kalimat: 'John gives Mary a book.' — Object-nya adalah:",
        options: ["John", "gives", "Mary", "a book"],
        correctIndex: 3,
        explanation: "Dalam kalimat ini, 'a book' adalah direct object. 'Mary' adalah indirect object."
    },
    {
        question: "Apa subjek dalam 'It is 10 o'clock'?",
        options: ["It", "is", "10 o'clock", "Tidak ada subjek"],
        correctIndex: 0,
        explanation: "'It' digunakan sebagai subjek untuk waktu dalam bahasa Inggris."
    },
    {
        question: "Pilih yang BUKAN subjek:",
        options: ["The cat", "Running fast", "She", "Those students"],
        correctIndex: 1,
        explanation: "'Running fast' adalah frasa verbal (verb phrase), bukan subjek."
    },
    {
        question: "Kalimat: 'Birds fly.' mengikuti pola:",
        options: ["S-V-O", "S-V", "V-S", "O-V-S"],
        correctIndex: 1,
        explanation: "'Birds' (S) + 'fly' (V). Ini adalah S-V pattern karena 'fly' adalah intransitive verb."
    },
    {
        question: "Perbaiki: 'Swimming in the pool.'",
        options: [
            "They are swimming in the pool.",
            "Swimming they are in the pool.",
            "In the pool swimming.",
            "Are swimming in the pool."
        ],
        correctIndex: 0,
        explanation: "Tambahkan subjek (They) dan to be (are) untuk melengkapi kalimat."
    },
    {
        question: "Susun: 'every day / coffee / drinks / She'",
        options: [
            "Every day drinks coffee she.",
            "She every day coffee drinks.",
            "She drinks coffee every day.",
            "Coffee she drinks every day."
        ],
        correctIndex: 2,
        explanation: "S (She) + V (drinks) + O (coffee) + Adjunct (every day)"
    },
    {
        question: "Mana yang menggunakan To Be dengan benar?",
        options: [
            "I am agree with you.",
            "She is works at a bank.",
            "They are students.",
            "He is goes to school."
        ],
        correctIndex: 2,
        explanation: "'They are students' benar karena to be (are) diikuti oleh noun (students)."
    },
    {
        question: "Kalimat: 'The diligent student writes carefully.' — Object-nya?",
        options: ["The diligent student", "writes", "carefully", "Tidak ada object"],
        correctIndex: 3,
        explanation: "Kalimat ini tidak memiliki object. 'carefully' adalah adverb (keterangan)."
    },
    {
        question: "Pilih kalimat yang lengkap dan benar:",
        options: [
            "My brother playing guitar.",
            "My brother is playing guitar.",
            "Is playing guitar my brother.",
            "Playing my brother guitar."
        ],
        correctIndex: 1,
        explanation: "'My brother' (S) + 'is playing' (V - present continuous) + 'guitar' (O)"
    },
    {
        question: "Apa kesalahan dalam: 'She can speaks English'?",
        options: [
            "Subjek salah",
            "Object salah",
            "Verb berlebihan (can + speaks)",
            "Urutan kata salah"
        ],
        correctIndex: 2,
        explanation: "Setelah modal verb (can, will, must) gunakan verb dasar (speak), bukan speaks."
    },
    {
        question: "Susun kalimat: 'to school / walks / My little sister / every morning'",
        options: [
            "Every morning to school walks my little sister.",
            "My little sister walks to school every morning.",
            "Walks my little sister to school every morning.",
            "To school my little sister walks every morning."
        ],
        correctIndex: 1,
        explanation: "S (My little sister) + V (walks) + O/adjunct (to school) + adjunct (every morning)"
    },
    {
        question: "Mana yang menunjukkan Subject + Verb + Object + Object?",
        options: [
            "She gives him a pen.",
            "He runs fast.",
            "They are happy.",
            "I sleep well."
        ],
        correctIndex: 0,
        explanation: "'She' (S) + 'gives' (V) + 'him' (indirect object) + 'a pen' (direct object)"
    },
    {
        question: "Identifikasi: 'My father and I go to the market every Sunday'",
        options: [
            "S: My father / V: and I go / O: to the market",
            "S: My father and I / V: go / O: to the market",
            "S: My / V: father and I go / O: to the market",
            "S: I / V: go / O: My father and to the market"
        ],
        correctIndex: 1,
        explanation: "Subject: 'My father and I' (compound subject), Verb: 'go', Object/adjunct: 'to the market'"
    },
    {
        question: "Kalimat: 'Reading books is fun.' — Subject-nya adalah:",
        options: [
            "Reading",
            "Reading books",
            "books",
            "fun"
        ],
        correctIndex: 1,
        explanation: "'Reading books' adalah gerund phrase yang berfungsi sebagai subject kalimat."
    },
    {
        question: "Perbaiki: 'The children is playing in the park.'",
        options: [
            "The children are playing in the park.",
            "The children playing in the park.",
            "The children is play in the park.",
            "Is the children playing in the park."
        ],
        correctIndex: 0,
        explanation: "'Children' adalah plural, jadi gunakan 'are' bukan 'is'."
    }
];
