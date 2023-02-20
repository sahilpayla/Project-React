const app = require('./app');
const port = 4000;



app.listen(port, ()=> {
   console.log(`server is listening at ${port}`)
})