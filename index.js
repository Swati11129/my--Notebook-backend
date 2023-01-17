const connectToMongo= require('./db');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/api/v1/login', (req, res) => {
//   res.send('Hello login!')
// })
// app.get('/api/v1/signup', (req, res) => {
//   res.send('Hello signup!')
// })
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})