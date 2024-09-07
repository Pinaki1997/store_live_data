const CustomError = require("../utils/errors/CustomError");
const { RESPONSE_CODES, RESPONSES, RESPONSE_MESSAGES } = require("../utils/ResponseCodes");
const CustomerServices = require("../services/customer-services");
const customerServices = new CustomerServices();

class CustomerController {
    
    // Method to fetch details of a customer history
    async getCustomerHistory(req, res, next) {
        try {
            const io = req.app.locals.io;
            const { status, data } = await customerServices.getCustomerHistory(io);
            if (status) res.status(RESPONSE_CODES.SUCCESS).send({ ...RESPONSES.SUCCESS, data });
            else throw new CustomError(RESPONSE_CODES.BAD_REQUEST, RESPONSE_MESSAGES.SOMETHING_WENT_WRONG);
        } catch (error) {
            console.error(`CustomerController fetch Details ->`, error);
            next(error);
        }
    }

    // Method to fetch details of a customer history
    async getActiveCustomer(req, res, next) {
        try {
            const { status, data } = await customerServices.getActiveCustomer();
            if (status) res.status(RESPONSE_CODES.SUCCESS).send({ ...RESPONSES.SUCCESS, data });
            else throw new CustomError(RESPONSE_CODES.BAD_REQUEST, RESPONSE_MESSAGES.SOMETHING_WENT_WRONG);
        } catch (error) {
            console.error(`CustomerController get active customer ->`, error);
            next(error);
        }
    }


    // Method to fetch details of a customer history
    async saveCustomerData(req, res, next) {
        try {
            const io = req.app.locals.io;
            const { status, data } = await customerServices.saveCustomerData(req.body, io);
            if (status) res.status(RESPONSE_CODES.ACCEPTED).send({ ...RESPONSES.ACCEPTED, data });
            else throw new CustomError(RESPONSE_CODES.BAD_REQUEST, RESPONSE_MESSAGES.SOMETHING_WENT_WRONG);
        } catch (error) {
            console.error(`CustomerController save details ->`, error);
            next(error);
        }
    }
}

// Export an instance of the CustomerController class
module.exports = new CustomerController();