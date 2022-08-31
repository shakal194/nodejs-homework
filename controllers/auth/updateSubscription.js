const users = require("../../services/authService");
const RequestError = require("../../helpers");

const updateSubscriptionController = async (req, res) => {
  const { userId } = req.params;
  const { body } = req.body;
  const result = await users.updateSubcription(userId, { body });

  if (!result) {
    throw RequestError({
      status: `User with id=${userId} not found`,
      code: 404,
    });
  }
  res.status(200).json({
    status: `User with id=${userId} updated`,
    code: 200,
    payload: { result },
  });
};

module.exports = updateSubscriptionController;
