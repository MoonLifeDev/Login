var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/TEST/", function (req, res, next) {
  res.render("index", { title: "ABC" });
});

module.exports = router;
