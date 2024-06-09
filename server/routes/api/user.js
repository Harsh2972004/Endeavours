const express = require("express");
const { register, login } = require("../../controllers/userController");

const router = express.Router();

// @route   POST api/user/register
// @desc    Add/save/register user
router.post("/register", register);

// @route   POST api/user/login
// @desc    Get exsisting user
router.post("/login", login);

module.exports = router;
