const users = require("../../services/authService");
const RequestError = require("../../helpers");

const updateSubscriptionController = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await users.updateSubcription(_id, { subscription });
  console.log(_id);

  if (!result) {
    throw RequestError({
      status: `User with id=${_id} not found`,
      code: 404,
    });
  }
  res.status(200).json({
    status: `User with id=${_id} updated subscription`,
    code: 200,
    payload: { subscription },
  });
};

module.exports = updateSubscriptionController;
