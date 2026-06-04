const express = require('express');
const router = express.Router();

const { Citycontroller } = require('../../controllers');

router.post('/', Citycontroller.createCity);

module.exports = router;
