export const clamp = (val: number, maxVal: number = 1, minVal: number = 0) =>
  isNum(val) ? Math.max(Math.min(maxVal, minVal), Math.min(Math.max(maxVal, minVal), val)) : 0;

export const scaleValue = (val: number, baseRef: number, newRef: number) =>
  newRef ? (val * baseRef) / newRef : 0;

export function mapToGroups<T, K extends PropertyKey, V>(
  items: T[],
  callback: (item: T, index: number) => Record<K, V>,
): Record<K, V[]> {
  return items.reduce(
    (groups, item, index) => {
      const mapped = callback(item, index);

      for (const [key, value] of Object.entries(mapped) as [K, V][]) {
        (groups[key] ??= []).push(value);
      }

      return groups;
    },
    {} as Record<K, V[]>,
  );
}
