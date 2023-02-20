const Product = require('../models/productModel.js')



exports.createProduct = async (req, res, next) => {
   const product = await Product.create(req.body);
   res.status(201).json({ success: true, product })
   console.log(product)
}



exports.getAllProducts = (req, res) => {
   res.status(200).json({ message: "route is working " })
}