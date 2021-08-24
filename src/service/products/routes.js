import { Router } from "express";
import productHandlers from "./handlers.js";

const route = Router();

route.get("/", productHandlers.list);

route.get("/", productHandlers.list);
route.post("/", productHandlers.create);
route.get("/:id", productHandlers.single);
route.put("/:id", productHandlers.update);
route.delete("/:id", productHandlers.deletes);

export default route;
