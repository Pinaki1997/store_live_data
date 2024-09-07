const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define("customer", {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            comment: "Primary key, auto-incrementing identifier."
        },
        store_id: {
            type: Sequelize.INTEGER(10),
            comment: "Id of the store."
        },
        total_customer_in: {
            type: Sequelize.INTEGER(10),
            comment: "Total customer walks in of the store."
        },
        total_customer_out: {
            type: Sequelize.INTEGER(10),
            comment: "Total customer walks out of the store."
        },
        event_time: {
            type: Sequelize.STRING(20),
            allowNull: false,
            comment: "The time of event."
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
            comment: "The timestamp when the record was created in the database."
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
            comment: "The timestamp when the record was last updated in the database."
        }
    },
        {
            collate: 'utf8mb4_unicode_ci',
            timestamps: true,
        });
}