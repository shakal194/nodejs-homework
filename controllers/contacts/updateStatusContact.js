const contacts = require("../../services");
const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/contact");

const updateStatusContact = async (req, res, next) => {
  try {
    const { error } = schemas.updateFavoriteSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const { contactId } = req.params;

    const result = await contacts.updateStatusContact(contactId, req.body);

    if (!result) {
      throw RequestError({ status: "Not found", code: 404 });
    }
    res.json({ status: "Contact updated", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
