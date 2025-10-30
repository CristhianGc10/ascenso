import type { Intento, Puntaje } from '../../../core/types';

import React from 'react';

type Props = {
    score: Puntaje;
    attempts: Intento[];
    total: number;
};

export default function ScoreSummary({ score, attempts, total }: Props) {
    return (
        <div className="card">
            <div className="title">Resultado</div>
            <div className="kv" style={{ marginTop: 8 }}>
                <b>Total preguntas</b>
                <div>{total}</div>
                <b>Aciertos</b>
                <div style={{ color: 'var(--ok)', fontWeight: 700 }}>
                    {score.aciertos}
                </div>
                <b>Errores</b>
                <div style={{ color: 'var(--bad)', fontWeight: 700 }}>
                    {score.errores}
                </div>
            </div>

            <div className="hr"></div>

            <div className="sub">Detalle</div>
            <div style={{ display: 'grid', gap: 6 }}>
                {attempts.map((a) => (
                    <div
                        key={a.qid}
                        className="row"
                        style={{ justifyContent: 'space-between' }}
                    >
                        <div>
                            <b>{a.qid}</b> {a.timeout ? '(tiempo vencido)' : ''}
                        </div>
                        <div
                            style={{
                                color: a.correcta ? 'var(--ok)' : 'var(--bad)',
                                fontWeight: 700,
                            }}
                        >
                            {a.correcta ? 'Correcta' : 'Incorrecta'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
