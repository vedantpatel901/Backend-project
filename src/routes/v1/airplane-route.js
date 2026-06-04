const express = require('express');
const router = express.Router();

const { Airplanecontroller } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
// console.log("inside airplane route");

router.post('/' ,AirplaneMiddleware.validateAirplane,
     Airplanecontroller.createAirplane);

router.get('/' ,Airplanecontroller.getAirplane);
router.get('/:id' ,Airplanecontroller.getAirplanes);
router.patch('/:id' ,Airplanecontroller.updateAirplane);

module.exports = router;