const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const reorganiseRoutes = require("./routes/reorganiseRoutes");
const mergeRoutes = require("./routes/mergeRoutes");
const pdfToImageRoutes = require("./routes/pdfToImageRoutes");
const imageToPDFRoutes = require("./routes/imageToPDFRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");

const PORT = process.env.PORT || 5001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use("/uploads", express.static("uploads"));

// define routes
app.use("/pdf", reorganiseRoutes);
app.use("/pdf", mergeRoutes);
app.use("/pdf", pdfToImageRoutes);
app.use("/pdf", imageToPDFRoutes);

app.use("/auth", authenticationRoutes);

app.listen(PORT, function () {
    console.log("CORS-enabled web server listening on port", PORT);
});

module.exports = app;
