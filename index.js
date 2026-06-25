const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
const sequelize = require('./src/config/connect')
require('dotenv').config()

const Cliente = require('./src/models/Cliente')
const Veiculo = require('./src/models/Veiculo')
const Endereco = require('./src/models/Endereco')
const Atendimento = require('./src/models/Atendimento')

const clientesRouter = require('./src/routes/clientesRouter')

const app = express()

app.use(cors())
app.use(express.json())

app.use(clientesRouter)

require('./src/models/relacionamentos')

const server = app.listen(process.env.PORT, () => {
    console.log(`aplicação em http://localhost:${process.env.PORT}`)
})

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
})

app.set('io', io)

io.on('connection', (socket) => {
    console.log(`Novo cliente conectado: ${socket.id}`)
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida')
        return sequelize.sync({alter:true})
    })
    .then(() => {
        console.log('DB sincronizado')
    })
    .catch((err) => {
        console.error(err.message)
    })
