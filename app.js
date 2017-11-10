'use strict';

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


//Router
require('./routes/routes').router(app);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  console.log(req.path);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;