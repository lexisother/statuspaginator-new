import { sites } from "@nuxthub/db/schema";

export type Site = typeof sites.$inferInsert;
export type SiteData = typeof sites.$inferInsert.data;

export interface SiteMeta {
  cpurl: string;
  environment: string;
  isDev: boolean;
  rebrand: {
    icon: boolean;
    logo: boolean;
  };
}

export interface CraftInfo {
  edition: string;
  version: string;
  updates: {
    total: number;
    critical: boolean;
    allowUpdates: boolean;
    updates: {
      cms: Update;
      plugins: Update[];
    };
  };
}

interface Plugin {
  packageName: string;
  releases: PluginRelease[];
}
export interface PluginRelease {
  version: string;
  critical: boolean;
  notes: string;
  date: string;
}

export interface ExpiredPlugin extends Plugin {
  status: "expired";
  renewalUrl: string;
  renewalPrice: number;
  renewalCurrency: string;
}
export interface EligiblePlugin extends Plugin {
  status: "eligible";
  phpConstraint: `^${string}` | null;
}
export type Update = EligiblePlugin | ExpiredPlugin;
