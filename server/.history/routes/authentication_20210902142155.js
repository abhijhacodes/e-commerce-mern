const express = require("express");
const { signout } = require("../controllers/authentication");
const router = express.Router();

router.get("/signout", signout);

module.exports = router;
