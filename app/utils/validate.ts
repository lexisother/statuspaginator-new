export const isNum = (x: unknown): x is number => typeof x === "number" && Number.isFinite(x);
