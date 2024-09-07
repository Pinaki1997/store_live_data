//Database Connection Build
const CONFIG = require("../config")
const Sequelize = require("sequelize");

// Initialize Sequelize with database configurations
const sequelize = new Sequelize(CONFIG.database.db, CONFIG.database.user, CONFIG.database.password, {
  host: CONFIG.database.host,
  dialect: CONFIG.database.dialect,
  logging: CONFIG.database.logging == 'true',
  port: CONFIG.database.port,
  timezone: "+00:00",
  pool: {
    max: CONFIG.database.pool.max,
    min: CONFIG.database.pool.min,
    acquire: CONFIG.database.pool.acquire,
    idle: CONFIG.database.pool.idle
  }
});

// Initialize db object to hold Sequelize models
const db = { sequelize: sequelize };

// Define Sequelize models and associations
db.Customer = require("./customers-model")(sequelize)

module.exports = db;