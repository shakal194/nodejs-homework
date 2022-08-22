const { Contact } = require("../models/contact");

const updateContactById = async (id, body) => {
  try {
    const data = await Contact.findByIdAndUpdate(id, body, {
      new: true,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = updateContactById;
