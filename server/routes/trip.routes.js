const TripSchemaController = require('../controllers/trip.controller');
module.exports = app => {
    app.get('/api/allTripSchema', TripSchemaController.findAllTripSchema);
    app.post('/api/newTripSchema', TripSchemaController.createTripSchema);
    app.get('/api/oneTripSchema/:id', TripSchemaController.findOneTripSchema);
    app.put('/api/updateTripSchema/:id', TripSchemaController.updateTripSchema);
    app.delete('/api/deleteTripSchema/:id', TripSchemaController.deleteTripSchema)
}

