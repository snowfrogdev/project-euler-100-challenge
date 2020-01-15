import { primeNumbers } from '../shared/shared';

test('sumOfPrimesBelow', () => {
    expect(sumOfPrimesBelow(17)).toBe(41);
    expect(sumOfPrimesBelow(2001)).toBe(277050);
    expect(sumOfPrimesBelow(140759)).toBe(873608362);
    expect(sumOfPrimesBelow(2000000)).toBe(142913828922);
});

function sumOfPrimesBelow(ceiling: number): number {
    return [...primeNumbers(ceiling)].reduce((a, b) => a + b);
}
