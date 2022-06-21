const Joi = require('joi');
const _ = require('lodash');
const responseHelper = require('../helpers/response');

const validate = (schema) => (req, res, next) => {
  try {
    const validSchema = _.pick(schema, ['params', 'query', 'body']);
    const object = _.pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: 'key' } })
      .validate(object);

    if (error) {
      const errorMessage = error.details.map((details) => details.message.replace(/['"]+/g, '')).join(', ');
      return responseHelper.validationError(res, errorMessage);
    }
    Object.assign(req, value);
    return next();
  } catch (ex) {
    return responseHelper.validationError(res, ex);
  }
};

module.exports = {
  validate,
};
