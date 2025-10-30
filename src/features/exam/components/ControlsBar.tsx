import React from 'react';

type Props = {
    submitted: boolean;
    onShowEnunciado: () => void;
    onShowFundamentos: () => void;
    canExplain: boolean;
    onSubmit: () => void;
    canSubmit: boolean;
    onNext: () => void;
};

export default function ControlsBar({
    submitted,
    onShowEnunciado,
    onShowFundamentos,
    canExplain,
    onSubmit,
    canSubmit,
    onNext,
}: Props) {
    return (
        <div className="spread" style={{ marginTop: 12 }}>
            <div className="row">
                <button className="btn" onClick={onShowEnunciado}>
                    Ver enunciado
                </button>
                <button
                    className="btn"
                    onClick={onShowFundamentos}
                    disabled={!canExplain}
                >
                    Ver fundamentos
                </button>
            </div>
            <div className="row">
                <button
                    className="btn ok"
                    onClick={onSubmit}
                    disabled={submitted || !canSubmit}
                    title={
                        submitted
                            ? 'Ya comprobado'
                            : canSubmit
                            ? 'Comprobar mi respuesta'
                            : 'Selecciona una opción'
                    }
                >
                    Comprobar
                </button>
                <button className="btn brand" onClick={onNext}>
                    Siguiente
                </button>
            </div>
        </div>
    );
}
