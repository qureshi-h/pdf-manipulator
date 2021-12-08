var express = require("express");
const pdfController = require("../controllers/pdfControllers");
var router = express.Router();

var fs = require("fs");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    const dir = "uploads/" + req.body.id + "/" + req.body.projectName + "/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true,
      });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    console.log(file.originalname.replaceAll(" ", ""));
    cb(null, Date.now() + "-" + file.originalname.replaceAll(" ", ""));
  },
});
const upload = multer({ storage: storage });

router.post("/addPDF", upload.single("file"), pdfController.addPDF);

module.exports = router;
