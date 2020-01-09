import { primeNumbers } from '../shared/shared';

export const getNthPrime = (nthPrime: number): number => {
    for (const prime of primeNumbers()) {
        if (--nthPrime === 0) {
            return prime;
        }
    }

    return 0;
};
