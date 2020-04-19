const User = require('../models/User')
const connection = require('../services/mySql');
const queryRunner = require('../services/mySqlQuery');

class UserController {
    postUser = [
        (req,res,next) => {
            req.user = new User(req.body);
            req.sql = `INSERT INTO user (username,password_hash) VALUES ("${req.user.getUsername()}","${req.user.getPasswordHash()}")`

            next();
        },
        connection,
        (req,res) => {
            req.connection.query(req.sql,(error,results) => {
                if(error) {
                    res.status(500).json(JSON.stringify(error));
                }
                else {
                    req.connection.query(`select user_id from user where username="${req.user.getUsername()}"`,(error,results) => {
                        if(error) {
                            res.status(500).json(JSON.stringify(error));
                        }
                        else {
                            res.status(200).json(JSON.stringify(results));
                        }                        
                    });
                }
            });
        }
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