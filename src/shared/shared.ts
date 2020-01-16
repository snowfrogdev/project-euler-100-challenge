export const isOdd = (num: number): boolean => {
    if (!Number.isInteger(num)) {
        throw new TypeError('isOdd only works with integers.');
    }

    return num & 1 ? true : false;
};

export function isStrongPseudoPrime(d: number, n: number): boolean {
    const a = 2 + (getRandomIntInclusive(2, n - 2) % (n - 4));

    let x = powerMod(a, d, n);

    if (x === 1 || x === n - 1) return true;

    while (d !== n - 1) {
        x = (x * x) % n;
        d *= 2;

        if (x === 1) return false;
        if (x === n - 1) return true;
    }

    return false;
}

export function isPrime(n: number): boolean {
    if (n <= 1 || n == 4) return false;
    if (n <= 3) return true;

    let d = n - 1;

    while (d % 2 == 0) d /= 2;

    for (let i = 0; i < 7; i++) if (!isStrongPseudoPrime(d, n)) return false;

    return true;
}

export function* primeNumbers(limit = Number.MAX_VALUE): Generator<number> {
    yield 2;
    for (let num = 3; num < limit; num += 2) {
        if (isPrime(num)) yield num;
    }
}

export function powerMod(x: number, y: number, p: number): number {
    let res = 1;
    x = x % p;

    while (y > 0) {
        if ((y & 1) == 1) res = (res * x) % p;

        y = y >> 1; // y = y/2
        x = (x * x) % p;
    }

    return res;
}

export function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
