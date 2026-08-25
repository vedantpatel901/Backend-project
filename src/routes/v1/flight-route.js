const express = require('express');
const router = express.Router();

const { Flightcontroller } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');

router.post('/', FlightMiddleware.validateFlight, Flightcontroller.createFlight);
router.get('/', Flightcontroller.getAllFlights);

module.exports = router;