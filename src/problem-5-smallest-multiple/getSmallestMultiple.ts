export function getSmallestMultiple(max: number): number {
    for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
        for (let j = 1; j <= max; j++) {
            if (i % j !== 0) {
                break;
            }
            if (j === max) {
                return i;
            }
        }
    }
    return 0;
}
