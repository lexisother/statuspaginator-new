export const clamp = (val: number, maxVal: number = 1, minVal: number = 0) =>
  isNum(val) ? Math.max(Math.min(maxVal, minVal), Math.min(Math.max(maxVal, minVal), val)) : 0;

export const scaleValue = (val: number, baseRef: number, newRef: number) =>
  newRef ? (val * baseRef) / newRef : 0;
