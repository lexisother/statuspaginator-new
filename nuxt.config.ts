import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt config
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "@nuxtjs/better-auth", "@pinia/nuxt", "@nuxt/icon/module"],
  css: ["~/assets/css/index.css"],
  compatibilityDate: "2025-07-15",

  // Nitro config
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  routeRules: {
    "/": { auth: { only: "guest", redirectTo: "/dashboard" } },
    "/dashboard/**": { auth: { only: "user", redirectTo: "/" } },
  },

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
