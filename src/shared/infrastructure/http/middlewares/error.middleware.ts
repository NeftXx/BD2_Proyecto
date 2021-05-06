export const ErrorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  return res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message || "resource not found",
  });
}
