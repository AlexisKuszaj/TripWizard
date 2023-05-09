const Wizard = require('../models/trip.models');
module.exports.findAllTripSchema = (req, res) => {
    Wizard.find()
        .then((allTripSchema) => {
            res.json({ Wizard: allTripSchema })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}
module.exports.createTripSchema = (req, res) => {
    Wizard.create(req.body)
        .then((newTripSchema) => {
            res.json({ Wizard: newTripSchema })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}
module.exports.findOneTripSchema = (req, res) => {
    Wizard.findOne({ _id: req.params.id })
        .then((oneTripSchema) => {
            res.json({ Wizard: oneTripSchema })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}
module.exports.updateTripSchema = (req, res) => {
    Wizard.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { runValidators: true }
    )
        .then((updatedTripSchema) => {
            res.json({ Wizard: updatedTripSchema })
        })
        .catch((err) => {
            res.status(400).json({ error: err.message })
        });
}
module.exports.deleteTripSchema = (req, res) => {
    Wizard.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        });
}
