const contacts = require("../models/contacts");

const deleteContactById = async (contactId) => {
  try {
    const data = await contacts.removeContact(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = deleteContactById;
