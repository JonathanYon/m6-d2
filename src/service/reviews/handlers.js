const list = (req, res, next) => {
  try {
    res.send("get all reviews");
  } catch (error) {
    next(error);
    res.status(500).send(error);
  }
};

const reviewtHandlers = {
  list,
};
export default reviewtHandlers;
