const mysql = require('mysql2');
//importo mi archivo .env donde cargue los datos para crear la bd. Se los carga en .env por si es necesario que esa informacion no se muestre.
require('dotenv').config(); 
const pool = mysql.createPool(
    {
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        waitForConnections: "true",
        connectionLimit: 10,
        queueLimit: 0
    }
);

module.exports = {
    conn: pool.promise()
}