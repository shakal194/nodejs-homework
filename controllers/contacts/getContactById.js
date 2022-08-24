const contacts = require("../../services/contactsService");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);

    if (!result) {
      throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
    }
    res.json({
      status: `Contact with id=${contactId} founded`,
      code: 200,
      payload: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
