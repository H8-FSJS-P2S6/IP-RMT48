const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const {User} = require("../models");

class UserController {
    static async register(req, res, next){
        try {
            const {email, password} = req.body;
            const newUser = await User.create({email, password});
            res.status(201).json({message: `user with email ${newUser.email} has been created`})
        } catch (error) {
            console.log(error)
        }
    }

    static async login(req, res, next){
        try {
            const {email, password} = req.body;
            if (!email){
                throw ({name: "EmptyEmail"})
            }

            if (!password){
                throw ({name: "EmptyPassword"})
            }

            const user = await User.findOne({
                where: {email}
            })

            if (!user || !comparePassword(password, user.password) ){
                throw ({name: "InvalidUser"})
            }

            const access_token = signToken({id: user.id})
            res.status(200).send({access_token})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController;