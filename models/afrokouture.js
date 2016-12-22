var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AfrokoutureSchema = new Schema({
  name: String,
  profession: String,
  specialism: String,
  description: String,
  contactDetails: String,
  socialMediaAccount: String,
  location: String,
  website: String,
});


var Afrokouture = mongoose.model('afrokouture', AfrokoutureSchema);
//ready to go

module.exports = Afrokouture;
