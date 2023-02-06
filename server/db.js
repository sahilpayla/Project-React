const mongoose = require('mongoose');
const URI = "mongodb+srv://user:user@food.xhpg65w.mongodb.net/Instagram?retryWrites=true&w=majority";


const connection = async () => {
   try {
      mongoose.set('strictQuery', false);
      const res = await mongoose.connect(URI)

      if (res) {
         console.log('DB Connected');
      }
      else {
         console.log('error');
      }
   } catch (error) {
      console.log(error.message);
   }
}


module.exports = connection;