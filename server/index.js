import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io';
import cors from 'cors';
import { Socket } from 'node:dgram';

// configuration

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://anony-chat-front.vercel.app/',
        methods: ["GET", "POST"],
    },
})

// middleware
app.use(cors());

// socket.io stuff
let count = 0;
io.on('connection', (socket) => {
    console.log('New Client Connected!');
    count++;
    io.emit('userCount', count);

    socket.on('message', (message) => {
        console.log("Message received:", message);
        io.emit("message", message);
    })


    socket.on('disconnect', () => {
        console.log("Client Disconnected!")
        count--;
        io.emit('userCount', count)
    })
})


// running the server
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
})
