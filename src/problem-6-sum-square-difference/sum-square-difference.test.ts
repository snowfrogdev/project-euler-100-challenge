test("getSumSquareDifference", () => {
    expect(getSumSquareDifference(10)).toBe(2640);
    expect(getSumSquareDifference(20)).toBe(41230);
    expect(getSumSquareDifference(100)).toBe(25164150);
});

function getSumSquareDifference(max: number): number {
    const range = [...Array(max)].map((_, index) => index + 1);
    const squareOfSum = range.reduce((sum, current) => sum + current) ** 2;
    const sumOfSquares = range.reduce((sum, current) => sum + current ** 2, 0);

    return squareOfSum - sumOfSquares;
}
