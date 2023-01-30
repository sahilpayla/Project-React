
const express = require('express')
const app = express()
const port = 8000
const MongoDB = require('./db.js')
 

app.use(express.json())
app.use('/api/', require('./Routes/CreateUser'))

app.get('/', (req, res) => {
   res.send('Hello World!')
})



MongoDB();



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})