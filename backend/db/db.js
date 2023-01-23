import mongoose from 'mongoose';
const URI = "mongodb+srv://user:user@food.xhpg65w.mongodb.net/CRUD?retryWrites=true&w=majority";


const connection = async () => {
   try {
      mongoose.set('strictQuery', false);
      const res = await mongoose.connect(URI)

      if (res) {
         console.log('Connected successfully');
      }
      else {
         console.log('error');
      }
   } catch (error) {
      console.log(error.message);
   }
}

export default connection;