const crudRepository = require('./crud-repository');
const { Flights } = require('../models');

class FlightRepository extends crudRepository{
    constructor(){
        super( Flights );
    }

    async getAllFlights(filter){
        const response = await Flights.findAll({
            where : filter,
        })
        return response;
    }

}

module.exports = FlightRepository;