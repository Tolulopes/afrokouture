var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Afrokouture = require('./models/afrokouture');

mongoose.connect('mongodb://localhost/afrokouture');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
});

app.get('/', function(req, res){
  res.send('please use api/afrokouture/ ');
});

app.get('/api/stylists/name/:name', function(req, res){
  console.log(req.params);
  Afrokouture.findOne({ name: req.params.name }, function(error, output){
    if (error) {
      console.log(error);
      return;
    }

    if (output === null) {
      return res.sendStatus(404);
    }

    res.json(output);
  });
})

app.post('/api/stylists', function(req, res){
  var stylist = new Afrokouture({ name: 'dave' });
  console.log('stylists',req);

  stylist.save(function(err, doc) {
    if (err) {
      res.error(err);
    } else {
      console.log('doc', doc);
      res.json({ data: stylist });
    }
  })
})

// app.put('/api/stylists', function(req, res){
//   var stylist = new Afrokouture(req.body);
//   console.log('stylists',req.body);
//
//   stylist.save(function(err) {
//     if (err) {
//       res.error(err);
//     } else {
//       res.send();
//     }
//
//   })
// })

app.listen(3000, function () {
  console.log('Example app 3000');
})
