import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import gameModel from './models/GameModel.js';
import Router from './routes/gameRoute.js';
const app = express();
const port = process.env.port || 8000;

mongoose.set('strictQuery', true);
// emitter.setMaxListeners()

const URI = 'mongodb+srv://user:user@sahilecommerce.tplnrnh.mongodb.net/games?retryWrites=true&w=majority'
app.use(cors());
app.use(express.json())





mongoose
   .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => console.log("💻 Connected"))
   .catch(error => console.log('⚠ Not Connected'))



app.get('/', (req, res) => {
   res.send('hello api')
})

app.use('/api/games/' ,Router)

app.listen(port, () => {
   console.log(`Server is listening at ${port}`)
});