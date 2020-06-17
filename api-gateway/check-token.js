/*
============================================
; Title: API Gateway Project
; Author: R. Krasso
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project-Part V
;===========================================
*/

var jwt = require("jsonwebtoken");
var config = require("./config")

//check header for valid token
function checkToken(req, res, next){
    var token = req.headers['x-access-token'];
    if(!token)
        return res.status(403).send({auth: false, message: "No token provided"});
    jwt.verify(token, config.web.secret, function(err,decoded){
        if (err) return res.status (500).send({auth: false, message: "Failed to authenticate token"});
        req.userId= decoded.id;
        next();
    });
};

module.exports = checkToken;