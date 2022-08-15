const contacts = require("../models/contacts");

const addContact = async (contactId) => {
  try {
    const data = await contacts.addContact(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addContact;
