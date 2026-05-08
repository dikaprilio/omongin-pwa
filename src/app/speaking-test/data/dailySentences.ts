// Daily Sentences for Speaking Challenge
// Each sentence is designed to help Indonesian speakers practice common pronunciation issues

export interface DailySentence {
    id: number;
    text: string;
    phonetic?: string;
    tips: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    focusAreas: string[];
}

export const DAILY_SENTENCES: DailySentence[] = [
    {
        id: 1,
        text: "The three brothers thought they would throw the ball through the window.",
        tips: [
            "'th' sound: tongue between teeth",
            "'throw' vs 'trow': don't skip the 'th'",
            "'through' has a long 'oo' sound"
        ],
        difficulty: 'medium',
        focusAreas: ['th sound', 'long vowels']
    },
    {
        id: 2,
        text: "She sells seashells by the seashore.",
        tips: [
            "'sh' is different from 's'",
            "Keep tongue behind teeth for 's'",
            "Classic tongue twister - go slow!"
        ],
        difficulty: 'hard',
        focusAreas: ['s vs sh', 'tongue twisters']
    },
    {
        id: 3,
        text: "I would like a cup of coffee, please.",
        tips: [
            "'would' - the 'l' is silent",
            "Stress on 'like' and 'coffee'",
            "End with rising tone for politeness"
        ],
        difficulty: 'easy',
        focusAreas: ['silent letters', 'intonation']
    },
    {
        id: 4,
        text: "The weather is getting better, isn't it?",
        tips: [
            "'weather' vs 'wetter' - different!",
            "Tag question 'isn't it?' goes UP",
            "'getting' - tap the 't' lightly"
        ],
        difficulty: 'medium',
        focusAreas: ['th sound', 'tag questions']
    },
    {
        id: 5,
        text: "I've been working here for five years.",
        tips: [
            "'I've' - contract clearly",
            "'been' has long 'ee' sound",
            "'five' vs 'pive' - use your teeth on lip for 'f'"
        ],
        difficulty: 'easy',
        focusAreas: ['contractions', 'f sound']
    },
    {
        id: 6,
        text: "Could you repeat that? I didn't quite catch it.",
        tips: [
            "'could you' blends together: 'could-joo'",
            "'didn't' - say the 'd' at the end",
            "'quite' - long 'i' sound"
        ],
        difficulty: 'medium',
        focusAreas: ['connected speech', 'contractions']
    },
    {
        id: 7,
        text: "The project was very successful, and we're proud of the results.",
        tips: [
            "'project' - stress on first syllable",
            "'successful' - stress on second syllable",
            "'we're' - sounds like 'weer'"
        ],
        difficulty: 'medium',
        focusAreas: ['word stress', 'contractions']
    },
    {
        id: 8,
        text: "What time does the meeting start tomorrow morning?",
        tips: [
            "Question intonation - voice goes UP at end",
            "'tomorrow' - stress on second syllable",
            "'meeting' - long 'ee' sound"
        ],
        difficulty: 'easy',
        focusAreas: ['question intonation', 'word stress']
    },
    {
        id: 9,
        text: "I think we should focus on improving our communication skills.",
        tips: [
            "'think' - 'th' sound, not 't'",
            "'communication' - stress on 4th syllable",
            "'skills' - don't add vowel at end"
        ],
        difficulty: 'hard',
        focusAreas: ['th sound', 'long words']
    },
    {
        id: 10,
        text: "The restaurant serves delicious vegetarian dishes.",
        tips: [
            "'restaurant' - silent 'au' in middle",
            "'vegetarian' - stress on 3rd syllable",
            "'dishes' - 'sh' at the end"
        ],
        difficulty: 'medium',
        focusAreas: ['silent letters', 'sh sound']
    },
    {
        id: 11,
        text: "Have you ever traveled to a foreign country before?",
        tips: [
            "'Have you' blends: 'hav-yoo'",
            "'traveled' - can be 2 syllables",
            "'foreign' - stress on first syllable"
        ],
        difficulty: 'easy',
        focusAreas: ['connected speech', 'past tense']
    },
    {
        id: 12,
        text: "I really appreciate your help with this problem.",
        tips: [
            "'really' - two syllables, not three",
            "'appreciate' - stress on 2nd syllable",
            "'problem' - 'l' sound clear"
        ],
        difficulty: 'easy',
        focusAreas: ['word stress', 'l sound']
    },
    {
        id: 13,
        text: "The children were playing in the park when it started raining.",
        tips: [
            "'children' - 'ch' sound, not 'c'",
            "'playing' - long 'ay' sound",
            "'started' - add 'id' sound for past tense"
        ],
        difficulty: 'medium',
        focusAreas: ['ch sound', 'past tense -ed']
    },
    {
        id: 14,
        text: "She's been studying English since she was thirteen years old.",
        tips: [
            "'She's been' - contract smoothly",
            "'thirteen' - stress on second syllable",
            "'th' in thirteen AND three"
        ],
        difficulty: 'hard',
        focusAreas: ['th sound', 'numbers']
    },
    {
        id: 15,
        text: "Would you mind if I opened the window? It's quite warm in here.",
        tips: [
            "'Would you mind' - polite form, soft tone",
            "'opened' - one syllable, not 'open-ned'",
            "'quite' - long 'i' sound"
        ],
        difficulty: 'medium',
        focusAreas: ['polite requests', 'past tense -ed']
    },
    {
        id: 16,
        text: "The library is located on the third floor of the building.",
        tips: [
            "'library' - three syllables",
            "'third' - 'th' sound + 'r' combination",
            "'floor' - long 'o' sound"
        ],
        difficulty: 'medium',
        focusAreas: ['th sound', 'r sound']
    },
    {
        id: 17,
        text: "I'm looking forward to seeing you at the party next week.",
        tips: [
            "'looking forward to' - common phrase",
            "'seeing' - long 'ee' sound",
            "'party' - American 't' sounds like 'd'"
        ],
        difficulty: 'easy',
        focusAreas: ['phrasal expressions', 't flapping']
    },
    {
        id: 18,
        text: "The documentary about climate change was really thought-provoking.",
        tips: [
            "'documentary' - stress on 3rd syllable",
            "'climate' - stress on first syllable",
            "'thought-provoking' - 'th' at start"
        ],
        difficulty: 'hard',
        focusAreas: ['long words', 'th sound']
    },
    {
        id: 19,
        text: "Can you tell me how to get to the nearest train station?",
        tips: [
            "Asking for directions - polite tone",
            "'nearest' - two syllables",
            "'station' - 'sh' sound in middle"
        ],
        difficulty: 'easy',
        focusAreas: ['questions', 'sh sound']
    },
    {
        id: 20,
        text: "The photographer captured beautiful moments at the wedding.",
        tips: [
            "'photographer' - stress on 2nd syllable",
            "'captured' - past tense, one 'd' sound",
            "'beautiful' - three syllables"
        ],
        difficulty: 'medium',
        focusAreas: ['word stress', 'past tense']
    },
    {
        id: 21,
        text: "I'm sorry, but I think there's been a misunderstanding.",
        tips: [
            "'sorry' - British: 'sor-ry', American: 'sar-ry'",
            "'there's been' - contract smoothly",
            "'misunderstanding' - stress on 4th syllable"
        ],
        difficulty: 'medium',
        focusAreas: ['contractions', 'long words']
    },
    {
        id: 22,
        text: "The athlete ran faster than anyone expected.",
        tips: [
            "'athlete' - two syllables, 'ath-leet'",
            "'faster' - American 't' sounds soft",
            "'expected' - 3 syllables"
        ],
        difficulty: 'easy',
        focusAreas: ['word stress', 'comparatives']
    },
    {
        id: 23,
        text: "We should probably leave earlier to avoid the traffic.",
        tips: [
            "'probably' - often reduced to 'prob-ly'",
            "'earlier' - 3 syllables",
            "'traffic' - stress on first syllable"
        ],
        difficulty: 'easy',
        focusAreas: ['reduced speech', 'comparatives']
    },
    {
        id: 24,
        text: "The manager suggested that we reschedule the appointment.",
        tips: [
            "'manager' - stress on first syllable",
            "'suggested' - past tense 'id' sound",
            "'reschedule' - stress changes meaning"
        ],
        difficulty: 'medium',
        focusAreas: ['word stress', 'past tense -ed']
    },
    {
        id: 25,
        text: "I've always wanted to visit the ancient temples in Asia.",
        tips: [
            "'always' - stress on first syllable",
            "'ancient' - 'sh' sound in middle",
            "'temples' - don't add vowel at end"
        ],
        difficulty: 'easy',
        focusAreas: ['sh sound', 'word endings']
    },
    {
        id: 26,
        text: "The situation is getting worse, and we need to act immediately.",
        tips: [
            "'situation' - 4 syllables, stress on 3rd",
            "'worse' - long 'er' sound",
            "'immediately' - 5 syllables!"
        ],
        difficulty: 'hard',
        focusAreas: ['long words', 'er sound']
    },
    {
        id: 27,
        text: "Could you please speak a little more slowly?",
        tips: [
            "'Could you please' - polite request",
            "'little' - American: sounds like 'liddle'",
            "'slowly' - stress on first syllable"
        ],
        difficulty: 'easy',
        focusAreas: ['polite requests', 't flapping']
    },
    {
        id: 28,
        text: "The exhibition features works by contemporary artists.",
        tips: [
            "'exhibition' - stress on 3rd syllable",
            "'contemporary' - 5 syllables",
            "'artists' - pronounce the 's' at end"
        ],
        difficulty: 'hard',
        focusAreas: ['long words', 'word endings']
    },
    {
        id: 29,
        text: "I heard that the new restaurant downtown is absolutely fantastic.",
        tips: [
            "'heard' - silent 'a'",
            "'downtown' - stress on second part",
            "'absolutely' - stress on first syllable"
        ],
        difficulty: 'medium',
        focusAreas: ['silent letters', 'word stress']
    },
    {
        id: 30,
        text: "Thank you for your patience and understanding during this time.",
        tips: [
            "'Thank' - 'th' sound clearly",
            "'patience' - 2 syllables, 'sh' sound",
            "'understanding' - 4 syllables"
        ],
        difficulty: 'easy',
        focusAreas: ['th sound', 'sh sound']
    },
];

// Get today's sentence based on date
export function getTodaySentence(): DailySentence {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    return DAILY_SENTENCES[dayOfYear % DAILY_SENTENCES.length];
}

// Get sentence by specific date (for testing or sharing)
export function getSentenceByDate(date: Date): DailySentence {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    return DAILY_SENTENCES[dayOfYear % DAILY_SENTENCES.length];
}
