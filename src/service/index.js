import { Router } from "express";
import reviewsRoute from "./reviews/routes.js"; // we just create the name reviewsRout to use whateevr is inside the reviews route.js
import productsRoute from "./products/routes.js"; // we just create the name productsRout to use whateevr is inside the products route.js
const route = Router();

route.use("/reviews", reviewsRoute);
route.use("/products", productsRoute);

export default route;
