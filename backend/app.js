const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const reorganiseRouter = require("./routes/reorganiseRoutes");
const mergeController = require("./routes/mergeRoutes");
const pdfToImageController = require("./routes/reorganiseRoutes");
const imageToPDFController = require("./routes/imageToPDFRoutes");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use("/uploads", express.static("uploads"));

// define routes
app.use("/pdf", reorganiseRouter);
app.use("/pdf", mergeController);
app.use("/pdf", pdfToImageController);
app.use("/pdf", imageToPDFController);

app.listen(PORT, function () {
    console.log("CORS-enabled web server listening on port", PORT);
});

module.exports = app;
