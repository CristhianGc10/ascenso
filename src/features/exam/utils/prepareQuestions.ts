import type { Pregunta } from '../../../core/types';

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Mantiene la clave por letra. Si opts.shuffle=true, solo cambia el orden visual. */
export function prepareQuestions(
    raw: Pregunta[],
    opts = { shuffle: false }
): Pregunta[] {
    return raw.map((q) => {
        const options = opts.shuffle ? shuffle(q.options) : [...q.options];
        const key = q.correctLabel?.toUpperCase();
        const correct = key
            ? options.find((o) => o.label.toUpperCase() === key)
            : undefined;
        return { ...q, options, answerId: correct?.id };
    });
}
