import type { Slide, QuizQuestion } from '../../types';

export const slides: Slide[] = [
    {
        type: 'title',
        title: "Kids Grammar 15",
        subtitle: "Coming Soon",
        teacherNote: "Content under development.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920"
    }
];

export const quiz: QuizQuestion[] = [
    {
        question: 'Placeholder Question',
        options: ['Option A', 'Option B', 'Option C'],
        correctIndex: 0,
        explanation: 'This is a placeholder.'
    }
];
