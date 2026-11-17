export const debug = (...args: Parameters<typeof console.log>) => {
  import.meta.env.DEV && console.log(...args);
};
