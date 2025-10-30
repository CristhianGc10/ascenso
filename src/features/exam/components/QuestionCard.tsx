import React, { useState } from 'react';

import type { Pregunta } from '../../../core/types';

type Props = {
    q: Pregunta;
    selectedId: string | null;
    onSelect: (optionId: string) => void;
    onPrev: () => void;
    onNext: () => void;
    prevDisabled: boolean;
    nextDisabled: boolean;
};

// Resalta varias frases una sola vez cada una
function highlightMany(text: string, phrases: string[]) {
    type Seg = { t: string; h: boolean };
    let segs: Seg[] = [{ t: text, h: false }];
    for (const phrase of phrases) {
        if (!phrase) continue;
        const next: Seg[] = [];
        for (const s of segs) {
            if (s.h) {
                next.push(s);
                continue;
            }
            const parts = s.t.split(phrase);
            for (let i = 0; i < parts.length; i++) {
                const p = parts[i];
                if (p) next.push({ t: p, h: false });
                if (i < parts.length - 1) next.push({ t: phrase, h: true });
            }
        }
        segs = next;
    }
    return (
        <>
            {segs.map((s, i) =>
                s.h ? (
                    <u key={i}>
                        <strong>{s.t}</strong>
                    </u>
                ) : (
                    <span key={i}>{s.t}</span>
                )
            )}
        </>
    );
}

