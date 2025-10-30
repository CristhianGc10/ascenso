import type { Pregunta } from '../../core/types';

export const part06: Pregunta[] = [
    // 15 — Independiente
    {
        id: 'q15',
        preface:
            'Como parte de una sesión de aprendizaje, los estudiantes de cuarto grado están escuchando audios de leyendas de animales. En este contexto, el docente les propone analizar la leyenda del jaguar. A con nuación, se presenta un fragmento de la grabación:',
        quote: `“Cuentan por ahí que, hace mucho tiempo, el jaguar era el único rey de la selva. Su gran fuerza y habilidad lo hacían sentir orgulloso. Esto le permita dar órdenes a todos los animales, que, atemorizados, lo obedecían. Y así fue, hasta que un grillo se cansó de cumplir sus mandatos. Entonces, decidió retarlo a una pelea”`,
        enunciado:
            'El docente propone a los estudiantes realizar una pausa a la grabación para dialogar sobre el contenido de este fragmento. ¿Qué comentario de los estudiantes evidencia una deducción de información a par r del texto oral?',
        options: [
            {
                id: 'q15_A',
                label: 'A',
                texto: '“Veo que este grillo ya no aguantó seguir haciendo caso al jaguar”.',
            },
            {
                id: 'q15_B',
                label: 'B',
                texto: '“Es gracioso que el que quiere pelearse con el jaguar sea un animal tan chiquito”.',
            },
            {
                id: 'q15_C',
                label: 'C',
                texto: '“Los otros animales no se enfrentaban al jaguar porque pensaban que este les podía hacer daño”.',
            },
        ],
        // answerId y explicación correcta se inyectan desde correct-explanations.ts (Correcta: C)
    },

    // 16 — Independiente
    {
        id: 'q16',
        preface:
            'En el marco de una unidad didáctica sobre cómo funcionan las máquinas simples en la vida cotidiana, un docente tiene como propósito activar los saberes previos de los estudiantes de sexto grado. Para ello, el docente pide a los estudiantes que se organicen en equipos y dialoguen a par r de las siguientes preguntas: “¿Qué máquinas simples utilizamos en nuestra vida diaria? ¿Cómo funcionan estas máquinas?”.',
        enunciado:
            '¿Por qué esta acción pedagógica es adecuada para activar los saberes previos de los estudiantes?',
        options: [
            {
                id: 'q16_A',
                label: 'A',
                texto: 'Porque se centra en que los estudiantes reflexionen acerca de la importancia de  comprender qué son las máquinas simples.',
            },
            {
                id: 'q16_B',
                label: 'B',
                texto: 'Porque se centra en que los estudiantes elaboren explicaciones acerca de las máquinas simples sobre la base de su experiencia.',
            },
            {
                id: 'q16_C',
                label: 'C',
                texto: 'Porque se centra en que los estudiantes cuestionen sus conocimientos sobre las máquinas simples y su funcionamiento.',
            },
        ],
        // answerId y explicación correcta se inyectan desde correct-explanations.ts (Correcta: B)
    },
];
