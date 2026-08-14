const { StatusCodes } = require('http-status-codes')

const { AppErrors } = require('../utils/common')
const AppError = require('../utils/errors/app-error')

const  validateAirpport = (req,res,next) => {
    if(!req.body.name || !req.body.code || !req.body.address || !req.body.cityId){
            const response = AppErrors("Failed to create airport", new AppError(["name , code , address , cityid is not found in the request body"], StatusCodes.BAD_REQUEST));
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(response);
    }
    next()
}
module.exports = {
    validateAirpport
}