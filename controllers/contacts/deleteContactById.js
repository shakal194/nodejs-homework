const contacts = require("../../services");
const { RequestError } = require("../../helpers");

const deleteContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.deleteContactById(contactId);
    console.log(result);
    if (!result) {
      throw RequestError({ status: "Not found", code: 404 });
    }
    res.json({ status: "Contact deleted", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContactById;
