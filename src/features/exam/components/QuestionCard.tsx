// src/features/exam/components/QuestionCard.tsx

import type { Pregunta } from '../../../core/types';
import React from 'react';

type Props = {
    q: Pregunta;
    seleccion: number | null;
    submitted: boolean;
    onSelect: (idx: number) => void;
};

function asText(opt: any): string {
    if (opt == null) return '';
    if (typeof opt === 'string') return opt;
    // soporta { text }, o { label } como fallback
    return opt.text ?? String(opt.label ?? '');
}

function badgeFor(opt: any, idx: number): string {
    const fallback = String.fromCharCode(65 + idx); // A, B, C...
    if (opt == null) return fallback;
    // soporta { key } o { label } para la badge; si no hay, usa fallback
    const k = typeof opt === 'string' ? null : opt.key ?? opt.label ?? null;
    return k != null ? String(k).toUpperCase() : fallback;
}

export default function QuestionCard({
    q,
    seleccion,
    submitted,
    onSelect,
}: Props) {
    const opts: any[] = Array.isArray(q.options) ? q.options : [];

    // tolera 'answer' o 'correct' como índice de respuesta correcta
    const correctIndex: number | null =
        (q as any).answer ?? (q as any).correct ?? null;

    return (
        <div>
            <div className="title">{q.prompt}</div>

            <div className="options">
                {opts.map((opt, idx) => {
                    const isSelected = seleccion === idx;
                    const isCorrect =
                        submitted &&
                        correctIndex !== null &&
                        idx === correctIndex;
                    const isWrong =
                        submitted &&
                        isSelected &&
                        correctIndex !== null &&
                        idx !== correctIndex;

                    let cls = 'opt';
                    if (isCorrect) cls += ' correct';
                    else if (isWrong) cls += ' wrong';
                    else if (isSelected) cls += ' chosen';

                    const badge = badgeFor(opt, idx);
                    const text = asText(opt);

                    return (
                        <button
                            key={idx}
                            type="button"
                            className={cls}
                            onClick={() => !submitted && onSelect(idx)}
                            disabled={submitted}
                        >
                            <div className="badge">{badge}</div>
                            <div
                                style={{
                                    textAlign: 'left',
                                    whiteSpace: 'pre-wrap',
                                }}
                            >
                                {text}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
