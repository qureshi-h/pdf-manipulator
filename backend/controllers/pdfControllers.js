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
            "pdfmanipulation/reorganise/pdf_to_image.py",
            req.file.path,
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            images: `${stdout}`,
            error: `${stderr}`,
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
            "pdfmanipulation/reorganise/image_to_pdf.py",
            images,
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            pdf:
                "https://server-online-pdf-manager.herokuapp.com/" +
                `${stdout}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};

exports.mergeAdd = async (req, res) => {
    try {
        const files = req.files.map((file) => file.path);

        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/merge/merge-bookmarked.py",
            files,
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            pdf:
                "https://server-online-pdf-manager.herokuapp.com/" +
                `${stdout}`,
            err: `${stderr}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};

exports.pdfToImage = async (req, res) => {
    try {
        const files = req.files.map((file) => file.path);
        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/pdf_to_image/pdf_to_image.py",
            files,
            "https://server-online-pdf-manager.herokuapp.com/",
        ]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            images: `${stdout}`,
            error: `${stderr}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
