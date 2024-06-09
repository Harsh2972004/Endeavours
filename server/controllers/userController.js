// load user model
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register controller
const register = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    // check all required data
    if (!(userName && userEmail && userPassword)) {
      res.status(400).json({ feilds: "All fields required." });
    }

    // check if user exsits
    const exsitingUser = await User.findOne({ userEmail });
    if (exsitingUser) {
      res
        .status(401)
        .json({ exsitingUser: "User already exsists with this email." });
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // save user in database
    const user = await User.create({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });

    // generate token for user and send it
    const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, {
      expiresIn: "2h",
    });

    user.token = token;
    user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};

// login controller
const login = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    // validation
    if (!(userEmail && userPassword)) {
      res.status(400).json({ fields: "all fields required" });
    }

    // find user in database
    const user = await User.findOne({ userEmail });

    // user doesnt exist
    if (!user) {
      res.status(401).json({ user: "user doesn't exist" });
    }

    // match the password
    if (user && (await bcrypt.compare(userPassword, user.userPassword))) {
      // generate token
      const token = jwt.sign({ id: user._id }, JWTSECRET, {
        expiresIn: "2h",
      });

      user.token = token;
      user.password = undefined;

      // send token
      // cookie Session
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res
        .status(200)
        .cookie("token", token, options)
        .json({ success: true }, user);
    }
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
};
