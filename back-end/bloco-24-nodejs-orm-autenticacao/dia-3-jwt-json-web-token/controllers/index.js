const ping = require('./ping');
const login = require('./loginControllers');
const me = require('./me');
const topSecret = require('./topSecret');

module.exports = {
  login,
  me,
  ping,
  topSecret,
};
