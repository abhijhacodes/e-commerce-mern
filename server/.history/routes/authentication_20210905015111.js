const express = require("express");
const { signout, signup } = require("../controllers/authentication");
const { check } = require("express-validator");
const router = express.Router();

router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;
