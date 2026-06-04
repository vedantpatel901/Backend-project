const { StatusCodes } = require("http-status-codes");

const {AirplaneService} = require('../services')
const { AppErrors,AppSuccess } = require('../utils/common')

async function createAirplane(req,res){
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        AppSuccess.success = airplane ; // this is use because we want to send the created airplane in the response and if don't do this then the data will be empty in the response.
        return res
        .status(StatusCodes.CREATED)
        .json(AppSuccess);   
    }catch(error){
        AppErrors.error = error;
       return res
        .status(error.statusCode)
        .json(AppErrors);
    }
}

async function getAirplane(req,res){
    try{
    const airplanes = await AirplaneService.getAirplane();
    AppSuccess.success = airplanes;
    return res
    .status(StatusCodes.OK)
    .json(AppSuccess);
    }
    catch(error){
    AppErrors.error = error;
    return res
    .status(error.statusCode)
        .json(AppErrors);
    }
}

async function getAirplanes(req,res){
    try{
    const airplanes = await AirplaneService.getAirplanes(req.params.id);
    AppSuccess.success = airplanes;
    return res
    .status(StatusCodes.OK)
    .json(AppSuccess);
    }
    catch(error){
    AppErrors.error = error;
    return res
    .status(error.statusCode)
        .json(AppErrors);
    }
}

async function updateAirplane(req,res){
    try{
     const airplanes = await AirplaneService.updateAirplane(req.params.id, req.body);
    AppSuccess.success = airplanes;
    AppSuccess.message = 'Airplane updated successfully';
    return res
    .status(StatusCodes.OK)
    .json(AppSuccess);
    }
    catch(error){
     AppErrors.error = error;
    return res
    .status(error.statusCode)
        .json(AppErrors);
    }
}



module.exports = {
    createAirplane,
    getAirplane,
    getAirplanes, 
    updateAirplane,
}