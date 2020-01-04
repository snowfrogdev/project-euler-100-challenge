export class NaturalNumber {
    private constructor(private integer: bigint) {}
    static of(integer: bigint): NaturalNumber {
        return new NaturalNumber(integer);
    }
    getMultiplesBelow(ceiling: bigint): bigint[] {
        const multiples = [];
        let multiple = this.integer;
        for (let i = 1n; multiple < ceiling - this.integer; i++) {
            multiple = i * this.integer;
            multiples.push(multiple);
        }

        return multiples;
    }
}
