const contacts = require("../models/contacts");

const updateContactById = async (id, name, email, phone) => {
  try {
    const data = await contacts.updateContact(id, name, email, phone);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = updateContactById;
