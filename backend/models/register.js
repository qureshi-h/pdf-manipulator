const postgres = require("../config/postgres");

class Register {
    static add(values) {
        let query =
            "INSERT INTO users (name, email, password, picture) \
                VALUES ($1, $2, $3, $4) \
                    ON CONFLICT (email) \
                        DO UPDATE SET picture=$4";
        return postgres.query(query, values);
    }

    static getPassword(email) {
        let query = "SELECT name, password, picture FROM users WHERE email=$1";
        return postgres.query(query, [email]);
    }
}

module.exports = Register;
