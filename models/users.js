'use strict';

// External libs
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Internal libs


const UserSchema = new Schema({
  username: String,
  password: String,
  email: String
});

const UsersModel = mongoose.model('users', UserSchema);

module.exports = {
  UsersModel
};