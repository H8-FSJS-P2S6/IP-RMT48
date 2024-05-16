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
            next(error);
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
            next(error);
        }
    }

    static async getUserDetails(req, res, next){
        try {
            const id = req.user.id;
            const user = await User.findByPk(id);
            res.status(200).json({user})
        } catch (error) {
            next(error)
        }
    }

    static async updateUserDetails(req, res, next){
        try {
            const id = req.user.id;
            const user = await User.findByPk(id)
            const {fullName, phoneNumber, address, city, province, postalCode, CityId} = req.body;
            await user.update({fullName, phoneNumber, address, city, province, postalCode, CityId});
            res.status(200).json({message: "Your details has been updated"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;