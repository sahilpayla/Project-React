const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please Enter Product Name"],
      trim:true
   },
   description: {
      type: String,
      required: [true, "Please Enter Product Description"]
   },
   price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
      maxLength: [6, "Price Cannot Exceed 6 Characters"]
   },
   rating: {
      type: Number,
      default: 0
   },
   images: [{
      public_id: {
         type: String,
         required: true
      },
      public_url: {
         type: String,
         required: true
      },
   }],
   category: {
      type: String,
      required: [true, "Please Enter Product Category"]
   },
   stock:{
      type:Number,
      required: [true, "Please Enter Product Stock"],
      maxLength: [6 , "Stock cannot exceed than 6 digits"],
      default: 1
   },
   numOfReviews: {
      type:Number,
      default: 0
   },
   reviews: [
      {
         name:{
            type:String,
            required:true,
         },
         rating:{
            type:Number,
            required:true,
         },
         comment:{
            type:String,
            required:true,
         },
      }
   ],
   createdAt: {
      type:Date,
      default: Date.now()
   }
})


module.exports = mongoose.model("Product", productSchema)