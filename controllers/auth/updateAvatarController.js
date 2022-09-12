const fs = require("fs/promises");
const users = require("../../services/authService");

const updateAvatarController = async (req, res) => {
  try {
    const { _id } = req.user;

    const { path: tempPath, originalname } = req.file;

    const avatarURL = await users.updateAvatar(_id, originalname, tempPath);
    res.status(200).json({
      status: `User with id=${_id} updated avatar`,
      code: 200,
      res: avatarURL,
    });
  } catch (error) {
    fs.unlink(req.file.path);
    res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = updateAvatarController;
