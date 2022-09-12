const express = require("express");

const { schemas } = require("../../models/user");
const { authenticate, validationBody, upload } = require("../../middleware");

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

router.get("/current", authenticate, ctrlWrapper(controller.getCurrentController));

router.patch(
  "/",
  authenticate,
  validationBody(schemas.subscriptionSchema),
  ctrlWrapper(controller.updateSubscriptionController)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(controller.updateAvatarController)
);

module.exports = router;
