const express = require('express');
const { getAllProducts } = require('./controllers/productController.js');
const app = express();
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(cookieParser());



const errorMiddleware = require('./middlewares/Error.js')


// Routes import 
const product = require('./routes/productRoute.js');
const user = require('./routes/userRoutes.js')


app.use("/api/v1", product)
app.use("/api/v1", user)

// middleware for the error handling
app.use(errorMiddleware);


module.exports = app;