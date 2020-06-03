/*
============================================
; Title: API Gateway Project
; Author: K. Pierce
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment API Gateway") + " \n ");

//required modules
var mongoose= require ("mongoose");

//create user view model schema
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String,
    email: String
});

//export view model
var User = module.exports = mongoose.model ("User", userSchema);

//add a new user to database
module.exports.add = (user, callback)=> {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

//query individual user by email address
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne (query, callback);
};

//module.exports = (mongoose.model("user", userSchema));