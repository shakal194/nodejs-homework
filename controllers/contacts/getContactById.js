const contacts = require("../../services");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);

    if (!result) {
      throw RequestError({ status: "Not found", code: 404 });
    }
    // res.json(result);
    res.json({ status: "Success", code: 200, payload: { result } });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
