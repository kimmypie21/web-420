/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 6 May 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Part II 
;===========================================
*/


//require user schema
var User = require("../models/user");

//register a new user POST
exports.user_register = function (req, res){
    res.send("NOT IMPLEMENTED: User Registration POST");
};

//verify token on GET
exports.user_token = function (req,res){
    res.send ("NOT IMPLEMENTED: User token lookup GET");
};
