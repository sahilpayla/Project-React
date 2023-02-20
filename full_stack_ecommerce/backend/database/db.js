const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/Ecommerce';

const connectDatabase = () => {

   mongoose.set('strictQuery', true);
   mongoose.connect(URI,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         // useCreateIndex: true
      })
      .then((data) => { console.log('Connected to the db') })
      .catch((error) => {
         console.log(error.message)
      })

}

module.exports = connectDatabase;