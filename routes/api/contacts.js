const express = require("express");
const Joi = require("joi");

const contacts = require("../../models/contacts");

const controller = require("../../controllers/contacts");

console.log(contacts);
const router = express.Router();

router.get("/", controller.getAll);

router.get("/:contactId", controller.getContactById);

router.post("/", controller.addContact);

router.delete("/:contactId", controller.deleteContactById);

router.put("/:contactId", controller.updateContactById);

module.exports = router;
