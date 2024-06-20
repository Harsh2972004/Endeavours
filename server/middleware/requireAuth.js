const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    console.log(authorization);
    return res.status(401).json({ error: "Authorizaton token required" });
  }

  // example of authorization string
  // "bearer jdkjehehfshefjef.ieueifueiuhfeu.fui98f38hfjfnekfn"
  //need to split into array when the space comes
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWTSECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
