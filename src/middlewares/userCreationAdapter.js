const { hashPassword } = require("../services/encryptPassword");

async function userCreationAdapter(req, res, next) {
    const { user } = req.body;

    // TODO

    const encryptedUser = null;

    req.encryptedUser = encryptedUser;

    next();
}

module.exports = { userCreationAdapter }
