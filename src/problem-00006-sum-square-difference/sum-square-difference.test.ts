import { sumSquareDifference } from './sum-square-difference';

test('getSumSquareDifference', () => {
    expect(sumSquareDifference(10)).toBe(2640);
    expect(sumSquareDifference(20)).toBe(41230);
    expect(sumSquareDifference(100)).toBe(25164150);
});
