const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const userSchema = new Schema({
    
    firstName:  String,
    lastName:  String, 
    surname: String,
    email: String,
    birthdate: Date,
    password: String,
    image: String,
    city: String
  });

module.exports = mongoose.model('User', userSchema)
