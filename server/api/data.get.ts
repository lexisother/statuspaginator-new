export default defineEventHandler(async (ev) => {
  await requireUserSession(ev);

  const sites = await db.select().from(schema.sites);

  return {
    clientTime: Date.now(),
    data: { sites },
  };
});
