require('dotenv').config();

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'auth',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

db.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Database connection has been established.')
    }
});    

module.exports = db;