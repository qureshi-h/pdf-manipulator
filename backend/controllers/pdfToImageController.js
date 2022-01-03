const { spawnSync } = require("child_process");

exports.pdfToImage = async (req, res) => {
    try {
        const files = req.files.map((file) => file.path);
        const { stdout, stderr } = spawnSync("python3", [
            "pdfmanipulation/pdf_to_image/pdf_to_image.py",
            files,
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

exports.zipImages = async (req, res) => {
    try {
        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            zip: `${stdout}`,
            error: `${stderr}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
