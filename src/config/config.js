require('dotenv').config();

module.exports = {
    development: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        url: process.env.DB_URL,
        port: 3306,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        url: process.env.DB_URL,
        port: 3306,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
