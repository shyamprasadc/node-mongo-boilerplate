const Joi = require('joi');

const signup = {
  body: {
    name: Joi.string().min(4).required(),
    phone_number: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
  },
};

module.exports = {
  signup,
};
