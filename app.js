var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.conect('mongodb://localhost/afrokouture');

var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello');
});

app.listen(3000, function () {
  console.log('Example app 3000')
})
