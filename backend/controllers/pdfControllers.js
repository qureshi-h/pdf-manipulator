const pdf = require("../models/pdf");

exports.addPDF = (req, res) => {
  try {
    const { name, file } = req.body;
    pdf.add(name, file);
    res.status(200).send("OK");
  } catch (err) {
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
