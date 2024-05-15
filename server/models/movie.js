"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.User, {
        through: "Favorites",
        foreignKey: "MovieId",
      });
    }
  }
  Movie.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Movie name is required",
          },
          notNull: {
            msg: "Movie name is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
