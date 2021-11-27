const express = require("express");
const { signout, signup } = require("../controllers/authentication");
const router = express.Router();

router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;
