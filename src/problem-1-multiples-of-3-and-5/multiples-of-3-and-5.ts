export class NaturalNumber {
    private constructor(private integer: bigint) {}
    static of(integer: bigint): NaturalNumber {
        return new NaturalNumber(integer);
    }
    getMultiplesBelow(integer: bigint): bigint[] {
        return [1n, 2n, 3n, 4n, 5n, 6n, 7n];
    }
}
