import type { Pregunta } from '../../core/types';

export const part07: Pregunta[] = [
    // 17 — con enunciado general (overlay 17–19)
    {
        id: 'q17',
        enunciado:
            'En la situación, ¿cuál de los integrantes de la familia responde correctamente la pregunta de María?',
        options: [
            { id: 'q17_A', label: 'A', texto: 'La tia de María.' },
            { id: 'q17_B', label: 'B', texto: 'El hermano de María.' },
            { id: 'q17_C', label: 'C', texto: 'La abuela de María.' },
        ],
        // answerId se inyecta desde correct-explanations.ts (Correcta: C)
    },

    // 18 — con enunciado general (overlay 17–19)
    {
        id: 'q18',
        enunciado:
            'A partir de esta situación, el docente pregunta a los estudiantes: “¿A qué se debe la formación de burbujas en el fondo de la tetera?” ¿Qué proceso de aprendizaje busca promover principalmente el docente con esta pregunta?',
        options: [
            {
                id: 'q18_A',
                label: 'A',
                texto: 'La activación de los saberes previos.',
            },
            {
                id: 'q18_B',
                label: 'B',
                texto: 'La generación de conflicto cognitivo.',
            },
            {
                id: 'q18_C',
                label: 'C',
                texto: 'La metacognición sobre las estrategias de aprendizaje.',
            },
        ],
        // answerId se inyecta desde correct-explanations.ts (Correcta: A)
    },

    // 19 — con enunciado general (overlay 17–19)
    {
        id: 'q19',
        enunciado:
            'En la situación, ¿qué propiedad  sica de la materia permite explicar que las burbujas ascienden hacia la superficie del agua?',
        options: [
            { id: 'q19_A', label: 'A', texto: 'La densidad.' },
            { id: 'q19_B', label: 'B', texto: 'La solubilidad.' },
            { id: 'q19_C', label: 'C', texto: 'El punto de ebullición.' },
        ],
        // answerId se inyecta desde correct-explanations.ts (Correcta: A)
    },
];
