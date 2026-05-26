const express = require("express");

const router = express.Router();
const { Infocontroller } = require("../../controllers"); 


// const {Airplanecontroller} = require('../../controllers')
const airplaneRoute = require('./airplane-route');
console.log("inside v1 route");

router.use('/airplanes', airplaneRoute);
router.get('/info', Infocontroller.info) ;

module.exports = router; 