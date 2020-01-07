export const isOdd = (num: number): boolean => {
    if (!Number.isInteger(num)) {
        throw new TypeError('isOdd only works with integers.');
    }

    return num & 1 ? true : false;
};

export function isPrime(num: number): boolean {
    if (num <= 1) return false;

    if (num === 2) return true;

    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}
