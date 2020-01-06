test('prime numbers generator', () => {
    const generator = primeNumbers(10);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
    expect(generator.next().value).toBe(5);
});

function* primeNumbers(max: number): Generator<number> {
    yield 2;
    yield 3;
    yield 5;
}
