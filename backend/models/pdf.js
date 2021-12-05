const mysql = require("../config/mysql");

class PDF {
  static add(name, file) {
    let sql = `
        INSERT INTO files (name, file) VALUES ('${name}', '${file}')`;
    return mysql.execute(sql);
  }
}

module.exports = PDF;
