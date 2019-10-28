/*
Author: Richard Krasso
Date: 10/26/2019
Edited by: Gabriel Sanchez 
*/

// add a public key to the config.js 

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';


module.exports = config;