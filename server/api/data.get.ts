import { defineEventHandler } from "nuxt/server";

export default defineEventHandler(() => {
  return { clientTime: Date.now() };
});
