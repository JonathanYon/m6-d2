import db from "../../db/connection.js";

const list = async (req, res, next) => {
  try {
    const reviews = await db.query(`SELECT * FROM feedbacks`);
    res.send(reviews.rows);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { comment, rate, stuffs_id } = req.body;
    const reviews = await db.query(
      `INSERT INTO feedbacks(comment, rate, stuffs_id) VALUES('${comment}', '${rate}', '${stuffs_id}') RETURNING *`
    );
    res.send(reviews.rows);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};
const single = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reviews = await db.query(`SELECT * FROM feedbacks WHERE id = ${id}`);
    const [found, ...rest] = reviews.rows;
    res.status(found ? 200 : 404).send(found); //send(reviews.rows[0]);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { comment, rate } = req.body;
    const reviews = await db.query(`

    UPDATE feedbacks 
    SET comment = '${comment}',
    rate = '${rate}',
    stuffs_id = '${stuffs_id}',
    updated_at = NOW()
    WHERE id = ${id} RETURNING *`);
    const [found, ...rest] = reviews.rows;
    res.status(found ? 200 : 400).send(found);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const deletes = async (req, res, next) => {
  try {
    const { id } = req.params;

    const reviews = await db.query(`
    DELETE FROM feedbacks
    WHERE id = ${id}
    `);
    const [found, ...rest] = reviews.rows;
    res.status(found ? 200 : 400).send(found);
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const reviewtHandlers = {
  list,
  create,
  single,
  update,
  deletes,
};
export default reviewtHandlers;
