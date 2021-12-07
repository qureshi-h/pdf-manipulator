const pdf = require("../models/pdf");
const multer = require("multer");
const upload = multer();

exports.addPDF = async (req, res) => {
  try {
    let [result] = await pdf.add(
      req.file.originalname.split(".")[0],
      req.file.path
    );
    console.log(result);
    res.status(200).send("OK");
  } catch (err) {
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
