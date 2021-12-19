import pg from "pg";

const { Pool } = pg;

const db = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString:
    process.env.NODE_ENV !== "development"
      ? process.env.DATABASE_URL
      : process.env.DATABASE_URL_DEV,
});

export default db;
