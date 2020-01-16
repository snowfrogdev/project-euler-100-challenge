export const isOdd = (num: number): boolean => {
    if (!Number.isInteger(num)) {
        throw new TypeError('isOdd only works with integers.');
    }

    return num & 1 ? true : false;
};

export function isPrime(num: number): boolean {
    if (num <= 3) return num > 1;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

export function* primeNumbers(limit = Number.MAX_VALUE): Generator<number> {
    yield 2;
    for (let num = 3; num < limit; num += 2) {
        if (isPrime(num)) yield num;
    }
}
