// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Nuxt config
  modules: ["@nuxthub/core", "@nuxtjs/better-auth"],

  // Module config
  hub: {
    db: {
      dialect: "mysql",
    },
  },
});
