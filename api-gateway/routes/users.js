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
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//export module
module.exports = router;
