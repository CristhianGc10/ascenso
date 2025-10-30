import type { Pregunta } from '../../core/types';

export const part03: Pregunta[] = [
    // 8
    {
        id: 'q8',
        enunciado:
            'Como parte del acompañamiento del proceso de escritura, la docente ofrece algunas recomendaciones a los estudiantes. ¿Cuál de las siguientes recomendaciones es adecuada para promover el proceso de planificación de un texto escrito?',
        options: [
            {
                id: 'q8_A',
                label: 'A',
                texto: '“Tengan claro a quiénes estarán dirigidas las cartas cuando pidan las donaciones”.',
                explicacion:
                    'Planificación: definir destinatario para adecuar propósito, registro y contenidos. Capacidad de adecuación a la situación comunicativa.',
            },
            {
                id: 'q8_B',
                label: 'B',
                texto: '“Verifiquen que el uso del punto ayude a delimitar con claridad las ideas del texto”.',
                explicacion:
                    'Corresponde a revisión de convenciones (puntuación), no a planificación.',
            },
            {
                id: 'q8_C',
                label: 'C',
                texto: '“Implementen las mejoras ortográficas que sean necesarias para facilitar la comprensión del texto”.',
                explicacion:
                    '“Mejoras ortográficas” = convenciones del lenguaje en revisión/edición, no planificación.',
            },
        ],
        correctLabel: 'A',
    },

    // 9
    {
        id: 'q9',
        preface:
            'Los integrantes de un equipo han culminado la primera versión de su carta y le han pedido a la docente que los ayude con su revisión. A continuación, se presenta dicha carta:',
        quote: `6/8/2024

Direc. Víctor

Reciba nuestros más cordiales saludos. Hoy le escribimos esta carta para comunicar que nos ayude con los gatos y perritos abandonados porque necesitan nuestro apoyo. 

En primer lugar, usted puede apoyarnos, porque los animales son seres vivos y muy importantes y usted sabe que las personas se preocupan por ellos, por lo que le pedimos que nos apoye en esto. 

Entonces, usted como persona buenita debería ayudarnos en esto porque no es bonito que los animalitos estén abandonados. Como dijimos ojalá pueda ayudarnos. 

chau,

Los chicos de quinto grado,`,
        enunciado:
            'La docente busca orientar a los estudiantes en la mejora de su escrito. ¿Cuál de los siguientes aspectos de escritura debe priorizar en su revisión?',
        options: [
            {
                id: 'q9_A',
                label: 'A',
                texto: 'La falta de adecuación del léxico según el destinatario.',
                explicacion:
                    'Hay informalidades, pero el problema central no es el léxico sino la justificación.',
            },
            {
                id: 'q9_B',
                label: 'B',
                texto: 'La falta de variedad de conectores en el texto.',
                explicacion:
                    'La variedad de conectores no resuelve la falta de razones.',
            },
            {
                id: 'q9_C',
                label: 'C',
                texto: 'La falta de desarrollo de los argumentos.',
                explicacion:
                    'Falta desarrollar argumentos que sustenten la solicitud; se repiten juicios vagos sin evidencias. Capacidad: organiza y desarrolla ideas de forma coherente.',
            },
        ],
        correctLabel: 'C',
    },

    // 10
    {
        id: 'q10',
        preface: 'Otro equipo de estudiantes escribió lo siguiente:',
        quote: `Hola enfermero Patricio
        
Esperamos que se encuentre bien y que todo vaya bien en la posta médica. Le cuento que los animalitos del albergue de la localidad necesitan ayuda. Por eso, buscamos su apoyo. Podemos ayudar de diferentes maneras. Le cuento que estos animalitos son rescatados de las calles y encuentran un hogar y nuevos amigos en ese albergue. Los señores encargados del albergue son buenas personas, ellos se encargan de curar las heridas de los animalitos que llegan heridos. La vez que los visitamos nos presentaron a una gata de ojos grandes, de pelo color blanco, muy blanco y muy graciosa. Pudimos verla jugar con una pelota de trapo que estaba cerca de ella. Fue divertido conocer a esta gata. 

Por favor, esperamos que todo le vaya bien. 

Equipo de quinto grado`,
        enunciado:
            'La docente busca orientar a los integrantes del equipo para que noten el desvío del propósito comunicativo de su texto. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para ello?',
        options: [
            {
                id: 'q10_A',
                label: 'A',
                texto: 'Preguntarles qué ideas creen que son imprescindibles en su carta para solicitar ayuda para el albergue. Luego, indicarles qué ideas de las mencionadas pueden usar según el propósito de su texto.',
                explicacion:
                    'El docente selecciona ideas por ellos; no promueve contraste con el propósito.',
            },
            {
                id: 'q10_B',
                label: 'B',
                texto: 'Pedirles que indiquen el propósito de su texto. Luego, solicitarles que lo relean y determinen si la inclusión de la anécdota de la gata mencionada en el texto contribuye con el desarrollo de dicho propósito.',
                explicacion:
                    'Hace explicitar el propósito comunicativo y verificar si la anécdota contribuye a ese propósito; favorece autorregulación.',
            },
            {
                id: 'q10_C',
                label: 'C',
                texto: 'Comentarles que el propósito de la carta es justificar la importancia de brindar ayuda al albergue. Luego, decirles que hay información en su texto que es necesario cambiar para que se corresponda con dicho propósito.',
                explicacion:
                    'Indica cambios, pero no moviliza el análisis del propósito por parte de los estudiantes.',
            },
        ],
        correctLabel: 'B',
    },
];
