'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: { 
      type:DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already exists"
      },
      validate: {
        isEmail:{
          args: true,
          msg: "Email format is incorrect"
        },
        notNull:{
          msg: "Email cannot be empty"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 6,
          msg: "Minimum Password length is 6"
        },
        notNull:{
          msg: "Password cannot be empty"
        },
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'User'
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      },
    }
  });
  return User;
};