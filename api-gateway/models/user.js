/*
============================================
; Title: Assignment 2.3 
; Author: Professor Krasso
; Date: 6 May 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Part II
;===========================================
*/

const header = require('../../pierce-header.js'); //import statement for header file
console.log(header.display("Kimberly", "Pierce", "Assignment 2.3") + " \n ");

//required modules
var mongoose= require ("mongoose");

//create user view model schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

//export view model
module.exports = mongoose.model("User", userSchema);