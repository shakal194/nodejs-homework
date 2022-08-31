const express = require("express");

const { schemas } = require("../../models/user");
const { authenticate, validationBody } = require("../../middleware");

const { ctrlWrapper } = require("../../helpers");

const controller = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/register",
  validationBody(schemas.registerSchema),
  ctrlWrapper(controller.registrationController)
);

router.post(
  "/login",
  validationBody(schemas.loginSchema),
  ctrlWrapper(controller.loginController)
);

router.get("/logout", authenticate, ctrlWrapper(controller.logoutController));

router.get(
  "/current",
  authenticate,
  validationBody(schemas.subscriptionSchema),
  ctrlWrapper(controller.getCurrentController)
);

router.patch(
  "/:userId",
  authenticate,
  ctrlWrapper(controller.updateSubscriptionController)
);

module.exports = router;
