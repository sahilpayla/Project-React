const Product = require('../models/productModel.js')
const ErrorHandler = require('../utils/errorHandler.js')
const catchAsyncError = require('../middlewares/catchAsyncError.js');
const ApiFeatures = require('../utils/apifeatures.js');


// CREATE PRODUCT-- admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
   const product = await Product.create(req.body);
   res.status(201).json({ success: true, product })
   // console.log(product)
});


// GET ALL PRODUCTS
exports.getAllProducts =catchAsyncError( async (req, res) => {

   const resultPerPage = 5;
   const productCount = await Product.countDocuments();

   const ApiFeature = new ApiFeatures(Product.find(), req.query)
   .search()
   .filter().pagination(resultPerPage)
   const products = await ApiFeature.query;

   res.status(200).json({ success: true, productCount ,products })
   // console.log(products)
});


// UPDATE PRODUCT -- admin
exports.updateProduct = catchAsyncError( async (req, res, next) => {
   let product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }
   product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
   });

   res.status(200).json({ success: true, product })
   // console.log(product)
});


// DELETE PRODUCT -- admin
exports.deleteProduct = catchAsyncError(async (req, res, next) => {
   const product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }
   await product.remove();

   res.status(200).json({ success: true, message: "Product Deleted" })
})


// GET PRODUCTS DETAILS 
exports.getProductsDetails = catchAsyncError (async (req, res, next) => {
   const product = await Product.findById(req.params.id);

   if (!product) {
      return next(new ErrorHandler("Product Not Found", 404))
   }

   res.status(200).json({ success: true, product })
})