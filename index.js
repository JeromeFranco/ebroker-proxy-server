var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.get('/test', function(req, res) {
  res.send('Hello world!!!');
});

app.listen(port);
