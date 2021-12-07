import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import services from "./service/index.js";
import createTable from "./scripts/read-table.js";

const server = express();
const port = process.env.PORT || 3003;

server.use(cors());
server.use(express.json());

server.use("/", services);

console.table(listEndpoints(server));
server.listen(port, async () => {
  console.log(`✅ server runing on ${port}`);
  await createTable();
});
server.on(`error`, (error) => {
  console.log(`❌ server is failed: ${error}`);
});
