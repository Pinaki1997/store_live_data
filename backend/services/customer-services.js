const CustomerRepository = require("../repository/customer-repository");
class CustomerServices {
    constructor() {
        this.customerRepository = new CustomerRepository();
    }
    async getCustomerHistory(io) {
        try {
            const data = await this.customerRepository.getLastHourData(24);
            io.emit('live-update', { message: 'New event added', data });
            return { status: true, data };
        } catch (error) {
            console.error(`CustomerServices fetch Details -> `, error);
            throw error;
        }
    }

    async getActiveCustomer(io) {
        try {
            const data = await this.customerRepository.getLastCustomer();
            io.emit('live-update', { message: 'New event added', data });
            return { status: true, data };
        } catch (error) {
            console.error(`CustomerServices fetch Details -> `, error);
            throw error;
        }
    }

    async saveCustomerData(requestEvent, io) {
        try {
            const { store_id, customers_in: total_customer_in, customers_out: total_customer_out, time_stamp: event_time } = requestEvent;

            const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
            const time = event_time.replaceAll(".", ":"); // Convert time to HH:MM:SS format
            const dateTime = `${currentDate} ${time}`;

            const customerData = { store_id, total_customer_in, total_customer_out, event_time: dateTime };
            const data = await this.customerRepository.saveCustomer(customerData);           
            io.emit('live-update', { message: 'New event added', data });
            return { status: true, data };
        } catch (error) {
            console.error(`CustomerServices save event -> `, error);
            throw error;
        }
    }
}

module.exports = CustomerServices;
