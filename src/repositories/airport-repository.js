const crudRepository = require('./crud-repository');
const { Airports } = require('../models');

class AirportRepository extends crudRepository{
    constructor(){
        super( Airports );
    }
}

module.exports = AirportRepository;