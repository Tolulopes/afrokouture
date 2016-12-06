var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/my_database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //we are connected
});

var kittySchema = mongoose.schema({
  name: string
});
