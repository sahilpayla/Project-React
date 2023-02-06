const express = require('express');
const app = express();
const port = 8000;
const connection = require('./db.js');
app.use(express.json())


connection();


const customMiddleware = (req, res, next) => {
   console.log('Middleware Executed');
   next();
}
app.use(customMiddleware);


require('./models/user')
require('./models/post')
app.use(require('./routes/auth'));
app.use(require('./routes/post'));


app.get('/', (req, res) => {
   res.send('hello world')
})

app.get('/about', customMiddleware, (req, res) => {
   res.send('about hello world')
})

app.listen(port, () => {
   console.log(`Server Is Running At ${port}`);
})