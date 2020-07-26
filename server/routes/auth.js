var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/refresh-token", function (req, res, next) {
  res.json({ message: "재생성되었습니다" });
});

router.get("/login", function (req, res, next) {
  res.json({ message: "로그인 성공" });
});

router.get("/signup", function (req, res, next) {
  res.json({ message: "회원가입 성공" });
});

router.get("/validation", function (req, res, next) {
  res.json({ message: "중복입니다" });
});
//중복 방지 하기 위해 만듬
module.exports = router;
