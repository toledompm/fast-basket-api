const mysql = require('mysql');

module.exports = (req,res,next) => {
    req.connection = mysql.createConnection({
        host: process.env.endpoint,
        user: process.env.usr,
        password: process.env.password,
        database: process.env.database,
        port:3306,
        insecureAuth:true
    });
    next();
}