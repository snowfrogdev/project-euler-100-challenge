import { isOdd } from '../shared/shared';

function* fibonacciSequence(maxTerm: number): Generator<number> {
    let previousTerm = 0;
    let currentTerm = 1;

    const getNextTerm = (): number => previousTerm + currentTerm;

    while (getNextTerm() < maxTerm) {
        const nextTerm = getNextTerm();
        yield nextTerm;

        previousTerm = currentTerm;
        currentTerm = nextTerm;
    }
}

export const computeSumOfEvenFibonacciNumbers = (maxTerm: number): number => {
    let sum = 0;

    for (const term of fibonacciSequence(maxTerm)) {
        if (!isOdd(term)) {
            sum += term;
        }
    }

    return sum;
};
