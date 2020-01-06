import { primeNumbers, getPrimeFactors, getLargestPrimeFactor } from './largest-prime-factor';

test('prime numbers generator', () => {
    const primes = [...primeNumbers(100)];

    const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    expect(primes).toEqual(expected);
});

test('getPrimeFactors', () => {
    expect(getPrimeFactors(13195)).toEqual([5, 7, 13, 29]);
});

test('largest prime factor', () => {
    expect(getLargestPrimeFactor(13195)).toBe(29);
    expect(getLargestPrimeFactor(600851475143)).toBe(6857);
});
