import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Nuxt config
  modules: ["@nuxthub/core", "@nuxtjs/better-auth"],
  css: ["~/assets/css/index.css"],

  vite: {
    plugins: [...tailwindcss({ optimize: { minify: true } })],
  },

  // Module config
  hub: {
    db: {
      dialect: "mysql",
    },
  },
});
