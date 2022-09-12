const users = require("../../services/authService");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);
  await users.verifyEmail(verificationToken);
  res.status(200).json({
    status: `Verification successful`,
    code: 200,
  });
};

module.exports = verifyEmail;
