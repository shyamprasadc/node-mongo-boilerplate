const responseHelper = require('../helpers/response');
const messageHelper = require('../helpers/message');
const { verifyToken } = require('../helpers/jwt');
const userService = require('../services/userService');

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers[`authorization`];
    if (!authHeader) return responseHelper.authorizationError(res, messageHelper.jwt.invalidAuthorization);
    if (!authHeader.startsWith('Bearer ')) {
      return responseHelper.authorizationError(res, messageHelper.jwt.invalidAuthorization);
    }

    const token = authHeader.split(' ')[1];
    Object.assign(req, { token });

    const tokenPayload = await verifyToken(token);
    Object.assign(req, { tokenPayload });

    const user = await userService.findOneUser({ email: tokenPayload.aud });
    if (!user) return responseHelper.authorizationError(res, messageHelper.user.invalid);
    Object.assign(req, { user });

    return next();
  } catch (ex) {
    if (ex.name === 'TokenExpiredError') {
      return responseHelper.authorizationError(res, messageHelper.jwt.tokenExpired);
    }
    return responseHelper.authorizationError(res, messageHelper.unauthorized);
  }
};

module.exports = {
  userAuth,
};
