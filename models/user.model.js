const mongoose = require('mongoose');
  const { Schema } = mongoose;
// 3 faire le schema 
  const userSchema = new Schema({
    
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      trim: true
    },
    
    lastName:  {
      type:String,
      required: true,
      minLength: 3,
      maxLength: 55,
      trim: true
    }, 

    surname: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 55,
      unique:true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      lowercase: true,
      trim: true
    },

    birthdate: Date,

    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },

    image: { 
      type: String,
      default:"./upload/profil.jpg"
    },

    city: String
  });

module.exports = mongoose.model('User', userSchema)
