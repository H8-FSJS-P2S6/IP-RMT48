'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     UserDetail.hasOne(models.CityList)
    }
  }
  UserDetail.init({
    fullName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    CityId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};