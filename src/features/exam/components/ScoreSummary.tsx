import React from 'react';

type Props = {
    total: number;
    correct: number;
};

export default function ScoreSummary({ total, correct }: Props) {
    const incorrect = Math.max(0, total - correct);

    return (
        <div
            style={{
                border: '1px solid #d0d7de',
                borderRadius: 10,
                padding: '12px 14px',
                background: '#fff',
            }}
        >
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Resultados</div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <div>
                    <strong>Correctas:</strong> {correct}
                </div>
                <div>
                    <strong>Incorrectas:</strong> {incorrect}
                </div>
                <div>
                    <strong>Total:</strong> {total}
                </div>
            </div>
        </div>
    );
}
