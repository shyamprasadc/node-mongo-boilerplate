const { User } = require('../models/user');

const findUsers = (query, opts = null) => {
  if (opts) {
    return User.find(query)
      .select({ password: 0 })
      .sort({ created_at: -1 })
      .skip((opts.page - 1) * opts.limit)
      .limit(opts.limit);
  }

  return User.find(query).select({ password: 0 }).sort({ created_at: -1 });
};

const findUserById = (id) => {
  return User.findById(id);
};

const findOneUser = (query) => {
  return User.findOne(query);
};

const createUser = (userData) => {
  const user = new User({ ...userData });
  return user.save();
};

module.exports = {
  findUsers,
  findUserById,
  findOneUser,
  createUser,
};
