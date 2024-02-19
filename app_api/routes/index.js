const express = require('express');
const router = express.Router();

// START modified book example

const ctrlTrips = require('../controllers/trips')

// trips
router
    .route('/trips')
    .get(ctrlTrips.tripsList);
    // .post(ctrlTrips.createTrips)
router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode);
    //.put(ctrlTrips.tripUpdateOne)
    //.delete(ctrlTrips.tripsDeleteOne)

// END modified book example

module.exports = router;