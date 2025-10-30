import { useEffect, useRef, useState } from 'react';

export default function useHiddenTimer(startOnMount = true) {
    const [seconds, setSeconds] = useState(0);
    const ref = useRef<number | null>(null);

    useEffect(() => {
        if (!startOnMount) return;
        ref.current = window.setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => {
            if (ref.current) window.clearInterval(ref.current);
        };
    }, [startOnMount]);

    return { seconds };
}
