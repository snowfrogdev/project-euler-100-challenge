import { computeSumOfEvenFibonacciNumbers } from './evenFibonacciSum';

test('Even Fibonacci', () => {
    expect(computeSumOfEvenFibonacciNumbers(10)).toBe(10);
    expect(computeSumOfEvenFibonacciNumbers(40)).toBe(44);
    expect(computeSumOfEvenFibonacciNumbers(4_000_000)).toBe(4613732);
});
