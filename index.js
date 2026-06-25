const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()

app.use(cors)
app.use(express.json())

const server = app.listen(3000,()=>{
    console.log('aplicação em http://localhost:3000')
})

const io = new Server(server,{
    cors:{
        origin: '*',
        methods: ['GET','POST'],
    }
})

app.set('io', io)

io.on('connection',(socket)=>{
    console.log(`Novo cliente conectado: ${socket.id}`)
})
