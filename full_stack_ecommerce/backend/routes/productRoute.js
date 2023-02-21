const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductsDetails } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middlewares/auth');
const router = express.Router();


router.route('/products').get(isAuthenticatedUser,  getAllProducts);
router.route('/product/new').post(createProduct);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);
router.route('/product/:id').get(getProductsDetails);


module.exports = router;