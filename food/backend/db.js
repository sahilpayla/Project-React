const mongoose = require('mongoose');
const URI = "mongodb+srv://user:user@sahilecommerce.tplnrnh.mongodb.net/AppleStore?retryWrites=true&w=majority"


const MongoDB = async () => {
   mongoose.set('strictQuery', false);

   await mongoose.connect(URI, { useNewUrlParser: true }, async (err, result) => {

      if (!err) {
         console.log('Connected...');
         const fetchedData = await mongoose.connection.db.collection("IPhone_Macs");
         fetchedData.find({}).toArray(function (err, data) {
            if (!err) {
               console.log(data);
            }
            else {
               console.log(err)
            }
         })
      }
      else {
         console.log('Not... Connected...', err.message);
      }

   })
}

module.exports = MongoDB;