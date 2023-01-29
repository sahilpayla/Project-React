import mongoose from "mongoose";


const gameSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   variant: [],
   prices: [],
   category: {
      type: String,
      require: true,
   },
   image: {
      type: String,
      require: true,
   },
   description: {
      type: String,
      require: true,
   },
},
   { timestamps: true }
)

const gameModel = mongoose.model('games', gameSchema)
export default gameModel