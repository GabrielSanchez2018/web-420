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
const User = module.exports = mongoose.model("User", userSchema);

//Assignment 4.3 API Gateway Part III /Week-4 code
//user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

//Open the user.js file and add a new query for finding individual users by email address
// a. user.js
// Week - 6 Assignment 6.3
module.exports.getOne = (e, callback) =>{
    var query = {email: e};
    User.findOne(query, callback);
};

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};
