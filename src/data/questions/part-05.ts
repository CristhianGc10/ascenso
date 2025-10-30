import type { Pregunta } from '../../core/types';

export const part05: Pregunta[] = [
    // 13 — Con enunciado general (se muestra con el overlay 13–14)
    {
        id: 'q13',
        preface:
            'Con el fin de motivar a la comunidad educativa a participar en los talleres de teatro gratuitos de la municipalidad, una estudiante decidió elaborar una exposición en la que explicará por qué le gustan estos talleres. En este contexto, le ha pedido al docente que escuche la práctica de su exposición, cuya transcripción es la siguiente:',
        quote: `“Holas. Este… les hablaré un poquitin acerca de por qué me gusta el taller de teatro… Eh…
En primer lugar, este taller es algo bien divertido porque nos ayuda a conocer muchas historias...
Este… cuando voy a mi taller me gusta que jugamos mucho… Además, me gusta porque puedo ser
diferentes personajes, como seres mágicos y extraños. Eh…  en este taller, juego mucho y puedo
hacer de diferentes personajes como un ogro o una maga… Este… En este taller, también creamos
juegos entre amigos y eso nos ayuda a que podamos hacer muchos personajes sorprendentes y
aprendo a trabajar en equipo… Eh… a escucharnos con respeto… Además… Eh… siempre solemos
representar a diferentes cosas en cada historia.”`,
        enunciado:
            'Luego de escuchar a la estudiante, el docente busca ofrecerle una retroalimentación que la ayude a mejorar su texto oral. ¿Cuál de los siguientes aspectos debe priorizar la docente para ello?',
        options: [
            {
                id: 'q13_A',
                label: 'A',
                texto: 'La utilización de léxico impreciso en su texto oral.',
            },
            {
                id: 'q13_B',
                label: 'B',
                texto: 'La limitada progresión de ideas en su texto oral.',
            },
            {
                id: 'q13_C',
                label: 'C',
                texto: 'El uso constante de muletillas en su texto oral.',
            },
        ],
        // answerId se inyecta desde correct-explanations.ts
    },

    // 14 — Con enunciado general (se muestra con el overlay 13–14)
    {
        id: 'q14',
        preface:
            'Un equipo de estudiantes decidió entrevistar a la directora de un museo de la localidad. Para ayudar a los estudiantes en la preparación de sus entrevistas, el docente les ha entregado una lista con criterios que deben considerar en la formulación de preguntas.',
        enunciado:
            '¿Cuál de los siguientes criterios se centra en favorecer el desarrollo de las ideas de la entrevistada?',
        options: [
            {
                id: 'q14_A',
                label: 'A',
                texto: 'Pronunciar con claridad las preguntas para asegurar que sean entendibles por la entrevistada.',
            },
            {
                id: 'q14_B',
                label: 'B',
                texto: 'Usar, en las preguntas, un vocabulario variado y preciso acorde al tema de la entrevista.',
            },
            {
                id: 'q14_C',
                label: 'C',
                texto: 'Elaborar repreguntas para aclarar algunas de las ideas ofrecidas por la entrevistada.',
            },
        ],
        // answerId se inyecta desde correct-explanations.ts
    },
];
