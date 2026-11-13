import { mysqlTable, text, serial, timestamp, mysqlEnum, json } from "drizzle-orm/mysql-core";

export const sites = mysqlTable("sites", {
  id: serial().primaryKey().autoincrement(),
  name: text(),
  url: text().notNull(),
  type: mysqlEnum(["production", "staging"]).default("production"),
  timezone: text(),
  data: json(),
});
