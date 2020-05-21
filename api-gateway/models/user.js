/*
============================================
; Title: Assignment 4.3 
; Author: Professor Krasso
; Date: 19 May 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Part III
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "API Gateway") + " \n ");

//required modules
var mongoose= require ("mongoose");

//create user view model schema
var userSchema = new mongoose.Schema({
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
    User.findById(query, callback);
};

//export view model
module.exports = mongoose.model("User", userSchema);