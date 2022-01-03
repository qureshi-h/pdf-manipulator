var express = require("express");
const pdfToImageController = require("../controllers/pdfToImageController");
const multer = require("./multer");
var router = express.Router();

router.post(
    "/pdfToImage/addPDF",
    multer.upload.array("files"),
    pdfToImageController.pdfToImage
);

router.post("/pdfToImage/zipImages", pdfToImageController.zipImages);

module.exports = router;
