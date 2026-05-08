import { PlacementQuestion } from "@/data/placement-questions";

export interface CATState {
    abilityEstimate: number; // Scale: -3.0 to 3.0 (approx mapping to levels)
    standardError: number;
    answeredQuestions: string[]; // IDs of answered questions
    history: {
        questionId: string;
        isCorrect: boolean;
        difficulty: number;
        userResponse?: any;
    }[];
    currentDifficultyIndex: number; // 0 to 4 (representing difficulty 1-5)
}

// Initial state for a new test
export const initialCATState: CATState = {
    abilityEstimate: 0, // Starts at middle (Level 3 approx)
    standardError: 1.0,
    answeredQuestions: [],
    history: [],
    currentDifficultyIndex: 2 // Start at Level 3 (Medium)
};

/**
 * Updates the user's ability estimate based on the latest response.
 * Uses a simplified algorithm inspired by Item Response Theory (IRT) or Elo rating.
 */
export function updateAbilityEstimate(
    currentState: CATState,
    questionDifficulty: number, // 1-5
    isCorrect: boolean
): CATState {
    const newState = { ...currentState };

    // Scale difficulty to match ability scale (-2 to +2 roughly)
    // Level 1 -> -2, Level 2 -> -1, Level 3 -> 0, Level 4 -> +1, Level 5 -> +2
    const itemDifficulty = questionDifficulty - 3;

    // K-factor determines how much the score changes (volatility)
    // Higher early on, lower as we get more data
    const kFactor = Math.max(0.5, 1.5 / Math.sqrt(currentState.history.length + 1));

    const expectedScore = 1 / (1 + Math.pow(10, (itemDifficulty - currentState.abilityEstimate) / 4)); // Sigmoid function
    const actualScore = isCorrect ? 1 : 0;

    // Update estimate
    newState.abilityEstimate = currentState.abilityEstimate + kFactor * (actualScore - expectedScore);

    // Update difficulty index for next question
    // Map ability back to 1-5 scale
    let nextLevel = Math.round(newState.abilityEstimate + 3);
    nextLevel = Math.max(1, Math.min(5, nextLevel));

    newState.currentDifficultyIndex = nextLevel - 1; // 0-indexed

    // Standard error decreases
    newState.standardError = currentState.standardError * 0.9;

    return newState;
}

/**
 * Selects the next best question based on current estimated ability and unused questions.
 */
export function selectNextQuestion(
    state: CATState,
    questionBank: PlacementQuestion[],
    questionType?: PlacementQuestion['type'] // Optional filter
): PlacementQuestion | null {
    // 1. Filter out already answered questions
    let availableQuestions = questionBank.filter(q => !state.answeredQuestions.includes(q.id));

    // 2. Filter by type if specified
    if (questionType) {
        availableQuestions = availableQuestions.filter(q => q.type === questionType);
    }

    if (availableQuestions.length === 0) return null;

    // 3. Find questions matching current estimated difficulty level
    const targetDifficulty = state.currentDifficultyIndex + 1;

    const exactMatches = availableQuestions.filter(q => q.difficulty === targetDifficulty);

    if (exactMatches.length > 0) {
        // Return random from exact matches
        return exactMatches[Math.floor(Math.random() * exactMatches.length)];
    }

    // 4. Fallback: Find closest difficulty
    availableQuestions.sort((a, b) =>
        Math.abs(a.difficulty - targetDifficulty) - Math.abs(b.difficulty - targetDifficulty)
    );

    return availableQuestions[0];
}

/**
 * Converts the final ability estimate to a descriptive level.
 */
export function getRecommendedLevel(abilityEstimate: number): {
    level: string;
    description: string;
    cefr: string;
} {
    // Map -3 to +3 range to levels
    if (abilityEstimate <= -1.5) {
        return {
            level: "Beginner",
            description: "You are starting your English journey. Focus on basic vocabulary and simple sentence structures.",
            cefr: "A1"
        };
    } else if (abilityEstimate <= -0.5) {
        return {
            level: "Elementary",
            description: "You understand common phrases and can communicate in simple tasks.",
            cefr: "A2"
        };
    } else if (abilityEstimate <= 0.5) {
        return {
            level: "Intermediate",
            description: "You can handle most travel situations and write simple connected text on familiar topics.",
            cefr: "B1"
        };
    } else if (abilityEstimate <= 1.5) {
        return {
            level: "Upper Intermediate",
            description: "You interact with a degree of fluency that makes regular interaction with native speakers quite possible.",
            cefr: "B2"
        };
    } else {
        return {
            level: "Advanced",
            description: "You can express yourself fluently and spontaneously with varied vocabulary.",
            cefr: "C1"
        };
    }
}
