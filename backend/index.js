
import cors from 'cors';
const port = 8000;
const app = express();
import express from 'express';
import connection from './db/db.js';
import userRoutes from './routes/user.js';

app.get('/', (req, res) => {
   console.log('hello')
   res.send('hello world')
})


//middleware
app.use(express.json());
app.use(cors());


//routes
app.use('/api/v1/', userRoutes)



connection();

app.listen(port, () => {
   console.log(`Port is running at ${port}`)
})