import type { Pregunta } from '../../core/types';

export const part01: Pregunta[] = [
    {
        id: 'q1',
        enunciado:
            'El docente propone a los estudiantes que intercambien ideas sobre los aspectos del texto que llamaron su atención. ¿Cuál de los comentarios de los estudiantes evidencia la capacidad de deducir información del texto?',
        options: [
            {
                id: 'q1_A',
                label: 'A',
                texto: 'Julia dice: “Angélica, gracias a su talento y esfuerzo, ha ido mostrando un gran dominio del parataekwondo”.',
                explicacion:
                    'Atribuye causa no explícita al logro (“talento y esfuerzo” → “gran dominio”). Es inferencia a partir de indicios del texto.',
                capacidad: 2,
            },
            {
                id: 'q1_B',
                label: 'B',
                texto: 'Amaru dice: “Es importante promover la igualdad de oportunidades para los paratletas; por eso, es necesario dar mayor difusión a casos como el de Angélica”.',
                explicacion:
                    'Es una valoración y recomendación externa al contenido literal.',
                capacidad: 3,
            },
            {
                id: 'q1_C',
                label: 'C',
                texto: 'Ramiro dice: “Las integrantes del comité convencieron a Angélica de que practicar el deporte de parataekwondo luego de ver sus capacidades en la natación”.',
                explicacion: 'Repite información explícita del suceso.',
                capacidad: 1,
            },
        ],
        correctLabel: 'A',
    },
    {
        id: 'q2',
        enunciado:
            'El docente busca seguir trabajando la comprensión del texto con los estudiantes. ¿Cuál de las siguientes acciones pedagógicas se centra en la obtención de información explícita del texto?',
        options: [
            {
                id: 'q2_A',
                label: 'A',
                texto: 'Solicitarles que elaboren un relato breve sobre la participación de Angélica en los Juegos Paralímpicos de 2020.',
                explicacion:
                    'Redacción creativa; no exige recuperar datos literales.',
            },
            {
                id: 'q2_B',
                label: 'B',
                texto: 'Proponerles que, a partir del texto leído, dialoguen sobre cómo el deporte puede aportar en la vida de las personas.',
                explicacion: 'Reflexión del contenido.',
                capacidad: 3,
            },
            {
                id: 'q2_C',
                label: 'C',
                texto: 'Pedirles que, sobre la base de la información del texto, elaboren una lista de los reconocimientos que Angélica ha obtenido en su carrera.',
                explicacion:
                    '“Lista de reconocimientos” requiere localizar información explícita.',
                capacidad: 1,
            },
        ],
        correctLabel: 'C',
    },
    {
        id: 'q3',
        enunciado:
            'En otro momento del intercambio de ideas sobre el texto, Tirso, un estudiante, comentó lo siguiente: “Creo que el texto trata principalmente de que Angélica Espinoza, primero, hacía natación y, luego, pasó a practicar parataekwondo”. Ante esto, el docente busca ayudar a Tirso a darse cuenta de su error al idenfiticar el tema central del texto. ¿Cuál de las siguientes preguntas es más adecuada para lograr dicho propósito?',
        options: [
            {
                id: 'q3_A',
                label: 'A',
                texto: 'Formular una pregunta guía que introduzca una causa no tratada y sugiera la respuesta.',
                explicacion: 'Introduce causa no tratada y sugiere respuesta.',
            },
            {
                id: 'q3_B',
                label: 'B',
                texto: 'Pedir que identifiquen experiencias recurrentes en el texto y valoren su importancia para proponer el tema central.',
                explicacion:
                    'Pide identificar recurrencias para inferir el tema central; el estándar indica interpretar el texto considerando información recurrente para construir el sentido global.',
                capacidad: 2,
            },
            {
                id: 'q3_C',
                label: 'C',
                texto: 'Solicitar que organicen por párrafos y escriban lo que más llamó su atención.',
                explicacion:
                    'Organiza por párrafos pero deriva en criterio subjetivo que no asegura el tema central.',
            },
        ],
        correctLabel: 'B',
    },
];
