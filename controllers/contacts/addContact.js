const contacts = require("../../services/contactsService");

const addContact = async (req, res, next) => {
  const body = { ...req.body };

  const result = await contacts.addContact(body);
  res.json({ status: "Created Success", code: 201, payload: { result } });
};

module.exports = addContact;
