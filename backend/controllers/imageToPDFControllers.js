exports.addImages = async (req, res) => {
    try {
        const images = req.files.map((file) => file.path);

        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            images,
        });
    } catch (err) {
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
