/*
Author: Richard Krasso
Date: 10/26/2019
Edited by: Gabriel Sanchez 
*/

// User Schema with three fields, username, password, and email.

var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    email: String
});

// Exporting the Schema
module.exports = mongoose.model("User", userSchema);