import type { Intento, Pregunta, Puntaje } from '../../../core/types';
import { useMemo, useState } from 'react';

export function useExamEngine(bank: Pregunta[]) {
    const [index, setIndex] = useState(0);
    const [seleccion, setSeleccion] = useState<null | 'a' | 'b' | 'c'>(null);
    const [finished, setFinished] = useState(false);
    const [attempts, setAttempts] = useState<Intento[]>([]);

    const q = bank[index];

    const score: Puntaje = useMemo(() => {
        const aciertos = attempts.filter((a) => a.correcta === true).length;
        const errores = attempts.filter((a) => a.correcta === false).length;
        return { aciertos, errores, noCalificado: 0 };
    }, [attempts]);

    const submitted = !!attempts.find((a) => a.qid === q?.id);

    function selectOption(letra: 'a' | 'b' | 'c') {
        if (submitted) return; // ya bloqueada
        setSeleccion(letra);
    }

    function submit() {
        if (!q || submitted) return;
        // si no seleccionó nada y quiere comprobar, no hacemos nada
        if (!seleccion) return;
        const op = q.opciones.find((o) => o.letra === seleccion);
        const correcta = !!op?.correcta;
        setAttempts((prev) => [
            ...prev,
            { qid: q.id, seleccion, correcta, timeout: false },
        ]);
    }

    function skip() {
        if (!q || submitted) return;
        // registrar omisión como incorrecta
        setAttempts((prev) => [
            ...prev,
            { qid: q.id, seleccion: null, correcta: false, timeout: false },
        ]);
    }

    function commitTimeout() {
        if (!q) return;
        const ya = attempts.find((a) => a.qid === q.id);
        if (ya) return;
        setAttempts((prev) => [
            ...prev,
            { qid: q.id, seleccion: null, correcta: false, timeout: true },
        ]);
    }

    function next() {
        if (index + 1 >= bank.length) {
            setFinished(true);
            return;
        }
        setSeleccion(null);
        setIndex((i) => i + 1);
    }

    return {
        index,
        q,
        seleccion,
        submitted,
        finished,
        attempts,
        score,
        selectOption,
        submit,
        skip,
        next,
        commitTimeout,
        total: bank.length,
    };
}
