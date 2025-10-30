// Tipos centrales

export type Opcion = {
    id: string;
    label: string; // 'A' | 'B' | 'C' | ...
    texto: string;
    explicacion?: string; // feedback por alternativa
    capacidad?: number; // 1 | 2 | 3 ...
};

export type Pregunta = {
    id: string;
    // Texto principal de la pregunta (se renderiza justificado y con posibles resaltados)
    enunciado: string;
    // Contenido opcional que aparece ANTES del enunciado:
    preface?: string; // pequeño párrafo previo, justificado
    quote?: string; // bloque tipo “card” (por ejemplo, texto entre comillas)
    options: Opcion[];
    correctLabel?: string; // letra oficial
    answerId?: string; // se deriva de correctLabel al preparar
    imagenUrl?: string;
    etiqueta?: string;
};

export type RespuestaMarcada = {
    questionId: string;
    selectedId: string | null;
    isCorrect: boolean | null;
};
