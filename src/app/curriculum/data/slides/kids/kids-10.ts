import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    // SLIDE 1 - TITLE
    {
        type: 'title',
        title: "On the Move! 🚗",
        subtitle: "Belajar Transportasi dalam Bahasa Inggris",
        teacherNote: "Goal: Anak-anak bisa menyebutkan berbagai jenis transportasi dan menjelaskan cara mereka pergi ke suatu tempat."
    },
    // SLIDE 2 - ICEBREAKING: BEFORE WE BEGIN
    {
        type: 'concept',
        title: "Before We Begin...",
        subtitle: "Let's talk about transportation! 🚌",
        content: [
            "🤔 How did you come here today? (Kamu kesini naik apa?)",
            "🚗 Does your family have a car? (Keluargamu punya mobil?)",
            "✈️ Have you ever been on an airplane? (Pernah naik pesawat?)",
            "🚲 Can you ride a bicycle? (Bisa naik sepeda?)",
            "🗣️ Do you know how to say 'naik bis' in English?"
        ],
        teacherNote: "Warming up! Tanya anak-anak satu per satu. Biarkan mereka jawab dalam Bahasa Indonesia dulu."
    },
    // SLIDE 3 - VOCABULARY TABLE 1: LAND VEHICLES (Part 1)
    {
        type: 'vocabulary',
        title: "Land Vehicles (Part 1)",
        subtitle: "Kendaraan darat - Bagian 1",
        vocabulary: [
            { term: "Car", meaning: "Mobil", example: "My dad drives a car." },
            { term: "Bus", meaning: "Bis", example: "I go to school by bus." },
            { term: "Motorcycle", meaning: "Motor / Sepeda motor", example: "My uncle rides a motorcycle." },
            { term: "Bicycle / Bike", meaning: "Sepeda", example: "I can ride a bicycle." },
            { term: "Truck", meaning: "Truk", example: "The truck is very big!" },
            { term: "Taxi", meaning: "Taksi", example: "We take a taxi to the mall." },
            { term: "Train", meaning: "Kereta api", example: "The train is fast!" },
            { term: "Scooter", meaning: "Skuter", example: "My brother has a scooter." }
        ],
        teacherNote: "Latihan: Tunjuk gambar kendaraan, minta anak menyebut dalam Bahasa Inggris."
    },
    // SLIDE 4 - VOCABULARY TABLE 2: LAND VEHICLES (Part 2 - Emergency & Special)
    {
        type: 'vocabulary',
        title: "Land Vehicles (Part 2)",
        subtitle: "Kendaraan darat khusus dan darurat",
        vocabulary: [
            { term: "Van", meaning: "Van / Mobil besar", example: "The van can carry many people." },
            { term: "Ambulance", meaning: "Ambulans", example: "The ambulance helps sick people." },
            { term: "Fire truck", meaning: "Mobil pemadam", example: "The fire truck is red!" },
            { term: "Police car", meaning: "Mobil polisi", example: "The police car has a siren." },
            { term: "Tow truck", meaning: "Mobil derek", example: "The tow truck pulls broken cars." },
            { term: "School bus", meaning: "Bis sekolah", example: "The school bus is yellow." },
            { term: "Garbage truck", meaning: "Truk sampah", example: "The garbage truck comes every morning." },
            { term: "Tractor", meaning: "Traktor", example: "Farmers use tractors on the farm." }
        ],
        teacherNote: "Fokus pada kendaraan khusus: darurat (ambulance, fire truck, police car) dan kendaraan kerja."
    },
    // SLIDE 5 - VOCABULARY TABLE 3: AIR VEHICLES
    {
        type: 'vocabulary',
        title: "Air Vehicles",
        subtitle: "Kendaraan udara",
        vocabulary: [
            { term: "Airplane / Plane", meaning: "Pesawat terbang", example: "The airplane flies in the sky." },
            { term: "Helicopter", meaning: "Helikopter", example: "A helicopter can hover in the air." },
            { term: "Hot air balloon", meaning: "Balon udara", example: "The hot air balloon is colorful!" },
            { term: "Jet", meaning: "Jet", example: "The jet is very fast!" },
            { term: "Rocket", meaning: "Roket", example: "The rocket goes to space!" },
            { term: "Drone", meaning: "Drone", example: "The drone flies and takes photos." }
        ],
        teacherNote: "Tanya anak: 'Which air vehicle do you want to try?' Diskusi mana yang paling menarik."
    },
    // SLIDE 6 - VOCABULARY TABLE 4: WATER VEHICLES
    {
        type: 'vocabulary',
        title: "Water Vehicles",
        subtitle: "Kendaraan air",
        vocabulary: [
            { term: "Boat", meaning: "Perahu", example: "We ride a boat on the lake." },
            { term: "Ship", meaning: "Kapal", example: "The big ship sails on the sea." },
            { term: "Ferry", meaning: "Feri", example: "We take a ferry to the island." },
            { term: "Submarine", meaning: "Kapal selam", example: "A submarine goes under water." },
            { term: "Jet ski", meaning: "Jet ski", example: "Jet ski is fun at the beach!" },
            { term: "Canoe", meaning: "Kano", example: "We paddle a canoe on the river." },
            { term: "Yacht", meaning: "Kapal pesiar", example: "Rich people have a yacht." },
            { term: "Speedboat", meaning: "Speedboat", example: "The speedboat is very fast!" }
        ],
        teacherNote: "Bedakan boat (kecil) vs ship (besar). Tanya anak pernah naik perahu di mana."
    },
    // SLIDE 7 - VOCABULARY TABLE 5: TRANSPORT ACTIONS
    {
        type: 'vocabulary',
        title: "Transport Actions",
        subtitle: "Kata kerja transportasi",
        vocabulary: [
            { term: "Drive", meaning: "Menyetir / Mengendarai", example: "My mom drives a car." },
            { term: "Ride", meaning: "Naik (sepeda/motor)", example: "I ride my bike to the park." },
            { term: "Fly", meaning: "Terbang", example: "Airplanes fly in the sky." },
            { term: "Sail", meaning: "Berlayar", example: "Ships sail on the ocean." },
            { term: "Take", meaning: "Naik (transportasi umum)", example: "I take the bus to school." },
            { term: "Walk", meaning: "Berjalan kaki", example: "I walk to my friend's house." },
            { term: "Paddle", meaning: "Mendayung", example: "We paddle the canoe." },
            { term: "Park", meaning: "Parkir", example: "Dad parks the car in the garage." }
        ],
        teacherNote: "Penting! Latihan action words: drive a car, ride a bike, take a bus, fly a plane."
    },
    // SLIDE 8 - VOCABULARY TABLE 6: TRANSPORT PLACES
    {
        type: 'vocabulary',
        title: "Transport Places",
        subtitle: "Tempat-tempat transportasi",
        vocabulary: [
            { term: "Bus stop", meaning: "Halte bis", example: "Wait at the bus stop." },
            { term: "Train station", meaning: "Stasiun kereta", example: "The train station is big." },
            { term: "Airport", meaning: "Bandara", example: "We go to the airport to fly." },
            { term: "Harbor / Port", meaning: "Pelabuhan", example: "Ships dock at the harbor." },
            { term: "Parking lot", meaning: "Tempat parkir", example: "Park the car in the parking lot." },
            { term: "Gas station", meaning: "Pom bensin", example: "We get gas at the gas station." },
            { term: "Road", meaning: "Jalan", example: "Cars drive on the road." },
            { term: "Highway", meaning: "Jalan tol", example: "The highway is very long!" }
        ],
        teacherNote: "Tanyakan: 'Have you been to an airport? A train station?' Latih mengucapkan nama tempat."
    },
    // SLIDE 9 - VOCABULARY TABLE 7: VEHICLE PARTS
    {
        type: 'vocabulary',
        title: "Vehicle Parts",
        subtitle: "Bagian-bagian kendaraan",
        vocabulary: [
            { term: "Wheel", meaning: "Roda", example: "A car has four wheels." },
            { term: "Engine", meaning: "Mesin", example: "The engine makes the car move." },
            { term: "Steering wheel", meaning: "Setir", example: "Dad holds the steering wheel." },
            { term: "Seat", meaning: "Kursi", example: "Sit in your seat and buckle up!" },
            { term: "Window", meaning: "Jendela", example: "I look out the window." },
            { term: "Door", meaning: "Pintu", example: "Open the car door." },
            { term: "Tire", meaning: "Ban", example: "The tire is flat!" },
            { term: "Headlight", meaning: "Lampu depan", example: "Turn on the headlights at night." }
        ],
        teacherNote: "Latihan: Tunjuk bagian mobil/sepeda, minta anak menyebutkan namanya."
    },
    // SLIDE 10 - VOCABULARY TABLE 8: TRAFFIC & SAFETY
    {
        type: 'vocabulary',
        title: "Traffic & Safety",
        subtitle: "Lalu lintas dan keamanan",
        vocabulary: [
            { term: "Traffic light", meaning: "Lampu lalu lintas", example: "Stop at the red traffic light!" },
            { term: "Crosswalk", meaning: "Zebra cross", example: "Use the crosswalk to cross the street." },
            { term: "Seat belt", meaning: "Sabuk pengaman", example: "Always wear your seat belt!" },
            { term: "Helmet", meaning: "Helm", example: "Wear a helmet when riding a bike." },
            { term: "Speed limit", meaning: "Batas kecepatan", example: "Follow the speed limit!" },
            { term: "Traffic jam", meaning: "Macet", example: "There's a traffic jam on the road." },
            { term: "Sidewalk", meaning: "Trotoar", example: "Walk on the sidewalk, not the road." },
            { term: "Horn", meaning: "Klakson", example: "Don't honk the horn too much!" }
        ],
        teacherNote: "Safety first! Ajarkan pentingnya sabuk pengaman dan helm. Tanya: 'What color means stop?'"
    },
    // SLIDE 11 - FORMULA: HOW TO GET THERE
    {
        type: 'formula',
        title: "How Do You Go There?",
        subtitle: "Cara bertanya dan menjawab tentang transportasi",
        formula: "I go to [place] by [transportation]. / I take the [transportation].",
        vocabulary: [
            { term: "How do you go to school?", meaning: "Kamu ke sekolah naik apa?", example: "I go to school by car." },
            { term: "I go by bus.", meaning: "Saya naik bis.", example: "I go to the mall by bus." },
            { term: "I take the train.", meaning: "Saya naik kereta.", example: "I take the train to Jakarta." },
            { term: "I ride my bike.", meaning: "Saya naik sepeda saya.", example: "I ride my bike to the park." },
            { term: "I walk.", meaning: "Saya jalan kaki.", example: "I walk to my friend's house." },
            { term: "My dad drives me.", meaning: "Ayah mengantarku.", example: "My dad drives me to school." }
        ],
        teacherNote: "Drill: 'How do you go to [place]?' → 'I go by [transport].' Latih berbagai kombinasi."
    },
    // SLIDE 12 - FORMULA: DESCRIBING VEHICLES
    {
        type: 'formula',
        title: "Describing Vehicles",
        subtitle: "Mendeskripsikan kendaraan",
        formula: "The [vehicle] is [adjective]. / A [vehicle] can [verb].",
        vocabulary: [
            { term: "The car is fast.", meaning: "Mobilnya cepat.", example: "The red car is very fast!" },
            { term: "The bus is big.", meaning: "Bisnya besar.", example: "The bus is big and long." },
            { term: "The bike is small.", meaning: "Sepedanya kecil.", example: "My bike is small and blue." },
            { term: "A plane can fly.", meaning: "Pesawat bisa terbang.", example: "A plane can fly very high!" },
            { term: "A boat can float.", meaning: "Perahu bisa mengapung.", example: "A boat can float on water." },
            { term: "A train can carry many people.", meaning: "Kereta bisa membawa banyak orang.", example: "A train can carry hundreds of people!" }
        ],
        teacherNote: "Ajarkan adjectives: fast, slow, big, small, loud, quiet, old, new."
    },
    // SLIDE 13 - FORMULA: ASKING ABOUT EXPERIENCE
    {
        type: 'formula',
        title: "Have You Ever...?",
        subtitle: "Bertanya tentang pengalaman",
        formula: "Have you ever been on a [vehicle]? / Have you ever ridden a [vehicle]?",
        vocabulary: [
            { term: "Have you ever been on a plane?", meaning: "Pernah naik pesawat?", example: "Yes, I have! / No, I haven't." },
            { term: "Have you ever ridden a horse?", meaning: "Pernah naik kuda?", example: "Yes, I have! It was fun!" },
            { term: "Have you ever been on a boat?", meaning: "Pernah naik perahu?", example: "No, I haven't, but I want to!" },
            { term: "I have been on a train.", meaning: "Saya pernah naik kereta.", example: "I have been on a train to Bandung." },
            { term: "I have never been on a helicopter.", meaning: "Saya belum pernah naik helikopter.", example: "I have never been on a helicopter." },
            { term: "I want to try!", meaning: "Saya mau coba!", example: "I want to try riding a jet ski!" }
        ],
        teacherNote: "Pola 'Have you ever...?' untuk pengalaman. Jawaban: 'Yes, I have.' atau 'No, I haven't.'"
    },
    // SLIDE 14 - FORMULA: GIVING DIRECTIONS
    {
        type: 'formula',
        title: "Getting Around",
        subtitle: "Cara bertanya dan memberi informasi transportasi",
        formula: "How can I get to [place]? / You can take the [transport].",
        vocabulary: [
            { term: "How can I get to the beach?", meaning: "Bagaimana caranya ke pantai?", example: "You can take a taxi." },
            { term: "Which bus goes to the mall?", meaning: "Bis mana ke mall?", example: "Bus number 5 goes to the mall." },
            { term: "Is it far from here?", meaning: "Apakah jauh dari sini?", example: "No, it's just 10 minutes by car." },
            { term: "It's faster by train.", meaning: "Lebih cepat naik kereta.", example: "It's faster by train than by bus." },
            { term: "It's cheaper by bus.", meaning: "Lebih murah naik bis.", example: "The bus is cheaper than a taxi." },
            { term: "You can walk there.", meaning: "Kamu bisa jalan kaki ke sana.", example: "It's close. You can walk there." }
        ],
        teacherNote: "Latih membandingkan: faster, slower, cheaper, more expensive."
    },
    // SLIDE 15 - COMPARISON: DRIVE vs RIDE vs TAKE
    {
        type: 'comparison',
        title: "Drive vs Ride vs Take",
        subtitle: "Kapan pakai drive, ride, atau take?",
        comparison: [
            { wrong: "I drive a bicycle.", right: "I ride a bicycle." },
            { wrong: "I ride a car.", right: "I drive a car. / I go by car." },
            { wrong: "I drive the bus.", right: "I take the bus." },
            { wrong: "I take my bike.", right: "I ride my bike." },
            { wrong: "I ride the train.", right: "I take the train." }
        ],
        teacherNote: "DRIVE = menyetir (mobil, truk). RIDE = naik mengendarai sendiri (sepeda, motor). TAKE = transportasi umum."
    },
    // SLIDE 16 - COMPARISON: BY vs ON vs IN
    {
        type: 'comparison',
        title: "By vs On vs In",
        subtitle: "Preposisi untuk transportasi",
        comparison: [
            { wrong: "I go with car.", right: "I go by car." },
            { wrong: "I am in the bus.", right: "I am on the bus." },
            { wrong: "I am on the car.", right: "I am in the car." },
            { wrong: "I travel with plane.", right: "I travel by plane." },
            { wrong: "I sit in the motorcycle.", right: "I sit on the motorcycle." }
        ],
        teacherNote: "BY = cara pergi. IN = di dalam (car, taxi). ON = di atas (bus, train, plane, bike)."
    },
    // SLIDE 17 - CONVERSATION EXAMPLE 1
    {
        type: 'case-study',
        title: "Conversation 1: Going to School 🏫",
        subtitle: "A = Friend 1 | B = Friend 2",
        caseStudy: {
            scenario: "Dua teman berbicara tentang cara pergi ke sekolah.",
            template: "A: How do you go to school?\nB: I go by car. My mom drives me.\nA: That's nice! I take the bus.\nB: Is the bus fun?\nA: Yes! I can sit with my friends.\nB: Cool! Maybe I'll try the bus someday."
        },
        teacherNote: "Demo dengan murid. Teacher jadi A atau B, murid jadi partner."
    },
    // SLIDE 18 - CONVERSATION EXAMPLE 2
    {
        type: 'case-study',
        title: "Conversation 2: Travel Experience ✈️",
        subtitle: "A = Friend 1 | B = Friend 2",
        caseStudy: {
            scenario: "Berbicara tentang pengalaman naik transportasi.",
            template: "A: Have you ever been on an airplane?\nB: Yes, I have! I flew to Bali.\nA: Wow! Was it fun?\nB: Yes! The airplane was so big!\nA: I have never been on a plane.\nB: You should try it! It's amazing!"
        },
        teacherNote: "Latih 'Have you ever...?' dengan berbagai kendaraan."
    },
    // SLIDE 19 - CONVERSATION EXAMPLE 3
    {
        type: 'case-study',
        title: "Conversation 3: Asking for Directions 🗺️",
        subtitle: "A = Tourist | B = Local",
        caseStudy: {
            scenario: "Seorang turis bertanya cara pergi ke suatu tempat.",
            template: "A: Excuse me, how can I get to the beach?\nB: You can take a bus or a taxi.\nA: Which one is faster?\nB: The taxi is faster, but the bus is cheaper.\nA: Okay, I'll take the bus. Where is the bus stop?\nB: It's over there! Take bus number 7.\nA: Thank you so much!"
        },
        teacherNote: "Latihan lebih advanced: memberi saran dengan alasan (faster, cheaper)."
    },
    // SLIDE 20 - ROLEPLAY PRACTICE 1
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 1: Transportation Survey 📋",
        subtitle: "A = Interviewer | B = Friend",
        caseStudy: {
            scenario: "Interview temanmu tentang transportasi favorit!",
            template: "A: Hi! Can I ask you some questions?\nB: Sure!\nA: How do you usually go to [place]?\nB: I go by [transport].\nA: What is your favorite vehicle?\nB: I like [vehicle] because it's [adjective]!\nA: Have you ever been on a [vehicle]?\nB: Yes, I have! / No, I haven't."
        },
        teacherNote: "Pair up students. Satu jadi interviewer, satu yang diwawancara. Swap roles."
    },
    // SLIDE 21 - ROLEPLAY PRACTICE 2
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 2: At the Bus Stop 🚌",
        subtitle: "A = Passenger | B = Bus Driver",
        caseStudy: {
            scenario: "Di halte bis, kamu ingin naik bis ke suatu tempat.",
            template: "A: Excuse me, does this bus go to the zoo?\nB: Yes, it does! Please get on.\nA: How much is the ticket?\nB: It's five thousand rupiah.\nA: Here you go. Thank you!\nB: You're welcome! The zoo is the fifth stop.\nA: Okay, thank you!"
        },
        teacherNote: "Latih bertanya tentang tujuan bis dan membayar tiket."
    },
    // SLIDE 22 - ROLEPLAY PRACTICE 3
    {
        type: 'roleplay',
        title: "Your Turn! Roleplay 3: Car Trouble! 🚗💨",
        subtitle: "A = Driver | B = Helper",
        caseStudy: {
            scenario: "Oh no! Mobilmu mogok di jalan!",
            template: "A: Oh no! My car stopped! It won't start!\nB: What happened?\nA: I don't know. Maybe the tire is flat.\nB: Let me see... Yes, the tire is flat!\nA: What should I do?\nB: You can call a tow truck, or I can help you change the tire.\nA: Thank you so much for helping!"
        },
        teacherNote: "Vocabulary: flat tire, tow truck, engine, won't start. Latih problem-solving."
    },
    // SLIDE 23 - VOCABULARY: VEHICLE SOUNDS
    {
        type: 'vocabulary',
        title: "Vehicle Sounds! 🔊",
        subtitle: "Suara kendaraan dalam Bahasa Inggris",
        vocabulary: [
            { term: "Vroom vroom!", meaning: "Suara mobil/motor", example: "The car goes vroom vroom!" },
            { term: "Beep beep!", meaning: "Suara klakson", example: "Beep beep! The car is honking." },
            { term: "Choo choo!", meaning: "Suara kereta", example: "The train goes choo choo!" },
            { term: "Honk honk!", meaning: "Suara klakson keras", example: "The truck goes honk honk!" },
            { term: "Whoosh!", meaning: "Suara pesawat terbang", example: "The airplane goes whoosh!" },
            { term: "Splash!", meaning: "Suara perahu di air", example: "The boat makes a splash!" },
            { term: "Ring ring!", meaning: "Suara bel sepeda", example: "Ring ring! The bike is coming!" },
            { term: "Wee-woo!", meaning: "Suara sirene", example: "Wee-woo! The ambulance is coming!" }
        ],
        teacherNote: "Fun activity! Buat suara, minta anak menebak kendaraannya."
    },
    // SLIDE 24 - RECAP
    {
        type: 'recap',
        title: "Quick Recap",
        recap: [
            { context: "Pergi ke sekolah", sayThis: "I go to school by car.", dontSayThis: "I go to school with car." },
            { context: "Naik sepeda", sayThis: "I ride my bike.", dontSayThis: "I drive my bike." },
            { context: "Naik bis", sayThis: "I take the bus.", dontSayThis: "I ride the bus." },
            { context: "Mendeskripsikan", sayThis: "The train is fast.", dontSayThis: "The train fast." },
            { context: "Pengalaman", sayThis: "I have been on a plane.", dontSayThis: "I have go on a plane." },
            { context: "Di dalam mobil", sayThis: "I am in the car.", dontSayThis: "I am on the car." }
        ],
        teacherNote: "Review bersama-sama dan cek pemahaman anak."
    },
    // SLIDE 25 - MISSION
    {
        type: 'mission',
        title: "Mission Time!",
        subtitle: "Tugas seru untuk kamu!",
        mission: [
            "1. Vehicle Spotter: Kalau jalan-jalan, sebutkan kendaraan yang kamu lihat dalam Bahasa Inggris!",
            "2. Transportation Diary: Tulis 5 kendaraan yang pernah kamu naiki dan ceritakan pengalamanmu!",
            "3. Dream Vehicle: Gambar kendaraan impianmu dan jelaskan! (My dream vehicle is a ___ because ___)",
            "4. Sound Game: Ajak keluarga main tebak suara kendaraan dalam Bahasa Inggris!"
        ],
        teacherNote: "Encourage anak untuk praktek di rumah dan di jalan. See you next time!"
    }
];

