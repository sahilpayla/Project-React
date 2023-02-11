const URI = 'mongodb+srv://user:user@martin-store.sjyk71w.mongodb.net/?retryWrites=true&w=majority';
const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');


app.use(cors());
// app.use('/', (req, res) => {
//    console.log('hellow world')
//    res.send('hello')
// })


mongoose.set('strictQuery', false);
mongoose.connect(URI, () => {
   console.log('Connected To The Database')
})


app.listen(port, () => {
   console.log(`Server is running at ${port}`)
})