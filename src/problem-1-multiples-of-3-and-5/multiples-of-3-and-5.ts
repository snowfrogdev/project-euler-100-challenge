export class NaturalNumber {
    private constructor(private integer: number) {}
    static of(integer: number): NaturalNumber {
        if (!Number.isInteger(integer) || integer < 0) {
            throw new TypeError('NaturalNumber can only be instantiated with an non-negative integer.');
        }
        return new NaturalNumber(integer);
    }
    getMultiplesBelow(ceiling: number): number[] {
        const multiples = [];
        let multiple = this.integer;
        for (let i = 1; multiple < ceiling - this.integer; i++) {
            multiple = i * this.integer;
            multiples.push(multiple);
        }

        return multiples;
    }
}

export const sumOfMultiples3And5 = (ceiling: number): number => {
    const multiplesOf3 = NaturalNumber.of(3).getMultiplesBelow(ceiling);
    const multiplesOf5 = NaturalNumber.of(5).getMultiplesBelow(ceiling);
    return [...new Set([...multiplesOf3, ...multiplesOf5])].reduce((sum, current) => sum + current);
};
