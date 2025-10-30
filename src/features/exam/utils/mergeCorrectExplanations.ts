import type { CorrectExplanation } from '../../../data/correct-explanations';
import type { Pregunta } from '../../../core/types';

/**
 * Inyecta la explicación de la alternativa correcta desde un documento central
 * y asegura que answerId esté alineado con el label correcto (A/B/C).
 */
export function mergeCorrectExplanations(
    questions: Pregunta[],
    list: CorrectExplanation[]
): Pregunta[] {
    const map = new Map(list.map((e) => [e.id, e]));

    return questions.map((q) => {
        const ce = map.get(q.id);
        if (!ce) return q;

        type Option = Pregunta['options'][number];
        const correctOpt = q.options.find(
            (o: Option) => (o.label || '').toUpperCase() === ce.correctLabel
        );

        if (!correctOpt) return q;

        const newOptions = q.options.map((o: Option) =>
            o.id === correctOpt.id ? { ...o, explicacion: ce.explanation } : o
        );

        return {
            ...q,
            options: newOptions,
            answerId: correctOpt.id,
        };
    });
}
