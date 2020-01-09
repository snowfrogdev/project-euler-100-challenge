export const sumSquareDifference = (max: number): number => {
    const range = [...Array(max)].map((_, index) => index + 1);
    const squareOfSum = range.reduce((sum, current) => sum + current) ** 2;
    const sumOfSquares = range.reduce((sum, current) => sum + current ** 2, 0);

    return squareOfSum - sumOfSquares;
};
