import type { Intento } from '../../../core/types';
import React from 'react';

type Props = {
    total: number;
    index: number;
    attempts: Intento[];
};

export default function ProgressDots({ total, index, attempts }: Props) {
    return (
        <div className="progress">
            {Array.from({ length: total }).map((_, i) => {
                const qid = `P${i + 1}`;
                const att = attempts.find((a) => a.qid === qid);
                const cls =
                    i === index
                        ? 'active'
                        : att
                        ? `done ${att.correcta ? 'ok' : 'bad'}`
                        : '';
                return <div key={i} className={`dot ${cls}`} />;
            })}
        </div>
    );
}
