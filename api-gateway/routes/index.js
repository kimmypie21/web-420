/*
============================================
; Title: API Gateway Project
; Author: K. Pierce
; Date: Spring 2020
; Modified By: Kimberly Pierce
; Description: API Gateway Project
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
