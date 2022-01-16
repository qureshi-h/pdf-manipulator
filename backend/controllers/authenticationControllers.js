const Register = require("../models/register");
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.addUser = async (req, res) => {
    try {
        const { name, email, password, picture } = req.body;

        bcrypt.genSalt(saltRounds, (error, salt) => {
            if (error) throw error;
            bcrypt.hash(password, salt, async (error, hash) => {
                if (error) throw error;
                const result = await Register.add([name, email, hash, picture]);
                if (result.rowCount === 1) {
                    res.status(200).json({ status_code: 200 });
                } else {
                    throw Error("User Not Added");
                }
            });
        });
    } catch (error) {
        res.status(400).json({
            status_code: 400,
            status_message: error.message,
        });
    }
};

exports.authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const queryResult = await Register.getPassword(email).rows[0];

        bcrypt.compare(password, queryResult.password, (error, result) => {
            if (error) throw error;
            res.status(200).json({
                status_code: 200,
                result,
                name: queryResult.name,
                picture: queryResult.picture,
            });
        });
    } catch (error) {
        res.status(400).json({
            status_code: 400,
            status_message: error.message,
        });
    }
};
