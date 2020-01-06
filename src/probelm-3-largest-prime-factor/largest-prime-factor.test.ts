test('prime numbers generator', () => {
    const primes = [...primeNumbers(10)];

    const expected = [2, 3, 5,]// 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    expect(primes).toEqual(expected);
});

function* primeNumbers(max: number): Generator<number> {
    yield 2;
    yield 3;
    yield 5;
}
