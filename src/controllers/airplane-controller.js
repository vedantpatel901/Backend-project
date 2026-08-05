const { StatusCodes } = require("http-status-codes");

const {AirplaneService} = require('../services')
const { AppErrors,AppSuccess } = require('../utils/common')

async function createAirplane(req,res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        const response = AppSuccess('Airplane created successfully', airplane);
        return res
        .status(StatusCodes.CREATED)
        .json(response);   
    }catch(error){
        const response = AppErrors(error.message, {
            explanation: error.explanation,
            statusCode: error.statusCode,
        });
       return res
        .status(error.statusCode)
        .json(response);
    }
}

async function getAirplane(req,res){
    try{
    const airplanes = await AirplaneService.getAirplane();
    const response = AppSuccess('Airplanes fetched successfully', airplanes);
    return res
    .status(StatusCodes.OK)
    .json(response);
    }
    catch(error){
    const response = AppErrors(error.message, {
        explanation: error.explanation,
        statusCode: error.statusCode,
    });
    return res
    .status(error.statusCode)
        .json(response);
    }
}

async function getAirplanes(req,res){
    try{
    const airplanes = await AirplaneService.getAirplanes(req.params.id);
    const response = AppSuccess('Airplane fetched successfully', airplanes);
    return res
    .status(StatusCodes.OK)
    .json(response);
    }
    catch(error){
    const response = AppErrors(error.message, {
        explanation: error.explanation,
        statusCode: error.statusCode,
    });
    return res
    .status(error.statusCode)
        .json(response);
    }
}

async function updateAirplane(req,res){
    try{
     const airplanes = await AirplaneService.updateAirplane(req.params.id, req.body);
    const response = AppSuccess('Airplane updated successfully', airplanes);
    return res
    .status(StatusCodes.OK)
    .json(response);
    }
    catch(error){
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
    createAirplane,
    getAirplane,
    getAirplanes, 
    updateAirplane,
}