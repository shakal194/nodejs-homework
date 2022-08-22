const { Contact } = require("../models/contact");

const addContact = async (contactId) => {
  try {
    const data = await Contact.create(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addContact;
