exports.signup = (req, res) => {
  console.log("REQUEST BODY: ", req.body());
  res.json({
    message: "yo yo yo yo",
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "user signout route",
  });
};
