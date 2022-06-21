const responseHelper = require('../helpers/response');
const messageHelper = require('../helpers/message');
const { comparePassword } = require('../utilities/passwordUtils');
const userService = require('../services/userService');
const { generateToken } = require('../helpers/jwt');
const { DB } = require('../config');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.findOneUser({ email }).lean().exec();
    if (!user) return responseHelper.badRequestError(res, messageHelper.user.notFound);

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return responseHelper.badRequestError(res, messageHelper.auth.passwordWrong);

    if (user.status === DB.CONSTANTS.USER_STATUS.BLOCKED) {
      return responseHelper.badRequestError(res, messageHelper.user.blocked);
    }

    const token = await generateToken(user.email);
    const loginData = {
      token,
      email,
      role: user.role,
    };
    return responseHelper.success(res, messageHelper.auth.loggedIn, loginData);
  } catch (ex) {
    return next(ex);
  }
};

module.exports = {
  loginUser,
};
