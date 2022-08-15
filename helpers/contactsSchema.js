const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z ]+$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9]+-[0-9]+-[0-9]+$/, "numbers")
    .required(),
});

module.exports = contactsSchema;
