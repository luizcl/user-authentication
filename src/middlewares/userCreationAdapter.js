const { hashPassword } = require("../services/encryptPassword");

function isValidUser(user){
    return Object.values(user).every(value => value != null && value != '')
}

async function userCreationAdapter(req, res, next) {
    const { user } = req.body;

    if(!user) throw new Error();

    if(!isValidUser(user)) throw new Error();

    const encryptedPassword = await hashPassword(user.password);
    const encryptedUser = {
        ...user,
        password: encryptedPassword
    };

    console.log(encryptedUser);

    req.encryptedUser = encryptedUser;

    next();
}

module.exports = { userCreationAdapter }
