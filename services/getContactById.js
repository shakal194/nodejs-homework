const { Contact } = require("../models/contact");

const getContactById = async (contactId) => {
  try {
    const data = await Contact.findById(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = getContactById;
