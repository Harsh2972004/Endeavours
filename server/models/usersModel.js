const mongoose = require("mongoose");

const PersonalListSchema = new mongoose.Schema({
  personalItemName: {
    type: String,
    default: "Untitled",
  },
  personalItemDesc: String,
});

const WorkListSchema = new mongoose.Schema({
  workItemName: {
    type: String,
    default: "Untitled",
  },
  workItemDesc: String,
});

const UserDataSchema = new mongoose.Schema({
  personalList: [PersonalListSchema],
  workList: [WorkListSchema],
});

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
  userData: [UserDataSchema],
  token: {
    type: String,
    default: null,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
