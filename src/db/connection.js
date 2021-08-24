import pg from "pg";
const { Pool } = pg;
// pools will use environment variables
// for connection information
const db = new Pool();
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

export default db;
