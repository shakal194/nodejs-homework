const contacts = require("../../services");
// const contacts = require("../../models/contacts");
const { RequestError, contactsSchema } = require("../../helpers");

const updateContactById = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const { contactId } = req.params;
    const result = await contacts.updateContactById(contactId, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;
