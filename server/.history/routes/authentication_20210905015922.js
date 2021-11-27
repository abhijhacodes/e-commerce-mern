const express = require("express");
const { signout, signup } = require("../controllers/authentication");
const { check } = require("express-validator");
const router = express.Router();

router.post(
  "/signup",
  [
    check(
      "name",
      "Name should be at least 3 & at most 32 characters log"
    ).isLength({ min: 3, max: 32 }),
    check("password"),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
