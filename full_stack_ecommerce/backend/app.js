const express = require('express');
const { getAllProducts } = require('./controllers/productController.js');
const app = express();
app.use(express.json());


// Routes import 
const product = require('./routes/productRoute.js');
app.use("/api/v1", product)


module.exports = app;