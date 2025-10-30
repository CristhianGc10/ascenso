// src/data/questions/part-01.ts

import type { Pregunta } from '../../core/types';

const bankPart01: Pregunta[] = [
    // --- G1: Angélica Espinoza (P1–P3) ---
    {
        id: 1,
        group: 'G1',
        texto: '¿Cuál comentario evidencia la capacidad de deducir información del texto?',
        opciones: [
            {
                id: 'A',
                texto: 'Julia: “Angélica, gracias a su talento y esfuerzo, ha ido mostrando un gran dominio del parataekwondo”.',
            },
            {
                id: 'B',
                texto: 'Amaru: “Es importante la igualdad de oportunidades para los paratletas; por eso, hay que dar mayor difusión a casos como el de Angélica”.',
            },
            {
                id: 'C',
                texto: 'Ramiro: “La convencieron de practicar parataekwondo luego de ver sus capacidades en la natación”.',
            },
        ],
        correcta: 'A',
        fundamento:
            'A implica una inferencia (no está expresado literalmente). C es información explícita del texto.',
    },
    {
        id: 2,
        group: 'G1',
        texto: '¿Qué acción pedagógica se centra en obtener información explícita del texto?',
        opciones: [
            {
                id: 'A',
                texto: 'Elaborar un relato breve sobre la participación de Angélica en Tokio 2020.',
            },
            {
                id: 'B',
                texto: 'Dialogar sobre cómo el deporte aporta a la vida.',
            },
            {
                id: 'C',
                texto: 'Elaborar una lista de los reconocimientos que Angélica ha obtenido.',
            },
        ],
        correcta: 'C',
        fundamento:
            'Listar reconocimientos es recuperación literal de información.',
    },
    {
        id: 3,
        group: 'G1',
        texto: '¿Qué pregunta ayuda mejor a que Tirso identifique el tema central?',
        opciones: [
            {
                id: 'A',
                texto: '“¿Por qué dejó natación? ¿Incluiste logros? Entonces, ¿cuál es el tema central?”',
            },
            {
                id: 'B',
                texto: '“¿Qué experiencias tuvo? ¿Cuál se menciona más veces? ¿Sirve para decir de qué trata?”',
            },
            {
                id: 'C',
                texto: '“¿Qué se dice en cada párrafo? ¿Cuál idea es más relevante? ¿Cómo organizarlas para el tema central?”',
            },
        ],
        correcta: 'C',
        fundamento:
            'Ir párrafo por párrafo y organizar ideas guía a construir el tema central.',
    },

    // --- G2: Noche, Luna y Cielo (P4–P7) ---
    {
        id: 4,
        group: 'G2',
        texto: '¿Cuál comentario se ajusta a una reflexión sobre el contenido del texto?',
        opciones: [
            {
                id: 'A',
                texto: '“Las pulguitas fueron muy arriesgadas al defender a Noche y Luna de Cielo”.',
            },
            {
                id: 'B',
                texto: '“A veces, Noche se rascaba con fuerza porque las pulgas le picaban”.',
            },
            {
                id: 'C',
                texto: '“El cuento trata de un gran perro, dos gatos chiquitos y tres pulguitas”.',
            },
        ],
        correcta: 'A',
        fundamento:
            'A valora y reflexiona; B es literal; C es síntesis temática.',
    },
    {
        id: 5,
        group: 'G2',
        texto: '¿Qué pregunta promueve deducir información del texto?',
        opciones: [
            {
                id: 'A',
                texto: '“¿Con qué intención el autor escribió el gruñido en mayúsculas?”',
            },
            { id: 'B', texto: '“¿Qué fue lo primero que entró en la casa?”' },
            {
                id: 'C',
                texto: '“¿A qué se refiere Luna con ‘¡Vuelvan a casa!’?”',
            },
        ],
        correcta: 'C',
        fundamento:
            'Requiere inferir que ‘casa’ se refiere a regresar a los gatos.',
    },
    {
        id: 6,
        group: 'G2',
        texto: '¿Qué proceso se destaca en la intervención del estudiante que releyó para decidir quién dijo ‘¡Cielo, tu comida!’?',
        opciones: [
            { id: 'A', texto: 'Conflicto cognitivo.' },
            { id: 'B', texto: 'Transferencia del aprendizaje.' },
            {
                id: 'C',
                texto: 'Metacognición sobre las estrategias de aprendizaje.',
            },
        ],
        correcta: 'C',
        fundamento:
            'Describe cómo monitorizó su comprensión y estrategia de relectura.',
    },
    {
        id: 7,
        group: 'G2',
        texto: '¿Qué acción pedagógica centra la reflexión sobre el contenido?',
        opciones: [
            {
                id: 'A',
                texto: 'Tarjetas para ubicar frases en el texto y personajes.',
            },
            {
                id: 'B',
                texto: 'Escribir recomendaciones a otros salones y darse sugerencias.',
            },
            {
                id: 'C',
                texto: 'Dibujar escena inicial y final, y explicar sus elementos.',
            },
        ],
        correcta: 'C',
        fundamento:
            'Relacionar escenas y explicarlas favorece la reflexión sobre contenido.',
    },

    // --- G3: Cartas para donaciones (P8–P12) ---
    {
        id: 8,
        group: 'G3',
        texto: '¿Qué recomendación promueve la planificación del texto escrito (carta)?',
        opciones: [
            {
                id: 'A',
                texto: '“Tengan claro a quiénes estarán dirigidas las cartas”.',
            },
            { id: 'B', texto: '“Verifiquen el uso del punto”.' },
            { id: 'C', texto: '“Implementen mejoras ortográficas”.' },
        ],
        correcta: 'A',
        fundamento:
            'Definir destinatario es propio de la planificación (propósito y audiencia).',
    },
    {
        id: 9,
        group: 'G3',
        texto: 'En la carta del equipo, ¿qué aspecto debe priorizar la docente en la revisión?',
        opciones: [
            { id: 'A', texto: 'Adecuación del léxico al destinatario.' },
            { id: 'B', texto: 'Variedad de conectores.' },
            { id: 'C', texto: 'Desarrollo de los argumentos.' },
        ],
        correcta: 'C',
        fundamento:
            'La argumentación es pobre y repetitiva; urge fortalecer razones.',
    },
    {
        id: 10,
        group: 'G3',
        texto: 'Para notar el desvío del propósito comunicativo en la carta con anécdota, ¿qué acción es más adecuada?',
        opciones: [
            { id: 'A', texto: 'Indicar ideas imprescindibles y cuáles usar.' },
            {
                id: 'B',
                texto: 'Pedir que expliciten el propósito y ver si la anécdota contribuye a él.',
            },
            { id: 'C', texto: 'Decirles el propósito y qué cambiar.' },
        ],
        correcta: 'B',
        fundamento:
            'Hace que contrasten su texto con el propósito; toma de conciencia.',
    },
    {
        id: 11,
        group: 'G3',
        texto: 'Para evaluar la pertinencia del plan de la infografía del charqui, ¿qué acción es más adecuada?',
        opciones: [
            {
                id: 'A',
                texto: 'Preguntar por qué incluyeron ciertos aspectos (p.e., aimaras) y cómo aportan al tema; luego re-elaborar el plan.',
            },
            {
                id: 'B',
                texto: 'Indicar qué aspectos sobran y sugerir ideas nuevas.',
            },
            {
                id: 'C',
                texto: 'Recordar el propósito y pedir seleccionar aspectos que los centren.',
            },
        ],
        correcta: 'A',
        fundamento:
            'Promueve justificación y revisión autónoma del plan frente al propósito.',
    },
    {
        id: 12,
        group: 'G3',
        texto: 'En la sección de recomendaciones sobre verificación de información, ¿qué problema de escritura se evidencia?',
        opciones: [
            { id: 'A', texto: 'Contradicciones en el texto.' },
            { id: 'B', texto: 'Desvío del propósito comunicativo.' },
            { id: 'C', texto: 'Ideas repetitivas.' },
        ],
        correcta: 'B',
        fundamento:
            'Se narra una anécdota extensa que desplaza el foco prescriptivo de ‘recomendaciones’.',
    },
];

export default bankPart01;
