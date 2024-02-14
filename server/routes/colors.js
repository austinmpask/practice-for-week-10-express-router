const express = require("express");

const router = express.Router();

router.post("/:name/css-styles", (req, res) => {
  res.json("/:name/css-styles");
});

module.exports = router;
