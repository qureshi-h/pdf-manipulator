const Register = require("../models/register");

exports.addUser = async (req, res) => {
    try {
        let result = await Register.add(Object.values(req.body));

        if (result.rowCount === 1) {
            res.status(200).json({ status_code: 200 });
        } else {
            throw Error("User Not Added");
        }
    } catch (error) {
        res.status(400).json({
            status_code: 400,
            status_message: error.message,
        });
    }
};
