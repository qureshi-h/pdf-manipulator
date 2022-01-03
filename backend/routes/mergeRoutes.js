var express = require("express");
const mergeController = require("../controllers/mergeController");
const multer = require("../routes/multer");
var router = express.Router();

router.post(
    "/merge/addPDF",
    multer.upload.array("files"),
    mergeController.mergeAdd
);

module.exports = router;
