import { Router } from "express";
import reviewtHandlers from "./handlers.js";

const route = Router();

route.get("/", reviewtHandlers.list);
route.post("/", reviewtHandlers.create);
route.get("/:id", reviewtHandlers.single);
route.put("/:id", reviewtHandlers.update);
route.delete("/:id", reviewtHandlers.deletes);

export default route;
