const productController = require('express').Router();
const Product = require('../models/product.js');
const { verifyToken, veriyTokenAdmin } = require('../middlewares/verifyToken');
const secret = "jwtSecret"

// get all
productController.get('/', verifyToken, async (req, res) => {
   try {
      const products = await Product.find(req.query);
      return res.status(200).json(products)
   }
   catch (error) {
      return res.status(500).json(error.message)
      console.log(error.message)
   }
})


// get one
productController.get('/find/:id', verifyToken, async (req, res) => {
   try {
      const productId = req.params.id
      const product = await Product.findById(productId)
      if (!product) {
         return res.status(500).json({ msg: "No product found" })
      }
      return res.status(200).json(product);
   }
   catch (error) {
      return res.status(500).json(error.message)
      console.log(error.message)
   }
})


// create product
productController.post('/', verifyToken, async (req, res) => {
   try {
      const newProduct = await Product.create({ ...req.body })
      return res.status(201).json(newProduct);
   }
   catch (error) {
      return res.status(500).json(error.message)
      console.log(error.message)
   }
})




module.exports = productController;