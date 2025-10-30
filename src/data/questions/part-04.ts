import type { Pregunta } from '../../core/types';

export const part04: Pregunta[] = [
    // 11 — Independiente (sin enunciado general)
    {
        id: 'q11',
        preface:
            'Los estudiantes de sexto grado asisieron a una feria gastronómica en la que conocieron y probaron diversos platos típicos peruanos. A partir de esta visita, los estudiantes van a elaborar infografías sobre la preparación de platos típicos peruanos y las compartirán en el periódico mural de la IE. En este contexto, un grupo de estudiantes está elaborando el plan de escritura para una infografía acerca de la preparación del charqui y su uso en diversos platos regionales. A continuación, se presenta dicho plan:',
        quote: `EL CHARQUI Y PLATOS TÍPICOS EN QUE LO USAN
        
- Desde qué época existe el charqui
- ¿Qué culturas antiguas crearon el charqui?
- Los pueblos aimaras
- Lugares donde se difundió la cultura de los pueblos aimaras
- Forma de preparar el charqui
- ¿Qué carnes se pueden usar?
- La forma antigua
- Pasos para preparar charqui
- Propiedades nutritivas del charqui
- ¿Qué nutrients tiene el charqui?
- ¿Es mejor que las carnes rojas?
- Platos representativos que tienen charqui
- Olluquito con charqui,`,
        enunciado:
            'Como parte del acompañamiento de la actividad, la docente busca que los estudiantes evalúen la pertinencia de los aspectos propuestos de acuerdo con el propósito de su infografía. ¿Qué acción pedagógica es más adecuada para lograr ello?',
        options: [
            {
                id: 'q11_A',
                label: 'A',
                texto: 'Preguntarles por qué han incluido, por ejemplo, aspectos sobre los pueblos aimaras. Luego, pedirles que comenten en qué medida dichos aspectos ayudan a desarrollar el tema central de su infografía. Sobre esta base, proponer que reelaboren su plan de escritura.',
                explicacion:
                    'Promueve reflexión, pero no asegura un criterio explícito de selección alineado al propósito; puede mantener aspectos tangenciales sin filtrar.',
            },
            {
                id: 'q11_B',
                label: 'B',
                texto: 'Indicarles los aspectos incluidos en su plan que no se relacionan con el tema de su infografía. Luego, explicarles por qué dichos aspectos no aportan al contenido de su infografía. Finalmente, brindarles algunas ideas que podrían incorporar en su texto.',
                explicacion:
                    'Enfoque directivo; no moviliza que el propio equipo evalúe y decida según el propósito comunicativo.',
            },
            {
                id: 'q11_C',
                label: 'C',
                texto: 'Recordarles cuál es el propósito comunicativo de su infografía. Luego, comentarles que su plan presenta información que se aleja del tema. Sobre esta base, solicitar que seleccionen los aspectos que les permitan centrarse en el desarrollo del tema elegido.',
                explicacion:
                    'Hace explicitar el propósito y pide seleccionar lo pertinente para enfocarse en el tema: evalúa pertinencia respecto al propósito.',
            },
        ],
        correctLabel: 'C',
    },

    // 12 — Independiente (sin enunciado general)
    {
        id: 'q12',
        preface:
            'Los estudiantes de sexto grado par cipan en un proyecto de aprendizaje a partir del cual informarán a la comunidad educativa sobre la importancia de verificar la información de los medios de comunicación digital.\n\nEn este contexto, un equipo de estudiantes está elaborando la primera versión de un díptico informa vo sobre la necesidad de verificar la veracidad de la información que se difunde en redes sociales. A continuación, se presenta la sección de recomendaciones que un estudiante del equipo ha elaborado:',
        quote: `Recomendaciones:

¿Qué debemos hacer para identificar si una información es falsa? Primero debemos
saber revisar si la información difundida viene de una institución oficial o especializada
en el tema. Sin embargo, a veces nos dejamos impresionar por algunas no cias de
medios, aparentemente especializados, como una vez me pasó. Me acuerdo que fue
cuando vi una noticia que trataba sobre el cambio climá co. Yo leí que la noticia decía
que el cambio climático no existe y que todos los cambios de temperatura que suceden
ahora son naturales. Yo recuerdo que en Ciencia y Tecnología nos explicaron que sí existe
el cambio climático. Entonces estaba confundido y le mostré la noticia a la profesora.
Ella me ayudó a darme cuenta de que esa noticia era falsa, manipulaba la información.
Entonces, desde ahí sé que es muy importante revisar lo que difundimos.`,
        enunciado:
            'El docente nota que, en el texto, se evidencian algunos problemas de escritura. ¿Cuál de los siguientes problemas de escritura se evidencia en dicho texto?',
        options: [
            {
                id: 'q12_A',
                label: 'A',
                texto: 'La presencia de contradicciones en el texto.',
                explicacion:
                    'El pasaje narra una experiencia pasada de confusión; no presenta contradicciones internas en su planteamiento actual.',
            },
            {
                id: 'q12_B',
                label: 'B',
                texto: 'El desvío del propósito comunicativo del texto.',
                explicacion:
                    'La sección de “Recomendaciones” deriva en una anécdota personal extensa; se aleja del propósito instructivo de recomendar acciones concretas.',
            },
            {
                id: 'q12_C',
                label: 'C',
                texto: 'El empleo de ideas repetitivas a lo largo del texto.',
                explicacion:
                    'Puede haber reiteración leve, pero el problema dominante es el desvío del propósito comunicativo por la anécdota.',
            },
        ],
        correctLabel: 'B',
    },
];
