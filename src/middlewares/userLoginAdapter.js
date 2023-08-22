const { UserController } = require("../controllers/UserController");
const { comparePassword } = require("../services/encryptPassword");

async function userLoginAdapter(req, res, next) {
    const { email } = req.params;
    const { password } = req.body;

    const selectedUser = await UserController.findByEmail(email);
    const hashedPassword = selectedUser?.password;
    try{
        const senhaCorreta = await comparePassword(password,hashedPassword);
        if(senhaCorreta){
            req.user = selectedUser;
        } else{
            req.user = null;
        }
    } catch(error){
        req.user = null;
    }

    next();
};

module.exports = { userLoginAdapter };
