var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/afrokouture');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  //we are connected
});

app.get('/', function(req, res){
  res.send('please use api/afrokouture/ ');
});

app.get('afrokouture/', function(req, res){
  res.send('you are now on the afrokouture home page');
})

app.listen(3000, function () {
  console.log('Example app 3000');
})
