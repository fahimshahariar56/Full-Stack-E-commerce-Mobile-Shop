const ApiResponse = require('../utils/apiResponse');

const notFound = (req, res, next) => {
  const error = new Error(`Resource not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || 'An unexpected error occurred';
  const errors = process.env.NODE_ENV === 'development' ? { stack: err.stack } : null;

  return ApiResponse.error(res, message, statusCode, errors);
};

module.exports = {
  notFound,
  errorHandler,
};
