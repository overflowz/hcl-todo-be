const db = require('../models/db.model');

const login = name => {
  const user = db.findUser(name);
  return user;
};

module.exports = {
  login,
};
