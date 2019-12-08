/*
Author: Richard Krasso
Date: 10/26/2019
Edited by: Gabriel Sanchez 
*/ 

// API Routes

var express = require("express");
var checkToken = require('../check-token'); //--added week-8 assignment 8.4 step-4
var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user

router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens --- updated week-8 assignment 8.4 step-4
router.get('/auth/token', checkToken, auth_controller.user_token);

//Update the api-catalog.js routes to allow user login requests
// Week-6 Assignment 6.3
router.post("/auth/login", auth_controller.user_login);

//Update the api-catalog.js routes to allow user logout requests
//Week-6 Assignment 6.3
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;