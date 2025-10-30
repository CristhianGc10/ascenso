import { useEffect, useRef } from "react";

/**
 * Temporizador oculto por pregunta.
 * Reinicia cuando cambia `key` (normalmente el id de la pregunta).
 */
export function useHiddenTimer(ms: number, key: string, onTimeout: () => void) {
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (ref.current) clearTimeout(ref.current);
    ref.current = setTimeout(() => onTimeout(), ms);
    return () => {
      if (ref.current) clearTimeout(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, ms]);
}
