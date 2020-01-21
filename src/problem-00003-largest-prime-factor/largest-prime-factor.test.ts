import { getPrimeFactors, getLargestPrimeFactor } from './largest-prime-factor';

test('getPrimeFactors', () => {
    expect(getPrimeFactors(13195)).toEqual([5, 7, 13, 29]);
});

test('largest prime factor', () => {
    expect(getLargestPrimeFactor(13195)).toBe(29);
    expect(getLargestPrimeFactor(600851475143)).toBe(6857);
});
