export interface AssessmentQuestion {
    id: number;
    text: string;
    indonesian: string;
    tips: string;
}

// Based on "Adjectives" (Kata Sifat) material
// Q1 = Easy (simple to be + adjective)
// Q2 = Medium (comparison with opposites + "but")
// Q3 = Hard (interrogative/question form)

export const questions: AssessmentQuestion[] = [
    {
        id: 1,
        text: "The ball is round and blue.",
        indonesian: "Bola itu bundar dan biru.",
        tips: "Focus on 'ball', 'round', and 'blue'. Make sure 'round' ends with a clear /d/ sound.",
    },
    {
        id: 2,
        text: "An elephant is big, but a mouse is small.",
        indonesian: "Gajah itu besar, tapi tikus itu kecil.",
        tips: "Focus on 'elephant', 'big', 'mouse', 'small'. The word 'but' should be clear. Contrast the two sizes.",
    },
    {
        id: 3,
        text: "Is the sweet apple green or yellow?",
        indonesian: "Apakah apel manis itu hijau atau kuning?",
        tips: "Focus on 'sweet', 'apple', 'green', 'yellow'. This is a question — use rising intonation at the end.",
    },
];
