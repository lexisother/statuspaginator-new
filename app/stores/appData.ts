import { API_FETCH_TIMER } from "~/constants";

export const useAppDataStore = defineStore("appData", {
  state: () => ({
    lastApiTime: Date.now(),
    now: Date.now(),
  }),

  getters: {
    apiPct: (state) =>
      Math.max(0, Math.min(1, 1 - (state.now - state.lastApiTime) / API_FETCH_TIMER)),
  },
});
