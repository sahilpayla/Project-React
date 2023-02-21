
const app = require('./app');
const port = 4000;
const connectDatabase = require('./database/db.js');

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to uncaught promise exception `)

   process.exit(1);

})


// connecting to the database 
connectDatabase();



const server = app.listen(port, () => {
   console.log(`server is listening at ${port}`)
})



// unhandled promise 
process.on('unhandledRejection', (err) => {
   console.log(`Error: ${err.message}`);
   console.log(`Shutting down the server due to unhandled promise rejections `)

   server.close(() => {
      process.exit(1);
   });
})