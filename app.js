var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
//refresh browser get request

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUTT requesedet at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.get('/user', function (req, res) {
  res.send('Got a GET request at /user')
})

app.listen(3000, function () {
  console.log('Example app 3000')
})
