exports.signup = (req, res) => {
  req.json({
    message: "yo yo yo yo",
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "user signout route",
  });
};
