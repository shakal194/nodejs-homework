const { Contact } = require("../models/contact");

const getAll = async () => {
  try {
    const data = await Contact.find({}, "-createdAt -updatedAt");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = getAll;
