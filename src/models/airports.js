'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airports.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { unique: true }
    },
      code: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: { unique: true }
      },
      address:{ 
        type: DataTypes.STRING,
        allowNull: false,
      },
      cityId: { 
        type: DataTypes.STRING,
        allowNull: false}
      },
       {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
}