// src/core/types.ts

/** Id que asocia la pregunta a un enunciado/situación (p. ej., "1-3"). */
export type EnunciadoId = string;

export type Enunciado = {
    titulo: string;
    contenido: string;
};

export type EnunciadosMap = Record<EnunciadoId, Enunciado>;

/** Una opción puede ser un string simple o un objeto con texto y una clave opcional para la “badge”. */
export type Opcion = string | { key?: string; label?: string; text: string };

/** Estructura de cada pregunta que esperan los componentes (QuestionCard, ExamShell, etc.). */
export type Pregunta = {
    id: string; // único
    group: EnunciadoId; // para abrir el EnunciadoModal
    prompt: string; // texto de la pregunta
    options: Opcion[]; // alternativas
    answer: number; // índice correcto (0..n-1)
    explanation?: string; // fundamento opcional
};

/** Intentos registrados durante el examen. */
export type AttemptStatus = 'correct' | 'wrong' | 'skipped' | 'timeout';

export type Attempt = {
    qid: string;
    selected: number | null;
    correctIndex: number | null;
    status: AttemptStatus;
};

/** API mínima del motor de examen (lo que retorna useExamEngine). */
export type ExamEngine = {
    q: Pregunta;
    index: number;
    total: number;
    seleccion: number | null;
    submitted: boolean;
    attempts: Attempt[];
    finished: boolean;
    score: number;

    selectOption: (idx: number) => void;
    submit: () => void;
    skip: () => void;
    commitTimeout: () => void;
    next: () => void;
};
