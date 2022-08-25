const contacts = require("../../services/contactsService");
const { RequestError } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await contacts.updateFavorite(contactId, { favorite });

  if (!result) {
    throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
  }
  res.json({
    status: `Contact with id=${contactId} updated`,
    code: 200,
    payload: { result },
  });
};

module.exports = updateFavorite;
