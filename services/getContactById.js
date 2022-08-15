const contacts = require("../models/contacts");

const getContactById = async (contactId) => {
  try {
    const data = await contacts.getContactById(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = getContactById;
