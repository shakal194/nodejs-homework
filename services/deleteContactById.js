const { Contact } = require("../models/contact");

const deleteContactById = async (contactId) => {
  try {
    const data = await Contact.findByIdAndRemove(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = deleteContactById;
