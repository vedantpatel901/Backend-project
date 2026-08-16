const express = require('express');
const router = express.Router();

const { Flightcontroller } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');

router.post('/', FlightMiddleware.validateFlight, Flightcontroller.createFlight);

module.exports = router;