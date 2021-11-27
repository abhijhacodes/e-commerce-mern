const express = require("express");
const router = express.Router();

router.get("/signout", (req, res) => {
  res.send("user signed out");
});
