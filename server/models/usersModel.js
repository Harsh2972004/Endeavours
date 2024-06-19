const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

//static signup method
UserSchema.statics.register = async function (
  userName,
  userEmail,
  userPassword
) {
  //validation
  if (!userName || !userEmail || !userPassword) {
    throw Error("All fields are required");
  }
  if (!validator.isEmail(userEmail)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(userPassword)) {
    throw Error("Password is not strong enough");
  }

  //check if user exists
  const exists = await this.findOne({ userEmail });
  if (exists) {
    throw Error("user already exsists with this email.");
  }

  //encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userPassword, salt);

  //create and save user in database
  const user = await this.create({
    userName,
    userEmail,
    userPassword: hashedPassword,
  });

  return user;
};

//static login method
UserSchema.statics.login = async function (userEmail, userPassword) {
  //validtion
  if (!userEmail || !userPassword) {
    throw Error("All fields are required");
  }

  //check if user exists
  const user = await this.findOne({ userEmail });
  if (!user) {
    throw Error("Incorrect email");
  }

  //compare passwords
  const match = await bcrypt.compare(userPassword, user.userPassword);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = User = mongoose.model("User", UserSchema);
