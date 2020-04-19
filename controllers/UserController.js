const User = require('../models/User')
const connection = require('../services/mySql');

class UserController {
    putUser = [
        (req,res,next) => {
            try {
                req.user = new User(req.body);
            } catch(error) {
                res.status(400).json(JSON.stringify(error));
            }
            req.sql = `INSERT INTO user (username,passwordHash) VALUES (${req.user.username},${req.user.passwordHash})`
            next();
        },
        connection,
        (req,res) => {
            req.connection.connect((error) => {
                if(error) {
                    res.status(500).json(JSON.stringify(error));
                }
                req.connection.query(req.sql, (error, results) => {
                    if(error) {
                        res.status(500).json(JSON.stringify(error));
                    }
                    res.json(JSON.stringify(results));
                });
            });
        }
    ];
}

module.exports = new UserController;