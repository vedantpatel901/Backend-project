const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        console.log("data in service", data);
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log("error in service", error);
        if (error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            throw new AppError('Invalid airplaneId or airport ids provided', StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Something went wrong while creating an flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
};
