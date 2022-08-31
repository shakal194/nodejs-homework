const contacts = require("../../services/contactsService");
const { RequestError } = require("../../helpers");

const deleteContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.deleteContactById(contactId);
    if (!result) {
      throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
    }
    res.json({
      status: `Contact with id=${contactId} deleted`,
      code: 200,
      payload: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContactById;
