const app = require("./app");

// port for backend running
const port = process.env.PORT || 5001;

app.listen(port, function () {
  console.log("CORS-enabled web server listening on port", port);
});

module.exports = app;
