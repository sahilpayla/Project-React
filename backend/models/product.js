const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      unique: true,
   },
   desc: {
      type: String,
      required: true,
      min: 8,
   },
   price: {
      type: Number,
      required: true,
      min:6,
      max:20,
   },
   img: {
      type: String,
      required: true,
      min:6,
      max:20,
   },
   review: {
      type: Number,
      required: true,
   },
   Category: {
      type: String,
      required: true,
   },
})

module.exports = mongoose.model('products', productSchema);