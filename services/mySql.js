const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req,res,next) => {

    req.connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    next();
}