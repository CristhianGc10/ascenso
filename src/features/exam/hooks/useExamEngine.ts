import type { Pregunta, RespuestaMarcada } from '../../../core/types';
import { useMemo, useState } from 'react';

export type ExamState = {
    questions: Pregunta[];
    index: number;
    current: Pregunta;
    answered: Record<string, RespuestaMarcada>;
    completed: boolean;
    totalCorrect: number;
};

export type ExamActions = {
    select: (optionId: string) => void;
    next: () => void;
    prev: () => void;
    goTo: (i: number) => void;
    reset: () => void;
};

export function useExamEngine(all: Pregunta[]): [ExamState, ExamActions] {
    const [index, setIndex] = useState(0);
    const [answered, setAnswered] = useState<Record<string, RespuestaMarcada>>(
        {}
    );

    const current = all[index];
    const completed = useMemo(
        () => Object.keys(answered).length === all.length && all.length > 0,
        [answered, all.length]
    );
    const totalCorrect = useMemo(
        () =>
            Object.values(answered).reduce(
                (acc, r) => acc + (r.isCorrect ? 1 : 0),
                0
            ),
        [answered]
    );

    function select(optionId: string) {
        const q = all[index];
        const isCorrect = optionId === q.answerId;
        setAnswered((prev) => ({
            ...prev,
            [q.id]: {
                questionId: q.id,
                selectedId: optionId,
                isCorrect,
            },
        }));
    }

    function next() {
        setIndex((i) => Math.min(i + 1, all.length - 1));
    }

    function prev() {
        setIndex((i) => Math.max(i - 1, 0));
    }

    function goTo(i: number) {
        if (Number.isFinite(i))
            setIndex(Math.max(0, Math.min(i, all.length - 1)));
    }

    function reset() {
        setIndex(0);
        setAnswered({});
    }

    return [
        {
            questions: all,
            index,
            current,
            answered,
            completed,
            totalCorrect,
        },
        { select, next, prev, goTo, reset },
    ];
}
