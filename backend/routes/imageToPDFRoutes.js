var express = require("express");
const pdfController = require("../controllers/imageToPDFControllers");
const multer = require("./multer");
var router = express.Router();

router.post(
    "/ImageToPDF/addImage",
    multer.upload.array("images"),
    pdfController.addImages
);

module.exports = router;
