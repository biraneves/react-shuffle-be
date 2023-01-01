module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
        host: process.env.DB_HOST,
        port: 3306,
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
        port: 3306,
        dialect: 'postgres',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};
