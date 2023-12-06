const { spawnSync } = require("child_process");

exports.addPDF = async (req, res) => {
    try {
        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/reorganise/pdf_to_image.py",
            req.file.path,
        ]);
        console.log(`${stderr}`);
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
            pdf: `${stdout}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
