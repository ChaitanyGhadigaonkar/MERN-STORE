const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === 'dev' ? err.stack : null
  });
};
export default errorHandler;
