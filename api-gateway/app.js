/* 
Author: Richard Krasso
Date: 10/26/2019
Edited by: Gabriel Sanchez 
*/


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// For the api-catalog routes 1.4
var apiCatalog = require('./routes/api-catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// Registering the API Catolog routes
app.use('/api', apiCatalog);
// Connection to MongoDB
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Data connection\
mongoose.connect("mongodb+srv://admin:admin@cluster0-djivq.gcp.mongodb.net/test?retryWrites=true",{
  promiseLibrary: require('bluebird')
}).then (()=> console.log('connection successful'))
.catch((err) => console.error(err));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// npm run devstart