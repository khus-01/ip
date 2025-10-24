var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("got a GET request for homepage");
  res.send('Welcome to Express.js!!');
});

app.post('/', function (req, res) {
  console.log("got a POST request for the homepage");
  res.send('Hello, this is a POST response!');
});

app.delete('/del_student', function (req, res) {
  console.log("got a DELETE request for student record");
  res.send('Student record deleted!');
});

app.get('/ab*cd', function (req, res) {
  console.log("got a GET request for /ab*cd");
  res.send('Pattern matched route accessed!');
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Express app listening at http://%s:%s", host, port);
});
