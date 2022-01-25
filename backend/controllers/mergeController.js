const { spawnSync } = require("child_process");

exports.mergeAdd = async (req, res) => {
    try {
        const { bookmark } = req.body;

        const script =
            bookmark === "true"
                ? "pdfmanipulation/merge/merge-bookmarked.py"
                : "pdfmanipulation/merge/merge.py";

        const files = req.files.map((file) => file.path);
        const { stdout, stderr } = spawnSync("python3", [script, files]);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            pdf: req.protocol + "://" + req.get("host") + "/" + `${stdout}`,
            error: `${stderr}`,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
