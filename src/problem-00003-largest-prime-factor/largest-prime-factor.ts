import { primeNumbers } from '../shared/shared';

export function getPrimeFactors(num: number): number[] {
    const factors: number[] = [];

    for (const primeNumber of primeNumbers()) {
        if (primeNumber > num) break;

        while (num % primeNumber === 0) {
            factors.push(primeNumber);
            num /= primeNumber;
        }
    }

    return factors;
}

export function getLargestPrimeFactor(num: number): number {
    return getPrimeFactors(num).reduce((a, b) => Math.max(a, b));
}
