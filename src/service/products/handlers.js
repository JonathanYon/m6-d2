import db from "../../db/connection.js";

const list = async (req, res, next) => {
  try {
    const products = await db.query(`SELECT * FROM stuffs`);
    res.send(products.rows);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, description, brand, image_url, price, category } = req.body;
    const products = await db.query(
      `INSERT INTO stuffs(name, description, brand, image_url, price, category) VALUES('${name}', '${description}', '${brand}', '${image_url}', '${price}', '${category}') RETURNING *` //, '${created_at}', '${updated_at}  , created_at, updated_at
    );
    res.send(products.rows);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};
const single = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await db.query(`SELECT * FROM stuffs WHERE id = ${id}`);
    const [found, ...rest] = products.rows;
    res.status(found ? 200 : 404).send(found); //send(products.rows[0]);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment, rate } = req.body;
    const products = await db.query(`

    UPDATE stuffs 
    SET comment = '${comment}',
    rate = '${rate}'
    WHERE id = ${id} RETURNING *`);
    const [found, ...rest] = products.rows;
    res.status(found ? 200 : 400).send(found);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const deletes = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment, rate } = req.body;
    const products = await db.query(`
    DELETE FROM stuffs
    WHERE id = ${id}
    `);
    const [found, ...rest] = products.rows;
    res.status(found ? 200 : 400).send(found);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const productHandlers = {
  list,
  create,
  update,
  deletes,
  single,
};
export default productHandlers;
