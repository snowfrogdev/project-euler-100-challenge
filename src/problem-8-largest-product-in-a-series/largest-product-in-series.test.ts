import { largestProductInSeries } from './largest-product-in-series';

test('largestProductInSeries', () => {
    expect(largestProductInSeries(2)).toBe(81);
    expect(largestProductInSeries(4)).toBe(5832);
    expect(largestProductInSeries(13)).toBe(23514624000);
});
