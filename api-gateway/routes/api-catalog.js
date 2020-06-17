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
var checkToken = require("../check-token");

//POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

//POST request for user login requests
router.post("/auth/login", auth_controller.user_login);

//GET request for user logout requests
router.get("/auth/logout", auth_controller.user_logout);

//GET request for verifying user tokens
router.get("/auth/token", checkToken, auth_controller.user_token);

//export module
module.exports = router;
