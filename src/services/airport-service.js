const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        console.log("data in service", data);
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        console.log("error in service", error);
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Something went wrong while creating an airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('cannot fetch airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.getdatabypk(id);
        if (!airport) {
            throw new AppError('airport not found', StatusCodes.NOT_FOUND);
        }
        return airport;
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('cannot fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function deleteAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCodes === StatusCodes.NOT_FOUND) {
            throw new AppError('airport not found', StatusCodes.NOT_FOUND);
        }
        throw new AppError('cannot delete airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport
};
