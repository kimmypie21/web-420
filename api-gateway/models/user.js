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

//add a new user to database
module.exports.add = (user, callback)=> {
    user.save(callback);
};
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    user.findById(query, callback);
};

//export view model
module.exports = mongoose.model("user", userSchema);