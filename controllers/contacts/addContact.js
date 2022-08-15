const contacts = require("../../services");
const { RequestError, contactsSchema } = require("../../helpers");

const addContact = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const body = { ...req.body };

    const result = await contacts.addContact(body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
