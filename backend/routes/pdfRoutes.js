var express = require("express");
const pdfController = require("../controllers/pdfControllers");
var router = express.Router();

var fs = require("fs");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "uploads/" + req.body.id + "/" + req.body.projectName + "/";
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

router.post("/reorganise/addPDF", upload.single("file"), pdfController.addPDF);

router.post("/reorganise/submitPDF", pdfController.submitPDF);

router.post("/merge/addPDF", upload.single("file"), pdfController.addPDF);

module.exports = router;
