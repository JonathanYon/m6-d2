import db from "../../db/connection.js";

const list = async (req, res, next) => {
  try {
    const result = await db.query(`SELECT NOW()`);
    res.send(result);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const productHandlers = {
  list,
};
export default productHandlers;
