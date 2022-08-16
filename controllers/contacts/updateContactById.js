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

    console.log(result);
    if (!result) {
      throw RequestError({ status: "Not found", code: 404 });
    }
    // res.json(result);
    res.json({ status: "Contact updated", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContactById;
