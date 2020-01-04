export const isOdd = (num: number): boolean => {
    if (!Number.isInteger(num)) {
        throw new TypeError('isOdd only works with integers.');
    }

    return num & 1 ? true : false;
};
