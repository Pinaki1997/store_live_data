const dotenv = require('dotenv');
dotenv.config();
dotenv.config({
    path: `./${process.env.NODE_ENV}.env`
});
module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        db: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        logging: process.env.DB_LOGGING,
        pool: {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        },
    }
}