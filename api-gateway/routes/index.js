/*
Author: Richard Krasso
Date: 10/26/2019
Edited by: Gabriel Sanchez 
*/ 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
