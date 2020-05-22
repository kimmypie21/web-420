/*
============================================
; Title: API Gateway Project
; Author: K. Pierce
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project
;===========================================
*/


//required modules and routes
var express = require("express");
var router = express.Router();
var auth_controller = require("../controllers/authController");

//POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

//GET request for verifying user tokens
router.get("/auth/token", auth_controller.user_token);

//export module
module.exports = router;
