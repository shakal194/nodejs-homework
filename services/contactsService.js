const { Contacts } = require("../models/contact");

const getAll = async () => {
  try {
    const data = await Contacts.find({}, "-createdAt -updatedAt");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const addContact = async (contactId) => {
  try {
    const data = await Contacts.create(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const deleteContactById = async (contactId) => {
  try {
    const data = await Contacts.findByIdAndRemove(contactId);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await Contacts.findById(contactId, "-createdAt -updatedAt");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const updateContactById = async (contactId, body) => {
  try {
    const data = await Contacts.findByIdAndUpdate(contactId, body, {
      new: true,
    });
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const updateStatusContact = async (contactId, body) => {
  // try {
  const data = await Contacts.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return data;
  // } catch (err) {
  //   console.log(err.message);
  // }
};

module.exports = {
  getAll,
  addContact,
  deleteContactById,
  getContactById,
  updateContactById,
  updateStatusContact,
};
