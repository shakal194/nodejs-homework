// const contacts = require("../../services/contactsService");
// const { RequestError } = require("../../helpers");

// const updateStatusContact = async (req, res) => {
//   try {
//     const { error } = schemas.updateFavoriteSchema.validate(req.body);
//     if (error) {
//       throw RequestError(400, error.message);
//     }

//     const { contactId } = req.params;

//     const result = await contacts.updateStatusContact(contactId, req.body);

//     if (!result) {
//       throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
//     }
//     res.json({ status: "Contact updated", code: 200, payload: { result } });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = updateStatusContact;

// const { Contacts } = require("../../models/contact");
// const { RequestError } = require("../../helpers");
// const updateStatusContact = async (req, res) => {
//   const { contactId } = req.params;
//   const { favorite } = req.body;
//   const result = await Contacts.findByIdAndUpdate(contactId, { favorite }, { new: true });
//   if (!result) {
//     throw new RequestError(`Contact with id=${contactId} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result,
//     },
//   });
// };
// module.exports = updateStatusContact;

const contacts = require("../../services/contactsService");
const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  //   // try {
  //   //   const { error } = schemas.updateFavoriteSchema.validate(req.body);
  //   //   if (error) {
  //   //     throw RequestError(400, error.message);
  //   //   }

  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await contacts.updateStatusContact(contactId, { favorite });

  if (!result) {
    throw RequestError({ status: `Contact with id=${contactId} not found`, code: 404 });
  }
  res.json({ status: "Contact updated", code: 200, payload: { result } });
};

module.exports = updateStatusContact;
