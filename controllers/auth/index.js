const registrationController = require("./register");
const loginController = require("./login");
const logoutController = require("./logout");
const getCurrentController = require("./getCurrent");
const updateSubscriptionController = require("./updateSubscription");
const updateAvatarController = require("./updateAvatarController");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  getCurrentController,
  updateSubscriptionController,
  updateAvatarController,
};
