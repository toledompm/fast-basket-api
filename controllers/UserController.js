const User = require('../models/User')
const connection = require('../services/mySql');
const queryRunner = require('../services/mySqlQuery');

class UserController {
    putUser = [
        (req,res,next) => {
            req.user = new User(req.body);
            req.sql = `INSERT INTO user (username,password_hash) VALUES ("${req.user.getUsername()}","${req.user.getPasswordHash()}")`

            next();
        },
        connection,
        queryRunner
    ];
    
    getUser = [
        (req,res,next) => {
            req.sql = `select * from user where user_id = ${req.params.id}`;
            
            next();
        },
        connection,
        queryRunner
    ]
}

module.exports = new UserController;