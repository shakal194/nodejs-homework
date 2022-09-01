const { Contact } = require("../models/contact");

const getAll = async (owner, skip, limit) => {
  const data = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  });
  return data;
};

const addContact = async (contactId) => {
  const data = await Contact.create(contactId);
  return data;
};

const deleteContactById = async (contactId) => {
  const data = await Contact.findByIdAndRemove(contactId);
  return data;
};

const getContactById = async (contactId) => {
  const data = await Contact.findById(contactId, "-createdAt -updatedAt");
  return data;
};

const updateContactById = async (contactId, body) => {
  const data = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return data;
};

const updateFavorite = async (contactId, body) => {
  const data = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return data;
};

module.exports = {
  getAll,
  addContact,
  deleteContactById,
  getContactById,
  updateContactById,
  updateFavorite,
};
