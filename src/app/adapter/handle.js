const adaptRoute = handle => async (req, res, next) => {
  const httpResponse = await handle(req, res, next);
  return res.status(httpResponse.statusCode).send(httpResponse.body);
};
module.exports = { adaptRoute };
