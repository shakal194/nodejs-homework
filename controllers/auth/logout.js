const users = require("../../services/authService");

const logoutController = async (req, res) => {
  const { _id } = req.user;

  if (!_id) {
    return res.json({ status: 401, message: "Not authorized" });
  }
  await users.logout(_id);

  res.json({
    status: `User with ${_id} logout success`,
    code: 204,
  });
};

module.exports = logoutController;
