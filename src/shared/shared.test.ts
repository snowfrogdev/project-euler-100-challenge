import { isOdd } from './shared';

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
