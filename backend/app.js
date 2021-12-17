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

app.use("/uploads", express.static("uploads"));

// define routes
app.use("/pdf", pdfRouter);

app.listen(PORT, function () {
    console.log("CORS-enabled web server listening on port", PORT);
});

module.exports = app;
