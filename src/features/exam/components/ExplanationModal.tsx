import React from 'react';

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    content?: string;
};

export default function ExplanationModal({
    open,
    onClose,
    title,
    content,
}: Props) {
    if (!open) return null;
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                display: 'grid',
                placeItems: 'center',
                padding: 16,
            }}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: 8,
                    padding: 16,
                    width: 'min(720px, 92vw)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <h3 style={{ margin: 0 }}>{title ?? 'Explicación'}</h3>
                    <button
                        onClick={onClose}
                        aria-label="Cerrar"
                        style={{ cursor: 'pointer' }}
                    >
                        ✕
                    </button>
                </div>
                <div style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>
                    {content ?? 'Sin contenido'}
                </div>
            </div>
        </div>
    );
}
