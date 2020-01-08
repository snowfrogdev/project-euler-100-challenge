import { getSmallestMultiple } from './getSmallestMultiple';

test('smallest-multiple', () => {
    expect(getSmallestMultiple(5)).toBe(60);
    expect(getSmallestMultiple(7)).toBe(420);
    expect(getSmallestMultiple(10)).toBe(2520);
    expect(getSmallestMultiple(13)).toBe(360360);
    expect(getSmallestMultiple(20)).toBe(232792560);
});
