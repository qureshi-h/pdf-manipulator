const fs = require("fs");
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
        cb(null, file.originalname.replace(/ /g, "_"));
    },
});

exports.upload = multer({ storage: storage });
