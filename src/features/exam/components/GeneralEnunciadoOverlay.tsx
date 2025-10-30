import React, { useMemo, useState } from 'react';

type Mode = 'closed' | 'open' | 'max' | 'min';

export type GeneralEnunciadoOverlayProps = {
    isEnabled: boolean;
    triggerLabel?: string;
};

const TITLE = 'Lea la siguiente situación y responda las preguntas 1, 2 y 3.';

export default function GeneralEnunciadoOverlay({
    isEnabled,
    triggerLabel = 'Mostrar enunciado',
}: GeneralEnunciadoOverlayProps) {
    const [mode, setMode] = useState<Mode>('closed');

    const isOpen = mode === 'open' || mode === 'max';
    const isMin = mode === 'min';

    // Contenido SIN repetir el título (TITLE solo en encabezado/minimizado)
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
                    Como parte de un proyecto de aprendizaje para promover la
                    difusión de destacados deportistas peruanos, los estudiantes
                    de sexto grado, con apoyo del docente, se encuentran leyendo
                    diversos textos sobre dichos deportistas. A continuación, se
                    presenta uno de estos textos:
                </div>

                {/* Card con el texto completo y la referencia pequeña */}
                <div
                    style={{
                        border: '1px solid #d0d7de',
                        background: '#f8fafc',
                        borderRadius: 10,
                        padding: '12px 14px',
                        display: 'grid',
                        gap: 10,
                    }}
                >
                    <p
                        style={{
                            margin: 0,
                            fontSize: 16,
                            textAlign: 'justify',
                            lineHeight: 1.5,
                            hyphens: 'none',
                            WebkitHyphens: 'none' as any,
                            msHyphens: 'none' as any,
                        }}
                    >
                        Angélica Espinoza Carranza se inició en el parataekwondo
                        en 2017. Ella nació sin una parte del brazo izquierdo.
                        Esto es consecuencia de la agenesia, una condición
                        congénita caracterizada por la imposibilidad de
                        desarrollo de un órgano. Sin embargo, ello no fue
                        impedimento para que practique el parataekwondo, un
                        deporte derivado del taekwondo, y que es practicado por
                        personas con discapacidad física, visual o intelectual.
                        El parataekwondo está regulado por la Federación Mundial
                        de Taekwondo.
                    </p>

                    <p
                        style={{
                            margin: 0,
                            fontSize: 16,
                            textAlign: 'justify',
                            lineHeight: 1.5,
                            hyphens: 'none',
                            WebkitHyphens: 'none' as any,
                            msHyphens: 'none' as any,
                        }}
                    >
                        En 2017, el recién formado Comité de Parataekwondo del
                        Perú se vio en la tarea de salir a buscar paratletas
                        para formarlos en esa disciplina deporƟva. Algunos
                        miembros de ese comité eran Delicia Paredes e Yvonne de
                        la Cruz, ambas miembros de la Federación Peruana de
                        Taekwondo. Ellas buscaron incansablemente en los centros
                        de atención a personas con discapacidad en las Fuerzas
                        Armadas, academias, entre otros. Fue en uno de estos
                        centros, donde Angélica practicaba natación, cuando las
                        integrantes del comité vieron su capacidad y la
                        convencieron de que se animara a pracƟcar el deporte del
                        parataekwondo. Al mes de comenzar a entrenar, con ayuda
                        de Yvonne de la Cruz, Angélica ganó su primera medalla
                        en Costa Rica.
                    </p>

                    <p
                        style={{
                            margin: 0,
                            fontSize: 16,
                            textAlign: 'justify',
                            lineHeight: 1.5,
                            hyphens: 'none',
                            WebkitHyphens: 'none' as any,
                            msHyphens: 'none' as any,
                        }}
                    >
                        Su consagración se dio luego de recibir varios
                        reconocimientos en todo el Perú. Angélica, incluso fue
                        la abanderada de nuestro país en los Juegos
                        Parapanamericanos de 2019. En los Juegos Paralímpicos de
                        Tokio en 2020, después de 21 largos años, el Perú obtuvo
                        su primera medalla de oro gracias a la destacada
                        participación de Angélica. La anterior medalla había
                        sido alcanzada por Jimmy Eulert (paranatación) en Sydney
                        2000. En 2021, Angélica consiguió una medalla de oro en
                        el Parapanamericano de Taekwondo. Además, ha sido
                        declarada como la mejor parataekwondista de 2021 por la
                        Federación Mundial de Taekwondo. Ella confía en que sus
                        logros ayudarán a generar mayor conciencia para
                        visibilizar y apoyar el paradeporte en el país.
                    </p>

                    <div
                        style={{
                            fontSize: 13,
                            color: '#555',
                            textAlign: 'justify',
                            lineHeight: 1.45,
                            hyphens: 'none',
                            WebkitHyphens: 'none' as any,
                            msHyphens: 'none' as any,
                        }}
                    >
                        Adaptado de El Comercio. (2021). “Así descubrieron a
                        Angélica Espinoza: de una piscina en el campo de Marte a
                        la medalla de oro de Tokio 2020”.
                        https://elcomercio.pe/somos/historias/
                    </div>
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
