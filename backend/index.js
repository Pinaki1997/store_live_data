const app = require("./app");
const db = require('./models');
const http = require('http');
const socketIo = require('socket.io');
const socketClient = require('./clients/socket.client');


db.sequelize.sync({ alter: true })
    .then(data => {
        console.info(`Connected sql server`);
    })
    .catch(error => console.error(`Database connection error -> `, error));


// Create an HTTP server instance
const server = http.createServer(app);

// Initialize WebSocket and attach it to the HTTP server
// Configure CORS options for Socket.io
const io = socketIo(server, {
    cors: {
        origin: '*', // Allow requests from React frontend
        methods: ['GET', 'POST'],        // Allowed HTTP methods
    }
});
socketClient.initialize(io);  // Initialize WebSocket client
// Attach io to app.locals
app.locals.io = io;

// Start the server
const PORT = process.env.PORT || 5005;
server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});