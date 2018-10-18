// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/meditation', function(req, res) {
  res.render('pages/meditation');
});

app.get('/herbs', function(req, res) {
  res.render('pages/herbs');
});

app.get('/massage', function(req, res) {
  res.render('pages/massage');
});

app.get('/yoga', function(req, res) {
  res.render('pages/yoga');
});

app.get('/birth', function(req, res) {
  res.render('pages/birth');
});

app.listen(3000);
console.log('3000 is the magic port');