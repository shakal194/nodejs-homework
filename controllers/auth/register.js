const users = require("../../services/authService");

const registrationController = async (req, res) => {
  const { email, password } = req.body;

  const result = await users.registration(email, password);

  res.json({ status: "User created success", code: 201, payload: { result } });
};

module.exports = registrationController;
