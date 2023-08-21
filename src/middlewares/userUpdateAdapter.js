const { hashPassword } = require('../services/encryptPassword');
const { UserController } = require('../controllers/UserController');

async function userUpdateAdapter(req, res, next) {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;

    // TODO

    req.updatedUser = null;

    next();
}

module.exports = { userUpdateAdapter }
