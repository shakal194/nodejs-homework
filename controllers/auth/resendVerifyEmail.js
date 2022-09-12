const users = require("../../services/authService");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  await users.resendVerifyEmail(email);
  res.status(200).json({
    status: `Re-send email for verification`,
    code: 200,
  });
};

module.exports = resendVerifyEmail;
