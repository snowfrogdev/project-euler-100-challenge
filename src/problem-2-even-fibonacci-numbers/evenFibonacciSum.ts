import { isOdd } from '../shared/shared';

export const evenFibonacciSum = (maxTerm: number): number => {
    let lastTerm = 1;
    let secondToLastTerm = 0;

    const getNextTerm = (): number => lastTerm + secondToLastTerm;

    let sum = 0;

    while (getNextTerm() < maxTerm) {
        const nextTerm = getNextTerm();
        if (!isOdd(nextTerm)) {
            sum += nextTerm;
        }
        secondToLastTerm = lastTerm;
        lastTerm = nextTerm;
    }

    return sum;
};
