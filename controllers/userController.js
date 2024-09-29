const User = require ('../models/userModel');

class UserController {

    static async getAllUsers(req, res){

        try {

            const users =await User.findAll();
            res.json(users);

        } catch (error) {

            res.status(500).json({mensaje: error.message});

        }

    }

}

module.exports = UserController;

// control usuarios