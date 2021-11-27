const express = require("express");
const router = express.Router();
const { signin, signout, signup } = require("../controllers/authentication");
const { check, validationResult } = require("express-validator");

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
    check("email", "Enter a valid email address").isEmail(),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("password", "Password is required").isLength({
      min: 1,
    }),
    check("email", "Enter a valid email address").isEmail(),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
