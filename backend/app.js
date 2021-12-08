const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const pdfRouter = require("./routes/pdfRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

app.use(cors());

// define routes
app.use("/pdf", pdfRouter);

app.listen(5001, function () {
  console.log("CORS-enabled web server listening on port", 5001);
});

module.exports = app;
