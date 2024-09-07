const db = require('../models/index.js');

class SqlRepository {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async create(insertData) {
        try {
            const result = await db[this.tableName].create(insertData); // Inserting the data into the respective table
            return { status: true, data: result }; // Return success with the created record
        } catch (error) {
            console.error(`Sql Repository create() -> `, error);
            throw error;
        }
    }

    async fetchAll(selectQuery) {
        try {
            return await db[this.tableName].findAll(selectQuery);
        } catch (error) {
            console.error(`Sql Repository fetchAll() -> `, error);
            throw error;
        }
    }

    async fetchOne(selectQuery) {
        try {
            return await db[this.tableName].findOne(selectQuery);
        } catch (error) {
            console.error(`Sql Repository findOne() -> `, error);
            throw error;
        }
    }
}

module.exports = SqlRepository;
