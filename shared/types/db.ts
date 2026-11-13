import { sites } from "@nuxthub/db/schema";

export type Site = typeof sites.$inferInsert;
