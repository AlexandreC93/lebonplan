const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const productSchema = new Schema({
    
    title: String,
    price: String,
    image: String,
    city: String,
    date: Date,
    description: String,
    info: String
  });

module.exports = mongoose.model('Product', productSchema)
