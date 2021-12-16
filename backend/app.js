const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const pdfRouter = require("./routes/pdfRoutes");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.enable("trust proxy");

app.use("/uploads", express.static("uploads"));

// define routes
app.use("/pdf", pdfRouter);

<<<<<<< HEAD
app.listen(5001, function () {
    console.log("CORS-enabled web server listening on port", 5001);
=======
app.listen(PORT, function () {
    console.log("CORS-enabled web server listening on port", PORT);
>>>>>>> f68a67c6224aaf06e1bab36136fee3efdd9d5edc
});

module.exports = app;
