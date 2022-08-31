const { User } = require("../models/user");
const { RequestError } = require("../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../helpers");

const registration = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw RequestError(409, `Email ${email} already exist`);
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const data = await User.create({ email, password: hashPassword });
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

module.exports = { registration, login, logout, updateSubcription };
