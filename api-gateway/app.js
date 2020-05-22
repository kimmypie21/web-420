/*
============================================
; Title: API Gateway Project
; Author: K. Pierce
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project
;===========================================
*/


//required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var apiCatalog = require("./routes/api-catalog");

//connect to mongoose database
var mongoDB = "mongodb+srv://new_user:54n2T7UShxq@buwebdev-cluster-1-brhxo.mongodb.net/ems?authSource=admin&replicaSet=buwebdev-cluster-1-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true, useUnifiedTopology: true,
  promiseLibrary:require ("bluebird")
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on ("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function (){
  console.log("Application connected to mLab MongoDB instance");
});

/*
mongoose.connect("mongodb+srv://new_user:54n2T7UShxq@buwebdev-cluster-1-brhxo.mongodb.net/ems?authSource=admin&replicaSet=buwebdev-cluster-1-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",{
  promiseLibrary:require ("bluebird")
}).then (()=>console.log("connection successful")).catch((err)=>console.error(err));
*/

//SETS
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//USES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use("/api", apiCatalog);
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


//export the module
module.exports = app;
