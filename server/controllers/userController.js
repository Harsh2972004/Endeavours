// load user model
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWTSECRET, { expiresIn: "3d" });
};

// register controller
const register = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    const user = await User.register(userName, userEmail, userPassword);

    // generate token for user and send it
    const token = createToken(user._id);

    res.status(200).json({ userName, userEmail, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login controller
const login = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await User.login(userEmail, userPassword);
    const foundUserName = user.userName;
    // generate token for user and send it
    const token = createToken(user._id);

    res.status(200).json({ foundUserName, userEmail, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
