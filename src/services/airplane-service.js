const { AirplaneRepository } = require('../repositories')
const  AppError  = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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

async function getAirplane(){
    try{
      const airplanes = await airplaneRepository.getAll();
      return airplanes;
    }
    catch(error){
        throw new AppError('cannot fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(id){
    try{
      const airplanes = await airplaneRepository.getdatabypk(id);
            if (!airplanes) {
                throw new AppError('airplane not found', StatusCodes.NOT_FOUND);
            }
      return airplanes;
    }
    catch(error){
                if (error instanceof AppError) {
                        throw error;
                }
        throw new AppError('cannot fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data){
    try{
        const airplane = await airplaneRepository.getdatabypk(id);
        if (!airplane) {
            throw new AppError('airplane not found', StatusCodes.NOT_FOUND);
        }
        const updatedAirplane = await airplane.update({
            capacity: data.capacity,
            modelNumber: data.modelNumber
        });
        return updatedAirplane;
    }
    catch(error){
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('cannot update airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createAirplane,
    getAirplane,
    getAirplanes,
    updateAirplane,
}
