var express = require("express");
var router = express.Router();
const User = require("../models/User");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", function(req, res, next) {
  User.create(req.body)
    .then(userData => res.send(`Lo cargaste bien ${userData}`))
    .catch(err => res.send(err));
});

module.exports = router;
