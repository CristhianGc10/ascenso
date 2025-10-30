import React, { useEffect, useMemo } from 'react';

import GeneralEnunciadoOverlay from './GeneralEnunciadoOverlay';
import GeneralEnunciadoOverlay_13_14 from './GeneralEnunciadoOverlay_13_14';
import GeneralEnunciadoOverlay_4_7 from './GeneralEnunciadoOverlay_4_7';
import GeneralEnunciadoOverlay_8_10 from './GeneralEnunciadoOverlay_8_10';
import type { Pregunta } from '../../../core/types';
import QuestionCard from './QuestionCard';
import ScoreSummary from './ScoreSummary';
import { correctExplanations } from '../../../data/correct-explanations';
import { mergeCorrectExplanations } from '../utils/mergeCorrectExplanations';
import { prepareQuestions } from '../utils/prepareQuestions';
import { questions } from '../../../data/questions';
import { useExamEngine } from '../hooks/useExamEngine';

const PER_QUESTION_MS = 100_000; // 1 min 40 s

export default function ExamShell() {
    const prepared: Pregunta[] = useMemo(
        () => prepareQuestions(questions, { shuffle: false }),
        []
    );
    const qs: Pregunta[] = useMemo(
        () => mergeCorrectExplanations(prepared, correctExplanations),
        [prepared]
    );

    const [state, act] = useExamEngine(qs);

    const currentAnswered = state.answered[state.current?.id];
    const selectedId = currentAnswered?.selectedId ?? null;

    const qid = state.current?.id;
    const showOverlay_1_3 = qid === 'q1' || qid === 'q2' || qid === 'q3';
    const showOverlay_4_7 =
        qid === 'q4' || qid === 'q5' || qid === 'q6' || qid === 'q7';
    const showOverlay_8_10 = qid === 'q8' || qid === 'q9' || qid === 'q10';
    const showOverlay_13_14 = qid === 'q13' || qid === 'q14';

    // Temporizador invisible por pregunta
    useEffect(() => {
        if (!qid || state.completed) return;
        const t = setTimeout(() => {
            if (state.index < state.questions.length - 1) {
                act.next();
            } else {
                act.next();
            }
        }, PER_QUESTION_MS);
        return () => clearTimeout(t);
    }, [qid, state.completed, state.index, state.questions.length, act]);

    return (
        <div>
            {showOverlay_1_3 && (
                <GeneralEnunciadoOverlay
                    isEnabled
                    triggerLabel="Mostrar enunciado"
                />
            )}
            {showOverlay_4_7 && (
                <GeneralEnunciadoOverlay_4_7
                    isEnabled
                    triggerLabel="Mostrar enunciado"
                />
            )}
            {showOverlay_8_10 && (
                <GeneralEnunciadoOverlay_8_10
                    isEnabled
                    triggerLabel="Mostrar enunciado"
                />
            )}
            {showOverlay_13_14 && (
                <GeneralEnunciadoOverlay_13_14
                    isEnabled
                    triggerLabel="Mostrar enunciado"
                />
            )}

            {state.current && (
                <QuestionCard
                    q={state.current}
                    selectedId={selectedId}
                    onSelect={act.select}
                    onPrev={act.prev}
                    onNext={act.next}
                    prevDisabled={state.index === 0}
                    nextDisabled={state.index === state.questions.length - 1}
                />
            )}

            {state.completed && (
                <div style={{ marginTop: 16 }}>
                    <ScoreSummary
                        total={state.questions.length}
                        correct={state.totalCorrect}
                    />
                </div>
            )}
        </div>
    );
}
