import pg from "pg";
const { Pool } = pg;
// pools will use environment variables
// for connection information
// console.log("====>", process.env.NODE_ENV);
// const db = new Pool({
//   ssl: {
//     rejectUnauthorized: false,
//   },
//   connectionString:
//     process.env.NODE_ENV !== "development"
//       ? process.env.DATABASE_URL
//       : process.env.DATABASE_URL_DEV,
// });
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const { NODE_ENV, DATABASE_URL_DEV } = process.env;

const isDeployed = NODE_ENV === "production";
// conditional ssl config

const sslConfig = isDeployed ? { ssl: { rejectUnauthorized: false } } : {};

// then spread it into Pool

const db = new Pool({
  ...sslConfig, //  spreading sslConfig conditionally
  connectionString: DATABASE_URL_DEV,
});

export default db;
