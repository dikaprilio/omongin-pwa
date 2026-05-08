/**
 * Curriculum Data Types
 * ---------------------
 * Type definitions for the English course curriculum.
 * Used by all meeting/slide data files.
 */

export type SlideType =
    | 'title'
    | 'concept'
    | 'formula'
    | 'vocabulary'
    | 'comparison'
    | 'case-study'
    | 'roleplay'
    | 'recap'
    | 'mission'
    // Presentation-specific types
    | 'pres-script'      // Script with action + dialogue
    | 'pres-language'    // Grammar/vocabulary focus
    | 'pres-delivery'    // Body language, voice, eye contact tips
    | 'pres-qa'          // Q&A practice with sample answers
    | 'pres-phase'       // Phase header (Phase 1, Phase 2, etc.)
    | 'full-text'        // Long text display (e.g., full script view)
    | 'steps'            // Sequential steps (e.g., Step 1 -> Step 2 -> Step 3)
    | 'simulation'       // Network Event / Roleplay simulation with timer/prompt
    | 'micro-drill'        // Quick oral practice (Light mode)
    | 'pres-technique'    // Specific technique with steps and reasoning
    | 'pres-checklist'    // Preparation/Requirement checklist
    | 'pres-mindset'      // Before/After reframing
    | 'pres-impact'       // Impactful quote/philosophy
    // Interview-specific types
    | 'int-vocab'         // Interview vocabulary table (Term | Meaning | Example)
    | 'int-scenario'      // Interview Q&A with STAR-structured model answer
    | 'int-mock';         // Mock interview setup with role card + question list

export interface ComparisonRow {
    wrong: string;
    right: string;
}

export interface VocabularyItem {
    term: string;
    meaning: string;
    example?: string;
}

export interface PronunciationItem {
    word: string;
    ipa: string;
    tip: string;
}

export interface RecapRow {
    context: string;
    sayThis: string;
    dontSayThis: string;
}

export interface CaseStudy {
    scenario: string;
    template: string;
}

// Presentation-curriculum specific interfaces
export interface ScriptStep {
    action: string;    // e.g., "Stand tall, smile"
    script: string;    // e.g., "Good morning, teacher..."
    label?: string;    // e.g., "Opening", "Introduction"
}

export interface LanguagePoint {
    category: string;  // e.g., "Sequence Connectors"
    items: string[];   // e.g., ["First", "Then", "After that"]
    note?: string;     // e.g., "Stress these words"
}

export interface DeliveryTip {
    icon: string;      // emoji e.g., "👋" or "👁️"
    tip: string;       // e.g., "Stand to the side of the poster"
}

export interface QAItem {
    question: string;
    answer: string;
}

export interface Slide {
    type: SlideType;
    title: string;
    subtitle?: string;
    content?: string[];
    teacherNote?: string;
    comparison?: ComparisonRow[];
    formula?: string;
    vocabulary?: VocabularyItem[];
    caseStudy?: CaseStudy;
    recap?: RecapRow[];
    mission?: string[];
    pronunciations?: PronunciationItem[];
    image?: string;
    // Presentation-specific fields
    scriptSteps?: ScriptStep[];
    languagePoints?: LanguagePoint[];
    deliveryTips?: DeliveryTip[];
    qaItems?: QAItem[];
    phaseNumber?: number;
    fullText?: string;     // Long text for 'full-text' slide type
    steps?: StepItem[];    // For 'steps' slide type
    simulation?: Simulation; // For 'simulation' slide type
    roleplay?: Roleplay; // For 'roleplay' slide type
    // New Presentation Types
    technique?: PresTechnique;
    checklist?: PresChecklist;
    mindset?: PresMindset;
    impact?: PresImpact;
    // Interview Types
    interviewVocab?: InterviewVocabItem[];
    interviewScenario?: InterviewScenario;
    mockInterview?: MockInterview;
}

export interface Simulation {
    role: string;
    scenario: string;
    goal: string;
    timeLimit?: number; // seconds
}

export interface RoleplayRole {
    role: string;
    goal: string;
}

export interface Roleplay {
    scenario: string;
    roles: RoleplayRole[];
}

export interface StepItem {
    id: number | string;
    title: string;
    description: string;
    icon?: string;
}

export interface PresTechnique {
    name: string;
    description: string;
    steps?: string[];
    whyItWorks?: string;
    icon?: string;
}

export interface PresChecklist {
    title: string;
    items: string[];
}

export interface PresMindset {
    before: string;
    after: string;
    bridgeText: string;
}

export interface PresImpact {
    quote: string;
    author?: string;
    accentColor?: string;
}

// Interview-specific interfaces
export interface InterviewVocabItem {
    term: string;
    meaning: string;
    example: string;
    category?: string; // e.g., "Technical", "Behavioral"
}

export interface InterviewScenario {
    question: string;
    starAnswer: {
        situation: string;
        task: string;
        action: string;
        result: string;
    };
    tip?: string;
}

export interface MockInterview {
    jobTitle: string;
    company: string;
    questions: string[];
    context: string;
}

export interface QuizQuestion {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

/**
 * Meeting metadata (without slides - slides are loaded dynamically)
 */
export interface MeetingMeta {
    id: number;
    title: string;
    skill: string;
    fix: string;
}

/**
 * Full meeting data (with slides loaded)
 */
export interface Meeting extends MeetingMeta {
    slides: Slide[];
    quiz: QuizQuestion[];
}

/**
 * Phase containing multiple meetings
 */
export interface Phase {
    id: number;
    title: string;
    goal: string;
    meetings: MeetingMeta[];
}

/**
 * Meeting data module structure (exported by each meeting-XXX.ts file)
 */
export interface MeetingDataModule {
    slides: Slide[];
    quiz: QuizQuestion[];
}
