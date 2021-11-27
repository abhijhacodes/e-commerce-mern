const express = require("express");
const { signout, signup } = require("../controllers/authentication");
const { check } = require("express-validator");
const router = express.Router();

router.post(
  "/signup",
  [
    check("name", "Name length should be at least 3 & at most 32").isLength({
      min: 3,
      max: 32,
    }),
    check("password", "Password length should be at least 8").isLength({
      min: 8,
    }),
    check("email", "Enter a valid email adress").isEmail(),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
