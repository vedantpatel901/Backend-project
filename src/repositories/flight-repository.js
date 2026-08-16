const crudRepository = require('./crud-repository');
const { Flights } = require('../models');

class FlightRepository extends crudRepository{
    constructor(){
        super( Flights );
    }
}

module.exports = FlightRepository;