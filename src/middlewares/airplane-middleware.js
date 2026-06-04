const { StatusCodes } = require('http-status-codes')

const { AppErrors } = require('../utils/common')
const AppError = require('../utils/errors/app-error')

const  validateAirplane = (req,res,next) => {
    if(!req.body.modelNumber){
            AppErrors.message = "Failed to create airplane",
            AppErrors.error = new AppError(["model number is not found in the request body"], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(AppErrors);
    }
    next()
}
module.exports = {
    validateAirplane 
}