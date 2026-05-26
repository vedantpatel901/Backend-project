const express = require('express');
const router = express.Router();

const { Airplanecontroller } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
// console.log("inside airplane route");
console.log("inside airplane route");
console.log("AirplaneMiddleware.validateAirplane type:", typeof AirplaneMiddleware.validateAirplane);
console.log("Airplanecontroller.createAirplane type:", typeof Airplanecontroller.createAirplane);

router.post('/' ,AirplaneMiddleware.validateAirplane,
     Airplanecontroller.createAirplane);


module.exports = router;