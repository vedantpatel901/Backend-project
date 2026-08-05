const { StatusCodes } = require('http-status-codes')

const { AppErrors } = require('../utils/common')
const AppError = require('../utils/errors/app-error')

const  validateAirplane = (req,res,next) => {
    if(!req.body.modelNumber){
            const response = AppErrors("Failed to create airplane", new AppError(["model number is not found in the request body"], StatusCodes.BAD_REQUEST));
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(response);
    }
    next()
}
module.exports = {
    validateAirplane 
}