export default function QuestionCard({
    q,
    selectedId,
    onSelect,
    onPrev,
    onNext,
    prevDisabled,
    nextDisabled,
}: Props) {
    const baseFontSize = 16;
    const [overlayForId, setOverlayForId] = useState<string | null>(null);

    // Frases a resaltar por id de pregunta
    function renderEnunciado() {
        if (q.id === 'q1')
            return highlightMany(q.enunciado, ['deducir información']);
        if (q.id === 'q2')
            return highlightMany(q.enunciado, ['información explícita']);
        if (q.id === 'q3') return highlightMany(q.enunciado, ['más']);
        if (q.id === 'q4')
            return highlightMany(q.enunciado, ['reflexión sobre el contenido']);
        if (q.id === 'q5')
            return highlightMany(q.enunciado, ['deduzcan información']);
        if (q.id === 'q6')
            return highlightMany(q.enunciado, ['principalmente']);
        if (q.id === 'q7') return highlightMany(q.enunciado, ['se centra']);
        if (q.id === 'q8')
            return highlightMany(q.enunciado, ['es adecuada', 'planificación']);
        if (q.id === 'q9') return highlightMany(q.enunciado, ['priorizar']);
        if (q.id === 'q10') return highlightMany(q.enunciado, ['más']);
        return <>{q.enunciado}</>;
    }

    function handleSelect(id: string) {
        onSelect(id); // solo seleccionar (azul)
        setOverlayForId(null); // ocultar flotante hasta “Verificar”
    }

    function handleVerify() {
        if (selectedId) setOverlayForId(selectedId);
    }

    return (
        <div
            style={{
                border: '1px solid #e1e1e1',
                borderRadius: 8,
                padding: 16,
            }}
        >
            {/* Prefacio opcional */}
            {q.preface && (
                <div
                    style={{
                        marginBottom: 8,
                        fontWeight: 400,
                        fontSize: baseFontSize,
                        textAlign: 'justify',
                        hyphens: 'none',
                        WebkitHyphens: 'none' as any,
                        msHyphens: 'none' as any,
                    }}
                >
                    {q.preface}
                </div>
            )}

            {/* Cita/fragmento opcional en card */}
            {q.quote && (
                <div
                    style={{
                        border: '1px solid #d0d7de',
                        background: '#f8fafc',
                        borderRadius: 10,
                        padding: '12px 14px',
                        marginBottom: 10,
                        whiteSpace: 'pre-wrap',
                        textAlign: 'justify',
                        hyphens: 'none',
                        WebkitHyphens: 'none' as any,
                        msHyphens: 'none' as any,
                        lineHeight: 1.5,
                        fontSize: baseFontSize,
                    }}
                >
                    {q.quote}
                </div>
            )}

            {/* Enunciado: justificado, sin guiones */}
            <div
                style={{
                    marginBottom: 12,
                    fontWeight: 400,
                    fontSize: baseFontSize,
                    textAlign: 'justify',
                    hyphens: 'none',
                    WebkitHyphens: 'none' as any,
                    msHyphens: 'none' as any,
                }}
            >
                {renderEnunciado()}
            </div>

            {/* Opciones (alto adaptable, padding simétrico) */}
            <div style={{ display: 'grid', gap: 8 }}>
                {q.options.map((opt) => {
                    const selected = selectedId === opt.id;
                    const isCorrectOpt = q.answerId
                        ? opt.id === q.answerId
                        : false;
                    const showOverlay = overlayForId === opt.id;

                    return (
                        <div
                            key={opt.id}
                            style={{
                                position: 'relative',
                                overflow: 'visible',
                            }}
                        >
                            <button
                                onClick={() => handleSelect(opt.id)}
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    display: 'flex',
                                    gap: 10,
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    borderRadius: 10,
                                    border:
                                        '1px solid ' +
                                        (selected ? '#1a73e8' : '#c9c9c9'),
                                    background: selected ? '#eaf2ff' : '#fff',
                                    cursor: 'pointer',
                                    fontSize: baseFontSize,
                                    fontWeight: 400,
                                }}
                            >
                                {/* Cuadro letra: centrado eje X/Y */}
                                <span
                                    aria-hidden
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 20,
                                        minWidth: 20,
                                        height: 20,
                                        textAlign: 'center',
                                        borderRadius: 6,
                                        border: '1px solid #c9c9c9',
                                        background: '#f8f8f8',
                                        userSelect: 'none',
                                        textTransform: 'lowercase',
                                        fontSize: baseFontSize,
                                        flex: '0 0 20px',
                                    }}
                                >
                                    {opt.label.toLowerCase()}
                                </span>

                                {/* Texto opción (sin clamp) */}
                                <span style={{ flex: 1, lineHeight: 1.35 }}>
                                    {opt.texto}
                                </span>
                            </button>

                            {/* Flotante verificar */}
                            {showOverlay && (
                                <div
                                    role="status"
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        minHeight: '100%',
                                        borderRadius: 10,
                                        background: 'rgba(255,255,255,0.98)',
                                        border: '1px solid #d0d7de',
                                        boxShadow:
                                            '0 8px 20px rgba(0,0,0,0.15)',
                                        padding: '12px 14px',
                                        zIndex: 10,
                                        fontSize: baseFontSize,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        gap: 8,
                                        pointerEvents: 'auto',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: 999,
                                                background: isCorrectOpt
                                                    ? '#0a7'
                                                    : '#b00000',
                                                flex: '0 0 8px',
                                            }}
                                        />
                                        <strong
                                            style={{
                                                color: isCorrectOpt
                                                    ? '#075'
                                                    : '#700',
                                            }}
                                        >
                                            {isCorrectOpt
                                                ? 'Correcta.'
                                                : 'Incorrecta.'}
                                        </strong>
                                        <button
                                            onClick={() =>
                                                setOverlayForId(null)
                                            }
                                            aria-label="Cerrar explicación"
                                            style={{
                                                marginLeft: 'auto',
                                                border: '1px solid #d0d7de',
                                                borderRadius: 6,
                                                background: '#f6f8fa',
                                                cursor: 'pointer',
                                                width: 28,
                                                height: 28,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: 14,
                                                lineHeight: 1,
                                                padding: 0,
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div>
                                        {typeof opt.capacidad === 'number' ? (
                                            <>Capacidad {opt.capacidad}. </>
                                        ) : null}
                                        {opt.explicacion ?? 'Sin explicación.'}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Barra de acciones: Verificar (izq) + Navegación (der) */}
            <div
                style={{
                    marginTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    flexWrap: 'wrap',
                }}
            >
                {/* IZQUIERDA: Verificar (NEUTRAL) */}
                <button
                    onClick={handleVerify}
                    disabled={!selectedId}
                    style={{
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: '1px solid #d0d7de',
                        background: selectedId ? '#f6f8fa' : '#f1f1f1',
                        color: '#333',
                        cursor: selectedId ? 'pointer' : 'not-allowed',
                    }}
                >
                    Verificar
                </button>

                {/* DERECHA: Navegación */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                    <button
                        onClick={onPrev}
                        disabled={prevDisabled}
                        style={{
                            padding: '8px 12px',
                            borderRadius: 8,
                            border: '1px solid #d0d7de',
                            background: prevDisabled ? '#f1f1f1' : '#f6f8fa',
                            color: '#333',
                            cursor: prevDisabled ? 'not-allowed' : 'pointer',
                        }}
                    >
                        Anterior
                    </button>
                    <button
                        onClick={onNext}
                        disabled={nextDisabled}
                        style={{
                            padding: '8px 12px',
                            borderRadius: 8,
                            border: '1px solid #d0d7de',
                            background: nextDisabled ? '#f1f1f1' : '#f6f8fa',
                            color: '#333',
                            cursor: nextDisabled ? 'not-allowed' : 'pointer',
                        }}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}
