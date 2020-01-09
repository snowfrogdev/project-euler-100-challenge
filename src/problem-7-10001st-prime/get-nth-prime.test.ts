import { primeNumbers } from '../shared/shared';

test('getNthPrime', () => {
    expect(getNthPrime(6)).toBe(13);
    expect(getNthPrime(10)).toBe(29);
    expect(getNthPrime(100)).toBe(541);
    expect(getNthPrime(1000)).toBe(7919);
    expect(getNthPrime(10001)).toBe(104743);
});

function getNthPrime(nthPrime: number): number {
    for (const prime of primeNumbers()) {
        if (--nthPrime === 0) {
            return prime;
        }
    }

    return 0;
}
