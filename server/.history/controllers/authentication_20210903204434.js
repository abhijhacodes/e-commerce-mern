const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((error, user) => {
    if(error)
  })
};

exports.signout = (req, res) => {
  res.json({
    message: "user signout route",
  });
};
