import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "sqlite://sqlite.db",
  },
} satisfies Config;
