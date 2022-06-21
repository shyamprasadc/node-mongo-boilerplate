const responseHelper = require('../helpers/response');
const messageHelper = require('../helpers/message');
const { hashPassword } = require('../utilities/passwordUtils');
const userService = require('../services/userService');
const config = require('../config');

const signupUser = async (req, res, next) => {
  try {
    const { name, phone_number, email, password } = req.body;

    const existingUser = await userService.findOneUser({ email });
    if (existingUser) return responseHelper.badRequestError(res, messageHelper.user.emailExists);

    const newUserData = {
      name,
      phone_number,
      email,
    };
    const hashedPassword = await hashPassword(password);

    Object.assign(newUserData, { role: config.DB.CONSTANTS.USER_ROLE.CUSTOMER, password: hashedPassword });

    const newUser = await userService.createUser(newUserData);

    return responseHelper.success(res, messageHelper.user.created, newUser);
  } catch (ex) {
    return next(ex);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const user = await userService.findUserById(req.user._id).lean().exec();
    if (!user) return responseHelper.badRequestError(res, messageHelper.user.notFound);

    return responseHelper.success(res, messageHelper.user.data, user);
  } catch (ex) {
    return next(ex);
  }
};

module.exports = {
  signupUser,
  getUserProfile,
};
