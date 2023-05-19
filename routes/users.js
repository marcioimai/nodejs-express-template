var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("All users list");
});

router.get("/:id", function (req, res) {
  res.send([{ info: `User ${req.params.id} info` }]);
});

module.exports = router;
