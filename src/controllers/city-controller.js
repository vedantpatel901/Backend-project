const { StatusCodes } = require("http-status-codes");

const { CityService } = require('../services')
const { AppErrors,AppSuccess } = require('../utils/common');

async function createCity(req,res){
    try{
        const city = await CityService.createCity({
            name: req.body.name,
        });
        const response = AppSuccess('City created successfully', city);
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

module.exports = {
    createCity,
}