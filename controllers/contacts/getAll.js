const contacts = require("../../services");

const listContacts = async (req, res, next) => {
  const result = await contacts.getAll();
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = listContacts;
