require('dotenv').config();

const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    database: 'auth',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

conn.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
        console.log(results);
    }
);