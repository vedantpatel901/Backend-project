const express = require('express');
const router = express.Router();

const { Airportcontroller } = require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');

router.post('/', AirportMiddleware.validateAirpport, Airportcontroller.createAirport);
router.get('/', Airportcontroller.getAirports);
router.get('/:id', Airportcontroller.getAirport);
router.delete('/:id', Airportcontroller.deleteAirport);

module.exports = router;