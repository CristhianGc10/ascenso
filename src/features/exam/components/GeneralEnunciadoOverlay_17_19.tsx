import React, { useMemo, useState } from 'react';

type Mode = 'closed' | 'open' | 'max' | 'min';

export type GeneralEnunciadoOverlay_17_19_Props = {
    isEnabled: boolean;
    triggerLabel?: string;
};

const TITLE =
    'Lea la siguiente situación y responda las preguntas 17, 18 y 19.';

export default function GeneralEnunciadoOverlay_17_19({
    isEnabled,
    triggerLabel = 'Mostrar enunciado',
}: GeneralEnunciadoOverlay_17_19_Props) {
    const [mode, setMode] = useState<Mode>('closed');

    const isOpen = mode === 'open' || mode === 'max';
    const isMin = mode === 'min';

    const content = useMemo(() => {
        return (
            <div style={{ display: 'grid', gap: 12 }}>
                {/* Párrafo contextual (normal) */}
                <div
                    style={{
                        fontSize: 16,
                        fontWeight: 400,
                        textAlign: 'justify',
                        hyphens: 'none',
                        WebkitHyphens: 'none' as any,
                        msHyphens: 'none' as any,
                        lineHeight: 1.5,
                    }}
                >
                    Un docente tiene como propósito que los estudiantes de
                    quinto grado expliquen las propiedades de la materia en
                    situaciones cotidianas. En este contexto, los estudiantes
                    analizan la siguiente situación presentada por el docente:
                </div>

                {/* Card con la situación */}
                <div
                    style={{
                        border: '1px solid #d0d7de',
                        background: '#f8fafc',
                        borderRadius: 10,
                        padding: '12px 14px',
                        display: 'grid',
                        gap: 10,
                        whiteSpace: 'pre-wrap',
                        textAlign: 'justify',
                        hyphens: 'none',
                        WebkitHyphens: 'none' as any,
                        msHyphens: 'none' as any,
                        lineHeight: 1.5,
                        fontSize: 16,
                    }}
                >
                    {`María está hirviendo agua en una tetera transparente. Ella se da cuenta de que, en el fondo de la tetera, se forman burbujas y que estas ascienden hacia la superficie del agua. Intrigada por el movimiento de las burbujas, María pregunta a sus familiares: “¿De qué están hechas las burbujas que se observan dentro de la tetera?”. Su tía responde: “Están hechas de calor”; luego, su hermano dice: “Esas burbujas están hechas de oxígeno”; finalmente, su abuela dice: “Esas burbujas están hechas de agua en estado gaseoso”.`}
                </div>
            </div>
        );
    }, []);

    const overlayBg = isOpen ? (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.35)',
                zIndex: 998,
            }}
        />
    ) : null;

    const panelStyleBase: React.CSSProperties = {
        position: 'fixed',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        background: '#fff',
        border: '1px solid #d0d7de',
        boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
    };

    const panelStyleOpen: React.CSSProperties = {
        ...panelStyleBase,
        width: 'min(920px, 92vw)',
        maxHeight: '80vh',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        overflow: 'hidden',
    };

    const panelStyleMax: React.CSSProperties = {
        ...panelStyleBase,
        left: '2vw',
        right: '2vw',
        top: '2vh',
        bottom: '2vh',
        overflow: 'hidden',
    };

    const minimizedChip = isMin ? (
        <div
            style={{
                position: 'fixed',
                left: '50%',
                bottom: 12,
                transform: 'translateX(-50%)',
                zIndex: 999,
                background: '#fff',
                border: '1px solid #d0d7de',
                boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                borderRadius: 999,
                padding: '6px 12px',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                cursor: 'pointer',
            }}
            onClick={() => setMode('open')}
            aria-label="Restaurar enunciado"
            title="Restaurar enunciado"
        >
            <span
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: '#1a73e8',
                }}
            />
            <span>{TITLE}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setMode('closed');
                }}
                style={{
                    marginLeft: 6,
                    border: '1px solid #d0d7de',
                    borderRadius: 12,
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f6f8fa',
                    cursor: 'pointer',
                    padding: 0,
                    lineHeight: 1,
                }}
                aria-label="Cerrar"
            >
                ✕
            </button>
        </div>
    ) : null;

    const iconBtn: React.CSSProperties = {
        border: '1px solid #d0d7de',
        background: '#f6f8fa',
        borderRadius: 6,
        width: 28,
        height: 28,
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1,
    };

    const header = (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 12px',
                borderBottom: '1px solid #e6eaef',
            }}
        >
            <strong style={{ fontSize: 16 }}>{TITLE}</strong>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                <button
                    onClick={() => setMode('min')}
                    aria-label="Minimizar"
                    style={iconBtn}
                    title="Minimizar"
                >
                    —
                </button>
                {mode === 'max' ? (
                    <button
                        onClick={() => setMode('open')}
                        aria-label="Restaurar"
                        style={iconBtn}
                        title="Restaurar"
                    >
                        ▭
                    </button>
                ) : (
                    <button
                        onClick={() => setMode('max')}
                        aria-label="Maximizar"
                        style={iconBtn}
                        title="Maximizar"
                    >
                        ▢
                    </button>
                )}
                <button
                    onClick={() => setMode('closed')}
                    aria-label="Cerrar"
                    style={iconBtn}
                    title="Cerrar"
                >
                    ✕
                </button>
            </div>
        </div>
    );

    const body = (
        <div style={{ padding: 12, overflowY: 'auto' }}>{content}</div>
    );

    return (
        <>
            {/* Trigger (NEUTRAL) */}
            <div style={{ marginBottom: 8 }}>
                <button
                    onClick={() => setMode('open')}
                    disabled={!isEnabled}
                    style={{
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: '1px solid #d0d7de',
                        background: isEnabled ? '#f6f8fa' : '#f1f1f1',
                        color: '#333',
                        cursor: isEnabled ? 'pointer' : 'not-allowed',
                    }}
                >
                    {triggerLabel}
                </button>
                {!isEnabled && (
                    <span
                        style={{ marginLeft: 8, color: '#666', fontSize: 13 }}
                    >
                        (No disponible para esta pregunta)
                    </span>
                )}
            </div>

            {overlayBg}
            {mode === 'open' && (
                <div style={panelStyleOpen}>
                    {header}
                    {body}
                </div>
            )}
            {mode === 'max' && (
                <div style={panelStyleMax}>
                    {header}
                    {body}
                </div>
            )}
            {minimizedChip}
        </>
    );
}
