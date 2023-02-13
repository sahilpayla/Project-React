const express = require('express');
const port = 8000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authController = require('./controllers/authController.js');
const productController = require('./controllers/productController.js')
const uploadController = require('./controllers/uploadController.js');

// database
mongoose.set('strictQuery', false);
let URI = 'mongodb+srv://user:user@martin-store.sjyk71w.mongodb.net/store?retryWrites=true&w=majority';
mongoose.connect(URI, () => {
   console.log('Connected to the database')
})



// routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images' , express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)


// server
app.listen(port, () => {
   console.log(`Server is running at ${port}`)
})