import type { Pregunta } from '../../../core/types';
import React from 'react';

type Props = {
    open: boolean;
    onClose: () => void;
    q: Pregunta;
    seleccion: null | 'a' | 'b' | 'c';
};

export default function ExplanationModal({
    open,
    onClose,
    q,
    seleccion,
}: Props) {
    if (!open) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">Fundamentos</div>
                <div className="modal-body">
                    <div className="kv" style={{ marginBottom: 12 }}>
                        <b>Pregunta</b>
                        <div>{q.titulo}</div>
                        <b>Seleccionaste</b>
                        <div>{seleccion ? seleccion.toUpperCase() : '—'}</div>
                    </div>

                    {q.opciones.map((o) => (
                        <div
                            key={o.letra}
                            className="card"
                            style={{
                                padding: 12,
                                borderColor: o.correcta
                                    ? 'rgba(34,197,94,.6)'
                                    : 'rgba(255,255,255,.06)',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: 10,
                                    alignItems: 'center',
                                }}
                            >
                                <div className="badge">
                                    {o.letra.toUpperCase()}
                                </div>
                                <div style={{ fontWeight: 700 }}>
                                    {o.correcta ? 'Correcta' : 'Incorrecta'}
                                </div>
                            </div>
                            <div className="sub" style={{ marginTop: 6 }}>
                                {o.texto}
                            </div>
                            <div style={{ fontSize: 14 }}>{o.explicacion}</div>
                        </div>
                    ))}
                    <div className="small" style={{ marginTop: 10 }}>
                        Basado en competencias del CNEB: “Lee diversos tipos de
                        textos escritos” (obtiene información, infiere e
                        interpreta, reflexiona y evalúa).
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
