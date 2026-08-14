const { StatusCodes } = require("http-status-codes");

const { AirportService } = require('../services');
const { AppErrors, AppSuccess } = require('../utils/common');

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        const response = AppSuccess('Airport created successfully', airport);
        return res
            .status(StatusCodes.CREATED)
            .json(response);
    } catch (error) {
        const response = AppErrors(error.message, {
            explanation: error.explanation,
            statusCode: error.statusCode,
        });
        return res
            .status(error.statusCode)
            .json(response);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        const response = AppSuccess('Airports fetched successfully', airports);
        return res
            .status(StatusCodes.OK)
            .json(response);
    } catch (error) {
        const response = AppErrors(error.message, {
            explanation: error.explanation,
            statusCode: error.statusCode,
        });
        return res
            .status(error.statusCode)
            .json(response);
    }
}

async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        const response = AppSuccess('Airport fetched successfully', airport);
        return res
            .status(StatusCodes.OK)
            .json(response);
    } catch (error) {
        const response = AppErrors(error.message, {
            explanation: error.explanation,
            statusCode: error.statusCode,
        });
        return res
            .status(error.statusCode)
            .json(response);
    }
}

async function deleteAirport(req, res) {
    try {
        const response = await AirportService.deleteAirport(req.params.id);
        const successResponse = AppSuccess('Airport deleted successfully', response);
        return res
            .status(StatusCodes.OK)
            .json(successResponse);
    } catch (error) {
        const response = AppErrors(error.message, {
            explanation: error.explanation,
            statusCode: error.statusCode,
        });
        return res
            .status(error.statusCode)
            .json(response);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
}