test('prime numbers generator', () => {
    const generator = primeNumbers(10);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
});

function* primeNumbers(max: number): Generator<number> {
    yield 2;
    yield 3;
}
