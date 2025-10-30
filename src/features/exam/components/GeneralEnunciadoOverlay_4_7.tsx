import React, { useMemo, useState } from 'react';

type Mode = 'closed' | 'open' | 'max' | 'min';

export type GeneralEnunciadoOverlay_4_7_Props = {
    isEnabled: boolean;
    triggerLabel?: string;
};

const TITLE =
    'Lea la siguiente situación y responda las preguntas 4, 5, 6 y 7.';

export default function GeneralEnunciadoOverlay_4_7({
    isEnabled,
    triggerLabel = 'Mostrar enunciado',
}: GeneralEnunciadoOverlay_4_7_Props) {
    const [mode, setMode] = useState<Mode>('closed');

    const isOpen = mode === 'open' || mode === 'max';
    const isMin = mode === 'min';

    // Contenido exacto solicitado: párrafo normal + card con el cuento + referencia
    const content = useMemo(() => {
        return (
            <div style={{ display: 'grid', gap: 12 }}>
                {/* Fragmento normal */}
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
                    Como parte de una situación de lectura, los estudiantes de
                    segundo grado están leyendo diversos textos. Uno de estos es
                    el siguiente:
                </div>

                {/* Card con el cuento */}
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
                    {`Había una vez una casa enorme.
Tan grande era que, para abrir la puerta, había que subirse a una escalera.
Adentro de la casa, vivían dos gatos chiquititos: uno negro y uno blanco.
La gata blanca se llamaba Luna.
El gato negro se llamaba Noche.
Luna no podía vivir sin Noche.
Noche no podía vivir sin Luna.
Sobre los dos gatos, vivían tres pulgas: Lucrecia, Damasia y Amaranta. Todos los días, las pulgas jugaban carreras de saltos entre las cabezas de Noche y de Luna.
A veces, Lucrecia picaba la oreja de la gata.
– Perdóname, Luna. No quise lastimarte –le decía.
En otras ocasiones, el gato se rascaba con fuerza.
– Disculpen, chicas, se me fue la pata –maullaba Noche.
Así vivían los gatos chiquititos con sus pulguitas en la casa enorme. Hasta que, un día, la inmensa puerta se abrió.
Y entraron muebles.
Detrás de los muebles, entraron personas.
Detrás de las personas, entró... un grandííísimo, pesado y orejudo perro.
Luna y Noche se escondieron en un rincón.
– ¡Cielo, tu comida! –se escuchó. Pero Cielo, el perrazo, olfateaba el aroma de los gatos.
– GGGRRRRRRR –gruñía, mientras levantaba los labios y mostraba sus dientes afilados.
Cuando la trompa ya estaba cerquita de Luna y de Noche, Lucrecia, Damasia y Amaranta saltaron a la cabeza de Cielo. Entre ceja y ceja, picotearon su piel.
El perro se puso bizco y sacudía la cabeza aullando.
– ¡Basta! –gritó Noche. – ¡Vuelvan a casa! –dijo Luna. Y las tres pulgas saltaron sobre los gatos.
Cielo suspiró y los miró agradecido.
Desde ese día, Luna y Noche duermen bajo las orejas de Cielo.
De vez en cuando, solo de vez en cuando, el perro les permite a las tres pulgas jugar en su cabeza.
Esta fue la historia de un gran perro, dos gatos chiquiƟtos y tres pulguitas que vivían en una casa enorme.
Cielo no puede vivir sin Luna y sin Noche.
Noche y Luna no pueden vivir sin Cielo.
Y Lucrecia, Damasia y Amaranta no pueden vivir sin ninguno de los tres.`}

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
                        Eggers Lan, M. (1998). “Noche, Luna y Cielo”. En{' '}
                        <em>Cuentos para los más chicos</em>. Colección: “Las
                        Abuelas nos cuentan” (2013).
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
