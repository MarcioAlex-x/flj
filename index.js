require('dotenv').config()
const http = require('http')
const { Server } = require('socket.io')

const app = require('./src/app/app')
const sequelize = require('./src/config/connect')
require('./src/models/relacionamentos')

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
})

app.set('io', io)

io.on('connection', (socket) => {
    console.log(`Novo cliente conectado no websocket: ${socket.id}`)
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com o banco.')
        return sequelize.sync({ alter: true })
    })
    .then(() => {
        console.log('DB sincronizado com relacionamentos.')
        
        const PORT = process.env.PORT || 3000
        server.listen(PORT, () => {
            console.log(`Aplicação rodando perfeitamente na porta ${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Falha crítica ao iniciar:', err.message)
    })