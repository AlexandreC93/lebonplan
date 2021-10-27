const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  cities: {
    type: String,
    enum: ['paris', 'lyon', 'marseille'],
    required: true,
  },
  pictureUrl: {
    type: String
  },
  date: Date,
  description: String,
  info: String
});

module.exports = mongoose.model('Product', productSchema)
