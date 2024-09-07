let io;
const CustomerServices = require("./../services/customer-services");

const initialize = (socketIoInstance) => {
    io = socketIoInstance;

    io.on('connection', (socket) => {

        socket.on('initial-message', (data) => {
            const customerServices = new CustomerServices();
            customerServices.getActiveCustomer(io);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};

module.exports = { initialize };
