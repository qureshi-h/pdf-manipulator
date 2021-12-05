var express = require("express");
const pdfController = require("../controllers/pdfControllers");
var router = express.Router();

/* GET users listing. */
router.route("/").post(pdfController.addPDF);

module.exports = router;
