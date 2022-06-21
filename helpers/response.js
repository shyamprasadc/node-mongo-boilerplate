const config = require('../config');
const messageHelper = require('./message');

const success = (res, message, data = null) => {
  res.status(config.HTTP_STATUS_CODES.OK).json({
    status: true,
    message,
    error: '',
    data,
  });
};

const badRequestError = (res, message, data = null) => {
  res.status(config.HTTP_STATUS_CODES.BAD_REQUEST).json({
    status: false,
    message,
    error: '',
    data,
  });
};

const validationError = (res, error) => {
  res.status(config.HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).json({
    status: false,
    message: messageHelper.validationErrors,
    error: error.toString(),
    data: null,
  });
};

const serverError = (res, error) => {
  res.status(config.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({
    status: false,
    message: messageHelper.somethingWentWrong,
    error: error.toString(),
    data: null,
  });
};

const authorizationError = (res, message) => {
  res.status(config.HTTP_STATUS_CODES.UNAUTHORIZED).json({
    status: false,
    message,
    error: '',
    data: null,
  });
};

const accessError = (res) => {
  res.status(config.HTTP_STATUS_CODES.FORBIDDEN).json({
    status: false,
    message: messageHelper.permissionDenied,
    error: '',
    data: null,
  });
};

const manyRequestError = (res) => {
  res.status(config.HTTP_STATUS_CODES.TOO_MANY_REQUESTS).json({
    status: false,
    message: messageHelper.tooManyRequests,
    error: '',
    data: null,
  });
};

const notFoundError = (res) => {
  res.status(config.HTTP_STATUS_CODES.NOT_FOUND).json({
    status: false,
    message: messageHelper.notFoundError,
    error: '',
    data: null,
  });
};

module.exports = {
  success,
  badRequestError,
  validationError,
  serverError,
  authorizationError,
  accessError,
  manyRequestError,
  notFoundError,
};
