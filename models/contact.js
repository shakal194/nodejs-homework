const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleSchemaValidationError } = require("../helpers");

const phoneRegexp = /^\d{3}-\d{3}-\d{3}$/;

const contactSchema = new Schema(
  {
    name: { type: String, unique: true, required: [true, "Name must be exist"] },
    email: { type: String, unique: true, required: [true, "Email must be exist"] },
    phone: {
      type: String,
      match: phoneRegexp,
      unique: true,
      required: [true, "Phone must be exist"],
    },
    favorite: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleSchemaValidationError);

const addSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .pattern(/^[a-zA-Z ]+$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ua"] } })
    .required(),
  phone: Joi.string().pattern(phoneRegexp, "numbers").required(),
  favorite: Joi.bool(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contacts = model("contact", contactSchema);

module.exports = { Contacts, schemas };
