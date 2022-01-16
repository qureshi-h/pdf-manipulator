var express = require("express");
const authenticationController = require("../controllers/authenticationControllers");
var router = express.Router();

router.post("/addUser/", authenticationController.addUser);

module.exports = router;
