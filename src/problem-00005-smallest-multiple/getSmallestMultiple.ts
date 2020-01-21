export function getSmallestMultiple(max: number): number {
    for (let i = max; i <= Number.MAX_SAFE_INTEGER; i += max) {
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
