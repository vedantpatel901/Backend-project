const express = require("express");

const router = express.Router();
const { Infocontroller } = require("../../controllers"); 


// const {Airplanecontroller} = require('../../controllers')
const airplaneRoute = require('./airplane-route');
const cityRoute = require('./city-routes');
const airportRoute = require('./airport-route');

router.use('/airplanes', airplaneRoute);
router.use('/cities', cityRoute);
router.use('/airports', airportRoute);
router.get('/info', Infocontroller.info) ;

module.exports = router; 