const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api', require('./src/routes'))

app.listen(port)    