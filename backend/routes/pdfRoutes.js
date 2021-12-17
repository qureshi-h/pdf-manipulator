var express = require("express");
const pdfController = require("../controllers/pdfControllers");
var router = express.Router();

var fs = require("fs");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "/";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, {
                recursive: true,
            });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.replace(/ /g, ""));
    },
});
const upload = multer({ storage: storage });

router.post("/addPDF", upload.single("file"), pdfController.addPDF);

router.post("/submitPDF", pdfController.submitPDF);

module.exports = router;
