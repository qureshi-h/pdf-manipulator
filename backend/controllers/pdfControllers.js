const pdf = require("../models/pdf");
const multer = require("multer");
const upload = multer();

const { spawnSync } = require("child_process");

exports.addPDF = async (req, res) => {
    try {
        // let [result] = await pdf.add(
        //     req.file.originalname.split(".")[0],
        //     req.file.path
        // );

        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/pdf_to_image.py",
            req.file.path,
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            // images: `${stdout}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};

exports.submitPDF = async (req, res) => {
    try {
        const { images } = req.body;

        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/image_to_pdf.py",
            images,
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            pdf: "http://localhost:5001/" + `${stdout}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
