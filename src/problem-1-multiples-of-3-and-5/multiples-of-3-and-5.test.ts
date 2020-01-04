import { NaturalNumber } from './multiples-of-3-and-5';
test.each([
    [1n, 8n, [1n, 2n, 3n, 4n, 5n, 6n, 7n]],
    //[2n, 10n, [2n, 4n, 6n, 8n]],
    //[3n, 13n, [3n, 6n, 9n, 12n]],
])('%i.findMultiplesBelow(%i)', (a, b, multiples) => {
    expect(NaturalNumber.of(a).getMultiplesBelow(b)).toEqual(multiples);
});
