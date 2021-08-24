import { Router } from "express";
import productHandlers from "./handlers.js";

const route = Router();

route.get("/", productHandlers.list);

export default route;
