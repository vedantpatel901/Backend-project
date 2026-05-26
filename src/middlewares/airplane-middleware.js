const { StatusCodes } = require('http-status-codes')

const { AppErrors } = require('../utils/common')

const  validateAirplane = (req,res,next) => {
    if(!req.body.modelNumber){
        AppErrors.message = "Failed to create airplane",
        AppErrors.error = {explanation: "model number is not found in the request body"}
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(AppErrors);
    }
    next()
}
module.exports = {
    validateAirplane
}