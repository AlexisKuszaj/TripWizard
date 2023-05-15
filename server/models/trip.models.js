const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String
});

const Wizard = mongoose.model('Wizard', tripSchema);
module.exports = Wizard;
