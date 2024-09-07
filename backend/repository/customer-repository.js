const db = require('../models/index.js');
const { Sequelize } = require("sequelize");
const { Op } = require('sequelize');
const SqlRepository = require('./sql-repository.js');

class CustomerRepository extends SqlRepository {
    
    constructor() {
        super('Customer');
    }

    async getLastHourData(hours){
        const selectQuery = {
            attributes: [
                'store_id',
                [Sequelize.fn('SUM', Sequelize.col('total_customer_in')), 'total_in'],
                [Sequelize.fn('SUM', Sequelize.col('total_customer_out')), 'total_out'],
                [Sequelize.literal("DATE_FORMAT(event_time, '%Y-%m-%d %H:00:00')"), 'hour']
            ],
            where: {
                event_time: {
                    [Sequelize.Op.gt]: Sequelize.literal(`NOW() - INTERVAL ${hours} HOUR`)
                }
            },
            group: ['store_id', Sequelize.literal("DATE_FORMAT(event_time, '%Y-%m-%d %H:00:00')")],
            order: [Sequelize.literal('hour')]
        };
        
        return await super.fetchAll(selectQuery);
    }

    async saveCustomer(customerObj){
        return await super.create(customerObj);
    }

    async getLastCustomer(){
        const selectQuery = {
            order: [['id', 'DESC']]
        };
        
        return await super.fetchOne(selectQuery);
    }

}

module.exports = CustomerRepository;
