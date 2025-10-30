export type CorrectExplanation = {
    id: string;
    correctLabel: 'A' | 'B' | 'C';
    explanation: string;
};

export const correctExplanations: CorrectExplanation[] = [
    {
        id: 'q1',
        correctLabel: 'A',
        explanation: 'Deducción: no está escrito literalmente.',
    },
    {
        id: 'q2',
        correctLabel: 'C',
        explanation:
            '“Sobre la base del texto” ⇒ información literal/ explícita.',
    },
    {
        id: 'q3',
        correctLabel: 'B',
        explanation:
            'Buen set para encontrar el tema: frecuencia de ideas/palabras clave.',
    },
    {
        id: 'q4',
        correctLabel: 'A',
        explanation:
            '“Muy arriesgadas” = adjetivo ⇒ opinión/reflexión del contenido.',
    },
    {
        id: 'q5',
        correctLabel: 'C',
        explanation: 'Interpretar el referente de una frase ⇒ inferencial.',
    },
    {
        id: 'q6',
        correctLabel: 'C',
        explanation: 'Metacognición: monitorea, relee y verifica hipótesis.',
    },
    {
        id: 'q7',
        correctLabel: 'B',
        explanation:
            'Recomendaciones entre pares ⇒ juicio/reflexión del contenido.',
    },
    {
        id: 'q8',
        correctLabel: 'A',
        explanation: 'Planificación: definir destinatario/propósito.',
    },
    {
        id: 'q9',
        correctLabel: 'C',
        explanation: 'Coherencia: falta desarrollar argumentos que sustenten.',
    },
    {
        id: 'q10',
        correctLabel: 'B',
        explanation:
            'Explícita el propósito y verifica contribución de la anécdota ⇒ autorregulación.',
    },
    {
        id: 'q11',
        correctLabel: 'A',
        explanation:
            'Tres partes activan al estudiante: justifica, valora y reelabora.',
    },
    {
        id: 'q12',
        correctLabel: 'B',
        explanation:
            'Desvío del propósito: la sección “recomendaciones” deriva en anécdota.',
    },
    {
        id: 'q13',
        correctLabel: 'B',
        explanation:
            'Progresión de ideas (coherencia) por encima de adecuación/recursos.',
    },
    {
        id: 'q14',
        correctLabel: 'C',
        explanation:
            'Repreguntas que clarifican y desarrollan las ideas de la entrevistada.',
    },
    {
        id: 'q15',
        correctLabel: 'C',
        explanation: 'Deducción: la idea no aparece escrita tal cual.',
    },
    {
        id: 'q16',
        correctLabel: 'B',
        explanation:
            '“Sobre la base de su experiencia” ⇒ activa saberes previos.',
    },
    {
        id: 'q17',
        correctLabel: 'C',
        explanation: 'Burbujas = agua en estado gaseoso (vapor).',
    },
    {
        id: 'q18',
        correctLabel: 'A',
        explanation: '“¿A qué se debe…?” activa conocimientos previos.',
    },
    {
        id: 'q19',
        correctLabel: 'A',
        explanation: 'Densidad explica el ascenso hasta la superficie.',
    },
    {
        id: 'q20',
        correctLabel: 'B',
        explanation: 'Se evidencia error con ejemplo ⇒ conflicto cognitivo.',
    },
    {
        id: 'q21',
        correctLabel: 'C',
        explanation: 'Indaga el proceso sin regalar la respuesta.',
    },
    {
        id: 'q22',
        correctLabel: 'C',
        explanation:
            'Identifica órganos participantes (no nutrientes ni funciones).',
    },
    {
        id: 'q23',
        correctLabel: 'A',
        explanation: 'Solo varía la luz; los demás factores se controlan.',
    },
    {
        id: 'q24',
        correctLabel: 'C',
        explanation:
            'Independiente: masa de sal; Dependiente: altura de la solución.',
    },
    {
        id: 'q25',
        correctLabel: 'C',
        explanation: '“Huevos iguales” ⇒ variable de control.',
    },
    {
        id: 'q26',
        correctLabel: 'B',
        explanation:
            'Error detectado: “tipo de azúcar” es independiente, no dependiente.',
    },
    {
        id: 'q27',
        correctLabel: 'B',
        explanation:
            'Más volumen ⇒ más masa ⇒ más materia (a igualdad de sustancia).',
    },
    {
        id: 'q28',
        correctLabel: 'A',
        explanation: '“¿Qué hace que…?” apunta a la variable independiente.',
    },
    {
        id: 'q29',
        correctLabel: 'C',
        explanation: 'Dependiente: tiempo que demora en oscurecer.',
    },
    {
        id: 'q30',
        correctLabel: 'A',
        explanation: 'Mantiene una independiente y controla lo demás.',
    },
    {
        id: 'q31',
        correctLabel: 'C',
        explanation:
            'Identifica emoción y propone alternativas ⇒ autorregulación válida.',
    },
    {
        id: 'q32',
        correctLabel: 'B',
        explanation: 'Simultaneidad: mismo tiempo en lugares distintos.',
    },
    {
        id: 'q33',
        correctLabel: 'A',
        explanation:
            'Preferencias/actividades con familia ⇒ identidad personal.',
    },
    {
        id: 'q34',
        correctLabel: 'B',
        explanation:
            'Reconocer emoción y proponer alternativas (autorregulación funcional).',
    },
    {
        id: 'q35',
        correctLabel: 'B',
        explanation: 'Empatía explícita, no minimiza la emoción.',
    },
    {
        id: 'q36',
        correctLabel: 'B',
        explanation: 'Convicción moral: “está mal porque sienten”.',
    },
    {
        id: 'q37',
        correctLabel: 'A',
        explanation: 'Impacta convivencia/localidad ⇒ asunto público.',
    },
    {
        id: 'q38',
        correctLabel: 'A',
        explanation:
            'Recoge opiniones y organiza por ámbitos ⇒ focaliza el problema.',
    },
    {
        id: 'q39',
        correctLabel: 'B',
        explanation:
            'Mediación: sentimientos, impacto, expectativas, acciones.',
    },
    {
        id: 'q40',
        correctLabel: 'A',
        explanation: 'Contraejemplo + pregunta que cuestiona estereotipo.',
    },
    {
        id: 'q41',
        correctLabel: 'A',
        explanation:
            'Mediación: tercero ayuda y la decisión es de los estudiantes.',
    },
    {
        id: 'q42',
        correctLabel: 'C',
        explanation:
            'Historia personal del objeto: quién lo dio, anécdotas y valor.',
    },
    {
        id: 'q43',
        correctLabel: 'C',
        explanation:
            'Problema histórico: causas de la caída del Tahuantinsuyo.',
    },
    {
        id: 'q44',
        correctLabel: 'C',
        explanation: 'Consecuencias en organismos y salud pública.',
    },
    {
        id: 'q45',
        correctLabel: 'B',
        explanation: 'Reutilización: misma forma/estructura, nuevo uso.',
    },
    {
        id: 'q46',
        correctLabel: 'A',
        explanation: 'Saberes previos; no hay conflicto ni transferencia.',
    },
    {
        id: 'q47',
        correctLabel: 'A',
        explanation: 'Conteo de días ⇒ cardinal/medida de tiempo por conteo.',
    },
    {
        id: 'q48',
        correctLabel: 'A',
        explanation:
            'Nominal: usa fechas como rótulos (clasifica, no ordena ni mide).',
    },
    {
        id: 'q49',
        correctLabel: 'C',
        explanation: 'Fracción como operador: 3/5 de 90 ⇒ operación.',
    },
    {
        id: 'q50',
        correctLabel: 'B',
        explanation:
            'Identifica y verifica el patrón por sí mismo ⇒ descubrimiento.',
    },
    {
        id: 'q51',
        correctLabel: 'B',
        explanation: 'Identifican rasgos y marcan el patrón ellos mismos.',
    },
    {
        id: 'q52',
        correctLabel: 'B',
        explanation: 'Error principal: “el mayor va de dividendo”.',
    },
    {
        id: 'q53',
        correctLabel: 'C',
        explanation: 'Metacognición: facilidad tras superar conflicto.',
    },
    {
        id: 'q54',
        correctLabel: 'B',
        explanation:
            '“No se evidencia” predicción; solo recuerda/reconoce el patrón.',
    },
    {
        id: 'q55',
        correctLabel: 'A',
        explanation: 'Andamiaje por preguntas que conducen al “ya entendí”.',
    },
    {
        id: 'q56',
        correctLabel: 'C',
        explanation: 'Diseña estrategia completa para la plantilla.',
    },
    {
        id: 'q57',
        correctLabel: 'C',
        explanation: 'Intervalos mal definidos y solapados.',
    },
    {
        id: 'q58',
        correctLabel: 'C',
        explanation:
            'Ejemplos, identifican uso/variables y juzgan pertinencia.',
    },
    {
        id: 'q59',
        correctLabel: 'A',
        explanation: 'Falta título de ejes (no se evidencia en el diálogo).',
    },
    {
        id: 'q60',
        correctLabel: 'B',
        explanation: 'Ajuste fino: definir la escala del eje vertical.',
    },
];
