const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../helpers");
const { User } = require("../models/user");

const { RequestError } = require("../helpers");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(RequestError(401, "Unauthorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);

    if (!user || !user.token) {
      next(RequestError(401, "Unauthorized1"));
    }
    req.user = user;
    next();
  } catch (err) {
    next(RequestError(401, err.message));
  }
};

module.exports = authenticate;
