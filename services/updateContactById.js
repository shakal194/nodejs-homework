const contacts = require("../models/contacts");

const updateContactById = async (contactId) => {
  try {
    const data = await contacts.updateContact(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = updateContactById;
