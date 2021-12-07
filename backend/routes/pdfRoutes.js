var express = require("express");
const pdfController = require("../controllers/pdfControllers");
var router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), pdfController.addPDF);

module.exports = router;
