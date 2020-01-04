import { NaturalNumber, sumOfMultiples3And5 } from './multiples-of-3-and-5';

test('throws an error when trying instantiate a NaturalNumber with a float', () => {
    expect(() => NaturalNumber.of(3.1416)).toThrow('NaturalNumber can only be instantiated with an integer.');
});

test.each([
    [1, 8, [1, 2, 3, 4, 5, 6, 7]],
    [2, 10, [2, 4, 6, 8]],
    [3, 13, [3, 6, 9, 12]],
])('%i.findMultiplesBelow(%i)', (a, b, multiples) => {
    expect(NaturalNumber.of(a).getMultiplesBelow(b)).toEqual(multiples);
});

test.each([
    [49, 543],
    [19564, 89301183],
    [8456, 16687353],
    [1000, 233168],
])('sumOfMultiples3and5(%i)', (a, sum) => {
    expect(sumOfMultiples3And5(a)).toBe(sum);
});
