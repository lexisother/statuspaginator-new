import { Site } from "~~/shared/types/db";

export default defineTask({
  meta: {
    name: "Seed database",
  },
  async run({ payload, context }) {
    console.log("Seeding database...");

    const sites: Site[] = [];
    for (let i = 0; i <= 5; i++) {
      sites.push({
        url: "https://example.com",
        token: "xxx",
      });
    }

    await db.insert(schema.sites).values(sites);

    return { result: "success" };
  },
});
