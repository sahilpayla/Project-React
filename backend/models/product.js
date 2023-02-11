const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      min:6,
      max:20,
   },
   isAdmin: {
      type:Boolean,
      default:false,
   }
})

module.export = mongoose.model('products', productSchema);