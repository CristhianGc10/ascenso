import ExamShell from './features/exam/components/ExamShell';
import React from 'react';

export default function App() {
    return (
        <div
            style={{
                fontFamily: 'system-ui, Arial, sans-serif',
                padding: 16,
                maxWidth: 960,
                margin: '0 auto',
            }}
        >
            <h1 style={{ marginBottom: 4 }}>Ascenso Docente Perú</h1>
            <p style={{ marginTop: 0, color: '#444' }}>
                Práctica y repaso por preguntas.
            </p>
            <ExamShell />
        </div>
    );
}
