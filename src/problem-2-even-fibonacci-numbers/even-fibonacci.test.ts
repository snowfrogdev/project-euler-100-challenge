import { evenFibonacciSum } from './evenFibonacciSum';

test('Even Fibonacci', () => {
    expect(evenFibonacciSum(10)).toBe(10);
    expect(evenFibonacciSum(40)).toBe(44);
    expect(evenFibonacciSum(4_000_000)).toBe(4613732);
});
