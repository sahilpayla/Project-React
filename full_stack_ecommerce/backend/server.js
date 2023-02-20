
const app = require('./app');
const port = 4000;
const connectDatabase = require('./database/db.js');


// connecting to the database 
connectDatabase();

app.listen(port, ()=> {
   console.log(`server is listening at ${port}`)
})