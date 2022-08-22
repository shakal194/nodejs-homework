const contacts = require("../../services");
const { RequestError } = require("../../helpers");
const { schemas } = require("../../models/contact");

const addContact = async (req, res, next) => {
  try {
    const { error } = schemas.addSchema.validate(req.body);
    if (error) {
      throw RequestError({ status: "Not Found", code: 404 });
    }
    const body = { ...req.body };

    const result = await contacts.addContact(body);
    res.json({ status: "Created Success", code: 201, payload: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
