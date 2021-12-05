const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "zxsaqw21",
  database: "mydb",
  port: 3306,
  dateStrings: true,
});

module.exports = pool.promise();
