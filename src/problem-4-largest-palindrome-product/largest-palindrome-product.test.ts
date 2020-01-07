test('getLargestPalindromeProduct()', () => {
    expect(getLargestPalindromeProduct(2)).toBe(9009);
});

function getLargestPalindromeProduct(digitsOfFactors: number): number {
    const highestFactor = 10 ** digitsOfFactors - 1;
    const lowestFactor = 10 ** (digitsOfFactors - 1);

    let largestPalindrome = 0;

    for (let i = lowestFactor; i <= highestFactor; i++) {
        for (let j = lowestFactor; j <= highestFactor; j++) {
            const product = i * j;
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

function isPalindrome(num: number): boolean {
    const reversedNumber = Number(
        num
            .toString()
            .split('')
            .reverse()
            .join(''),
    );

    return reversedNumber === num;
}
