/*
============================================
; Title: API Gateway Project
; Author: K. Pierce
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT||"3000";
module.exports = config;
config.web.secret="topsecret";