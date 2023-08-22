const { hashPassword } = require('../services/encryptPassword');
const { UserController } = require('../controllers/UserController');

async function userUpdateAdapter(req, res, next) {
    const { id } = req.params;
    const { firstName, lastName, password } = req.body;

    let selectedUser = await UserController.findById(id);
    if(selectedUser){
        if(!password){
            selectedUser.firstName = firstName;
            selectedUser.lastName = lastName;
        } else{
            selectedUser.password = await hashPassword(password);
        }
        console.log('SELEÇÃO: ')
        console.log(selectedUser);
        await UserController.updateUserInfo(id, selectedUser)
    }

    req.updatedUser = selectedUser;

    next();
}

module.exports = { userUpdateAdapter }
