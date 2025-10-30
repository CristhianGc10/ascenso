export const clamp = (v: number, a: number, b: number) =>
    Math.max(a, Math.min(b, v));

export function pick<T>(arr: T[], i: number): T {
    if (!arr.length) throw new Error('Array vacío');
    const idx = clamp(i, 0, arr.length - 1);
    return arr[idx];
}
