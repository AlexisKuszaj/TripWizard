const mongoose = require('mongoose');
	 
const tripSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
   email: String,
    description: String
  });
  
  const Wizard = mongoose.model('Wizard', tripSchema);
module.exports = Wizard;
