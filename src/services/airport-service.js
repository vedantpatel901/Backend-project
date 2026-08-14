const { AirportRepository } = require('../repositories')
const  AppError  = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch(error) {
            if(error.name == 'SequelizeValidationError') {
                let explanation = [];
                error.errors.forEach((err) => {
                    explanation.push(err.message);
                });
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Something went wrong while creating an airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try{
      const airports = await airplaneRepository.getAll();
      return airports;
    }
    catch(error){
        throw new AppError('cannot fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try{
      const airport = await airplaneRepository.getdatabypk(id);
            if (!airport) {
                throw new AppError('airplane not found', StatusCodes.NOT_FOUND);
            }
      return airport;
    }
    catch(error){
                if (error instanceof AppError) {
                        throw error;
                }
        throw new AppError('cannot fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data){
    try{
        const airport = await airplaneRepository.getdatabypk(id);
        if (!airport) {
            throw new AppError('airplane not found', StatusCodes.NOT_FOUND);
        }
        const updateAirport = await airport.update({
            capacity: data.capacity,
            modelNumber: data.modelNumber
        });
        return updateAirport;
    }
    catch(error){
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('cannot update airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id){
    try{
        const response = await AirportRepository.destroy(id);
        return response;
        }
    catch(error){
        if (error.statusCodes === StatusCodes.NOT_FOUND) {
            throw new AppError('airplane not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('cannot delete airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    deleteAirport
}
