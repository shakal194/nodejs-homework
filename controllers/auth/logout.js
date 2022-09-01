const users = require("../../services/authService");

const logoutController = async (req, res) => {
  const { _id } = req.user;

  if (!_id) {
    return res.json({ status: 401, message: "Not authorized" });
  }
  await users.logout(_id);
  res.json({ status: 204, message: "No Content" });
};

module.exports = logoutController;
