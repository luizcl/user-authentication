const { UserController } = require("../controllers/UserController");
const { comparePassword } = require("../services/encryptPassword");

async function userLoginAdapter(req, res, next) {
    const { email } = req.params;
    const { password } = req.body;

    // TODO

    req.user = null;

    next();
};

module.exports = { userLoginAdapter };
