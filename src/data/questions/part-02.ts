import type { Pregunta } from '../../core/types';

export const part02: Pregunta[] = [
    // 4
    {
        id: 'q4',
        enunciado:
            'Al culminar de leer el texto, los estudiantes dialogan sobre los aspectos que llamaron su atención. ¿Cuál de los comentarios se ajusta a una reflexión sobre el contenido del texto?',
        options: [
            {
                id: 'q4_A',
                label: 'A',
                texto: 'Alda dice: “Las pulguitas fueron muy arriesgadas al defender a Noche y a Luna de Cielo”.',
                explicacion:
                    '“Fueron muy arriesgadas” es juicio de valor sobre acciones.',
                capacidad: 3,
            },
            {
                id: 'q4_B',
                label: 'B',
                texto: 'Sandra dice: “A veces, Noche se rascaba con fuerza porque las pulgas le picaban fuerte”.',
                explicacion: 'Relación causa-efecto explícita en el texto.',
                capacidad: 1,
            },
            {
                id: 'q4_C',
                label: 'C',
                texto: 'Carol dice: “El cuento trata de un gran perro, dos gatos chiqui tos y tres pulguitas”.',
                explicacion:
                    'Solo enuncia el tema básico sin valoración; información literal.',
                capacidad: 1,
            },
        ],
        correctLabel: 'A',
    },

    // 5
    {
        id: 'q5',
        enunciado:
            'Durante el intercambio de ideas, la docente tiene como propósito plantear algunas preguntas para promover que los estudiantes deduzcan información del texto. ¿Cuál de las siguientes preguntas es adecuada para ello?',
        options: [
            {
                id: 'q5_A',
                label: 'A',
                texto: '¿Con qué intención el autor escribió el gruñido de Cielo con letras mayúsculas?',
                explicacion:
                    'Analiza propósito del recurso gráfico; es reflexión sobre forma.',
                capacidad: 3,
            },
            {
                id: 'q5_B',
                label: 'B',
                texto: '¿Qué fue lo que primero entró en la casa cuando la inmensa puerta se abrió?',
                explicacion: 'Pide un dato literal de secuencia.',
                capacidad: 1,
            },
            {
                id: 'q5_C',
                label: 'C',
                texto: '¿A qué se refiere Luna cuando le dice a las pulgas: “¡Vuelvan a casa!”?',
                explicacion:
                    'Exige inferir el referente de “casa” por contexto.',
                capacidad: 2,
            },
        ],
        correctLabel: 'C',
    },

    // 6
    {
        id: 'q6',
        preface:
            'En otro momento del intercambio de ideas, un estudiante comenta lo siguiente:',
        quote: '“Algunas partes de la historia no eran fáciles de entender. Por ejemplo, al inicio, no entendí quién dijo: ‘¡Cielo, tu comida!’. Pensé que era uno de los ga tos o las pulgas, pero ellos le tenían miedo a Cielo. Entonces, volví a leer y me di cuenta de que no podían ser Luna, Cielo ni las pulgas; seguro era el dueño o dueña de Cielo”.',
        enunciado:
            '¿Qué proceso de aprendizaje se destaca principalmente en la intervención del estudiante?',
        options: [
            {
                id: 'q6_A',
                label: 'A',
                texto: 'Conflicto cognitivo.',
                explicacion: 'No hay desequilibrio conceptual como eje.',
            },
            {
                id: 'q6_B',
                label: 'B',
                texto: 'Transferencia del aprendizaje.',
                explicacion: 'No aplica aprendizaje a un nuevo contexto.',
            },
            {
                id: 'q6_C',
                label: 'C',
                texto: 'Metacognición sobre las estrategias de aprendizaje.',
                explicacion:
                    'El estudiante monitorea su comprensión, relee y verifica hipótesis; describe metacognición sobre estrategias de lectura. El CNEB indica que la competencia se logra usando capacidades combinadas para construir sentido, lo que implica autorregulación del proceso lector.',
            },
        ],
        correctLabel: 'C',
    },

    // 7
    {
        id: 'q7',
        enunciado:
            'En otro momento, la docente plantea algunas acciones pedagógicas para favorecer que los estudiantes reflexionen sobre el contenido del texto. ¿Cuál de las siguientes acciones pedagógicas se centra en dicho propósito?',
        options: [
            {
                id: 'q7_A',
                label: 'A',
                texto: 'Entregarles tarjetas que contengan expresiones que fueron mencionadas por los personajes del cuento. Después, pedirles que, en el texto, busquen dichas frases y, en las tarjetas, anoten qué personajes las mencionan.',
                explicacion:
                    'Búsqueda y emparejamiento de frases con personajes es localización literal.',
                capacidad: 1,
            },
            {
                id: 'q7_B',
                label: 'B',
                texto: 'Solicitarles que escriban recomendaciones a compañeros de otros salones para animarlos a leer el cuento. Después, proponerles que intercambien sus recomendaciones para brindarse sugerencias de mejora.',
                explicacion:
                    'Recomendaciones para otros lectores implican juicio y valoración del texto y su pertinencia para una audiencia.',
                capacidad: 3,
            },
            {
                id: 'q7_C',
                label: 'C',
                texto: 'Pedirles que dibujen la escena inicial y final del cuento. Después, solicitarles que expliquen qué elementos conforman las escenas que han dibujado.',
                explicacion:
                    'Dibujar y describir escenas prioriza identificación/organización de información; no centra la valoración del contenido.',
                capacidad: 1,
            },
        ],
        correctLabel: 'B',
    },
];
