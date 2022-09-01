const users = require("../../services/authService");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const token = await users.login(email, password);

  res.json({ status: 200, token });
};

module.exports = loginController;
