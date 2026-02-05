const { Server } = require("socket.io");

const allowedOrigins = [
    "http://localhost:5173",
    "https://dev-tinder-neon-pi.vercel.app",
    "http://35.171.47.132",
    "http://developerstinder.duckdns.org"
] 

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: allowedOrigins
    });

    io.on('connection', (socket) => {

        // handle events
        socket.on("joinChat", () => {

        })

        socket.on("sendMessage", () => {

        })

        socket.on("disconnect", () => {

        })
    })
}

export default initializeSocket;