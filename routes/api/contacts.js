const express = require("express");
const { schemas } = require("../../models/contact");
const { validationBody, isValidId } = require("../../middleware");

const controller = require("../../controllers/contacts");
// const controller_test = require("../../controllers/contacts");

const router = express.Router();

router.get("/", controller.getAll);

router.get("/:contactId", isValidId, controller.getContactById);

router.post("/", validationBody(schemas.addSchema), controller.addContact);

router.delete("/:contactId", isValidId, controller.deleteContactById);

router.put(
  "/:contactId",
  validationBody(schemas.addSchema),
  controller.updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  controller.updateStatusContact
);

module.exports = router;
