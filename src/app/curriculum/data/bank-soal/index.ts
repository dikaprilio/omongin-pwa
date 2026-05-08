/**
 * Bank Soal Index
 * ----------------
 * Functions to load and manage the question bank.
 */

import type { TopicQuiz, QuizMeta, TopicQuizModule } from './types';
import type { CurriculumCategory } from '../phases';
import { findMeetingById } from '../phases';

// Path mapping: CurriculumCategory -> folder name
const pathFolders: Record<CurriculumCategory, string> = {
    'speaking-adults': 'adults',
    'speaking-kids': 'kids',
    'basic-adults': 'basic',
    'basic-kids': 'basic-kids',
    'interview': 'interview',
    'presentation': 'presentation'
};

// ID offset for each path
const pathOffsets: Record<CurriculumCategory, number> = {
    'speaking-adults': 0,
    'speaking-kids': 30,
    'basic-adults': 60,
    'basic-kids': 120,
    'interview': 90,
    'presentation': 150
};

/**
 * Get quiz for a specific topic by path and topic number
 */
export async function getQuizByTopic(
    path: CurriculumCategory,
    topicNumber: number
): Promise<TopicQuiz | null> {
    const folder = pathFolders[path];
    const paddedId = String(topicNumber).padStart(2, '0');

    try {
        const module: TopicQuizModule = await import(`./${folder}/topic-${paddedId}`);
        return module.quiz;
    } catch (error) {
        console.warn(`Quiz not found for ${folder}/topic-${paddedId}:`, error);
        return null;
    }
}

/**
 * Get quiz by global meeting ID (1-180)
 */
export async function getQuizByGlobalId(globalId: number): Promise<TopicQuiz | null> {
    // Determine path and topic number from global ID
    let path: CurriculumCategory;
    let topicNumber: number;

    if (globalId >= 1 && globalId <= 30) {
        path = 'speaking-adults';
        topicNumber = globalId;
    } else if (globalId >= 31 && globalId <= 60) {
        path = 'speaking-kids';
        topicNumber = globalId - 30;
    } else if (globalId >= 61 && globalId <= 90) {
        path = 'basic-adults';
        topicNumber = globalId - 60;
    } else if (globalId >= 91 && globalId <= 120) {
        path = 'interview';
        topicNumber = globalId - 90;
    } else if (globalId >= 121 && globalId <= 150) {
        path = 'basic-kids';
        topicNumber = globalId - 120;
    } else if (globalId >= 151 && globalId <= 180) {
        path = 'presentation';
        topicNumber = globalId - 150;
    } else {
        return null;
    }

    return getQuizByTopic(path, topicNumber);
}

/**
 * Get quiz metadata for listing page (without loading all questions)
 */
export function getQuizMetaForPath(path: CurriculumCategory): QuizMeta[] {
    const offset = pathOffsets[path];
    const meta: QuizMeta[] = [];

    for (let i = 1; i <= 30; i++) {
        const globalId = offset + i;
        const result = findMeetingById(globalId);

        meta.push({
            topicId: i,
            globalId,
            title: result?.meeting.title || `Topic ${i}`,
            questionCount: 30, // All topics have 30 questions
            isAvailable: true  // Will be updated based on actual file availability
        });
    }

    return meta;
}

// Re-export types
export * from './types';
