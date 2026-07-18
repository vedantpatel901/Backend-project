'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplanes ,{
        foreignKey : 'airplaneId',
        onDelete : 'CASCADE',
      });
      this.belongsTo(models.Airports ,{
        foreignKey : 'arrivalAirportId',
      });
      this.belongsTo(models.Airports ,{
        foreignKey : 'departureAirportId',
      });

    }
  }
  Flights.init({
    flightNumber: { types: DataTypes.STRING,
      allowNull: false,
    },
    airplaneId: {types:DataTypes.INTEGER,
       allowNull: false,
    },
    arrivalAirportId:{types:DataTypes.INTEGER,
       allowNull: false,
    },
    departureAirportId: {types:DataTypes.INTEGER,
       allowNull: false,
    },
    arrivalTime:{types: DataTypes.DATE,
       allowNull: false,
    },
    departureTime: {types: DataTypes.DATE,
       allowNull: false,
    },
    price: {types:DataTypes.INTEGER,
       allowNull: false,
    },
    boardingGate: { types: DataTypes.STRING,
       allowNull: false,
    },
    totalSeats: { types: DataTypes.STRING,
       allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flights',
  });
  return Flights;
};