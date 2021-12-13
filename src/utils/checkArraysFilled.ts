export const checkArraysField = (...args: any[]) => {
    const arrs = args.map((len) => len !== 0);
    const filled = arrs.every((arr) => !!arr);

    return filled;
};
