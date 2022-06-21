const config = require('../config');
const jwt = require('jsonwebtoken');

const generateToken = (email) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        iss: 'node-boilerplate',
        aud: email,
      },
      config.JWT.SECRET_KEY,
      { expiresIn: parseInt(config.JWT.EXPIRY) },
      (err, token) => {
        if (err) return reject(err);
        return resolve(token);
      },
    );
  });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.JWT.SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });
};

const verifyTokenIgnoreExp = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.JWT.SECRET_KEY, { ignoreExpiration: true }, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken,
  verifyTokenIgnoreExp,
};
