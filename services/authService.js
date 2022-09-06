const { User } = require("../models/user");
const { RequestError } = require("../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../helpers");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const gravatar = require("gravatar");

const avatarsDir = path.join(__dirname, "..", "public", "avatars");

const registration = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw RequestError(409, `Email ${email} already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const data = await User.create({ email, password: hashPassword, avatarURL });
    return data;
  } catch (err) {
    console.error(err);
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw RequestError(401, `Email ${email} not found`);
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw RequestError(401, `Password wrong`);
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });
    return token;
  } catch (err) {
    console.error(err);
  }
};

const logout = async (userId) => {
  const userLogout = await User.findByIdAndUpdate(userId, { token: "" });
  return userLogout;
};

const updateSubcription = async (userId, body) => {
  const data = await User.findByIdAndUpdate(userId, body, {
    new: true,
  });
  return data;
};

const updateAvatar = async (userId, originalName, tempPath) => {
  const [extention] = originalName.split(".").reverse();
  const newName = `${userId}.${extention}`;
  const updatePath = path.join(avatarsDir, newName);

  fs.rename(tempPath, updatePath);

  const avatarURL = path.join("avatars", newName);
  const minAvatarURL = path.join("public", "avatars", newName);

  Jimp.read(minAvatarURL, (err, newName) => {
    if (err) throw err;
    newName.resize(250, 250).quality(60).write(minAvatarURL);
  });

  await User.findByIdAndUpdate(
    userId,
    { avatarURL: minAvatarURL },
    {
      new: true,
    }
  );

  return avatarURL;
};

module.exports = {
  registration,
  login,
  logout,
  updateSubcription,
  updateAvatar,
};
