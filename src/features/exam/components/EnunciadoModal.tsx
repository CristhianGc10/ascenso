import React, { useState } from 'react';

type Props = {
    open: boolean;
    titulo: string;
    contenido: string;
    onClose: () => void;
};

export default function EnunciadoModal({
    open,
    titulo,
    contenido,
    onClose,
}: Props) {
    const [min, setMin] = useState(false);
    const [max, setMax] = useState(true);

    if (!open) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className={`modal ${min ? 'min' : ''}`}
                style={{ width: max ? 'min(1100px,96vw)' : 'min(700px,90vw)' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">{titulo}</div>
                <div className="modal-body">
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                        {contenido}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={() => setMin((v) => !v)}>
                        {min ? 'Maximizar' : 'Minimizar'}
                    </button>
                    <button className="btn" onClick={() => setMax((v) => !v)}>
                        {max ? 'Reducir ancho' : 'Maximizar ancho'}
                    </button>
                    <button className="btn bad" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
