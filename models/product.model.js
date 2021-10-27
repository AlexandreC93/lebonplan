const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const productSchema = new Schema({
    
    title:{
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      

    } ,
    price: String,
    image: String,
    city: String,
    date: Date,
    description: String,
    info: String
  });

module.exports = mongoose.model('Product', productSchema)
