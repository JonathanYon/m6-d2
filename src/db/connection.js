import pg from "pg";
const { Pool } = pg;
// pools will use environment variables
// for connection information
console.log("====>", process.env.NODE_ENV);
// const db = new Pool(
//   {
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionString:
//     process.env.NODE_ENV !== "development"
//       ? process.env.DATABASE_URL
//       : process.env.DATABASE_URL_DEV,
// }
// )
// db.query("SELECT NOW()", (err, res) => {
//   console.log("err", err, res);
//   db.end();
// });

const { NODE_ENV, DATABASE_URL } = process.env;

const isDeployed = NODE_ENV === "production";
// conditional ssl config

const sslConfig = isDeployed ? { ssl: { rejectUnauthorized: false } } : {};

// then spread it into Pool

const db = new Pool({
  ...sslConfig, //  spreading sslConfig conditionally
  connectionString: DATABASE_URL,
});

export default db;
