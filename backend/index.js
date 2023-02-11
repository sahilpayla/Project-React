const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./controllers/authController.js');


// database
mongoose.set('strictQuery', false);
let URI = 'mongodb+srv://user:user@martin-store.sjyk71w.mongodb.net/store?retryWrites=true&w=majority';
mongoose.connect(URI, () => {
   console.log('Connected To The Database')
})



// routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)


// server
app.listen(port, () => {
   console.log(`Server is running at ${port}`)
})