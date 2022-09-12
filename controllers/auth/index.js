const registrationController = require("./register");
const loginController = require("./login");
const logoutController = require("./logout");
const getCurrentController = require("./getCurrent");
const updateSubscriptionController = require("./updateSubscription");
const updateAvatarController = require("./updateAvatarController");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  registrationController,
  loginController,
  logoutController,
  getCurrentController,
  updateSubscriptionController,
  updateAvatarController,
  verifyEmail,
  resendVerifyEmail,
};
