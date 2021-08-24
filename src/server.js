import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

const server = express();
const port = process.env.port;

server.use(cors());
server.use(express.json());

console.table(listEndpoints(server));
server.listen(port, () => {
  console.log(`✅ server runing on ${port}`);
});
server.on(`error`, (error) => {
  console.log(`❌ server is failed: ${error}`);
});
