import { SiteInsert } from "~~/shared/types/db";

export default defineTask({
  meta: {
    name: "Seed database",
  },
  async run({ payload, context }) {
    console.log("Seeding database...");

    const sites: SiteInsert[] = [];
    for (let i = 0; i < 8; i++) {
      sites.push({
        name: `Site ${i + 1}`,
        url: "https://example.com",
        token: "xxx",
        type: i > 3 ? "staging" : "production",
      });
    }

    await db.insert(schema.sites).values(sites);

    return { result: "success" };
  },
});
