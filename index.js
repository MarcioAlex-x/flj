const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
const sequelize = require('./src/config/connect')
require('dotenv').config()

const app = express()

app.use(cors)
app.use(express.json())

const server = app.listen(process.env.PORT, () => {
    console.log('aplicação em http://localhost:3000')
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
        return sequelize.sync()
    })
    .then(() => {
        console.log('DB sincronizado')
    })
    .catch((err) => {
        console.error(err.message)
    })
