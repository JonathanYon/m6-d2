import fs from "fs-extra";
import { join } from "path";
import db from "../db/connection.js";

const patheSQL = join(process.cwd(), "src/sql/new-table.sql");
const createTable = async () => {
  try {
    const sqlBuffer = await fs.readFile(patheSQL);
    const sqlCommand = sqlBuffer.toString();
    const result = await db.query(sqlCommand);
    console.log(result);
    console.log(`✅ TABLE CREATED`);
  } catch (error) {
    console.log(`❌ TABLE NOT CREATED`);
  }
};
export default createTable;
