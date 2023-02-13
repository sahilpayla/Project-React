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
      min: 1,
   },
   price: {
      type: Number,
      required: true,
      min:0,
      max:9999999,
   },
   img: {
      type: String,
      required: true,
      min:1,
      max:9999999,
   },
   review: {
      type: Number,
      required: true,
   },
   Category: {
      type: String,
      // required: true
   },
})

module.exports = mongoose.model('products', productSchema);