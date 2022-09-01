const contacts = require("../../services/contactsService");

const listContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const result = await contacts.getAll(owner, skip, limit);
  res.json({ status: "success", code: 200, payload: { result } });
};

module.exports = listContacts;
