import React, { useState } from 'react';
import { PlacementQuestion } from '@/data/placement-questions';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MCQQuestionProps {
    question: PlacementQuestion;
    onAnswer: (isCorrect: boolean) => void;
}

export default function MCQQuestion({ question, onAnswer }: MCQQuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!selectedOption) return;
        setIsSubmitted(true);

        const isCorrect = selectedOption === question.correctAnswer;

        // Short delay to show feedback before moving on
        setTimeout(() => {
            onAnswer(isCorrect);
        }, 1500);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                    {question.passage && (
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4 text-base leading-relaxed text-slate-800">
                            {question.passageTitle && (
                                <h4 className="font-semibold text-slate-900 mb-2">{question.passageTitle}</h4>
                            )}
                            <p className="whitespace-pre-wrap">{question.passage}</p>
                        </div>
                    )}

                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-medium leading-relaxed">
                            {question.question}
                        </h3>
                        {question.category === 'grammar' || question.category === 'vocabulary' || question.category === 'reading' || question.category === 'critical_thinking' ? (
                            <span className="shrink-0 px-3 py-1 bg-muted rounded-full text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {question.category.replace('_', ' ')}
                            </span>
                        ) : null}
                    </div>

                    {question.questionIndo && (
                        <div className="flex items-start gap-2 text-muted-foreground bg-muted/30 p-3 rounded-lg text-sm">
                            <HelpCircle className="w-4 h-4 mt-0.5 shrink-0" />
                            <p className="italic">{question.questionIndo}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-3">
                    {question.options?.map((option) => {
                        const isSelected = selectedOption === option.id;
                        const isCorrect = option.id === question.correctAnswer;
                        const showCorrectness = isSubmitted && isCorrect;
                        const showIncorrectness = isSubmitted && isSelected && !isCorrect;

                        return (
                            <button
                                key={option.id}
                                onClick={() => !isSubmitted && setSelectedOption(option.id)}
                                disabled={isSubmitted}
                                className={cn(
                                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                                    isSelected && !isSubmitted
                                        ? "border-primary bg-primary/5 shadow-sm"
                                        : "border-muted hover:border-primary/50 hover:bg-muted/50",
                                    showCorrectness && "border-green-500 bg-green-50 text-green-700",
                                    showIncorrectness && "border-red-500 bg-red-50 text-red-700",
                                    isSubmitted && !isSelected && !isCorrect && "opacity-50"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-colors",
                                        isSelected ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground group-hover:border-primary/50",
                                        showCorrectness && "border-green-600 text-green-700 bg-green-100",
                                        showIncorrectness && "border-red-600 text-red-700 bg-red-100"
                                    )}>
                                        {option.id.toUpperCase()}
                                    </div>
                                    <span className="font-medium">{option.text}</span>
                                </div>

                                {showCorrectness && <CheckCircle className="w-5 h-5 text-green-600" />}
                                {showIncorrectness && <XCircle className="w-5 h-5 text-red-600" />}
                            </button>
                        );
                    })}
                </div>
            </Card>

            <div className="flex justify-end">
                <Button
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!selectedOption || isSubmitted}
                    className="w-full md:w-auto min-w-[140px]"
                >
                    {isSubmitted ? "Checking..." : "Submit Answer"}
                </Button>
            </div>

            {isSubmitted && question.explanation && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm border border-blue-100"
                >
                    <span className="font-bold mr-1">Explanation:</span>
                    {question.explanation}
                </motion.div>
            )}
        </div>
    );
}
