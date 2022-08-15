const contacts = require("../../services");
const { RequestError } = require("../../helpers");

const deleteContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.deleteContactById(contactId);
    console.log(result);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContactById;
