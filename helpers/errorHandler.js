const responseHelper = require('./response');
const messageHelper = require('./message');
const loggerHelper = require('./logger');

function errorHandler(error, req, res, next) {
  if (typeof error === 'string') {
    // custom application error
    return responseHelper.badRequestError(res, error);
  }

  if (error.name === 'SyntaxError') {
    // json validation error
    return responseHelper.validationError(res, messageHelper.invalidJson);
  }

  if (error.name === 'UnauthorizedError') {
    // jwt authentication error
    return responseHelper.authorizationError(res, error.message);
  }

  if (error.message === 'Not allowed by CORS') {
    // browser cors error
    return responseHelper.accessError(res);
  }

  if (error.name === 'NotFoundError') {
    // api not found error
    return responseHelper.notFoundError(res);
  }

  console.log(error);
  loggerHelper.error(`[ERROR] Server error: ${error}`);

  return responseHelper.serverError(res, error);
}

module.exports = errorHandler;
