const postgres = require("../config/postgres");

class Register {
    static add(values) {
        let query =
            "INSERT INTO users (name, email, password, picture) VALUES ($1, $2, $3, $4)";
        return postgres.query(query, values);
    }
}

module.exports = Register;
