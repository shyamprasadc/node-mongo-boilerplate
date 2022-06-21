const responseHelper = require('../helpers/response');
const messageHelper = require('../helpers/message');

const accessFor = (types) => (req, res, next) => {
  try {
    if (!req.user) return responseHelper.authorizationError(res, messageHelper.unauthorized);
    if (!types.includes(req.user.roleId)) return responseHelper.accessError(res);

    return next();
  } catch (ex) {
    return responseHelper.accessError(res);
  }
};

module.exports = {
  accessFor,
};
