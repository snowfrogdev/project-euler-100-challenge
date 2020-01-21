import { getLargestPalindromeProduct } from './getLargestPalindromeProduct';

test('getLargestPalindromeProduct()', () => {
    expect(getLargestPalindromeProduct(2)).toBe(9009);
    expect(getLargestPalindromeProduct(3)).toBe(906609);
});