export const quiz: QuizQuestion[] = [
    // VOCABULARY - LAND VEHICLES
    {
        question: "What is the English word for 'mobil'?",
        options: ["Bicycle", "Car", "Bus"],
        correctIndex: 1,
        explanation: "Car means 'mobil'. Cars have four wheels and can carry passengers!"
    },
    {
        question: "What is the English word for 'sepeda'?",
        options: ["Motorcycle", "Scooter", "Bicycle"],
        correctIndex: 2,
        explanation: "Bicycle (or bike) means 'sepeda'. We use our legs to pedal a bicycle!"
    },
    {
        question: "Which vehicle helps sick people?",
        options: ["Fire truck", "Ambulance", "Police car"],
        correctIndex: 1,
        explanation: "An ambulance takes sick or injured people to the hospital."
    },
    {
        question: "Which vehicle is red and puts out fires?",
        options: ["Police car", "Ambulance", "Fire truck"],
        correctIndex: 2,
        explanation: "A fire truck is red and helps firefighters put out fires!"
    },
    // VOCABULARY - AIR & WATER
    {
        question: "What is the English word for 'pesawat terbang'?",
        options: ["Airplane", "Helicopter", "Hot air balloon"],
        correctIndex: 0,
        explanation: "Airplane (or plane) means 'pesawat terbang'. It flies in the sky!"
    },
    {
        question: "Which vehicle goes UNDER the water?",
        options: ["Boat", "Ship", "Submarine"],
        correctIndex: 2,
        explanation: "A submarine can travel underwater! 'Sub' means 'under'."
    },
    {
        question: "What is 'kapal' in English?",
        options: ["Boat", "Ship", "Ferry"],
        correctIndex: 1,
        explanation: "Ship means 'kapal'. Ships are big and sail on the ocean!"
    },
    // ACTIONS
    {
        question: "What does 'drive' mean?",
        options: ["Terbang", "Menyetir", "Naik"],
        correctIndex: 1,
        explanation: "Drive means 'menyetir'. We drive cars and trucks."
    },
    {
        question: "'I ___ my bike to the park.'",
        options: ["drive", "ride", "take"],
        correctIndex: 1,
        explanation: "We 'ride' a bike, not 'drive'. Ride is used for bicycles and motorcycles."
    },
    {
        question: "'I ___ the bus to school.'",
        options: ["drive", "ride", "take"],
        correctIndex: 2,
        explanation: "We 'take' public transportation like buses and trains."
    },
    // PLACES
    {
        question: "Where do we wait for a bus?",
        options: ["Airport", "Bus stop", "Train station"],
        correctIndex: 1,
        explanation: "We wait for a bus at the bus stop (halte bis)."
    },
    {
        question: "Where do airplanes land?",
        options: ["Harbor", "Train station", "Airport"],
        correctIndex: 2,
        explanation: "Airplanes take off and land at the airport (bandara)."
    },
    // VEHICLE PARTS
    {
        question: "A car has four ___.",
        options: ["doors", "wheels", "windows"],
        correctIndex: 1,
        explanation: "A car has four wheels (roda). Wheels help vehicles move!"
    },
    {
        question: "What do you hold to control the car?",
        options: ["Seat", "Window", "Steering wheel"],
        correctIndex: 2,
        explanation: "The steering wheel (setir) is used to control the direction of the car."
    },
    // SAFETY
    {
        question: "What should you wear when riding a bike?",
        options: ["Hat", "Helmet", "Glasses"],
        correctIndex: 1,
        explanation: "Always wear a helmet (helm) when riding a bike for safety!"
    },
    {
        question: "What color means STOP at a traffic light?",
        options: ["Green", "Yellow", "Red"],
        correctIndex: 2,
        explanation: "Red means stop! Green means go, and yellow means slow down."
    },
    // HOW DO YOU GO...?
    {
        question: "How do you say 'Saya ke sekolah naik bis'?",
        options: ["I go to school with bus.", "I go to school by bus.", "I go to school on bus."],
        correctIndex: 1,
        explanation: "We use 'by' before transportation: 'by car', 'by bus', 'by train'."
    },
    {
        question: "'How do you go to the mall?' - What can you say?",
        options: ["I go with car.", "I go by car.", "I go in car."],
        correctIndex: 1,
        explanation: "'I go by car' is the correct way to answer. Use 'by + vehicle'."
    },
    // HAVE YOU EVER...?
    {
        question: "'Have you ever been on a plane?' - 'Yes, ___.'",
        options: ["I do", "I have", "I am"],
        correctIndex: 1,
        explanation: "When answering 'Have you ever...?', say 'Yes, I have' or 'No, I haven't'."
    },
    {
        question: "'I have ___ been on a helicopter.'",
        options: ["not", "never", "no"],
        correctIndex: 1,
        explanation: "'I have never' means 'Saya belum pernah'. Use 'never' with 'have'."
    },
    // SOUNDS
    {
        question: "What sound does a car make?",
        options: ["Choo choo!", "Vroom vroom!", "Splash!"],
        correctIndex: 1,
        explanation: "Cars and motorcycles make 'vroom vroom' sounds!"
    },
    {
        question: "'Choo choo!' is the sound of a...",
        options: ["Car", "Airplane", "Train"],
        correctIndex: 2,
        explanation: "Trains go 'choo choo!' in English. Steam trains make this sound!"
    },
    {
        question: "What sound does an ambulance siren make?",
        options: ["Beep beep!", "Wee-woo!", "Vroom vroom!"],
        correctIndex: 1,
        explanation: "Ambulance and police sirens go 'wee-woo!' in English."
    },
    // TRICKY - DRIVE vs RIDE vs TAKE
    {
        question: "Which sentence is CORRECT?",
        options: ["I drive my bicycle.", "I ride my bicycle.", "I take my bicycle."],
        correctIndex: 1,
        explanation: "We 'ride' bicycles and motorcycles. We 'drive' cars. We 'take' buses."
    },
    // === INCREASED DIFFICULTY ===
    {
        question: "Which sentence is WRONG?",
        options: ["I take the train.", "I drive the bus.", "My dad drives a car."],
        correctIndex: 1,
        explanation: "Passengers don't 'drive' the bus - they 'take' the bus!"
    },
    {
        question: "'The ship ___ on the ocean.'",
        options: ["drives", "flies", "sails"],
        correctIndex: 2,
        explanation: "Ships 'sail' on the ocean. 'Sail' means 'berlayar'."
    },
    {
        question: "'I am ___ the car.' (sitting inside)",
        options: ["on", "in", "by"],
        correctIndex: 1,
        explanation: "We are 'in' small vehicles like cars. We are 'on' big ones like buses."
    },
    {
        question: "Which is the FASTEST vehicle?",
        options: ["Bicycle", "Airplane", "Boat"],
        correctIndex: 1,
        explanation: "Airplanes are the fastest! They can travel faster than cars or boats."
    },
    {
        question: "A flat tire means the tire is...",
        options: ["new", "broken / has no air", "very fast"],
        correctIndex: 1,
        explanation: "A flat tire (ban kempes) has no air. You need to fix or change it!"
    },
    {
        question: "You want to encourage your friend to try a boat. You say:",
        options: ["You must try!", "You should try it!", "You try it!"],
        correctIndex: 1,
        explanation: "'You should try it!' is a polite and encouraging way to suggest something."
    }
];
