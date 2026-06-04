const { StatusCodes } = require("http-status-codes");

const { CityService } = require('../services')
const { AppErrors,AppSuccess } = require('../utils/common');

async function createCity(req,res){
    try{
        const city = await CityService.createCity({
            name: req.body.name,
        });
        AppSuccess.success = city    ; // this is use because we want to send the created city in the response and if don't do this then the data will be empty in the response.
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

module.exports = {
    createCity,
}