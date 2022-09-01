const express = require("express");
const { schemas } = require("../../models/contact");
const { authenticate, validationBody, isValidId } = require("../../middleware");

const { ctrlWrapper } = require("../../helpers");

const controller = require("../../controllers/contacts");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(controller.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(controller.getContactById));

router.post(
  "/",
  authenticate,
  validationBody(schemas.addSchema),
  ctrlWrapper(controller.addContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(controller.deleteContactById));

router.put(
  "/:contactId",
  validationBody(schemas.addSchema),
  ctrlWrapper(controller.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validationBody(schemas.updateFavoriteSchema),
  ctrlWrapper(controller.updateFavorite)
);

module.exports = router;
