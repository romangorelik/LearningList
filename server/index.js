const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const dailyTaskDb = require('../databases/dailyTaskDb/index.js')
const dailyTaskRouter = require('../databases/dailyTaskDb/routers.js')

const app = express()

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'dist')))

app.use('/daily', dailyTaskRouter)

const port = 3000
app.listen(port, () => console.log(`Listening to port ${port}`))