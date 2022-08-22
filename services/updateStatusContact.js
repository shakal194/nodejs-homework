const { Contact } = require("../models/contact");

const updateStatusContact = async (id, body) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, body, {
      new: true,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = updateStatusContact;
