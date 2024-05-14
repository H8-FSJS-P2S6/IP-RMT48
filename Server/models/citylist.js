'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CityList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CityList.belongsToMany(models.UserDetail)
    }
  }
  CityList.init({
    province: DataTypes.STRING,
    type: DataTypes.STRING,
    cityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CityList',
  });
  return CityList;
};