const pdf = require("../models/pdf");
const multer = require("multer");
const upload = multer();

const { spawnSync } = require("child_process");

exports.addPDF = async (req, res) => {
  try {
    // let [result] = await pdf.add(
    //   req.file.originalname.split(".")[0],
    //   req.file.path
    // );

    // const pdfToImages = spawn("python", [
    //   "pdfmanipulation/pdf_to_image.py",
    //   req.file.path,
    // ]);

    // const images = [];

    // pdfToImages.stdout.on("data", (data) => {
    //   console.log(`${data}`);
    //   images.push(`${data}`);
    // });

    // pdfToImages.on("close", (code) => {
    //   console.log("hello");
    //   console.log(images[0]);
    //   res.status(200).json({ status_code: 200, images });
    // });

    // const { stdout, stderr } = spawnSync("python", [
    //   "pdfmanipulation/pdf_to_image.py",
    //   req.file.path,
    // ]);

    // console.log(`${stdout}`);
    // res.status(200).json({ status_code: 200, images: `${stdout}` });
    res.status(200).json({ status_code: 200 });
  } catch (err) {
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getImages = (req, res) => {
  console.log(req.params);
  try {
    let id = req.params.id;
    let projectName = req.params.projectName;
    res.status(200).json({ id, projectName });
  } catch (err) {
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
