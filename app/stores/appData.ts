import type { Response } from "#build/server-routes";

export const useAppDataStore = defineStore("appData", {
  state: () => ({
    data: {} as Response<"/api/data">["data"],
  }),

  getters: {
    sites: (state) => state.data.sites,
  },
});
