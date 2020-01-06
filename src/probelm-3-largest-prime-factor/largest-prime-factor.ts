function isPrime(num: number): boolean {
    if (num <= 1) return false;

    if (num === 2) return true;

    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

export function* primeNumbers(limit = Number.MAX_VALUE): Generator<number> {
    for (let num = 1; num < limit; num++) {
        if (isPrime(num)) yield num;
    }
}

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
