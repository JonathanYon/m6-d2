import { Router } from "express";
import reviewtHandlers from "./handlers.js";

const route = Router();

route.get("/", reviewtHandlers.list);

export default route;
