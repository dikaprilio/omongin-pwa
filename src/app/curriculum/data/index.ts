/**
 * Curriculum Data Index
 * ---------------------
 * Handles dynamic loading of curriculum data across 6 categories.
 */

// Re-export all types
export * from './types';

// Re-export bank-soal functions
export * from './bank-soal';

export {
    speakingAdultPhases,
    speakingKidsPhases,
    basicAdultPhases,
    interviewPhases,
    basicKidsPhases,
    presentationPhases,
    allPhases,
    findMeetingById,
    getAllMeetingIds,
    getIdsByCurriculum
} from './phases';

import type { Meeting, Slide, QuizQuestion, MeetingDataModule } from './types';
import { findMeetingById } from './phases';

/**
 * Dynamically load a meeting's data based on Category and ID
 */
export async function getMeetingData(id: number): Promise<{
    meeting: Meeting;
    slides: Slide[];
    quiz: QuizQuestion[];
} | null> {
    const result = findMeetingById(id);
    if (!result) return null;

    const { meeting } = result;

    // Determine category and category-specific ID
    let category = '';
    let categoryId = 0;
    // The previous code used logical categories that matched folder names.
    // Now we map ID ranges to FOLDER NAMES.

    if (id >= 1 && id <= 30) {
        category = 'adults'; // Speaking Adults
        categoryId = id;
    } else if (id >= 31 && id <= 60) {
        category = 'kids'; // Speaking Kids
        categoryId = id - 30;
    } else if (id >= 61 && id <= 90) {
        category = 'basic'; // Basic Adults
        categoryId = id - 60;
    } else if (id >= 121 && id <= 150) {
        category = 'basic-kids'; // Basic Kids
        categoryId = id - 120;
    } else if (id >= 151 && id <= 180) {
        category = 'presentation'; // Presentation
        categoryId = id - 150;
    } else if (id >= 181 && id <= 240) {
        category = 'interview'; // Career Prep (Interview)
        categoryId = id - 180;
    }

    const paddedId = String(categoryId).padStart(2, '0');

    try {
        // Correct path-based dynamic import
        const module: MeetingDataModule = await import(`./slides/${category}/${category}-${paddedId}`);

        return {
            meeting: {
                ...meeting,
                slides: module.slides || [],
                quiz: module.quiz || [],
            },
            slides: module.slides || [],
            quiz: module.quiz || [],
        };
    } catch (error) {
        console.warn(`Slide data not found for ${category}-${paddedId}:`, error);
        return {
            meeting: { ...meeting, slides: [], quiz: [] },
            slides: [],
            quiz: [],
        };
    }
}

/**
 * Synchronous accessor for metadata only
 */
export function getMeetingById(id: number) {
    const result = findMeetingById(id);
    if (!result) return undefined;
    return { ...result.meeting, slides: [], quiz: [] };
}
