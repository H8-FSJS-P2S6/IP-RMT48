const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const {User, UserDetail} = require("../models");

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

    static async createOrUpdateUserDetails(req, res, next){
        try {
            const UserId = req.user.id;
            const userDetail = await UserDetail.findOne({where: {UserId}})
            console.log(UserId, UserDetail)
            const {fullName, phoneNumber, address, city, province, postalCode, CityId} = req.body;
            if (userDetail){
                const data = await userDetail.update({fullName, phoneNumber, address, city, province, postalCode, CityId});
                return res.status(200).json({data})
            }
            const data = await UserDetail.create({fullName, phoneNumber, address, city, province, postalCode, CityId, UserId});
            res.status(201).json({data})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;