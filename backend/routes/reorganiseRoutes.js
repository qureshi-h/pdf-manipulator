var express = require("express");
const reorganiseController = require("../controllers/reorganiseController");
const multer = require("../routes/multer");
var router = express.Router();

router.post(
    "/reorganise/addPDF",
    multer.upload.single("file"),
    reorganiseController.addPDF
);

router.post("/reorganise/submitPDF", reorganiseController.submitPDF);

module.exports = router;
