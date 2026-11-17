import { defineServerAuth } from "@nuxtjs/better-auth/config";

export default defineServerAuth({
  emailAndPassword: {
    enabled: true,
    // disableSignUp: true,
  },
  trustedOrigins: ["http://localhost:3000", "http://localhost:4321", "https://status.brik.digital"],
});
