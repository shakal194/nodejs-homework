const contacts = require("../../services/contactsService");
const { RequestError } = require("../../helpers");

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await contacts.updateContactById(contactId, req.body);

  if (!result) {
    throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
  }
  res.json({
    status: `Contact with id=${contactId} updated`,
    code: 200,
    payload: { result },
  });
};

module.exports = updateContactById;
