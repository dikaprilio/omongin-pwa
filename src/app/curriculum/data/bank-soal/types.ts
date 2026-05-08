/**
 * Bank Soal Types
 * ----------------
 * Type definitions for the reusable question bank.
 */

import type { CurriculumCategory } from '../phases';

export type QuestionDifficulty = 'easy' | 'medium' | 'hard';

export interface BankQuestion {
    id: string;                     // Unique ID: "adult-01-001"
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    difficulty: QuestionDifficulty;
    tags?: string[];                // Optional tags: ["grammar", "tobe"]
}

export interface TopicQuiz {
    topicId: number;                // 1-30 (relative to path)
    path: CurriculumCategory;
    title: string;                  // "Professional Introduction"
    totalQuestions: number;         // For quick access (should match questions.length)
    questions: BankQuestion[];      // 30 questions
}

export interface QuizMeta {
    topicId: number;
    globalId: number;               // Global meeting ID (1-180)
    title: string;
    questionCount: number;
    isAvailable: boolean;
}

/**
 * Module structure for each topic quiz file
 */
export interface TopicQuizModule {
    quiz: TopicQuiz;
}
