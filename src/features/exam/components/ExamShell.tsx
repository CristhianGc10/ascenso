// src/features/exam/components/ExamShell.tsx

import { DURATION_MS, TITLE } from '../../../core/constants';
import type { EnunciadoId, Pregunta } from '../../../core/types';
import React, { useMemo, useState } from 'react';

import ControlsBar from './ControlsBar';
import { ENUNCIADOS } from '../../../data/enunciados';
import EnunciadoModal from './EnunciadoModal';
import ExplanationModal from './ExplanationModal';
import ProgressDots from './ProgressDots';
import QuestionCard from './QuestionCard';
import ScoreSummary from './ScoreSummary';
import bankPart01 from '../../../data/questions/part-01';
import { useExamEngine } from '../hooks/useExamEngine';
import { useHiddenTimer } from '../hooks/useHiddenTimer';

export default function ExamShell() {
    const bank: Pregunta[] = useMemo(() => bankPart01, []);
    const engine = useExamEngine(bank);

    // Timer oculto: si vence y no hay intento, se registra error y avanza
    useHiddenTimer(DURATION_MS, String(engine.q.id), () => {
        engine.commitTimeout();
        engine.next();
    });

    const [explainOpen, setExplainOpen] = useState(false);
    const [ctxOpen, setCtxOpen] = useState(false);

    const intentoActual =
        engine.attempts.find((a) => a.qid === engine.q.id) || null;
    const submitted = engine.submitted;
    const canExplain = !!intentoActual;

    const group = engine.q.group as EnunciadoId;
    const ctx = ENUNCIADOS[group] || { titulo: 'Enunciado', contenido: '—' };

    function handleNext() {
        if (!submitted) {
            // Saltar sin comprobar => cuenta como omitida/incorrecta
            engine.skip();
        }
        engine.next();
    }

    if (engine.finished) {
        return (
            <div className="card">
                <div className="title">{TITLE}</div>
                <div className="sub">Resumen del intento</div>
                <ScoreSummary
                    score={engine.score}
                    attempts={engine.attempts}
                    total={engine.total}
                />
            </div>
        );
    }

    return (
        <>
            <div className="card">
                <div className="spread">
                    <div>
                        <div className="h1">{TITLE}</div>
                        <div className="sub">
                            Pregunta {engine.index + 1} de {engine.total}
                        </div>
                    </div>
                    <ProgressDots
                        total={engine.total}
                        index={engine.index}
                        attempts={engine.attempts}
                    />
                </div>

                <div className="hr"></div>

                <QuestionCard
                    q={engine.q}
                    seleccion={engine.seleccion}
                    submitted={submitted}
                    onSelect={engine.selectOption}
                />

                <ControlsBar
                    submitted={submitted}
                    onShowEnunciado={() => setCtxOpen(true)}
                    onShowFundamentos={() => setExplainOpen(true)}
                    canExplain={canExplain}
                    onSubmit={engine.submit}
                    canSubmit={engine.seleccion !== null}
                    onNext={handleNext}
                />
            </div>

            <ExplanationModal
                open={explainOpen}
                onClose={() => setExplainOpen(false)}
                q={engine.q}
                seleccion={engine.seleccion}
            />

            <EnunciadoModal
                open={ctxOpen}
                titulo={ctx.titulo}
                contenido={ctx.contenido}
                onClose={() => setCtxOpen(false)}
            />
        </>
    );
}
