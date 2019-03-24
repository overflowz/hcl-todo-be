const UserModel = require('../models/user.model');

const login = userdata => {
  const user = new UserModel(userdata);
  return user;
};

module.exports = {
  login,
};
