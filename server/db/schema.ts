import { mysqlTable, text, serial, mysqlEnum, json } from "drizzle-orm/mysql-core";
import { CraftInfo, SiteMeta } from "~~/shared/types/db";

export const sites = mysqlTable("sites", {
  id: serial().primaryKey().autoincrement(),
  name: text(),
  type: mysqlEnum(["production", "staging"]).default("production").notNull(),
  token: text().notNull(),
  url: text().notNull(),
  timezone: text(),
  data: json().$type<{
    meta: SiteMeta;
    php: string;
    craft: CraftInfo;
  }>(),
});
