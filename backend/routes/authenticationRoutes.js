var express = require("express");
const authenticationController = require("../controllers/authenticationControllers");
var router = express.Router();

router.post("/addUser/", authenticationController.addUser);
router.post("/authenticateUser/", authenticationController.authenticateUser);

module.exports = router;
