const express = require('express')
const cors = require('cors')

const clientesRouter = require('../routes/clientesRouter')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/clientes', clientesRouter)

module.exports = app