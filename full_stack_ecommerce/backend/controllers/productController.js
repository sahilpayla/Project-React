const Product = require('../models/productModel.js')
const ErrorHandler = require('../utils/errorHandler.js')



// CREATE PRODUCT-- admin
exports.createProduct = async (req, res, next) => {
   const product = await Product.create(req.body);
   res.status(201).json({ success: true, product })
   console.log(product)
}


// GET ALL PRODUCTS
exports.getAllProducts = async (req, res) => {
   const products = await Product.find();
   res.status(200).json({ success: true, products })
   console.log(products)
}


// UPDATE PRODUCT -- admin
exports.updateProduct = async (req, res, next) => {
   let product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }
   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new:true, 
      runValidators: true,
      useFindAndModify: false
   });

   res.status(200).json({success:true, product})
   console.log(product)
}


// DELETE PRODUCT -- admin
exports.deleteProduct = async (req, res, next) => {
   const product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }
   await product.remove();

   res.status(200).json({success:true, message: "Product Deleted"})
}


// GET PRODUCTS DETAILS 
exports.getProductsDetails = async(req, res, next) => {
   const product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }

   res.status(200).json({success:true, product})
}