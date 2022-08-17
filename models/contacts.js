const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
console.log(contactsPath);

const updateContactById = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    console.log(result);
    return result || null;
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === contactId);
    if (idx === -1) {
      return null;
    }

    const [result] = contacts.splice(idx, 1);

    await updateContactById(contacts);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateContact = async (id, { name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((item) => item.id === id);
    if (idx === -1) {
      return null;
    }

    contacts[idx] = { id, name, email, phone };
    await updateContactById(contacts);
    return contacts[idx];
  } catch (error) {
    console.error(error);
  }
};

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const addContact = { id: nanoid(), name, email, phone };
    contacts.push(addContact);

    await updateContactById(contacts);
    return addContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
