import { isOdd, primeNumbers } from './shared';

test.each([
    [1, true],
    [2, false],
    [13, true],
    [24, false],
    [-1, true],
    [-6, false],
    [-37, true],
    [-88, false],
    [0, false],
])('isOdd(%i)', (a, expected) => {
    expect(isOdd(a)).toBe(expected);
});

test('isOdd() throws if passed a non integer', () => {
    expect(() => isOdd(1.67)).toThrow('isOdd only works with integers.');
    expect(() => isOdd(-30.74)).toThrow('isOdd only works with integers.');
});

test('prime numbers generator', () => {
    const primes = [...primeNumbers(100)];

    const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    expect(primes).toEqual(expected);
});
