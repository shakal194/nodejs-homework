const express = require("express");

// const Jimp = require("jimp");
// const fs = require("fs/promises");
// const path = require("path");
// const { User } = require("../../models/user");
// const avatarDir = path.join(__dirname, "../../", "public", "avatars");

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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(controller.updateAvatarController)
);

module.exports = router;
